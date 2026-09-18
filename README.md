# Yatra iOS PWA (unofficial demo)

Frontend-only clone of the Yatra mobile app as a **standalone iOS PWA**. Not affiliated with Yatra Online Limited. Branding is used here so the demo looks like the real app for review.

Live (once Pages is enabled): https://atzgg132.github.io/yatra-pwa/

## Open on iPhone

1. Open the GitHub Pages URL in Safari.
2. Share → **Add to Home Screen**.
3. Launch the icon. It runs full-screen like a native app (status bar, home indicator, no Safari chrome).

Locally: `python3 -m http.server 4173` from this folder, then visit `http://localhost:4173`.

## Login (mock OTP — nothing is sent)

The OTP screen is the real flow (6 boxes, auto-advance, paste, resend countdown, “Get OTP on call”). No SMS is ever fired.

Use mobile **000000** and OTP **000000**. Any other combo still shows the OTP UI but verify fails.

## What’s in the demo

- Splash, login, OTP
- Home (product row, destinations, continue booking, Prime)
- Explore, Offers, Profile, Wallet, Diya AI, support
- Flight search + sample results
- **One trip**: IndiGo DEL → BOM on 3 Oct 2026, full details (PNR, traveller, baggage, fare, GST, payment)
- Cancellation policy, cancel confirm, refund timeline
- E-ticket / Apple Wallet toast / web check-in gate

After cancel, the trip stays cancelled (localStorage). Five taps on the home logo resets it to Confirmed.

## Feed data via JSON

All copy, offers, cities, flight results, and the booking live in [`data/app.json`](data/app.json). Edit that file and refresh — no backend.

## Stack

Static HTML / CSS / JS. Service worker for offline shell. No build step.
