"""Keep HTML asset URLs tied to their content, without a build dependency."""

import argparse
import hashlib
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ('styles.css', 'projects.js', 'app.js', 'favicon.svg')


def versioned_html(html):
    for asset in ASSETS:
        # GitHub serves LF; Windows checkouts may use CRLF for the same content.
        content = (ROOT / asset).read_bytes().replace(b'\r\n', b'\n')
        revision = hashlib.sha256(content).hexdigest()[:12]
        pattern = r'((?:href|src)=")' + re.escape(asset) + r'(?:\?v=[a-f0-9]+)?(")'
        html, count = re.subn(pattern, lambda m: f'{m[1]}{asset}?v={revision}{m[2]}', html)
        if count != 1:
            raise ValueError(f'Expected one HTML reference to {asset}, found {count}')
    return html


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail if index.html contains stale asset URLs')
    args = parser.parse_args()
    path = ROOT / 'index.html'
    current = path.read_text(encoding='utf-8')
    updated = versioned_html(current)
    if args.check:
        if current != updated:
            parser.exit(1, 'Asset URLs are stale. Run python tools/update_asset_versions.py\n')
        print('Asset URL versions match all four files.')
    else:
        path.write_text(updated, encoding='utf-8', newline='\n')
        print('Updated asset URL versions in index.html.')


if __name__ == '__main__':
    main()
