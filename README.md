# PAUSD Facilities (2018 Facilities Master Plans) — Static Archive

This is a static, offline-browsable archive of `facilities.pausd.org`, the Palo Alto
Unified School District site covering the 2018 Facilities Master Plans and related documents.
It was captured on 2026-08-14 from an archived copy of the original Drupal 7 site retired in 
December 2025, so the content remains available for reference.

## Browsing

Live site: **https://facilities-archive-2018.pausd.org/** (hosted via web01).

Everything is also plain HTML with no server or build step required, so you can equally
well clone or download this repo and open `index.html` directly in a browser.

## Structure

- `index.html` — homepage
- `<school-name>/` — each school's four pages (existing site plan, proposed master plan,
  project list, photos), with that school's own images and PDF attachments bundled in
  `<school-name>/assets/`
- `2018-facilities-master-plan/`, `elementary-school/`, `middle-school/`, `high-school/`,
  `planning-process/`, `school-site-master-plans/`, `educational-specifications/` —
  district-wide and category pages
- `sites/`, `modules/`, `profiles/` — shared theme CSS/JS and images used across multiple
  pages (kept in one place rather than duplicated)
- `.nojekyll` — tells GitHub Pages to serve the files as-is, skipping Jekyll processing
  (this is a plain static export, not a Jekyll site)

## Notes on this capture

- Content and internal links have been verified to resolve locally.
- Drupal-specific internals not needed for static browsing were left out: the admin-only
  `/node/NNNNN` duplicate pages (redirected to their canonical page instead), the empty
  Drupal `print/` route skeleton, `robots.txt`.
- The homepage's "Oversight Committees" section and the matching entries under
  "Educational Partners" were removed. Those links (Board Bond Advisory Committee, Bond
  Citizens' Oversight Committee, Property Committee) all redirected off the old Drupal
  site to the live pausd.org site rather than pointing at archived content.
- The mobile-style "MENU" hamburger toggle in the header was removed from every page —
  it relied on JavaScript that broke specifically on the homepage. In its place, every
  page now has a simple, always-visible navigation bar (plain HTML, no JavaScript) right
  below the header, listing the primary district-wide pages and all 17 school landing
  pages, so you can jump between schools from anywhere in the site.
- Fixed broken photos/PDFs on the per-school pages: files that were grouped into each
  school's `assets/` folder had ended up saved with their URL-encoded name taken
  literally (e.g. a file actually named `Addison%20(2).jpg` instead of `Addison (2).jpg`),
  which browsers can't resolve. Files were renamed to their proper decoded form and the
  referencing links fixed to match.
- This is an unofficial archival mirror kept for historical/reference purposes. Page
  content and documents belong to Palo Alto Unified School District; check with the
  district before reusing any of it beyond reference.
