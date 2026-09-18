import {
  ICONS, DIYA_AVATAR, store, booking, requireAuth, navBar, iconBtn,
  productIcon, screenClass, INR, airlineMark,
} from './core.js';

export function viewLogin() {
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

export function viewOtp() {
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

export function homeHead() {
  const n = store.data.home.alertCount || "5+";
  return `<div class="home-head">
    <img class="logo" src="assets/yatra-logo.svg" alt="Yatra" data-act="reset-logo" />
    <div class="home-tools">
      ${iconBtn("cal", "go:#/trips", "Trips")}
      ${iconBtn("wallet", "go:#/wallet", "Wallet")}
      <button class="icon-btn bell-wrap" data-act="go:#/alerts" aria-label="Alerts">
        ${ICONS.bell}<span class="badge-n">${n}</span>
      </button>
    </div>
  </div>`;
}

function hsbcCard(o) {
  return `<button class="hsbc-card" data-go="#/offers" type="button">
    <div class="hsbc-top">
      <span class="hsbc-mark"><i></i><i></i> HSBC</span>
    </div>
    <div class="hsbc-body">
      <div class="hsbc-art" aria-hidden="true">
        <svg viewBox="0 0 220 140" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#7ec8f5"/>
              <stop offset="1" stop-color="#3aa0e8"/>
            </linearGradient>
          </defs>
          <rect width="220" height="140" fill="url(#sky)"/>
          <path d="M0 92c28-18 48-8 72-14 30-8 44 10 78 4 22-4 40-16 70-8v66H0z" fill="#5bb4ee" opacity=".55"/>
          <g transform="translate(18 38) rotate(-18)">
            <path fill="#dfe7ee" d="M8 28h86l22-8 8 6-18 8H8z"/>
            <path fill="#c5d0da" d="M20 34h70l-8 10H28z"/>
            <circle cx="34" cy="46" r="7" fill="#2a3340"/>
            <circle cx="78" cy="46" r="7" fill="#2a3340"/>
            <path fill="#fff" d="M10 22h36l8 6H16z"/>
            <path fill="#ea2330" d="M96 18l28-6 6 8-24 10z"/>
          </g>
        </svg>
      </div>
      <div class="hsbc-copy">
        <b>${o.title}</b>
        <span>${o.subtitle}</span>
        <small>${o.detail}</small>
        <em>${o.code}</em>
      </div>
    </div>
  </button>`;
}

export function viewHome() {
  const d = store.data;
  const more = d.home.moreProducts.map(productIcon).join("");
  const featured = d.offers.find((o) => o.featured) || d.offers[0];
  const tabs = d.home.offerTabs.map((t, i) =>
    `<button class="otab${i === 0 ? " on" : ""}" type="button">${t}</button>`
  ).join("");
  return `<div class="${screenClass()} home-screen">
    ${homeHead()}
    <div class="scroll home-scroll">
      <div class="products-card">
        <div class="products-row">${d.home.products.map(productIcon).join("")}</div>
        <button class="more-toggle" data-act="more">${ICONS.doubleDown}</button>
        <div class="more-products products-row" id="more">${more}</div>
      </div>
      <div class="home-pills">
        <button class="hpill diya" data-go="#/diya" type="button">
          <span class="spark">${ICONS.sparkle}</span> Diya AI
        </button>
        <button class="hpill covid" data-go="#/trips" type="button">
          <span class="spark">${ICONS.covid}</span> Claim your Covid Refund
        </button>
      </div>
      <div class="offers-block">
        <div class="offers-h">
          <span class="oh-left">${ICONS.offer} Offers</span>
          <button class="link" data-go="#/offers" type="button">View all</button>
        </div>
        <div class="otabs">${tabs}</div>
        ${hsbcCard(featured)}
      </div>
      <div class="trend-block">
        <h3>Trending Hotels</h3>
        <div class="trend-card" data-go="#/search/hotels">
          <div class="trend-art"></div>
        </div>
      </div>
    </div>
  </div>`;
}

export function viewExplore() {
  const cards = store.data.exploreCards.map((c) =>
    `<button class="offer" data-go="#/search/${c.id}">
      <div class="banner tone-${c.tone}"><b>${c.title}</b></div>
      <div class="body" style="display:block">
        <p style="margin:0;color:var(--muted);font-size:13px">${c.blurb}</p>
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

function tripLegRow(leg) {
  return `<div class="yt-leg">
    <div class="yt-route">
      <b>${leg.from.city}</b>
      <span class="yt-line"><i></i><span class="yt-plane">${ICONS.plane}</span><i></i></span>
      <b>${leg.to.city}</b>
    </div>
    <div class="yt-pnr">PNR: ${leg.pnr}</div>
    <div class="yt-meta">
      <span>${leg.from.dateShort.replace(/(\d+)/, "<b>$1</b>")}</span>
      <span class="yt-cancelled">${leg.status.toUpperCase()}</span>
    </div>
  </div>`;
}

export function viewTrips() {
  if (requireAuth("#/trips")) return viewLogin();
  const b = booking();
  const filters = ["ALL", "UPCOMING", "COMPLETED", "CANCELLED"];
  const on = store.tripFilter || "ALL";
  const show = on === "ALL" || on === b.status.toUpperCase() || (on === "CANCELLED" && b.status === "Cancelled");
  const tabs = filters.map((f) =>
    `<button class="trip-tab${f === on ? " on" : ""}" data-act="trip-filter" data-filter="${f}" type="button">${f}</button>`
  ).join("");
  return `<div class="${screenClass()} trips-screen">
    <div class="nav trips-nav">
      ${iconBtn("back", "back", "Back")}
      <div class="title left">Your Trips</div>
    </div>
    <div class="trip-tabs">${tabs}</div>
    <div class="scroll no-tab trips-scroll">
      <div class="refund-banner">
        <span class="ib">${ICONS.info}</span>
        <span>Please select your flight booking to check if you have any refund due.</span>
      </div>
      ${show ? `<button class="yt-card" data-go="#/booking" type="button">
        <div class="yt-ic">${ICONS.plane}</div>
        <div class="yt-body">
          ${b.legs.map(tripLegRow).join("")}
          <div class="yt-ref">Ref No. <b>${b.id}</b></div>
        </div>
      </button>` : `<div class="empty"><b>No trips</b><p>Nothing in ${on.toLowerCase()}.</p></div>`}
    </div>
    <button class="filter-fab" data-act="filter-trips" type="button">${ICONS.filter} FILTER</button>
  </div>`;
}

function itineraryLeg(leg) {
  return `<section class="itin-leg">
    <header>
      <div class="itin-h">
        <b>${leg.from.city}</b>
        <span class="arrow">→</span>
        <b>${leg.to.city}</b>
      </div>
      <div class="itin-pnr">PNR : ${leg.pnr}</div>
    </header>
    <div class="itin-flags">
      <span class="ref-flag">${leg.refundable ? "Refundable" : "Non-Refundable"}</span>
      <span class="cx-flag">${leg.status}</span>
    </div>
    <div class="air-row">
      ${airlineMark(leg.airlineCode)}
      <div>
        <div class="nm">${leg.airline}</div>
        <div class="fn">${leg.flightNumber}</div>
      </div>
      <div class="cabin">${leg.cabin}</div>
    </div>
    <div class="times">
      <div>
        <div class="city">${leg.from.code}</div>
        <div class="tm">${leg.from.time}</div>
        <div class="term">${leg.from.date}<br>${leg.from.terminal}</div>
      </div>
      <div class="mid">
        <div class="dur">${leg.duration}</div>
        <div class="line"><span class="clk">${ICONS.clock}</span></div>
        <div>${leg.stops}</div>
      </div>
      <div class="end">
        <div class="city">${leg.to.code}</div>
        <div class="tm">${leg.to.time}</div>
        <div class="term">${leg.to.date}<br>${leg.to.terminal}</div>
      </div>
    </div>
  </section>`;
}

export function viewBooking() {
  if (requireAuth("#/booking")) return viewLogin();
  const b = booking();
  const r = b.refund;
  const trav = b.legs.map((leg) =>
    `<button class="trav-row" type="button" data-act="toggle-trav" data-leg="${leg.id}">
      <span>${leg.from.city} <span class="arrow">→</span> ${leg.to.city} <span class="sep">|</span> ${b.passengerCount} Passengers</span>
      <span class="chev-circle">${ICONS.chevUp}</span>
    </button>
    <div class="trav-list hidden" id="trav-${leg.id}">
      ${b.travellers.map((t) => `<div class="trav-item">${t.title} ${t.name} · ${t.type}</div>`).join("")}
    </div>`
  ).join("");
  const fareBlocks = b.legs.map((leg) =>
    `<div class="fare-leg">
      <div class="fare-h">${leg.from.city} <span class="arrow">→</span> ${leg.to.city}</div>
      <div class="kv"><span>Adult x ${leg.adultCount}</span><span>${INR(leg.base, 2)}</span></div>
      <div class="kv dash"><span>Fee &amp; Surcharge (incl. of Taxes)</span><span>${INR(leg.taxes, 2)}</span></div>
    </div>`
  ).join("");
  return `<div class="${screenClass()} booking-screen">
    <div class="nav book-nav">
      ${iconBtn("back", "back", "Back")}
      <div class="title pair">${b.fromCity} <span class="swap-ic">⇄</span> ${b.toCity}</div>
    </div>
    <div class="book-meta">
      <span>Booked On ${b.bookedOn}</span>
      <span>Booking ID: ${b.id}</span>
    </div>
    <div class="scroll no-tab book-scroll">
      <h3 class="blk-h">Itinerary</h3>
      <div class="itin-card">
        ${b.legs.map(itineraryLeg).join("")}
      </div>
      <p class="support-line">For Support, write to us at email: <a href="mailto:${store.data.meta.supportEmail}">${store.data.meta.supportEmail}</a> or call us at ${b.support.flight} between ${b.support.hours}.</p>

      <h3 class="blk-h">Travellers</h3>
      <div class="trav-card">${trav}</div>

      <h3 class="blk-h">Fare Breakup</h3>
      <div class="fare-card" id="fare-card">
        ${fareBlocks}
        <div class="kv disc"><span>(-) Discount</span><span>(-) ${INR(b.fare.discount, 2)}</span></div>
        <div class="kv total"><span>TOTAL</span><span>${INR(b.fare.total, 2)}</span></div>
        <div class="paid">
          <span>Paid on ${b.paidOn}<br>Through ${b.payment.method}</span>
          <span>${INR(b.fare.total, 2)}</span>
        </div>
        <div class="refund-box">
          <h4>Refund Details</h4>
          <div class="kv"><span>Transaction Id</span><span class="mono">${r.transactionId}</span></div>
          <div class="kv"><span>Transaction Date</span><span>${r.transactionDate}</span></div>
          <div class="kv"><span>Refund Mode</span><span>${r.mode}</span></div>
          <div class="kv"><span>CardType</span><span>${r.cardType}</span></div>
          <div class="kv amt"><span>REFUND AMOUNT</span><span>${INR(r.amount, 2)}</span></div>
        </div>
      </div>
      <button class="refund-status" data-act="refund-status" type="button">
        <span class="rs-ic">${ICONS.rupee}</span>
        <small>Refund Status</small>
      </button>
    </div>
  </div>`;
}

export function viewCancel() {
  if (requireAuth("#/booking/cancel")) return viewLogin();
  const b = booking();
  if (b.status === "Cancelled") return viewBooking();
  const c = b.cancellation.current;
  const reasons = b.cancellation.reasons.map((r, i) =>
    `<button type="button" class="radio${i === 0 ? " on" : ""}" data-reason="${r}"><i></i><span>${r}</span></button>`
  ).join("");
  return `<div class="${screenClass()}">
    ${navBar("Cancel booking")}
    <div class="scroll no-tab">
      <p class="pill-note" style="margin-top:12px">${b.cancellation.cutoffNote}</p>
      <div class="itin">
        <b>${b.fromCity} → ${b.toCity}</b>
        <p style="margin:4px 0 0;color:var(--muted);font-size:13px">${b.legs[0].from.date} · ${b.passengerCount} passengers</p>
      </div>
      <div class="section-h" style="padding:16px 16px 0"><h3>Refund summary</h3></div>
      <div class="list">
        <div class="kv" style="padding:12px 14px"><span class="k">Total paid</span><span class="v">${INR(b.fare.total, 2)}</span></div>
        <div class="kv" style="padding:12px 14px"><span class="k"><b>Refund amount</b></span><span class="v green"><b>${INR(c.refundAmount, 2)}</b></span></div>
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

export function viewRefund() {
  if (requireAuth("#/booking/refund")) return viewLogin();
  return viewBooking();
}

export function viewTicket() {
  const b = booking();
  const t = b.travellers[0];
  const leg = b.legs[0];
  return `<div class="${screenClass()}">
    ${navBar("E-ticket")}
    <div class="scroll no-tab">
      <div class="pass">
        <div class="red">
          <img src="assets/yatra-logo.svg" alt="" />
          <div style="display:flex;justify-content:space-between">
            <div><small>From</small><div style="font-size:22px;font-weight:800">${leg.from.code}</div><div>${leg.from.city}</div></div>
            <div style="text-align:center;align-self:center;opacity:.9">${leg.duration}</div>
            <div style="text-align:right"><small>To</small><div style="font-size:22px;font-weight:800">${leg.to.code}</div><div>${leg.to.city}</div></div>
          </div>
        </div>
        <div style="padding:14px 16px">
          <div class="kv"><span class="k">Passenger</span><span class="v">${t.name}</span></div>
          <div class="kv"><span class="k">Flight</span><span class="v">${leg.flightNumber}</span></div>
          <div class="kv"><span class="k">Date</span><span class="v">${leg.from.date}</span></div>
          <div class="kv"><span class="k">PNR</span><span class="v">${leg.pnr}</span></div>
          <div class="kv"><span class="k">Booking</span><span class="v">${b.id}</span></div>
          <div class="barcode" aria-hidden="true"></div>
        </div>
      </div>
      <div class="cta-stack">
        <button class="btn btn-red" data-act="print">Print / Save PDF</button>
      </div>
    </div>
  </div>`;
}

export function viewOffers() {
  const chips = store.data.home.offerTabs;
  const featured = store.data.offers.find((o) => o.featured) || store.data.offers[0];
  const rest = store.data.offers.filter((o) => o !== featured).map((o) =>
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
    ${navBar("Offers")}
    <div class="scroll no-tab">
      <div class="chip-row" style="padding:10px 16px 0">
        ${chips.map((c, i) => `<button class="chip${i === 0 ? " on" : ""}">${c}</button>`).join("")}
      </div>
      <div style="padding:8px 0 0">${hsbcCard(featured)}</div>
      ${rest}
    </div>
  </div>`;
}

export function viewAccount() {
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
        <button class="row" data-go="#/trips"><div class="ic">${ICONS.bag}</div><div class="txt"><b>My bookings</b></div><span class="chev">›</span></button>
        <button class="row" data-go="#/support"><div class="ic">${ICONS.bell}</div><div class="txt"><b>Help & support</b></div><span class="chev">›</span></button>
      </div>
      <div class="cta-stack">
        <button class="btn btn-ghost" data-act="logout">Logout</button>
      </div>
    </div>
  </div>`;
}

export function viewSearch(kind) {
  const s = store.search;
  const from = store.data.cities.find((c) => c.code === s.from);
  const to = store.data.cities.find((c) => c.code === s.to);
  const title = kind[0].toUpperCase() + kind.slice(1);
  if (kind !== "flights") {
    return `<div class="${screenClass()}">
      ${navBar(title)}
      <div class="scroll no-tab">
        <div class="empty">
          <div class="blob">${ICONS[kind === "hotels" ? "building" : kind === "buses" ? "bus" : kind === "trains" ? "train" : kind === "holidays" ? "umbrella" : "plane"]}</div>
          <b>Search ${title.toLowerCase()}</b>
          <p>This demo focuses on your flight trip. ${title} search is a shell in this frontend.</p>
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
          <button data-trip="oneway">One way</button>
          <button class="on" data-trip="round">Round trip</button>
          <button data-trip="multi">Multi city</button>
        </div>
        <button class="field" data-act="pick-from"><small>From</small><b>${from.name} (${from.code})</b></button>
        <button class="swap" data-act="swap">${ICONS.swap}</button>
        <button class="field" data-act="pick-to"><small>To</small><b>${to.name} (${to.code})</b></button>
        <button class="field" data-act="pick-date"><small>Departure</small><b>Thu, 17 Sep 2026</b></button>
        <button class="field" data-act="pick-pax"><small>Travellers & class</small><b>${s.travellers} Travellers · ${s.cabin}</b></button>
      </div>
      <div class="cta-stack">
        <button class="btn btn-red" data-go="#/flights/results">Search flights</button>
      </div>
    </div>
  </div>`;
}

export function viewResults() {
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
    ${navBar("IXB ⇄ BLR")}
    <div class="scroll no-tab">
      <p style="margin:12px 16px 0;color:var(--muted);font-size:13px">17–19 Sep · 8 Adults · Economy</p>
      ${rows}
      <p style="margin:16px;font-size:12px;color:var(--muted)">Your trip is booking ${booking().id}.</p>
    </div>
  </div>`;
}

export function viewWallet() {
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

export function viewPrime() {
  return `<div class="${screenClass()}">
    ${navBar("Yatra Prime")}
    <div class="scroll no-tab">
      <div class="prime-banner"><span><b>YATRA PRIME</b><small>Travel more for less</small></span></div>
      <div class="cta-stack"><button class="btn btn-red" data-act="prime-join">Become a member</button></div>
    </div>
  </div>`;
}

export function viewSupport() {
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

export function viewDiya() {
  const replies = store.data.diyaReplies.map((r) => `<div class="bubble">${r}</div>`).join("");
  return `<div class="${screenClass()}">
    ${navBar("Diya AI")}
    <div class="scroll">
      <div class="chat">${replies}
        <div class="chips">
          <button data-go="#/booking">My booking</button>
          <button data-go="#/search/flights">Flights</button>
          <button data-go="#/search/hotels">Hotels</button>
          <button data-go="#/trips">Refund status</button>
        </div>
      </div>
    </div>
  </div>`;
}

export function viewAlerts() {
  const b = booking();
  return `<div class="${screenClass()}">
    ${navBar("Notifications")}
    <div class="scroll no-tab">
      <button class="list" data-go="#/booking" style="width:calc(100% - 32px);margin:12px 16px 0">
        <div class="row"><div class="txt"><b>Refund of ${INR(b.refund.amount, 2)} initiated</b><small>Booking ${b.id} · ${b.fromCity} ⇄ ${b.toCity}</small></div></div>
      </button>
    </div>
  </div>`;
}
