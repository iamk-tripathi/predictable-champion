# AI × UX — Business Case
### Slide-by-slide structure for a senior leadership presentation

> **Audience:** Senior leadership (non-technical to semi-technical).
> **Goal:** Show the journey from "AI as a novelty" → "AI as a governed, context-driven design production system," with measurable outcomes and a clear cost/scale story.
> **Narrative arc:** Two directions → where AI helps → the wall we hit (Figma Make) → the insight (context) → what we built (contextual DS) → what it unlocked (App→Web, intelligent QA) → how we make it cheap and scalable (O(n²)→O(n)).
> **Suggested length:** ~14 content slides + appendix. ~15–18 min talk.

Each slide below has: **Headline** (the one line on screen), **Talking points** (what you say), **Speaker notes / proof** (grounded in real work), and **Visual** (what to show).

---

## Slide 1 — Title

**Headline:** AI × UX — From Experiment to Production System

- Subtitle: *How we turned AI from an unpredictable novelty into a governed, design-system-aware production capability.*
- Presenter name, team, date.

**Visual:** Clean title slide. Optional: a single "before → after" strip (a messy AI-generated screen next to a design-system-perfect one) as a teaser.

---

## Slide 2 — Executive Summary (the "so what" first)

**Headline:** Three outcomes leadership should remember

- **Quality is now enforceable.** AI checks designs against our design system and suggests the *correct* component — reusing tooling we already pay for.
- **Speed at scale.** Manual App→Web conversion (incl. review) is **~70% faster**, with **100% design-system fidelity** on the validated pilot.
- **It's getting cheaper, on purpose.** We re-architected how AI consumes context from **O(n²) → O(n)** — so cost scales sub-linearly as we add components and screens.

**Speaker notes:** Lead with results; the rest of the deck explains *how* we got here. These are the three things to repeat.

**Visual:** Three big stat tiles: `~70% faster` · `>85% → ~100% component fidelity` · `O(n²) → O(n) context cost`.

---

## Slide 3 — Two Directions: *For AI* vs *With AI*

**Headline:** We pursued two complementary tracks

- **With AI** — using AI *today* as an automation + brainstorming assistant on existing craft (research, patterns, tests, QA).
- **For AI** — building the *infrastructure and context* that lets AI produce trustworthy, on-system output tomorrow (the contextual design system + MCP pipelines).
- The payoff compounds when they meet: the more context we build **for** AI, the more valuable working **with** AI becomes.

**Speaker notes:** This framing sets up everything. "With AI" is quick wins; "For AI" is the durable moat.

**Visual:** Two-column split; a converging arrow at the bottom showing them meeting.

---

## Slide 4 — Where AI Adds Value: Automation + Brainstorming

**Headline:** Five areas we targeted

- **Quality check** — sanity/compliance of designs against the design system *(the one non-prompt, systematized area — see later)*.
- **Localised research** — faster synthesis for specific markets/contexts.
- **Identifying better UI patterns** — surfacing stronger interaction options.
- **Creating user tests & simulating them** — drafting tests and running simulated participants.
- Everything except Quality Check started **text-based and prompt-driven** — useful, but ad hoc.

**Speaker notes:** Honest framing: most of this was prompting. The breakthrough was turning *one* of these (quality) into a repeatable system — the template for the rest.

**Visual:** 5 icons in a row; highlight "Quality check" as the one that graduated from prompt → system.

---

## Slide 5 — The Figma Make Moment

**Headline:** A big new tool arrived — and under-delivered

- Figma Make promised end-to-end generation; **results were unsatisfactory** for real product work.
- Output ignored our components, tokens, and layout rules — visually plausible, but not *ours* and not production-usable.
- We didn't dismiss it — we **decoded why** it failed.

**Speaker notes:** Have ONE concrete before-example ready (a Figma Make screen that violates the DS). This is the emotional turn of the talk.

**Visual:** Screenshot of an unsatisfactory Figma Make output, annotated with red callouts (wrong colors, off-grid, non-DS components).

---

## Slide 6 — The Insight: Context Was the Missing Link

**Headline:** The gap wasn't the model — it was the *context*

