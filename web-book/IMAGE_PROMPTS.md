# Image Generation Prompts

Reference document for generating visual artifacts for the web archive. Use whichever AI image service is convenient; prompts below include service-specific tuning where it matters.

Images live in `public/images/`. Reference them from MDX stories with the `<Figure>` component.

---

## Design philosophy (recap)

All visuals are **recovered classified material, partially censored**. The reader experiences the *artifact of an attempt to contain a hazard*, not the hazard itself.

**Hard rules:**
- Never produce something genuinely disturbing. Produce something that looks and sounds like what survived an attempt to censor something genuinely disturbing.
- Redaction is always visible from the start — no reveal interactions.
- No strobing patterns, no aggressive optical illusions, no actual hazardous content.
- Aesthetic: declassified FOIA document. Faded paper, classification stamps, document furniture, page numbers, signature blocks. Black redaction bars where hazardous content "was."
- Color palette: warm cream (`#f5f1e8`), warm black (`#1a1a1a`), hard black for redactions (`#000`), deep oxblood-red for classification stamps (`#7a1818`).

---

## Service recommendations

| Service | Best for | Notes |
|---|---|---|
| **Midjourney v6/v7** | Atmospheric document photography; weathered paper; redacted images with texture | Strongest aesthetic; use `--style raw --stylize 100` to ground it; supports `--no` for negatives |
| **DALL-E 3 / GPT-Image-1** | Quick iteration; readable prompts | Sometimes adds unwanted polish or flourishes; add "no embellishment" to prompt |
| **Flux (Pro / Dev)** | Photorealistic redacted images; document scans | Strong prompt following; via Replicate, fal.ai, or Black Forest Labs |
| **Ideogram** | Documents with legible text; classification stamps; poster typography | Best in class for text-in-image |
| **Stable Diffusion XL / SD3** | Local generation; custom LoRAs for paper texture | Most flexible if you have local setup |
| **Adobe Photoshop / Generative Fill** | Compositing redactions, adding document furniture, aging | Useful post-step regardless of which generator you start with |

**Default recommendation**: Midjourney for the base image, then Photoshop (or any editor) to add precise redaction bars, classification stamps, page numbers, and document furniture. Ideogram for anything requiring legible text.

---

## General prompt structure

Most assets share a base prompt structure:

> *[Subject], partially censored declassified document aesthetic, recovered archival photography, warm cream paper background, hard black redaction bars covering most of the content, weathered paper texture, faded oxblood-red rubber-stamp marks, monospace typography for any visible text, austere editorial composition, minimal embellishment.*
>
> *Color palette: warm cream paper, hard black redactions, single accent of deep oxblood-red.*
>
> *No people, no faces (or faces fully redacted), no neon, no glow, no cyberpunk styling, no lens flare, no drama, no vivid colors, no ornament. Square 1:1 (or specified ratio).*

Customize the `[Subject]` per asset. Adjust aspect ratio per use case.

---

## Per-asset prompts

Each section below names the asset, the story or use case, the recommended filename, and the prompt. Filenames matter — they integrate with the existing MDX structure.

### A1. Site favicon / OpenGraph card

**Filename**: `public/images/og-card.png` (1200×630) plus `public/images/favicon.png` (square crop)
**Used in**: HTML head meta tags, social card, eventual favicon replacement
**Currently**: placeholder black-square favicon in BaseLayout.astro

> A weathered cream-colored document page, photographed flat on a slightly darker background. The page is heavily redacted: thick black censor bars in irregular widths cover most of the text. Near the top, in clean IBM Plex Mono type, the title **BOUND** is visible above one fully-redacted line. A deep oxblood-red rubber-stamp mark reads **CONTAINMENT // §7.2(c)** near the corner, slightly crooked, faded. Subtle paper texture, a few aged folds, no embellishment. Minimalist editorial design, declassified FOIA document aesthetic, archival photography. Austere typographic composition. Square 1:1.
>
> Color palette: warm cream paper, hard black redactions, single accent of deep red. No people, no faces, no neon, no glow, no cyberpunk styling, no thriller-poster drama.

**Midjourney**: append `--ar 1:1 --style raw --stylize 100 --no people, faces, neon, glow, gore, cyberpunk, dystopian, lens flare, drama, vivid colors, ornate`

**For 1200×630 OG card variant**: change "Square 1:1" to "wide landscape composition" and use `--ar 1200:630` or `--ar 2:1`.

---

### A2. Triune-Stimulus-1 declassified rendering

