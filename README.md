# Avero website

The redesigned Avero product and download site, published by GitHub Pages from `main` at **https://avero.fun/**. The existing `CNAME`, Discord invite, and versioned release downloads are preserved.

## Files

- `index.html`: product information, Windows downloads, community links, and FAQs.
- `styles.css`: responsive blue-and-ink design, light download section, keyboard focus states, and reduced-motion support.
- `site.js`: accessible preview tabs with arrow-key, Home, and End navigation. No dependencies.
- `assets/`: optimized supplied logo and screenshots of the real desktop application.

No installation or build step is required. Serve this folder with a local static HTTP server to preview it. All fonts are system fonts; there are no analytics, external scripts, or third-party font requests.

## Release updates

Downloads point to the Avero 1.1.1 GitHub release. When publishing a new application version, update the version text, installer/portable URLs, sizes, release notes, and checksum link in `index.html`. Keep signing and updater notices accurate. Replace screenshots when the app changes.

Before pushing, check desktop/tablet/mobile layouts, keyboard tab switching, FAQ expansion, loaded images, and live release links. Preserve the custom domain in `CNAME`.

The application is independent software and is not affiliated with Roblox or Police Roleplay Community.
