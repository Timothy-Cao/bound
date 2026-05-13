# Web Book — Working Plan

**Form:** Interactive web archive. Sharable URL. Friends-facing hobby project, not for publication.
**Scope target:** ~10–12 stories, ~5–8 audio assets, ~3–5 visual artifacts. Static site, no auth, no comments.
**Vibe:** SCP Foundation Wiki crossed with declassified FOIA documents — but literary and curated, not crowdsourced.

This format supersedes the linked-collection plan in [`the-collection.md`](the-collection.md) as the **final** working direction. The story-level material (table of contents, archival headers, recurring characters, Marina arc, page-of-text climax) all carries over directly. Only the delivery medium has changed.

## Why this is the right shape

- **Hobby scope frees the form.** No publication = no audience-reach concerns = no need for accessibility-perfect adaptation of every interactive element.
- **The material wants this medium.** Archival reconstruction, redacted documents, weaponized perception, the page-of-text climax — all become *real* in browser instead of *evoked* on a page.
- **AI assets make it achievable.** Audio (ElevenLabs, Suno), visuals (Midjourney, Stable Diffusion), and static-site builders (Astro, 11ty) let one person produce real production value with weekend-scale effort.
- **Shareability matches intent.** A URL friends can open on their phones. Story-level URLs for "read this one" exchanges.

## Core structural elements

### Landing page
- Reconstructor's foreword (brief — 100 words).
- Classification screen aesthetic. PROCEED button or just an index.
- Optional: brief content note before entry.

### Story pages
- One URL per story.
- Each story opens with its archival header as a designed object (case file, recovered diary, leaked memo, redacted clinical log, etc.).
- Header type varies by story per [`the-collection.md`](the-collection.md). The variation is meaningful.
- Story prose below. Serif body, clean and readable.
- Audio and visual artifacts inline where relevant. Optional, never autoplay.

### The blackout
- "The Document" is a real URL. Clicking returns a containment-error page.
- Format: `[CONTENT WITHHELD UNDER §7.2(c) — STIMULUS CONTAINMENT PROTOCOL ENGAGED]`
- The reader cannot read what Marina read because the system has decided they shouldn't. The browser becomes part of the world's apparatus.
- This is the central interactive moment of the whole project.

### Exposure Passport (optional easter egg)
- Site quietly tracks which stories the reader has read (local storage).
- Reflects reader's status back as exposure class. *Class 1: Marked. One component encoded.* → eventually *Class 3: Sealed.*
- No warnings, no explanation, just a sidebar or footer that updates.
- A friend reading at 11pm encounters their own classification.

