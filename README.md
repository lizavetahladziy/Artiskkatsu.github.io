# Lizaveta Hladziy — portfolio

A bilingual, static portfolio for GitHub Pages. No build step, package installation, external fonts or third-party JavaScript are required.

## Local preview

From this directory, run `python -m http.server 8765 --bind 127.0.0.1`, then open http://localhost:8765.

- `index.html`: page structure, accessible project and image dialogs.
- `styles.css`: responsive layout, typography and design tokens.
- `app.js`: PL/EN copy, category filters and gallery interactions.
- `projects.js`: original project descriptions, media paths and gallery ordering.
- `assets/previews/`: compressed WebP copies for the overview; project dialogs use the original files.

The existing `CNAME` and original image, PDF and video files are preserved. The redesign needs to be merged into the publishing branch to update the public site.

See [redesign verification and previews](docs/redesign/verification.md).
