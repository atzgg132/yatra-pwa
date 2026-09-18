#!/usr/bin/env python3
import json, base64, pathlib
root = pathlib.Path(__file__).resolve().parents[1]
data = json.loads((root / "scripts" / "icons.json").read_text())
for rel, b64 in data.items():
    path = root / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    raw = base64.b64decode(b64)
    if not path.exists() or path.read_bytes() != raw:
        path.write_bytes(raw)
        print("wrote", rel, len(raw))
    else:
        print("ok", rel)
