# Bridge homepage

A single standalone page to sit at princesslight.com while you take your time
deploying v2. Not part of v2 — nothing here depends on it, and v2 doesn't
depend on this.

```
index.html          one file, all CSS inlined
bridge-assets/      16 files, 14 MB — every image and video the page uses
```

## Deploy

Copy both into the repo root:

```bash
cp -r bridge/index.html bridge/bridge-assets /path/to/light-flow-design/
```

`index.html` replaces the old homepage. `bridge-assets/` is new, so nothing
else in the repo is touched — `CNAME`, `review-funnel.html`,
`interval-trainer-pwa/`, `kaira/` and the rest stay exactly as they are.

## What's on it

Hero, the two-paths split (motion design / Admin-Busters), three playable
films, four services, the Admin-Busters section with the seven trades, and
contact. Enough for someone to understand what you do and reach you, from
either direction.

## Four links point at pages already in your repo

`kaira/` · `work.html` · `maps.html` · `privacy.html`

All four are live right now — I checked each one. All four also survive the v2
cutover: `kaira/` stays a real page, and `work.html` / `maps.html` /
`privacy.html` become redirect stubs pointing into the new structure. So they
work before, during and after.

Everything else on the page is self-contained: in-page anchors, `mailto:`,
`tel:`, and `bridge-assets/`. If you ever want the file to be portable with no
repo at all, those four links are the only thing to strip.

## SEO

Carries a full homepage head — canonical `https://princesslight.com/`, Open
Graph, Twitter card, and ProfessionalService + WebSite + WebPage structured
data with your real NAP and service areas. Safe to be indexed as the homepage.

**Don't upload v2's `sitemap.xml` until v2 itself is up.** It lists eighteen
URLs that don't exist yet; submitting it early hands Google a pile of 404s.

## When v2 lands

v2's `index.html` overwrites this one. Then delete `bridge-assets/` — v2 uses
`assets/` and won't reference anything in here.
