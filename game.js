/**
 * game.js — Test Incident Room v3.3
 * Shared Firebase leaderboard + speed-based scoring
 */
let leaderboardUnsubscribe = null;
const WRONG_ANSWER_REVIEW_DELAY = 6000;
const CORRECT_ANSWER_DELAY = 1800;
const TIMEOUT_REVIEW_DELAY = 4000;

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('tir_users') || '{}');
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem('tir_users', JSON.stringify(users));
}

async function saveScoreToCloud(entry) {
  const docId = `${entry.username}_${entry.difficulty}`;

  const ref = window.fs.doc(window.db, "leaderboard", docId);

  await window.fs.setDoc(ref, entry);
}

async function getLeaderboardFromCloud() {
  const q = window.fs.query(
    window.fs.collection(window.db, "leaderboard"),
    window.fs.orderBy("score", "desc"),
    window.fs.limit(100)
  );

  const snap = await window.fs.getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

let currentUser = null;

let score = 0;
let health = 100;
let streak = 0;
let gameSeconds = 0;

let selectedId = null;
let actionLock = false;
let gameEnded = false;

let difficulty = 'medium';
let timerPerIncident = 35;
let penaltyOnTimeout = 60;
let selectedDifficulty = 'medium';

function selectDifficulty(diff, el) {
  selectedDifficulty = diff;

  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.classList.remove('selected-diff');
  });

  el.classList.add('selected-diff');

  const label = diff.charAt(0).toUpperCase() + diff.slice(1);
  document.getElementById('selected-diff-name').textContent = label;
}

function startSelectedDifficulty() {
  startGame(selectedDifficulty);
}
const DIFF_SETTINGS = {
  easy: { sec: 60, pen: 30 },
  medium: { sec: 35, pen: 60 },
  hard: { sec: 18, pen: 100 }
};
const INCIDENT_POOLS = {
  easy: window.EASY_INCIDENTS || EASY_INCIDENTS,
  medium: window.MEDIUM_INCIDENTS || MEDIUM_INCIDENTS,
  hard: window.HARD_INCIDENTS || HARD_INCIDENTS
};
const resolvedSet = new Set();
const decisions = [];

let clockInterval = null;
let countdownInterval = null;
let incCountdown = 0;
let currentShuffled = [];
let ACTIVE_INCIDENTS = [];
const QUESTION_COUNT = 12;

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickRandomIncidents(pool, count) {
  return shuffleArray(pool).slice(0, count);
}
function handleURLParams() {
  const params = new URLSearchParams(window.location.search);
  const qrUser = params.get('user');
  if (!qrUser) return;

  const users = getUsers();
  const notice = document.getElementById('auth-notice');

  if (users[qrUser]) {
    switchAuthTab('login');
    document.getElementById('li-user').value = qrUser;
    document.getElementById('li-pass').focus();
    notice.textContent = 'Welcome back, ' + users[qrUser].displayName + '! Enter your password to continue.';
  } else {
    switchAuthTab('register');
    document.getElementById('rg-user').value = qrUser;
    document.getElementById('rg-name').focus();
    notice.textContent = 'New here? Fill in your details to create an account.';
  }

  notice.style.display = 'block';
  window.history.replaceState({}, '', window.location.pathname);
}

