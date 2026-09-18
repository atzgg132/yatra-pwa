const INR = (n, digits = 0) =>
  "₹" + Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const ICONS = {
  plane: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 21V5l8-2 8 2v16H4zm3-2h2v-3H7v3zm4 0h2v-3h-2v3zm4 0h2v-3h-2v3zM7 13h2V9H7v4zm4 0h2V9h-2v4zm4 0h2V9h-2v4z"/></svg>`,
  umbrella: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c5.5 1.2 9 5.4 9 10H3c0-4.6 3.5-8.8 9-10zm0 10v5.5a1.5 1.5 0 0 0 3 0V18h2v.5a3.5 3.5 0 0 1-7 0V13z"/></svg>`,
  bus: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 13h2.5v2H6v-2zm8.5 0H18v2h-3.5v-2zM5 8h14v5H5V8z"/></svg>`,
  train: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3l2 2v1H4v-1l2-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 12.5A1.5 1.5 0 1 0 8 12a1.5 1.5 0 0 0 0 3.5zm8 0A1.5 1.5 0 1 0 16 12a1.5 1.5 0 0 0 0 3.5zM6 6h12v5H6V6z"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v4h-2.1a2.5 2.5 0 0 1-4.8 0H9.9a2.5 2.5 0 0 1-4.8 0H3v-4a1 1 0 0 1 1-1h1zm2.1 6a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2zm9.8 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z"/></svg>`,
  palm: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 21V11s6-1 8-6c-6 1-8 6-8 6 0 0-6-1-8-6 2 5 8 6 8 6s-4 4-9 4c5 2 9-4 9-4s4 4 9 4c-5 2-9-4-9-4z"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l9 8h-2.5V20h-5v-6h-3.5v6h-5v-8H3z"/></svg>`,
  ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2v8a2 2 0 0 0-2 2H6a2 2 0 0 0-2-2V8z"/><path d="M12 8v8"/></svg>`,
  passport: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="11" r="3"/></svg>`,
  metro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="12" rx="3"/><path d="M8 20h8M9 16v4M15 16v4"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="10" width="18" height="10" rx="1"/><path d="M12 10v10M3 10h18M12 10c-2-4-6-4-6-1s4 1 6 1zm0 0c2-4 6-4 6-1s-4 1-6 1z"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21h4"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="16" cy="14" r="1"/></svg>`,
  cal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg>`,
  chevDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>`,
  chevUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 15l6-6 6 6"/></svg>`,
  doubleDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 7l6 6 6-6M6 12l6 6 6-6"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="5" y="8" width="14" height="12" rx="2"/><path d="M9 8V7a3 3 0 0 1 6 0v1M8 13h.01M16 13h.01"/></svg>`,
  pct: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M7 17L17 7"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c1.5-3.2 4-5 7-5s5.5 1.8 7 5"/></svg>`,
  house: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l9 8h-2.5V20h-5v-6h-3.5v6h-5v-8H3z"/></svg>`,
  swap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 8h13M16 4l4 4-4 4M17 16H4M8 12l-4 4 4 4"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 3l1.2 3.6L13 8l-3.8 1.4L8 13l-1.2-3.6L3 8l3.8-1.4L8 3zm9 5l.9 2.6L21 12l-3.1 1.1L17 16l-.9-2.9L13 12l3.1-1.4L17 8z"/></svg>`,
  covid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12a8 8 0 0 1 13.5-5.8M20 12a8 8 0 0 1-13.5 5.8"/><path d="M17 4v4h4M7 20v-4H3"/><circle cx="12" cy="12" r="3.2"/><path d="M12 10.6v2.2M11.2 12h1.6"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M11 10h2v7h-2z" fill="#fff"/><circle cx="12" cy="7.2" r="1.2" fill="#fff"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h6.5a2.5 2.5 0 0 0 5 0H20v2h-4.5a2.5 2.5 0 0 0-5 0H4V6zm0 10h2.5a2.5 2.5 0 0 0 5 0H20v2h-8.5a2.5 2.5 0 0 0-5 0H4v-2z"/></svg>`,
  rupee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 6h9M8 10h9M8 6c4 0 6 2 6 5s-2 5-6 5H8l7 6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5.2l3.2 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  offer: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.2L18 8l-4.4 1.8L12 14l-1.6-4.2L6 8l4.4-1.8L12 2z"/></svg>`,
};

