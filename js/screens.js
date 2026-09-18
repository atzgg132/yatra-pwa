import {
  ICONS, store, booking, requireAuth, navBar, iconBtn,
  productIcon, screenClass, INR,
} from './core.js';

/* ---------- screens ---------- */

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
  return `<div class="home-head">
    <img class="logo" src="assets/yatra-logo.svg" alt="Yatra" data-act="reset-logo" />
    <div class="home-tools">
      ${iconBtn("cal", "go:#/trips", "Trips")}
      ${iconBtn("wallet", "go:#/wallet", "Wallet")}
      ${iconBtn("bell", "go:#/alerts", "Alerts")}
    </div>
  </div>`;
}

export function viewHome() {
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

export function viewExplore() {
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

export function viewTrips() {
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
          <span>ID ${b.id}</span>
          <b>View details ›</b>
        </div>
      </button>
    </div>
  </div>`;
}

export function viewBooking() {
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

export function viewCancel() {
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

export function viewRefund() {
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

export function viewTicket() {
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

export function viewOffers() {
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
    ${navBar("DEL → BOM")}
    <div class="scroll no-tab">
      <p style="margin:12px 16px 0;color:var(--muted);font-size:13px">Sat, 03 Oct · 1 Adult · Economy</p>
      ${rows}
      <p style="margin:16px;font-size:12px;color:var(--muted)">Your confirmed trip is 6E 2137. Search here is frontend-only.</p>
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

export function viewAlerts() {
  return `<div class="${screenClass()}">
    ${navBar("Notifications")}
    <div class="scroll no-tab">
      <button class="list" data-go="#/booking" style="width:calc(100% - 32px);margin:12px 16px 0">
        <div class="row"><div class="txt"><b>Your Delhi → Mumbai flight is confirmed</b><small>PNR ${booking().pnr} · 03 Oct 2026</small></div></div>
      </button>
    </div>
  </div>`;
}
