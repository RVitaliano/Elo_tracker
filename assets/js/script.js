// ─────────────────────────────────────────────────────────────
//  GAMES DATA
// ─────────────────────────────────────────────────────────────
const GAMES = [
  {
    id:'lol', name:'League of Legends', genre:'MOBA', cat:'moba',
    meta:'Diamante',
    ranks:[
      {n:'Ferro',p:5},{n:'Bronze',p:14},{n:'Prata',p:24},{n:'Ouro',p:24},
      {n:'Platina',p:14},{n:'Esmeralda',p:10},{n:'Diamante',p:5},
      {n:'Mestre',p:0.7},{n:'Grão-Mestre',p:0.1},{n:'Desafiante',p:0.02}
    ]
  },
  {
    id:'valorant', name:'Valorant', genre:'FPS Tático', cat:'fps',
    meta:'Ascendente',
    ranks:[
      {n:'Ferro',p:8},{n:'Bronze',p:18},{n:'Prata',p:24},{n:'Ouro',p:21},
      {n:'Platina',p:14},{n:'Diamante',p:8},{n:'Ascendente',p:4},
      {n:'Imortal',p:1.5},{n:'Radiante',p:0.04}
    ]
  },
  {
    id:'dota2', name:'Dota 2', genre:'MOBA', cat:'moba',
    meta:'Ancient',
    ranks:[
      {n:'Herald',p:15},{n:'Guardian',p:19},{n:'Crusader',p:20},
      {n:'Archon',p:19},{n:'Legend',p:14},{n:'Ancient',p:8},
      {n:'Divine',p:3},{n:'Immortal',p:1}
    ]
  },
  {
    id:'ow2', name:'Overwatch 2', genre:'Hero Shooter', cat:'hero-shooter',
    meta:'Mestre',
    ranks:[
      {n:'Bronze',p:10},{n:'Prata',p:21},{n:'Ouro',p:30},{n:'Platina',p:22},
      {n:'Diamante',p:10},{n:'Mestre',p:4},{n:'Grão-Mestre',p:1},{n:'Top 500',p:0.1}
    ]
  },
  {
    id:'rivals', name:'Marvel Rivals', genre:'Hero Shooter', cat:'hero-shooter',
    meta:'Diamante',
    ranks:[
      {n:'Bronze',p:16},{n:'Prata',p:22},{n:'Ouro',p:28},{n:'Platina',p:19},
      {n:'Diamante',p:10},{n:'Místico',p:3},{n:'Único',p:1},{n:'Eterno',p:0.1}
    ]
  },
  {
    id:'cs2', name:'CS2', genre:'FPS Tático', cat:'fps',
    meta:'DMG',
    ranks:[
      {n:'Prata I-IV',p:18},{n:'Silver Elite',p:10},{n:'Silver Elite Master',p:9},
      {n:'Gold Nova I-III',p:22},{n:'Gold Nova Master',p:8},{n:'MG1',p:8},
      {n:'MG2',p:7},{n:'MGE',p:6},{n:'DMG',p:5},{n:'AK/LEM',p:4},
      {n:'Supreme',p:2},{n:'Global Elite',p:0.75}
    ]
  },
  {
    id:'apex', name:'Apex Legends', genre:'Battle Royale', cat:'br',
    meta:'Diamante',
    ranks:[
      {n:'Bronze',p:18},{n:'Prata',p:29},{n:'Ouro',p:30},{n:'Platina',p:14},
      {n:'Diamante',p:6},{n:'Mestre',p:2},{n:'Predador',p:0.2}
    ]
  },
  {
    id:'r6', name:'Rainbow Six Siege', genre:'FPS Tático', cat:'fps',
    meta:'Diamante',
    ranks:[
      {n:'Cobre',p:8},{n:'Bronze',p:15},{n:'Prata',p:24},{n:'Ouro',p:27},
      {n:'Platina',p:16},{n:'Esmeralda',p:6},{n:'Diamante',p:3},{n:'Campeão',p:0.5}
    ]
  },
  {
    id:'rl', name:'Rocket League', genre:'Esporte', cat:'esporte',
    meta:'Grand Champion',
    ranks:[
      {n:'Bronze',p:10},{n:'Prata',p:17},{n:'Ouro',p:21},{n:'Platina',p:20},
      {n:'Diamante',p:16},{n:'Champion',p:10},{n:'Grand Champion',p:4},
      {n:'Supersonic Legend',p:0.5}
    ]
  },
  {
    id:'smite2', name:'Smite 2', genre:'MOBA', cat:'moba',
    meta:'Diamante',
    ranks:[
      {n:'Bronze',p:18},{n:'Prata',p:25},{n:'Ouro',p:27},{n:'Platina',p:17},
      {n:'Diamante',p:9},{n:'Mestre',p:3},{n:'Grão-Mestre',p:0.5}
    ]
  },
  {
    id:'finals', name:'The Finals', genre:'FPS', cat:'fps',
    meta:'Platina',
    ranks:[
      {n:'Bronze',p:20},{n:'Prata',p:28},{n:'Ouro',p:26},{n:'Platina',p:16},
      {n:'Diamante',p:7},{n:'Ruby',p:2},{n:'World Tour',p:0.5}
    ]
  },
  {
    id:'tft', name:'TFT', genre:'Auto Battler', cat:'other',
    meta:'Diamante',
    ranks:[
      {n:'Ferro',p:5},{n:'Bronze',p:14},{n:'Prata',p:24},{n:'Ouro',p:25},
      {n:'Platina',p:15},{n:'Esmeralda',p:10},{n:'Diamante',p:5},
      {n:'Mestre',p:1},{n:'Grão-Mestre',p:0.2},{n:'Desafiante',p:0.02}
    ]
  },
  {
    id:'sf6', name:'Street Fighter 6', genre:'Jogo de Luta', cat:'luta',
    meta:'Master',
    ranks:[
      {n:'Rookie',p:9},{n:'Iron',p:17},{n:'Bronze',p:16},{n:'Silver',p:21},
      {n:'Gold',p:16},{n:'Platinum',p:16},{n:'Diamond',p:3},{n:'Master',p:0.5}
    ]
  },
  {
    id:'ggst', name:'Guilty Gear Strive', genre:'Jogo de Luta', cat:'luta',
    meta:'Celestial',
    ranks:[
      {n:'Floor 1-4',p:20},{n:'Floor 5-7',p:30},{n:'Floor 8',p:20},
      {n:'Floor 9',p:15},{n:'Floor 10',p:10},{n:'Celestial',p:5}
    ]
  },
  {
    id:'tekken8', name:'Tekken 8', genre:'Jogo de Luta', cat:'luta',
    meta:'Fujin',
    ranks:[
      {n:'Beginner-1st Kyu',p:15},{n:'1st-5th Dan',p:18},
      {n:'Eliminator-Garyu',p:20},{n:'Shinryu',p:15},{n:'Tenryu',p:12},
      {n:'Mighty/Vanquisher',p:10},{n:'Warrior/Combatant',p:5},
      {n:'Brawler/Cavalry',p:3},{n:'Fujin',p:1.5},{n:'Raijin',p:0.7},
      {n:'Kishin+',p:0.3}
    ]
  },
  {
    id:'mk1', name:'Mortal Kombat 1', genre:'Jogo de Luta', cat:'luta',
    meta:'Demi-God',
    ranks:[
      {n:'Apprentice',p:20},{n:'Warrior',p:22},{n:'Champion',p:20},
      {n:'Elite',p:15},{n:'Master',p:12},{n:'Death God',p:7},
      {n:'Demi-God',p:3},{n:'God',p:0.8}
    ]
  },
  {
    id:'deadlock', name:'Deadlock', genre:'MOBA / FPS', cat:'moba',
    meta:'Avançado', note:'Ranked não oficial — meta provisória.',
    ranks:[
      {n:'Iniciante',p:15},{n:'Intermediário',p:25},{n:'Avançado',p:25},
      {n:'Alto',p:20},{n:'Topo',p:10},{n:'Elite',p:5}
    ]
  },

  // ── Battle Royale ──────────────────────────────────────────
  {
    id:'pubg', name:'PUBG', genre:'Battle Royale', cat:'br',
    meta:'Diamante',
    ranks:[
      {n:'Bronze',p:20},{n:'Prata',p:25},{n:'Ouro',p:22},{n:'Platina',p:16},
      {n:'Diamante',p:10},{n:'Mestre',p:5},{n:'Top 500',p:0.5}
    ]
  },
  {
    id:'fortnite', name:'Fortnite', genre:'Battle Royale', cat:'br',
    meta:'Elite',
    ranks:[
      {n:'Bronze',p:18},{n:'Prata',p:22},{n:'Ouro',p:20},{n:'Platina',p:18},
      {n:'Diamante',p:12},{n:'Elite',p:6},{n:'Champion',p:3},{n:'Unreal',p:0.5}
    ]
  },

  // ── Corrida / Simulação ────────────────────────────────────
  {
    id:'acc', name:'Assetto Corsa Competizione', genre:'Simulação', cat:'corrida',
    meta:'Ouro',
    ranks:[
      {n:'Bronze',p:35},{n:'Prata',p:28},{n:'Ouro',p:20},
      {n:'Platina',p:12},{n:'Elite',p:5}
    ]
  },
  {
    id:'iracing', name:'iRacing', genre:'Simulação', cat:'corrida',
    meta:'Class B', note:'Base de players no cliente próprio, não no Steam.',
    ranks:[
      {n:'Rookie',p:25},{n:'Class D',p:28},{n:'Class C',p:22},
      {n:'Class B',p:14},{n:'Class A',p:7},{n:'Pro',p:3},{n:'Pro/WC',p:1}
    ]
  },

  // ── Outros ─────────────────────────────────────────────────
  {
    id:'osu', name:'Osu!', genre:'Rhythm Game', cat:'other',
    meta:'3000–5000pp', note:'Sistema por Performance Points, não elos tradicionais.',
    ranks:[
      {n:'Abaixo de 500pp',p:30},{n:'500–1000pp',p:22},{n:'1000–2000pp',p:18},
      {n:'2000–3000pp',p:12},{n:'3000–5000pp',p:10},{n:'5000–7000pp',p:5},
      {n:'7000–10000pp',p:2},{n:'10000pp+',p:1}
    ]
  }
];

