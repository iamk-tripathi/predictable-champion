# Teaching AI to Speak Design System

**A public-facing case study on how I turned generative AI from a promising experiment into a governed, design-system-aware production capability.**

> The breakthrough was not better prompts. It was better context: a design system that could speak clearly to AI, and an operating layer that let AI generate, validate, and scale UI in ways that were measurable, trustworthy, and useful.

---

## Executive Summary

Generative AI is easy to admire and difficult to trust in product work. The moment it is asked to create something real — something that must fit a brand, a system, and a production standard — it begins to fail. That failure is rarely about intelligence. It is about context.

I set out to solve that problem by building the missing layer between AI and the design system. The result was not just a better prompt workflow, but a repeatable system for making AI generate on-system UI, flag violations, support App→Web scaling, and do so with a cost model that remains viable as the work grows. What began as an experiment in AI-assisted design became a practical foundation for a more scalable, more governable design practice.

**In short:** I helped turn AI from a novelty into an operational design tool — one that could work with our system instead of against it.

---

## At a glance

| | |
|---|---|
| **Role** | Interaction Designer, Western Union — solo initiative, partnering with the Design System + Engineering teams |
| **Timeline** | ~2026 · [X months] *(confirm)* |
| **Scope** | Design systems · AI tooling · design-to-code · workflow & process |
| **Tools** | Figma (MCP · Code Connect · Figma AI) · VS Code + GitHub Copilot · Storybook · Claude · TypeScript / React |
| **The hook** | **Quality becomes enforceable at scale** · **App→Web conversion ~70% faster** · **Context cost re-architected O(n²) → O(n)** |

---

## A sharper read

The problem was never that AI was incapable. It was that it had no reliable access to the rules that make a design system real. It could generate something that looked plausible, but not something that was truly ours.

So I built the missing layer: the context that teaches AI what our design system is, how it behaves, and what quality looks like. I proved the approach in a Material 3 sandbox, then applied it to our real design system (E1 / Nexus) to enable on-system generation, intelligent quality checks, an App→Web scaling workflow, and a cost model that remains viable as the work scales. The through-line is simple: **context is the interface.**

---

## 1 · The Challenge

### Every team has a design system. Almost no AI tool uses it.

AI was rapidly becoming part of everyday product work. Teams used it to draft flows, explore patterns, and generate rough UI. But the output rarely felt like *our* product: wrong tokens, off-system spacing, non-DS components, and layouts that ignored the rules we had already defined.

When Figma Make arrived, it felt like a major leap forward in prompt-to-design. The results were compelling at first glance, but for real product work they were still not good enough. They were not ours, and they were not production-ready.

> **The problem was not that AI lacked capability. It lacked context.**

### Why it mattered

- **Design decisions were getting lost in handoff.** The logic behind our tokens, components, and layout rules never reached the tools generating UI.
- **Consistency was fragile at scale.** Every generation started from zero and reinvented the system slightly differently.
- **Cost was becoming a real constraint.** Teams could burn tokens freely in the early phase, but that would not scale as AI use grew.

### Constraints I set

- **No new licenses.** I worked with tools that the organization already had access to: Figma, Figma AI, GitHub Copilot, Storybook.
- **No production risk.** I proved the approach in a sandbox before touching the real design system or product code.
- **Design-system-only output.** The goal was not “nice-looking UI.” The goal was measurable, on-system output.

> 🎞 **Visual:** A side-by-side comparison of a generic AI-generated screen and the same experience built on-system. This is the emotional hook for the story.

---

## 2 · The Reframe

### AI does not fail because it is bad at design. It fails because it has not been given the right design context.

That insight changed the work. Instead of asking, “How do we write better prompts?” I asked a more useful question: **“What does AI need from design to be useful?”**

That led to two complementary directions:

