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
          <button class="change" data-act="back">Change</button>
        </p>
      </div>
      <form class="auth-form" id="otp-form">
        <div class="otp-boxes" id="otp-boxes">${boxes}</div>
        <div class="err" id="otp-err"></div>
        <div class="otp-meta">
          <span class="wait" id="otp-wait">Resend OTP in 0:30</span>
          <button type="button" class="go hidden" id="otp-resend">Resend OTP</button>
        </div>
        <button type="button" class="go hidden" id="otp-call" style="margin:-8px 0 16px;font-size:13px;font-weight:700;color:var(--red)">Get OTP on call</button>
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

function viewTrips() {
  if (requireAuth("#/trips")) return viewLogin();
  const b = booking();
  const cancelled = b.status === "Cancelled";
  return `<div class="${screenClass()}">
    <div class="nav plain" style="background:#fff"><div class="title" style="margin:0;text-align:left;padding-left:6px">My Trips</div></div>
    <div class="scroll">
      <div class="chip-row" style="padding:10px 16px 0">
        <button class="chip${!cancelled ? " on" : ""}">Upcoming</button>
        <button class="chip">Completed</button>
        <button class="chip${cancelled ? " on" : ""}">Cancelled</button>
        <button class="chip">All</button>
      </div>
      <button class="trip-card" data-go="#/booking">
        <div class="top">
          <span style="font-size:12px;color:var(--muted);font-weight:650">${b.productLabel.toUpperCase()}</span>
          <span class="badge ${cancelled ? "no" : "ok"}">${b.status}</span>
        </div>
        <h2>${b.from.city} → ${b.to.city}</h2>
        <div class="sub">${b.from.date} · ${b.flightNumber} · ${b.cabin}</div>
        <div class="foot">
          <span>Booking ID ${b.id}</span>
          <b>View details ›</b>
        </div>
      </button>
    </div>
  </div>`;
}

