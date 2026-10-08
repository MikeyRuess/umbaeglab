# Baeg Lab — University of Macau

Static academic website with the integrated **Aging Flight Muscle Atlas**.

## Atlas source & credits

The lab's customized atlas is hosted and stored under **MikeyRuess/umbaeglab**. These links use this account's own copy:

- [Open Aging Flight Muscle Atlas](https://mikeyruess.github.io/umbaeglab/aging-flight-muscle-atlas/).
- [Download the full editable source and bundled data](https://github.com/MikeyRuess/umbaeglab/raw/refs/heads/main/atlas-source.zip).
- [Browse the published app and data](aging-flight-muscle-atlas/).

The source archive includes the React/TypeScript app, styles, build configuration, tests, documentation and derived datasets. It contains the lab's **D1 / D25 / D50** labels. This is a maintained copy, not an automatically synchronized mirror.

Original atlas application and data: [yuxux23/Flight_Muscle_Atlas](https://github.com/yuxux23/Flight_Muscle_Atlas), version 1.0.1. Original methodology, scientific provenance and third-party rights are retained. The lab's display-name, cohort-label and URL changes do not recalculate the numerical results.

## Publish
Use GitHub Pages, Deploy from a branch, `main`, `/ (root)`.
The public URL is https://mikeyruess.github.io/umbaeglab/.

## Files
- `index.html`, `assets/site.css`, `assets/site.js`: editable lab website.
- `aging-flight-muscle-atlas/`: complete prebuilt atlas with its derived datasets.
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

Office, lab and team-office room numbers and telephone numbers, plus Tuesday/Thursday 09:00–11:00 consultation hours, follow the institutional contact screenshot supplied by the owner on 9 October 2026. The website omits the Portuguese street-address line at the owner's request.

## Editing and checks

- The ordered student list and contact details are in `index.html`; keep the roster readable without JavaScript.
- Prof. Baeg's portrait is `assets/gyeong-hun-baeg.png`, with an explicit accessible description. Replace student initials only with identified, approved portraits.
- The mobile menu supports Escape and closes after navigation; navigation remains visible if JavaScript is unavailable. Motion respects the visitor's reduced-motion preference.
- The resource's display name is **Aging Flight Muscle Atlas**, published at `aging-flight-muscle-atlas/`. The former atlas URL redirects here for link compatibility.
- The youngest cohort is labeled **D1** throughout the interface, data keys and editable source, as requested by the lab owner on 9 October 2026. This is a cohort-label correction, not a recalculation: all numerical measurements, correlations and age-array ordering are unchanged.
- Preview locally at desktop and mobile widths. Check the ten students in their specified order, the portrait, office/email links, and atlas loading before publishing.

The decorative preview image at `aging-flight-muscle-atlas/og.png` was updated with the built-in image editor. Prompt: change only the youngest age label to D1; preserve the remaining text, layout, colors and illustrative networks. This graphic is not experimental evidence.