function switchAuthTab(tab) {
  document.getElementById('tab-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('tab-register').style.display = tab === 'register' ? 'block' : 'none';

  document.querySelectorAll('.auth-tab').forEach((el, i) => {
    el.classList.toggle('active', (tab === 'login' && i === 0) || (tab === 'register' && i === 1));
  });

  document.getElementById('li-err').style.display = 'none';
  document.getElementById('rg-err').style.display = 'none';
}

async function doRegister() {
  const name = document.getElementById('rg-name').value.trim();
  const user = document.getElementById('rg-user').value.trim().toLowerCase().replace(/\s/g,'');
  const pass = document.getElementById('rg-pass').value;
  const err  = document.getElementById('rg-err');

  err.style.display = 'none';

  if (!name || !user || !pass) {
    err.textContent = 'Please fill in all fields.';
    err.style.display = 'block';
    return;
  }

  if (pass.length < 6) {
    err.textContent = 'Password must be at least 6 characters.';
    err.style.display = 'block';
    return;
  }

  const email = user + "@testincidentroom.com";

  try {
    const cred = await window.authFns.createUserWithEmailAndPassword(window.auth, email, pass);

    await window.authFns.updateProfile(cred.user, {
      displayName: name
    });

    currentUser = {
      uid: cred.user.uid,
      username: user,
      displayName: name
    };

    afterLogin();

  } catch (e) {
    console.error(e);

    if (e.code === 'auth/email-already-in-use') {
      err.textContent = 'Username already exists.';
    } else {
      err.textContent = 'Registration failed.';
    }

    err.style.display = 'block';
  }
}

async function doLogin() {
  const user = document.getElementById('li-user').value.trim().toLowerCase();
  const pass = document.getElementById('li-pass').value;
  const err  = document.getElementById('li-err');

  err.style.display = 'none';

  if (!user || !pass) {
    err.textContent = 'Please fill in all fields.';
    err.style.display = 'block';
    return;
  }

  const email = user + "@testincidentroom.com";

  try {
    const cred = await window.authFns.signInWithEmailAndPassword(window.auth, email, pass);

    currentUser = {
      uid: cred.user.uid,
      username: user,
      displayName: cred.user.displayName || user
    };

    afterLogin();

  } catch (e) {
    console.error(e);
    err.textContent = 'Incorrect username or password.';
    err.style.display = 'block';
  }
}

function afterLogin() {
  localStorage.setItem('tir_current_user', JSON.stringify(currentUser));

  document.getElementById('intro-username').textContent =
    currentUser.displayName + ' (@' + currentUser.username + ')';

  showScreen('intro');
}

async function doLogout() {
  try {
    await window.authFns.signOut(window.auth);
  } catch {}
  localStorage.removeItem('tir_current_user');
  sessionStorage.removeItem('tir_last_screen');
  sessionStorage.removeItem('tir_game_state');
  currentUser = null;
  showScreen('auth');
  
}

async function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (currentUser && id !== 'auth') {
    sessionStorage.setItem('tir_last_screen', id);
  }

  if (id === 'leaderboard') {
    await renderLB();
  }
}

function startGame(diff) {
  difficulty = diff;
  timerPerIncident = DIFF_SETTINGS[diff].sec;
  penaltyOnTimeout = DIFF_SETTINGS[diff].pen;

  score = 0;
  health = 100;
  streak = 0;
  gameSeconds = 0;

  selectedId = null;
  actionLock = false;
  gameEnded = false;

  const pool = INCIDENT_POOLS[diff] || EASY_INCIDENTS;
  ACTIVE_INCIDENTS = pickRandomIncidents(pool, QUESTION_COUNT);

  resolvedSet.clear();
  decisions.length = 0;

  clearInterval(clockInterval);
  clearInterval(countdownInterval);

  showScreen('room');
  renderFeed();
  updateHUD();

  document.getElementById('h-time').textContent = '00:00';

  document.getElementById('logbox').innerHTML =
    `<div class="log-entry">
      <span class="log-time">00:00</span>
      <span style="color:var(--text-secondary)">Crisis room active — ${diff.toUpperCase()} mode.</span>
    </div>`;
  saveGameState();
  clockInterval = setInterval(() => {
    gameSeconds++;
    document.getElementById('h-time').textContent = formatSeconds(gameSeconds);
    saveGameState();
  }, 1000);
}

function renderFeed() {
  const feed = document.getElementById('feed');
  const remaining = ACTIVE_INCIDENTS.filter(i => !resolvedSet.has(i.id));

  if (remaining.length === 0) {
    feed.innerHTML =
      `<div style="text-align:center;padding:28px;color:var(--text-secondary);font-size:14px;">All incidents resolved!</div>`;
    setTimeout(() => endGame(), 900);
    return;
  }

  feed.innerHTML = '';

  remaining.forEach(inc => {
    const div = document.createElement('div');
    div.className = 'incident';
    div.onclick = () => selectIncident(inc.id);
    div.innerHTML = `
      <div class="incident-header">
        <span class="tag ${inc.tag}">${inc.tl}</span>
      </div>
      <div class="inc-title">${inc.title}</div>
      <div class="inc-desc">${inc.desc}</div>
      <div class="inc-cta">Tap to decide →</div>`;
    feed.appendChild(div);
  });
}