function viewBooking() {
  if (requireAuth("#/booking")) return viewLogin();
  const b = booking();
  const cancelled = b.status === "Cancelled";
  const fare = b.fare;
  const t = b.travellers[0];
  return `<div class="${screenClass()}">
    ${navBar("Booking details")}
    <div class="scroll no-tab">
      <div class="itin">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <span class="badge ${cancelled ? "no" : "ok"}">${b.status}</span>
          <span style="font-size:12px;color:var(--muted)">${b.tripType} · ${b.fareType}</span>
        </div>
        <div class="airline">
          <div class="alogo">6E</div>
          <div>
            <div class="nm">${b.airline}</div>
            <div class="fn">${b.flightNumber} · ${b.aircraft} · ${b.cabin}</div>
          </div>
        </div>
        <div class="times">
          <div>
            <div class="city">${b.from.code}</div>
            <div class="tm">${b.from.time}</div>
            <div class="term">${b.from.dateShort}<br>${b.from.terminal}</div>
          </div>
          <div class="mid"><div>${b.duration}</div><div class="line"></div><div>${b.stops}</div></div>
          <div style="text-align:right">
            <div class="city">${b.to.code}</div>
            <div class="tm">${b.to.time}</div>
            <div class="term">${b.to.dateShort}<br>${b.to.terminal}</div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="row"><div class="txt"><b>PNR</b><small>Airline booking reference</small></div><div>${b.pnr}</div></div>
        <div class="row"><div class="txt"><b>Yatra ID</b><small>Use this with support</small></div><div>${b.id}</div></div>
        <div class="row"><div class="txt"><b>E-ticket</b><small>${b.ticketNumber}</small></div><div>${b.gdsPnr}</div></div>
        <div class="row"><div class="txt"><b>Booked on</b></div><div>${b.bookedOn}</div></div>
      </div>

      <div class="section-h" style="padding:16px 16px 0"><h3>Traveller</h3></div>
      <div class="list">
        <div class="row">
          <div class="ic">${ICONS.user}</div>
          <div class="txt">
            <b>${t.title} ${t.name}</b>
            <small>${t.type} · Seat ${t.seat} · ${t.meal}</small>
          </div>
        </div>
        <div class="row"><div class="txt"><b>Date of birth</b></div><div>${t.dob}</div></div>
      </div>

      <div class="section-h" style="padding:16px 16px 0"><h3>Baggage</h3></div>
      <div class="list">
        <div class="row"><div class="txt"><b>Cabin</b></div><div>${b.baggage.cabin}</div></div>
        <div class="row"><div class="txt"><b>Check-in</b></div><div>${b.baggage.checkin}</div></div>
        <div class="row"><div class="txt"><small>${b.baggage.note}</small></div></div>
      </div>

      <div class="section-h" style="padding:16px 16px 0"><h3>Contact</h3></div>
      <div class="list">
        <div class="row"><div class="txt"><b>Email</b></div><div>${b.contact.email}</div></div>
        <div class="row"><div class="txt"><b>Mobile</b></div><div>${b.contact.mobile}</div></div>
      </div>

      <div class="section-h" style="padding:16px 16px 0"><h3>Payment & fare</h3></div>
      <div class="list">
        <div class="kv" style="padding:12px 14px"><span class="k">Base fare</span><span class="v">${INR(fare.base)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Taxes & fees</span><span class="v">${INR(fare.taxes)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Convenience fee</span><span class="v">${INR(fare.convenience)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Discount</span><span class="v green">− ${INR(fare.discount)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Travel insurance</span><span class="v">${INR(fare.insurance)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k"><b>Total paid</b></span><span class="v"><b>${INR(fare.total)}</b></span></div>
        <div class="row"><div class="txt"><b>${b.payment.method}</b><small>${b.payment.bank} ****${b.payment.last4} · ${b.payment.status}</small></div></div>
        <div class="row"><div class="txt"><b>GST invoice</b><small>${b.gst.invoice}</small></div></div>
      </div>

      <div class="section-h" style="padding:16px 16px 0"><h3>Cancellation & refund</h3></div>
      <div class="list">
        ${cancelled
          ? `<button class="row" data-go="#/booking/refund"><div class="txt"><b>Refund details</b><small>${INR(b.refund.amount)} · ${b.refund.status}</small></div><span class="chev">›</span></button>`
          : `<button class="row" data-go="#/booking/cancel"><div class="txt"><b>Cancel booking</b><small>Refund ${INR(b.cancellation.current.refundAmount)} if you cancel now</small></div><span class="chev">›</span></button>
             <button class="row" data-act="policy"><div class="txt"><b>Cancellation policy</b><small>Airline + Yatra fees apply</small></div><span class="chev">›</span></button>
             <button class="row" data-act="datechange"><div class="txt"><b>Date change</b><small>From ${INR(b.dateChange.airlineFee + b.dateChange.yatraFee)}</small></div><span class="chev">›</span></button>`}
      </div>

      <div class="cta-stack">
        <button class="btn btn-red" data-go="#/booking/ticket">Download e-ticket</button>
        <div class="btn-row">
          <button class="btn btn-ghost" data-act="checkin">Web check-in</button>
          <button class="btn btn-ghost" data-act="email-itin">Email itinerary</button>
        </div>
        ${cancelled ? "" : `<button class="btn btn-ghost" data-go="#/booking/cancel">Cancel booking</button>`}
        <button class="btn btn-ghost" data-act="wallet-pass">Add to Apple Wallet</button>
        <button class="btn btn-ghost" data-go="#/support">Need help?</button>
      </div>
    </div>
  </div>`;
}

function viewCancel() {
  if (requireAuth("#/booking/cancel")) return viewLogin();
  const b = booking();
  if (b.status === "Cancelled") return viewRefund();
  const c = b.cancellation.current;
  const reasons = b.cancellation.reasons.map((r, i) =>
    `<button type="button" class="radio${i === 0 ? " on" : ""}" data-reason="${r}"><i></i><span>${r}</span></button>`
  ).join("");
  return `<div class="${screenClass()}">
    ${navBar("Cancel booking")}
    <div class="scroll no-tab">
      <p class="pill-note" style="margin-top:12px">${b.cancellation.cutoffNote}</p>
      <div class="itin">
        <b>${b.from.city} → ${b.to.city}</b>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13px">${b.from.date} · ${b.flightNumber} · ${b.travellers[0].name}</p>
      </div>
      <div class="section-h" style="padding:16px 16px 0"><h3>Refund summary</h3></div>
      <div class="list">
        <div class="kv" style="padding:12px 14px"><span class="k">Total paid</span><span class="v">${INR(b.fare.total)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Airline cancellation fee</span><span class="v red">− ${INR(c.airlineFee)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Yatra fee</span><span class="v red">− ${INR(c.yatraFee)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Non-refundable add-ons</span><span class="v red">− ${INR(c.nonRefundableAddons)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k"><b>Refund amount</b></span><span class="v green"><b>${INR(c.refundAmount)}</b></span></div>
        <div class="row"><div class="txt"><b>Refund to</b><small>${c.mode}</small></div></div>
        <div class="row"><div class="txt"><b>Timeline</b><small>${c.tat}</small></div></div>
      </div>
      <div class="section-h" style="padding:16px 16px 0"><h3>Reason for cancellation</h3></div>
      <div class="list" id="reasons">${reasons}</div>
      <div class="cta-stack">
        <button class="btn btn-red" data-act="confirm-cancel">Cancel booking</button>
        <button class="btn btn-ghost" data-act="back">Keep this booking</button>
      </div>
    </div>
  </div>`;
}

