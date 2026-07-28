import React, { useEffect, useMemo, useRef, useState } from "react";
import "./aiux-case-study.css";

const STATS = [
  { value: "~70%", label: "Faster App->Web (incl. review)" },
  { value: "100%", label: "DS fidelity (285/285 props)" },
  { value: ">85->100%", label: "Component-gen accuracy" },
  { value: "O(n^2)->O(n)", label: "Context cost" },
];

const AGENTIC = [
  {
    term: "AI-ready component library",
    mine: "E1 / Nexus DS + machine-readable component index + 2,129-line M3 variant map",
  },
  {
    term: "MCP / context layer",
    mine: "Figma-MCP + Storybook-MCP + design-system.md + Code Connect",
  },
  {
    term: "Generation",
    mine: "Storybook->Figma components (Chip 100%) + App->Web scaling",
  },
  {
    term: "Governance agent",
    mine: "Rubix Flag catches non-DS layers and tokens",
  },
  {
    term: "Drift / token sync",
    mine: "Token-sync audit (Core <-> Figma drift report)",
  },
  {
    term: "Human in the loop",
    mine: "Rubix Suggest + one-component recommendations + override learning loop",
  },
];

const CHAPTERS = [
  {
    kicker: "01 - Context pipeline",
    title: "The context pipeline",
    tag: "Proof of concept - Material 3 sandbox",
    intro:
      "I made the design system machine-readable, then layered rules, types, and living docs on top. Using Figma MCP I read every page of the M3 kit into a structured inventory, wrote the rules AI reads before it generates, enforced them in a typed code layer, and documented everything in Storybook.",
    note: "Figma MCP + design-system.md + 25 typed wrappers + Storybook",
    points: ["2,129-line variant map", "29/29 pages validated", "100% props coverage"],
    shots: ["design-system.md", "variant map", "typed wrappers", "Storybook docs"],
  },
  {
    kicker: "02 - Real design system",
    title: "Generating on-system components",
    tag: "E1 / Nexus",
    intro:
      "The sandbox proved the pattern. Then I pointed it at our real design system. A pipeline between Storybook and the Figma DS generated fully variable-bound components directly from live code.",
    note: "Storybook -> Figma with strict variable binding",
    points: [">85% to 100%", "285/285 props", "15 variants + auto-docs"],
    shots: ["Chip component set", "100% bound pill", "Discrepancy log", "Dark-mode check"],
  },
  {
    kicker: "03 - Governance",
    title: "Rubix intelligent DS quality-check",
    tag: "Flag + Suggest + Index",
    intro:
      "The same context that builds on-system also catches off-system. Rubix scans a Figma page, flags every non-DS layer, and names the most relevant DS component to use instead.",
    note: "Suggestion only - never auto replace",
    points: ["Runs on existing Figma AI", "50-component index", "Override learning loop"],
    shots: ["Flagged layers", "Suggested components", "Index cards"],
  },
  {
    kicker: "04 - Scale",
    title: "App to Web, intelligently",
    tag: "375x812 -> 1440x1024",
    intro:
      "With a synced context-ready DS, I automated one of the most manual tasks: scaling app screens into web. Not stretch, but re-composition on a 12-column system using only DS components, variables, and tokens.",
    note: "Bottom nav became top/side nav; stacked groups became column spans",
    points: ["~70% faster including review", "100% DS coverage", "Validated pilot"],
    shots: ["Mobile source", "Web output", "12-col layout", "Coverage badge"],
  },
];

const VALIDATION = [
  {
    key: "~40%",
    body: "Projected enterprise apps embedding AI agents by end of 2026.",
  },
  {
    key: "60-80%",
    body: "Design-review cycle-time reduction reported for AI governance rollouts.",
  },
  {
    key: "AI-first",
    body: "Microsoft framing: AI-first design systems that shape model behavior.",
  },
  {
    key: "Shift-left",
    body: "Design moving left into systems and context that make AI useful.",
  },
];

function LiveClock() {
  const [text, setText] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const day = d.toLocaleDateString("en-US", { weekday: "short" });
      const time = d.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setText(`${day} ${time}`);
    };

    update();
    const id = window.setInterval(update, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return <>{text || "--"}</>;
}

