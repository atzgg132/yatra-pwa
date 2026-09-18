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
          <span>ID ${b.id}</span>
          <b>View details ›</b>
        </div>
      </button>
    </div>
  </div>`;
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

boot();
