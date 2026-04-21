/**
 * game.js — Test Incident Room v3.2
 * ISO/IEC/IEEE 29119-2 Test Processes Educational Game
 */

function getUsers() {
  try { return JSON.parse(localStorage.getItem('tir_users') || '{}'); }
  catch { return {}; }
}

function saveUsers(u) {
  localStorage.setItem('tir_users', JSON.stringify(u));
}

async function saveScoreToCloud(entry) {
  await window.fs.addDoc(
    window.fs.collection(window.db, "leaderboard"),
    entry
  );
}

async function getLeaderboardFromCloud() {
  const q = window.fs.query(
    window.fs.collection(window.db, "leaderboard"),
    window.fs.orderBy("score", "desc"),
    window.fs.limit(30)
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

let difficulty = 'medium';
let timerPerIncident = 35;
let penaltyOnTimeout = 60;

const DIFF_SETTINGS = {
  easy:   { sec: 60, pen: 30 },
  medium: { sec: 35, pen: 60 },
  hard:   { sec: 18, pen: 100 }
};

const resolvedSet = new Set();
const decisions = [];

let clockInterval = null;
let countdownInterval = null;
let incCountdown = 0;
let currentShuffled = [];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
    notice.textContent =
      'Welcome back, ' + users[qrUser].displayName + '! Enter your password to continue.';
  } else {
    switchAuthTab('register');
    document.getElementById('rg-user').value = qrUser;
    document.getElementById('rg-name').focus();
    notice.textContent =
      'New here? Fill in your details to create an account.';
  }

  notice.style.display = 'block';
  window.history.replaceState({}, '', window.location.pathname);
}

function switchAuthTab(tab) {
  document.getElementById('tab-login').style.display =
    tab === 'login' ? 'block' : 'none';
  document.getElementById('tab-register').style.display =
    tab === 'register' ? 'block' : 'none';

  document.querySelectorAll('.auth-tab').forEach((el, i) => {
    el.classList.toggle('active',
      (tab === 'login' && i === 0) || (tab === 'register' && i === 1)
    );
  });

  document.getElementById('li-err').style.display = 'none';
  document.getElementById('rg-err').style.display = 'none';
}

function doRegister() {
  const name = document.getElementById('rg-name').value.trim();
  const user = document.getElementById('rg-user').value.trim().toLowerCase().replace(/\s/g, '');
  const pass = document.getElementById('rg-pass').value;
  const err = document.getElementById('rg-err');

  err.style.display = 'none';

  if (!name || !user || !pass) {
    err.textContent = 'Please fill in all fields.';
    err.style.display = 'block';
    return;
  }

  if (pass.length < 4) {
    err.textContent = 'Password must be at least 4 characters.';
    err.style.display = 'block';
    return;
  }

  if (!/^[a-z0-9_]+$/.test(user)) {
    err.textContent = 'Username: letters, numbers, underscores only.';
    err.style.display = 'block';
    return;
  }

  const users = getUsers();
  if (users[user]) {
    err.textContent = 'Username already taken.';
    err.style.display = 'block';
    return;
  }

  users[user] = { displayName: name, password: pass };
  saveUsers(users);
  currentUser = { username: user, displayName: name };
  afterLogin();
}

function doLogin() {
  const user = document.getElementById('li-user').value.trim().toLowerCase();
  const pass = document.getElementById('li-pass').value;
  const err = document.getElementById('li-err');

  err.style.display = 'none';

  if (!user || !pass) {
    err.textContent = 'Please fill in all fields.';
    err.style.display = 'block';
    return;
  }

  const users = getUsers();
  if (!users[user] || users[user].password !== pass) {
    err.textContent = 'Incorrect username or password.';
    err.style.display = 'block';
    return;
  }

  currentUser = { username: user, displayName: users[user].displayName };
  afterLogin();
}

function afterLogin() {
  document.getElementById('intro-username').textContent =
    currentUser.displayName + '  (@' + currentUser.username + ')';
  showScreen('intro');
}

function doLogout() {
  currentUser = null;
  showScreen('auth');
}

