# The Archive — Web Book

Static site that delivers the linked short-story project as a recovered archive. Built with Astro + MDX + Tailwind v4. Designed to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321 — Astro's default dev port.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Push to a GitHub repo. Connect on Vercel. No special config needed — Vercel auto-detects Astro.

## How content works

Each story is one `.mdx` file in `src/content/files/`. The filename (without `.mdx`) becomes the URL slug: `the-vote.mdx` → `/files/the-vote`.

### Story frontmatter

```yaml
---
title: "The Story Title"
fileNumber: 5                       # 1-13, controls ordering and FILE 005 display
year: 2069                          # null for the Archivist
sourceLabel: "victim file [redacted]"   # shown in the archive index right column
header: |                           # archival framing block; multi-line
  Case file 2069-WMK-08-7724.
  Subject: unidentified female.
components: ["image", "sound"]      # which memotoxin components reading this story encodes
withheld: false                     # if true, prose body is replaced by the containment notice
binds: false                        # if true, visiting the file forces Class 4 BOUND
---
```

`components`, `withheld`, and `binds` drive the Exposure Passport in the footer. Most stories have an empty `components: []`. The components that matter narratively are tagged on the stories where memotoxin material is present in the text.

### MDX body

Prose is plain Markdown with optional component embeds:

```mdx
import Audio from '../../components/Audio.astro';
import Figure from '../../components/Figure.astro';
import Redaction from '../../components/Redaction.astro';

She paused at the window.

<Audio src="/audio/recovered-fragment-2069.mp3"
       label="Recovered fragment, Black Bloom 2069."
       note="Partial. Audio integrity: degraded."
       duration="1:23" />

The patient, <Redaction>John Smith</Redaction>, was 47.

<Figure src="/images/triune-1-declassified.png"
        alt="Heavily redacted image with visible texture in one corner."
        caption="FIG 1. Image component, Triune-Stimulus-1. Declassified rendering, redacted under §7.2(b)." />
```

Place audio files in `public/audio/` and images in `public/images/`. Reference them with `/audio/...` and `/images/...` paths.

The `Redaction` component:
- Renders as a hard-black bar sized to its hidden content.
- Announces `[redacted]` (or a custom `label` prop) to screen readers.
- Use `block` prop for multi-line redactions.

## The blackout (`/files/the-document`)

`the-document.mdx` has `withheld: true` and `binds: true`. The Story layout sees the flag and renders the `ContainmentNotice` component instead of the prose body. The reader cannot view what Marina viewed. Visiting the page also forces the Exposure Passport to Class 4 BOUND.

This is the structural climax of the entire site. Touch it carefully.

## The Exposure Passport

A small footer indicator on every page. Tracks which memotoxin components the reader has been "exposed to" by reading stories tagged with them. Stored in `localStorage` under `archive_passport_v1`.

Five states: CLEAN (0) → MARKED (1) → TWICE-MARKED (2) → SEALED (3) → BOUND (4).

No tutorial, no explanation in-site. The reader who notices is rewarded.

## Style

All styling lives in `src/styles/global.css`. Tailwind v4 plus custom CSS variables for the limited palette (cream, ink, redaction-black, classified-red, link-blue). Typography is IBM Plex Mono (headers, document furniture) and IBM Plex Serif (prose), loaded via Fontsource.

Dark mode is system-preference based. No toggle.

## Anti-features

- No analytics.
- No comments.
- No social sharing.
- No newsletter signup.
- No autoplay.
- `<meta name="robots" content="noindex, nofollow">` — this is a friends-facing project, not for search.

## File structure

```
web-book/
├── src/
│   ├── components/
│   │   ├── ArchivalHeader.astro       # the monospaced top-of-story block
│   │   ├── Audio.astro                # inline audio artifact
│   │   ├── ContainmentNotice.astro    # the blackout
│   │   ├── Figure.astro               # inline visual artifact
│   │   ├── FileFooter.astro           # prev/next/return navigation
│   │   ├── PassportFooter.astro       # the Exposure Passport
│   │   └── Redaction.astro            # inline accessible redaction bar
│   ├── content/
│   │   └── files/                     # all stories as .mdx
│   ├── content.config.ts              # collection schema
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── Story.astro
│   ├── pages/
│   │   ├── index.astro                # the archive index
│   │   ├── foreword.astro             # reconstructor's foreword
│   │   ├── 404.astro                  # custom no-record page (containment-style)
│   │   └── files/[slug].astro         # dynamic story route
│   └── styles/global.css
├── public/                            # static assets (audio, images, fonts)
└── astro.config.mjs
```