| Direction | Meaning | Payoff |
|---|---|---|
| **With AI** | Use AI today as an automation + brainstorming assistant for research, UI patterns, user-test drafting, and QA. | Fast wins on real work. |
| **For AI** | Build the infrastructure and context that allows AI to generate trustworthy, on-system output. | A durable capability that compounds. |

The two reinforce each other. The more context I built for AI, the more valuable working with AI became.

> 🎞 **Visual:** A recurring diagram: `AI ── [ context ] ── Design System`.

### This has a name now: the agentic design system

The field has started calling this an **agentic design system**: a design system that does more than document rules for people. It exposes those rules as machine-readable context and gives AI agents the ability to generate, evaluate, and govern UI. That is the space I helped build.

| Agentic-DS capability *(industry term)* | What I built |
|---|---|
| **AI-ready component library** | E1 / Nexus contextual DS, machine-readable component index, and the 2,129-line Material 3 variant map |
| **MCP / context layer** | Figma MCP + Storybook MCP + `design-system.md` + Code Connect pipeline |
| **Generation** | Storybook-to-Figma component generation and App→Web scaling |
| **Governance agent** | Rubix Flag and Suggest for DS compliance and correction |
| **Drift / token sync** | Token audit workflow to catch divergence between Figma and code |
| **Human-in-the-loop** | Suggestion-first workflows with curated overrides rather than auto-replacement |

> The point for a portfolio reviewer is simple: **I did not write a think-piece about the agentic design system. I built one, measured it, and used it to ship real work.**

---

## 3 · The Process

### From exploration to a system

I began by identifying where AI could genuinely help — **quality checks, localized research, better UI-pattern discovery, and the drafting and simulation of user tests.** Most of these started as text-based prompting: useful, but still ad hoc. The breakthrough came when I took one of those ideas — quality — and turned it into a **repeatable system**. That became the template for everything that followed.

### The core insight, as an architecture

If context is the missing link, then the deliverable isn't a prompt — it's a **pipeline** where design decisions flow from Figma all the way into generated code, and back.

```
Figma DS ──▶ MCP ──▶ Context files ──▶ Code layer ──▶ Storybook
(tokens +    (reads   (design-        (typed         (living
 components)  metadata) system.md)      wrappers)      docs)
        ▲                                                  │
        └──────────────  token-sync audit  ◀───────────────┘
```

> Remove any one node and quality degrades. All of them together produce output no single tool could generate alone.

### Key decisions & rationale

- **Prove it in a sandbox first.** I rebuilt the pattern against Material 3 (a public, well-understood system) so I could validate the approach with zero production risk before porting to our DS.
- **Make compliance *measurable*.** Every generation emits a coverage % and a discrepancy log — quality is audited, not eyeballed.
- **Suggestion, never auto-replacement.** For anything touching designers' work, the system advises; humans decide.

> 🎞 **Visual:** The 5-node pipeline as a horizontal flow with labelled connectors ("reads → informs → constrains → documents"). Animate node-by-node if presenting live.

---

## 4 · The Solution

The work evolved into five connected chapters — a proof of concept, a real-world application, a governance layer, a scaling system, and an economic model.

### Chapter 1 — The context pipeline *(proof of concept: Material 3 sandbox)*

I made the design system **machine-readable inventory**, then layered rules, types, and docs on top.

- **Figma → structured inventory.** Using Figma MCP, I read every page of the M3 Design Kit — 23 component families, all variant axes, all token collections — into two structured outputs that became the source of truth. *(2,129-line machine-readable variant map · 29/29 pages validated.)*
- **`design-system.md` — rules AI reads before generating.** Token semantic roles, component-selection logic, layout patterns, hard rules ("max one filled button per screen", "spacing in multiples of 4pt", "mobile nav = bottom bar, never hamburger").
- **A typed code layer.** 25 TypeScript wrapper components, named 1:1 with Figma. Pass an invalid variant and it **won't compile** — design rules enforced by the type system, not by convention.
- **Storybook as living documentation.** 25 component pages + 3 token pages, 100% props coverage.