**Filename**: `public/images/triune-stimulus-1-declassified.png`
**Used in**: FILE 004 (The Memo) or FILE 005 (Black Bloom)
**Caption pattern**: *FIG 1. Image component, Triune-Stimulus-1. Declassified rendering, redacted under §7.2(b).*

> A square image where most of the frame is filled with overlapping black redaction bars in varying widths and positions, like a heavily censored photograph mounted in a document. In one small unredacted patch in the lower third, a fragment of intricate organic texture is visible — like part of a leaf vein, a fingerprint whorl, or a magnified mineral crystal, dense and slightly unsettling but abstract. Cream paper border framing the entire image with thin black hairline rule. A deep oxblood-red stamp reads **CONTAINMENT** in the upper-right corner, slightly skewed and faded. Below the image, monospace caption text reading "FIG 1." Declassified document aesthetic, archival reproduction. Square 1:1.
>
> No people, no faces, no neon, no glow, no actual disturbing imagery — the visible fragment should feel mysterious, not gross.

**Midjourney**: `--ar 4:5 --style raw --stylize 75 --no faces, gore, body horror, neon, glow, drama`

**Critical**: the visible fragment of pattern should NOT be a strobing or aggressive optical illusion. It should look like a fragment of organic texture — interesting, slightly uncanny, but not visually overwhelming.

---

### A3. Memo document scan (FILE 004)

**Filename**: `public/images/memo-2067-page1.png`
**Used in**: FILE 004 (The Memo)
**Caption pattern**: *Office of Cognitive Rehabilitation. Internal memo, classified at issue. Declassified in part 2089.*

> A photograph of a single page of an internal government memorandum, photographed flat on a slightly darker desk surface. The top of the page bears a formal letterhead reading "OFFICE OF COGNITIVE REHABILITATION" in monospace serif type, with a smaller subheader "INTERNAL MEMORANDUM — CLASSIFIED AT ISSUE." A page number "1 of 3" appears top-right. The body of the memo is mostly redacted: long thick black bars cover entire paragraphs, with only structural words visible between them ("hereafter," "the subject pattern," "see attached"). At the bottom, four signature lines are visible — names blacked out but the line structure intact. A deep oxblood-red rubber-stamp mark across the upper portion reads "DECLASSIFIED IN PART // 2089." The paper is slightly yellowed, edges weathered, a single faded coffee ring in one corner. Document photography aesthetic, archival reproduction, no embellishment. Portrait orientation 3:4.
>
> No people, no faces, no neon, no glow, no drama, no vivid colors.

**Midjourney**: `--ar 3:4 --style raw --stylize 50 --no people, faces, neon, glow, drama, modern UI`

**Ideogram alternative**: useful here because the letterhead text needs to be legible. Use Ideogram's text-in-image strength for the header, then composite redactions in Photoshop.

---

### A4. Anonymized patient photo (FILE 007)

**Filename**: `public/images/patient-anonymized.png`
**Used in**: FILE 007 (Bound)
**Caption pattern**: *Patient photo, anonymized. Bound-care clinic logs, redacted.*

> A clinical hospital room photographed in soft natural light. A figure lies in a hospital bed, fully covered to the chest by a thin white sheet. The figure's face is obscured by a large hard black redaction bar that runs horizontally across the head area — clearly a post-hoc redaction, not a covering on the patient. The room around the patient is visible: a window with thin curtains, a side table with a glass of water, a chair, a monitor (turned off or showing flat lines), pale walls. Quiet, melancholy, no medical drama. Faded paper-border framing the image as if it's been mounted in a clinical case file. A small monospace label in the lower corner reads "CASE FILE — ANONYMIZED." Archival photography, soft documentary lighting, restrained composition. 4:5 portrait.
>
> No emotional drama. No bright colors. No medical equipment beeping or flashing. No identifying features visible. The mood is quiet stillness, not horror.

**Midjourney**: `--ar 4:5 --style raw --stylize 75 --no drama, neon, vivid, faces, identifying features, medical horror, blood, gore`

**Flux**: photorealistic option; particularly good if you want the room to feel real and lived-in.

---

### A5. The Boy's drawing (FILE 008)

**Filename**: `public/images/the-boys-drawing.png`
**Used in**: FILE 008 (The Boy Who Hummed)
**Caption pattern**: *Subject's drawing, submitted with interview. The melody he could not name.*

