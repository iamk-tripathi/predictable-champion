import React, { useEffect, useMemo, useRef, useState } from "react";
import "./aiux-case-study.css";

const base = import.meta.env.BASE_URL;
const img = (name) => `${base}aiux/${name}`;

const STATS = [
  { value: "~70%", label: "Faster App→Web (incl. review)" },
  { value: "95%", label: "Variable-binding coverage" },
  { value: "72%", label: "Less credits vs Figma Make" },
  { value: null, label: "Context cost reduction" },
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
          <i className="bar bar-naive" /> Naive reload full DS (O(n²))
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
      <p className="aiux-axis-label">components / screens →</p>
    </div>
  );
}

function Apparatus() {
  const cx = 130, cy = 178;
  const nodes = [
    { x: 130, y: 55  },
    { x: 228, y: 108 },
    { x: 228, y: 248 },
    { x: 130, y: 305 },
    { x:  35, y: 178 },
  ];
  return (
    <figure className="apparatus" aria-hidden="true">
      <svg viewBox="0 0 260 360" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        {nodes.map((n, i) => (
          <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} className="apparatus__edge" />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="20" className="apparatus__node-sat" />
        ))}
        <circle cx={cx} cy={cy} r="30" className="apparatus__node-center" />
        <circle cx={cx} cy={cy} r="9" className="apparatus__node-center-inner" />
        <text x="130" y="27" textAnchor="middle" className="apparatus__label">DESIGN-SYSTEM.MD</text>
        <text x="252" y="98" textAnchor="start" className="apparatus__label">VARIANT MAP</text>
        <text x="252" y="109" textAnchor="start" className="apparatus__label">· 2129 LN</text>
        <text x="252" y="240" textAnchor="start" className="apparatus__label">CODE CONNECT</text>
        <text x="130" y="337" textAnchor="middle" className="apparatus__label">STORYBOOK</text>
        <text x="12" y="172" textAnchor="end" className="apparatus__label">COMPONENT</text>
        <text x="12" y="183" textAnchor="end" className="apparatus__label">INDEX</text>
      </svg>
    </figure>
  );
}