**Result:** the same prompt that produced generic slop before now produced DS-compliant UI on the first try.

> 🎞 **Visual:** VS Code (`design-system.md`) beside the Figma variables panel; then the two big stats (`2,129` lines · `29/29` pages).

### Chapter 2 — Applying it to the real design system *(E1 / Nexus)*

The sandbox proved the pattern. Next I pointed it at our actual system.

- **A pipeline between Storybook (code) and the Figma design system.** Generating fully variable-bound Figma components directly from live code — starting at **>85% accuracy**.
- **On a fully instrumented build (the Chip component): 100% variable-binding coverage — 285/285 bindable properties bound**, across 15 variants, with auto-generated documentation *and* a discrepancy log.
- **Continuous token audits** catch drift between code and Figma before it ships.

> 🎞 **Visual:** The generated Chip component set in Figma with the "100% of bindable properties bound" hero pill and the discrepancy log beside it.

### Chapter 3 — Governing quality *(Rubix — intelligent DS compliance)*

The same context that *builds* on-system also *catches* off-system.

- **Flag:** scans a Figma page and annotates every non-DS layer — *"this is not a DS component," "this is not a variable / token."*
- **Suggest:** for each flagged layer, names the **one** correct DS component to use instead.
- **Govern:** a three-role model — *Flagging* (any designer) → *Suggestion* (opt-in) → *Index Builder* (admin, the single writer of the component index; 50 components indexed with keys, tokens, patterns). Corrections become admin-curated **overrides** — the system learns over time.
- **Zero new spend:** it runs on **Figma AI, which we already pay for.**

> 🎞 **Visual:** A Figma page with red "not a DS component" annotations and green "Suggested DS component: …" callouts.

### Chapter 4 — Scaling the manual work *(App → Web)*

With a synced, context-ready DS, I automated one of the most tedious manual tasks in the org.

- Scale **app screens (375×812, 4-col)** into **web screens (1440×1024, 12-col)** *directly in Figma*, using **only** DS components, variables, and tokens.
- Not a dumb stretch — screens are **re-composed** for web (bottom tab nav → top/side nav; stacked mobile groups → column-spanning rows) on a deterministic 12-column grid.
- Validated pilot (WU "Get Card"): **100% design-system coverage**, end-to-end.
- **~70% reduction** in time-to-convert — *including manual review*, because the output is already on-system.

> 🎞 **Visual:** Mobile source screen → generated 1440 web screen, with a "~70% faster · 100% DS coverage" badge.

### Chapter 5 — Making it economical *(O(n²) → O(n))*

AI is still in an exploration phase where teams burn tokens because they're cheap. That won't last. There's a structural version of this the industry names directly: **a design system's complexity grows exponentially while the team maintaining it grows linearly — and that gap is where consistency goes to die.** My context model closes the gap on the AI-cost axis.

- The naive approach re-sends the *entire* design system as context for every component or screen → cost grows like **O(n²)**.
- My fix: a **lean, pre-built context index** (~10 KB per library) plus **Figma Code Connect**, so each task loads *only* what it needs → **O(n)**.
- Net: cost scales roughly **linearly** as we add components and screens, instead of exploding.

> 🎞 **Visual:** One chart — two curves, steep `O(n²)` vs. flat-ish `O(n)`. Make it big; this is the "we thought about the economics" slide.

---

## 5 · Before / After

**Same prompt. Two completely different outputs.**

| Without the context pipeline | With the context pipeline |
|---|---|
| `<div style={{ color: '#6750A4', padding: '10px' }}>` | `<DSAppBar size="small" title="Dashboard" />` |
| ✗ Hardcoded hex color | ✓ Token reference, not hardcoded |
| ✗ Non-DS spacing (10px) | ✓ 4pt spacing scale enforced |
| ✗ Raw HTML, no DS components | ✓ DS component, correct variant |

