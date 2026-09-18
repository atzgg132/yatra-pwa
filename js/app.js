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

/* ---------- screens ---------- */

function viewLogin() {
  return `<div class="${screenClass()}">
    <div class="scroll no-tab auth">
      <div class="auth-hero">
        <img src="assets/yatra-logo.svg" alt="Yatra" />
        <h1>Welcome to Yatra</h1>
        <p>Login or create an account with your mobile number.</p>
      </div>
      <form class="auth-form" id="login-form">
        <div class="label">Mobile number</div>
        <div class="phone-row">
          <div class="cc">${store.data.auth.countryCode}</div>
          <input id="mobile" inputmode="numeric" autocomplete="tel" maxlength="10" placeholder="Enter mobile number" />
        </div>
        <div class="err" id="login-err"></div>
        <p class="fine">By continuing you agree to Yatra’s <b>Terms of Use</b> and <b>Privacy Policy</b>. An OTP will be sent to verify this number.</p>
        <button class="btn btn-red" id="get-otp" type="submit" disabled>Get OTP</button>
        <button class="btn btn-ghost" type="button" data-act="skip" style="margin-top:10px">Skip for now</button>
      </form>
    </div>
  </div>`;
}

function viewOtp() {
  const m = store.otp.mobile;
  const masked = m.length > 4 ? m.slice(0, 2) + "••••" + m.slice(-2) : m;
  const boxes = Array.from({ length: 6 }, (_, i) =>
    `<input class="otp-d" inputmode="numeric" maxlength="1" data-i="${i}" aria-label="Digit ${i + 1}" />`
  ).join("");
  return `<div class="${screenClass()}">
    <div class="scroll no-tab auth">
      ${navBar("Verify OTP")}
      <div class="auth-hero">
        <h1>Enter OTP</h1>
        <p>We’ve sent a 6-digit OTP to ${store.data.auth.countryCode} ${masked}
          <button class="change" data-act="back" type="button">Change</button>
        </p>
      </div>
      <form class="auth-form" id="otp-form">
        <div class="otp-boxes" id="otp-boxes">${boxes}</div>
        <div class="err" id="otp-err"></div>
        <div class="otp-meta">
          <span class="wait" id="otp-wait">Resend OTP in 0:30</span>
          <button type="button" class="go hidden" id="otp-resend">Resend OTP</button>
        </div>
        <button type="button" class="hidden" id="otp-call" style="margin:-8px 0 16px;font-size:13px;font-weight:700;color:var(--red)">Get OTP on call</button>
        <button class="btn btn-red" id="verify" type="submit">Verify OTP</button>
      </form>
    </div>
  </div>`;
}

function homeHead() {
  return `<div class="home-head">
    <img class="logo" src="assets/yatra-logo.svg" alt="Yatra" data-act="reset-logo" />
    <div class="home-tools">
      ${iconBtn("cal", "go:#/trips", "Trips")}
      ${iconBtn("wallet", "go:#/wallet", "Wallet")}
      ${iconBtn("bell", "go:#/alerts", "Alerts")}
    </div>
  </div>`;
}

function viewHome() {
  const d = store.data;
  const more = d.home.moreProducts.map(productIcon).join("");
  const dest = d.home.destinations.map((x) =>
    `<button class="dest" data-go="#/search/hotels">
      <img src="${x.image}" alt="${x.name}" />
      <b>${x.name}</b><small>${x.tag}</small>
    </button>`
  ).join("");
  const cb = d.home.continueBooking;
  return `<div class="${screenClass()}">
    ${homeHead()}
    <div class="scroll">
      <div class="products">
        <div class="products-row">${d.home.products.map(productIcon).join("")}</div>
        <button class="more-toggle" data-act="more">${ICONS.chevDown}</button>
        <div class="more-products products-row" id="more">${more}</div>
      </div>
      <div class="hero" data-go="#/search/hotels">
        <img src="${d.home.hero.image}" alt="" />
        <div class="cap"><b>${d.home.hero.title}</b><small>${d.home.hero.subtitle}</small></div>
      </div>
      <div class="section">
        <div class="section-h"><h3>Explore Top Destinations</h3><button class="link" data-go="#/explore">View all</button></div>
        <div class="dest-row">${dest}</div>
      </div>
      <div class="section-h" style="padding:18px 16px 0"><h3>Continue Your Booking</h3></div>
      <button class="continue" data-go="#/search/flights">
        <span class="ic">${ICONS.plane}</span>
        <span>
          <b>${cb.from} → ${cb.to}</b>
          <p>${cb.dateLabel} · ${cb.meta}</p>
        </span>
        <span class="t">${cb.time}</span>
      </button>
      <button class="prime-banner" data-go="#/prime">
        <span><b>YATRA PRIME</b><small>Become a Member Now</small></span>
        <span>›</span>
      </button>
      <div style="height:12px"></div>
    </div>
  </div>`;
}

function viewExplore() {
  const cards = store.data.exploreCards.map((c) =>
    `<button class="offer" data-go="#/search/${c.id}">
      <img src="${c.image}" alt="${c.title}" style="height:120px;width:100%;object-fit:cover" />
      <div class="body" style="display:block">
        <b>${c.title}</b>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13px">${c.blurb}</p>
      </div>
    </button>`
  ).join("");
  return `<div class="${screenClass()}">
    ${homeHead()}
    <div class="scroll">
      <div class="section-h" style="padding:12px 16px 0"><h3>Flights, Hotels & More</h3></div>
      ${cards}
    </div>
  </div>`;
}