async function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

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

  clockInterval = setInterval(() => {
    gameSeconds++;
    const m = Math.floor(gameSeconds / 60);
    const s = gameSeconds % 60;
    document.getElementById('h-time').textContent =
      `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

function renderFeed() {
  const feed = document.getElementById('feed');
  const remaining = ALL_INCIDENTS.filter(i => !resolvedSet.has(i.id));

  if (remaining.length === 0) {
    feed.innerHTML =
      `<div style="text-align:center;padding:28px;color:var(--text-secondary);font-size:14px;">All incidents resolved!</div>`;
    setTimeout(() => endGame(), 1200);
    return;
  }

  feed.innerHTML = '';

  remaining.forEach(inc => {
    const div = document.createElement('div');
    div.className = 'incident';
    div.onclick = () => selectIncident(inc.id);
    div.innerHTML = `
      <div class="incident-header"><span class="tag ${inc.tag}">${inc.tl}</span></div>
      <div class="inc-title">${inc.title}</div>
      <div class="inc-desc">${inc.desc}</div>
      <div class="inc-cta">Tap to decide →</div>`;
    feed.appendChild(div);
  });
}

function selectIncident(id) {
  if (actionLock) return;

  clearInterval(countdownInterval);
  selectedId = id;

  const inc = ALL_INCIDENTS.find(i => i.id === id);
  currentShuffled = shuffleArray(inc.actions);

  const titleEl = document.getElementById('modal-title');
  titleEl.innerHTML = '';
  titleEl.appendChild(document.createTextNode(inc.title));

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
  if (actionLock) return;

  actionLock = true;
  const inc = ALL_INCIDENTS.find(i => i.id === id);

  score = Math.max(0, score - penaltyOnTimeout);
  health = Math.max(0, health - Math.round(penaltyOnTimeout / 3));
  streak = 0;

  resolvedSet.add(id);
  decisions.push({
    title: inc.title,
    action: 'TIMED OUT',
    correct: false,
    points: -penaltyOnTimeout
  });

  addLog(getTimeStr(), 'TIMEOUT: ' + inc.title.substring(0, 30) + '...', false);
  updateHUD();
  showModalFeedback(false, `Time's up! −${penaltyOnTimeout} points. You must make a decision.`);

  setTimeout(() => {
    actionLock = false;
    closeModal();
    renderFeed();
    if (resolvedSet.size >= ALL_INCIDENTS.length) endGame();
  }, 2000);
}

function resolveAction(incId, shuffledIdx) {
  if (actionLock) return;

  clearInterval(countdownInterval);
  actionLock = true;

  const inc = ALL_INCIDENTS.find(i => i.id === incId);
  const action = currentShuffled[shuffledIdx];
  const grid = document.getElementById('modal-grid');

  Array.from(grid.children).forEach((btn, i) => {
    btn.disabled = true;
    if (currentShuffled[i].c) btn.classList.add('correct');
    if (i === shuffledIdx && !action.c) btn.classList.add('wrong');
  });

  let pts = action.p;

  if (action.c) {
    const speedBonus = Math.max(0, Math.round((incCountdown / timerPerIncident) * 50));
    pts += speedBonus;
  }

  score = Math.max(0, score + pts);

  if (pts < 0) {
    health = Math.max(0, health + Math.round(pts / 3));
    streak = 0;
  } else {
    streak++;
  }

  resolvedSet.add(incId);
  decisions.push({
    title: inc.title,
    action: action.l,
    correct: action.c,
    points: pts
  });

  addLog(getTimeStr(), (action.c ? 'OK' : 'ERR') + ' — ' + inc.title.substring(0, 28) + '...', action.c);
  updateHUD();

  let fb = action.f;
  if (streak >= 3) fb += ` [STREAK BONUS: ${streak}x in a row!]`;

  showModalFeedback(action.c, fb);

  setTimeout(() => {
    actionLock = false;
    closeModal();
    renderFeed();
    if (resolvedSet.size >= ALL_INCIDENTS.length) endGame();
  }, 2400);
}

function updateHUD() {
  document.getElementById('h-score').textContent = score;
  document.getElementById('h-resolved').textContent = resolvedSet.size + '/12';
  document.getElementById('h-health').textContent = health;
  document.getElementById('h-streak').textContent = streak;
  document.getElementById('prog').style.width =
    Math.round(resolvedSet.size / ALL_INCIDENTS.length * 100) + '%';
}

function getTimeStr() {
  const m = Math.floor(gameSeconds / 60);
  const s = gameSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function addLog(time, msg, ok) {
  const logbox = document.getElementById('logbox');
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML =
    `<span class="log-time">${time}</span><span class="${ok ? 'log-ok' : 'log-bad'}">${ok ? '✓' : '✗'} ${msg}</span>`;
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
  clearInterval(clockInterval);
  clearInterval(countdownInterval);

  const correct = decisions.filter(d => d.correct).length;
  const pct = correct / ALL_INCIDENTS.length;

  let grade, icon, title, msg;

  if (pct >= 0.83 && health >= 70) {
    grade = 'A+';
    icon = '★';
    title = 'Outstanding Test Manager';
    msg = 'You applied ISO 29119-2 flawlessly. The project was released safely.';
  } else if (pct >= 0.67 && health >= 50) {
    grade = 'A';
    icon = '✓';
    title = 'Successful Crisis Management';
    msg = 'You applied standard processes well — a few areas to improve.';
  } else if (pct >= 0.50 && health >= 30) {
    grade = 'B';
    icon = '~';
    title = 'Room for Growth';
    msg = 'Some critical decisions were wrong. Try again!';
  } else {
    grade = 'C';
    icon = '!';
    title = 'Review the Standard';
    msg = 'Too many wrong decisions put the project at risk. Re-read ISO 29119-2.';
  }

  if (currentUser) {
    const ts = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit'
    });

    await saveScoreToCloud({
      username: currentUser.username,
      displayName: currentUser.displayName,
      score,
      grade,
      difficulty,
      correct,
      health,
      time: ts,
      createdAt: Date.now()
    });
  }

  await showScreen('result');

  document.getElementById('r-icon').textContent = icon;
  document.getElementById('r-title').textContent = title;
  document.getElementById('r-msg').textContent = msg;
  document.getElementById('r-score').textContent = score;
  document.getElementById('r-correct').textContent = correct + '/12';
  document.getElementById('r-health').textContent = health;
  document.getElementById('r-grade').textContent = grade;

  document.getElementById('r-breakdown').innerHTML = decisions.map(d => `
    <div class="breakdown-row">
      <div class="breakdown-title">${d.title}</div>
      <div class="breakdown-pts ${d.correct ? 'pts-ok' : 'pts-bad'}">${d.points > 0 ? '+' : ''}${d.points}</div>
    </div>
  `).join('');

  setTimeout(() => {
    showScreen('leaderboard');
  }, 2500);
}

