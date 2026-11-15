'use strict';

const CONFIG = {
  name: 'Daniel',
  locale: 'de-AT',
  locations: [
    { id: 'linz', name: 'Linz', lat: 48.3064, lon: 14.2861 },
    { id: 'wien', name: 'Wien', lat: 48.2082, lon: 16.3738 },
    { id: 'salzburg', name: 'Salzburg', lat: 47.8095, lon: 13.0550 }
  ],
  espn: 'https://site.api.espn.com/apis/site/v2/sports/soccer',
  espnStandings: 'https://site.api.espn.com/apis/v2/sports/soccer',
  realId: '86',
  coreLeagues: [
    { id: 'uefa.champions', name: 'Champions League' },
    { id: 'esp.1', name: 'LaLiga' },
    { id: 'esp.copa_del_rey', name: 'Copa del Rey' },
    { id: 'esp.super_cup', name: 'Supercopa' },
    { id: 'aut.1', name: 'Admiral Bundesliga' }
  ],
  upsetLeagues: [
    { id: 'esp.1', name: 'LaLiga', table: true },
    { id: 'ger.1', name: 'Bundesliga', table: true },
    { id: 'aut.1', name: 'Admiral Bundesliga', table: true },
    { id: 'eng.1', name: 'Premier League', table: true },
    { id: 'ita.1', name: 'Serie A', table: true },
    { id: 'fra.1', name: 'Ligue 1', table: true },
    { id: 'uefa.champions', name: 'Champions League', table: false },
    { id: 'uefa.europa', name: 'Europa League', table: false },
    { id: 'uefa.europa.conf', name: 'Conference League', table: false }
  ],
  bigClubs: ['real madrid', 'barcelona', 'bayern', 'manchester city', 'liverpool', 'arsenal', 'paris saint-germain', 'inter', 'milan', 'juventus', 'borussia dortmund', 'atlético', 'atletico', 'chelsea', 'leverkusen', 'napoli', 'tottenham', 'manchester united', 'benfica', 'porto', 'salzburg', 'sturm', 'rapid'],
  f1: 'https://api.jolpi.ca/ergast/f1',
  maxId: 'max_verstappen',
  rss2json: 'https://api.rss2json.com/v1/api.json?rss_url=',
  feeds: {
    tech: [
      ['The Verge', 'https://www.theverge.com/rss/index.xml', 1.1],
      ['Ars Technica', 'https://feeds.arstechnica.com/arstechnica/index', 1.2],
      ['Engadget', 'https://www.engadget.com/rss.xml', 1],
      ['TechCrunch', 'https://techcrunch.com/feed/', 1],
      ['Wired', 'https://www.wired.com/feed/rss', 1.1],
      ['BBC', 'https://feeds.bbci.co.uk/news/technology/rss.xml', 1.2],
      ['The Guardian', 'https://www.theguardian.com/uk/technology/rss', 1.1],
      ['CNBC', 'https://www.cnbc.com/id/19854910/device/rss/rss.html', 1.1],
      ['9to5Mac', 'https://9to5mac.com/feed/', 1],
      ['MacRumors', 'https://feeds.macrumors.com/MacRumors-All', 1],
      ['AppleInsider', 'https://appleinsider.com/rss/news/', 0.9],
      ['9to5Google', 'https://9to5google.com/feed/', 1],
      ['Android Authority', 'https://www.androidauthority.com/feed/', 1],
      ['Android Police', 'https://www.androidpolice.com/feed/', 0.9],
      ['GSMArena', 'https://www.gsmarena.com/rss-news-reviews.php3', 1],
      ['SamMobile', 'https://www.sammobile.com/feed/', 0.8],
      ["Tom's Hardware", 'https://www.tomshardware.com/feeds/all', 1],
      ['The Register', 'https://www.theregister.com/headlines.atom', 1],
      ['heise online', 'https://www.heise.de/rss/heise-atom.xml', 1.2],
      ['Golem', 'https://rss.golem.de/rss.php?feed=RSS2.0', 1.1],
      ['ComputerBase', 'https://www.computerbase.de/rss/news.xml', 1.1],
      ['derStandard', 'https://www.derstandard.at/rss/web', 1.1]
    ],
    oesterreich: [
      ['ORF', 'https://rss.orf.at/news.xml', 1.3],
      ['ORF', 'https://rss.orf.at/ooe.xml', 1.1],
      ['derStandard', 'https://www.derstandard.at/rss/inland', 1.2],
      ['derStandard', 'https://www.derstandard.at/rss/wirtschaft', 1.1],
      ['Die Presse', 'https://www.diepresse.com/rss/innenpolitik', 1.1],
      ['Die Presse', 'https://www.diepresse.com/rss/wirtschaft', 1],
      ['Kurier', 'https://kurier.at/xml/rssd', 0.9],
      ['Kleine Zeitung', 'https://www.kleinezeitung.at/rss/politik', 0.9],
      ['Salzburger Nachrichten', 'https://www.sn.at/xml/rss', 0.9],
      ['profil', 'https://www.profil.at/rss', 0.9]
    ],
    welt: [
      ['ORF', 'https://rss.orf.at/news.xml', 1.3],
      ['derStandard', 'https://www.derstandard.at/rss/international', 1.2],
      ['Die Presse', 'https://www.diepresse.com/rss/ausland', 1.1],
      ['tagesschau', 'https://www.tagesschau.de/ausland/index~rss2.xml', 1.2],
      ['Spiegel', 'https://www.spiegel.de/ausland/index.rss', 1.1],
      ['ZDFheute', 'https://www.zdf.de/rss/zdf/nachrichten', 1],
      ['NZZ', 'https://www.nzz.ch/international.rss', 1.2],
      ['Deutsche Welle', 'https://rss.dw.com/xml/rss-de-all', 1.1],
      ['Zeit', 'https://newsfeed.zeit.de/politik/ausland/index', 1],
      ['BBC', 'https://feeds.bbci.co.uk/news/world/rss.xml', 1.2],
      ['The Guardian', 'https://www.theguardian.com/world/rss', 1.1],
      ['Al Jazeera', 'https://www.aljazeera.com/xml/rss/all.xml', 1],
      ['New York Times', 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', 1.1]
    ],
    fussball: [
      ['BBC Sport', 'https://feeds.bbci.co.uk/sport/football/rss.xml', 1.2],
      ['The Guardian', 'https://www.theguardian.com/football/rss', 1.1],
      ['Sky Sports', 'https://www.skysports.com/rss/12040', 1],
      ['ESPN', 'https://www.espn.com/espn/rss/soccer/news', 1],
      ['Marca', 'https://e00-marca.uecdn.es/rss/en/index.xml', 0.9],
      ['Football España', 'https://www.football-espana.net/feed', 0.8],
      ['Managing Madrid', 'https://www.managingmadrid.com/rss/index.xml', 0.7],
      ['kicker', 'https://newsfeed.kicker.de/news/aktuell', 1.1]
    ],
    f1: [
      ['Formula 1', 'https://www.formula1.com/en/latest/all.xml', 1.2],
      ['Motorsport.com', 'https://www.motorsport.com/rss/f1/news/', 1.1],
      ['Autosport', 'https://www.autosport.com/rss/f1/news/', 1.1],
      ['The Race', 'https://www.the-race.com/feed/', 1.1],
      ['RaceFans', 'https://www.racefans.net/feed/', 1],
      ['PlanetF1', 'https://www.planetf1.com/feed/', 0.8],
      ['BBC Sport', 'https://feeds.bbci.co.uk/sport/formula1/rss.xml', 1.2],
      ['Sky Sports', 'https://www.skysports.com/rss/12433', 1]
    ],
    ausdauer: [
      ["Runner's World", 'https://www.runnersworld.com/rss/all.xml/', 1],
      ['LetsRun', 'https://www.letsrun.com/feed/', 1],
      ['Triathlete', 'https://www.triathlete.com/feed/', 1],
      ['220 Triathlon', 'https://www.220triathlon.com/feed', 1],
      ['TRI247', 'https://www.tri247.com/feed', 0.9],
      ['Canadian Running', 'https://runningmagazine.ca/feed/', 0.9],
      ['iRunFar', 'https://www.irunfar.com/feed', 1],
      ['tri-mag.de', 'https://www.tri-mag.de/feed', 1]
    ]
  },
  news: {
    tech: { label: 'Technik', min: 5, maxAgeH: 48, halfLife: 14, interests: [
      [/\biphone/, 1], [/\bapple\b/, 1], [/\bmacbook|\bimac\b|\bmacos|\bmac\b/, .8], [/\bipad/, .6], [/\bios \d|\bios\b/, .5],
      [/apple watch|airpods|vision pro|watchos/, .5], [/\bsamsung|\bgalaxy\b/, .8], [/\bxiaomi|\bredmi|\bpoco\b/, .6],
      [/\boppo\b|\bfind x\d/, .5], [/\bvivo\b/, .5], [/nothing phone|carl pei|\bcmf\b/, .6], [/\bpixel \d|\bpixel\b/, .5],
      [/\boneplus/, .5], [/\bhonor\b|\bhuawei/, .3], [/smartphone|\bhandy\b|\bphone\b/, .3],
      [/\blaptop|\bnotebook|snapdragon x|\bultrabook/, .4], [/\bnvidia|\bgeforce|\brtx \d/, .6],
      [/\bceo\b|\bchef\b|rücktritt|steps down|resign|nachfolger|successor/, .5], [/\bm5\b|\bm6\b|apple silicon|\ba19\b|\ba20\b/, .6],
      [/tim cook|jensen huang|john ternus/, .6], [/qualcomm|\btsmc|\bintel\b|\bamd\b/, .3],
      [/\bdeal\b|\bdeals\b|% off|rabatt|angebot|gutschein|black friday|prime day/, -.7], [/^best |kaufberatung|\bbest .* to buy/, -.4]
    ] },
    oesterreich: { label: 'Österreich', min: 4, maxAgeH: 30, halfLife: 12, interests: [
      [/österreich|nationalrat|bundesregierung|bundeskanzler|minister|\bövp\b|\bspö\b|\bfpö\b|\bneos\b|stocker|babler|meinl-reisinger|kickl|\bams\b|wifo|\bihs\b|\bwien\b/, .45],
      [/\blinz\b|oberösterreich|\boö\b|gmunden|vöcklabruck|mühlviertel|traunsee/, .35],
      [/\b(cdu|csu|spd|afd|fdp|bsw|bundestag|bundesrat|merz|söder|klingbeil|weidel|chrupalla|linnemann|union und spd|ampel|landtagswahl in)\b/, -1.4], [/\bwetter\b|horoskop|gewinnspiel|rätsel/, -.6]
    ] },
    welt: { label: 'Welt', min: 5, maxAgeH: 30, halfLife: 12, interests: [
      [/ukraine|russland|russia|nahost|middle east|israel|gaza|iran|china|\busa\b|\bus\b|trump|\beu\b|nato|\buno?\b|united nations|g7|g20/, .2],
      [/österreich|austria/, .2],
      [/\b(cdu|csu|spd|afd|fdp|bsw|bundestag|bundesrat|merz|söder|klingbeil|weidel|chrupalla|linnemann|union und spd|ampel|landtagswahl in)\b/, -1.4], [/fußball|football|tennis|formel 1|horoskop/, -.6]
    ] },
    fussball: { label: 'Fußball', min: 3, maxAgeH: 48, halfLife: 16, interests: [
      [/real madrid|los blancos|bernabéu|bernabeu/, 1.3], [/champions league|\bucl\b/, .5],
      [/mbapp|vin[ií]cius|bellingham|xabi alonso|valverde|rodrygo|g[üu]ler|courtois|tchouam|camavinga|huijsen/, .45],
      [/salzburg|sturm graz|\brapid\b|\blask\b|austria wien|admiral bundesliga|öfb|rangnick/, .3], [/ronaldo/, .25],
      [/\blive\b|liveticker|as it happened|live blog|player ratings|predicted line-?up|how to watch/, -.7]
    ] },
    f1: { label: 'Formel 1', min: 3, maxAgeH: 72, halfLife: 20, interests: [
      [/verstappen/, 1.4], [/red bull/, .5], [/\bmax\b/, .2]
    ] },
    ausdauer: { label: 'Laufen & Triathlon', min: 1, maxAgeH: 120, halfLife: 36, interests: [
      [/ironman|\bkona\b|70\.3|140\.6/, .7], [/triathlon|triathlet/, .5], [/marathon/, .3], [/world record|weltrekord/, .5],
      [/kipchoge|blummenfelt|iden\b|laidlow|frodeno|ditlev|kiplagat|jakob ingebrigtsen/, .35]
    ] }
  }
};

const TEAM_COLORS = {
  red_bull: '#3671c6', ferrari: '#e8002d', mercedes: '#00a19c', mclaren: '#ff8000', aston_martin: '#229971',
  alpine: '#0093cc', williams: '#1868db', rb: '#6692ff', racing_bulls: '#6692ff', sauber: '#52e252',
  kick_sauber: '#52e252', audi: '#bb0a30', haas: '#8a8d8f', cadillac: '#b8975a'
};

const EVENT_COLORS = {
  1: '#7986cb', 2: '#33b679', 3: '#8e24aa', 4: '#e67c73', 5: '#f6bf26', 6: '#f4511e',
  7: '#039be5', 8: '#616161', 9: '#3f51b5', 10: '#0b8043', 11: '#d50000'
};

const WMO = {
  0: 'Klar', 1: 'Überwiegend klar', 2: 'Teilweise bewölkt', 3: 'Bedeckt', 45: 'Nebel', 48: 'Raureifnebel',
  51: 'Leichter Nieselregen', 53: 'Nieselregen', 55: 'Starker Nieselregen', 56: 'Gefrierender Niesel', 57: 'Gefrierender Niesel',
  61: 'Leichter Regen', 63: 'Regen', 65: 'Starker Regen', 66: 'Gefrierender Regen', 67: 'Gefrierender Regen',
  71: 'Leichter Schneefall', 73: 'Schneefall', 75: 'Starker Schneefall', 77: 'Schneegriesel',
  80: 'Regenschauer', 81: 'Regenschauer', 82: 'Heftige Schauer', 85: 'Schneeschauer', 86: 'Starke Schneeschauer',
  95: 'Gewitter', 96: 'Gewitter mit Hagel', 99: 'Gewitter mit Hagel'
};

const STOP = new Set(('the a an and or of to in on for with at by from as is are was were be been it its this that these those ' +
  'new news says said will can could would after over into up out about more than just how why what when who has have had ' +
  'not but you your our their they we his her him she he first now get gets got report reports update latest live video ' +
  'der die das den dem des ein eine einer eines einem einen und oder mit von zu zum zur im in am an auf aus bei nach vor über ' +
  'unter für ist sind war waren wird werden wurde wurden hat haben hatte nicht auch noch nur mehr wie was wer wo als so ' +
  'sich sie er es wir ihr man um bis seit gegen ohne durch neue neuer neues neuen heute jetzt erste ersten soll sollen kann ' +
  'können muss müssen will ticker liveticker news').split(/\s+/));

const state = {
  view: 'heute',
  weather: null,
  weatherLoc: null,
  football: null,
  realSchedule: null,
  upsets: null,
  f1: null,
  news: {},
  clusters: new Map(),
  loaded: new Set(),
  todos: [],
  todoSaving: null,
  showDone: false,
  cal: {
    sources: [],
    fetched: 0,
    failed: 0,
    events: [],
    view: 'agenda',
    anchor: null,
    selected: null,
    demo: false,
    loading: false,
    error: null
  },
  timers: {}
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const store = {
  get(k, fb = null) {
    try {
      const v = localStorage.getItem('ld:' + k);
      return v == null ? fb : JSON.parse(v);
    } catch {
      return fb;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem('ld:' + k, JSON.stringify(v));
    } catch {
      store.prune();
    }
  },
  del(k) {
    try {
      localStorage.removeItem('ld:' + k);
    } catch {}
  },
  prune(all = false) {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
      keys.filter(k => k && (k.startsWith('ld:j:') || k.startsWith('ld:news:'))).forEach(k => {
        if (all) return localStorage.removeItem(k);
        try {
          const v = JSON.parse(localStorage.getItem(k));
          if (!v || Date.now() - v.t > 36 * 3600e3) localStorage.removeItem(k);
        } catch {
          localStorage.removeItem(k);
        }
      });
    } catch {}
  }
};

const mem = new Map();

const CSRF = document.querySelector('meta[name="csrf-token"]')?.content || '';

async function api(action, { method = 'GET', body = null, params = {} } = {}) {
  const qs = new URLSearchParams({ action, ...params });
  const headers = { 'X-CSRF-Token': CSRF };
  if (body) headers['Content-Type'] = 'application/json';
  const res = await fetch(`api.php?${qs}`, { method, credentials: 'same-origin', headers, body: body ? JSON.stringify(body) : null });
  if (res.status === 401) {
    location.href = 'login.php';
    throw new Error('auth');
  }
  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return res;
}

const pad = n => String(n).padStart(2, '0');
const startOfDay = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const addHours = (d, n) => new Date(d.getTime() + n * 3600e3);
const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const dayKey = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const ymd = d => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
const startOfWeek = d => { const x = startOfDay(d); const wd = (x.getDay() + 6) % 7; return addDays(x, -wd); };
const startOfMonth = d => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = d => new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

const fmtTime = d => d.toLocaleTimeString(CONFIG.locale, { hour: '2-digit', minute: '2-digit' });
const fmtHour = d => String(d.getHours());
const fmtDayShort = d => d.toLocaleDateString(CONFIG.locale, { weekday: 'short', day: 'numeric', month: 'numeric' });
const fmtDayLong = d => d.toLocaleDateString(CONFIG.locale, { weekday: 'long', day: 'numeric', month: 'long' });
const fmtNum = (n, digits = 1) => Number(n).toLocaleString(CONFIG.locale, { maximumFractionDigits: digits });

function relPast(d) {
  if (!d) return '';
  const m = Math.round((Date.now() - d.getTime()) / 60000);
  if (m < 1) return 'gerade eben';
  if (m < 60) return `vor ${m} Min.`;
  const h = Math.round(m / 60);
  if (h < 24) return `vor ${h} Std.`;
  const days = Math.round(h / 24);
  return days === 1 ? 'gestern' : `vor ${days} Tagen`;
}

function relFuture(start, end) {
  const now = Date.now();
  if (start.getTime() <= now && end.getTime() > now) return { text: 'läuft', now: true };
  const m = Math.round((start.getTime() - now) / 60000);
  if (m < 0) return null;
  if (m < 60) return { text: `in ${m} Min.` };
  const h = Math.floor(m / 60);
  const rest = m % 60;
  if (h < 6 && rest) return { text: `in ${h} Std. ${rest} Min.` };
  return { text: `in ${h} Std.` };
}

function dayLabel(d) {
  const t = startOfDay(new Date());
  if (sameDay(d, t)) return 'Heute';
  if (sameDay(d, addDays(t, 1))) return 'Morgen';
  if (sameDay(d, addDays(t, -1))) return 'Gestern';
  return fmtDayLong(d);
}

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

async function fetchT(url, opts = {}, ms = 12000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { ...opts, signal: ctrl.signal });
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return res;
  } finally {
    clearTimeout(timer);
  }
}

async function getJSON(url, ttl, persist = true) {
  const key = 'j:' + url;
  const cached = persist ? store.get(key) : mem.get(key);
  if (cached && Date.now() - cached.t < ttl) return cached.d;
  try {
    const res = await fetchT(url);
    const data = await res.json();
    const entry = { t: Date.now(), d: data };
    if (persist) store.set(key, entry); else mem.set(key, entry);
    return data;
  } catch (e) {
    if (cached) return cached.d;
    throw e;
  }
}

async function pool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        out[idx] = await fn(items[idx], idx);
      } catch {
        out[idx] = null;
      }
    }
  });
  await Promise.all(workers);
  return out;
}

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.hidden = false;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
  clearTimeout(state.timers.toast);
  state.timers.toast = setTimeout(() => { el.hidden = true; }, 3400);
}

