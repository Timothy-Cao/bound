# The Web Book, Format, Design, and Build

Canonical reference for what the site is, how it looks, and how it's built. The *story material* lives in [`the-collection.md`](the-collection.md). This file is everything else.

---

## Format and scope

**Form**: interactive web archive. Sharable URL. Friends-facing hobby project, not for publication.
**Scope**: ~13 stories, ~5–8 audio assets, ~3–5 visual artifacts. Static site, no auth, no comments.
**Stack**: Astro + MDX + Tailwind v4, deployed to Vercel.
**Repo**: [github.com/Timothy-Cao/bound](https://github.com/Timothy-Cao/bound)

## Target vibe

A thoughtfully designed declassified document collection. Not a book reader, not a literary magazine, not Medium, not a startup. Visual language of FOIA scans + small art-book press + SCP Foundation Wiki, but literary and curated, not crowdsourced.

**Pro-references**: SCP Foundation Wiki (more literary); National Security Archive's actual FOIA scans; *17776* (Jon Bois) but more spare; Are.na browsing experience; Editions At Play experiments; 1990s text-adventure game sites.

**Anti-references**: Medium/Substack; "we tell stories" startups; hamburger menus; autoplaying anything; prominent search bars; page-flip animations (skeuomorphic, mobile-janky, lies about the project's anti-book identity).

## Typography

- **Headers / document furniture / file numbers**: IBM Plex Mono.
- **Body prose**: IBM Plex Serif.
- **UI elements** (back links, file counters): small sans-serif (Inter / system-ui).

Self-hosted via Fontsource. Same family throughout, intentionally paired.

## Color palette

Five colors, used with discipline:

| Use | Code |
|---|---|
| Background (cream) | `#f5f1e8` |
| Body text (warm near-black) | `#1a1a1a` |
| Redaction bars | `#000000` |
| Classification accents (rare) | `#7a1818` |
| Hyperlinks (muted blue) | `#2d3a5e` |

Dark mode: cream-on-black inversion. NOT green-phosphor terminal. System-preference based; no toggle.

## Layout

- **Reading column**: ~640px max-width on desktop. Forces good line length.
- **Generous margins**, especially top.
- **No persistent nav chrome during reading.** Story owns the screen.
- **Minimal footer**: file counter, return-to-index link, prev/next arrows in monospace.
- **Mobile-first**: every layout decision tested on phone before committing.

## Page transitions

Astro view transitions (subtle fade, 150–250ms opacity). No page flips. No 3D rotations. No parallax.

## Core structural elements

### Landing / index page
Literal file listing, monospaced, sparse. Reads like a declassified file catalog. File 011 displays `[withheld]` in the right column *before clicking*, foreshadowing.

### Story page
Archival header (3–6 lines, monospace) → thin horizontal rule → prose (serif, narrow column) → minimal footer.

### The blackout (FILE 011 / The Document)
The structural climax of the entire site. When the reader navigates to FILE 011:

1. Page loads with the file's archival header, looks like every other file.
2. Brief intentional delay (200–400ms).
3. Below header, instead of prose, a containment notice in deep red:

```
[CONTAINMENT PROTOCOL ENGAGED]

The document M. read on the morning of her death
cannot be displayed.

Stimulus Containment Protocol §7.2(c) has determined
that the content of this file presents an unacceptable
risk to viewing parties.

This determination cannot be appealed.
```

No prose. No "view anyway." Only back / next / index.

What sells it: the URL is real, the header is real, the system has decided. The browser becomes part of the world's apparatus.

### The Exposure Passport
Discreet monospaced footer indicator. Updates as stories are read.

- `CLASS 0, CLEAN`
- `CLASS 1, MARKED`
- `CLASS 2, TWICE-MARKED`
- `CLASS 3, SEALED`
- `CLASS 4, BOUND` (forced by visiting FILE 011)

Each story declares its components in MDX frontmatter; reading encodes them in `localStorage`. No tutorial, no warnings, the reader who notices is rewarded.

### Final story
The Archivist (FILE 013). No header. Wei Han speaks directly. The project's argument lands here.

## Censored-artifact philosophy

Assets are presented as **recovered classified material, partially censored**. The reader experiences the *artifact of an attempt to contain a hazard*, not the hazard itself.

**Strong rule: never produce something genuinely disturbing.** Produce something that looks and sounds like what survived an attempt to censor something genuinely disturbing. This is more interesting, more thematically aligned, and safer.

### Audio artifact patterns
- *"Recovered fragment, Black Bloom 2069, partial."* Mostly static, a few seconds of tone, abrupt end.
- *"Voicemail, M. to E. Olamide, April 9, 2080."* Clean intact recording, AI-generated voice.
- *"Censored broadcast, transit emergency alert, 2069."* Voice cuts in and out, dangerous tone redacted to silence.
- *"Audio diary, K. Olesen, degraded recording."* Fragments of an old man speaking; gaps where transcription "failed."

### Visual artifact patterns
- *"Image component, Triune-Stimulus-1, declassified rendering."* Mostly redaction bars, corner of texture visible.
- *"Document page, recovered from K. Olesen estate."* Header, footer, classification stamp, page numbers visible. Body blacked out line by line.
- *"Patient photo, anonymized."* Hospital bed visible, face redacted.

### Implementation rules
- No strobing.
- No aggressive audio (no loud, no dissonant beyond mild).
- No autoplay anywhere.
- Audio has visible play buttons + content notes.
- Visuals load with redaction visible from start, no reveal interactions.

## Tech stack

- **Astro 5** with MDX content collections
- **Tailwind v4** with custom `@theme` tokens for the palette
- **Vercel** hosting (auto-detects Astro)
- **localStorage** for the Passport
- **IBM Plex family** self-hosted via Fontsource
- **ElevenLabs** for voiced audio, **Suno**/Udio for ambient, **Midjourney** for visuals

Approximate monthly cost: $0–30 depending on AI tool subscriptions.

## Repo structure (web-book/)

```
web-book/
├── src/
│   ├── components/
│   │   ├── ArchivalHeader.astro
│   │   ├── Audio.astro
│   │   ├── BackgroundMusic.astro
│   │   ├── ConstructionBanner.astro
│   │   ├── ContainmentNotice.astro
│   │   ├── Figure.astro
│   │   ├── FileFooter.astro
│   │   ├── PassportFooter.astro
│   │   └── Redaction.astro
│   ├── content/files/         # MDX stories
│   ├── content.config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── Story.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── foreword.astro
│   │   ├── 404.astro
│   │   └── files/[slug].astro
│   ├── styles/global.css
│   └── config.ts              # SHOW_CONSTRUCTION_WARNING, CHAPTER_MUSIC, CHAPTER_NARRATION
├── public/
│   ├── audio/                 # AI-generated audio
│   ├── images/                # AI-generated visual artifacts
│   └── fonts/                 # IBM Plex
└── astro.config.mjs
```

## Discipline rules for the project

Hobby projects die from scope creep. Two failure modes:

1. **Endless design**, tweak the site forever, never write prose.
2. **Asset rabbit hole**, write one story, generate audio, decide visuals need to be better, never write the second story.

The discipline:

- **Prose first for each story.** Finished prose before any assets for that story. No exceptions.
- **Cap assets aggressively.** ~5–8 audio total, ~3–5 visuals total. Some stories have nothing.
- **Cap stories at ~13.** Tight beats sprawling.
- **Site design done once, early.** Get to "good enough" and stop.
- **Share early with one friend.** Not "when it's done", when you have three stories.
- **No analytics, no comments, no social sharing, no newsletter, no autoplay.** `<meta robots noindex, nofollow>`.

## Construction banner toggle

While unfinished, a large diagonal `Archive Under Construction` stamp renders on every page in classification-red. A small "Ignore warning" checkbox sits at the bottom-left; checking it hides the stamp (state persists in localStorage per browser).

To remove permanently:

```ts
// web-book/src/config.ts
export const SHOW_CONSTRUCTION_WARNING = false;
```

When the flag is `false`, neither stamp nor checkbox renders.

## Build sequence (already complete; reference)

1. Repo scaffold ✓
2. Index page ✓
3. Story template ✓
4. Containment page ✓
5. Passport footer ✓
6. Construction banner ✓
7. Author credit ✓
8. Background music system ✓
9. Custom 404 + view transitions + accessibility pass ✓
10. **Pending**: drafts for FILES 001–005 and 007–013.