> 🎞 **Visual:** Two code panels, red header ("Without") vs. green header ("With"), annotated line-by-line. Also works as a "Figma Make vs. our system" render comparison.

---

## 6 · Impact

### One system. Multiple audiences benefit.

- **For designers** — design decisions stop dying in handoff. The logic behind tokens, components, and layout rules now flows into the tools that generate and review UI.
- **For developers** — the handoff starts from a more accurate foundation, reducing interpretation overhead and rework.
- **For product and business** — teams can move faster from concept to review without sacrificing design-system discipline.
- **For the design system itself** — it becomes an active input to the workflow rather than a document that people consult after the fact.

### The numbers

| Metric | Result |
|---|---|
| App→Web conversion time (incl. review) | **~70% faster** |
| Design-system fidelity (validated build) | **100% — 285/285 bindable properties** |
| Component-generation accuracy (baseline → instrumented) | **>85% → measured 100%** |
| M3 inventory extraction | **2,129-line variant map · 29/29 pages validated** |
| Typed DS wrappers / Storybook coverage | **25 components · 100% props coverage** |
| Net-new tooling cost for QA | **$0 — runs on Figma AI already licensed** |
| Context cost model | **O(n²) → O(n)** |

### External validation — this is where the category is heading

This isn't a one-off; it's the direction the field is now calling the future of design systems:

- **It's becoming infrastructure.** Analysts project ~**40% of enterprise apps** will embed AI agents by end of 2026, with design systems at the center of the shift.
- **The numbers rhyme with mine.** Enterprises deploying AI design-governance report **60–80% reductions in design-review cycle time** — a cited case hit **~70% per-sprint review reduction in three months.** My App→Web pipeline landed the same **~70%**.
- **The vocabulary matches what I shipped.** "Automated design governance," "AI-ready component library," and "an MCP that makes AI generate the right code, not an approximation" — I'd already built concrete versions of each. Microsoft is building an explicitly **"AI-first design system"** in which the DS "codifies how to shape model behaviour."
- **The craft is shifting left.** As Microsoft Design frames it, *design is shifting left* — into the systems and context that make AI useful. That is precisely the **"For AI"** direction.

> *Industry figures above are cited from the linked articles — external validation, not my results. My results are in the table above.*

> 🎞 **Visual:** Four "for [team]" cards, then a metrics band. Lead the section with the single most impressive number.

---

## 7 · Reflection

### What I learned
- **The highest-leverage design artifact wasn't a screen — it was structured context.** Information architecture for a machine reader.
- **Measurability changes the conversation.** "Looks on-brand" is an opinion; "285/285 bound, here's the discrepancy log" is a fact leaders can act on.
- **Governance is a design problem.** Suggestion-not-replacement, a single index writer, and a learning loop are what make an AI system *safe* to roll out.

### What I'd do differently
- Instrument coverage metrics from day one, not after the first successful build.
- Bring engineering in earlier on Code Connect — it is the deepest context link and the clearest path to production-ready output.

### The bet
> **The most important design work of the next decade will not be designing only for users. It will be designing the systems that make AI useful to teams.** Structured documentation, machine-readable rules, token-level precision, and information architecture for AI workflows are now part of the craft.

The field is already naming this shift — Microsoft calls it an *AI-first design system*; others call it *design shifting left* or *the agentic design system*. The point is the same: the design system stops being a document people consult and becomes the context a machine acts on. That is the work I have been building.

---

## 8 · Appendix — the deliverable set

*Built and validated without modifying any production codebase.*

| Deliverable | Detail |
|---|---|
| DS context file | `design-system.md` — token rules, component rules, layout patterns |
| AI instructions | `.github/copilot-instructions.md` — codebase-specific rules |
| Figma inventory | Component inventory — all 23 M3 families |
| Variant map | Machine-readable variant JSON — 2,129 lines |
| DS wrapper components | 25 TypeScript components, variants enforced by types |
| Storybook | 25 component pages + 3 token pages, autodocs |
| Real-DS component generation | Storybook→Figma pipeline; Chip at 100% binding (285/285), 15 variants |
| Intelligent QA (Rubix) | Flag + Suggest + Index Builder; 50-component index; overrides learning loop |
| App→Web pipeline | 12-col scaling skill; WU "Get Card" pilot at 100% DS coverage |
| Leadership deck | 14-slide exec presentation of the full program |