### Navigation
- Index of stories by year (timeline view).
- Index by character (Marina's three stories grouped).
- Recurring names are links. Click Marina in one story, see her other appearances. Click K. Olesen, see his.

### Final story
- The Archivist. The reconstructor speaks directly. No header.
- This is where the project's argument lands. The reader has been read.

## Censored-artifact design philosophy

The artifacts in the site are **presented as recovered classified material, partially censored**. The reader experiences the *artifact of an attempt to contain a hazard*, not the hazard itself. The censorship is the point.

**Strong rule: never produce something genuinely disturbing.** Produce something that looks and sounds like what survived an attempt to censor something genuinely disturbing. This is more interesting, more thematically aligned, and much safer.

### Audio artifact examples
- *"Recovered fragment, Black Bloom 2069 — partial."* Mostly static with a few seconds of something that might be a tone, then static, then abrupt end.
- *"Voicemail, M. to E. Olamide, April 9, 2080."* Marina's actual voice (AI-generated). Clean, intact.
- *"Censored broadcast, transit emergency alert, 2069."* Voice cuts in and out, with the dangerous tone redacted into silence.
- *"Audio diary, K. Olesen — degraded recording."* Fragments of an old man speaking; gaps where the transcription quality "failed."

### Visual artifact examples
- *"Image component, Triune-Stimulus-1, declassified rendering."* Mostly black redaction bars with a corner of texture visible. Looks like a real declassified document.
- *"Document page, recovered from K. Olesen estate."* Header, footer, classification stamp, page number, signature block — all visible. Body text blacked out line by line.
- *"Patient photo, anonymized."* A figure in a hospital bed with face redacted; the room visible.
- *"Public-service poster, 2076."* Period-appropriate design with the actual hazardous imagery scratched out and replaced with a safety message.

### Implementation rules
- No strobing.
- No aggressive audio (no loud, no dissonant beyond mild).
- No autoplay anywhere.
- All audio has visible play buttons and brief content notes.
- All visuals load with the redaction visible from the start — no "reveal" interactions that uncover the hazard.

## Tech stack suggestions

**Site:** Astro or 11ty (static site generators with Markdown content). Plain HTML/CSS works if you want full control. Notion + Super.so works if you want zero engineering.

**Hosting:** Vercel, Netlify, or GitHub Pages. All free.

**AI tools:**
- ElevenLabs for voiced audio (voicemails, interviews, audio diary)
- Suno or Udio for music / ambient tracks
- Midjourney, DALL-E, or Stable Diffusion for visual artifacts
- Audacity / Adobe Podcast for post-processing audio (static, fragmentation, censoring)
- Image editor for redaction bars, document furniture, classification stamps

**Approximate cost:** $0–30/month depending on which AI tools you pay for.

## Scope discipline — the part that matters

Hobby projects die from scope creep. Two failure modes:

1. **Endless design.** Tweak the site forever, never write prose.
2. **Asset rabbit hole.** Write one story, generate audio, decide visuals need to be better, generate visuals, decide audio needs to match, regenerate audio, never write second story.

**Discipline:**

- **Prose first for each story.** Finished prose before any assets for that story. No exceptions.
- **Cap assets aggressively.** ~5–8 audio total, ~3–5 visuals total. Some stories have nothing. Absence is meaningful.
- **Cap stories.** Aim for 10–12, not 20. Tight beats sprawling.
- **Site design done once, early.** Pick a template, get to "good enough," stop tweaking. Iterate the writing instead.
- **Share early with one friend.** Not "when it's done" — when you have three stories. Their reaction beats any further planning.

## Revised target story list (~10–12, down from 20)

Tightened from the full collection. The cut stories are good ideas but can wait or be dropped entirely. Final list to be confirmed during drafting.

### Part I — Before
1. **The Vote** (2031) — Karl Olesen as a young policy advisor on AI Ban day
2. ~~The Last Layoffs~~ (cut)
3. **Shabbat in 2042** (2042) — defensive practices not yet recognized
4. ~~The Care Worker~~ (cut — too similar to First Cardiac Event)

### Part II — Discovery
5. **First Cardiac Event** (2066) — research nurse realizes a death wasn't cardiac
6. **The Memo** (2067) — leaked classification document
7. ~~A Patient Recognizes Her Daughter~~ (cut or merged into First Cardiac Event)

### Part III — Becoming
8. **Black Bloom** (2069) — victim's POV of the first public attack
9. **The Censor's Hum** (2073) — clearance technician realizes she's humming
10. ~~The Filter~~ (cut)
11. ~~Stink Den~~ (cut — texture rather than story)

### Part IV — Lived
12. **Bound** (2080) — interior of a Bound patient
13. **The Boy Who Hummed** (2080) — teenager's first dream
14. ~~Cleared Photo, A Funeral~~ (cut — too small even for this collection)

### Part V — Endings
15. **Marina's Refusal** (2080) — chemist refuses a contract
16. **Marina at the Window** (2080) — "I'm too certain"
17. **The Document** (2080) — the blackout
18. **The Designer** (2080) — aging architect reflects
19. **The Archivist** (2090s) — reconstructor speaks

That's ~12 stories. Two cut sections can be re-added if specific story ideas demand them.

## Process from here

1. **Confirm this is the working direction.** (Probably yes given conversation.)
2. **Draft Marina's Refusal as the first piece of prose.** No assets yet. Just the story. ~7 pages. Test the voice and the form.
3. **If the voice works, write 2 more stories.** Pick ones that complement Marina — possibly First Cardiac Event (different era, different protagonist, tests range) and Black Bloom (horror register, tests tonal extreme).
4. **Build the minimum-viable site** with those three stories. Static, plain, designed once. Get it to a sharable URL.
5. **Generate the first audio asset** — Marina's voicemail is the obvious one. Tests the asset pipeline.
6. **Share with one friend.** Their reaction guides everything next.
7. **Add stories and assets iteratively** from there. No deadline. Hobby pace.

The friend test at step 6 is the critical inflection point. Their experience will tell you what's working and what isn't far better than any further planning.