const DIYA_AVATAR = `<svg viewBox="0 0 64 64" aria-hidden="true">
  <circle cx="32" cy="32" r="32" fill="#f4d7c8"/>
  <path d="M12 58c4-16 12-24 20-24s16 8 20 24" fill="#f3b8c4"/>
  <circle cx="32" cy="26" r="12" fill="#f3c7b3"/>
  <path d="M18 28c2-14 10-20 14-20 6 0 10 3 14 10 2 4 3 10-1 12-6-8-16-10-27-2z" fill="#5a3a2a"/>
  <path d="M24 26c0-8 4-14 8-14s8 6 8 14" fill="none"/>
  <ellipse cx="32" cy="30" rx="9" ry="10" fill="#f3c7b3"/>
  <circle cx="28" cy="29" r="1.1" fill="#4a2e24"/>
  <circle cx="36" cy="29" r="1.1" fill="#4a2e24"/>
  <path d="M29.5 34.5c1.4 1.2 3.6 1.2 5 0" fill="none" stroke="#c98b86" stroke-width="1"/>
</svg>`;

const TABS = [
  { id: "home", label: "Home", icon: "house", hash: "#/home" },
  { id: "explore", label: "Explore", icon: "search", hash: "#/explore" },
  { id: "diya", label: "Diya AI", icon: "diya", hash: "#/diya" },
  { id: "trips", label: "My Trips", icon: "bag", hash: "#/trips" },
  { id: "account", label: "Profile", icon: "user", hash: "#/account" },
];

const store = {
  data: null,
  session: JSON.parse(localStorage.getItem("yatra.session") || "null"),
  bookingState: JSON.parse(localStorage.getItem("yatra.bookingState.v4") || "null"),
  navDir: "push",
  search: {
    trip: "round",
    from: "IXB",
    to: "BLR",
    date: "2026-09-17",
    travellers: 8,
    cabin: "Economy",
  },
  otp: { mobile: "", timer: 0, resends: 0, tick: null },
  tripFilter: "ALL",
};

function saveSession() {
  if (store.session) localStorage.setItem("yatra.session", JSON.stringify(store.session));
  else localStorage.removeItem("yatra.session");
}
function saveBooking() {
  localStorage.setItem("yatra.bookingState.v4", JSON.stringify(store.bookingState));
}

function booking() {
  const b = structuredClone(store.data.booking);
  const s = store.bookingState;
  if (s?.status === "Cancelled") {
    b.status = "Cancelled";
    b.legs.forEach((leg) => { leg.status = "Cancelled"; });
    b.cancellation.cancellable = false;
    if (s.refund) b.refund = { ...b.refund, ...s.refund };
  }
  if (s?.status === "Confirmed") {
    b.status = "Confirmed";
    b.legs.forEach((leg) => { leg.status = "Confirmed"; });
    b.cancellation.cancellable = true;
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
  if (location.hash === hash) {
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    location.hash = hash;
  }
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

function airlineMark(code) {
  if (code === "IX") {
    return `<span class="alogo ix" aria-hidden="true"><svg viewBox="0 0 32 32"><path fill="#f36c21" d="M7 8l9 8-9 8h5l6.5-6.5L26 24h5L21 16l10-8h-5l-6.5 6.5L9 8z"/></svg></span>`;
  }
  if (code === "QP") {
    return `<span class="alogo qp" aria-hidden="true"><svg viewBox="0 0 32 32"><path fill="#ff5a00" d="M16 4.5L27 28h-5.2l-2.3-5.2H12.5L10.2 28H5L16 4.5zm0 8.2l-3.1 7.1h6.2L16 12.7z"/></svg></span>`;
  }
  return `<span class="alogo">${code}</span>`;
}

export {
  INR, $, $$, ICONS, DIYA_AVATAR, TABS, store,
  saveSession, saveBooking, booking, isMagicMobile,
  toast, go, back, requireAuth, clock, iconBtn, navBar,
  sheet, closeSheets, productIcon, screenClass, airlineMark,
};
