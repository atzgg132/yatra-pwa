import {
  $, $$, store, booking, toast, go, back, clock, closeSheets, sheet, INR,
  isMagicMobile, saveSession, saveBooking, TABS, ICONS,
} from './core.js';
import {
  viewLogin, viewOtp, viewHome, viewExplore, viewTrips, viewBooking,
  viewCancel, viewRefund, viewTicket, viewOffers, viewAccount, viewSearch,
  viewResults, viewWallet, viewPrime, viewSupport, viewDiya, viewAlerts,
} from './screens.js';

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
  $("#phone").onclick = (e) => {
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
    <div class="btn-row" style="flex-direction:column">
      <button class="btn btn-red" id="yes">Yes, cancel</button>
      <button class="btn btn-ghost" id="no">Keep booking</button>
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