// ─────────────────────────────────────────────────────────────
//  STATE / PERSISTENCE
// ─────────────────────────────────────────────────────────────
const SK = 'elotracker_v2';

function loadState() {
  try { return JSON.parse(localStorage.getItem(SK)) || {}; }
  catch { return {}; }
}

let S = loadState();

GAMES.forEach(g => {
  if (!S[g.id]) S[g.id] = { cur: g.ranks[0].n, meta: g.meta };
});
persist();

function persist() { localStorage.setItem(SK, JSON.stringify(S)); }

// ─────────────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────────────
function idx(game, name) { return game.ranks.findIndex(r => r.n === name); }

function isAchieved(game) {
  const ci = idx(game, S[game.id].cur);
  const mi = idx(game, S[game.id].meta);
  return ci >= 0 && mi >= 0 && ci >= mi;
}

function fmtPct(p) {
  if (p < 0.1) return p.toFixed(2) + '%';
  if (p < 1)   return p.toFixed(1) + '%';
  return p + '%';
}

// ─────────────────────────────────────────────────────────────
//  RENDER DISTRIBUTION
// ─────────────────────────────────────────────────────────────
function renderDist(game, container) {
  const cur  = S[game.id].cur;
  const meta = S[game.id].meta;
  const max  = Math.max(...game.ranks.map(r => r.p));

  container.innerHTML = game.ranks.map(r => {
    const isCur  = r.n === cur;
    const isMeta = r.n === meta;
    let cls = 'rank-row';
    if (isCur)  cls += ' cur';
    if (isMeta) cls += ' meta-r';

    return `<div class="${cls}">
      <div class="rank-label">${r.n}</div>
      <div class="bar-track"><div class="bar-fill" data-w="${(r.p / max) * 100}"></div></div>
      <div class="bar-pct">${fmtPct(r.p)}</div>
    </div>`;
  }).join('');

  requestAnimationFrame(() => requestAnimationFrame(() => {
    container.querySelectorAll('.bar-fill').forEach(b => {
      b.style.width = b.dataset.w + '%';
    });
  }));
}