function skeleton(lines = 3, block = false) {
  return `${block ? '<div class="sk sk-block"></div>' : ''}${Array.from({ length: lines }, (_, i) => `<div class="sk sk-line" style="width:${92 - i * 14}%"></div>`).join('')}`;
}

function stateBox(title, text, action) {
  return `<div class="state"><strong>${esc(title)}</strong>${text ? esc(text) : ''}${action ? `<div><button class="btn" data-action="${esc(action.id)}">${esc(action.label)}</button></div>` : ''}</div>`;
}

const ICON = {
  cloud: 'M19 46a9 9 0 0 1-.9-17.96A13 13 0 0 1 43.3 24.6 10.7 10.7 0 1 1 45 46H19z',
  drop: 'M12 3.2c-.3 0-.6.15-.78.4C9.5 6 5.5 10.9 5.5 14.6a6.5 6.5 0 0 0 13 0c0-3.7-4-8.6-5.72-11a.95.95 0 0 0-.78-.4z'
};

function weatherKind(code) {
  if (code <= 1) return 'clear';
  if (code === 2) return 'partly';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'storm';
  return 'cloudy';
}

function weatherLabel(code, isDay) {
  if (code === 0 && isDay) return 'Sonnig';
  return WMO[code] || 'Wechselhaft';
}

function weatherIcon(code, isDay) {
  const kind = weatherKind(code);
  const sun = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r + 6}" fill="#ffc83d" opacity=".16"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#g-sun)"/>`;
  const moon = (tx = 0, ty = 0, s = 1) => `<g transform="translate(${tx} ${ty}) scale(${s})"><circle cx="30" cy="32" r="15" fill="url(#g-moon)" mask="url(#mk-moon)"/></g>`;
  const cloud = (tx = 0, ty = 0, s = 1, dark = false) => `<path d="${ICON.cloud}" transform="translate(${tx} ${ty}) scale(${s})" fill="url(#${dark ? 'g-cloud-dark' : 'g-cloud'})"/>`;
  const drops = (n, len) => {
    const xs = n === 3 ? [24, 32, 40] : [27, 37];
    return `<path d="${xs.map(x => `M${x} 50l-${len * .35} ${len}`).join('')}" stroke="#4fb3ff" stroke-width="3.2" stroke-linecap="round" fill="none"/>`;
  };
  const celestial = isDay ? sun(24, 22, 11) : moon(-6, -8, .82);
  let body = '';
  switch (kind) {
    case 'clear':
      body = isDay ? sun(32, 32, 14) : moon(2, 0, 1);
      if (code === 1) body += cloud(14, 18, .55);
      break;
    case 'partly':
      body = celestial + cloud(6, 8, .86);
      break;
    case 'cloudy':
      body = cloud(14, -6, .7, true) + cloud(0, 4, 1);
      break;
    case 'fog':
      body = cloud(0, -4, 1) + '<path d="M14 50h36M20 57h26" stroke="#c9d2dd" stroke-width="3.4" stroke-linecap="round"/>';
      break;
    case 'drizzle':
      body = cloud(0, -6, 1) + drops(3, 4);
      break;
    case 'rain':
      body = (code === 61 || code === 80 ? cloud(0, -6, 1) : cloud(0, -6, 1, true)) + drops(3, 8);
      break;
    case 'snow':
      body = cloud(0, -6, 1) + [24, 32, 40].map((x, i) => `<circle cx="${x}" cy="${52 + (i % 2) * 5}" r="2.6" fill="#fff" stroke="#b7c4d4" stroke-width="1"/>`).join('');
      break;
    case 'storm':
      body = cloud(0, -6, 1, true) + '<path d="M34 42 26 53h6.5l-3 9 10-12.5h-6.5L37 42z" fill="#ffd60a"/>';
      break;
  }
  return `<svg viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
}

const SKY = {
  clear: { day: ['#2f7fd8', '#69acef', '#cfe5fb'], night: ['#050b1f', '#0f1f45', '#25385f'] },
  partly: { day: ['#3d7fc6', '#86b3df', '#dbe7f3'], night: ['#0a1228', '#18284b', '#2f4062'] },
  cloudy: { day: ['#6c7c90', '#a2afbe', '#d9dee5'], night: ['#0e131c', '#1c2430', '#2d3745'] },
  fog: { day: ['#97a1ac', '#c2c8cf', '#e4e7ea'], night: ['#151a21', '#262d36', '#38414c'] },
  rain: { day: ['#46566a', '#728399', '#a7b3c1'], night: ['#0b1018', '#18202b', '#29323f'] },
  snow: { day: ['#8ea2b8', '#c4d1de', '#eef2f6'], night: ['#1a2232', '#2b3548', '#465166'] },
  storm: { day: ['#2b3241', '#4b5566', '#788293'], night: ['#07090e', '#121720', '#1f2530'] }
};
const SKY_DAWN = ['#36579a', '#d99a86', '#f5d2b2'];
const SKY_DUSK = ['#283c70', '#c27088', '#f0b08c'];

function isDarkTheme() {
  const t = document.documentElement.dataset.theme;
  if (t === 'dark') return true;
  if (t === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setSky(opts) {
  const now = new Date();
  const code = opts?.code ?? 0;
  const sunrise = opts?.sunrise;
  const sunset = opts?.sunset;
  let isDay = opts?.isDay;
  if (isDay == null) isDay = now.getHours() >= 7 && now.getHours() < 18;
  let kind = weatherKind(code);
  if (kind === 'drizzle') kind = 'rain';
  let colors = SKY[kind][isDay ? 'day' : 'night'];
  let phase = isDay ? 'day' : 'night';
  if (sunrise && sunset && (kind === 'clear' || kind === 'partly')) {
    const toRise = Math.abs(now - sunrise) / 60000;
    const toSet = Math.abs(now - sunset) / 60000;
    if (toRise < 70) { colors = SKY_DAWN; phase = 'dawn'; }
    else if (toSet < 70) { colors = SKY_DUSK; phase = 'dusk'; }
  }
  const layers = [$('#sky-a'), $('#sky-b')];
  const active = layers.find(l => l.classList.contains('is-active')) || layers[0];
  const next = active === layers[0] ? layers[1] : layers[0];
  let bg = `linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 52%, ${colors[2]} 100%)`;
  if (phase === 'night') {
    const k = ['clear', 'partly'].includes(kind) ? 1 : 0.55;
    bg = `radial-gradient(70% 55% at 12% 92%, rgba(118, 66, 178, ${0.42 * k}), transparent 70%), radial-gradient(55% 45% at 92% 78%, rgba(206, 98, 118, ${0.22 * k}), transparent 72%), radial-gradient(60% 45% at 78% 4%, rgba(48, 92, 214, ${0.38 * k}), transparent 70%), radial-gradient(45% 35% at 40% 55%, rgba(232, 140, 90, ${0.08 * k}), transparent 70%), ${bg}`;
  }
  if (active.style.background !== bg) {
    next.style.background = bg;
    next.classList.add('is-active');
    active.classList.remove('is-active');
  }
  const root = document.documentElement;
  const darkTone = phase !== 'day' || ['rain', 'storm', 'cloudy'].includes(kind);
  root.dataset.skyTone = darkTone ? 'dark' : 'light';
  if (store.get('theme', 'auto') === 'auto') {
    if (darkTone) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
  }
  if (['rain', 'storm'].includes(kind)) root.dataset.raining = ''; else delete root.dataset.raining;
  const sunEl = $('#sky-sun');
  let t = 0.5;
  if (sunrise && sunset) t = clamp((now - sunrise) / (sunset - sunrise), 0, 1);
  if (isDay) {
    sunEl.style.setProperty('--sun-x', `${10 + t * 80}%`);
    sunEl.style.setProperty('--sun-y', `${34 - Math.sin(Math.PI * t) * 30}%`);
    sunEl.style.setProperty('--sun-core', phase === 'day' ? 'rgba(255,246,220,.75)' : 'rgba(255,214,170,.7)');
    sunEl.style.setProperty('--sun-mid', phase === 'day' ? 'rgba(255,230,170,.22)' : 'rgba(255,170,130,.22)');
    sunEl.style.setProperty('--sun-o', { clear: .95, partly: .65, cloudy: .18, fog: .3, snow: .3 }[kind] ?? .06);
  } else {
    sunEl.style.setProperty('--sun-x', '78%');
    sunEl.style.setProperty('--sun-y', '8%');
    sunEl.style.setProperty('--sun-core', 'rgba(205,220,255,.32)');
    sunEl.style.setProperty('--sun-mid', 'rgba(150,170,230,.08)');
    sunEl.style.setProperty('--sun-o', kind === 'clear' || kind === 'partly' ? .8 : .15);
  }
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDarkTheme() ? shade(colors[0], .58) : colors[0]);
  root.style.background = isDarkTheme() ? shade(colors[2], .58) : colors[2];
}

function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function defaultLocation() {
  const saved = store.get('weather_loc');
  const today = dayKey(new Date());
  if (saved && saved.day === today) return saved.id;
  return CONFIG.locations[0].id;
}

async function loadWeather(force = false) {
  const locId = state.weatherLoc || defaultLocation();
  state.weatherLoc = locId;
  const loc = CONFIG.locations.find(l => l.id === locId) || CONFIG.locations[0];
  const params = new URLSearchParams({
    latitude: loc.lat,
    longitude: loc.lon,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_gusts_10m',
    hourly: 'temperature_2m,precipitation_probability,precipitation,weather_code,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,uv_index_max',
    timezone: 'Europe/Vienna',
    forecast_days: '3'
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params}`;
  try {
    const data = await getJSON(url, force ? 0 : 10 * 60e3);
    state.weather = parseWeather(data, loc);
    state.weatherError = null;
  } catch (e) {
    state.weatherError = e;
  }
  renderWeather();
}

function parseWeather(d, loc) {
  const hours = d.hourly.time.map((t, i) => ({
    t: new Date(t),
    temp: d.hourly.temperature_2m[i],
    pop: d.hourly.precipitation_probability?.[i] ?? 0,
    mm: d.hourly.precipitation?.[i] ?? 0,
    code: d.hourly.weather_code[i],
    isDay: !!d.hourly.is_day[i]
  }));
  const days = d.daily.time.map((t, i) => ({
    date: new Date(t + 'T00:00'),
    code: d.daily.weather_code[i],
    max: d.daily.temperature_2m_max[i],
    min: d.daily.temperature_2m_min[i],
    sunrise: new Date(d.daily.sunrise[i]),
    sunset: new Date(d.daily.sunset[i]),
    sum: d.daily.precipitation_sum?.[i] ?? 0,
    hoursWet: d.daily.precipitation_hours?.[i] ?? 0,
    popMax: d.daily.precipitation_probability_max?.[i] ?? 0,
    uv: d.daily.uv_index_max?.[i] ?? null
  }));
  const c = d.current;
  return {
    loc,
    fetched: new Date(),
    current: {
      temp: c.temperature_2m,
      feels: c.apparent_temperature,
      humidity: c.relative_humidity_2m,
      isDay: !!c.is_day,
      precip: c.precipitation,
      code: c.weather_code,
      wind: c.wind_speed_10m,
      gusts: c.wind_gusts_10m
    },
    hours,
    days
  };
}

function analyzeRain(w) {
  const now = new Date();
  const hourStart = new Date(now); hourStart.setMinutes(0, 0, 0);
  const rest = w.hours.filter(h => sameDay(h.t, now) && h.t >= hourStart);
  const wet = h => h.pop >= 45 || h.mm >= 0.2;
  const isSnow = c => weatherKind(c) === 'snow';
  const windows = [];
  let cur = null;
  rest.forEach(h => {
    if (wet(h)) {
      if (!cur) cur = { start: h.t, end: addHours(h.t, 1), mm: 0, pmax: 0, snow: 0, n: 0 };
      cur.end = addHours(h.t, 1);
      cur.mm += h.mm;
      cur.pmax = Math.max(cur.pmax, h.pop);
      cur.n++;
      if (isSnow(h.code)) cur.snow++;
    } else if (cur) {
      windows.push(cur);
      cur = null;
    }
  });
  if (cur) windows.push(cur);
  const total = rest.reduce((s, h) => s + h.mm, 0);
  const maxPop = rest.reduce((m, h) => Math.max(m, h.pop), 0);
  const ck = weatherKind(w.current.code);
  const rainingNow = w.current.precip > 0 || ['drizzle', 'rain', 'storm', 'snow'].includes(ck);
  const word = win => (win && win.snow > win.n / 2) || ck === 'snow' ? 'Schnee' : 'Regen';
  let head;
  let sub;
  const first = windows[0];
  if (rainingNow) {
    const end = first && first.start <= addHours(now, 1) ? first.end : null;
    head = `${ck === 'snow' ? 'Es schneit' : 'Es regnet'} gerade${end ? `, voraussichtlich bis ${fmtHour(end)} Uhr` : ''}`;
    sub = first ? `Etwa ${fmtNum(first.mm)} mm in diesem Zeitraum` : `Aktuell ${fmtNum(w.current.precip)} mm pro Stunde`;
    if (windows.length > 1) sub += `, später erneut ab ${fmtHour(windows[1].start)} Uhr`;
  } else if (!windows.length) {
    head = maxPop >= 20 ? 'Meist trocken' : 'Heute bleibt es trocken';
    sub = maxPop >= 20 ? `Regenrisiko höchstens ${maxPop} %` : `Regenwahrscheinlichkeit unter ${Math.max(maxPop, 5)} %`;
  } else {
    const len = Math.round((first.end - first.start) / 3600e3);
    head = `${word(first)} ${fmtHour(first.start)}–${fmtHour(first.end)} Uhr`;
    sub = `${len === 1 ? 'Rund eine Stunde' : `Rund ${len} Stunden`}, etwa ${fmtNum(first.mm)} mm, Wahrscheinlichkeit bis ${first.pmax} %`;
    if (windows.length > 1) sub += `. Später erneut ab ${fmtHour(windows[1].start)} Uhr`;
  }
  if (total >= 0.1 && windows.length > 1) sub += `. Insgesamt ${fmtNum(total)} mm`;
  return { head, sub, windows };
}

function renderWeather() {
  const card = $('#weather-card');
  const w = state.weather;
  const locSeg = `<div class="segmented small" role="tablist" data-segment="loc">
      <span class="seg-indicator" aria-hidden="true"></span>
      ${CONFIG.locations.map(l => `<button role="tab" data-seg="${l.id}" aria-selected="${l.id === state.weatherLoc}">${esc(l.name)}</button>`).join('')}
    </div>`;
  if (!w) {
    card.innerHTML = `<div class="w-top">${locSeg}</div>${state.weatherError ? stateBox('Wetter nicht verfügbar', 'Open-Meteo antwortet gerade nicht.', { id: 'retry-weather', label: 'Erneut laden' }) : skeleton(3, true)}`;
    initSegments(card);
    return;
  }
  const now = new Date();
  const today = w.days[0];
  const c = w.current;
  const rain = analyzeRain(w);
  const todayHours = w.hours.filter(h => sameDay(h.t, now));
  const nowHour = now.getHours();
  const bars = todayHours.map(h => {
    const hr = h.t.getHours();
    const height = Math.max(h.pop, 4);
    const op = 0.28 + Math.min(h.mm / 2, 1) * 0.72;
    return `<div class="w-bar${hr < nowHour ? ' is-past' : ''}${hr === nowHour ? ' is-now' : ''}" style="height:${height}%;opacity:${op.toFixed(2)}" title="${hr} Uhr: ${h.pop} %, ${fmtNum(h.mm)} mm"></div>`;
  }).join('');
  const start = new Date(now); start.setMinutes(0, 0, 0);
  const next = w.hours.filter(h => h.t >= start).slice(0, 25);
  const hourly = next.map((h, i) => `
    <div class="w-hour${i === 0 ? ' is-now' : ''}">
      <span class="w-hour-time">${i === 0 ? 'Jetzt' : pad(h.t.getHours())}</span>
      ${weatherIcon(h.code, h.isDay)}
      <span class="w-hour-temp">${Math.round(h.temp)}°</span>
      <span class="w-hour-pop">${h.pop >= 20 ? `${h.pop} %` : ''}</span>
    </div>`).join('');
  const sunEvent = now < today.sunrise ? ['Sonnenaufgang', fmtTime(today.sunrise)] : ['Sonnenuntergang', fmtTime(today.sunset)];
  card.innerHTML = `
    <div class="w-top">${locSeg}<span class="w-updated">Aktualisiert ${fmtTime(w.fetched)}</span></div>
    <div class="w-main">
      <div class="w-icon">${weatherIcon(c.code, c.isDay)}</div>
      <div class="w-temp">${Math.round(c.temp)}<span class="deg">°</span></div>
      <div class="w-desc">
        <span class="w-cond">${esc(weatherLabel(c.code, c.isDay))}</span>
        <span class="w-range">H ${Math.round(today.max)}°&ensp;T ${Math.round(today.min)}°&ensp;Gefühlt ${Math.round(c.feels)}°</span>
      </div>
    </div>
    <div class="w-rain">
      <div class="w-rain-text">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICON.drop}"/></svg>
        <div><strong>${esc(rain.head)}</strong><span>${esc(rain.sub)}</span></div>
      </div>
      <div class="w-bars" aria-label="Regenwahrscheinlichkeit pro Stunde heute">${bars}</div>
      <div class="w-axis" aria-hidden="true"><span>0 Uhr</span><span>6</span><span>12</span><span>18</span></div>
    </div>
    <div class="w-hours" aria-label="Stündliche Vorhersage">${hourly}</div>
    <div class="w-stats">
      <div class="w-stat"><span>Wind</span><strong>${Math.round(c.wind)} km/h</strong></div>
      <div class="w-stat"><span>Böen</span><strong>${Math.round(c.gusts)} km/h</strong></div>
      <div class="w-stat"><span>UV-Index max.</span><strong>${today.uv != null ? fmtNum(today.uv, 0) : '–'}</strong></div>
      <div class="w-stat"><span>${sunEvent[0]}</span><strong>${sunEvent[1]}</strong></div>
    </div>`;
  initSegments(card);
  setSky({ code: c.code, isDay: c.isDay, sunrise: today.sunrise, sunset: today.sunset });
  updateBrief();
}

function onLocationChange(id) {
  state.weatherLoc = id;
  store.set('weather_loc', { id, day: dayKey(new Date()) });
  state.weather = null;
  renderWeather();
  loadWeather();
}

function normEvent(ev, lg) {
  const comp = ev.competitions?.[0];
  if (!comp || !comp.competitors) return null;
  const side = ha => {
    const c = comp.competitors.find(x => x.homeAway === ha) || {};
    const t = c.team || {};
    const score = c.score == null ? '' : typeof c.score === 'object' ? (c.score.displayValue ?? c.score.value ?? '') : c.score;
    return {
      id: String(t.id ?? ''),
      name: t.displayName || t.name || '',
      short: t.shortDisplayName || t.abbreviation || t.displayName || '',
      logo: t.logo || t.logos?.[0]?.href || '',
      score: String(score),
      winner: !!c.winner
    };
  };
  const st = ev.status?.type || comp.status?.type || {};
  const name = st.name || '';
  return {
    id: String(ev.id),
    league: lg.id,
    leagueName: lg.name,
    leagueLogo: lg.logo || '',
    date: new Date(ev.date),
    state: st.state || 'pre',
    statusName: name,
    completed: !!st.completed,
    detail: st.shortDetail || st.detail || '',
    clock: ev.status?.displayClock || comp.status?.displayClock || '',
    home: side('home'),
    away: side('away'),
    odds: comp.odds?.[0] || null
  };
}