- Generic AI has no knowledge of *our* design system: components, tokens, spacing rules, patterns.
- Without that context it invents — every time, unpredictably.
- **Fix the context, and you fix the output.** This reframed the whole program from "better prompts" to "better context."

**Speaker notes:** This is the thesis of the entire deck. Say it plainly: *"Context between AI and our design system was the missing link."*

**Visual:** Simple diagram — `AI  ── ??? ──  Design System`, with "CONTEXT" filling the gap.

---

## Slide 7 — Leveraging MCP (the plumbing that made context possible)

**Headline:** MCP = the connective tissue between AI and our tools

- MCP (Model Context Protocol) lets AI read/write *live* from the tools we already use.
- **VS Code × GitHub Copilot** became the workbench; we wired **Figma MCP** (design) and **Storybook MCP** (code) side by side.
- This turns AI from a blind text generator into an agent that can *see* the real design system and *act* in Figma.

**Speaker notes:** Keep it non-technical: "MCP is how AI plugs into Figma and our codebase directly, instead of guessing."

**Visual:** Pipes diagram — VS Code + Copilot in the middle; Figma MCP and Storybook MCP feeding in; Design System as the shared source of truth.

---

## Slide 8 — Building a Contextual Design System (the moat)

**Headline:** E1 / Nexus — one synced source of truth across code and design

- Matched **Storybook (code)** with the **Figma Design System** so both sides agree on tokens, components, and behavior.
- Built a **pipeline between Storybook and the Figma DS** — generating component designs in Figma directly from live code.
- Continuous **token audits** catch drift between code and design before it ships.

**Speaker notes:** This is the "For AI" investment paying off. The DS is now machine-readable *and* trustworthy.

**Visual:** Pipeline: `Storybook / code tokens → MCP → Figma components + variables`, with a "token sync audit" loop underneath.

---

## Slide 9 — Result: On-System Generation, Measurable Fidelity

**Headline:** From "looks about right" to *provably* on-system

- Started generating component designs in Figma at **>85% accuracy**.
- On a fully-instrumented build (the **Chip** component), reached **100% variable-binding coverage — 285/285 bindable properties bound**, 15 variants, generated components with full docs.
- Every run emits a **coverage %** + a discrepancy log — so quality is *measured*, not eyeballed.

**Speaker notes:** The jump from 85% → provable 100% binding is the credibility moment. It shows the system is auditable.

**Visual:** The generated Chip component set in Figma + the "100% of bindable properties bound" hero pill and discrepancy log.

---

## Slide 10 — What It Unlocked #1: Scaling App → Web

**Headline:** Turning app screens into web, intelligently — ~70% faster

- Scaled **app screens (375, 4-col)** into **web screens (1440, 12-col)** *directly in Figma*, using **only** DS components, variables, and tokens.
- Not a dumb stretch — screens are **re-composed** for web (bottom nav → top/side nav, stacked groups → column-spanning rows) on a deterministic 12-col grid.
- Pilot (WU "Get Card"): **100% design-system coverage**, validated end-to-end.
- **~70% reduction** in time-to-convert for this manual task — *including manual review*.

**Speaker notes:** This is the headline business win. Emphasize "including review" — the savings survive human QA because the output is already on-system.

**Visual:** Side-by-side: mobile source screen → generated 1440 web screen; a "70% faster · 100% DS coverage" badge.

---

## Slide 11 — What It Unlocked #2: Intelligent Quality Check

**Headline:** AI that finds DS violations *and* names the right fix

- **Flags** every non-DS layer on a page — "this is not a DS component," "this is not a variable/token."
- **Suggests** the correct DS component to use instead — one precise recommendation per flagged layer.
- **Suggestion, never auto-replace** — designers stay in control; a feedback loop turns corrections into learned "overrides."
- Runs on **Figma AI we already pay for** — new capability, no new license cost.

**Speaker notes:** Two wins for leadership: (1) governance/consistency at scale, (2) zero incremental tooling spend. The "already paid for" line matters.

**Visual:** A Figma page with red annotations on non-DS layers + green "Suggested DS component: …" callouts.

---

## Slide 12 — Closing the Loop: QA Learnings → Better New Designs