// ─────────────────────────────────────────────────────────────
//  UPDATE SINGLE CARD
// ─────────────────────────────────────────────────────────────
function refreshCard(game) {
  const card = document.getElementById('card-' + game.id);
  if (!card) return;
  card.classList.toggle('achieved', isAchieved(game));

  const panel = card.querySelector('.dist-panel');
  if (panel && panel.classList.contains('open')) {
    renderDist(game, card.querySelector('.dist-bars'));
  }
}

// ─────────────────────────────────────────────────────────────
//  UPDATE PROGRESS BAR
// ─────────────────────────────────────────────────────────────
function refreshProgress() {
  const done  = GAMES.filter(isAchieved).length;
  const total = GAMES.length;
  document.getElementById('prog-text').textContent = done + ' / ' + total;
  document.getElementById('prog-bar').style.width  = (done / total * 100) + '%';
}

// ─────────────────────────────────────────────────────────────
//  BUILD SELECT OPTIONS
// ─────────────────────────────────────────────────────────────
function opts(ranks, selected) {
  return ranks.map(r =>
    `<option value="${r.n}"${r.n === selected ? ' selected' : ''}>${r.n}</option>`
  ).join('');
}

// ─────────────────────────────────────────────────────────────
//  BUILD CARD HTML
// ─────────────────────────────────────────────────────────────
function buildCard(game) {
  const gs  = S[game.id];
  const ach = isAchieved(game);
  const noteHtml = game.note
    ? `<div class="card-note">⚠ ${game.note}</div>` : '';

  return `
<div class="card${ach ? ' achieved' : ''}" id="card-${game.id}" data-cat="${game.cat}">
  <div class="card-head">
    <div>
      <div class="card-name">${game.name}</div>
      <div class="card-genre">${game.genre}</div>
    </div>
    <div class="badge">META ✓</div>
  </div>

  <div class="card-selects">
    <div class="sel-group">
      <label class="sel-label">Elo Atual</label>
      <select class="sel" data-id="${game.id}" data-t="cur">
        ${opts(game.ranks, gs.cur)}
      </select>
    </div>
    <div class="sel-group">
      <label class="sel-label">Meta</label>
      <select class="sel" data-id="${game.id}" data-t="meta">
        ${opts(game.ranks, gs.meta)}
      </select>
    </div>
  </div>

  <button class="btn-dist" data-id="${game.id}">
    <svg class="chevron" width="11" height="7" viewBox="0 0 11 7" fill="none">
      <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Ver Distribuição
  </button>

  <div class="dist-panel" id="dist-${game.id}">
    <div class="dist-inner">
      <div class="dist-header">
        <span>Distribuição de Players</span>
        <div class="dist-legend">
          <div class="legend-item">
            <div class="legend-dot" style="background:var(--green)"></div>
            <span style="color:var(--text-3)">Atual</span>
          </div>
          <div class="legend-item">
            <div class="legend-dot" style="background:var(--cyan)"></div>
            <span style="color:var(--text-3)">Meta</span>
          </div>
        </div>
      </div>
      <div class="dist-bars"></div>
    </div>
  </div>
  ${noteHtml}
</div>`;
}