async function scoreboard(lg, from, to, ttl) {
  const months = [];
  for (let d = startOfMonth(from); d <= to; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
    months.push(`${d.getFullYear()}${pad(d.getMonth() + 1)}`);
  }
  const lo = startOfDay(from).getTime();
  const hi = addDays(startOfDay(to), 1).getTime();
  const pages = await Promise.all(months.map(m => getJSON(`${CONFIG.espn}/${lg.id}/scoreboard?dates=${m}&limit=200`, ttl, false)));
  const meta = pages.find(p => p.leagues?.[0])?.leagues?.[0];
  const league = { ...lg, logo: meta?.logos?.[0]?.href || '' };
  const events = pages.flatMap(p => p.events || []).map(e => normEvent(e, league)).filter(Boolean);
  rememberOdds(events);
  return events.filter(e => e.date.getTime() >= lo && e.date.getTime() < hi);
}

function rememberOdds(events) {
  const saved = store.get('odds', {});
  let changed = false;
  events.forEach(e => {
    if (e.state !== 'pre') return;
    const p = oddsProbs(e.odds);
    if (!p) return;
    saved[e.id] = [p.home, p.away, p.draw, e.date.getTime()];
    changed = true;
  });
  if (!changed) return;
  const cutoff = Date.now() - 21 * 864e5;
  Object.keys(saved).forEach(k => { if (saved[k][3] < cutoff) delete saved[k]; });
  store.set('odds', saved);
}

function storedOdds(id) {
  const v = store.get('odds', {})[id];
  return v ? { home: v[0], away: v[1], draw: v[2] } : null;
}

const isReal = e => e.home.id === CONFIG.realId || e.away.id === CONFIG.realId;

function prestige(e) {
  const score = n => {
    const name = n.toLowerCase();
    const idx = CONFIG.bigClubs.findIndex(c => name.includes(c));
    return idx < 0 ? 0 : (CONFIG.bigClubs.length - idx);
  };
  return score(e.home.name) + score(e.away.name) + (isReal(e) ? 100 : 0);
}

async function loadFootball(force = false) {
  const today = startOfDay(new Date());
  const from = addDays(today, -2);
  const to = addDays(today, 1);
  const live = state.football?.events?.some(e => e.state === 'in');
  const ttl = force ? 0 : live ? 60e3 : 4 * 60e3;
  try {
    const results = await Promise.all(CONFIG.coreLeagues.map(lg => scoreboard(lg, from, to, ttl).catch(() => null)));
    if (results.every(r => r === null)) throw new Error('ESPN nicht erreichbar');
    const events = results.flat().filter(Boolean);
    const seen = new Set();
    state.football = { events: events.filter(e => !seen.has(e.id) && seen.add(e.id)), fetched: new Date() };
    state.footballError = null;
  } catch (e) {
    state.footballError = e;
  }
  loadRealSchedule();
  renderFootballToday();
  if (state.loaded.has('sport')) renderFootballSport();
}

async function loadRealSchedule() {
  const today = startOfDay(new Date());
  const leagues = CONFIG.coreLeagues.filter(l => l.id !== 'aut.1');
  try {
    const lists = await Promise.all(leagues.map(lg => scoreboard(lg, addDays(today, -35), addDays(today, 30), 30 * 60e3).catch(() => [])));
    const all = lists.flat().filter(isReal);
    const now = Date.now();
    const done = all.filter(e => e.state === 'post' && /FULL|FINAL|END/.test(e.statusName)).sort((a, b) => b.date - a.date);
    const upcoming = all.filter(e => e.state === 'pre' && e.date.getTime() > now).sort((a, b) => a.date - b.date);
    state.realSchedule = { last: done[0] || null, next: upcoming[0] || null };
  } catch {
    state.realSchedule = null;
  }
  renderFootballToday();
  if (state.loaded.has('sport')) renderFootballSport();
}

function splitFootball() {
  const evs = state.football?.events || [];
  const today = new Date();
  const yesterday = addDays(today, -1);
  const on = d => evs.filter(e => sameDay(e.date, d));
  const t = on(today);
  const y = on(yesterday);
  const sortP = arr => arr.slice().sort((a, b) => prestige(b) - prestige(a) || a.date - b.date);
  return {
    todayReal: t.filter(isReal),
    todayCL: sortP(t.filter(e => e.league === 'uefa.champions' && !isReal(e))),
    yReal: y.filter(isReal),
    yCL: sortP(y.filter(e => e.league === 'uefa.champions' && !isReal(e))),
    yAUT: y.filter(e => e.league === 'aut.1').sort((a, b) => a.date - b.date)
  };
}

function matchStatus(e) {
  const n = e.statusName;
  if (/POSTPONED/.test(n)) return { text: 'Verschoben', cls: '' };
  if (/CANCEL/.test(n)) return { text: 'Abgesagt', cls: '' };
  if (e.state === 'in') {
    if (/HALFTIME/.test(n)) return { text: 'Pause', cls: 'is-live' };
    return { text: e.clock || e.detail || 'Live', cls: 'is-live' };
  }
  if (e.state === 'post') {
    if (/PEN|SO/.test(n) || /pen/i.test(e.detail)) return { text: 'i. E.', cls: '' };
    if (/AET|EXTRA/.test(n) || /AET/i.test(e.detail)) return { text: 'n. V.', cls: '' };
    return { text: 'Ende', cls: '' };
  }
  const today = sameDay(e.date, new Date());
  return { text: today ? fmtTime(e.date) : `${fmtDayShort(e.date).replace(',', '')}`, cls: '' };
}

function matchRow(e) {
  const st = matchStatus(e);
  const pre = e.state === 'pre' || /POSTPONED|CANCEL/.test(e.statusName);
  const live = e.state === 'in';
  const draw = e.state === 'post' && !e.home.winner && !e.away.winner;
  const team = (t, side) => `
    <div class="m-team ${side}${t.winner ? ' is-winner' : ''}${draw ? ' is-draw' : ''}">
      ${side === 'away' && t.logo ? `<img src="${esc(t.logo)}" alt="" loading="lazy">` : ''}
      <span class="m-name"><span class="full">${esc(t.name)}</span><span class="short">${esc(t.short)}</span></span>
      ${side === 'home' && t.logo ? `<img src="${esc(t.logo)}" alt="" loading="lazy">` : ''}
    </div>`;
  const score = pre ? (sameDay(e.date, new Date()) ? 'vs' : fmtTime(e.date)) : `${esc(e.home.score)} : ${esc(e.away.score)}`;
  return `
    <div class="match${pre ? ' is-pre' : ''}${live ? ' is-live' : ''}${isReal(e) ? ' is-real' : ''}">
      <div class="m-status ${st.cls}">${esc(st.text)}</div>
      ${team(e.home, 'home')}
      <div class="m-score">${score}</div>
      ${team(e.away, 'away')}
    </div>`;
}

function matchGroup(title, events, logo) {
  if (!events.length) return '';
  return `<div class="sub-head">${logo ? `<img src="${esc(logo)}" alt="" loading="lazy">` : ''}${esc(title)}</div>${events.map(matchRow).join('')}`;
}

function renderFootballToday() {
  const card = $('#football-today');
  if (!state.football && !state.footballError) {
    card.innerHTML = `<div class="card-head"><h2>Fußball</h2></div>${skeleton(4)}`;
    return;
  }
  if (!state.football) {
    card.innerHTML = `<div class="card-head"><h2>Fußball</h2></div>${stateBox('Ergebnisse nicht verfügbar', 'Der Datendienst antwortet gerade nicht.', { id: 'retry-football', label: 'Erneut laden' })}`;
    return;
  }
  const s = splitFootball();
  let html = '';
  const todayList = [...s.todayReal, ...s.todayCL].slice(0, 4);
  if (todayList.length) html += matchGroup('Heute', todayList);
  const yList = [...s.yReal, ...s.yCL].slice(0, todayList.length ? 3 : 5);
  if (yList.length) html += matchGroup('Gestern', yList);
  if (!s.todayReal.length && state.realSchedule?.next) html += matchGroup('Nächstes Spiel von Real Madrid', [state.realSchedule.next]);
  if (!s.yReal.length && !s.todayReal.length && state.realSchedule?.last && !yList.length) html += matchGroup('Letztes Spiel von Real Madrid', [state.realSchedule.last]);
  if (!html) html = stateBox('Keine Spiele', 'Heute und gestern keine Spiele von Real Madrid oder in der Champions League.');
  card.innerHTML = `<div class="card-head"><h2>Fußball</h2><span class="card-sub"><button data-goto="sport">Alle Spiele</button></span></div>${html}`;
  updateBrief();
}

function renderFootballSport() {
  const tCard = $('#fb-today');
  const yCard = $('#fb-yesterday');
  if (!state.football) {
    const body = state.footballError ? stateBox('Ergebnisse nicht verfügbar', 'Der Datendienst antwortet gerade nicht.', { id: 'retry-football', label: 'Erneut laden' }) : skeleton(5);
    tCard.innerHTML = `<div class="card-head"><h2>Heute</h2></div>${body}`;
    yCard.innerHTML = `<div class="card-head"><h2>Gestern</h2></div>${body}`;
    return;
  }
  const s = splitFootball();
  const clLogo = state.football.events.find(e => e.league === 'uefa.champions')?.leagueLogo;
  const autLogo = state.football.events.find(e => e.league === 'aut.1')?.leagueLogo;
  let today = matchGroup('Real Madrid', s.todayReal) + matchGroup('Champions League', s.todayCL, clLogo);
  if (!s.todayReal.length && state.realSchedule?.next) today += matchGroup('Nächstes Spiel von Real Madrid', [state.realSchedule.next]);
  if (!s.todayCL.length && !s.todayReal.length) today = stateBox('Heute keine Spiele', 'Weder Champions League noch Real Madrid.') + today;
  tCard.innerHTML = `<div class="card-head"><h2>Heute</h2><span class="card-sub">${fmtDayShort(new Date())}</span></div>${today}`;
  let yest = matchGroup('Real Madrid', s.yReal) + matchGroup('Champions League', s.yCL, clLogo) + matchGroup('Admiral Bundesliga', s.yAUT, autLogo);
  if (!yest) {
    yest = stateBox('Gestern keine Spiele', 'In Champions League, bei Real Madrid und in der Bundesliga.');
    if (state.realSchedule?.last) yest += matchGroup('Letztes Spiel von Real Madrid', [state.realSchedule.last]);
  }
  yCard.innerHTML = `<div class="card-head"><h2>Gestern</h2><span class="card-sub">${fmtDayShort(addDays(new Date(), -1))}</span></div>${yest}`;
}

function moneyline(v) {
  if (v == null) return null;
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/[^\d.+-]/g, ''));
  return Number.isFinite(n) && n !== 0 ? n : null;
}

function oddsProbs(o) {
  if (!o || typeof o !== 'object') return null;
  const h = moneyline(o.homeTeamOdds?.moneyLine ?? o.moneyline?.home?.close?.odds ?? o.moneyline?.home?.open?.odds);
  const a = moneyline(o.awayTeamOdds?.moneyLine ?? o.moneyline?.away?.close?.odds ?? o.moneyline?.away?.open?.odds);
  const d = moneyline(o.drawOdds?.moneyLine ?? o.moneyline?.draw?.close?.odds ?? o.moneyline?.draw?.open?.odds);
  if (!h || !a) return null;
  const imp = m => (m > 0 ? 100 / (m + 100) : -m / (-m + 100));
  const ph = imp(h);
  const pa = imp(a);
  const pd = d ? imp(d) : 0;
  const s = ph + pa + pd;
  return { home: ph / s, away: pa / s, draw: pd / s };
}

async function standings(lgId) {
  const data = await getJSON(`${CONFIG.espnStandings}/${lgId}/standings`, 6 * 3600e3);
  const entries = data.children?.[0]?.standings?.entries || data.standings?.entries || [];
  const rows = entries.map((en, i) => {
    const stat = n => en.stats?.find(s => s.name === n || s.type === n)?.value;
    return { id: String(en.team?.id), rank: stat('rank') ?? null, points: stat('points') ?? 0, played: stat('gamesPlayed') ?? 0, idx: i };
  });
  if (rows.some(r => r.rank == null)) rows.sort((a, b) => b.points - a.points || a.idx - b.idx).forEach((r, i) => { r.rank = i + 1; });
  const map = new Map(rows.map(r => [r.id, r]));
  return { map, size: rows.length };
}

function upsetScore(e, table) {
  if (e.state !== 'post' || e.home.score === '' || e.away.score === '') return null;
  const hs = Number(e.home.score);
  const as = Number(e.away.score);
  if (!Number.isFinite(hs) || !Number.isFinite(as)) return null;
  const outcome = hs > as ? 'home' : as > hs ? 'away' : 'draw';
  const probs = oddsProbs(e.odds) || storedOdds(e.id);
  if (probs) {
    const fav = probs.home >= probs.away ? 'home' : 'away';
    const favP = probs[fav];
    if (outcome === 'draw') {
      if (favP < 0.6) return null;
      return { score: (favP - 0.5) * 1.1, underdog: fav === 'home' ? 'away' : 'home', reason: `Remis trotz ${Math.round(favP * 100)} % Siegchance des Favoriten` };
    }
    if (outcome === fav) return null;
    const p = probs[outcome];
    if (p > 0.38) return null;
    return { score: 1 - p, underdog: outcome, reason: `Siegchance vorher ${Math.round(p * 100)} %` };
  }
  if (!table) return null;
  const rh = table.map.get(e.home.id);
  const ra = table.map.get(e.away.id);
  if (!rh || !ra || table.size < 6) return null;
  const n = table.size - 1;
  if (outcome === 'draw') {
    const worse = rh.rank > ra.rank ? 'home' : 'away';
    const gap = Math.abs(rh.rank - ra.rank) / n;
    if (gap < 0.5) return null;
    const w = worse === 'home' ? rh : ra;
    const b = worse === 'home' ? ra : rh;
    return { score: gap * 0.48, underdog: worse, reason: `Remis: Tabellen-${w.rank}. gegen Tabellen-${b.rank}.` };
  }
  const win = outcome === 'home' ? rh : ra;
  const lose = outcome === 'home' ? ra : rh;
  const gap = (win.rank - lose.rank) / n;
  if (gap < 0.3) return null;
  const margin = Math.abs(hs - as);
  const score = gap * 0.92 + (outcome === 'away' ? 0.05 : 0) + Math.min(margin - 1, 2) * 0.03;
  return { score, underdog: outcome, reason: `Tabellen-${win.rank}. schlägt Tabellen-${lose.rank}.` };
}

async function loadUpsets(force = false) {
  const today = startOfDay(new Date());
  const from = addDays(today, -7);
  const to = addDays(today, 0);
  const ttl = force ? 0 : 20 * 60e3;
  try {
    const leagues = await Promise.all(CONFIG.upsetLeagues.map(async lg => {
      const [events, table] = await Promise.all([
        scoreboard(lg, from, to, ttl).catch(() => []),
        lg.table ? standings(lg.id).catch(() => null) : Promise.resolve(null)
      ]);
      return events.map(e => ({ e, u: upsetScore(e, table) })).filter(x => x.u && x.u.score >= 0.3);
    }));
    state.upsets = leagues.flat().sort((a, b) => b.u.score - a.u.score).slice(0, 10);
    state.upsetsError = null;
  } catch (e) {
    state.upsetsError = e;
  }
  renderUpsets();
}

function renderUpsets() {
  const card = $('#fb-upsets');
  const head = '<div class="card-head"><h2>Überraschungen der Woche</h2><span class="card-sub">Letzte 7 Tage</span></div>';
  if (!state.upsets) {
    card.innerHTML = head + (state.upsetsError ? stateBox('Nicht verfügbar', 'Ergebnisse konnten nicht geladen werden.', { id: 'retry-upsets', label: 'Erneut laden' }) : skeleton(6));
    return;
  }
  if (!state.upsets.length) {
    card.innerHTML = head + stateBox('Keine echten Überraschungen', 'Diese Woche haben sich die Favoriten durchgesetzt.');
    return;
  }
  const max = state.upsets[0].u.score;
  card.innerHTML = head + state.upsets.map(({ e, u }, i) => {
    const dogHome = u.underdog === 'home';
    const name = (t, isDog) => `<span class="${isDog ? '' : 'fav'}">${esc(t.short || t.name)}</span>`;
    return `
      <div class="upset">
        <span class="upset-rank">${i + 1}</span>
        <div>
          <div class="upset-line">
            ${e.home.logo ? `<img src="${esc(e.home.logo)}" alt="" loading="lazy">` : ''}${name(e.home, dogHome)}
            <span class="score">${esc(e.home.score)} : ${esc(e.away.score)}</span>
            ${name(e.away, !dogHome)}${e.away.logo ? `<img src="${esc(e.away.logo)}" alt="" loading="lazy">` : ''}
          </div>
          <div class="upset-meta">${esc(u.reason)}<br>${esc(e.leagueName)}, ${esc(fmtDayShort(e.date).replace(',', ''))}</div>
          <div class="meter" aria-hidden="true"><i style="width:${Math.round(clamp(u.score / Math.max(max, 0.01), 0.08, 1) * 100)}%"></i></div>
        </div>
      </div>`;
  }).join('');
}

function tokenize(s) {
  return s.toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter(t => (t.length > 2 || /^\d{2,}$/.test(t)) && !STOP.has(t))
    .map(t => (t.length > 5 && t.endsWith('s') && !t.endsWith('ss') ? t.slice(0, -1) : t));
}

function textOf(html) {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html');
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
}

const MRSS = 'http://search.yahoo.com/mrss/';
const CONTENT_NS = 'http://purl.org/rss/1.0/modules/content/';

function firstEl(parent, names) {
  for (const n of names) {
    const [prefix, local] = n.includes(':') ? n.split(':') : [null, n];
    let list = null;
    if (prefix === 'media') list = parent.getElementsByTagNameNS(MRSS, local);
    else if (prefix === 'content') list = parent.getElementsByTagNameNS(CONTENT_NS, local);
    if (!list || !list.length) list = parent.getElementsByTagName(n);
    if (list && list.length) return list[0];
  }
  return null;
}

function allEls(parent, name) {
  const [prefix, local] = name.includes(':') ? name.split(':') : [null, name];
  let list = prefix === 'media' ? Array.from(parent.getElementsByTagNameNS(MRSS, local)) : [];
  if (!list.length) list = Array.from(parent.getElementsByTagName(name));
  return list;
}

