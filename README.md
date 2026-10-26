# Lizaveta Hladziy — portfolio

A bilingual, static portfolio for GitHub Pages. The homepage is an interactive catalogue: a numbered index, one large project preview, category filters and previous/next controls. Full project galleries open in accessible native dialogs.

## Local preview

Run `python -m http.server 8765 --bind 127.0.0.1` from this directory, then open http://localhost:8765.

- `index.html`: catalogue, designer information, contact details and dialogs.
- `styles.css`: responsive layout, typography and design tokens.
- `app.js`: PL/EN copy, project selection, filters and gallery interactions.
- `projects.js`: original project descriptions, media paths and gallery order.
- `assets/previews/`: compressed WebP previews; full galleries retain original media.
- `assets/fonts/`: self-hosted Instrument Serif and Manrope, with their OFL licenses.

No build, package installation, external font service or third-party JavaScript is required. The original media, `cv.pdf` and `CNAME` are preserved. The publishing branch must receive the changes before the public site updates.

See [verification and previews](docs/redesign/verification.md).

## Before publishing changes

After editing CSS, JavaScript, project data or the favicon, run:

```sh
python tools/update_asset_versions.py
python tools/update_asset_versions.py --check
```

The helper writes content-based versions into the stylesheet, script and favicon URLs in `index.html`. Commit that HTML update with the asset changes. This prevents a returning browser from combining new markup with an older cached CSS or JavaScript file. No Python is needed on GitHub Pages or in the browser.
