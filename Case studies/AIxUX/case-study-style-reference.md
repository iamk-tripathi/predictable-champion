# Case-study look & feel — extracted from jesseddy.com/work

> Source: https://jesseddy.com/work (built in Framer). Captured 2026‑07‑27 via live computed styles + screenshots.
> Purpose: the visual system to rebuild the **AIxUX portfolio case study** in. Editorial, warm, quiet, big type, monospace meta, one gold accent.

---

## 1 · Palette

| Role | Value | Notes |
|---|---|---|
| **Paper / background** | `#FFFAF4` | warm cream — the whole canvas |
| **Ink (headings)** | `#333333` | H1–H4 |
| **Body text** | `#383838` | paragraphs |
| **Strong / name** | `#242424` | name lockup, emphasis |
| **Muted** | `#686868` | captions, secondary meta |
| **Gold accent** | `#E8B000` | logo mark, ✱ asterisk, clock dot, hand emoji |
| **Soft gold tints** | `#FFE29A` · `#FFE6C3` · `#FFEED9` | highlight beds / hover washes |
| **Card surface** | `#FFFFFF` | image mockups |
| **Image bed / hairline** | `#E8E8ED` / `~#DDD8CE` | gallery backgrounds, rules |
| **Button outline + text** | `#333333` | pill buttons |

> For a **Western Union** portfolio piece, swap the gold `#E8B000` → **WU yellow `#FFDD00`** on the same cream + charcoal base. The two are close; WU yellow is brighter and on‑brand. Keep everything else.

---

## 2 · Type

**Two families + a mono, one accent.**

- **Display / headings — Suisse Int'l Semi Bold (600)**
  - H1 (page title): **64px** / line‑height 1.2 / letter‑spacing **−0.03em** (`−1.92px`)
  - H2 (project & section titles): **38px** / lh 1.15 / **−0.03em**
  - H3–H4 (labels, links, subheads): **16px** / lh 1.35 / −0.03em
  - Name lockup: **28px** / −0.03em
- **Body — Suisse Int'l Regular (400)**: **16px** / line‑height **1.55** (`24.8px`) / color `#383838`
- **Lead‑ins** (`Problem.` `Approach.` `Outcome.`): **Inter Bold (700)**, inline, same 16px — a subtle family shift for emphasis
- **Meta / labels** (live clock, years, tags): **Azeret Mono** (monospace), ~14–16px, often paired with a gold dot
- **Playful accent** (occasional): *Edu QLD Hand* (handwritten) for a note

**Font stacks (drop‑in)**
```css
--font-display: "Suisse Int'l", "Inter Tight", Inter, system-ui, sans-serif; /* SemiBold 600 */
--font-body:    "Suisse Int'l", Inter, system-ui, sans-serif;               /* Regular 400 */
--font-mono:    "Azeret Mono", ui-monospace, "SF Mono", monospace;
```
> Suisse Int'l is commercial (Swiss Typefaces). Free look‑alikes for a rebuild: **Inter Tight / General Sans / Geist**. **Azeret Mono** and **Inter** are free (Google Fonts).

---

## 3 · Layout & spacing

- **Single column, left‑aligned, editorial.** Warm‑cream full‑bleed background.
- **Container:** max‑width ~**1120px**, centered; side padding `clamp(24px, 5vw, 80px)`. (Content measured ~1014px wide in a 1110px window.)
- **Vertical rhythm (generous):** between projects **~120–160px**; between blocks within a project **~32–48px**; paragraph gap **~20–24px**.
- **Hairline rules:** full‑width **1px** warm‑gray (`~#DDD8CE`) separating major sections.
- Motion is quiet: subtle fade/slide on scroll; nothing flashy.

---

## 4 · Components & patterns

1. **Top header** — left: gold **star** mark + `Jess Eddy` (28px display). Right: two‑line tagline (16px body) + **live monospace clock** with a gold dot (`● Mon 2:57 PM India`).
2. **Nav row** — bold display links inline (`Home · About · Work · Vibe Coding · AI Practices · Articles`); a **👋 emoji marks the active page**.
3. **Page title** — huge `Selected Work` (64px) + a **full‑width hairline rule** beneath.
4. **Project record** *(the core repeatable unit — reuse per chapter):*
   - **Category** (H2) · **year** in mono · **one‑line summary** — the top “highlights” list.
   - **Detail block:** project **subtitle** (H2) → **intro paragraph** → **gold ✱ asterisk note** (one‑liner, e.g. tools) → **`Problem.` / `Approach.` / `Outcome.`** paragraphs (Inter‑bold lead‑in + Suisse body) → **pill button** → **✋ “Grab and drag…” label** → **horizontal draggable image gallery** (browser‑chrome mockups on white/gray cards).
   - Optional **testimonial**: large **H3 quote** + `— Name, Role`.
5. **Pill button** — transparent fill, **~1.5px `#333` outline, fully rounded** (`border-radius: 999px`), padding ~`16px 28px`, display 16px, trailing **↗** icon. Hover: invert to solid charcoal.
6. **Footer** — simple text link list (repeats nav).

**Signature motifs — keep these, they *are* the brand:**
- Gold **star / spark** logo + gold **✱ asterisk** bullet.
- **Monospace meta** (clock, years, tags) against the grotesk body — the editorial contrast.
- **Emoji accents** (👋 nav, ✋ drag).
- **Draggable image galleries** with a visible “grab and drag” affordance.
- Warm, quiet, lots of air; oversized type; understated confidence.

---

## 5 · Applying it to the AI case study

- **Map each chapter to a “project record”:** Context Pipeline · Nexus components · Rubix QA · App→Web · Cost. Each gets subtitle → intro → ✱ note → **Problem / Approach / Outcome** → pill button (`View in Figma ↗`) → drag‑gallery of screenshots.
- **Use mono for the meta/kickers & metrics:** `01 · CONTEXT`, `285 / 285`, `~70%`, `O(n²)→O(n)`.
- **Keep the manifesto** as a large centered statement at `Selected Work` scale.
- **Accent = WU yellow `#FFDD00`** on cream + charcoal (brand fit), or keep jesseddy’s deep gold `#E8B000` for a purer editorial feel.
- **Reuse across formats:** this same system is what the leadership deck already leans on (charcoal + yellow), so the case study and deck will feel like one family.

### Build options (pick when ready)
- **A — React component** in the portfolio (like `MetroPlusCaseStudy.jsx`) using these tokens.
- **B — Framer page** (matches the source tech exactly).
- **C — standalone styled HTML/MD** for quick sharing.

---

### Raw captured values (reference)
- Background `rgb(255,250,244)` · headings `rgb(51,51,51)` · body `rgb(56,56,56)` · name `rgb(36,36,36)` · muted `rgb(104,104,104)` · gold `rgb(232,176,0)` · soft golds `rgb(255,226,154)` / `rgb(255,230,195)` / `rgb(255,238,217)`.
- H1 64px/76.8/−1.92 · H2 38px/43.7/−1.14 · H3‑4 16px/21.6/−0.48 · body 16px/24.8 Suisse Regular · lead‑in Inter 700.
- Fonts in use: *Suisse Int'l Semi Bold*, *Suisse Int'l Regular*, *Inter*, *Azeret Mono*, *Edu QLD Hand*.