// ─────────────────────────────────────────────────────────────
//  SECTIONS CONFIG
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { cat: 'moba',         label: 'MOBAs' },
  { cat: 'fps',          label: 'FPS Competitivo' },
  { cat: 'hero-shooter', label: 'Hero Shooters' },
  { cat: 'br',           label: 'Battle Royale' },
  { cat: 'esporte',      label: 'Esporte' },
  { cat: 'luta',         label: 'Jogos de Luta' },
  { cat: 'corrida',      label: 'Corrida / Simulação' },
  { cat: 'other',        label: 'Outros' },
];

// ─────────────────────────────────────────────────────────────
//  INITIAL RENDER
// ─────────────────────────────────────────────────────────────
function renderAll() {
  const main = document.getElementById('main');
  main.innerHTML = SECTIONS.map(sec => {
    const games = GAMES.filter(g => g.cat === sec.cat);
    if (!games.length) return '';
    return `
<div class="section" data-sec="${sec.cat}">
  <div class="section-label">${sec.label}</div>
  <div class="cards-grid">${games.map(buildCard).join('')}</div>
</div>`;
  }).join('');

  attachEvents();
  refreshProgress();
}

// ─────────────────────────────────────────────────────────────
//  EVENT LISTENERS
// ─────────────────────────────────────────────────────────────
function attachEvents() {
  document.querySelectorAll('.sel').forEach(sel => {
    sel.addEventListener('change', e => {
      const id = e.target.dataset.id;
      const t  = e.target.dataset.t;
      S[id][t] = e.target.value;
      persist();
      const game = GAMES.find(g => g.id === id);
      refreshCard(game);
      refreshProgress();
    });
  });

  document.querySelectorAll('.btn-dist').forEach(btn => {
    btn.addEventListener('click', () => {
      const id    = btn.dataset.id;
      const panel = document.getElementById('dist-' + id);
      const open  = panel.classList.toggle('open');
      btn.classList.toggle('open', open);
      if (open) {
        const game = GAMES.find(g => g.id === id);
        renderDist(game, document.querySelector(`#dist-${id} .dist-bars`));
      }
    });
  });

  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      applyFilter(pill.dataset.f);
    });
  });
}

// ─────────────────────────────────────────────────────────────
//  FILTER
// ─────────────────────────────────────────────────────────────
function applyFilter(f) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.toggle('hidden', f !== 'all' && sec.dataset.sec !== f);
  });
}

// ─────────────────────────────────────────────────────────────
//  BOOT
// ─────────────────────────────────────────────────────────────
renderAll();