> A child's drawing in colored pencil on cream notebook paper. The drawing depicts a swirling, dreamlike shape — possibly a melody-as-image, or a face seen in clouds, or a tangle of lines and shapes. The center of the drawing is heavily redacted: a thick black rectangular bar covers about 40% of the composition, clearly added later. Visible around the redaction are simpler child's-art elements: a sun in the corner, lines suggesting wind or sound, a small figure standing at the edge. The paper has the visible holes of a three-ring binder along one edge. A small adult's handwriting in the margin reads "submitted 2080-03-22, A.R." (Amrit Ranjit's initials). Archival photography, document-scan aesthetic, soft colors. Square 1:1.
>
> The drawing should look genuinely like a child made it — slightly clumsy, slightly heartbreaking. Not stylized or polished. The redacted central element should feel like the part the adults didn't want to keep.

**Midjourney**: `--ar 1:1 --style raw --stylize 75 --no polished, stylized, professional art, neon`

**DALL-E 3**: actually better for this one — DALL-E captures the "child's drawing" aesthetic more naturally.

---

### A6. Public-service poster (atmospheric, any story)

**Filename**: `public/images/safety-poster-2076.png`
**Used in**: Optional ambient placement; could appear in FILE 008 or FILE 006 as period texture
**Caption pattern**: *Public safety notice, 2076 edition. Department of Perceptual Health.*

> A vintage public-service poster, photographed against a brick wall or pinned to a community bulletin board. Designed in austere mid-century institutional style: cream background, hard black typography, a single oxblood-red accent. Large monospace headline at top reads "**KEEP IT FLAT**" or "**SAFE TO VIEW?**" or "**ONE SENSE IS A WARNING**". Below the headline, a simple iconographic illustration — but the illustration is heavily redacted with a thick black bar, leaving only the periphery visible (silhouettes of a hand, an eye, an ear). Smaller body text below the icon reads in monospace: "Department of Perceptual Health. Public Notice 2076-04." The poster shows age — slight crinkles, a torn corner, fading at edges. Archival photography, public-information-poster aesthetic. Portrait 3:4.
>
> No modern marketing design. No bright colors. No people fully shown. Restrained mid-century governmental information design.

**Midjourney**: `--ar 3:4 --style raw --stylize 50 --no modern, glossy, vibrant, neon, ornate`

**Ideogram**: strongly recommended — the headline text needs to be legible and on-brand.

---

### A7. Olesen's recovered document (FILE 011 or 012)

**Filename**: `public/images/olesen-estate-document.png`
**Used in**: FILE 011 (The Document — but rendered before the blackout as the artifact Marina is about to read) or FILE 012 (The Designer)
**Caption pattern**: *Document recovered from K. Olesen estate. Personal annotation visible.*

> A photograph of an aged document page resting on a wooden desk, photographed from above in soft natural light. The page bears the same letterhead style as A3 ("OFFICE OF COGNITIVE REHABILITATION") but is older — yellowed paper, edges browning, a small tear at the corner. The body text is mostly visible (in monospace serif) but heavily redacted with thick black bars covering perhaps 70% of each paragraph. In the right margin, *handwritten in faded blue ink* in a slanted personal cursive, are annotations — circled phrases, question marks, one underlined word, a small note that reads "see Voss." A signature at the bottom, "K. Olesen," is visible and not redacted; three other signature lines below are blacked out. A deep oxblood-red stamp on the upper-right reads "PERSONAL COPY — DO NOT CIRCULATE." Document photography, archival aesthetic, period feeling. Portrait 3:4.

**Midjourney**: `--ar 3:4 --style raw --stylize 50 --no people, modern, glossy, neon`

**Critical detail**: the handwritten annotations distinguish this from A3 (the official memo). This is Olesen's personal copy with his thinking visible in the margins. The note "see Voss" is the Vellum-thread Easter egg.

---

### A8. Cover image / hero card for the index (optional)

**Filename**: `public/images/archive-cover.png`
**Used in**: Could be displayed at the top of the index page if you decide to add a hero
**Currently**: index page is text-only

> A wide horizontal composition: a row of file folders viewed edge-on as if in an archive drawer. The folders are cream and tan, slightly weathered. A few have classification stamps visible on their tabs. One folder near the center is pulled slightly forward, slightly open. A faint monospace label is visible on its tab: "BOUND." Soft natural light from a single source on the left. Archival photography, slightly out of focus on the periphery to draw the eye to the central folder. No human hands in frame. Wide aspect ratio 16:9 or 2:1.

**Midjourney**: `--ar 16:9 --style raw --stylize 75 --no people, hands, faces, drama, vivid colors`