function selectIncident(id) {
  if (actionLock || gameEnded) return;

  clearInterval(countdownInterval);
  selectedId = id;

  const inc = ACTIVE_INCIDENTS.find(i => i.id === id);
  currentShuffled = shuffleArray(inc.actions);

  document.getElementById('modal-title').textContent = inc.title;
  document.getElementById('modal-tag').className = 'tag ' + inc.tag;
  document.getElementById('modal-tag').textContent = inc.tl;
  document.getElementById('modal-desc').textContent = inc.desc;
  document.getElementById('modal-fb').style.display = 'none';

  const timerPill = document.getElementById('modal-timer');
  timerPill.textContent = timerPerIncident + 's';
  timerPill.className = 'countdown';

  const grid = document.getElementById('modal-grid');
  grid.innerHTML = '';

  currentShuffled.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.innerHTML = `<div class="action-lbl">${a.l}</div><div class="action-sub">${a.s}</div>`;
    btn.onclick = () => resolveAction(id, i);
    grid.appendChild(btn);
  });

  openModal();

  incCountdown = timerPerIncident;

  countdownInterval = setInterval(() => {
    incCountdown--;

    const pill = document.getElementById('modal-timer');

    if (pill) {
      pill.textContent = incCountdown + 's';
      pill.className = 'countdown' + (incCountdown <= 5 ? ' urgent' : '');
    }

    if (incCountdown <= 0) {
      clearInterval(countdownInterval);
      timeoutIncident(id);
    }
  }, 1000);
}