function MeterStrip() {
  const bars = Array.from({ length: 64 }, (_, i) => {
    const t = i / 63;
    const gaussian = Math.exp(-Math.pow((t - 0.5) * 3.2, 2));
    const noise = 0.3 + 0.7 * Math.abs(Math.sin(i * 2.4 + 1.7));
    return gaussian * noise * 0.9 + 0.06;
  });
  return (
    <aside className="aiux-meter" aria-label="System readout">
      <p className="aiux-meter__label">COMPONENTS · 285</p>
      <div className="aiux-meter__bars">
        {bars.map((h, i) => (
          <span key={i} style={{ height: `${h * 100}%`, opacity: 0.35 + h * 0.65 }} />
        ))}
      </div>
      <p className="aiux-meter__label aiux-meter__label--right">DS COVERAGE · 95%</p>
    </aside>
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

        {/* \u2500\u2500\u2500 NAV */}
        <header className="aiux-topbar">
          <div className="brand">[*] Kushagra Tripathi</div>
          <div className="meta">
            <p>AI x UX Designer, designing systems that make AI useful.</p>
            <div className="clock">
              <span className="dot" />
              <span><LiveClock /></span>
            </div>
          </div>
        </header>

        {/* \u2500\u2500\u2500 HERO */}
        <section className="aiux-hero">
          <div className="aiux-hero-inner">
            <div className="aiux-hero-copy">
              <p className="kicker">Portfolio Case Study</p>
              <h1>Teaching AI to <em>Speak</em> Design System</h1>
              <p className="lead">
                We started with text-based prompting. Then Figma Make arrived and disappointed. A LinkedIn talk changed everything. Context was the missing link. This is how we built the pipeline, created Rubix, and made AI generate production-ready designs using our actual design system.
              </p>
              <div className="hero-meta">
                <div>
                  <span>Role</span>
                  <p>AI x UX Designer</p>
                </div>
                <div>
                  <span>Timeline</span>
                  <p>Since 2026</p>
                </div>
                <div>
                  <span>Tools</span>
                  <p>Figma, Claude, VS Code, Storybook</p>
                </div>
              </div>
            </div>
            <Apparatus />
          </div>
        </section>

        <MeterStrip />

        {/* \u2500\u2500\u2500 STATS */}
        <section className="aiux-stats">
          {STATS.map((item, i) => (
            <article key={i}>
              <p className="value">
                {i === 3
                  ? <span>O(n<sup>2</sup>) → O(n)</span>
                  : item.value
                }
              </p>
              <p className="label">{item.label}</p>
            </article>
          ))}
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 01 BEFORE */}
        <section className="aiux-challenge" data-num="01">
          <div>
            <p className="kicker">01 · Before</p>
            <h2>AI was <em>useful</em>. Just not for design systems.</h2>
          </div>
          <div>
            <p>
              When AI first started picking up, we were using it for text-based prompting: localised research for specific markets, surfacing stronger UI patterns, drafting user tests and simulating participant responses. Useful, but all text.
            </p>
            <blockquote>
              The output looked good in a doc. It never looked like our product.
            </blockquote>
          </div>
        </section>
        <div className="aiux-use-case-grid">
          {[
            { num: "01", title: "Localised research", body: "Market-specific insights generated in seconds for any geography." },
            { num: "02", title: "Better UI patterns", body: "Surfacing stronger design solutions from broad datasets." },
            { num: "03", title: "User tests & simulations", body: "Simulated participant responses for faster, cheaper research cycles." },
            { num: "04", title: "Quality check", body: "Turned into a repeatable design review system, the only one that scaled." },
          ].map(item => (
            <div key={item.num} className="aiux-use-case-item">
              <span className="aiux-use-case-num">{item.num}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="aiux-section-note">All of this stayed text-based. The output looked good in a doc. It never looked like our product.</p>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 02 FIGMA MAKE */}
        <section className="aiux-challenge" data-num="02">
          <div>
            <p className="kicker">02 · The wall we hit</p>
            <h2>Figma Make arrived, and <em>under-delivered</em>.</h2>
          </div>
          <div>
            <p>
              Our design system lives in Figma. Figma Make is their own platform. We expected that, finally, AI would generate output aligned with our DS and production-ready. It was a huge disappointment.
            </p>
            <blockquote>
              Promised end-to-end generation. Visually plausible, but not production-usable. Output ignored our components, tokens, and layout rules. We didn't dismiss it. We decoded why it failed.
            </blockquote>
          </div>
        </section>
        <figure className="aiux-artifact">
          <img
            src={img("art-fm-output.png")}
            alt="Figma Make output — Financial Dashboard with '48 Hug × 48 Hug' annotations showing incorrect component structure"
          />
          <figcaption>Figma Make output · Incorrect auto-layout sizing, no DS components</figcaption>
        </figure>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 03 THE INSIGHT */}
        <section className="aiux-reframe" data-num="03">
          <p className="kicker">03 · The insight</p>
          <h2>
            A LinkedIn talk <em>changed everything</em>.
          </h2>
          <p className="subtle">
            While watching a talk by Grant Blakeman, Staff Software Engineer at LinkedIn, he showed how his team used design systems to increase quality and empower designers. One demo caught my eye: prompts were generating UI that looked exactly how a LinkedIn designer would make it. That was the moment I knew what we were missing.
          </p>
        </section>
        <div className="aiux-insight-row">
          <div className="aiux-insight-diagram">
            <div className="aiux-insight-node">
              <span className="aiux-insight-label">AI</span>
            </div>
            <span className="aiux-insight-arrow">→</span>
            <div className="aiux-insight-node aiux-insight-node--accent">
              <span className="aiux-insight-label">Context</span>
              <span className="aiux-insight-sub">design · code · live</span>
            </div>
            <span className="aiux-insight-arrow">→</span>
            <div className="aiux-insight-node">
              <span className="aiux-insight-label">Design System</span>
            </div>
          </div>
          <div className="aiux-insight-sep" aria-hidden="true" />
          <figure className="aiux-insight-photo">
            <img
              src={img("art-linkedin-demo.png")}
              alt="Grant Blakeman at LinkedIn, prompts generating UI that matches how a LinkedIn designer would build it"
            />
            <figcaption>Source: Schema by Figma on Youtube</figcaption>
          </figure>
        </div>
        <p className="aiux-section-note">Fix the context layer, and you fix the output.</p>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 04 THE PIPELINE */}
        <section className="chapter" data-num="04">
          <p className="kicker">04 · The pipeline</p>
          <h2>
            We built a <em>context pipeline</em> through multiple efforts.
          </h2>
          <p className="intro">
            There was no single "production-ready AI design" solution. Context is the missing middle layer between AI and the design system. We built it through multiple parallel efforts, using MCP as connective tissue between Figma, Storybook, and VS Code × GitHub Copilot.
          </p>
          <p className="note">[*] Figma MCP + Storybook MCP + VS Code × GitHub Copilot + design-system.md + Code Connect</p>
          <div className="chips">
            <span>Figma MCP</span>
            <span>Storybook MCP</span>
            <span>design-system.md</span>
            <span>Code Connect</span>
            <span>M3 proof of concept</span>
          </div>
          <div className="aiux-pipeline-diagram">
            <div className="aiux-pipeline-row">
              <div className="aiux-pipeline-node aiux-pipeline-node--tool">Figma MCP</div>
              <span className="aiux-pipeline-conn">↔</span>
              <div className="aiux-pipeline-node aiux-pipeline-node--hub">VS Code × GitHub Copilot</div>
              <span className="aiux-pipeline-conn">↔</span>
              <div className="aiux-pipeline-node aiux-pipeline-node--tool">Storybook MCP</div>
            </div>
            <div className="aiux-pipeline-down">↓</div>
            <div className="aiux-pipeline-row">
              <div className="aiux-pipeline-node aiux-pipeline-node--output">Figma Design System</div>
              <div className="aiux-pipeline-node aiux-pipeline-node--output">design-system.md</div>
              <div className="aiux-pipeline-node aiux-pipeline-node--output">Code Connect</div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 05 STORYBOOK <-> FIGMA */}
        <section className="chapter" data-num="05">
          <p className="kicker">05 · Production-ready components</p>
          <h2>
            No hardcoded values. Just <em>tokens and variables</em>.
          </h2>
          <p className="intro">
            With the context pipeline proven on the M3 sandbox, we debuted it with our real design system. On the developer side, teams were also finding ways to build production-ready UI using AI. This became a joint design\u2013engineering effort.
          </p>
          <p className="subtle">
            We took production-live, finalised Storybook code of specific components and used Storybook MCP and Figma MCP to generate Figma designs using tokens and variables, not hardcoded values. Every layer bound. Every property linked.
          </p>
          <div className="chips">
            <span>285 base token bindings</span>
            <span>162 linked variables</span>
            <span>Full product component set</span>
          </div>
          <div className="aiux-stat-row">
            <div className="aiux-stat-item">
              <span className="aiux-stat-value">285</span>
              <span className="aiux-stat-desc">base token bindings</span>
            </div>
            <div className="aiux-stat-item">
              <span className="aiux-stat-value">162</span>
              <span className="aiux-stat-desc">linked variables</span>
            </div>
            <div className="aiux-stat-item">
              <span className="aiux-stat-value">95%</span>
              <span className="aiux-stat-desc">variable-binding coverage</span>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 06 BIRTH OF RUBIX */}
        <section className="chapter" data-num="06">
          <p className="kicker">06 · Rubix</p>
          <h2>
            Flag violations. <em>Suggest the fix</em>.
          </h2>
          <p className="intro">
            Up until now, this was an efficient pick-and-drop mechanism. Important, but it was critical to test how well it combined with intelligence. We named the project Rubix, and kickstarted it with a governance use case: AI scans the entire design file for variable and component breakages, then, with full knowledge of our DS, suggests the exact DS component or variable that fits that broken layer.
          </p>
          <div className="chips">
            <span>Maintains product consistency</span>
            <span>Keeps design files sane</span>
            <span>Closed feedback loop</span>
            <span>Suggestion only, never auto-replace</span>
          </div>
          <div className="aiux-governance-grid">
            <div className="aiux-governance-item">
              <span className="aiux-governance-badge aiux-governance-badge--flag">FLAG</span>
              <h4>Find every non-DS layer</h4>
              <p>Rubix scans the entire design file and surfaces every layer not using a DS component, variable, or token.</p>
            </div>
            <div className="aiux-governance-item">
              <span className="aiux-governance-badge aiux-governance-badge--suggest">SUGGEST</span>
              <h4>Name the correct fix</h4>
              <p>For each flagged layer, Rubix names the exact DS component to replace it with. Suggestion only, never auto-replace.</p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 07 THE PILOT — 4-SLIDE TEARDOWN */}
        <section className="before-after" data-num="07">
          <p className="kicker">07 · The pilot</p>
          <h2>
            Same prompt. <em>Two different outputs</em>.
          </h2>
          <p className="subtle">
            Once Rubix's suggestions were solid, we moved on to our initial benchmark: fix the slop from Figma Make and get AI to create production-ready designs. The use case: a workflow for searching wallet users and their details through their mobile number. Same prompt. Same references. Both generated the same workflow. Rubix results were far stronger in component and variable adherence.
          </p>
          <div className="aiux-teardown-layout">
            <div className="aiux-teardown-row aiux-teardown-row--2col">
              <figure className="aiux-teardown-item">
                <img src={img("art-fm-screens.png")} alt="Figma Make output - 3 mobile screens: Enter mobile number, Juan Cruz found, Wallet details - generic component structure" />
                <figcaption>
                  <span className="teardown-label teardown-label--bad">Figma Make</span>
                  Screens generated, visually plausible, not DS-compliant
                </figcaption>
              </figure>
              <figure className="aiux-teardown-item">
                <img src={img("art-rubix-screens.png")} alt="Rubix output - 3 mobile screens: What's their mobile number, Sarah Johnson found, Add Sarah Johnson sheet - proper WU components" />
                <figcaption>
                  <span className="teardown-label teardown-label--good">Rubix</span>
                  Same flow, on-system WU components throughout
                </figcaption>
              </figure>
            </div>
            <div className="aiux-teardown-row aiux-teardown-row--3col">
              <figure className="aiux-teardown-item">
                <img src={img("art-fm-layers.png")} alt="Figma Make layer panel showing Container, Frame, Paragraph, NavHeader, Button - generic names with no DS component references" />
                <figcaption>
                  <span className="teardown-label teardown-label--bad">Figma Make layers</span>
                  Frame/Container/Paragraph, can't be handed off
                </figcaption>
              </figure>
              <figure className="aiux-teardown-item">
                <img src={img("art-rubix-layers.png")} alt="Rubix layer panel showing 3 Confirm receiver, 2 Receiver found, 1 Enter mobile number - all DS component names: card, search-bar, heading, navHeader" />
                <figcaption>
                  <span className="teardown-label teardown-label--good">Rubix layers</span>
                  card · search-bar · heading · navHeader, every layer a DS component
                </figcaption>
              </figure>
              <blockquote className="aiux-callout">
                Figma Make struggles with multiscreen context. Rubix thrives on it. The more context it has (screens, flows, DS patterns) the better and more consistent the output becomes.
              </blockquote>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 08 SCALE */}
        <section className="chapter" data-num="08">
          <p className="kicker">08 · Scale</p>
          <h2>
            App → Web, <em>intelligently</em>.
          </h2>
          <p className="intro">
            With Rubix proven, we went on to solve more use cases: web from mobile (not a stretch, but a re-composition on a 12-column grid), DS migration between systems, and most importantly:
          </p>
          <p className="note aiux-remittance-note">
            [★] Remittance-specific flows: Send Money, KYC, Fraud detection, Track a transfer. These are org-specific flows with near-zero delta across countries. Now: "Add Paytm as a payment method to India Send Money flow" and Rubix generates production-ready designs pulling exactly the right DS components.
          </p>
          <div className="chips">
            <span>App → Web</span>
            <span>DS migration</span>
            <span>Send Money</span>
            <span>KYC</span>
            <span>Fraud detection</span>
            <span>Track a transfer</span>
          </div>
          <div className="aiux-appweb-comparison">
            <div className="aiux-mockup-iphone">
              <img src={img("art-app-mobile.png")} alt="Sending to Juan - mobile app: 500 AUD, 19,808.21 PHP, full Western Union app screen" />
            </div>
            <div className="aiux-appweb-arrow">
              <span className="aiux-appweb-arrow-icon">→</span>
              <span className="aiux-appweb-arrow-label">App → Web</span>
            </div>
            <div className="aiux-mockup-mac">
              <img
                src={img("art-mac-figma.png")}
                alt="Sending to Juan on westernunion.com - web output generated by Rubix, 12-column layout"
              />
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 09 ECONOMICS */}
        <section className="chapter" data-num="09">
          <p className="kicker">09 · Economics</p>
          <h2>
            Making it cheap <em>on purpose</em>: O(n<sup>2</sup>) → O(n)
          </h2>
          <p className="intro">
            AI is cheap today. Not forever. While scaling use cases, we realised we were burning through tokens fast. Multiple MCP calls meant quadratic context reload. After research, we redesigned the architecture: a context index saved in the LLM context window, pointing only to what's needed.
          </p>
          <p className="note">[*] Old way: re-read the whole encyclopedia every time. New way: a table of contents that points to the one page you need.</p>
          <CostChart />
          <div className="aiux-artifact-row" style={{ marginTop: "var(--space-8)" }}>
            <figure className="aiux-artifact aiux-artifact--half">
              <img src={img("art-fm-credits.png")} alt="Figma Make credit usage — 'Used 440 AI credits'" />
              <figcaption>Figma Make · 440 AI credits</figcaption>
            </figure>
            <figure className="aiux-artifact aiux-artifact--half">
              <img src={img("art-rubix-credits.png")} alt="Rubix / AIxUX Pipeline — 'After beta, it will use 124 credits'" />
              <figcaption>Rubix pipeline · 124 credits · 72% reduction</figcaption>
            </figure>
          </div>
        </section>

        <hr className="rule" />

        {/* \u2500\u2500\u2500 10 NEXT STEPS */}
        <section className="impact" data-num="10">
          <p className="kicker">10 · What's next</p>
          <h2>
            From proof-of-concept to <em>company-wide</em>.
          </h2>
          <div className="impact-grid">
            <article>
              <h3>Overseas <em>teams</em></h3>
              <p>Complete adoption rollout to Spain and USA teams with the full Rubix pipeline.</p>
            </article>
            <article>
              <h3>Developer <em>rollout</em></h3>
              <p>Generating on-point, production-ready code directly from DS components and variables.</p>
            </article>
            <article>
              <h3>Business and <em>product</em></h3>
              <p>Empowering non-designers to brainstorm mockups they can actually hand off. Not rough AI slop, but DS-compliant starting points the design team can build on.</p>
            </article>
            <article>
              <h3><em>Remittance</em> flows at scale</h3>
              <p>Expand org-specific context to cover all remittance scenarios across every market Western Union operates in.</p>
            </article>
          </div>
        </section>

        {/* \u2500\u2500\u2500 MANIFESTO */}
        <section className="manifesto">
          <p className="kicker">11 · Manifesto</p>
          <h2>
            The most important design work of the next decade will not be designing only for <em>users</em>.
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
