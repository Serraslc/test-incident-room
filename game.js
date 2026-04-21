/**

* game.js — FIXED VERSION
* ISO/IEC/IEEE 29119-2 Test Processes Educational Game
  */

function getUsers() {
try { return JSON.parse(localStorage.getItem('tir_users') || '{}'); } catch { return {}; }
}
function saveUsers(u) { localStorage.setItem('tir_users', JSON.stringify(u)); }

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

// STATE
let currentUser = null;
let score = 0, health = 100, streak = 0, gameSeconds = 0;
let selectedId = null, actionLock = false;
let difficulty = 'medium', timerPerIncident = 35, penaltyOnTimeout = 60;

const DIFF_SETTINGS = {
easy:{sec:60,pen:30},
medium:{sec:35,pen:60},
hard:{sec:18,pen:100}
};

const resolvedSet = new Set();
const decisions = [];

let clockInterval = null, countdownInterval = null, incCountdown = 0;
let currentShuffled = [];

// ================= GAME START =================

function startGame(diff) {
difficulty = diff;
timerPerIncident = DIFF_SETTINGS[diff].sec;
penaltyOnTimeout = DIFF_SETTINGS[diff].pen;

score = 0;
health = 100;
streak = 0;
gameSeconds = 0; // ✅ FIX

selectedId = null;
actionLock = false;

resolvedSet.clear();
decisions.length = 0;

clearInterval(clockInterval);
clearInterval(countdownInterval);

showScreen('room');
renderFeed();
updateHUD();

clockInterval = setInterval(() => {
gameSeconds++;

```
const m = Math.floor(gameSeconds / 60);
const s = gameSeconds % 60;

document.getElementById('h-time').textContent =
  `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
```

}, 1000);
}

// ================= TIMER =================

function getTimeStr() {
const m = Math.floor(gameSeconds / 60);
const s = gameSeconds % 60;
return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ================= LEADERBOARD =================

async function renderLB() {
const filter = document.getElementById('lb-filter').value;

let lb = await getLeaderboardFromCloud(); // ✅ FIX

if (filter !== 'all') {
lb = lb.filter(e => e.difficulty === filter);
}

const medals = ['gold','silver','bronze'];

if (lb.length === 0) {
document.getElementById('lb-list').innerHTML =
`<div style="text-align:center;padding:20px;font-size:13px;color:var(--text-secondary)">
        No entries yet. Be the first to play!       </div>`;
return;
}

document.getElementById('lb-list').innerHTML = lb.map((e,i)=>{
const isMe = currentUser && e.username === currentUser.username;

```
return `
<div class="lb-row ${medals[i]||''} ${isMe?'me':''}">
  <div class="lb-rank">${i+1}</div>
  <div style="flex:1">
    <div class="lb-name">
      ${e.displayName || e.username}
      ${isMe ? '<span class="me-tag">(you)</span>' : ''}
    </div>
    <div class="lb-meta">
      ${e.difficulty} · ${e.correct}/12 correct · Health: ${e.health} · ${e.time}
    </div>
  </div>
  <div>
    <div class="lb-score">${e.score}</div>
    <div class="lb-grade">${e.grade}</div>
  </div>
</div>`;
```

}).join('');
}

// ================= END GAME =================

async function endGame() {
clearInterval(clockInterval);
clearInterval(countdownInterval);

const correct = decisions.filter(d => d.correct).length;

let grade = "C";
if (correct >= 10) grade = "A+";
else if (correct >= 8) grade = "A";
else if (correct >= 6) grade = "B";

if (currentUser) {
const ts = getTimeStr();

```
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
```

}

showScreen('result');

document.getElementById('r-score').textContent = score;
document.getElementById('r-correct').textContent = correct;
document.getElementById('r-health').textContent = health;
document.getElementById('r-grade').textContent = grade;
}

// ================= UI =================

function showScreen(id) {
document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
document.getElementById(id).classList.add('active');

if (id === 'leaderboard') {
renderLB(); // async ama sorun değil
}
}
