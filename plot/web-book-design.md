# Web Book — Design and Vibe

The aesthetic target and specific design decisions for the web archive. Reference document for building.

## Target vibe

**A thoughtfully designed declassified document collection.** Not a book reader. Not a literary magazine. Not Medium. Not a startup. Visual language of FOIA scans + small art-book press + SCP Foundation Wiki (but literary, not crowdsourced).

**Pro-references:**
- SCP Foundation Wiki, but more literary
- Declassified FOIA documents (National Security Archive's actual scans)
- *17776* (Jon Bois) but more spare
- Are.na browsing experience — clean, archival, deeply linked
- Editions At Play (Google / Visual Editions experiments)
- 1990s text-adventure game sites — sparse, monospaced, mysterious

**Anti-references:**
- Medium / Substack
- "We tell stories" startups
- Hamburger menus
- Autoplaying anything
- Prominent search bars

## On page-flip animations — don't

Skeuomorphic, mobile-janky, signals "pretending to be a book." Project is anti-book; it's anti-archive. Page flips lie about what the thing is.

Use instead:
- Hard cuts (no transition)
- Subtle fade (150-250ms opacity) — recommended default
- Optional "file opening" microinteraction — the file title briefly fixes before the story loads. Only "fancy" transition allowed, and only with restraint.

## Typography

**Headers / document furniture / file numbers / signatures**: monospaced.
- IBM Plex Mono (recommended) or JetBrains Mono.
- Used only for archival/structural elements.

**Body prose**: literary serif with real weight.
- IBM Plex Serif (recommended pairing with IBM Plex Mono).
- Alternatives: EB Garamond, Spectral, Charter.

**UI elements** (back links, file counters): small sans-serif.
- Inter or system-ui.

**Recommendation**: IBM Plex family throughout (Mono + Serif). Same family, intentionally paired, freely available, well-designed for screen.

**Self-host** for performance and reliability.

## Color palette

Five colors. Used with discipline.

| Use | Color | Code |
|---|---|---|
| Background | Cream / off-white | `#f5f1e8` |
| Body text | Near-black, slightly warm | `#1a1a1a` |
| Redaction bars | Hard black | `#000000` |
| Classification accents (rare) | Deep red | `#8a1d1d` |
| Hyperlinks | Muted blue or underlined black | TBD |

**Dark mode**: cream-on-black inversion. Reading-at-11pm mode. NOT green-phosphor terminal (too on-the-nose).

Never use: gradients, pastels, modern startup palettes, anything that looks like 2024 SaaS.

## Layout

- **Reading column**: ~640px max-width on desktop. Forces good line length.
- **Generous margins**, especially top.
- **No persistent nav chrome during reading.** Story owns the screen.
- **Minimal footer**: file counter, return-to-index link, next/previous arrows. Monospace.
- **Mobile-first**: every layout decision tested on phone before committing.

## The index page

Literal file listing. Monospaced. Sparse. Reads like a declassified file catalog.

Rough structure:

```
THE ARCHIVE                              RECONSTRUCTOR'S FOREWORD →

FILE 001    THE VOTE                     2031    public record
FILE 002    SHABBAT IN 2042              2042    family history
FILE 003    FIRST CARDIAC EVENT          2066    incident report
FILE 004    THE MEMO                     2067    leaked memo
FILE 005    BLACK BLOOM                  2069    victim file [redacted]
FILE 006    THE CENSOR'S HUM             2073    workplace incident
FILE 007    BOUND                        2080    clinical log [anonymized]
FILE 008    THE BOY WHO HUMMED           2080    interview
FILE 009    MARINA'S REFUSAL             2080    personal communication
FILE 010    MARINA AT THE WINDOW         2080    reconstruction
FILE 011    THE DOCUMENT                 2080    [withheld]
FILE 012    THE DESIGNER                 2080    audio diary
FILE 013    THE ARCHIVIST                ----    
```

FILE 011's right column reads `[withheld]` even before clicking — foreshadowing. FILE 013 has no year (the archivist assembled everything).

Hover effect: subtle highlight. No card animation, no expansion.

## The story page

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Case file 2069-WMK-08-7724.                        │ ← header, monospace
│  Subject: unidentified female, est. 32 years.       │   3-6 lines max
│  Exposure: Westmarket Central transit hub.          │
│                                                     │
│  ─────────────                                      │ ← thin horizontal rule
│                                                     │
│  The morning had been ordinary. She had stood       │ ← prose, serif
│  on the platform reading the news on her phone      │   ~640px column
│  ...                                                │
│                                                     │
│  ◀ FILE 004           FILE 005 OF 013          ▶    │ ← minimal footer
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Asset integration

### Audio artifact (inline)

Document-style, footnote-like:

```
[AUDIO]  Recovered fragment, Black Bloom 2069.        ▶ 1:23
         Partial. Audio integrity: degraded.
```

- Click ▶ to play inline.
- Optional content note on hover.
- No waveform visualization. No fancy player UI.

### Visual artifact (inline)

Figure-in-a-document treatment:

```
        ┌────────────────────────────┐
        │                            │
        │   [PARTIALLY-CENSORED      │
        │    IMAGE OR DOCUMENT]      │
        │                            │
        └────────────────────────────┘
         FIG 1. Image component, Triune-Stimulus-1.
         Declassified rendering, redacted under §7.2(b).
```

- Thin frame.
- Monospace caption beneath, small.

## The blackout (FILE 011 / "The Document")

The structural climax of the entire site.

When the reader navigates to FILE 011:

1. Page loads with the file's archival header (looks like every other file).
2. Brief beat (intentional small delay, 200-400ms).
3. Below header, instead of prose:

```
[CONTAINMENT PROTOCOL ENGAGED]

The document M. read on the morning of her death
cannot be displayed.

Stimulus Containment Protocol §7.2(c) has determined
that the content of this file presents an unacceptable
risk to viewing parties.

This determination cannot be appealed.
```

- Rendered in the deep red classification accent color.
- No prose. No "try again." No "view anyway" link.
- Reader's only options: previous file, next file, return to index.

What sells it: the file appears in the index, has a header like every other file, has a real URL — and then there is nothing. The system has refused. The reader is treated like a citizen of the world the book describes.

## The Exposure Passport (easter egg)

- Small footer indicator. Discreet. Monospaced. Updates as stories are read.
- No tutorial, no explanation. The reader who notices is rewarded.
- States: `CLASS 0 — CLEAN`, `CLASS 1 — MARKED`, `CLASS 2 — TWICE-MARKED`, `CLASS 3 — SEALED`.
- Each story has 1–2 implicit "components" (image, sound, scent, depending on content). Reading encodes them.
- After Marina's blackout, the reader is Sealed.
- Implemented in `localStorage`. No backend.

### Tagging stories

Each story declares its components in frontmatter:

```yaml
---
title: Black Bloom
year: 2069
file_number: 005
components:
  - image
  - sound
---
```

When a reader visits a story, their localStorage encodes those components. The footer updates accordingly.

## Tech stack

- **Astro** with MDX content
- **Tailwind** for styling
- **Vercel** for hosting
- **localStorage** for Exposure Passport
- Self-hosted **IBM Plex** family fonts

### Repo structure (for the web project)

```
web-book/                            # separate repo or subdirectory
├── content/                         # MDX story files
│   ├── 001-the-vote.mdx
│   ├── 002-shabbat-in-2042.mdx
│   └── ...
├── public/
│   ├── audio/                       # AI-generated audio assets
│   ├── images/                      # AI-generated visual artifacts
│   └── fonts/                       # IBM Plex
├── src/
│   ├── components/
│   │   ├── ArchivalHeader.astro
│   │   ├── Audio.astro
│   │   ├── Figure.astro
│   │   ├── ContainmentPage.astro
│   │   ├── PassportFooter.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── Story.astro
│   │   └── Index.astro
│   └── pages/
│       ├── index.astro              # archive index
│       ├── foreword.astro
│       └── files/
│           └── [slug].astro         # story routes
└── astro.config.mjs
```

## Build sequence

1. **Repo scaffold**: Astro + MDX + Tailwind, deployed to Vercel. Empty placeholder.
2. **Index page**: file listing, hardcoded placeholders. Structure only.
3. **Story template**: archival header + prose component. Lorem ipsum is fine.
4. **Containment page**: built early because it's the structural anchor.
5. **Passport footer**: localStorage + component reading.
6. **Then drop in Marina's Refusal** as the first real story.

End of a weekend: deployed empty archive, one dummy story, working blackout, working passport. Infrastructure ready. Pure writing from there.

## Discipline rules

- **Design done once, early.** No infinite tweaking. Get to "good enough" and stop.
- **Mobile-first.** Test every change on phone before committing.
- **Sparse assets.** Audio and visual artifacts are rare. Most stories have none.
- **No analytics.** No social sharing. No comments. No newsletter. Friends-facing means: they read, they text you, that's it.
- **No autoplay anything ever.**
- **The site never warns about hazardous content.** The world's apparatus does that — through containment pages and redactions. Out-of-character warnings break the frame.
