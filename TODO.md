# TODO

Forward-looking action items. Completed work lives in git history; this file lists what's left.

When picking up: scan **Now**, pick something you have energy for, do it, check it off, commit.

---

## Now

### Drafts (the actual writing, the only thing left that matters)

- [ ] **FILE 009: Marina's Refusal** *(2080)*, the planned voice test
- [ ] **FILE 003: First Cardiac Event** *(2066, Lihua Han)*, institutional procedural register
- [ ] **FILE 005: Black Bloom** *(2069, victim's POV)*, horror register
- [ ] **FILE 001: The Vote** *(2031, young Karl Olesen)*
- [ ] **FILE 002: The Exception** *(2050, labor leader's POV; Karl Olesen at 44 advocates for the wedge)*
- [ ] **FILE 004: The Memo** *(2067, classification decision; Voss's Vellum-sympathetic margin notes)*
- [ ] **FILE 007: Bound** *(2080, Anna Vance as anonymous patient, L. Han caregiver)*
- [ ] **FILE 008: The Boy Who Hummed** *(2080, A. Ranjit interviewer)*
- [ ] **FILE 010: Marina at the Window** *(2080)*
- [ ] **FILE 011: The Document** *(2080, blackout)*
- [ ] **FILE 012: The Designer** *(2080, K. Olesen's diary)*
- [ ] **FILE 013: The Archivist** *(late 2080s, Wei Han reveals)*

### Site polish (low priority, easy wins)

- [ ] Wire generated `og-card.png` into OG/Twitter meta tags in `BaseLayout.astro` once saved
- [ ] Replace placeholder data-URL favicon with generated `favicon.png` once saved
- [ ] Write the reconstructor's **foreword** (replace placeholder; aim for 100–150 words)
- [ ] Flip `SHOW_CONSTRUCTION_WARNING = false` in `web-book/src/config.ts` once content is shareable

### Assets (user-handled, sparse use)

See [`web-book/IMAGE_PROMPTS.md`](web-book/IMAGE_PROMPTS.md) for the full prompt reference. Recommended priority order:

**Audio**
- [x] FILE 006 narration ✓
- [ ] **Marina's voicemail**, used in FILE 009 (ElevenLabs)
- [ ] **Recovered fragment, Black Bloom 2069**, used in FILE 005 (audio, partial / static-heavy)
- [ ] **K. Olesen audio diary**, used in FILE 012
- [ ] Optional: **censored emergency broadcast**, FILE 005 or 008

**Visual** (per [`web-book/IMAGE_PROMPTS.md`](web-book/IMAGE_PROMPTS.md))
- [ ] **A1** Site favicon / OG card, replaces black-square placeholder
- [ ] **A2** Triune-Stimulus-1 declassified rendering, FILE 004 or 005
- [ ] **A3** Memo document scan, FILE 004
- [ ] **A4** Anonymized patient photo, FILE 007
- [ ] **A7** Olesen's recovered document, FILE 011 setup
- [ ] **A5** The Boy's drawing, FILE 008 (optional)
- [ ] **A6** Public-service poster, atmospheric, optional
- [ ] **A8** Archive cover, index hero, optional

---

## Before sharing with friends

- [ ] **Mobile test** on iOS Safari and Android Chrome (the file index, a regular story, the blackout, foreword)
- [ ] **Exposure Passport end-to-end check**, read FILES 001 → 011 in order, confirm Class 4 BOUND displays after the blackout
- [ ] Final read of all stories in published order, catch tone breaks and continuity drift
- [ ] Flip construction banner OFF (`SHOW_CONSTRUCTION_WARNING = false`)
- [ ] **Share with one friend** for first-impression feedback before showing anyone else
- [ ] Iterate on whatever they react to

---

## Done (recent milestones, kept here briefly for orientation)

- ✅ Vercel deployed; site live
- ✅ Astro + MDX + Tailwind scaffold; 13 file routes
- ✅ Custom 404 (containment-style), view transitions, Exposure Passport
- ✅ Author credit on index ("a tim cao story")
- ✅ Construction banner with code toggle + dismiss
- ✅ Background music system; 13 ambient tracks; FILE 006 narration
- ✅ Canon timeline synthesis (Ban 2031, NCV-34 pandemic, Exception 2050)
- ✅ Character names locked (Karl Olesen, Lihua Han, Anna Vance, Marina Idris, Esin Olamide, Amrit Ranjit, Wei Han, plus 3 Memo co-signatories)
- ✅ R3a (binding rewrites retrospective memory) added to world-rules
- ✅ Three locked cross-story connections + Archivist identity
- ✅ FILE 006 (The Censor's Hum) drafted
- ✅ Registers and slang reference for craft consistency
- ✅ Full repo consistency audit (dates, names, cohorts unified)

---

## Parked (not blocking; address only if a draft demands)

### Worldbuilding gaps that can stay open
- International situation, unbanned states named or unnamed
- More architect backstories beyond Olesen / Tate / Voss / Sokolova
- Vellum cult specifics, name a doctrine, one liturgical phrase, one historical moment
- State treatment of Bound witnesses to classified attacks (Q5)
- Economy beyond the Ban auditing bureaucracy (Q11)

### Optional site features
- Timeline-view navigation (alt route showing stories by year)
- Custom domain (`boundarchive.com` or similar)
- Additional easter-egg routes (a leaked memo at a hidden path, etc.)

---

## Resume hints

When picking up the project, the right opening depends on energy and time:

- **30 min:** draft the foreword (replace placeholder) or set up first asset generation
- **1–2 hrs:** draft a single story (start with Marina's Refusal, FILE 009)
- **Half a day:** draft 2–3 stories
- **A weekend:** finish 5–6 stories and most of the assets

The single most valuable action remains **drafting Marina's Refusal**. Everything else can happen around it.