function viewRefund() {
  if (requireAuth("#/booking/refund")) return viewLogin();
  const b = booking();
  const r = b.refund;
  const tl = r.timeline.map((x) =>
    `<div class="tl ${x.state === "done" ? "done" : x.state === "now" ? "now" : ""}">
      <div class="dot"></div>
      <div><b>${x.title}</b><small>${x.detail}${x.at ? " · " + x.at : ""}</small></div>
    </div>`
  ).join("");
  return `<div class="${screenClass()}">
    ${navBar("Refund details")}
    <div class="scroll no-tab">
      <div class="itin">
        <div class="badge ${b.status === "Cancelled" ? "no" : "ok"}">${r.status}</div>
        <div style="font-size:28px;font-weight:800;margin-top:8px">${INR(r.amount)}</div>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13px">to ${r.mode}</p>
        <p style="margin:8px 0 0;font-size:13px">Expected by <b>${r.expectedBy}</b></p>
        <p style="margin:4px 0 0;font-size:12px;color:var(--muted)">Ref ${r.reference}</p>
      </div>
      <div class="section-h" style="padding:16px 16px 0"><h3>Status</h3></div>
      <div class="list" style="padding:14px">${tl}</div>
      <div class="list">
        <div class="kv" style="padding:12px 14px"><span class="k">Airline fee</span><span class="v">${INR(b.cancellation.current.airlineFee)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Yatra fee</span><span class="v">${INR(b.cancellation.current.yatraFee)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Insurance (non-refundable)</span><span class="v">${INR(b.cancellation.current.nonRefundableAddons)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">Booking</span><span class="v">${b.id}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k">PNR</span><span class="v">${b.pnr}</span></div>
      </div>
      <div class="cta-stack">
        <button class="btn btn-ghost" data-go="#/support">Talk to support</button>
      </div>
    </div>
  </div>`;
}

function viewTicket() {
  const b = booking();
  const t = b.travellers[0];
  return `<div class="${screenClass()}">
    ${navBar("E-ticket")}
    <div class="scroll no-tab">
      <div class="pass">
        <div class="red">
          <img src="assets/yatra-logo.svg" alt="" />
          <div style="display:flex;justify-content:space-between">
            <div><small>From</small><div style="font-size:22px;font-weight:800">${b.from.code}</div><div>${b.from.city}</div></div>
            <div style="text-align:center;align-self:center;opacity:.9">${b.duration}</div>
            <div style="text-align:right"><small>To</small><div style="font-size:22px;font-weight:800">${b.to.code}</div><div>${b.to.city}</div></div>
          </div>
        </div>
        <div style="padding:14px 16px">
          <div class="kv"><span class="k">Passenger</span><span class="v">${t.name}</span></div>
          <div class="kv"><span class="k">Flight</span><span class="v">${b.flightNumber}</span></div>
          <div class="kv"><span class="k">Date</span><span class="v">${b.from.date}</span></div>
          <div class="kv"><span class="k">Departs</span><span class="v">${b.from.time} · ${b.from.terminal}</span></div>
          <div class="kv"><span class="k">Arrives</span><span class="v">${b.to.time} · ${b.to.terminal}</span></div>
          <div class="kv"><span class="k">PNR</span><span class="v">${b.pnr}</span></div>
          <div class="kv"><span class="k">Seat</span><span class="v">${t.seat}</span></div>
          <div class="kv"><span class="k">Ticket</span><span class="v">${b.ticketNumber}</span></div>
          <div class="barcode" aria-hidden="true"></div>
          <p style="text-align:center;font-size:11px;color:var(--muted)">Yatra ID ${b.id}</p>
        </div>
      </div>
      <div class="cta-stack">
        <button class="btn btn-red" data-act="print">Print / Save PDF</button>
      </div>
    </div>
  </div>`;
}