function httpsUrl(u) {
  if (!u || typeof u !== 'string') return '';
  u = u.trim().replace(/&amp;/g, '&');
  if (u.startsWith('//')) u = 'https:' + u;
  if (u.startsWith('http://')) u = 'https://' + u.slice(7);
  if (!u.startsWith('https://')) return '';
  return u
    .replace(/(i\.ds\.at\/[^/]+\/)rs:fill:\d+:\d+/, '$1rs:fill:1200:0')
    .replace(/(ichef\.bbci\.co\.uk\/(?:ace\/standard|news))\/\d+\//, '$1/976/');
}

function firstImg(html) {
  if (!html) return '';
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? httpsUrl(m[1]) : '';
}

function parseFeed(text, src) {
  let doc = new DOMParser().parseFromString(text, 'application/xml');
  if (doc.getElementsByTagName('parsererror').length) doc = new DOMParser().parseFromString(text, 'text/html');
  let nodes = Array.from(doc.getElementsByTagName('item'));
  const atom = !nodes.length;
  if (atom) nodes = Array.from(doc.getElementsByTagName('entry'));
  return nodes.slice(0, 40).map(n => {
    const title = textOf(firstEl(n, ['title'])?.textContent || '');
    let link = '';
    if (atom) {
      const links = Array.from(n.getElementsByTagName('link'));
      const alt = links.find(l => (l.getAttribute('rel') || 'alternate') === 'alternate') || links[0];
      link = alt?.getAttribute('href') || '';
    } else {
      link = (firstEl(n, ['link'])?.textContent || firstEl(n, ['guid'])?.textContent || '').trim();
    }
    const dateStr = firstEl(n, ['pubDate', 'dc:date', 'published', 'updated'])?.textContent;
    const date = dateStr ? new Date(dateStr.trim()) : null;
    const descRaw = firstEl(n, ['description', 'summary'])?.textContent || '';
    const contentRaw = firstEl(n, ['content:encoded', 'content'])?.textContent || '';
    let image = '';
    const medias = allEls(n, 'media:content').filter(m => {
      const type = m.getAttribute('type') || '';
      const medium = m.getAttribute('medium') || '';
      return m.getAttribute('url') && (!type || type.startsWith('image') || medium === 'image');
    });
    if (medias.length) {
      medias.sort((a, b) => (Number(b.getAttribute('width')) || 0) - (Number(a.getAttribute('width')) || 0));
      image = httpsUrl(medias[0].getAttribute('url'));
    }
    if (!image) image = httpsUrl(allEls(n, 'media:thumbnail')[0]?.getAttribute('url'));
    if (!image) {
      const enc = Array.from(n.getElementsByTagName('enclosure')).find(e => (e.getAttribute('type') || '').startsWith('image') || /\.(jpe?g|png|webp)/i.test(e.getAttribute('url') || ''));
      image = httpsUrl(enc?.getAttribute('url'));
    }
    if (!image) image = firstImg(contentRaw) || firstImg(descRaw);
    const html = contentRaw.length > descRaw.length ? contentRaw : descRaw;
    return makeItem(src, { title, link, date, desc: textOf(descRaw) || textOf(contentRaw), html, image });
  }).filter(i => i.title);
}

function makeItem(src, { title, link, date, desc, html, image }) {
  return {
    id: hash((link || title).toLowerCase()),
    source: src.name,
    w: src.w,
    title: title.replace(/\s+/g, ' ').trim(),
    link,
    date: date && !isNaN(date) ? date : null,
    desc: (desc || '').slice(0, 600),
    html: (html || '').slice(0, 24000),
    image: image || ''
  };
}

function parseRss2Json(json, src) {
  return (json.items || []).slice(0, 40).map(it => makeItem(src, {
    title: textOf(it.title),
    link: it.link,
    date: it.pubDate ? new Date(it.pubDate.replace(' ', 'T') + 'Z') : null,
    desc: textOf(it.description),
    html: (it.content || '').length > (it.description || '').length ? it.content : it.description,
    image: httpsUrl(it.thumbnail) || httpsUrl(it.enclosure?.link) || firstImg(it.content) || firstImg(it.description)
  })).filter(i => i.title);
}

async function fetchRss2Json(src) {
  try {
    const res = await fetchT(CONFIG.rss2json + encodeURIComponent(src.url), {}, 9000);
    const json = await res.json();
    if (json.status === 'ok' && json.items?.length) return parseRss2Json(json, src);
  } catch {}
  return [];
}

async function fetchFeeds(feeds) {
  const out = new Array(feeds.length).fill(null);
  const pending = [];
  feeds.forEach((f, i) => {
    const c = mem.get('feed:' + f.url);
    if (c && Date.now() - c.t < 10 * 60e3) out[i] = c.d;
    else pending.push(i);
  });
  if (pending.length) {
    try {
      const data = await (await api('feeds', { method: 'POST', body: { urls: pending.map(i => feeds[i].url) } })).json();
      pending.forEach(i => {
        const xml = data.feeds?.[feeds[i].url];
        if (!xml || !/<(item|entry)[\s>]/i.test(xml)) return;
        const items = parseFeed(xml, feeds[i]);
        if (!items.length) return;
        mem.set('feed:' + feeds[i].url, { t: Date.now(), d: items });
        out[i] = items;
      });
    } catch (e) {
      if (e.message === 'auth') return out.map(x => x || []);
    }
    const still = pending.filter(i => !out[i]);
    await pool(still, 6, async i => {
      const items = await fetchRss2Json(feeds[i]);
      if (items.length) mem.set('feed:' + feeds[i].url, { t: Date.now(), d: items });
      out[i] = items;
    });
  }
  return out.map(x => x || []);
}

function clusterItems(items, cat) {
  const cfg = CONFIG.news[cat];
  const toks = items.map(i => new Set(tokenize(i.title)));
  const df = new Map();
  toks.forEach(set => set.forEach(t => df.set(t, (df.get(t) || 0) + 1)));
  const N = items.length;
  const idf = t => Math.log((N + 1) / ((df.get(t) || 0) + 1)) + 1;
  const weightSum = set => { let s = 0; set.forEach(t => { s += idf(t); }); return s; };
  const sums = toks.map(weightSum);
  const parent = items.map((_, i) => i);
  const find = i => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const union = (a, b) => { const ra = find(a); const rb = find(b); if (ra !== rb) parent[rb] = ra; };
  for (let a = 0; a < N; a++) {
    if (!toks[a].size) continue;
    for (let b = a + 1; b < N; b++) {
      if (!toks[b].size) continue;
      if (items[a].source === items[b].source) continue;
      let shared = 0;
      let count = 0;
      const [small, large] = toks[a].size < toks[b].size ? [toks[a], toks[b]] : [toks[b], toks[a]];
      small.forEach(t => { if (large.has(t)) { shared += idf(t); count++; } });
      if (count < 2) continue;
      const sim = shared / Math.min(sums[a], sums[b]);
      if (sim >= 0.42 || (count >= 3 && sim >= 0.34)) union(a, b);
    }
  }
  const groups = new Map();
  items.forEach((it, i) => {
    const r = find(i);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(it);
  });
  const now = Date.now();
  const clusters = [];
  groups.forEach(group => {
    const sources = [];
    group.slice().sort((a, b) => b.w - a.w).forEach(g => { if (!sources.includes(g.source)) sources.push(g.source); });
    const dates = group.map(g => g.date?.getTime()).filter(Boolean);
    const newest = dates.length ? Math.max(...dates) : now - 6 * 3600e3;
    const ageH = (now - newest) / 3600e3;
    const recency = Math.exp(-ageH / cfg.halfLife);
    const text = group.map(g => `${g.title} ${g.desc.slice(0, 200)}`).join(' ').toLowerCase();
    let boost = 0;
    cfg.interests.forEach(([re, w]) => { if (re.test(text)) boost += w; });
    boost = clamp(boost, -0.75, 2);
    const n = sources.length;
    const avgW = group.reduce((s, g) => s + g.w, 0) / group.length;
    const score = Math.pow(n + 0.25 * (group.length - n), 1.15) * (0.3 + 0.7 * recency) * (1 + boost) * avgW;
    const best = group.slice().sort((a, b) => itemQuality(b) - itemQuality(a))[0];
    const image = best.image || group.find(g => g.image)?.image || '';
    clusters.push({
      id: 'c' + hash(best.id + cat),
      cat,
      title: best.title,
      summary: best.desc.slice(0, 320),
      image,
      date: new Date(newest),
      sources,
      n,
      score,
      best,
      items: group.slice().sort((a, b) => b.w - a.w)
    });
  });
  const strong = clusters.filter(c => c.n >= cfg.min).sort((a, b) => b.score - a.score);
  const rest = clusters.filter(c => c.n < cfg.min).sort((a, b) => b.score - a.score);
  return [...strong, ...rest].slice(0, 40);
}

function itemQuality(i) {
  const len = textOf(i.html).length;
  return i.w * 2 + (i.image ? 1.5 : 0) + Math.min(len / 1500, 2.5);
}

function compactCluster(c) {
  return {
    ...c,
    date: c.date.getTime(),
    best: { ...c.best, date: c.best.date?.getTime() ?? null, html: c.best.html.slice(0, 12000) },
    items: c.items.slice(0, 8).map(i => ({ ...i, date: i.date?.getTime() ?? null, html: i === c.best ? '' : i.html.slice(0, 2500) }))
  };
}

function reviveCluster(c) {
  const rev = i => ({ ...i, date: i.date ? new Date(i.date) : null });
  const best = rev(c.best);
  return { ...c, date: new Date(c.date), best, items: c.items.map(i => (i.id === best.id ? best : rev(i))) };
}

async function loadNews(cat, force = false) {
  const key = 'news:' + cat;
  const cached = store.get(key);
  if (cached && !state.news[cat]) {
    state.news[cat] = { clusters: cached.d.map(reviveCluster), fetched: new Date(cached.t), stale: true };
    registerClusters(state.news[cat].clusters);
    renderNewsFor(cat);
  }
  if (!force && cached && Date.now() - cached.t < 15 * 60e3) {
    if (state.news[cat]) state.news[cat].stale = false;
    return;
  }
  if (state.news[cat]?.loading) return;
  state.news[cat] = { ...(state.news[cat] || { clusters: null }), loading: true };
  const feeds = CONFIG.feeds[cat].map(([name, url, w]) => ({ name, url, w }));
  const results = await fetchFeeds(feeds);
  const cfg = CONFIG.news[cat];
  const cutoff = Date.now() - cfg.maxAgeH * 3600e3;
  const seen = new Set();
  const items = results.flat().filter(Boolean).filter(i => {
    if (seen.has(i.id)) return false;
    seen.add(i.id);
    return !i.date || i.date.getTime() >= cutoff;
  });
  if (!items.length) {
    state.news[cat] = { ...state.news[cat], loading: false, error: !state.news[cat].clusters };
    renderNewsFor(cat);
    return;
  }
  const clusters = clusterItems(items, cat);
  state.news[cat] = { clusters, fetched: new Date(), loading: false, error: false, feedsOk: results.filter(r => r && r.length).length, feedsTotal: feeds.length };
  registerClusters(clusters);
  store.set(key, { t: Date.now(), d: clusters.slice(0, 24).map(compactCluster) });
  renderNewsFor(cat);
}

function registerClusters(list) {
  list.forEach(c => state.clusters.set(c.id, c));
}

function renderNewsFor(cat) {
  if (['tech', 'oesterreich', 'welt'].includes(cat)) {
    renderTopNews();
    if (state.loaded.has('news')) renderNewsFeed(cat);
  }
  if (cat === 'fussball') renderSimpleNews('#fb-news', 'fussball', 'Fußball-News', 6);
  if (cat === 'f1') renderSimpleNews('#f1-news', 'f1', 'Formel-1-News', 5);
  if (cat === 'ausdauer') renderSimpleNews('#endurance-news', 'ausdauer', 'Laufen & Triathlon', 8);
}

function sourceBadge(c) {
  if (c.n >= 5) return `<span class="badge is-verified">${c.n} Quellen</span>`;
  if (c.n > 1) return `<span class="badge">${c.n} Quellen</span>`;
  return `<span class="badge">${esc(c.sources[0])}</span>`;
}

function newsLead(c, showCat = false) {
  return `
    <button class="news-item news-lead${c.image ? ' has-img' : ''}" data-cluster="${c.id}">
      ${c.image ? `<img class="lead-img" src="${esc(c.image)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ''}
      <div>
        <h3>${esc(c.title)}</h3>
        ${c.summary ? `<p>${esc(c.summary)}</p>` : ''}
        <div class="news-meta">${showCat ? `<span class="badge cat">${esc(CONFIG.news[c.cat].label)}</span>` : ''}${sourceBadge(c)}<span>${relPast(c.date)}</span></div>
      </div>
    </button>`;
}

function newsRow(c, showCat = false) {
  return `
    <button class="news-item news-row${c.image ? '' : ' no-img'}" data-cluster="${c.id}">
      <div>
        <h3>${esc(c.title)}</h3>
        <div class="news-meta">${showCat ? `<span class="badge cat">${esc(CONFIG.news[c.cat].label)}</span>` : ''}${sourceBadge(c)}<span>${relPast(c.date)}</span></div>
      </div>
      ${c.image ? `<img src="${esc(c.image)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : ''}
    </button>`;
}

function renderTopNews() {
  const card = $('#news-top');
  const cats = ['tech', 'oesterreich', 'welt'];
  const lists = cats.map(c => state.news[c]?.clusters || null);
  const head = '<div class="card-head"><h2>Top-Nachrichten</h2><span class="card-sub"><button data-goto="news">Alle News</button></span></div>';
  if (lists.every(l => !l)) {
    const err = cats.every(c => state.news[c]?.error);
    card.innerHTML = head + (err ? stateBox('News nicht verfügbar', 'Die Feeds sind gerade nicht erreichbar.', { id: 'retry-news', label: 'Erneut laden' }) : `<div class="news-top-grid"><div>${skeleton(2, true)}</div><div>${skeleton(6)}</div></div>`);
    return;
  }
  const weight = { tech: 1, oesterreich: 0.95, welt: 0.95 };
  const picks = [];
  const dup = c => picks.some(x => x === c || x.best.id === c.best.id || x.title === c.title);
  const take = (cat, count) => {
    const l = state.news[cat]?.clusters || [];
    l.filter(c => !dup(c)).slice(0, count).forEach(c => picks.push(c));
  };
  take('tech', 2);
  take('oesterreich', 2);
  take('welt', 1);
  const pool5 = cats.flatMap(cat => {
    const l = state.news[cat]?.clusters || [];
    const max = l[0]?.score || 1;
    return l.slice(0, 8).map(c => ({ c, s: (c.score / max) * weight[cat] * (c.n >= 5 ? 1.2 : 1) }));
  }).sort((a, b) => b.s - a.s);
  while (picks.length < 5 && pool5.length) {
    const next = pool5.shift().c;
    if (!dup(next)) picks.push(next);
  }
  const ranked = picks.map(c => {
    const l = state.news[c.cat]?.clusters || [];
    const max = l[0]?.score || 1;
    return { c, s: (c.score / max) * weight[c.cat] * Math.min(c.n, 10) };
  }).sort((a, b) => b.s - a.s).map(x => x.c);
  if (!ranked.length) {
    card.innerHTML = head + stateBox('Noch keine Meldungen', 'Die Feeds werden gerade geladen.');
    return;
  }
  const lead = ranked.find(c => c.image) || ranked[0];
  const rest = ranked.filter(c => c !== lead);
  card.innerHTML = `${head}<div class="news-top-grid">${newsLead(lead, true)}<div class="news-list">${rest.map(c => newsRow(c, true)).join('')}</div></div>`;
}

function renderNewsFeed(cat) {
  const card = $(`#news-${cat}`);
  const data = state.news[cat];
  const label = CONFIG.news[cat].label;
  const sub = data?.fetched ? `Stand ${fmtTime(data.fetched)}` : '';
  const head = `<div class="card-head"><h2>${esc(label)}</h2><span class="card-sub">${sub}</span></div>`;
  if (!data?.clusters) {
    card.innerHTML = head + (data?.error ? stateBox('Feeds nicht erreichbar', 'Öffentliche Proxys blockieren gerade. Später erneut versuchen oder eigenen Proxy eintragen.', { id: 'retry-news', label: 'Erneut laden' }) : skeleton(2, true) + skeleton(6));
    return;
  }
  const list = data.clusters.slice(0, 21);
  if (!list.length) {
    card.innerHTML = head + stateBox('Keine Meldungen', 'In den letzten Stunden gab es nichts Neues.');
    return;
  }
  const lead = list.find(c => c.image) || list[0];
  const rest = list.filter(c => c !== lead);
  card.innerHTML = `${head}${newsLead(lead)}<div class="feed-grid">${rest.map(c => newsRow(c)).join('')}</div>`;
}

function renderSimpleNews(sel, cat, title, count) {
  const card = $(sel);
  if (!card) return;
  const data = state.news[cat];
  const head = `<div class="card-head"><h2>${esc(title)}</h2>${data?.fetched ? `<span class="card-sub">Stand ${fmtTime(data.fetched)}</span>` : ''}</div>`;
  if (!data?.clusters) {
    card.innerHTML = head + (data?.error ? stateBox('Feeds nicht erreichbar', 'Später erneut versuchen.', { id: `retry-${cat}`, label: 'Erneut laden' }) : skeleton(1, true) + skeleton(4));
    return;
  }
  const list = data.clusters.slice(0, count);
  if (!list.length) {
    card.innerHTML = head + stateBox('Keine Meldungen', '');
    return;
  }
  const lead = list.find(c => c.image) || list[0];
  card.innerHTML = head + newsLead(lead) + list.filter(c => c !== lead).map(c => newsRow(c)).join('');
}

const ALLOWED = new Set(['p', 'br', 'h2', 'h3', 'h4', 'h5', 'ul', 'ol', 'li', 'blockquote', 'strong', 'b', 'em', 'i', 'figure', 'figcaption', 'img']);
const DROP = new Set(['script', 'style', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'noscript', 'svg', 'video', 'audio', 'source', 'link', 'meta', 'select', 'textarea', 'canvas', 'template']);

function sanitize(html) {
  const doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  const root = doc.body.firstElementChild;
  const walk = node => {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === 8) return child.remove();
      if (child.nodeType !== 1) return;
      const tag = child.tagName.toLowerCase();
      if (DROP.has(tag)) return child.remove();
      walk(child);
      if (tag === 'img') {
        const src = httpsUrl(child.getAttribute('src') || child.getAttribute('data-src') || '');
        const w = Number(child.getAttribute('width'));
        if (!src || (w && w < 40) || /pixel|tracking|feedburner|stat\.|\/ad[sx]?\//i.test(src)) return child.remove();
        const alt = child.getAttribute('alt') || '';
        Array.from(child.attributes).forEach(a => child.removeAttribute(a.name));
        child.setAttribute('src', src);
        child.setAttribute('alt', alt);
        child.setAttribute('loading', 'lazy');
        child.setAttribute('referrerpolicy', 'no-referrer');
        return;
      }
      if (ALLOWED.has(tag)) {
        Array.from(child.attributes).forEach(a => child.removeAttribute(a.name));
        return;
      }
      const frag = doc.createDocumentFragment();
      if (['div', 'section', 'article', 'h1', 'header', 'footer', 'table', 'tr'].includes(tag)) {
        const p = doc.createElement(tag === 'h1' ? 'h2' : 'p');
        while (child.firstChild) p.appendChild(child.firstChild);
        if (p.textContent.trim() || p.querySelector('img')) frag.appendChild(p);
      } else {
        while (child.firstChild) frag.appendChild(child.firstChild);
      }
      child.replaceWith(frag);
    });
  };
  walk(root);
  $$('p', root).forEach(p => {
    const t = p.textContent.trim();
    if ((!t && !p.querySelector('img')) || /appeared first on|the post .* appeared|^read more|^weiterlesen|^continue reading|^mehr lesen|^mehr zum thema|^\[…\]|^\[\.\.\.\]$|^(credit|image|bild|foto|photo|quelle)\s*:/i.test(t)) return p.remove();
    p.innerHTML = p.innerHTML.replace(/(\s|&nbsp;)*(\[?(…|\.\.\.)\]?)?(\s|&nbsp;)*(more|mehr|weiterlesen|continue reading|read more)(\s|&nbsp;)*(…|\.\.\.)?(\s|&nbsp;)*$/i, '…');
  });
  $$('p p', root).forEach(inner => inner.replaceWith(...inner.childNodes));
  return root.innerHTML;
}

function imgKey(u) {
  if (!u) return '';
  try {
    const url = new URL(u, location.href);
    let last = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() || '');
    last = last.replace(/\.(jpe?g|png|webp|avif|gif)$/i, '').replace(/[-_](\d{2,4}x\d{2,4}|w\d{2,4}|\d{2,4}w|scaled|thumb|large|medium|small)$/i, '');
    return last.toLowerCase();
  } catch {
    return u;
  }
}

