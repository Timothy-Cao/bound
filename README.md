# Story Board, Bound

Working repo for **Bound**, a linked-short-story web archive about a society that banned AI, was reopened by a healthcare crisis, and discovered that perception itself could be weaponized.

Story material lives in this repo (`canon/`, `world/`, `plot/`, `characters/`). The deployable site lives in [`web-book/`](web-book/) and is published as a separate repo at [github.com/Timothy-Cao/bound](https://github.com/Timothy-Cao/bound) → deployed on Vercel.

---

## Quick concepts

- **Memotoxin**, a sensory pattern (image + sound + scent) that kills the brain that has encoded all three.
- **Triune Stimulus**, the three-component form of memotoxin. All 2080-era memotoxins are Triune.
- **Bound (Class 4)**, exposure status when binding is complete and irreversible. Terminal.
- **Sealed (Class 3)**, all three components experienced but not yet bound. Precarious.
- **The Ban (2031)**, AI Labor Ban. Stalled AI development for nineteen years.
- **The Exception (2050)**, Healthcare AI Exception Act. The crack that let AI back in for medicine, and accidentally for everything downstream.

For the full glossary see [`canon/glossary.md`](canon/glossary.md).

## Quick navigation

| If you want… | Go to |
|---|---|
| **The action list** | [`TODO.md`](TODO.md) |
| **The story's timeline (dates, eras)** | [`canon/timeline.md`](canon/timeline.md) |
| **The mechanism rules** | [`canon/world-rules.md`](canon/world-rules.md) |
| **The 13-story table of contents** | [`plot/the-collection.md`](plot/the-collection.md) |
| **Character names and connections** | [`characters/recurring.md`](characters/recurring.md) |
| **The web site (format, design, build)** | [`plot/web-book.md`](plot/web-book.md) |
| **Live questions** | [`open-questions.md`](open-questions.md) |
| **The site code** | [`web-book/`](web-book/) |

---

## Repo structure

```
story-board/
├── README.md                    ← you are here
├── TODO.md                      ← forward-looking action items
├── open-questions.md            ← live worldbuilding/craft questions
│
├── canon/                       ← established facts; binding constraints
│   ├── premise.md               ← compact summary of the project
│   ├── timeline.md              ← dated chronology, 2029 → mid-2080s
│   ├── world-rules.md           ← 12 mechanism rules (R1–R12 + R3a)
│   ├── glossary.md              ← all terms, events, institutions
│   ├── research-frontiers.md    ← research methodology, LCI, horizons
│   └── arms-race.md             ← 11 generations of defense vs. attack
│
├── world/                       ← texture, color, social detail (flexible)
│   ├── daily-life.md
│   ├── classes-and-inequality.md
│   ├── institutions-and-law.md
│   ├── tech-and-countermeasures.md
│   ├── culture-religion-art.md
│   ├── black-market.md
│   ├── actors-and-motives.md    ← terrorist groups, SSDO, corporates
│   ├── community-defense.md     ← R12 texture, hoarded defenses
│   ├── cascading-effects.md     ← knock-on effects across domains
│   └── registers.md             ← register/slang reference (craft tool)
│
├── characters/
│   └── recurring.md             ← named recurring cast + connections
│
├── plot/
│   ├── the-collection.md        ← table of contents + headers + cast
│   ├── web-book.md              ← format, design, and build reference
│   ├── seeds.md                 ← scene seeds (early brainstorm; partially superseded)
│   └── the-book.md              ← SUPERSEDED novella version (kept for reference)
│
├── brainstorm/                  ← raw early notes (kept as historical record)
│   └── 2026-05-11-initial-dump.md
│
└── web-book/                    ← the deployable site (separate git repo)
```

---

## Current status

- **Form**: linked-short-story web archive (Astro + MDX + Tailwind, deployed on Vercel).
- **Frame**: archival reconstruction. Stories presented as recovered case files, leaked memos, diaries, transcripts, etc., assembled by an unnamed reconstructor.
- **Worldbuilding**: complete. Timeline, mechanism, arms race, actors, cascading effects, registers, all stable canon. Ban 2031, NCV-34 pandemic 2034, Exception 2050, Black Bloom 2069, story present 2080.
- **Characters**: named and locked. See [`characters/recurring.md`](characters/recurring.md).
- **Cross-story connections**: three locked + the Archivist (Wei Han, Lihua Han's child).
- **Drafts**: 1 of 13 complete. [`FILE 006, The Censor's Hum`](web-book/src/content/files/the-censors-hum.mdx).
- **Site**: live. Construction banner is currently ON; flip `SHOW_CONSTRUCTION_WARNING = false` in [`web-book/src/config.ts`](web-book/src/config.ts) when shareable.

---

## ▶ Resume here

See [`TODO.md`](TODO.md). The single most valuable next action is **drafting "Marina's Refusal" (FILE 009)** as the voice test for the remaining twelve stories.

Recommended openings by available time:

- **30 min**: write the foreword (replace placeholder in [`web-book/src/pages/foreword.astro`](web-book/src/pages/foreword.astro))
- **1–2 hrs**: draft Marina's Refusal
- **Half a day**: draft 2–3 stories
- **A weekend**: half the collection

---

## Working agreement

- Claude manages logical consistency, timeline coherence, character age alignment, and repo organization.
- Claude pushes back when something contradicts canon, breaks established rules, or stretches plausibility.
- The user owns creative direction; Claude proposes, the user decides.
- When canon changes, all affected files are updated together and the change is committed.