function viewOffers() {
  const chips = ["All", "Flights", "Hotels", "Bus", "Cabs"];
  const offers = store.data.offers.map((o) =>
    `<div class="offer">
      <div class="banner"><b>${o.title}</b></div>
      <div class="body">
        <span class="code">${o.code}</span>
        <button class="link" data-copy="${o.code}">Copy</button>
      </div>
      <p style="margin:0 14px 14px;color:var(--muted);font-size:12px">${o.detail}</p>
    </div>`
  ).join("");
  return `<div class="${screenClass()}">
    <div class="nav plain" style="background:#fff"><div class="title" style="margin:0;text-align:left;padding-left:6px">Offers</div></div>
    <div class="scroll">
      <div class="chip-row" style="padding:10px 16px 0">
        ${chips.map((c, i) => `<button class="chip${i === 0 ? " on" : ""}">${c}</button>`).join("")}
      </div>
      ${offers}
    </div>
  </div>`;
}

function viewAccount() {
  if (requireAuth("#/account")) return viewLogin();
  const u = store.data.user;
  return `<div class="${screenClass()}">
    <div class="nav plain" style="background:#fff"><div class="title" style="margin:0;text-align:left;padding-left:6px">Profile</div></div>
    <div class="scroll">
      <div class="itin">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="alogo" style="background:var(--pink);color:var(--red);font-size:16px">${u.firstName[0]}${u.lastName[0]}</div>
          <div>
            <b>${u.name}</b>
            <div style="color:var(--muted);font-size:13px">${store.data.auth.countryCode} ${u.mobile}</div>
            <div style="color:var(--muted);font-size:13px">${u.email}</div>
          </div>
        </div>
      </div>
      <div class="list">
        <button class="row" data-go="#/wallet"><div class="ic">${ICONS.wallet}</div><div class="txt"><b>Yatra eCash</b><small>${INR(u.ecash)} available</small></div><span class="chev">›</span></button>
        <button class="row" data-go="#/prime"><div class="ic">${ICONS.gift}</div><div class="txt"><b>Yatra Prime</b><small>No convenience fee · VIP support</small></div><span class="chev">›</span></button>
        <button class="row" data-go="#/trips"><div class="ic">${ICONS.bag}</div><div class="txt"><b>My bookings</b></div><span class="chev">›</span></button>
        <button class="row" data-go="#/support"><div class="ic">${ICONS.bell}</div><div class="txt"><b>Help & support</b></div><span class="chev">›</span></button>
      </div>
      <div class="cta-stack">
        <button class="btn btn-ghost" data-act="logout">Logout</button>
      </div>
    </div>
  </div>`;
}

function viewSearch(kind) {
  const s = store.search;
  const from = store.data.cities.find((c) => c.code === s.from);
  const to = store.data.cities.find((c) => c.code === s.to);
  const title = kind[0].toUpperCase() + kind.slice(1);
  if (kind !== "flights") {
    return `<div class="${screenClass()}">
      ${navBar(title)}
      <div class="scroll no-tab">
        <div class="empty">
          <div class="blob">${ICONS[kind === "hotels" ? "building" : kind === "buses" ? "bus" : kind === "trains" ? "train" : "plane"]}</div>
          <b>Search ${title.toLowerCase()}</b>
          <p>This demo focuses on your flight trip. ${title} search is ready as a shell — tap below to browse offers.</p>
          <div style="margin-top:16px"><button class="btn btn-red" data-go="#/offers">See offers</button></div>
        </div>
      </div>
    </div>`;
  }
  return `<div class="${screenClass()}">
    ${navBar("Flights")}
    <div class="scroll no-tab">
      <div class="search-card">
        <div class="seg">
          <button class="on" data-trip="oneway">One way</button>
          <button data-trip="round">Round trip</button>
          <button data-trip="multi">Multi city</button>
        </div>
        <button class="field" data-act="pick-from"><small>From</small><b>${from.name} (${from.code})</b></button>
        <button class="swap" data-act="swap">${ICONS.swap}</button>
        <button class="field" data-act="pick-to"><small>To</small><b>${to.name} (${to.code})</b></button>
        <button class="field" data-act="pick-date"><small>Departure</small><b>Sat, 03 Oct 2026</b></button>
        <button class="field" data-act="pick-pax"><small>Travellers & class</small><b>${s.travellers} Traveller · ${s.cabin}</b></button>
      </div>
      <div class="cta-stack">
        <button class="btn btn-red" data-go="#/flights/results">Search flights</button>
      </div>
    </div>
  </div>`;
}

