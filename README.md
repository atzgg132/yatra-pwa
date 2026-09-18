# Yatra iOS PWA (unofficial demo)

Frontend-only clone of the Yatra mobile app. **Not affiliated with Yatra Online Limited.**

**Open this on iPhone Safari, then Add to Home Screen:**  
https://atzgg132.github.io/

## Add to Home Screen (required for the full-screen app)

1. Open https://atzgg132.github.io/ in **Safari** (not Chrome).
2. Tap **Share** → **Add to Home Screen**.
3. Tap **Add**. Launch the red **Yatra** icon.

It then runs standalone (no Safari chrome). Login with mobile **8391081502** or **000000**, OTP **000000**.

## Hosting

The live app is the user GitHub Pages site: https://atzgg132.github.io/  
GitHub serves `main` with the built-in branch publisher. **Do not add Actions workflows** for Pages or icon decode. Those jobs failed on every push (Pages cannot be enabled on `yatra-pwa` from Actions; icon decode kept missing files) and emailed a failure each time.

## What’s in the demo

Home, Your Trips, and the Bagdogra ⇄ Bangalore booking (8 adults, both legs cancelled) match the live app screens. Fare total **₹1,28,360.00**. Refund **₹17,348.00** on the same booking details page (scroll past Travellers / Fare Breakup).

All copy and amounts live in `data/app.json`.
