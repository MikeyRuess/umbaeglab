# Baeg Lab — University of Macau

Static academic website with the integrated **Aging Flight Muscle Atlas**.

## Publish
Use GitHub Pages, Deploy from a branch, `main`, `/ (root)`.
The public URL is https://mikeyruess.github.io/umbaeglab/.

## Files
- `index.html`, `assets/site.css`, `assets/site.js`: editable lab website.
- `aging-muscle-atlas/`: complete prebuilt atlas with its derived datasets.
- `atlas-source.zip`: editable upstream atlas source, data, tests and documentation. Extract locally to rebuild; redundant prebuilt `docs/` files are omitted from the archive.

Run `python3 -m http.server 8080` here to preview, then visit http://localhost:8080.
No build step is needed to serve the prebuilt site. All paths are relative for GitHub project Pages.

## Credits and editorial sources
Research, team details and campus photograph: https://github.com/MikeyRuess/baeglab (gh-pages).
PI information and publication list: https://fhs.um.edu.mo/en/our-staff/academic-staff/academic-home/associate-professors/ and https://fhs.um.edu.mo/en/prof-gyeong-hun-baegs-full-publication-list/.
Academic website reference: https://www.henrykwoklab.com/ (layout inspiration; no copied text or assets).
Atlas application and data: https://github.com/yuxux23/Flight_Muscle_Atlas, version 1.0.1. Original methodology and provenance remain within the atlas; the display name is updated to Aging Flight Muscle Atlas. No analytical results have been changed.
Campus photograph retained from the owner's existing website. Existing third-party rights remain with their owners. No new blanket license is asserted over the atlas data or institutional assets.

The team roster, order, nicknames and office E12-2010 were updated from the lab owner's instructions on 9 October 2026. Prof. Baeg's portrait was supplied by the owner. Student portraits are not included in the original repository despite filenames in its roster, so the site uses initials rather than unrelated or generated portraits. Sofia is listed as a BSc student without a year. Other years indicate the start of PhD study.

## Editing and checks

- The ordered student list and contact details are in `index.html`; keep the roster readable without JavaScript.
- Prof. Baeg's portrait is `assets/gyeong-hun-baeg.png`, with an explicit accessible description. Replace student initials only with identified, approved portraits.
- The mobile menu supports Escape and closes after navigation; navigation remains visible if JavaScript is unavailable. Motion respects the visitor's reduced-motion preference.
- The resource's display name is **Aging Flight Muscle Atlas**. Its existing `aging-muscle-atlas/` URL is intentionally retained for link compatibility. The app title, prebuilt interface and editable source archive use the same name; analytical data are unchanged.
- Preview locally at desktop and mobile widths. Check the ten students in their specified order, the portrait, office/email links, and atlas loading before publishing.