function renderBlocks(blocks) {
  let html = '';
  let inList = false;
  blocks.forEach(b => {
    if (b.t === 'li') {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${esc(b.x)}</li>`;
      return;
    }
    if (inList) { html += '</ul>'; inList = false; }
    if (b.t === 'h') html += `<h3>${esc(b.x)}</h3>`;
    else if (b.t === 'q') html += `<blockquote>${esc(b.x)}</blockquote>`;
    else html += `<p>${esc(b.x)}</p>`;
  });
  if (inList) html += '</ul>';
  return html;
}

function feedContent(c, it, heroUrl) {
  const holder = document.createElement('div');
  holder.innerHTML = sanitize(it.html || '');
  const heroK = imgKey(heroUrl);
  let firstImg = true;
  $$('img', holder).forEach(img => {
    const k = imgKey(img.getAttribute('src'));
    if ((heroK && k === heroK) || (firstImg && heroUrl)) (img.closest('figure') || img).remove();
    firstImg = false;
  });
  $$('p, figure', holder).forEach(el => { if (!el.textContent.trim() && !el.querySelector('img')) el.remove(); });
  return holder.innerHTML;
}

function setReaderHero(url) {
  const hero = $('#reader-hero');
  hero.innerHTML = url ? `<img src="${esc(url)}" alt="" referrerpolicy="no-referrer">` : '';
}

async function openReader(c, item) {
  const it = item || c.best;
  const token = (state.readerToken = (state.readerToken || 0) + 1);
  const heroUrl = it.imageHi || it.image || c.image;
  setReaderHero(heroUrl);
  $('#reader-meta').innerHTML = `${sourceBadge(c)}<span>${esc(it.source)}</span><span>${it.date ? esc(`${fmtDayShort(it.date)} ${fmtTime(it.date)}`) : ''}</span>`;
  $('#reader-title').textContent = it.title;
  const clean = feedContent(c, it, heroUrl);
  const cleanLen = textOf(clean).length;
  const teaser = it.desc || textOf(clean);
  const content = $('#reader-content');
  content.innerHTML = (cleanLen > 500 ? clean : (teaser ? `<p>${esc(teaser)}</p>` : '')) + (it.link ? '<p class="reader-loading">Artikel wird geladen …</p>' : '');
  const alts = c.items.filter(i => i !== it);
  $('#reader-sources').innerHTML = `
    <h4>Berichtet von</h4>
    <div class="src-list">${c.sources.map(s => `<span class="badge">${esc(s)}</span>`).join('')}</div>
    ${alts.length ? `<div class="src-alt">${alts.slice(0, 6).map(a => `<button data-reader-item="${esc(a.id)}" data-reader-cluster="${c.id}">${esc(a.title)}<small>${esc(a.source)}${a.date ? `, ${relPast(a.date)}` : ''}</small></button>`).join('')}</div>` : ''}`;
  $('#reader-scroll').scrollTop = 0;
  openSheet($('#reader'));
  if (!it.link || !/^https?:\/\//.test(it.link)) return;
  let data = null;
  try {
    data = it.article || await (await api('article', { params: { url: it.link } })).json();
    it.article = data;
  } catch {}
  if (token !== state.readerToken) return;
  $('.reader-loading', content)?.remove();
  if (data?.image && imgKey(data.image) !== imgKey(heroUrl)) {
    const current = $('#reader-hero img');
    const swap = () => {
      if (token !== state.readerToken) return;
      it.imageHi = data.image;
      if (it === c.best) c.image = data.image;
      setReaderHero(data.image);
    };
    if (!current || !current.complete || current.naturalWidth < 1000) {
      const probe = new Image();
      probe.referrerPolicy = 'no-referrer';
      probe.onload = () => { if (!current || probe.naturalWidth > (current.naturalWidth || 0)) swap(); };
      probe.src = data.image;
    }
  }
  const full = data?.blocks?.length ? renderBlocks(data.blocks) : '';
  const fullLen = data?.chars || 0;
  if (full && fullLen > Math.max(400, cleanLen * 1.2, teaser.length * 1.5)) {
    content.innerHTML = full;
  } else if (cleanLen <= 500) {
    const others = c.items.filter(i => i !== it && i.desc && i.desc !== teaser).slice(0, 3);
    content.insertAdjacentHTML('beforeend', others.map(o => `<h4>${esc(o.source)}</h4><p>${esc(o.desc)}</p>`).join('') +
      `<p class="reader-teaser-note">${esc(it.source)} gibt nur einen Anriss frei.${others.length ? ' Darüber die Zusammenfassungen weiterer Quellen.' : ''}</p>`);
  }
}

async function upgradeLeadImage(img) {
  const holder = img.closest('[data-cluster]');
  const c = holder && state.clusters.get(holder.dataset.cluster);
  if (!c || c.imageChecked || img.naturalWidth >= 700) return;
  c.imageChecked = true;
  const it = c.best;
  if (!it.link) return;
  try {
    const data = it.article || await (await api('article', { params: { url: it.link } })).json();
    it.article = data;
    if (!data?.image || imgKey(data.image) === imgKey(img.src) && img.naturalWidth >= 400) return;
    const probe = new Image();
    probe.referrerPolicy = 'no-referrer';
    probe.onload = () => {
      if (probe.naturalWidth <= img.naturalWidth) return;
      c.image = data.image;
      it.imageHi = data.image;
      $$(`[data-cluster="${c.id}"] img`).forEach(el => { el.src = data.image; });
    };
    probe.src = data.image;
  } catch {}
}

function openEventSheet(ev) {
  $('#reader-hero').innerHTML = '';
  const when = ev.todoId
    ? `Fällig ${ev.allDay ? `am ${fmtDayLong(ev.start)}` : `am ${fmtDayLong(ev.start)} um ${fmtTime(ev.start)} Uhr`}`
    : ev.allDay
    ? `${fmtDayLong(ev.start)}, ganztägig`
    : `${fmtDayLong(ev.start)}, ${fmtTime(ev.start)} bis ${fmtTime(ev.end)} Uhr`;
  $('#reader-meta').innerHTML = `<span class="badge" style="color:${esc(ev.color)}">${esc(ev.calName || 'Kalender')}</span>${state.cal.demo && !ev.todoId ? '<span class="demo-flag">Beispieldaten</span>' : ''}`;
  $('#reader-title').textContent = ev.title;
  let html = `<p><strong>${esc(when)}</strong></p>`;
  if (ev.location) html += `<p>${esc(ev.location)}</p>`;
  if (ev.todoId) html += `<p><button class="btn btn-primary" data-todo-complete="${esc(ev.todoId)}">Als erledigt markieren</button></p>`;
  if (ev.description) {
    html += /<[a-z][^>]*>/i.test(ev.description)
      ? sanitize(ev.description)
      : ev.description.split(/\n{2,}/).map(par => `<p>${esc(par).replace(/\n/g, '<br>')}</p>`).join('');
  }
  $('#reader-content').innerHTML = html;
  $('#reader-sources').innerHTML = '';
  openSheet($('#reader'));
}

async function loadF1(force = false) {
  const ttl = force ? 0 : 30 * 60e3;
  try {
    const [sched, last, stand] = await Promise.all([
      getJSON(`${CONFIG.f1}/current.json`, force ? 0 : 12 * 3600e3),
      getJSON(`${CONFIG.f1}/current/last/results.json`, ttl),
      getJSON(`${CONFIG.f1}/current/driverStandings.json`, ttl)
    ]);
    state.f1 = {
      races: sched.MRData?.RaceTable?.Races || [],
      last: last.MRData?.RaceTable?.Races?.[0] || null,
      standings: stand.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || []
    };
    state.f1Error = null;
  } catch (e) {
    state.f1Error = e;
  }
  renderF1();
}

const f1Date = s => (s?.date ? new Date(`${s.date}T${s.time || '12:00:00Z'}`) : null);
const teamColor = id => TEAM_COLORS[id] || '#8e8e93';

function renderF1() {
  const ids = ['#f1-next', '#f1-max', '#f1-last', '#f1-standings'];
  if (!state.f1) {
    const titles = ['Nächstes Rennen', 'Max Verstappen', 'Letztes Rennen', 'WM-Stand'];
    ids.forEach((id, i) => {
      $(id).innerHTML = `<div class="card-head"><h2>${titles[i]}</h2></div>${state.f1Error ? stateBox('Nicht verfügbar', 'Die F1-Daten konnten nicht geladen werden.', { id: 'retry-f1', label: 'Erneut laden' }) : skeleton(4)}`;
    });
    return;
  }
  const { races, last, standings } = state.f1;
  const now = Date.now();
  const next = races.find(r => (f1Date(r)?.getTime() || 0) + 2.5 * 3600e3 > now);
  const nextCard = $('#f1-next');
  if (next) {
    const sessionDefs = [['FirstPractice', 'Training 1'], ['SecondPractice', 'Training 2'], ['ThirdPractice', 'Training 3'], ['SprintQualifying', 'Sprint-Qualifying'], ['Sprint', 'Sprint'], ['Qualifying', 'Qualifying']];
    const sessions = sessionDefs.filter(([k]) => next[k]).map(([k, label]) => ({ label, date: f1Date(next[k]), race: false }));
    sessions.push({ label: 'Rennen', date: f1Date(next), race: true });
    sessions.sort((a, b) => a.date - b.date);
    const loc = next.Circuit?.Location;
    nextCard.innerHTML = `
      <div>
        <p class="f1-round">Runde ${esc(next.round)} von ${races.length}</p>
        <h2 class="f1-race">${esc(next.raceName)}</h2>
        <p class="f1-circuit">${esc(next.Circuit?.circuitName || '')}${loc ? `, ${esc(loc.locality)}, ${esc(loc.country)}` : ''}</p>
      </div>
      <div class="countdown" id="f1-countdown" data-target="${f1Date(next).getTime()}"></div>
      <div class="sessions">${sessions.map(s => `<div class="session${s.race ? ' is-race' : ''}${s.date.getTime() + (s.race ? 2 : 1.2) * 3600e3 < now ? ' is-done' : ''}"><span>${esc(s.label)}</span><span>${esc(fmtDayShort(s.date).split(',')[0])} ${fmtTime(s.date)}</span></div>`).join('')}</div>`;
    tickCountdown();
  } else {
    nextCard.innerHTML = `<div class="card-head"><h2>Saison beendet</h2></div>${stateBox('Kein weiteres Rennen geplant', 'Der Kalender für die nächste Saison erscheint hier, sobald er veröffentlicht ist.')}`;
  }
  const leader = standings[0];
  const max = standings.find(s => s.Driver?.driverId === CONFIG.maxId);
  const maxCard = $('#f1-max');
  if (max) {
    const cid = max.Constructors?.[0]?.constructorId;
    maxCard.style.setProperty('--team', teamColor(cid));
    const gap = Number(leader.points) - Number(max.points);
    const behind = standings[Number(max.position)];
    const gapText = max.position === '1' ? `+${fmtNum(Number(max.points) - Number(behind?.points || 0), 0)} auf P2` : `${fmtNum(gap, 0)} hinter P1`;
    const res = last?.Results?.find(r => r.Driver?.driverId === CONFIG.maxId);
    const delta = res ? Number(res.grid) - Number(res.position) : 0;
    maxCard.innerHTML = `
      <span class="team-stripe" aria-hidden="true"></span>
      <div class="card-head"><h2>Max Verstappen</h2><span class="card-sub">${esc(max.Constructors?.[0]?.name || '')}</span></div>
      <div class="max-hero"><span class="max-pos">P${esc(max.position)}</span><span class="max-pts"><strong>${esc(max.points)} Pkt.</strong>${esc(gapText)}</span></div>
      <div class="stat-grid">
        <div><span>Siege</span><strong>${esc(max.wins)}</strong></div>
        <div><span>Letztes Rennen</span><strong>${res ? (/^\d+$/.test(res.positionText) ? `P${esc(res.position)}` : 'Ausfall') : '–'}</strong></div>
        <div><span>Startplatz</span><strong>${res ? (res.grid === '0' ? 'Boxengasse' : `P${esc(res.grid)}`) : '–'}</strong></div>
        <div><span>Plätze gutgemacht</span><strong>${res ? (delta > 0 ? `+${delta}` : delta) : '–'}</strong></div>
      </div>`;
  } else {
    maxCard.innerHTML = `<div class="card-head"><h2>Max Verstappen</h2></div>${stateBox('Noch keine Wertung', 'Daten erscheinen nach dem ersten Rennen.')}`;
  }
  const lastCard = $('#f1-last');
  if (last) {
    const results = last.Results || [];
    let rows = results.slice(0, 10);
    const maxRes = results.find(r => r.Driver?.driverId === CONFIG.maxId);
    if (maxRes && !rows.includes(maxRes)) rows = [...rows, maxRes];
    const status = r => {
      if (r.Time?.time) return r.Time.time;
      if (/Lap/.test(r.status)) return r.status.replace('Laps', 'Runden').replace('Lap', 'Runde');
      return r.status === 'Finished' ? 'im Ziel' : 'Ausfall';
    };
    lastCard.innerHTML = `<div class="card-head"><h2>${esc(last.raceName)}</h2><span class="card-sub">${esc(fmtDayShort(f1Date(last)))}</span></div>
      ${rows.map(r => `<div class="result-row${r.Driver?.driverId === CONFIG.maxId ? ' is-max' : ''}" style="--team:${teamColor(r.Constructor?.constructorId)}">
        <span class="pos">${esc(r.positionText)}</span><span class="tc"></span>
        <span class="who">${esc(r.Driver?.familyName)}<small>${esc(r.Constructor?.name)}</small></span>
        <span class="val">${esc(status(r))}</span></div>`).join('')}`;
  } else {
    lastCard.innerHTML = `<div class="card-head"><h2>Letztes Rennen</h2></div>${stateBox('Noch kein Rennen gefahren', '')}`;
  }
  const stCard = $('#f1-standings');
  if (standings.length) {
    const top = Number(standings[0].points) || 1;
    let rows = standings.slice(0, 10);
    if (max && !rows.includes(max)) rows = [...rows, max];
    stCard.innerHTML = `<div class="card-head"><h2>WM-Stand</h2><span class="card-sub">Fahrer</span></div>
      ${rows.map(s => `<div class="standing-row${s.Driver?.driverId === CONFIG.maxId ? ' is-max' : ''}" style="--team:${teamColor(s.Constructors?.[0]?.constructorId)}">
        <span class="pos">${esc(s.position)}</span><span class="code">${esc(s.Driver?.code || s.Driver?.familyName?.slice(0, 3).toUpperCase())}</span>
        <span class="bar"><i style="width:${(Number(s.points) / top * 100).toFixed(1)}%"></i></span><span class="pts">${esc(s.points)}</span></div>`).join('')}`;
  } else {
    stCard.innerHTML = `<div class="card-head"><h2>WM-Stand</h2></div>${stateBox('Noch keine Wertung', '')}`;
  }
}

function tickCountdown() {
  const el = $('#f1-countdown');
  if (!el) return;
  const diff = Math.max(0, Number(el.dataset.target) - Date.now());
  const d = Math.floor(diff / 86400e3);
  const h = Math.floor((diff % 86400e3) / 3600e3);
  const m = Math.floor((diff % 3600e3) / 60e3);
  el.innerHTML = diff === 0
    ? '<div style="grid-column:1/-1"><strong>Live</strong><span>Das Rennen läuft oder ist gerade vorbei</span></div>'
    : `<div><strong>${d}</strong><span>${d === 1 ? 'Tag' : 'Tage'}</span></div><div><strong>${h}</strong><span>Std.</span></div><div><strong>${pad(m)}</strong><span>Min.</span></div>`;
}

const CAL_COLORS = ['#0a84ff', '#34c759', '#ff9f0a', '#af52de', '#ff375f', '#5ac8fa', '#a2845e'];
const tzFormatters = new Map();

function calConnected() {
  return state.cal.demo || state.cal.sources.length > 0;
}

function renderCalRows(list) {
  const rows = list.length ? list : [{ url: '', name: '', color: CAL_COLORS[0] }];
  $('#cal-rows').innerHTML = rows.map((r, i) => {
    const color = r.color || CAL_COLORS[i % CAL_COLORS.length];
    return `<div class="cal-row">
      <button type="button" class="cal-row-color" data-color="${esc(color)}" style="--c:${esc(color)}" aria-label="Farbe ändern"></button>
      <div class="cal-row-fields">
        <input class="cal-row-name" type="text" maxlength="40" placeholder="Name, z. B. Schule" value="${esc(r.name || '')}" aria-label="Name">
        <input class="cal-row-url" type="url" spellcheck="false" autocomplete="off" placeholder="Privatadresse im iCal-Format" value="${esc(r.url || '')}" aria-label="iCal-Adresse">
      </div>
      <button type="button" class="cal-row-del" aria-label="Entfernen">${ICON_SVG.close}</button>
    </div>`;
  }).join('');
}

function readCalRows() {
  return $$('#cal-rows .cal-row').map(row => ({
    url: $('.cal-row-url', row).value.trim(),
    name: $('.cal-row-name', row).value.trim(),
    color: $('.cal-row-color', row).dataset.color
  }));
}

function updateCalStatus() {
  const el = $('#cal-status');
  if (!el) return;
  const n = state.cal.sources.length;
  if (!n) {
    el.textContent = 'Kein Kalender verbunden';
    el.classList.remove('is-ok');
    return;
  }
  const failed = state.cal.failed || 0;
  el.textContent = failed ? `${n - failed} von ${n} Kalendern geladen` : `${n} ${n === 1 ? 'Kalender' : 'Kalender'} verbunden`;
  el.classList.toggle('is-ok', !failed);
}

function unescapeICS(v) {
  return v.replace(/\\n/gi, '\n').replace(/\\([,;\\])/g, '$1');
}

function tzOffset(ts, tz) {
  let f = tzFormatters.get(tz);
  if (!f) {
    f = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    tzFormatters.set(tz, f);
  }
  const parts = f.formatToParts(new Date(ts));
  const get = t => Number(parts.find(p => p.type === t).value);
  return Date.UTC(get('year'), get('month') - 1, get('day'), get('hour') % 24, get('minute'), get('second')) - ts;
}

function zonedTime(y, mo, d, h, mi, s, tz) {
  const local = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (!tz || tz === local) return new Date(y, mo, d, h, mi, s);
  try {
    const guess = Date.UTC(y, mo, d, h, mi, s);
    const off = tzOffset(guess, tz);
    let t = guess - off;
    const off2 = tzOffset(t, tz);
    if (off2 !== off) t = guess - off2;
    return new Date(t);
  } catch {
    return new Date(y, mo, d, h, mi, s);
  }
}

function icsDate(value, params = {}) {
  const m = String(value).trim().match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/);
  if (!m) return { date: new Date(NaN), allDay: false };
  const [, y, mo, d, h, mi, sec, z] = m;
  if (!h || params.VALUE === 'DATE') return { date: new Date(+y, +mo - 1, +d), allDay: true };
  if (z) return { date: new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +(sec || 0))), allDay: false };
  return { date: zonedTime(+y, +mo - 1, +d, +h, +mi, +(sec || 0), params.TZID), allDay: false };
}

function icsDuration(v) {
  const m = String(v).match(/^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/);
  if (!m) return 0;
  const ms = ((+m[2] || 0) * 7 * 86400 + (+m[3] || 0) * 86400 + (+m[4] || 0) * 3600 + (+m[5] || 0) * 60 + (+m[6] || 0)) * 1000;
  return m[1] === '-' ? -ms : ms;
}

function parseICS(text) {
  const lines = text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/);
  const cal = { name: '', events: [] };
  let cur = null;
  let nested = 0;
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') { cur = { exdates: [] }; nested = 0; continue; }
    if (line === 'END:VEVENT') { if (cur) cal.events.push(cur); cur = null; continue; }
    if (cur && line.startsWith('BEGIN:')) { nested++; continue; }
    if (cur && line.startsWith('END:')) { nested = Math.max(0, nested - 1); continue; }
    if (nested) continue;
    const m = line.match(/^([A-Za-z0-9-]+)((?:;[^:]*)?):(.*)$/);
    if (!m) continue;
    const name = m[1].toUpperCase();
    const params = {};
    m[2].split(';').slice(1).forEach(part => {
      const i = part.indexOf('=');
      if (i > 0) params[part.slice(0, i).toUpperCase()] = part.slice(i + 1).replace(/^"|"$/g, '');
    });
    const value = m[3];
    if (!cur) {
      if (name === 'X-WR-CALNAME') cal.name = unescapeICS(value);
      continue;
    }
    switch (name) {
      case 'UID': cur.uid = value; break;
      case 'SUMMARY': cur.summary = unescapeICS(value); break;
      case 'LOCATION': cur.location = unescapeICS(value); break;
      case 'DESCRIPTION': cur.description = unescapeICS(value); break;
      case 'STATUS': cur.status = value.toUpperCase(); break;
      case 'DTSTART': cur.start = icsDate(value, params); cur.allDay = cur.start.allDay; break;
      case 'DTEND': cur.end = icsDate(value, params); break;
      case 'DURATION': cur.duration = icsDuration(value); break;
      case 'RRULE': cur.rrule = Object.fromEntries(value.split(';').map(x => x.split('=')).filter(x => x.length === 2).map(([k, v]) => [k.toUpperCase(), v])); break;
      case 'EXDATE': value.split(',').forEach(v => cur.exdates.push(icsDate(v, params).date.getTime())); break;
      case 'RECURRENCE-ID': cur.recurrenceId = icsDate(value, params).date.getTime(); break;
    }
  }
  return cal;
}

function nthWeekdays(month, b) {
  const list = [];
  const dim = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) {
    const x = new Date(month.getFullYear(), month.getMonth(), d);
    if (x.getDay() === b.wd) list.push(x);
  }
  if (!b.n) return list;
  const pick = b.n > 0 ? list[b.n - 1] : list[list.length + b.n];
  return pick ? [pick] : [];
}

function occurrences(ev, from, to) {
  const r = ev.rrule;
  const freq = r.FREQ;
  const interval = Math.max(1, Number(r.INTERVAL) || 1);
  const count = r.COUNT ? Number(r.COUNT) : Infinity;
  let until = null;
  if (r.UNTIL) {
    until = icsDate(r.UNTIL, {}).date;
    if (/^\d{8}$/.test(r.UNTIL)) until = addDays(until, 1);
  }
  const start = ev.start.date;
  const codes = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  const byday = r.BYDAY ? r.BYDAY.split(',').map(x => {
    const m = x.match(/^([+-]?\d+)?(SU|MO|TU|WE|TH|FR|SA)$/);
    return m ? { n: m[1] ? Number(m[1]) : 0, wd: codes.indexOf(m[2]) } : null;
  }).filter(Boolean) : null;
  const bymonthday = r.BYMONTHDAY ? r.BYMONTHDAY.split(',').map(Number) : null;
  const bymonth = r.BYMONTH ? r.BYMONTH.split(',').map(Number) : null;
  const withTime = d => { const x = new Date(d); x.setHours(start.getHours(), start.getMinutes(), start.getSeconds(), 0); return x; };
  const lo = addDays(from, -3);
  const out = [];
  let n = 0;
  let stop = false;
  const emit = d => {
    if (d < start) return;
    if ((until && d > until) || n >= count || d > to) { stop = true; return; }
    n++;
    if (d >= lo) out.push(d);
  };
  const run = list => list.sort((a, b) => a - b).forEach(d => { if (!stop) emit(d); });
  let guard = 0;
  if (freq === 'DAILY') {
    for (let d = startOfDay(start); !stop && guard++ < 4000; d = addDays(d, interval)) {
      if (bymonth && !bymonth.includes(d.getMonth() + 1)) continue;
      if (byday && !byday.some(b => b.wd === d.getDay())) continue;
      run([withTime(d)]);
    }
  } else if (freq === 'WEEKLY') {
    const days = byday ? byday.map(b => b.wd) : [start.getDay()];
    for (let w = startOfWeek(start); !stop && guard++ < 1500; w = addDays(w, 7 * interval)) {
      run(days.map(wd => withTime(addDays(w, (wd + 6) % 7))));
    }
  } else if (freq === 'MONTHLY') {
    for (let m = new Date(start.getFullYear(), start.getMonth(), 1); !stop && guard++ < 600; m = new Date(m.getFullYear(), m.getMonth() + interval, 1)) {
      let cands = [];
      if (byday) byday.forEach(b => cands.push(...nthWeekdays(m, b)));
      else {
        const dim = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
        (bymonthday || [start.getDate()]).forEach(dd => {
          const day = dd < 0 ? dim + dd + 1 : dd;
          if (day >= 1 && day <= dim) cands.push(new Date(m.getFullYear(), m.getMonth(), day));
        });
      }
      run(cands.map(withTime));
    }
  } else if (freq === 'YEARLY') {
    for (let y = start.getFullYear(); !stop && guard++ < 150; y += interval) {
      const cands = [];
      (bymonth || [start.getMonth() + 1]).forEach(mo => {
        const m = new Date(y, mo - 1, 1);
        if (byday) byday.forEach(b => cands.push(...nthWeekdays(m, b)));
        else {
          const dim = new Date(y, mo, 0).getDate();
          (bymonthday || [start.getDate()]).forEach(dd => {
            const day = dd < 0 ? dim + dd + 1 : dd;
            if (day >= 1 && day <= dim) cands.push(new Date(y, mo - 1, day));
          });
        }
      });
      run(cands.map(withTime));
    }
  } else {
    run([start]);
  }
  return out;
}

function expandICS(cal, from, to, color, idx) {
  const out = [];
  const overrides = new Set();
  cal.events.forEach(ev => { if (ev.recurrenceId != null && ev.uid) overrides.add(`${ev.uid}|${ev.recurrenceId}`); });
  const make = (ev, start) => {
    let dur = ev.end && !isNaN(ev.end.date) ? ev.end.date - ev.start.date : (ev.duration ?? (ev.allDay ? 864e5 : 0));
    let end;
    if (ev.allDay) end = addDays(start, Math.max(1, Math.round(dur / 864e5)));
    else end = new Date(start.getTime() + Math.max(dur, 0));
    if (end <= start) end = new Date(start.getTime() + 30 * 60e3);
    return {
      id: `${idx}:${hash((ev.uid || ev.summary || '') + start.getTime())}`,
      title: ev.summary || 'Ohne Titel',
      start,
      end,
      allDay: !!ev.allDay,
      color,
      calName: cal.name || 'Kalender',
      location: ev.location || '',
      description: ev.description || ''
    };
  };
  cal.events.forEach(ev => {
    if (!ev.start || isNaN(ev.start.date) || ev.status === 'CANCELLED') return;
    const add = start => {
      const e = make(ev, start);
      if (e.start < to && e.end > from) out.push(e);
    };
    if (ev.recurrenceId != null || !ev.rrule) return add(ev.start.date);
    const ex = new Set(ev.exdates);
    occurrences(ev, from, to).forEach(t => {
      if (ex.has(t.getTime()) || overrides.has(`${ev.uid}|${t.getTime()}`)) return;
      add(t);
    });
  });
  return out;
}

async function loadCalendar(force = false) {
  if (state.cal.demo) {
    state.cal.events = demoEvents();
    renderEventsToday();
    renderCalendar();
    return;
  }
  if (!state.cal.sources.length) {
    state.cal.events = [];
    renderEventsToday();
    renderCalendar();
    return;
  }
  if (!force && state.cal.fetched && Date.now() - state.cal.fetched < 5 * 60e3) {
    renderCalendar();
    return;
  }
  if (state.cal.loading) return;
  state.cal.loading = true;
  renderCalendar();
  try {
    const data = await (await api('ical')).json();
    const today = startOfDay(new Date());
    const from = addDays(today, -200);
    const to = addDays(today, 400);
    let failed = 0;
    const events = [];
    (data.calendars || []).forEach((c, i) => {
      if (!c.ok || !c.ics) { failed++; return; }
      const cal = parseICS(c.ics);
      const src = state.cal.sources[c.index ?? i] || {};
      if (src.name) cal.name = src.name;
      events.push(...expandICS(cal, from, to, src.color || CAL_COLORS[i % CAL_COLORS.length], i));
    });
    state.cal.events = events.sort((a, b) => a.start - b.start || b.allDay - a.allDay);
    state.cal.failed = failed;
    state.cal.fetched = Date.now();
    state.cal.error = failed && !events.length ? 'net' : null;
  } catch {
    state.cal.error = 'net';
  }
  state.cal.loading = false;
  updateCalStatus();
  renderEventsToday();
  renderCalendar();
}

function demoEvents() {
  const t = startOfDay(new Date());
  const at = (day, h, m = 0) => { const d = addDays(t, day); d.setHours(h, m, 0, 0); return d; };
  const list = [
    [0, 7, 45, 9, 25, 'Beispiel: Erste Doppelstunde', '#0a84ff', 'Schule'],
    [0, 16, 30, 17, 45, 'Beispiel: Lauftraining Intervalle', '#34c759', 'Training'],
    [0, 19, 0, 20, 30, 'Beispiel: Lernblock', '#af52de', 'Privat'],
    [1, 14, 0, 15, 0, 'Beispiel: Projektbesprechung', '#ff9f0a', 'Schule'],
    [1, 18, 0, 19, 30, 'Beispiel: Krafttraining', '#34c759', 'Training'],
    [2, 10, 0, 11, 30, 'Beispiel: Termin', '#ff375f', 'Privat'],
    [3, 17, 0, 18, 0, 'Beispiel: Schwimmen', '#34c759', 'Training'],
    [5, 15, 0, 17, 0, 'Beispiel: Spiel', '#ff9f0a', 'Privat'],
    [9, 9, 0, 12, 0, 'Beispiel: Ausflug', '#af52de', 'Privat']
  ].map(([d, h1, m1, h2, m2, title, color, calName], i) => ({ id: 'demo' + i, title, start: at(d, h1, m1), end: at(d, h2, m2), allDay: false, color, calName, location: '', description: '' }));
  list.push({ id: 'demo-ad', title: 'Beispiel: Ganztägig', start: addDays(t, 2), end: addDays(t, 3), allDay: true, color: '#af52de', calName: 'Privat', location: '', description: '' });
  return list.sort((a, b) => a.start - b.start);
}

function dueInfo(t) {
  if (!t.due) return null;
  const [y, m, d] = t.due.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  let at = null;
  if (t.dueTime) {
    const [hh, mm] = t.dueTime.split(':').map(Number);
    at = new Date(y, m - 1, d, hh, mm);
  }
  const diff = Math.round((date - startOfDay(new Date())) / 864e5);
  const overdue = !t.done && (at ? at < new Date() : diff < 0);
  let text;
  if (diff === 0) text = 'Heute';
  else if (diff === 1) text = 'Morgen';
  else if (diff === -1) text = 'Gestern';
  else if (diff > 1 && diff < 7) text = date.toLocaleDateString(CONFIG.locale, { weekday: 'long' });
  else text = date.toLocaleDateString(CONFIG.locale, { weekday: 'short', day: 'numeric', month: 'numeric' });
  if (t.dueTime) text += `, ${t.dueTime}`;
  return { date, at, text, overdue, today: diff === 0 };
}

function todoEvents() {
  return state.todos.filter(t => t.due && !t.done).map(t => {
    const i = dueInfo(t);
    const start = i.at || i.date;
    return {
      id: 'todo:' + t.id,
      todoId: t.id,
      title: t.text,
      start,
      end: i.at ? new Date(start.getTime() + 30 * 60e3) : addDays(i.date, 1),
      allDay: !i.at,
      color: '#ff9500',
      calName: 'ToDo',
      location: '',
      description: ''
    };
  });
}

function allEvents() {
  return state.cal.events.concat(todoEvents());
}

function eventsOn(day) {
  const s = startOfDay(day);
  const e = addDays(s, 1);
  return allEvents().filter(ev => ev.start < e && ev.end > s);
}

function eventItem(ev, showRel = false) {
  const time = ev.allDay ? 'Ganztägig' : `${fmtTime(ev.start)}–${fmtTime(ev.end)}`;
  const rel = showRel && !ev.allDay ? relFuture(ev.start, ev.end) : null;
  return `
    <button class="ev-item${ev.todoId ? ' is-todo' : ''}" data-event="${esc(ev.id)}" style="--c:${esc(ev.color)}">
      <span class="ev-bar"></span>
      <div>
        <div class="ev-time"><span>${time}</span>${rel ? `<span class="ev-rel${rel.now ? ' is-now' : ''}">${rel.text}</span>` : ''}</div>
        <div class="ev-title">${esc(ev.title)}</div>
        ${ev.location ? `<div class="ev-loc">${esc(ev.location)}</div>` : ''}
      </div>
    </button>`;
}

function renderEventsToday() {
  const card = $('#events-today');
  const connected = calConnected() || todoEvents().length > 0;
  const head = `<div class="card-head"><h2>Termine heute</h2>${state.cal.demo ? '<span class="demo-flag">Beispieldaten</span>' : connected ? '<span class="card-sub"><button data-goto="kalender">Kalender</button></span>' : ''}</div>`;
  if (!connected) {
    card.innerHTML = head + stateBox('Google Kalender verbinden', 'Einmal die private iCal-Adresse in den Einstellungen eintragen.') +
      `<div class="settings-actions" style="margin-top:12px"><button class="btn btn-primary" data-action="open-settings">Einrichten</button><button class="btn" data-action="cal-demo">Beispiel ansehen</button></div>`;
    updateBrief();
    return;
  }
  if (state.cal.loading && !state.cal.events.length) {
    card.innerHTML = head + skeleton(3);
    return;
  }
  const now = new Date();
  const today = eventsOn(now);
  const timed = today.filter(e => !e.allDay && e.end > now).sort((a, b) => a.start - b.start);
  const allDay = today.filter(e => e.allDay);
  const top = [...timed, ...allDay].slice(0, 2);
  let html;
  if (!top.length) {
    html = stateBox(today.length ? 'Keine weiteren Termine' : 'Keine Termine heute', today.length ? 'Für heute ist alles erledigt.' : 'Der Tag ist frei.');
  } else {
    html = `<div class="ev-list">${top.map(e => eventItem(e, true)).join('')}</div>`;
    const more = timed.length + allDay.length - top.length;
    if (more > 0) html += `<p class="ev-more">Noch ${more} weitere${more === 1 ? 'r Termin' : ' Termine'} heute</p>`;
  }
  const tomorrow = eventsOn(addDays(now, 1)).filter(e => !e.allDay).sort((a, b) => a.start - b.start)[0];
  if (tomorrow) html += `<p class="ev-more">Morgen ab ${fmtTime(tomorrow.start)}: ${esc(tomorrow.title)}</p>`;
  card.innerHTML = head + html;
  updateBrief();
}

function renderCalendar() {
  if (!state.loaded.has('kalender')) return;
  const body = $('#cal-body');
  const title = $('#cal-title');
  const view = state.cal.view;
  const anchor = state.cal.anchor;
  const monthName = d => d.toLocaleDateString(CONFIG.locale, { month: 'long', year: 'numeric' });
  if (view === 'month') title.textContent = monthName(anchor);
  else if (view === 'week') {
    const s = startOfWeek(anchor);
    const e = addDays(s, 6);
    title.textContent = s.getMonth() === e.getMonth()
      ? `${s.getDate()}.–${e.getDate()}. ${monthName(s)}`
      : `${s.getDate()}. ${s.toLocaleDateString(CONFIG.locale, { month: 'short' })} – ${e.getDate()}. ${e.toLocaleDateString(CONFIG.locale, { month: 'short', year: 'numeric' })}`;
  } else {
    title.textContent = sameDay(anchor, new Date()) ? 'Die nächsten zwei Wochen' : `Ab ${fmtDayLong(anchor)}`;
  }
  if (state.cal.demo) title.insertAdjacentHTML('beforeend', ' <span class="demo-flag">Beispieldaten</span>');
  if (!calConnected() && !todoEvents().length) {
    body.innerHTML = `<div class="cal-empty">${stateBox('Google Kalender ist nicht verbunden', 'Trage in den Einstellungen die private iCal-Adresse deines Kalenders ein. Die Verbindung bleibt dann dauerhaft bestehen.')}
      <div class="settings-actions" style="margin-top:12px"><button class="btn btn-primary" data-action="open-settings">Einrichten</button><button class="btn" data-action="cal-demo">Beispiel ansehen</button></div></div>`;
    return;
  }
  if (state.cal.error === 'net') {
    body.innerHTML = `<div class="cal-empty">${stateBox('Termine konnten nicht geladen werden', 'Prüfe die iCal-Adresse in den Einstellungen.', { id: 'retry-cal', label: 'Erneut laden' })}</div>`;
    return;
  }
  if (state.cal.loading && !state.cal.events.length) {
    body.innerHTML = skeleton(6);
    return;
  }
  if (view === 'agenda') renderAgenda(body, anchor);
  else if (view === 'week') renderWeek(body, anchor);
  else renderMonth(body, anchor);
}

function renderAgenda(body, anchor) {
  let html = '';
  for (let i = 0; i < 14; i++) {
    const d = addDays(startOfDay(anchor), i);
    const evs = eventsOn(d).sort((a, b) => b.allDay - a.allDay || a.start - b.start);
    if (!evs.length) continue;
    const isToday = sameDay(d, new Date());
    html += `<div class="ag-day"><h3 class="${isToday ? 'is-today' : ''}">${esc(dayLabel(d))}${['Heute', 'Morgen', 'Gestern'].includes(dayLabel(d)) ? `, ${esc(fmtDayLong(d).split(', ')[1] || '')}` : ''}</h3><div class="ev-list">${evs.map(e => eventItem(e, isToday)).join('')}</div></div>`;
  }
  body.innerHTML = html || `<div style="padding:12px 4px">${stateBox('Keine Termine', 'In diesen zwei Wochen ist nichts eingetragen.')}</div>`;
}

function layoutDay(evs, dayStart) {
  const dayEnd = addDays(dayStart, 1);
  const items = evs.map(e => ({
    e,
    s: Math.max(e.start.getTime(), dayStart.getTime()),
    t: Math.min(e.end.getTime(), dayEnd.getTime())
  })).sort((a, b) => a.s - b.s || b.t - a.t);
  const out = [];
  let cluster = [];
  let clusterEnd = 0;
  const flush = () => {
    const cols = [];
    cluster.forEach(it => {
      let c = cols.findIndex(end => end <= it.s);
      if (c < 0) { c = cols.length; cols.push(0); }
      cols[c] = it.t;
      it.col = c;
    });
    cluster.forEach(it => { it.cols = cols.length; out.push(it); });
    cluster = [];
  };
  items.forEach(it => {
    if (cluster.length && it.s >= clusterEnd) flush();
    cluster.push(it);
    clusterEnd = Math.max(clusterEnd, it.t);
  });
  if (cluster.length) flush();
  return out;
}

function renderWeek(body, anchor) {
  const start = startOfWeek(anchor);
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  const now = new Date();
  const weekEvents = days.map(d => eventsOn(d));
  let first = 7;
  let last = 22;
  weekEvents.forEach((list, i) => list.filter(e => !e.allDay).forEach(e => {
    const ds = startOfDay(days[i]).getTime();
    const s0 = Math.max(e.start.getTime(), ds);
    const e0 = Math.min(e.end.getTime(), ds + 864e5);
    first = Math.min(first, Math.floor((s0 - ds) / 3600e3));
    last = Math.max(last, Math.ceil((e0 - ds) / 3600e3));
  }));
  first = clamp(first, 0, 23);
  last = clamp(last, first + 1, 24);
  const span = last - first;
  const allDayMax = Math.max(0, ...weekEvents.map(list => list.filter(e => e.allDay).length));
  const headH = 58;
  const allDayH = allDayMax ? allDayMax * 24 + 10 : 0;
  const top = body.getBoundingClientRect().top + window.scrollY;
  const avail = window.innerHeight - top - headH - allDayH - 34;
  const hourH = Math.max(16, Math.floor(avail / span));
  const gridH = span * hourH;
  const narrow = body.clientWidth < 620;
  const headCells = days.map(d => `<div class="${sameDay(d, now) ? 'is-today' : ''}">${esc(d.toLocaleDateString(CONFIG.locale, { weekday: 'short' }).replace('.', ''))}<strong>${d.getDate()}</strong></div>`).join('');
  const allDayCells = weekEvents.map(list => `<div>${list.filter(e => e.allDay).map(e => `<button class="wk-chip" data-event="${esc(e.id)}" style="--c:${esc(e.color)}">${esc(e.title)}</button>`).join('')}</div>`).join('');
  const step = hourH < 26 ? 2 : 1;
  const hours = Array.from({ length: span - 1 }, (_, i) => first + i + 1)
    .filter(h => (h - first) % step === 0)
    .map(h => `<span style="top:${(h - first) * hourH}px">${narrow ? h : `${pad(h)}:00`}</span>`).join('');
  const cols = days.map((d, i) => {
    const ds = startOfDay(d).getTime();
    const laid = layoutDay(weekEvents[i].filter(e => !e.allDay), startOfDay(d));
    const evs = laid.map(it => {
      const y = ((it.s - ds) / 3600e3 - first) * hourH;
      const h = Math.max((it.t - it.s) / 3600e3 * hourH, 18);
      const w = 100 / it.cols;
      const lines = Math.max(1, Math.floor((h - 6) / 13) - (h > 40 ? 1 : 0));
      return `<button class="wk-ev${it.e.todoId ? ' is-todo' : ''}" data-event="${esc(it.e.id)}" title="${esc(it.e.title)}" style="--c:${esc(it.e.color)};--lines:${lines};top:${y}px;height:${h - 2}px;left:calc(${it.col * w}% + 2px);width:calc(${w}% - 4px)"><strong>${esc(it.e.title)}</strong>${h > 40 && !narrow ? `<span>${fmtTime(it.e.start)}</span>` : ''}</button>`;
    }).join('');
    const nowH = now.getHours() + now.getMinutes() / 60;
    const nowLine = sameDay(d, now) && nowH >= first && nowH <= last ? `<div class="wk-now" style="top:${(nowH - first) * hourH}px"></div>` : '';
    return `<div class="wk-col${sameDay(d, now) ? ' is-today' : ''}" style="--hour-h:${hourH}px;height:${gridH}px">${evs}${nowLine}</div>`;
  }).join('');
  body.innerHTML = `<div class="wk${narrow ? ' is-narrow' : ''}"><div class="wk-inner">
    <div class="wk-head"><div></div>${headCells}</div>
    ${allDayMax ? `<div class="wk-allday"><div class="lbl">${narrow ? '' : 'ganztägig'}</div>${allDayCells}</div>` : ''}
    <div class="wk-body"><div class="wk-hours" style="height:${gridH}px">${hours}</div>${cols}</div>
  </div></div>`;
}

function renderMonth(body, anchor) {
  const first = startOfMonth(anchor);
  const start = startOfWeek(first);
  const daysInMonth = endOfMonth(anchor).getDate();
  const offset = (first.getDay() + 6) % 7;
  const weeks = Math.ceil((offset + daysInMonth) / 7);
  const now = new Date();
  const sel = state.cal.selected || startOfDay(now);
  const wd = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => `<div class="mo-wd">${d}</div>`).join('');
  const cells = Array.from({ length: weeks * 7 }, (_, i) => {
    const d = addDays(start, i);
    const evs = eventsOn(d).sort((a, b) => b.allDay - a.allDay || a.start - b.start);
    const cls = ['mo-cell', d.getMonth() !== anchor.getMonth() ? 'is-out' : '', sameDay(d, now) ? 'is-today' : '', sameDay(d, sel) ? 'is-selected' : ''].filter(Boolean).join(' ');
    return `<button class="${cls}" data-day="${d.getTime()}" aria-label="${esc(fmtDayLong(d))}, ${evs.length} Termine">
      <span class="mo-num">${d.getDate()}</span>
      ${evs.slice(0, 3).map(e => `<span class="mo-chip" style="--c:${esc(e.color)}"><i></i><span>${esc(e.title)}</span></span>`).join('')}
      ${evs.length > 3 ? `<span class="mo-more">+${evs.length - 3} weitere</span>` : ''}
      <span class="mo-dots">${evs.slice(0, 4).map(e => `<i style="--c:${esc(e.color)}"></i>`).join('')}</span>
    </button>`;
  }).join('');
  const selEvents = eventsOn(sel).sort((a, b) => b.allDay - a.allDay || a.start - b.start);
  body.innerHTML = `<div class="mo-grid">${wd}${cells}</div>
    <div class="mo-day-list"><div class="ag-day"><h3>${esc(dayLabel(sel))}${['Heute', 'Morgen', 'Gestern'].includes(dayLabel(sel)) ? `, ${esc(fmtDayLong(sel).split(', ')[1] || '')}` : ''}</h3>
    ${selEvents.length ? `<div class="ev-list">${selEvents.map(e => eventItem(e, sameDay(sel, now))).join('')}</div>` : '<p class="ev-more">Keine Termine</p>'}</div></div>`;
}

function calStep(dir) {
  const a = state.cal.anchor;
  if (state.cal.view === 'month') state.cal.anchor = new Date(a.getFullYear(), a.getMonth() + dir, 1);
  else if (state.cal.view === 'week') state.cal.anchor = addDays(a, dir * 7);
  else state.cal.anchor = addDays(a, dir * 14);
  if (state.cal.view === 'month') {
    const s = state.cal.anchor;
    state.cal.selected = sameDay(startOfMonth(new Date()), s) ? startOfDay(new Date()) : s;
  }
  loadCalendar();
}

function initSegments(scope = document) {
  $$('.segmented', scope).forEach(seg => {
    if (seg.dataset.ready) return positionSegment(seg, true);
    seg.dataset.ready = '1';
    seg.addEventListener('click', e => {
      const btn = e.target.closest('button[data-seg]');
      if (!btn || btn.getAttribute('aria-selected') === 'true') return;
      selectSegment(seg, btn.dataset.seg);
    });
    positionSegment(seg, true);
  });
}

function positionSegment(seg, instant = false) {
  const ind = $('.seg-indicator', seg);
  const btn = $('button[aria-selected="true"]', seg);
  if (!ind || !btn || !btn.offsetWidth) return;
  if (instant) ind.style.transition = 'none';
  ind.style.width = `${btn.offsetWidth}px`;
  ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (instant) { void ind.offsetWidth; ind.style.transition = ''; }
}

function selectSegment(seg, value, silent = false) {
  $$('button[data-seg]', seg).forEach(b => b.setAttribute('aria-selected', String(b.dataset.seg === value)));
  positionSegment(seg);
  const group = seg.dataset.segment;
  if (silent) return;
  if (group === 'loc') return onLocationChange(value);
  if (group === 'theme') return setTheme(value);
  if (group === 'cal') {
    state.cal.view = value;
    store.set('cal_view', value);
    if (value === 'month') state.cal.selected = state.cal.selected || startOfDay(new Date());
    return loadCalendar();
  }
  const view = seg.closest('.view');
  if (view) {
    $$('.seg-panel', view).forEach(p => {
      const on = p.dataset.panel === value;
      p.hidden = !on;
      p.classList.toggle('is-active', on);
    });
    store.set('seg_' + group, value);
    loadPanel(group, value);
  }
}

function loadPanel(group, value) {
  if (group === 'sport') {
    if (value === 'fussball') {
      if (!state.loaded.has('fb')) { state.loaded.add('fb'); loadUpsets(); loadNews('fussball'); }
      renderFootballSport();
    }
    if (value === 'f1' && !state.loaded.has('f1')) { state.loaded.add('f1'); loadF1(); loadNews('f1'); renderF1(); renderSimpleNews('#f1-news', 'f1', 'Formel-1-News', 5); }
    if (value === 'ausdauer' && !state.loaded.has('ausdauer')) { state.loaded.add('ausdauer'); renderSimpleNews('#endurance-news', 'ausdauer', 'Laufen & Triathlon', 8); loadNews('ausdauer'); }
  }
  if (group === 'news') renderNewsFeed(value);
}

function moveTabIndicator(instant = false) {
  const nav = $('#tabbar');
  const btn = $('.tab[aria-selected="true"]', nav);
  const ind = $('#tab-indicator');
  if (!btn) return;
  if (instant) ind.style.transition = 'none';
  ind.style.width = `${btn.offsetWidth}px`;
  ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (instant) { void ind.offsetWidth; ind.style.transition = ''; }
}

const ICON_SVG = {
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 12.5l3.6 3.6 7.4-8.2"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>'
};

function todoId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function mergeTodos(remote) {
  const base = new Set(store.get('todos_base', []));
  const mine = new Set(state.todos.map(t => t.id));
  const theirs = new Map(remote.map(t => [t.id, t]));
  const out = [];
  state.todos.forEach(t => {
    const r = theirs.get(t.id);
    if (r) out.push((r.mod || 0) > (t.mod || 0) ? r : t);
    else if (!base.has(t.id)) out.push(t);
  });
  remote.forEach(r => {
    if (!mine.has(r.id) && !base.has(r.id)) out.push(r);
  });
  return out;
}

function todosSynced(list) {
  state.todosFetched = Date.now();
  store.set('todos_base', list.map(t => t.id));
  store.set('todos_cache', list);
}

async function syncTodos() {
  if (store.get('todos_dirty')) return saveTodos();
  try {
    const remote = await (await api('todos')).json();
    if (!Array.isArray(remote) || store.get('todos_dirty')) return;
    const changed = JSON.stringify(remote) !== JSON.stringify(state.todos);
    state.todos = remote;
    todosSynced(remote);
    if (changed && !state.todoEdit) renderTodos();
  } catch {}
}

function saveTodos() {
  store.set('todos_cache', state.todos);
  store.set('todos_dirty', true);
  clearTimeout(state.todoSaving);
  state.todoSaving = setTimeout(async () => {
    try {
      const remote = await (await api('todos')).json();
      const before = state.todos.length;
      const merged = mergeTodos(Array.isArray(remote) ? remote : []);
      const sent = JSON.stringify(merged);
      state.todos = merged;
      await api('todos', { method: 'POST', body: { todos: merged } });
      if (JSON.stringify(state.todos) === sent) store.del('todos_dirty');
      todosSynced(merged);
      if (merged.length !== before && !state.todoEdit) renderTodos();
    } catch (e) {
      if (e.message !== 'auth') {
        store.set('todos_dirty', true);
        toast('ToDo nicht gespeichert, nächster Versuch beim Aktualisieren');
      }
    }
  }, 350);
}

function addTodo(text, due = null, dueTime = null) {
  const t = text.trim().slice(0, 300);
  if (!t) return;
  state.todos.unshift({ id: todoId(), text: t, done: false, created: Date.now(), doneAt: null, due: due || null, dueTime: due && dueTime ? dueTime : null, mod: Date.now() });
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  const t = state.todos.find(x => x.id === id);
  if (!t) return;
  t.done = !t.done;
  t.doneAt = t.done ? Date.now() : null;
  t.mod = Date.now();
  saveTodos();
  $$(`.todo-item[data-id="${id}"]`).forEach(li => li.classList.toggle('is-done', t.done));
  clearTimeout(state.timers.todoRender);
  state.timers.todoRender = setTimeout(renderTodos, 420);
}

function saveTodoEdit(li) {
  const t = state.todos.find(x => x.id === li.dataset.id);
  state.todoEdit = null;
  if (t) {
    const text = $('.todo-edit-text', li).value.trim();
    if (text) t.text = text.slice(0, 300);
    const date = $('.todo-edit-date', li).value || null;
    const time = $('.todo-edit-time', li).value || null;
    t.due = date;
    t.dueTime = date && time ? time : null;
    t.mod = Date.now();
    saveTodos();
  }
  renderTodos();
}

function deleteTodo(id) {
  state.todos = state.todos.filter(x => x.id !== id);
  saveTodos();
  renderTodos();
}

function clearDoneTodos() {
  state.todos = state.todos.filter(x => !x.done);
  saveTodos();
  renderTodos();
}

const CAL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3.2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>';

function todoItem(t) {
  const due = dueInfo(t);
  if (state.todoEdit === t.id) {
    return `
    <li class="todo-item is-editing" data-id="${esc(t.id)}">
      <button class="todo-check" data-todo-toggle aria-label="Erledigt">${ICON_SVG.check}</button>
      <div class="todo-edit">
        <input class="todo-edit-text" value="${esc(t.text)}" maxlength="300" aria-label="Aufgabe">
        <div class="todo-due-row">
          <label class="todo-date">${CAL_ICON}<input type="date" class="todo-edit-date" value="${esc(t.due || '')}" aria-label="Frist"></label>
          <input type="time" class="todo-edit-time" value="${esc(t.dueTime || '')}" aria-label="Uhrzeit">
          <button type="button" class="link-btn" data-todo-nodue>Ohne Frist</button>
          <button type="button" class="btn btn-primary btn-sm" data-todo-save>Fertig</button>
        </div>
      </div>
      <button class="todo-del" data-todo-del aria-label="Löschen">${ICON_SVG.close}</button>
    </li>`;
  }
  return `
    <li class="todo-item${t.done ? ' is-done' : ''}" data-id="${esc(t.id)}">
      <button class="todo-check" data-todo-toggle aria-label="${t.done ? 'Wieder öffnen' : 'Erledigt'}">${ICON_SVG.check}</button>
      <button class="todo-body" data-todo-edit aria-label="Bearbeiten">
        <span class="todo-text">${esc(t.text)}</span>
        ${due ? `<span class="todo-due${due.overdue ? ' is-overdue' : due.today ? ' is-today' : ''}">${CAL_ICON}${esc(due.overdue ? `Überfällig, ${due.text}` : due.text)}</span>` : ''}
      </button>
      <button class="todo-del" data-todo-del aria-label="Löschen">${ICON_SVG.close}</button>
    </li>`;
}

function todoForm(id) {
  const open = !!state.todoDueOpen?.[id];
  return `<form class="todo-add-wrap" data-todo-form="${id}" autocomplete="off">
      <div class="todo-add">
        <input class="todo-input" name="text" maxlength="300" placeholder="Neue Aufgabe" enterkeyhint="done" aria-label="Neue Aufgabe">
        <button class="todo-due-btn${open ? ' is-on' : ''}" type="button" data-todo-due-toggle aria-label="Frist festlegen" aria-expanded="${open}">${CAL_ICON}</button>
        <button class="todo-add-btn" type="submit" aria-label="Hinzufügen">${ICON_SVG.plus}</button>
      </div>
      ${open ? `<div class="todo-due-row is-new">
        <label class="todo-date">${CAL_ICON}<input type="date" class="todo-add-date" value="${esc(dayKey(new Date()))}" aria-label="Frist"></label>
        <input type="time" class="todo-add-time" aria-label="Uhrzeit, optional">
        <span class="todo-due-hint">Uhrzeit optional</span>
      </div>` : ''}
    </form>`;
}

function sortOpenTodos(list) {
  return list.slice().sort((a, b) => {
    const da = a.due ? `${a.due} ${a.dueTime || '99:99'}` : null;
    const db = b.due ? `${b.due} ${b.dueTime || '99:99'}` : null;
    if (da && db) return da < db ? -1 : da > db ? 1 : 0;
    if (da) return -1;
    if (db) return 1;
    return (b.created || 0) - (a.created || 0);
  });
}

function renderTodos() {
  const active = document.activeElement;
  const focusForm = active?.closest?.('[data-todo-form]')?.dataset.todoForm;
  const draft = focusForm ? active.value : '';
  const open = sortOpenTodos(state.todos.filter(t => !t.done));
  const done = state.todos.filter(t => t.done).sort((a, b) => (b.doneAt || 0) - (a.doneAt || 0));
  const sub = open.length ? `${open.length} offen` : 'Alles erledigt';
  const dash = $('#todo-today');
  if (dash) {
    const shown = open.slice(0, 6);
    dash.innerHTML = `<div class="card-head"><h2>ToDo</h2><span class="card-sub">${sub}</span></div>${todoForm('dash')}
      ${shown.length ? `<ul class="todo-list">${shown.map(todoItem).join('')}</ul>` : '<p class="todo-empty">Nichts offen.</p>'}
      ${open.length > shown.length ? `<p class="ev-more"><button class="link-btn" data-goto="todo">${open.length - shown.length} weitere anzeigen</button></p>` : ''}`;
  }
  const full = $('#todo-full');
  if (full) {
    full.innerHTML = `<div class="card-head"><h2>Offen</h2><span class="card-sub">${sub}</span></div>${todoForm('full')}
      ${open.length ? `<ul class="todo-list">${open.map(todoItem).join('')}</ul>` : '<p class="todo-empty">Nichts offen. Neue Aufgabe oben eintragen.</p>'}
      ${done.length ? `<div class="todo-done-head">
          <button class="todo-done-toggle" data-todo-done-toggle aria-expanded="${state.showDone}">Erledigt (${done.length})</button>
          <button class="link-btn" data-todo-clear>Leeren</button>
        </div>
        ${state.showDone ? `<ul class="todo-list is-done-list">${done.map(todoItem).join('')}</ul>` : ''}` : ''}`;
  }
  if (focusForm) {
    const input = $(`[data-todo-form="${focusForm}"] .todo-input`);
    if (input) {
      input.value = draft;
      input.focus({ preventScroll: true });
    }
  }
  if (state.todoEdit) $(`.todo-item.is-editing .todo-edit-text`)?.focus({ preventScroll: true });
  renderEventsToday();
  if (state.view === 'kalender') renderCalendar();
}

async function loadState() {
  try {
    const data = await (await api('state')).json();
    state.cal.sources = data.settings?.ical || [];
    if (store.get('todos_dirty')) saveTodos();
    else {
      state.todos = Array.isArray(data.todos) ? data.todos : [];
      todosSynced(state.todos);
    }
  } catch {}
  updateCalStatus();
  renderTodos();
  loadCalendar();
}

function updateBrief() {
  const el = $('#page-brief');
  if (!el) return;
  if (state.view !== 'heute') {
    el.hidden = true;
    return;
  }
  const parts = [];
  const now = new Date();
  if (calConnected() && (state.cal.fetched || state.cal.demo)) {
    const rest = eventsOn(now).filter(e => !e.allDay && !e.todoId && e.end > now).sort((a, b) => a.start - b.start);
    if (rest.length) {
      const first = rest[0];
      const lead = rest.length === 1 ? 'Ein Termin' : `${rest.length} Termine`;
      parts.push(first.start <= now ? `${lead}, einer läuft gerade` : `${lead}, der nächste um ${fmtTime(first.start)}`);
    } else parts.push('Keine Termine mehr heute');
  }
  if (state.weather) {
    const r = analyzeRain(state.weather);
    const max = Math.round(state.weather.days[0].max);
    if (r.windows.length) {
      const w = r.windows[0];
      parts.push(`${w.snow > w.n / 2 ? 'Schnee' : 'Regen'} ${fmtHour(w.start)}–${fmtHour(w.end)} Uhr, bis ${max}°`);
    } else parts.push(`Trocken, bis ${max}°`);
  }
  if (state.football) {
    const s = splitFootball();
    const real = s.todayReal[0];
    if (real) {
      const opp = real.home.id === CONFIG.realId ? real.away : real.home;
      if (real.state === 'pre') parts.push(`Real spielt um ${fmtTime(real.date)} gegen ${opp.short || opp.name}`);
      else if (real.state === 'in') parts.push(`Real live gegen ${opp.short || opp.name}, ${real.home.score}:${real.away.score}`);
    } else if (s.todayCL.length) {
      const first = s.todayCL.slice().sort((a, b) => a.date - b.date)[0];
      parts.push(`${s.todayCL.length} Champions-League-${s.todayCL.length === 1 ? 'Spiel' : 'Spiele'} ab ${fmtTime(first.date)}`);
    }
  }
  const open = state.todos.filter(t => !t.done).length;
  const dueToday = state.todos.filter(t => !t.done && t.due && dueInfo(t).today).length;
  const overdue = state.todos.filter(t => !t.done && t.due && dueInfo(t).overdue).length;
  if (open) {
    let txt = `${open} ${open === 1 ? 'offene Aufgabe' : 'offene Aufgaben'}`;
    if (overdue) txt += `, ${overdue} überfällig`;
    else if (dueToday) txt += `, ${dueToday} heute fällig`;
    parts.push(txt);
  }
  el.textContent = parts.length ? parts.join('. ') + '.' : '';
  el.hidden = !parts.length;
}

function initPullToRefresh() {
  const ind = $('#ptr');
  if (!ind || !('ontouchstart' in window)) return;
  let y0 = null;
  let x0 = 0;
  let dy = 0;
  let busy = false;
  const reset = () => {
    ind.classList.remove('is-visible', 'is-armed');
    ind.style.transform = '';
    ind.style.opacity = '';
  };
  window.addEventListener('touchstart', e => {
    if (busy || openedSheet || window.scrollY > 2 || e.touches.length > 1) { y0 = null; return; }
    if (e.target.closest('.w-hours, .wk, input, textarea')) { y0 = null; return; }
    y0 = e.touches[0].clientY;
    x0 = e.touches[0].clientX;
    dy = 0;
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (y0 == null) return;
    dy = e.touches[0].clientY - y0;
    const dx = Math.abs(e.touches[0].clientX - x0);
    if (dy <= 0 || dx > dy || window.scrollY > 2) { reset(); return; }
    const pull = Math.min(dy * 0.5, 80);
    ind.classList.add('is-visible');
    ind.classList.toggle('is-armed', dy > 110);
    ind.style.opacity = String(Math.min(dy / 90, 1));
    ind.style.transform = `translate(-50%, ${pull}px) rotate(${dy * 2.2}deg)`;
  }, { passive: true });
  window.addEventListener('touchend', async () => {
    if (y0 == null) return;
    const armed = dy > 110;
    y0 = null;
    if (!armed) { reset(); return; }
    busy = true;
    ind.classList.add('is-loading');
    ind.style.transform = 'translate(-50%, 56px)';
    await refreshAll();
    ind.classList.remove('is-loading');
    reset();
    busy = false;
  });
}

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return 'Gute Nacht';
  if (h < 11) return 'Guten Morgen';
  if (h < 18) return 'Hallo';
  if (h < 22) return 'Guten Abend';
  return 'Gute Nacht';
}

const VIEWS = ['heute', 'sport', 'news', 'kalender', 'todo'];

function updateHeader() {
  const titles = { heute: `${greeting()}, ${CONFIG.name}`, sport: 'Sport', news: 'News', kalender: 'Kalender', todo: 'ToDo' };
  $('#page-title').textContent = titles[state.view];
  $('#page-date').textContent = fmtDayLong(new Date());
  document.title = state.view === 'heute' ? 'Heute' : titles[state.view];
  updateBrief();
}

function showView(name, replace = true) {
  if (!VIEWS.includes(name)) name = 'heute';
  state.view = name;
  $$('.tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
  $$('.view').forEach(v => {
    const on = v.dataset.view === name;
    v.hidden = !on;
    v.classList.toggle('is-active', on);
  });
  moveTabIndicator();
  updateHeader();
  if (replace) history.replaceState(null, '', `#${name}`);
  window.scrollTo(0, 0);
  const first = !state.loaded.has(name);
  state.loaded.add(name);
  const view = $(`#view-${name}`);
  if (name === 'sport' && first) selectSegment($('.segmented[data-segment="sport"]', view), store.get('seg_sport', 'fussball'));
  if (name === 'news' && first) {
    let seg = store.get('seg_news', 'tech');
    if (!['tech', 'oesterreich', 'welt'].includes(seg)) seg = 'tech';
    selectSegment($('.segmented[data-segment="news"]', view), seg);
    ['tech', 'oesterreich', 'welt'].forEach(c => renderNewsFeed(c));
  }
  if (name === 'kalender') {
    if (first) selectSegment($('.segmented[data-segment="cal"]', view), state.cal.view, true);
    renderCalendar();
    if (first) loadCalendar();
  }
  if (name === 'todo') renderTodos();
  requestAnimationFrame(() => initSegments(view));
}

function setTheme(value) {
  store.set('theme', value);
  if (value === 'auto') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = value;
  if (state.weather) {
    const c = state.weather.current;
    const d = state.weather.days[0];
    setSky({ code: c.code, isDay: c.isDay, sunrise: d.sunrise, sunset: d.sunset });
  } else setSky();
}

let openedSheet = null;
let lastFocus = null;

function openSheet(sheet) {
  if (openedSheet && openedSheet !== sheet) closeSheet(true);
  if (!openedSheet) lastFocus = document.activeElement;
  const bd = $('#sheet-backdrop');
  bd.hidden = false;
  sheet.hidden = false;
  sheet.style.transform = '';
  openedSheet = sheet;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    bd.classList.add('is-open');
    sheet.classList.add('is-open');
    initSegments(sheet);
    $('.sheet-close', sheet)?.focus({ preventScroll: true });
  });
}

function closeSheet(instant = false) {
  const sheet = openedSheet;
  if (!sheet) return;
  const bd = $('#sheet-backdrop');
  sheet.classList.remove('is-open');
  bd.classList.remove('is-open');
  sheet.style.transform = '';
  openedSheet = null;
  document.body.style.overflow = '';
  const done = () => { if (!sheet.classList.contains('is-open')) sheet.hidden = true; if (!openedSheet) bd.hidden = true; };
  if (instant) done(); else setTimeout(done, 420);
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

function initSheetDrag(sheet) {
  const grab = $('.sheet-grabber', sheet);
  let y0 = null;
  let dy = 0;
  grab.addEventListener('pointerdown', e => {
    if (window.innerWidth >= 768) return;
    y0 = e.clientY;
    dy = 0;
    sheet.classList.add('is-dragging');
    grab.setPointerCapture(e.pointerId);
  });
  grab.addEventListener('pointermove', e => {
    if (y0 == null) return;
    dy = Math.max(0, e.clientY - y0);
    sheet.style.transform = `translateY(${dy}px)`;
  });
  const end = () => {
    if (y0 == null) return;
    y0 = null;
    sheet.classList.remove('is-dragging');
    if (dy > 110) closeSheet(); else sheet.style.transform = '';
  };
  grab.addEventListener('pointerup', end);
  grab.addEventListener('pointercancel', end);
}

function isChromium() {
  const brands = navigator.userAgentData?.brands || [];
  return brands.some(b => /Chromium|Google Chrome|Microsoft Edge/.test(b.brand));
}

function buildRefraction() {
  const nav = $('#tabbar');
  if (!isChromium() || window.matchMedia('(prefers-reduced-transparency: reduce)').matches) return;
  const w = Math.round(nav.offsetWidth);
  const h = Math.round(nav.offsetHeight);
  if (!w || !h) return;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(w, h);
  const hx = w / 2;
  const hy = h / 2;
  const r = h / 2;
  const band = Math.min(h * 0.45, 22);
  const sdf = (px, py) => {
    const qx = Math.abs(px) - hx + r;
    const qy = Math.abs(py) - hy + r;
    return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const px = x + 0.5 - hx;
      const py = y + 0.5 - hy;
      const d = -sdf(px, py);
      const i = (y * w + x) * 4;
      let dx = 0;
      let dy = 0;
      if (d >= 0 && d < band) {
        const gx = sdf(px + 0.5, py) - sdf(px - 0.5, py);
        const gy = sdf(px, py + 0.5) - sdf(px, py - 0.5);
        const len = Math.hypot(gx, gy) || 1;
        const t = 1 - d / band;
        const s = t * t;
        dx = (gx / len) * s;
        dy = (gy / len) * s;
      }
      img.data[i] = Math.round(128 + dx * 127);
      img.data[i + 1] = Math.round(128 + dy * 127);
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const fe = $('#lg-map');
  fe.setAttribute('href', canvas.toDataURL());
  fe.setAttribute('width', w);
  fe.setAttribute('height', h);
  nav.classList.add('refract');
}

async function refreshAll() {
  const btn = $('#btn-refresh');
  btn.classList.add('is-spinning');
  const jobs = [loadWeather(true), loadFootball(true), loadState()];
  ['tech', 'oesterreich', 'welt'].forEach(c => jobs.push(loadNews(c, true)));
  if (state.loaded.has('fb')) { jobs.push(loadUpsets(true)); jobs.push(loadNews('fussball', true)); }
  if (state.loaded.has('f1')) { jobs.push(loadF1(true)); jobs.push(loadNews('f1', true)); }
  if (state.loaded.has('ausdauer')) jobs.push(loadNews('ausdauer', true));
  if (calConnected()) jobs.push(loadCalendar(true));
  await Promise.allSettled(jobs);
  btn.classList.remove('is-spinning');
  updateHeader();
}

function periodic() {
  updateHeader();
  if (document.hidden) return;
  if (!state.weather || Date.now() - state.weather.fetched > 15 * 60e3) loadWeather();
  const live = state.football?.events?.some(e => e.state === 'in');
  if (!state.football || Date.now() - state.football.fetched > (live ? 75e3 : 10 * 60e3)) loadFootball();
  ['tech', 'oesterreich', 'welt'].forEach(c => {
    const n = state.news[c];
    if (!n?.fetched || Date.now() - n.fetched > 20 * 60e3) loadNews(c);
  });
  if (calConnected() && Date.now() - state.cal.fetched > 15 * 60e3) loadCalendar();
  if (Date.now() - (state.todosFetched || 0) > 45e3) syncTodos();
  if (state.view === 'heute') renderEventsToday();
  if (state.loaded.has('f1')) tickCountdown();
}

function bindEvents() {
  $('#tabbar').addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (tab) showView(tab.dataset.tab);
  });
  $('#tabbar').addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const tabs = $$('.tab');
    const i = tabs.findIndex(t => t.dataset.tab === state.view);
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    showView(next.dataset.tab);
    next.focus();
  });
  $('#btn-refresh').addEventListener('click', refreshAll);
  $('#btn-settings').addEventListener('click', openSettings);
  $('#sheet-backdrop').addEventListener('click', () => closeSheet());
  $$('[data-close]').forEach(b => b.addEventListener('click', () => closeSheet()));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
  $$('.sheet').forEach(initSheetDrag);
  $('#btn-add-cal').addEventListener('click', () => {
    const list = readCalRows();
    list.push({ url: '', name: '', color: CAL_COLORS[list.length % CAL_COLORS.length] });
    renderCalRows(list);
    $$('#cal-rows .cal-row-url').pop()?.focus();
  });
  $('#cal-rows').addEventListener('click', e => {
    const row = e.target.closest('.cal-row');
    if (!row) return;
    if (e.target.closest('.cal-row-del')) {
      row.remove();
      if (!$('#cal-rows .cal-row')) renderCalRows([]);
      return;
    }
    const dot = e.target.closest('.cal-row-color');
    if (dot) {
      const i = CAL_COLORS.indexOf(dot.dataset.color);
      const next = CAL_COLORS[(i + 1) % CAL_COLORS.length];
      dot.dataset.color = next;
      dot.style.setProperty('--c', next);
    }
  });
  $('#btn-save-ical').addEventListener('click', async () => {
    const list = readCalRows().filter(r => r.url);
    try {
      const data = await (await api('settings', { method: 'POST', body: { ical: list } })).json();
      state.cal.sources = data.settings?.ical || [];
      state.cal.demo = false;
      state.cal.fetched = 0;
      renderCalRows(state.cal.sources);
      const dropped = list.length - state.cal.sources.length;
      toast(dropped > 0 ? `${dropped} Adresse${dropped === 1 ? '' : 'n'} ungültig, Rest gespeichert` : 'Kalender gespeichert');
      updateCalStatus();
      loadCalendar(true);
    } catch {
      toast('Speichern fehlgeschlagen');
    }
  });
  $('#btn-logout-all').addEventListener('click', async () => {
    try {
      await api('logout-all', { method: 'POST', body: {} });
    } catch {}
    location.href = 'login.php';
  });
  $('#btn-clear-cache').addEventListener('click', () => {
    store.prune(true);
    mem.clear();
    toast('Cache geleert, lade neu');
    refreshAll();
  });
  $('#cal-prev').addEventListener('click', () => calStep(-1));
  $('#cal-next').addEventListener('click', () => calStep(1));
  $('#cal-today').addEventListener('click', () => {
    state.cal.anchor = startOfDay(new Date());
    state.cal.selected = startOfDay(new Date());
    loadCalendar();
  });

  document.addEventListener('keydown', e => {
    if (!e.target.closest?.('.todo-item.is-editing')) return;
    if (e.key === 'Enter') { e.preventDefault(); saveTodoEdit(e.target.closest('.todo-item')); }
    if (e.key === 'Escape') { e.stopPropagation(); state.todoEdit = null; renderTodos(); }
  });
  $('#pw-form').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target;
    if (f.next.value !== f.next2.value) return toast('Die neuen Passwörter stimmen nicht überein');
    try {
      const res = await fetch('api.php?action=password', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': CSRF }, body: JSON.stringify({ current: f.current.value, next: f.next.value }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) return toast(data.error || 'Ändern fehlgeschlagen');
      f.reset();
      toast('Passwort geändert, andere Geräte wurden abgemeldet');
    } catch {
      toast('Ändern fehlgeschlagen');
    }
  });
  document.addEventListener('submit', e => {
    const form = e.target.closest('[data-todo-form]');
    if (!form) return;
    e.preventDefault();
    const input = $('.todo-input', form);
    const value = input.value;
    if (!value.trim()) return;
    const date = $('.todo-add-date', form)?.value || null;
    const time = $('.todo-add-time', form)?.value || null;
    input.value = '';
    if (state.todoDueOpen) state.todoDueOpen[form.dataset.todoForm] = false;
    addTodo(value, date, time);
  });

  document.addEventListener('click', e => {
    const dueToggle = e.target.closest('[data-todo-due-toggle]');
    if (dueToggle) {
      const id = dueToggle.closest('[data-todo-form]').dataset.todoForm;
      state.todoDueOpen = state.todoDueOpen || {};
      state.todoDueOpen[id] = !state.todoDueOpen[id];
      const text = $(`[data-todo-form="${id}"] .todo-input`).value;
      renderTodos();
      const input = $(`[data-todo-form="${id}"] .todo-input`);
      input.value = text;
      return;
    }
    const tc = e.target.closest('[data-todo-complete]');
    if (tc) {
      toggleTodo(tc.dataset.todoComplete);
      closeSheet();
      return;
    }
    const te = e.target.closest('[data-todo-edit]');
    if (te) {
      state.todoEdit = te.closest('.todo-item').dataset.id;
      return renderTodos();
    }
    const ts = e.target.closest('[data-todo-save]');
    if (ts) return saveTodoEdit(ts.closest('.todo-item'));
    const tn = e.target.closest('[data-todo-nodue]');
    if (tn) {
      const li = tn.closest('.todo-item');
      $('.todo-edit-date', li).value = '';
      $('.todo-edit-time', li).value = '';
      return saveTodoEdit(li);
    }
    const tt = e.target.closest('[data-todo-toggle]');
    if (tt) return toggleTodo(tt.closest('.todo-item').dataset.id);
    const td = e.target.closest('[data-todo-del]');
    if (td) return deleteTodo(td.closest('.todo-item').dataset.id);
    if (e.target.closest('[data-todo-done-toggle]')) {
      state.showDone = !state.showDone;
      return renderTodos();
    }
    if (e.target.closest('[data-todo-clear]')) return clearDoneTodos();
    const cl = e.target.closest('[data-cluster]');
    if (cl) {
      const c = state.clusters.get(cl.dataset.cluster);
      if (c) openReader(c);
      return;
    }
    const ri = e.target.closest('[data-reader-item]');
    if (ri) {
      const c = state.clusters.get(ri.dataset.readerCluster);
      const it = c?.items.find(i => i.id === ri.dataset.readerItem);
      if (c && it) openReader(c, it);
      return;
    }
    const ev = e.target.closest('[data-event]');
    if (ev) {
      const found = allEvents().find(x => x.id === ev.dataset.event);
      if (found) openEventSheet(found);
      return;
    }
    const day = e.target.closest('[data-day]');
    if (day) {
      state.cal.selected = new Date(Number(day.dataset.day));
      if (state.cal.selected.getMonth() !== state.cal.anchor.getMonth()) state.cal.anchor = startOfMonth(state.cal.selected);
      loadCalendar();
      return;
    }
    const go = e.target.closest('[data-goto]');
    if (go) {
      showView(go.dataset.goto);
      return;
    }
    const act = e.target.closest('[data-action]');
    if (!act) return;
    const a = act.dataset.action;
    if (a === 'retry-weather') { state.weatherError = null; renderWeather(); loadWeather(true); }
    if (a === 'retry-football') { state.footballError = null; loadFootball(true); }
    if (a === 'retry-upsets') { state.upsetsError = null; state.upsets = null; renderUpsets(); loadUpsets(true); }
    if (a === 'retry-news') ['tech', 'oesterreich', 'welt'].forEach(c => { if (state.news[c]) state.news[c].error = false; renderNewsFor(c); loadNews(c, true); });
    if (a.startsWith('retry-') && ['fussball', 'f1', 'ausdauer'].includes(a.slice(6))) { const c = a.slice(6); if (state.news[c]) state.news[c].error = false; renderNewsFor(c); loadNews(c, true); }
    if (a === 'retry-f1') { state.f1Error = null; renderF1(); loadF1(true); }
    if (a === 'retry-cal') { state.cal.error = null; loadCalendar(true); }
    if (a === 'open-settings') openSettings();
    if (a === 'cal-demo') { state.cal.demo = true; loadCalendar(true); }
  });

  document.addEventListener('load', e => {
    const img = e.target;
    if (img instanceof HTMLImageElement && img.classList.contains('lead-img') && img.naturalWidth < 700) {
      setTimeout(() => upgradeLeadImage(img), state.bootedAt && Date.now() - state.bootedAt > 4000 ? 300 : 4000);
    }
  }, true);

  document.addEventListener('error', e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    const row = img.closest('.news-row');
    if (row) row.classList.add('no-img');
    const lead = img.closest('.news-lead');
    if (lead) lead.classList.remove('has-img');
    if (img.closest('.reader-hero')) img.closest('.reader-hero').innerHTML = '';
    img.remove();
  }, true);

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      moveTabIndicator(true);
      $$('.segmented').forEach(seg => positionSegment(seg, true));
      buildRefraction();
      if (state.view === 'kalender' && state.cal.view === 'week') renderCalendar();
    }, 120);
  });
  window.addEventListener('hashchange', () => showView(location.hash.slice(1), false));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) periodic(); });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(store.get('theme', 'auto')));
}