**Use case**: if you want to add an inline image to the index between the title and the file listing. Currently the design is text-only and works that way. Adding a hero would change the aesthetic — only do this if you're sure.

---

## Post-processing tips

Most generated images will need a second pass in Photoshop, GIMP, or another editor:

### Adding precise redaction bars
- Pure black rectangles (`#000000`)
- Slight rounded corners (1–2 px radius) for that "official document" feel
- Vary widths within the same image — uniform redactions look fake
- Add subtle imperfection: 1–2 pixel jitter on edges; occasional faint paper texture peeking through

### Adding classification stamps
- Use a "stamp" texture overlay (heavy ink, slight rotation, occasional ink bleed)
- Color: `#7a1818` (matches site palette)
- Common stamps: `CLASSIFIED`, `DECLASSIFIED IN PART`, `CONTAINMENT`, `WITHHELD`, `PERSONAL COPY`, `DO NOT CIRCULATE`
- Always slightly rotated (3–8°) and slightly faded

### Adding document furniture
- Page numbers (e.g., "Page 1 of 3") in upper or lower corner, monospace
- File/case numbers (e.g., "2067-OCR-441") top corner, monospace
- Date stamps (e.g., "Issued: 2067-09-14")
- Signature lines (horizontal lines with redaction bars over the actual signatures)

### Aging / weathering
- Slight paper texture overlay (cream paper, off-white grain)
- Slight desaturation
- Minor color shift toward warm yellow
- Occasional faded coffee rings, fingerprints, edge wear
- Subtle vignetting

### Color matching to site
- After generating, adjust the image's background tone to match `#f5f1e8` (cream)
- Photoshop: Color Balance / Selective Color, push midtones toward warm
- Or use the site's CSS to overlay a translucent cream on the image

---

## Filename & integration conventions

- All images in `public/images/`
- PNG for documents/diagrams; JPG only for very large photographic backgrounds
- Naming: kebab-case, descriptive: `triune-stimulus-1-declassified.png`, not `IMG_4582.png`
- Reference from MDX:
  ```mdx
  import Figure from '../../components/Figure.astro';
  
  <Figure
    src="/images/triune-stimulus-1-declassified.png"
    alt="Heavily redacted image with a fragment of organic texture visible in the lower third."
    caption="FIG 1. Image component, Triune-Stimulus-1. Declassified rendering, redacted under §7.2(b)."
  />
  ```
- Always provide a descriptive `alt` for accessibility — describe what the image *shows*, not what's *redacted*

---

## Quality checks before committing an image

For each generated image, check:

- [ ] Does it look like a recovered document, not a polished design?
- [ ] Are redactions visible from the start (no reveal)?
- [ ] Does any visible content avoid being genuinely disturbing?
- [ ] Does it match the site's cream/black/oxblood palette?
- [ ] Are there no neon, gradient, or modern UI elements?
- [ ] Are people/faces absent or fully redacted?
- [ ] Does the file size make sense for web (target <300KB after PNG optimization)?
- [ ] Is the filename descriptive and kebab-case?
- [ ] Have you written the alt text?

If all checks pass, the image is ready to drop into `public/images/` and reference in the story.

---

## Priorities (what to generate first)

In order of importance for the project:

1. **A1** — Site favicon / OG card. Improves first impression. Used immediately.
2. **A2** — Triune-Stimulus-1 declassified. The book's iconic visual; used in FILE 005 (Black Bloom) or FILE 004 (The Memo).
3. **A3** — Memo document scan. Anchors FILE 004.
4. **A4** — Anonymized patient photo. Anchors FILE 007 (Bound) emotionally.
5. **A7** — Olesen's recovered document. Anchors FILE 011 setup before the blackout.
6. **A5** — The Boy's drawing. Anchors FILE 008.
7. **A6** — Public-service poster. Atmospheric; can wait.
8. **A8** — Archive cover. Optional; only if you want a hero image.

If you only generate three, generate **A1, A2, and A4** — those carry the most weight per asset.

---

## A note on iteration

AI image generation is iterative. Expect 5–15 attempts per asset before you get one that feels right. The right one will feel *quiet* — not flashy, not dramatic, not polished. It will look like something that was actually in a file cabinet.

If your generations keep coming out too polished or too dramatic, try:
- Lowering Midjourney's `--stylize` to 25 or 50
- Adding "no embellishment, no flourishes, no drama" to the prompt
- Adding "amateur snapshot quality, casual archival photography"
- Asking for "scanned from a paper original" or "photographed flat under fluorescent light"