function viewResults() {
  const rows = store.data.flightResults.map((f) =>
    `<button class="flight-row" data-act="pick-flight" data-id="${f.id}">
      <div style="display:flex;justify-content:space-between">
        <b>${f.airline}</b>
        <span class="pr">${INR(f.price)}</span>
      </div>
      <div class="times" style="margin-top:8px">
        <div class="tm" style="font-size:20px">${f.depart}</div>
        <div class="mid"><div>${f.duration}</div><div class="line"></div><div>${f.stops}</div></div>
        <div class="tm" style="font-size:20px;text-align:right">${f.arrive}</div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--muted)">
        <span>${f.code} · ${f.fareType}</span>
        <span class="seats">${f.seats} seats left</span>
      </div>
    </button>`
  ).join("");
  return `<div class="${screenClass()}">
    ${navBar("DEL → BOM")}
    <div class="scroll no-tab">
      <p style="margin:12px 16px 0;color:var(--muted);font-size:13px">Sat, 03 Oct · 1 Adult · Economy</p>
      ${rows}
      <p style="margin:16px;font-size:12px;color:var(--muted)">Your confirmed trip is 6E 2137. Search here is frontend-only.</p>
    </div>
  </div>`;
}

function viewWallet() {
  if (requireAuth("#/wallet")) return viewLogin();
  const u = store.data.user;
  return `<div class="${screenClass()}">
    ${navBar("Yatra eCash")}
    <div class="scroll no-tab">
      <div class="itin" style="background:var(--red);color:#fff">
        <small>Available balance</small>
        <div style="font-size:32px;font-weight:800">${INR(u.ecash)}</div>
        <p style="margin:8px 0 0;opacity:.9;font-size:13px">Use eCash on flights, hotels and more.</p>
      </div>
      <div class="list">
        <div class="row"><div class="txt"><b>Yatra Money</b><small>Refunds credited here</small></div><div>${INR(u.yatraMoney)}</div></div>
      </div>
    </div>
  </div>`;
}

function viewPrime() {
  const items = [
    ["No convenience fee", "On flights & hotels"],
    ["Exclusive bank offers", "Over and above coupon codes"],
    ["Access to special fares", "Member-only prices"],
    ["VIP customer support", "Priority on chat and call"],
    ["Weekly surprise gifts", "eCash and partner perks"],
    ["Milestone rewards", "The more you travel, the more you save"],
  ];
  return `<div class="${screenClass()}">
    ${navBar("Yatra Prime")}
    <div class="scroll no-tab">
      <div class="prime-banner"><span><b>YATRA PRIME</b><small>Travel more for less</small></span></div>
      <div class="list">
        ${items.map(([a, b]) => `<div class="row"><div class="txt"><b>${a}</b><small>${b}</small></div></div>`).join("")}
      </div>
      <div class="cta-stack"><button class="btn btn-red" data-act="prime-join">Become a member</button></div>
    </div>
  </div>`;
}

function viewSupport() {
  const b = booking();
  return `<div class="${screenClass()}">
    ${navBar("Help & support")}
    <div class="scroll no-tab">
      <div class="list">
        <a class="row" href="tel:${b.support.flight.replace(/-/g, "")}"><div class="txt"><b>Call flights support</b><small>${b.support.flight} · ${b.support.hours}</small></div></a>
        <a class="row" href="mailto:${store.data.meta.supportEmail}"><div class="txt"><b>Email</b><small>${store.data.meta.supportEmail}</small></div></a>
        <button class="row" data-go="#/diya"><div class="txt"><b>Diya AI</b><small>Trip planner bot</small></div><span class="chev">›</span></button>
      </div>
      <p style="margin:16px;font-size:12px;color:var(--muted)">${store.data.meta.disclaimer}</p>
    </div>
  </div>`;
}

function viewDiya() {
  const replies = store.data.diyaReplies.map((r) => `<div class="bubble">${r}</div>`).join("");
  return `<div class="${screenClass()}">
    ${navBar("Diya AI")}
    <div class="scroll no-tab">
      <div class="chat">${replies}
        <div class="chips">
          <button data-go="#/booking">My booking</button>
          <button data-go="#/search/flights">Flights</button>
          <button data-go="#/search/hotels">Hotels</button>
          <button data-go="#/booking/cancel">Cancellation</button>
        </div>
      </div>
    </div>
  </div>`;
}

function viewAlerts() {
  return `<div class="${screenClass()}">
    ${navBar("Notifications")}
    <div class="scroll no-tab">
      <button class="list" data-go="#/booking" style="width:calc(100% - 32px);margin:12px 16px 0">
        <div class="row"><div class="txt"><b>Your Delhi → Mumbai flight is confirmed</b><small>PNR ${booking().pnr} · 03 Oct 2026</small></div></div>
      </button>
    </div>
  </div>`;
}

/* ---------- route ---------- */