function DragGallery({ shots }) {
  const ref = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });

  return (
    <div className="aiux-gallery-wrap">
      <p className="aiux-gallery-hint">[drag] Grab and drag to browse</p>
      <div
        ref={ref}
        className="aiux-gallery"
        onPointerDown={(event) => {
          const el = ref.current;
          if (!el) return;
          drag.current = {
            down: true,
            startX: event.clientX,
            scrollLeft: el.scrollLeft,
          };
          el.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const el = ref.current;
          if (!el || !drag.current.down) return;
          el.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
        }}
        onPointerUp={(event) => {
          const el = ref.current;
          drag.current.down = false;
          if (!el) return;
          try {
            el.releasePointerCapture(event.pointerId);
          } catch {
            // ignore
          }
        }}
        onPointerCancel={() => {
          drag.current.down = false;
        }}
      >
        {shots.map((shot) => (
          <article key={shot} className="aiux-shot-card">
            <div className="aiux-shot-chrome">
              <span />
              <span />
              <span />
            </div>
            <div className="aiux-shot-body">{shot}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CostChart() {
  const points = useMemo(
    () => [
      { n: "1", q: 1, l: 1 },
      { n: "2", q: 4, l: 2 },
      { n: "3", q: 9, l: 3 },
      { n: "4", q: 16, l: 4 },
      { n: "5", q: 25, l: 5 },
    ],
    []
  );
  const max = 25;

  return (
    <div className="aiux-cost-chart">
      <div className="aiux-cost-legend">
        <span>
          <i className="bar bar-naive" /> Naive reload full DS (O(n^2))
        </span>
        <span>
          <i className="bar bar-lean" /> Context index + Code Connect (O(n))
        </span>
      </div>
      <div className="aiux-cost-bars">
        {points.map((p) => (
          <div key={p.n} className="aiux-cost-group">
            <div className="bars">
              <div className="q" style={{ height: `${(p.q / max) * 100}%` }} />
              <div className="l" style={{ height: `${(p.l / max) * 100}%` }} />
            </div>
            <span>{p.n}</span>
          </div>
        ))}
      </div>
      <p className="aiux-axis-label">components / screens -&gt;</p>
    </div>
  );
}

function CodeColumn({ mode, code, notes }) {
  const positive = mode === "good";
  return (
    <div className="aiux-code-col">
      <p className={`aiux-code-label ${positive ? "good" : "bad"}`}>
        {positive ? "With context pipeline" : "Without context pipeline"}
      </p>
      <pre className="aiux-code-block">
        <code>{code}</code>
      </pre>
      <ul>
        {notes.map((note) => (
          <li key={note}>
            <span className={`status ${positive ? "ok" : "bad"}`}>{positive ? "[+]" : "[-]"}</span>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIxUXCaseStudy() {
  useEffect(() => {
    document.title = "Teaching AI to Speak Design System - Kushagra Tripathi";
    return () => {
      document.title = "Predictable Champion";
    };
  }, []);

  return (
    <main className="aiux-page">
      <div className="aiux-container">
        <header className="aiux-topbar">
          <div className="brand">[*] Kushagra Tripathi</div>
          <div className="meta">
            <p>Interaction Designer, Western Union - designing systems that make AI useful.</p>
            <div className="clock">
              <span className="dot" />
              <span>
                <LiveClock />
              </span>
            </div>
          </div>
        </header>

        <section className="aiux-hero">
          <p className="kicker">Portfolio Case Study</p>
          <h1>Teaching AI to Speak Design System</h1>
          <p className="lead">
            The breakthrough was not better prompts. It was better context: a design system that
            could speak clearly to AI, and an operating layer that let AI generate, validate, and
            scale UI in ways that were measurable, trustworthy, and useful.
          </p>
          <div className="hero-meta">
            <div>
              <span>Role</span>
              <p>Interaction Designer - Western Union</p>
            </div>
            <div>
              <span>Timeline</span>
              <p>2026 - ongoing</p>
            </div>
            <div>
              <span>Tools</span>
              <p>Figma, Claude, VS Code, Storybook</p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="aiux-stats">
          {STATS.map((item) => (
            <article key={item.value}>
              <p className="value">{item.value}</p>
              <p className="label">{item.label}</p>
            </article>
          ))}
        </section>

        <hr className="rule" />

        <section className="aiux-challenge">
          <div>
            <p className="kicker">The Challenge</p>
            <h2>Every team has a design system. Almost no AI tool uses it.</h2>
          </div>
          <div>
            <p>
              Generative AI was quickly becoming part of everyday product work. Teams used it to
              draft flows, explore patterns, and generate rough UI. But the output rarely felt like
              our product: wrong tokens, off-system spacing, non-DS components, and layouts that
              ignored the rules we had already defined.
            </p>
            <blockquote>
              The problem was not that AI lacked capability. It lacked context.
            </blockquote>
          </div>
        </section>

        <section className="aiux-reframe">
          <p className="kicker">The Reframe</p>
          <h2>
            AI does not fail because it is bad at design. It fails because it has not been given the
            right design context.
          </h2>

          <div className="with-for">
            <article className="with-card">
              <p className="label">With AI</p>
              <p>
                Use AI now as an automation and brainstorming assistant across research, patterns,
                tests, and QA.
              </p>
            </article>
            <article className="for-card">
              <p className="label">For AI</p>
              <p>
                Build context and infrastructure so AI can produce trustworthy, on-system output at
                scale.
              </p>
            </article>
          </div>

          <h3>This has a name now: the agentic design system.</h3>
          <p className="subtle">
            The field is calling it that because it is no longer just a theory. It is a working
            system for generating, evaluating, and governing UI.
          </p>

          <div className="agentic-table">
            {AGENTIC.map((row) => (
              <article key={row.term}>
                <h4>{row.term}</h4>
                <p>{row.mine}</p>
              </article>
            ))}
          </div>
        </section>

        {CHAPTERS.map((chapter) => (
          <section className="chapter" key={chapter.kicker}>
            <p className="kicker">{chapter.kicker}</p>
            <h2>{chapter.title}</h2>
            {chapter.tag ? <p className="tag">{chapter.tag}</p> : null}
            <p className="intro">{chapter.intro}</p>
            <p className="note">[*] {chapter.note}</p>
            <div className="chips">
              {chapter.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <DragGallery shots={chapter.shots} />
          </section>
        ))}

        <section className="chapter">
          <p className="kicker">05 - Economics</p>
          <h2>Making it cheap on purpose: O(n^2) to O(n)</h2>
          <p className="intro">
            AI is cheap today, not forever. Naive context reload scales quadratically. A lean
            context index plus Code Connect keeps growth linear.
          </p>
          <CostChart />
        </section>

        <section className="before-after">
          <p className="kicker">Before / After</p>
          <h2>Same prompt. Two different outputs.</h2>
          <div className="cols">
            <CodeColumn
              mode="bad"
              code={`<div style={{ color: '#6750A4',\n  padding: '10px' }}>\n  <h2>Dashboard</h2>\n  <div className="card">...</div>\n</div>`}
              notes={[
                "Hardcoded hex color",
                "Non-DS spacing (10px)",
                "Raw HTML, no DS components",
              ]}
            />
            <CodeColumn
              mode="good"
              code={`<DSAppBar size="small"\n  title="Dashboard" />\n<DSCard variant="elevated">\n  <CardContent sx={(t) => ({\n    padding: t.spacing(4) })}>`}
              notes={[
                "Token reference, not hardcoded",
                "4pt spacing scale enforced",
                "DS component, correct variant",
              ]}
            />
          </div>
        </section>

        <section className="impact">
          <p className="kicker">Impact</p>
          <h2>One system. Multiple audiences benefit.</h2>
          <div className="impact-grid">
            <article>
              <h3>For designers</h3>
              <p>Design decisions survive handoff through machine-readable context.</p>
            </article>
            <article>
              <h3>For developers</h3>
              <p>Less interpretation overhead and stronger DS-compliant starting points.</p>
            </article>
            <article>
              <h3>For product and business</h3>
              <p>Faster DS-compliant prototype generation for reviews and decision making.</p>
            </article>
            <article>
              <h3>For the design system</h3>
              <p>The DS becomes an input tools consume, not static documentation.</p>
            </article>
          </div>

          <h3 className="validation-title">Where the category is heading</h3>
          <p className="subtle">
            The work sits firmly inside a broader shift toward AI-first design systems and more
            governable, context-rich workflows.
          </p>
          <div className="validation-grid">
            {VALIDATION.map((v) => (
              <article key={v.key}>
                <h4>{v.key}</h4>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <h2>
            The most important design work of the next decade will not be designing only for users.
          </h2>
          <p>It will be designing the systems that make AI useful to teams.</p>
          <small>Interaction design, applied to a new interface layer.</small>
        </section>

        <footer className="aiux-footer">
          <span>[*] Kushagra Tripathi</span>
          <span>AI x UX</span>
          <span>2026</span>
        </footer>
      </div>
    </main>
  );
}