function openModal() {
  document.getElementById('decision-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('decision-modal').classList.remove('open');
  document.body.style.overflow = '';
  selectedId = null;
}

function timeoutIncident(id) {
  if (actionLock || gameEnded) return;

  actionLock = true;

  const inc = ACTIVE_INCIDENTS.find(i => i.id === id);

  score = Math.max(0, score - penaltyOnTimeout);
  health = Math.max(0, health - Math.round(penaltyOnTimeout / 3));
  streak = 0;

  resolvedSet.add(id);

  decisions.push({
    title: inc.title,
    action: 'TIMED OUT',
    correct: false,
    points: -penaltyOnTimeout,
    responseTime: timerPerIncident
  });

  addLog(getTimeStr(), 'TIMEOUT: ' + inc.title.substring(0, 30) + '...', false);
  updateHUD();

  showModalFeedback(false, `Time's up! −${penaltyOnTimeout} points.`);

  setTimeout(() => {
    actionLock = false;
    closeModal();
    renderFeed();

    if (resolvedSet.size >= ACTIVE_INCIDENTS.length) endGame();
  }, TIMEOUT_REVIEW_DELAY);
}

function resolveAction(incId, shuffledIdx) {
  if (actionLock || gameEnded) return;

  clearInterval(countdownInterval);
  actionLock = true;

  const inc = ACTIVE_INCIDENTS.find(i => i.id === incId);
  const action = currentShuffled[shuffledIdx];
  const grid = document.getElementById('modal-grid');

  Array.from(grid.children).forEach((btn, i) => {
    btn.disabled = true;
    if (currentShuffled[i].c) btn.classList.add('correct');
    if (i === shuffledIdx && !action.c) btn.classList.add('wrong');
  });

  const responseTime = timerPerIncident - incCountdown;

  let pts = action.p;
  let speedBonus = 0;

  if (action.c) {
    speedBonus = Math.max(0, Math.round((incCountdown / timerPerIncident) * 50));
    pts += speedBonus;
    streak++;
  } else {
    streak = 0;
  }

  score = Math.max(0, score + pts);

  if (!action.c && pts < 0) {
    health = Math.max(0, health + Math.round(pts / 3));
  }

  resolvedSet.add(incId);

  decisions.push({
    title: inc.title,
    action: action.l,
    correct: action.c,
    points: pts,
    responseTime,
    speedBonus
  });

  addLog(
    getTimeStr(),
    (action.c ? 'OK' : 'ERR') + ' — ' + inc.title.substring(0, 28) + '...',
    action.c
  );

  updateHUD();
  saveGameState();
  let fb = action.f;

  if (action.c && speedBonus > 0) {
    fb += ` [Speed bonus: +${speedBonus}]`;
  }

  if (action.c && streak >= 3) {
    fb += ` [STREAK BONUS: ${streak}x in a row!]`;
  }

  showModalFeedback(action.c, fb);

  const reviewDelay = action.c ? CORRECT_ANSWER_DELAY : WRONG_ANSWER_REVIEW_DELAY;

  setTimeout(() => {
    actionLock = false;
    closeModal();
    renderFeed();

    if (resolvedSet.size >= ACTIVE_INCIDENTS.length) endGame();
  }, reviewDelay);
}

function updateHUD() {
  document.getElementById('h-score').textContent = score;
  document.getElementById('h-resolved').textContent =
    resolvedSet.size + '/' + ACTIVE_INCIDENTS.length;
  document.getElementById('h-health').textContent = health;
  document.getElementById('h-streak').textContent = streak;
  document.getElementById('prog').style.width =
    Math.round(resolvedSet.size / ACTIVE_INCIDENTS.length * 100) + '%';
}

function getTimeStr() {
  return formatSeconds(gameSeconds);
}

function formatSeconds(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function saveGameState() {
  sessionStorage.setItem('tir_game_state', JSON.stringify({
    score,
    health,
    streak,
    gameSeconds,
    difficulty,
    resolvedIds: Array.from(resolvedSet),
    decisions
  }));
}

function restoreGameState() {
  const saved = sessionStorage.getItem('tir_game_state');
  if (!saved) return false;

  try {
    const state = JSON.parse(saved);

    score = state.score || 0;
    health = state.health || 100;
    streak = state.streak || 0;
    gameSeconds = state.gameSeconds || 0;
    difficulty = state.difficulty || 'medium';

    timerPerIncident = DIFF_SETTINGS[difficulty].sec;
    penaltyOnTimeout = DIFF_SETTINGS[difficulty].pen;

    resolvedSet.clear();
    (state.resolvedIds || []).forEach(id => resolvedSet.add(id));

    decisions.length = 0;
    (state.decisions || []).forEach(d => decisions.push(d));

    showScreen('room');
    renderFeed();
    updateHUD();

    document.getElementById('h-time').textContent = formatSeconds(gameSeconds);

    if (!document.getElementById('logbox').innerHTML.trim()) {
      document.getElementById('logbox').innerHTML =
        `<div class="log-entry">
          <span class="log-time">${formatSeconds(gameSeconds)}</span>
          <span style="color:var(--text-secondary)">Session restored.</span>
        </div>`;
    }

    clearInterval(clockInterval);
    clockInterval = setInterval(() => {
      gameSeconds++;
      document.getElementById('h-time').textContent = formatSeconds(gameSeconds);
      saveGameState();
    }, 1000);

    return true;
  } catch {
    sessionStorage.removeItem('tir_game_state');
    return false;
  }
}

function addLog(time, msg, ok) {
  const logbox = document.getElementById('logbox');
  const entry = document.createElement('div');

  entry.className = 'log-entry';
  entry.innerHTML =
    `<span class="log-time">${time}</span>
     <span class="${ok ? 'log-ok' : 'log-bad'}">${ok ? '✓' : '✗'} ${msg}</span>`;

  logbox.appendChild(entry);
  logbox.scrollTop = logbox.scrollHeight;
}

function showModalFeedback(ok, msg) {
  const fb = document.getElementById('modal-fb');
  fb.className = 'fb ' + (ok ? 'ok' : 'bad');
  fb.textContent = msg;
  fb.style.display = 'block';
}

async function endGame() {
  if (gameEnded) return;
  gameEnded = true;

  clearInterval(clockInterval);
  sessionStorage.removeItem('tir_game_state');
  clearInterval(countdownInterval);

  const correct = decisions.filter(d => d.correct).length;
  const pct = correct / ACTIVE_INCIDENTS.length;

  let grade, icon, title, msg;

  if (pct >= 0.83 && health >= 70) {
    grade = 'A+';
    icon = '★';
    title = 'Outstanding Test Manager';
    msg = 'You applied ISO 29119-2 successfully. The project was released safely.';
  } else if (pct >= 0.67 && health >= 50) {
    grade = 'A';
    icon = '✓';
    title = 'Successful Crisis Management';
    msg = 'You applied the standard processes well.';
  } else if (pct >= 0.50 && health >= 30) {
    grade = 'B';
    icon = '~';
    title = 'Room for Growth';
    msg = 'Some critical decisions were wrong. Try again!';
  } else {
    grade = 'C';
    icon = '!';
    title = 'Review the Standard';
    msg = 'Too many wrong decisions put the project at risk.';
  }

  if (currentUser) {
    const ts = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });

    try {
      await saveScoreToCloud({
        uid: currentUser.uid,
        username: currentUser.username,
        displayName: currentUser.displayName,
        score,
        grade,
        difficulty,
        correct,
        health,
        time: ts,
        totalSeconds: gameSeconds,
        totalTime: formatSeconds(gameSeconds),
        createdAt: Date.now()
      });
    } catch (err) {
      console.error('Firebase score save failed:', err);
      alert('Score could not be saved to the shared leaderboard. Check Firebase rules.');
    }
  }

  await showScreen('result');

  document.getElementById('r-icon').textContent = icon;
  document.getElementById('r-title').textContent = title;
  document.getElementById('r-msg').textContent = msg;
  document.getElementById('r-score').textContent = score;
  document.getElementById('r-correct').textContent =
    correct + '/' + ACTIVE_INCIDENTS.length;
  document.getElementById('r-health').textContent = health;
  document.getElementById('r-grade').textContent = grade;

  document.getElementById('r-breakdown').innerHTML = decisions.map(d => `
    <div class="breakdown-row">
      <div class="breakdown-title">${d.title}</div>
      <div class="breakdown-pts ${d.correct ? 'pts-ok' : 'pts-bad'}">
        ${d.points > 0 ? '+' : ''}${d.points}
      </div>
    </div>
  `).join('');

  
}

