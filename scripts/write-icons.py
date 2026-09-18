#!/usr/bin/env python3
import json, base64, pathlib
root = pathlib.Path(__file__).resolve().parents[1]
data = {}
for p in sorted((root / "scripts").glob("icons*.json")):
    data.update(json.loads(p.read_text()))
if not data:
    raise SystemExit("no scripts/icons*.json found")
# Same PNG is used for apple-touch / 180px home-screen icons.
for src, dests in {
    "apple-touch-icon.png": [
        "assets/icons/apple-touch-icon.png",
        "assets/icons/icon-180.png",
    ],
}.items():
    if src in data:
        for dest in dests:
            data.setdefault(dest, data[src])
for rel, b64 in data.items():
    path = root / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    raw = base64.b64decode(b64)
    if not path.exists() or path.read_bytes() != raw:
        path.write_bytes(raw)
        print("wrote", rel, len(raw))
    else:
        print("ok", rel)