function route() {
  const h = (location.hash || "#/home").replace(/^#/, "") || "/home";
  const parts = h.split("/").filter(Boolean);
  const a = parts[0] || "home";
  const b = parts[1];
  if (a === "login") return { tab: null, view: viewLogin };
  if (a === "otp") return { tab: null, view: viewOtp };
  if (a === "explore") return { tab: "explore", view: viewExplore };
  if (a === "trips") return { tab: "trips", view: viewTrips };
  if (a === "offers") return { tab: "offers", view: viewOffers };
  if (a === "account") return { tab: "account", view: viewAccount };
  if (a === "booking" && b === "cancel") return { tab: null, view: viewCancel };
  if (a === "booking" && b === "refund") return { tab: null, view: viewRefund };
  if (a === "booking" && b === "ticket") return { tab: null, view: viewTicket };
  if (a === "booking") return { tab: null, view: viewBooking };
  if (a === "search") return { tab: null, view: () => viewSearch(b || "flights") };
  if (a === "flights") return { tab: null, view: viewResults };
  if (a === "wallet") return { tab: null, view: viewWallet };
  if (a === "prime") return { tab: null, view: viewPrime };
  if (a === "support") return { tab: null, view: viewSupport };
  if (a === "diya") return { tab: null, view: viewDiya };
  if (a === "alerts") return { tab: null, view: viewAlerts };
  return { tab: "home", view: viewHome };
}

function renderTabs(active) {
  const bar = $("#tabbar");
  if (!active) {
    bar.classList.add("hidden");
    return;
  }
  bar.classList.remove("hidden");
  bar.innerHTML = TABS.map((t) =>
    `<button class="tab${t.id === active ? " active" : ""}" data-go="${t.hash}">${ICONS[t.icon]}<span>${t.label}</span></button>`
  ).join("");
}

function bind() {
  $("#app").onclick = (e) => {
    const actEl = e.target.closest("[data-act]");
    const goEl = e.target.closest("[data-go]");
    const copyEl = e.target.closest("[data-copy]");
    if (copyEl) {
      navigator.clipboard?.writeText(copyEl.dataset.copy);
      toast(`Copied ${copyEl.dataset.copy}`);
      return;
    }
    if (goEl) {
      go(goEl.dataset.go);
      return;
    }
    if (!actEl) return;
    const act = actEl.dataset.act;
    if (act === "back") return back();
    if (act.startsWith("go:")) return go(act.slice(3));
    if (act === "more") {
      $("#more")?.classList.toggle("show");
      actEl.classList.toggle("open");
    }
    if (act === "skip") {
      go("#/home");
      return;
    }
    if (act === "logout") {
      store.session = null;
      saveSession();
      toast("Logged out");
      go("#/login");
    }
    if (act === "reset-logo") {
      clearTimeout(store._tapT);
      store._taps = (store._taps || 0) + 1;
      store._tapT = setTimeout(() => { store._taps = 0; }, 1200);
      if (store._taps >= 5) {
        store.bookingState = null;
        localStorage.removeItem("yatra.bookingState");
        store._taps = 0;
        toast("Booking reset to confirmed");
        render();
      }
    }
    if (act === "policy") showPolicy();
    if (act === "datechange") {
      const d = booking().dateChange;
      sheet(`<h3>Date change</h3>
        <p class="note">${d.fareDifferenceNote}</p>
        <div class="kv"><span class="k">Airline fee</span><span class="v">${INR(d.airlineFee)}</span></div>
        <div class="kv"><span class="k">Yatra fee</span><span class="v">${INR(d.yatraFee)}</span></div>
        <div style="height:12px"></div>
        <button class="btn btn-red" id="dc-ok">Check new dates</button>`);
      $("#dc-ok").onclick = () => { closeSheets(); go("#/search/flights"); };
    }
    if (act === "checkin") {
      sheet(`<h3>Web check-in</h3>
        <p class="note">${booking().checkInWindow}</p>
        <p class="note">Opens Friday, 01 Oct 2026, 06:00 IST for this flight.</p>
        <button class="btn btn-red" id="ci-ok">Got it</button>`);
      $("#ci-ok").onclick = closeSheets;
    }
    if (act === "email-itin") toast("Itinerary sent to " + store.data.user.email);
    if (act === "wallet-pass") toast("Pass added to Apple Wallet");
    if (act === "print") window.print();
    if (act === "prime-join") toast("Prime is a demo upsell in this frontend");
    if (act === "confirm-cancel") confirmCancel();
    if (act === "swap") {
      const s = store.search;
      [s.from, s.to] = [s.to, s.from];
      render();
    }
    if (act === "pick-from" || act === "pick-to") pickCity(act === "pick-from" ? "from" : "to");
    if (act === "pick-date") toast("Showing your trip date · Sat, 03 Oct 2026");
    if (act === "pick-pax") {
      sheet(`<h3>Travellers & class</h3>
        <div class="kv"><span class="k">Adults</span><span class="v">1</span></div>
        <p class="note">This demo booking is for 1 adult in Economy.</p>
        <button class="btn btn-red" id="px-ok">Done</button>`);
      $("#px-ok").onclick = closeSheets;
    }
    if (act === "pick-flight") {
      if (actEl.dataset.id === "6E2137") go("#/booking");
      else toast("This is a sample fare. Your trip is 6E 2137.");
    }
  };

  $$(".chip").forEach((c) => {
    c.onclick = () => {
      c.parentElement.querySelectorAll(".chip").forEach((x) => x.classList.remove("on"));
      c.classList.add("on");
    };
  });
  $$(".seg button").forEach((c) => {
    c.onclick = (e) => {
      e.stopPropagation();
      c.parentElement.querySelectorAll("button").forEach((x) => x.classList.remove("on"));
      c.classList.add("on");
    };
  });
  $$("#reasons .radio").forEach((r) => {
    r.onclick = () => {
      $$("#reasons .radio").forEach((x) => x.classList.remove("on"));
      r.classList.add("on");
    };
  });

  const login = $("#login-form");
  if (login) bindLogin(login);
  const otp = $("#otp-form");
  if (otp) bindOtp(otp);
}

function showPolicy() {
  const b = booking();
  const slabs = b.cancellation.slabs.map((s) =>
    `<div style="padding:10px 0;border-bottom:0.5px solid var(--line)">
      <b style="font-size:13px">${s.window}</b>
      <div class="kv"><span class="k">Airline fee</span><span class="v">${INR(s.airlineFee)}</span></div>
      <div class="kv"><span class="k">Yatra fee</span><span class="v">${INR(s.yatraFee)}</span></div>
      <div class="kv"><span class="k">Refund</span><span class="v green">${INR(s.refund)}</span></div>
    </div>`
  ).join("");
  sheet(`<h3>Cancellation policy</h3><p class="note">${b.cancellation.cutoffNote}</p>${slabs}
    <div style="height:10px"></div>
    <button class="btn btn-red" id="pol-ok">Okay</button>`);
  $("#pol-ok").onclick = closeSheets;
}

function confirmCancel() {
  const b = booking();
  const c = b.cancellation.current;
  const sh = sheet(`<h3>Confirm cancellation</h3>
    <p class="note">This cannot be undone. ${INR(c.refundAmount)} will be refunded to ${c.mode}.</p>
    <div class="btn-row">
      <button class="btn btn-ghost" id="no">Keep booking</button>
      <button class="btn btn-red" id="yes">Yes, cancel</button>
    </div>`);
  $("#no").onclick = closeSheets;
  $("#yes").onclick = () => {
    $("#yes").innerHTML = `<span class="spinner"></span>`;
    $("#yes").disabled = true;
    setTimeout(() => {
      const now = new Date();
      const stamp = now.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
      store.bookingState = {
        status: "Cancelled",
        refund: {
          status: "Refund initiated",
          amount: c.refundAmount,
          mode: "Visa ****0000",
          reference: "RFND-" + b.id,
          expectedBy: b.refund.expectedBy,
          timeline: [
            { id: "requested", title: "Cancellation requested", detail: "You cancelled this booking on Yatra.", state: "done", at: stamp },
            { id: "airline", title: "Airline processing refund", detail: "Waiting on IndiGo to credit Yatra.", state: "now" },
            { id: "yatra", title: "Yatra initiated payout", detail: `Amount ${INR(c.refundAmount)} to Visa ****0000.`, state: "pending" },
            { id: "bank", title: "Refund credited", detail: "Banks typically take 5–7 working days.", state: "pending" },
          ],
        },
      };
      saveBooking();
      closeSheets();
      toast("Booking cancelled · refund initiated");
      go("#/booking/refund");
    }, 1100);
  };
}

function pickCity(which) {
  const rows = store.data.cities.map((c) =>
    `<button class="row city-opt" data-code="${c.code}"><div class="txt"><b>${c.city} (${c.code})</b><small>${c.airport}</small></div></button>`
  ).join("");
  const sh = sheet(`<h3>Select city</h3><div class="list" style="margin:0">${rows}</div>`);
  $$(".city-opt", sh).forEach((btn) => {
    btn.onclick = () => {
      store.search[which] = btn.dataset.code;
      closeSheets();
      render();
    };
  });
}

function bindLogin(form) {
  const input = $("#mobile");
  const btn = $("#get-otp");
  const err = $("#login-err");
  const sync = () => {
    const v = input.value.replace(/\D/g, "").slice(0, 10);
    input.value = v;
    btn.disabled = v.length < 6;
  };
  input.addEventListener("input", sync);
  sync();
  form.onsubmit = (e) => {
    e.preventDefault();
    const v = input.value.replace(/\D/g, "");
    if (v.length < 6) {
      err.textContent = "Enter a valid mobile number";
      return;
    }
    err.textContent = "";
    btn.innerHTML = `<span class="spinner"></span>`;
    btn.disabled = true;
    setTimeout(() => {
      store.otp.mobile = v;
      store.otp.resends = 0;
      go("#/otp");
    }, 700);
  };
}

function startTimer() {
  clearInterval(store.otp.tick);
  store.otp.timer = store.data.auth.otpResendSeconds;
  const wait = $("#otp-wait");
  const resend = $("#otp-resend");
  const paint = () => {
    if (!wait) return;
    if (store.otp.timer <= 0) {
      wait.classList.add("hidden");
      resend.classList.remove("hidden");
      if (store.otp.resends >= 1) $("#otp-call")?.classList.remove("hidden");
      return;
    }
    wait.classList.remove("hidden");
    resend.classList.add("hidden");
    const m = Math.floor(store.otp.timer / 60);
    const s = String(store.otp.timer % 60).padStart(2, "0");
    wait.textContent = `Resend OTP in ${m}:${s}`;
    store.otp.timer -= 1;
  };
  paint();
  store.otp.tick = setInterval(paint, 1000);
}

function bindOtp(form) {
  const inputs = $$(".otp-d");
  const err = $("#otp-err");
  const boxes = $("#otp-boxes");
  startTimer();
  inputs[0]?.focus();

  const value = () => inputs.map((i) => i.value).join("");

  inputs.forEach((inp, i) => {
    inp.addEventListener("input", (e) => {
      const v = e.target.value.replace(/\D/g, "").slice(-1);
      e.target.value = v;
      if (v && i < 5) inputs[i + 1].focus();
      if (value().length === 6) setTimeout(() => form.requestSubmit(), 180);
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !inp.value && i > 0) inputs[i - 1].focus();
    });
    inp.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6);
      text.split("").forEach((ch, idx) => { if (inputs[idx]) inputs[idx].value = ch; });
      if (text.length === 6) form.requestSubmit();
    });
  });

  $("#otp-resend").onclick = () => {
    store.otp.resends += 1;
    inputs.forEach((i) => (i.value = ""));
    err.textContent = "";
    boxes.classList.remove("bad");
    startTimer();
    toast("OTP sent again");
    inputs[0].focus();
  };
  $("#otp-call").onclick = () => {
    startTimer();
    toast("You will receive a call with the OTP");
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const code = value();
    if (code.length < 6) {
      err.textContent = "Enter the 6-digit OTP";
      return;
    }
    const btn = $("#verify");
    btn.innerHTML = `<span class="spinner"></span>`;
    btn.disabled = true;
    setTimeout(() => {
      const ok = isMagicMobile(store.otp.mobile) && code === store.data.auth.magicOtp;
      if (!ok) {
        btn.innerHTML = "Verify OTP";
        btn.disabled = false;
        boxes.classList.add("bad");
        err.textContent = "Incorrect OTP. Please try again.";
        inputs.forEach((i) => (i.value = ""));
        inputs[0].focus();
        return;
      }
      store.session = {
        mobile: store.otp.mobile,
        name: store.data.user.name,
        at: Date.now(),
      };
      saveSession();
      const next = sessionStorage.getItem("yatra.next") || "#/home";
      sessionStorage.removeItem("yatra.next");
      toast("Logged in");
      go(next);
    }, 800);
  };
}

function render() {
  closeSheets();
  const r = route();
  $("#app").innerHTML = r.view();
  renderTabs(r.tab);
  bind();
}

async function boot() {
  clock();
  setInterval(clock, 10000);
  const standalone = window.navigator.standalone || matchMedia("(display-mode: standalone)").matches;
  if (standalone) $("#phone").classList.add("standalone");
  store.data = await fetch("data/app.json").then((r) => r.json());
  if (!location.hash) location.hash = store.session ? "#/home" : "#/login";
  render();
  setTimeout(() => $("#splash").classList.add("hide"), 900);
  window.addEventListener("hashchange", () => {
    if (!store.navDir) store.navDir = "push";
    render();
    store.navDir = "push";
  });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}

boot();