async function renderLB() {
  const easyDiv = document.getElementById('lb-easy');
  const mediumDiv = document.getElementById('lb-medium');
  const hardDiv = document.getElementById('lb-hard');

  easyDiv.innerHTML = 'Loading...';
  mediumDiv.innerHTML = 'Loading...';
  hardDiv.innerHTML = 'Loading...';

  if (leaderboardUnsubscribe) {
    leaderboardUnsubscribe();
    leaderboardUnsubscribe = null;
  }

  const q = window.fs.query(
    window.fs.collection(window.db, "leaderboard"),
    window.fs.orderBy("score", "desc"),
    window.fs.limit(100)
  );

  leaderboardUnsubscribe = window.fs.onSnapshot(q, (snap) => {
    const lb = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    const sortList = list => list.sort((a, b) => {
      if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
      return (a.totalSeconds || 999999) - (b.totalSeconds || 999999);
    });

    const easy = sortList(lb.filter(e => e.difficulty === 'easy'));
    const medium = sortList(lb.filter(e => e.difficulty === 'medium'));
    const hard = sortList(lb.filter(e => e.difficulty === 'hard'));

    easyDiv.innerHTML = renderLeaderboardList(easy);
    mediumDiv.innerHTML = renderLeaderboardList(medium);
    hardDiv.innerHTML = renderLeaderboardList(hard);
  }, (err) => {
    console.error('Realtime leaderboard failed:', err);
    easyDiv.innerHTML = 'Leaderboard error';
    mediumDiv.innerHTML = 'Leaderboard error';
    hardDiv.innerHTML = 'Leaderboard error';
  });
}

function renderLeaderboardList(list) {
  if (!list.length) {
    return `<div style="text-align:center;color:var(--text-secondary);font-size:13px;">No data</div>`;
  }

  return list.slice(0, 10).map((e, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1;
    const isMe = currentUser && e.username === currentUser.username;

    return `
      <div class="lb-row ${isMe ? 'me' : ''}">
        <div class="lb-rank">${medal}</div>
        <div style="flex:1">
          <div class="lb-name">
            ${e.displayName || e.username}
            ${isMe ? '<span class="me-tag">(you)</span>' : ''}
          </div>
          <div class="lb-meta">
            ${e.correct}/12 correct · Health: ${e.health} · Time: ${e.totalTime || '-'}
          </div>
        </div>
        <div>
          <div class="lb-score">${e.score}</div>
          <div class="lb-grade">${e.grade}</div>
        </div>
      </div>
    `;
  }).join('');
}
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('tir_current_user');

  if (saved) {
    try {
      currentUser = JSON.parse(saved);

      document.getElementById('intro-username').textContent =
        currentUser.displayName + ' (@' + currentUser.username + ')';

      //if (restoreGameState()) return;

      const lastScreen = sessionStorage.getItem('tir_last_screen') || 'intro';
      showScreen(document.getElementById(lastScreen) ? lastScreen : 'intro');
      return;
    } catch {
      localStorage.removeItem('tir_current_user');
      sessionStorage.removeItem('tir_last_screen');
      sessionStorage.removeItem('tir_game_state');
    }
  }

  handleURLParams();
});