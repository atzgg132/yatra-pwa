const INR = (n) =>
  "₹" + Number(n).toLocaleString("en-IN");

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ICONS = {
  plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 16l20-5M2 16l6 3 3-1M22 11L9 7 6 10"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V6l8-3 8 3v14M4 20h16M9 20v-6h6v6M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01"/></svg>`,
  bus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M4 12h16M8 20v-4M16 20v-4M7 16h.01M17 16h.01"/></svg>`,
  train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="13" rx="2"/><path d="M5 10h14M8 20l2-4M16 20l-2-4M8 14h.01M16 14h.01"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5H3v-5z"/><circle cx="7.5" cy="16" r="1.2"/><circle cx="16.5" cy="16" r="1.2"/><path d="M5 13h14"/></svg>`,
  palm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V11M12 11s-6-1-8-6c5 1 8 6 8 6zm0 0s6-1 8-6c-5 1-8 6-8 6zm0 0s-4 4-9 4c4 2 9-4 9-4zm0 0s4 4 9 4c-4 2-9-4-9-4z"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 11l8-7 8 7v9H4v-9z"/><path d="M10 20v-6h4v6"/></svg>`,
  ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2V8z"/><path d="M12 8v8"/></svg>`,
  passport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="11" r="3"/></svg>`,
  metro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="12" rx="3"/><path d="M8 20h8M9 16v4M15 16v4"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="10" width="18" height="10" rx="1"/><path d="M12 10v10M3 10h18M12 10c-2-4-6-4-6-1s4 1 6 1zm0 0c2-4 6-4 6-1s-4 1-6 1z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21h4"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16" cy="14" r="1"/></svg>`,
  cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg>`,
  chevDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5l-1.2 4.8-4.8 1.2 1.2-4.8z"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="8" width="12" height="11" rx="2"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`,
  pct: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M7 17L17 7"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.5-3.2 4-5 7-5s5.5 1.8 7 5"/></svg>`,
  house: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l9 8h-2.5V20h-5v-6h-3.5v6h-5v-8H3z"/></svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 8h13M16 4l4 4-4 4M17 16H4M8 12l-4 4 4 4"/></svg>`,
};

const TABS = [
  { id: "home", label: "Home", icon: "house", hash: "#/home" },
  { id: "explore", label: "Explore", icon: "compass", hash: "#/explore" },
  { id: "trips", label: "My Trips", icon: "bag", hash: "#/trips" },
  { id: "offers", label: "Offers", icon: "pct", hash: "#/offers" },
  { id: "account", label: "Profile", icon: "user", hash: "#/account" },
];

const store = {
  data: null,
  session: JSON.parse(localStorage.getItem("yatra.session") || "null"),
  bookingState: JSON.parse(localStorage.getItem("yatra.bookingState") || "null"),
  navDir: "push",
  search: {
    trip: "oneway",
    from: "DEL",
    to: "BOM",
    date: "2026-10-03",
    travellers: 1,
    cabin: "Economy",
  },
  otp: { mobile: "", timer: 0, resends: 0, tick: null },
};

function saveSession() {
  if (store.session) localStorage.setItem("yatra.session", JSON.stringify(store.session));
  else localStorage.removeItem("yatra.session");
}
function saveBooking() {
  localStorage.setItem("yatra.bookingState", JSON.stringify(store.bookingState));
}

function booking() {
  const b = structuredClone(store.data.booking);
  const s = store.bookingState;
  if (s?.status === "Cancelled") {
    b.status = "Cancelled";
    b.cancellation.cancellable = false;
    b.refund = s.refund;
  }
  return b;
}

function isMagicMobile(n) {
  const d = String(n).replace(/\D/g, "");
  return store.data.auth.magicMobiles.includes(d);
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2400);
}

function go(hash, dir = "push") {
  store.navDir = dir;
  if (location.hash === hash) render();
  else location.hash = hash;
}

function back() {
  store.navDir = "back";
  if (history.length > 1) history.back();
  else go("#/home", "back");
}

function requireAuth(next) {
  if (store.session) return false;
  sessionStorage.setItem("yatra.next", next);
  return true;
}

function clock() {
  const d = new Date();
  const t = d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: false });
  const el = $("#clock");
  if (el) el.textContent = t;
}

function iconBtn(name, action, label) {
  return `<button class="icon-btn" data-act="${action}" aria-label="${label || name}">${ICONS[name]}</button>`;
}

function navBar(title, extra = "") {
  return `<div class="nav">
    ${iconBtn("back", "back", "Back")}
    <div class="title">${title}</div>
    ${extra}
  </div>`;
}

function sheet(html) {
  const wrap = document.createElement("div");
  wrap.className = "sheet-bg";
  wrap.innerHTML = `<div class="sheet"><div class="handle"></div>${html}</div>`;
  wrap.addEventListener("click", (e) => {
    if (e.target === wrap) wrap.remove();
  });
  $("#phone").appendChild(wrap);
  return wrap;
}

function closeSheets() {
  $$(".sheet-bg").forEach((n) => n.remove());
}

function productIcon(p) {
  return `<button class="prod" data-go="#/search/${p.id}">
    <span class="blob">${ICONS[p.icon] || ICONS.plane}</span>
    <span>${p.label}</span>
  </button>`;
}

function screenClass() {
  return store.navDir === "back" ? "screen back" : "screen";
}