function openSettings() {
  renderCalRows(state.cal.sources);
  updateCalStatus();
  openSheet($('#settings'));
}

function init() {
  state.bootedAt = Date.now();
  store.prune();
  const theme = store.get('theme', 'auto');
  if (theme !== 'auto') document.documentElement.dataset.theme = theme;
  selectSegment($('.segmented[data-segment="theme"]'), theme, true);
  setSky();
  state.cal.view = store.get('cal_view', 'agenda');
  state.cal.anchor = startOfDay(new Date());
  state.cal.selected = startOfDay(new Date());
  state.todos = store.get('todos_cache', []);
  state.weatherLoc = defaultLocation();
  if (!isChromium()) document.documentElement.classList.add('no-refract');
  bindEvents();
  showView(location.hash.slice(1) || 'heute');
  renderWeather();
  renderFootballToday();
  renderEventsToday();
  renderTopNews();
  renderTodos();
  loadWeather();
  loadFootball();
  loadState();
  ['tech', 'oesterreich', 'welt'].forEach(c => loadNews(c));
  initPullToRefresh();
  requestAnimationFrame(() => {
    moveTabIndicator(true);
    initSegments();
    buildRefraction();
  });
  document.fonts?.ready.then(() => {
    moveTabIndicator(true);
    $$('.segmented').forEach(seg => positionSegment(seg, true));
    buildRefraction();
  });
  setInterval(periodic, 60e3);
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