async function renderLB() {
  const filter = document.getElementById('lb-filter').value;
  let lb = await getLeaderboardFromCloud();

  if (filter !== 'all') {
    lb = lb.filter(e => e.difficulty === filter);
  }

  const medals = ['gold', 'silver', 'bronze'];

  if (lb.length === 0) {
    document.getElementById('lb-list').innerHTML =
      `<div style="text-align:center;padding:20px;font-size:13px;color:var(--text-secondary)">No entries yet. Be the first to play!</div>`;
    return;
  }

  document.getElementById('lb-list').innerHTML = lb.slice(0, 30).map((e, i) => {
    const isMe = currentUser && e.username === currentUser.username;
    return `<div class="lb-row ${medals[i] || ''} ${isMe ? 'me' : ''}">
      <div class="lb-rank">${i + 1}</div>
      <div style="flex:1">
        <div class="lb-name">${e.displayName || e.username}${isMe ? '<span class="me-tag">(you)</span>' : ''}</div>
        <div class="lb-meta">${e.difficulty} · ${e.correct}/12 correct · Health: ${e.health} · ${e.time}</div>
      </div>
      <div>
        <div class="lb-score">${e.score}</div>
        <div class="lb-grade">${e.grade}</div>
      </div>
    </div>`;
  }).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  handleURLParams();
});