**Headline:** The system that *audits* designs also *builds* them better

- The component index + QA context (what's compliant, which component fits where) now feeds a **screen builder** that composes new designs from real DS parts.
- Same context, two jobs: catch mistakes *and* prevent them at generation time.
- **Direct comparison:** generic Figma Make output vs. our context-driven system — same brief, very different fidelity.

**Speaker notes:** This is the "flywheel" slide. End on the comparison — it visually proves the thesis from Slide 6.

**Visual:** Split screen — *Figma Make (generic)* vs *Our system (context-aware)* for the same prompt. Let the difference speak.

---

## Slide 13 — Optimizing Cost & Token Usage

**Headline:** Making it cheap on purpose — O(n²) → O(n)

- Today AI is in an **exploration phase**: teams burn tokens freely because they're cheap.
- That won't last — **tokens are becoming the currency**, and a costly one. Optimization is a competitive advantage, not an afterthought.
- Naive approach re-sends the *entire* design system as context for every component/screen → cost grows like **O(n²)**.
- Our fix: a **lean, pre-built context index** (~10 KB per library) + Code Connect means each task loads **only what it needs** → **O(n)**.
- Net: cost scales roughly **linearly** as we add components and screens, instead of exploding.

**Speaker notes:** Keep the math intuitive: "Old way = everyone re-reads the whole encyclopedia every time. New way = a table of contents that points to the one page you need."

**Visual:** One chart — two curves, `O(n²)` (steep) vs `O(n)` (flat-ish) — x-axis "components/screens," y-axis "token cost." This is the single most important visual in the deck; make it big.

---

## Slide 14 — Where This Is Going / The Ask

**Headline:** Next: production-ready frontends via Code Connect

- **Now in progress:** generating *production-ready full frontend designs* using Storybook + Figma MCP through Figma's **Code Connect** — the deepest context link yet (design ↔ real code components).
- Trajectory: component generation → full screens → App→Web at scale → production-ready UI.
- **The ask — three things:**
  1. **Executive sponsorship** to roll intelligent DS quality-check out **org-wide** (consistency at scale, on tooling we already pay for).
  2. **A pilot team + scope** to productionize the **App→Web pipeline** on a real backlog (bank the ~70% saving on live work).
  3. **Budget / dedicated time** to harden the pipeline through **Code Connect → production-ready UI** and to fund the context-optimization (O(n²)→O(n)) work.

**Speaker notes:** Close by connecting back to the three exec-summary outcomes — each ask maps to one (QA→sponsorship, speed→pilot, cost→budget). Make each ask concrete and small enough to say yes to.

**Visual:** A simple maturity ladder: *Components → Screens → App→Web → Production UI*, with today's position marked.

---

## Appendix (optional — for Q&A / technical stakeholders)

**A1 — Toolchain:** VS Code + GitHub Copilot · Figma MCP · Storybook MCP · Figma Code Connect · Figma AI.

**A2 — Design-system proof points:**
- E1/Nexus DS: tokens (reference/system/component tiers), contracts, web + native implementations, Storybook docs.
- Chip build: 100% binding (285/285), 15 variants, auto-generated documentation + discrepancy log.
- App→Web grid math: 1440 / 12-col / 204 margin / 24 gutter, deterministic column spans.

**A3 — Governance model (Intelligent QA):**
- Three roles: *Flagging* (any designer) → *Suggestion* (opt-in) → *Index Builder* (admin, single source of the index).
- Corrections captured as admin-curated "overrides" — the system improves over time.

**A4 — Risks & honesty:**
- Web component implementations still lag app in places (DS Figma is source of truth when code is missing).
- Some Figma API limits (a few properties can't bind to variables) — documented, not hidden.
- Skills are living documents; hardened after each run.

---

### How to use this document
- This is the **content spine**, not final slides. Drop each `Slide N` block onto one slide.
- Keep on-screen text to the **Headline + 3–4 bullets**; move the rest to speaker notes.
- The two must-have visuals: **Slide 12** (Figma Make vs our system) and **Slide 13** (O(n²)→O(n) curve).
- Replace the bracketed ask on Slide 14 with the specific decision you want from leadership.