**Toolchain:** Figma (MCP · Code Connect · Figma AI) · VS Code + GitHub Copilot · Storybook (+ MCP) · Claude · TypeScript / React.

---

## How this should look *(visual direction)*

This case study is written to be *presented*, not just read. Keep it visual and confident.

### Visual system
- **Format options:** (a) a scrollytelling web page matching your portfolio, or (b) a 16:9 slide deck (you already have the Western Union exec deck to reuse). Pick one primary.
- **Type:** one strong display face for headlines (big, tight), a clean sans for body. Your existing case study uses an accent of `#6750A4` (M3 purple) — for the umbrella version consider your **WU brand** (black / white / yellow `#FFDD00`) to signal it's real, shipped work.
- **Layout:** generous whitespace, one idea per screen, big numbers, short declarative headlines. Pull quotes as full-width breakers.
- **Motif:** the recurring `AI ── [context] ── DS` diagram + the pipeline flow.

### Shot list (assets to capture)
1. **Hero comparison** — generic AI output vs. on-system output (annotated).
2. **The pipeline** — 5-node flow diagram.
3. **M3 proof** — VS Code `design-system.md` + Figma variables panel; the `2,129` / `29-29` stats.
4. **Real-DS component** — generated Chip set in Figma with the "100% bound" pill + discrepancy log.
5. **Rubix QA** — Figma page with red flags + green suggestions.
6. **App→Web** — mobile → 1440 web, "~70% / 100% DS" badge.
7. **Cost chart** — O(n²) vs O(n) curves.
8. **Live demo clips** — prompt→DS UI; Figma-link→code; DS maintenance (e.g., accessibility gaps fixed in one prompt).
9. **Impact** — four "for [team]" cards + metrics band.
10. **Close** — the manifesto line, your name/role, contact.

### Writing checklist (from the attached `case-study` skill)
- [x] Lead with the most impressive outcome (the hook band up top)
- [x] Show process, but don't document every step (five chapters, not fifty)
- [x] Quantify impact everywhere (metrics table)
- [x] First person for your contributions; note where the DS/eng teams partnered
- [x] Scannable — short paragraphs, clear headings, before/after
- [ ] Fill the `[brackets]` — timeline, exact team, portfolio/LinkedIn/email links, and swap illustrative figures for the finals you want to publish

---

*Prepared as the umbrella portfolio case study covering the full AI × Design-System program. The Material 3 sandbox ("Teaching AI to Speak Design System") is Chapter 1; Nexus, Rubix, App→Web, and the cost model extend it into shipping work.*

---

## References & positioning notes

This case study is framed to sit inside the emerging **"agentic design system"** conversation — cite the category and the stats, then show the built proof. Lead with the work; let the industry pieces confirm the direction.

- **Lollypop** — *Your Design System Is Slowing You Down. AI Can Fix That.* — agentic AI design systems, automated governance, the agent archetypes (Governance / Token / Drift / MCP), AI-ready component libraries, and the 60–80% review-time reduction.
- **Microsoft Design** — *A simplified system* — the AI-first / AI-forward design system that "codifies how to shape model behaviour"; and *Design isn't dying, it's shifting left.*
- **Design Systems Collective** — *Towards an Agentic Design System.*
- **Daniel Dungyov (LinkedIn)** — *A new use case for design systems.*

> Positioning line you can reuse: *"The industry is writing about the agentic design system. I built one — governance, token-sync, an MCP context layer, and generation — and shipped ~70% faster conversion at 100% design-system fidelity."*
