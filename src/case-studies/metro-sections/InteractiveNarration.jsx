import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  StoryRadar,
  StoryChip,
  computeMechanicState,
  formatWeight,
  STORY_FRAMES,
} from "./radarMechanic";
import "../metro-narration.css";

const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const smoothstep = (x) => {
  const t = clamp(x);
  return t * t * (3 - 2 * t);
};

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduce;
}

// ── Scene content ────────────────────────────────────────────────────────────
// Copy is crisp by design. Brief + persona text echoes the linear case study.

const SCENES = [
  {
    id: "1",
    kind: "title",
    eyebrow: "Interactive narration",
    title: (
      <>
        Metro+ <em>Service Design</em>
      </>
    ),
    sub: "Solving the last-mile connectivity for Indian metro cities.",
    tags: ["User Research", "Tech", "Physical Devices"],
  },
  {
    id: "2",
    kind: "brief",
    eyebrow: "How it started",
    label: "Original brief",
    tag: "Given",
    quote:
      "Design a phygital experience for the IIT Bombay EV-buggy so drivers know demand and passengers know wait time. Install poles in 25 locations within 2 km of each metro station.",
    scope: "An artifact.",
    variant: "original",
  },
  {
    id: "3",
    kind: "bullets",
    eyebrow: "Discovery",
    headline: "Discovering every aspect of last-mile connectivity",
    items: [
      "The current IIT Bombay golf-cart buggy system",
      "The needs and wants of metro travellers",
      "How the driver ecosystem functions in a shared space",
      "How IITB manages its internal buggy ecosystem",
      "The vehicle fleet in use — and its limitations",
    ],
    foot: "…and many more questions that needed answering.",
  },
  {
    id: "4",
    kind: "challenge",
    eyebrow: "First thoughts",
    headline: "This was never a copy-paste job",
    intro:
      "Extrapolating the campus model to a city came with its own set of challenges.",
    cards: [
      {
        k: "Route & density",
        v: "The campus route is short. A 2 km radius has varied density and a different route for every station.",
      },
      {
        k: "Wait time",
        v: "Short campus routes and many vehicles keep waits low. Real neighbourhoods won’t behave that way.",
      },
      {
        k: "Vehicle integrity",
        v: "A buggy carries 15 on smooth, controlled campus roads. On Indian roads — traffic, potholes, low speed — it’s fragile transport.",
      },
      {
        k: "Predictability",
        v: "You can walk it on campus. From home to the metro you can’t, so rush-hour reliability matters far more.",
      },
    ],
  },
  {
    id: "5",
    kind: "brief",
    eyebrow: "So we redefined the brief",
    label: "Revised brief",
    tag: "Reframed",
    quote:
      "Design the end-to-end last-mile service that makes the metro a credible daily commute in Mumbai. The buggy is one mode; the pole is one touchpoint; predictability is the product.",
    scope: "A service.",
    variant: "revised",
  },
  {
    id: "6",
    kind: "research",
    eyebrow: "Stakeholders & interviews",
    headline: "We named the people, then went and listened",
    beats: [
      "The people to design for were Drivers and Passengers. We built a contextual inquiry for each.",
      "We went into the field and interviewed 16+ people across both groups.",
      "Every statement was synthesised into insights and breakdowns — and design ideas were derived from them.",
    ],
    artifacts: [
      { label: "Field interview · driver, in context", kind: "photo" },
      { label: "Synthesis sheet · statements → insights → ideas", kind: "sheet" },
    ],
  },
  {
    id: "7",
    kind: "personas",
    eyebrow: "From patterns to people",
    headline: "Two people the service had to serve",
    personas: [
      {
        tag: "passenger",
        initial: "S",
        name: "Samaiyra",
        meta: "28 · Product Manager · Mumbai",
        line:
          "Commutes daily; decisions made in real time by time, comfort and cost. Mode-hops between metro, cab and shared auto.",
        wants: ["A predictable commute", "One plan, one price"],
        pains: ["Traffic uncertainty", "Auto rejections at peak"],
      },
      {
        tag: "driver",
        initial: "R",
        name: "Ramesh Gupta Ji",
        meta: "30 · Rickshaw driver · Mumbai",
        line:
          "His day revolves around a stable income, reading demand, and balancing 12–16 hour shifts with family.",
        wants: ["A stable livelihood", "A transparent demand signal"],
        pains: ["Empty runs eat the margin", "No line-of-sight into demand"],
      },
    ],
  },
  {
    id: "8",
    kind: "problem",
    eyebrow: "One problem, in focus",
    question:
      "How do we guarantee that whenever a passenger reaches a pole, a vehicle is never more than 2 minutes away?",
    note: "Assumption — the passenger has already booked a Metro+ vehicle from home.",
  },
  {
    id: "9",
    kind: "artifact",
    eyebrow: "Route predictability",
    headline: "To promise predictability, first define the routes",
    body:
      "So we studied the routes the campus commute already runs — and found they overlap. Around one metro station, ~25 poles share overlapping segments. It looks like this.",
    artifact: { label: "Physical route model", kind: "photo" },
  },
  {
    id: "9.1",
    kind: "figma",
    artifact: { label: "Route map · poles linked to routes", node: "1088-2496" },
    caption:
      "Poles connect to routes with the metro station as their base — and a single pole can belong to multiple routes. (Pole & route placement is decided by K-means; more on that later.)",
  },
  {
    id: "9.2",
    kind: "figma",
    artifact: { label: "A pole surges", node: "1088-2488" },
    caption:
      "Say a pole suddenly sees a surge and tells the station. That pole’s vehicle is already full — so why should it travel on to Pole 4 and Pole 6?",
  },
  {
    id: "9.3",
    kind: "artifact",
    eyebrow: "How it’s handled today",
    headline: "A WhatsApp group",
    body:
      "Our driver persona still has to follow the route. They flag a surge to supervisors on a WhatsApp group — a completely unorganised method.",
    artifact: { label: "Artifact 2 · driver WhatsApp group", kind: "screenshot" },
  },
  {
    id: "9.4",
    kind: "statement",
    eyebrow: "The gap",
    headline: "So we need an intelligent system",
    body:
      "One that tracks how many passengers are travelling from a pole, and knows when enough of them will fill a vehicle to capacity.",
  },
  {
    id: "9.5",
    kind: "figma",
    artifact: { label: "Pole detached & served independently", node: "1088-2494" },
    caption:
      "Pole 10 is detached from the loop and served on its own — it’s full now — and the nodes after it are re-attached to a different route.",
  },
  {
    id: "10",
    kind: "statement",
    headline: "The solution looks perfect — but it has a catch.",
    center: true,
  },
  {
    id: "11",
    kind: "whatif",
    eyebrow: "The human factor",
    lead: "Human beings are the unpredictable variable.",
    items: [
      "You book your ride, but a broken elevator delays you at your pickup point.",
      "You head downstairs and remember you didn’t kiss your kid goodbye.",
      "You left without your work laptop. (More often than you’d think — I can confirm.)",
    ],
    close: "How do we still give them predictability?",
  },
  {
    id: "11.1",
    kind: "statement",
    headline:
      "Either the vehicle waits a long time — or the user loses their predictability.",
    center: true,
  },
  {
    id: "12",
    kind: "statement",
    eyebrow: "A classic tension",
    headline: "It’s a 3-body problem.",
    body: "Keeping Passenger ⟷ Pole ⟷ E-vehicle in sync.",
    center: true,
  },
  {
    id: "13",
    kind: "statement",
    eyebrow: "The solution",
    headline: (
      <>
        The <em>Quarter</em> and the <em>Half</em> user.
      </>
    ),
    center: true,
  },
  {
    id: "13.1",
    kind: "statement",
    body:
      "Remember — the pole tells us how many people are coming to it. That defines its traffic, and vehicles are sent (and routes change) accordingly.",
  },
  {
    id: "13.2",
    kind: "bullets",
    headline: "The pole also tells us when a vehicle should arrive",
    items: [
      "Minimal wait time for every passenger",
      "Optimum use of each vehicle’s capacity",
    ],
  },
  {
    id: "13.3",
    kind: "quote",
    quote: (
      <>
        A user isn’t 0 or 1.
        <br />
        They arrive as a <em>fraction</em>.
      </>
    ),
  },
  {
    id: "13.4",
    kind: "quote",
    quote:
      "So the service doesn’t wait for certainty. It reads partial commitment — a booking — and acts on it.",
  },
  {
    id: "13.5",
    kind: "definitions",
    headline: "Each pole has two boundaries — 20 m and 75 m",
    defs: [
      {
        frac: "¼",
        name: "Quarter User",
        ring: "beyond 75 m",
        desc:
          "Books from home, 75 m or more from the pole. In a 3-seater they hold ¼ of a seat — they’ve paid and pledged the journey.",
      },
      {
        frac: "½",
        name: "Half User",
        ring: "crosses 75 m",
        desc:
          "Crosses the pole’s outer 75 m ring. Proximity raises commitment, so their weight in the demand signal rises.",
      },
      {
        frac: "1",
        name: "Full User",
        ring: "crosses 20 m",
        desc:
          "Arrives within 20 m of the pole. Intent is now certain — a whole seat, a whole user.",
      },
    ],
    subtext: "Scroll for the visualisation ↓",
  },
  {
    id: "13.6",
    kind: "radar",
    weight: 5,
  },
  {
    id: "13.7",
    kind: "tech",
    eyebrow: "Under the hood",
    headline: "The tech behind it",
    items: [
      {
        term: "K-means",
        desc:
          "Places poles and routes by demand and the population density of the nearby region.",
      },
      {
        term: "Dijkstra",
        desc:
          "Decides which pole can be detached and served independently — and re-attaches the following nodes to other route loops so none go unserved.",
      },
      {
        term: "Vehicle Routing Problem",
        desc:
          "Decides which vehicle leaves for which pole — the classic CS method delivery platforms rely on.",
      },
    ],
  },
  {
    id: "13.8",
    kind: "bullets",
    headline: "The incentive",
    items: [
      "Better predictability",
      "Efficient vehicle management",
      "Fewer non-useful trips",
    ],
  },
  {
    id: "14",
    kind: "bullets",
    eyebrow: "What next",
    headline: "From a studio idea to two city metros",
    items: [
      "Pitched to the Mumbai and Pune metros.",
      "IIT Bombay stays the think-tank for both.",
      "Pune Metro is in talks with Rapido / Uber for the project MoU.",
      "My team and I will monitor an MVP rollout and keep improving the solution.",
    ],
  },
  {
    id: "15",
    kind: "closing",
    quote:
      "Good service design makes the invisible visible — and holds the whole system accountable to it.",
  },
];

// ── Small presentational helpers ─────────────────────────────────────────────

function Placeholder({ label, kind = "photo", node }) {
  const glyph =
    kind === "figma" ? "◧" : kind === "sheet" ? "▤" : kind === "screenshot" ? "▢" : "◎";
  return (
    <div className={`mn-ph mn-ph--${kind}`} role="img" aria-label={label}>
      <span className="mn-ph__glyph" aria-hidden="true">
        {glyph}
      </span>
      <span className="mn-ph__label">{label}</span>
      <span className="mn-ph__meta">
        {kind === "figma" ? `Figma frame ${node} · to embed` : "Artifact · to add"}
      </span>
    </div>
  );
}

// ── Radar scene (imperative progress; isolated re-render) ─────────────────────

const RadarScene = forwardRef(function RadarScene(_, ref) {
  const [progress, setProgress] = useState(0);
  useImperativeHandle(ref, () => ({ setProgress }), []);
  const { weight, frame, caption } = computeMechanicState(progress);
  return (
    <div className="mn-radar">
      <div className="mn-radar__viz" role="img" aria-label="Riders convert from quarter to half to full users as two rickshaws are dispatched from the metro toward the pole.">
        <StoryRadar progress={progress} />
      </div>
      <aside className="mn-radar__panel">
        <div className="mn-radar__frameno">
          Frame {String(frame + 1).padStart(2, "0")} · {String(STORY_FRAMES).padStart(2, "0")}
        </div>
        <div className="mn-radar__weight">
          <span className="mn-radar__weight-v">{formatWeight(weight)}</span>
          <span className="mn-radar__weight-k">
            pole weight
            <br />Σ commitment
          </span>
        </div>
        <div className="mn-radar__chips">
          <StoryChip label="Rickshaw 1" status={["Idle", "Ready", "Dispatched", "Arriving", "At pole"][frame]} />
          <StoryChip label="Rickshaw 2" status={["Idle", "Idle", "Ready", "Dispatched", "Arriving"][frame]} />
        </div>
        <div className="mn-radar__caption">
          <h4>{caption.t}</h4>
          <p>{caption.d}</p>
        </div>
        <div className="mn-radar__dots" aria-hidden="true">
          {Array.from({ length: STORY_FRAMES }).map((_, i) => (
            <span key={i} data-on={i <= frame} />
          ))}
        </div>
      </aside>
    </div>
  );
});

// ── Scene renderer ────────────────────────────────────────────────────────────

function SceneBody({ scene, radarRef }) {
  switch (scene.kind) {
    case "title":
      return (
        <div className="mn-title">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h1 className="mn-title__h">{scene.title}</h1>
          <p className="mn-title__sub">{scene.sub}</p>
          <div className="mn-tags">
            {scene.tags.map((t) => (
              <span className="mn-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      );
    case "brief":
      return (
        <div className={`mn-brief mn-brief--${scene.variant}`}>
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <article className="mn-brief__card">
            <header>
              <span className="mn-brief__tag">{scene.tag}</span>
              <h3>{scene.label}</h3>
            </header>
            <p className="mn-brief__quote">“{scene.quote}”</p>
            <footer>
              <span>Scope</span>
              <strong>{scene.scope}</strong>
            </footer>
          </article>
        </div>
      );
    case "bullets":
      return (
        <div className="mn-block">
          {scene.eyebrow && <p className="mn-eyebrow">{scene.eyebrow}</p>}
          <h2 className="mn-h2">{scene.headline}</h2>
          <ul className="mn-list">
            {scene.items.map((it) => (
              <li key={typeof it === "string" ? it : it.k}>
                <span className="mn-list__mark" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
          {scene.foot && <p className="mn-foot">{scene.foot}</p>}
        </div>
      );
    case "challenge":
      return (
        <div className="mn-block">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-h2">{scene.headline}</h2>
          <p className="mn-lede">{scene.intro}</p>
          <div className="mn-cards">
            {scene.cards.map((c) => (
              <article className="mn-card" key={c.k}>
                <h4>{c.k}</h4>
                <p>{c.v}</p>
              </article>
            ))}
          </div>
        </div>
      );
    case "research":
      return (
        <div className="mn-block">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-h2">{scene.headline}</h2>
          <ol className="mn-beats">
            {scene.beats.map((b, i) => (
              <li key={i}>
                <span className="mn-beats__n">{i + 1}</span>
                {b}
              </li>
            ))}
          </ol>
          <div className="mn-figrow">
            {scene.artifacts.map((a) => (
              <Placeholder key={a.label} label={a.label} kind={a.kind} />
            ))}
          </div>
        </div>
      );
    case "personas":
      return (
        <div className="mn-block">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-h2">{scene.headline}</h2>
          <div className="mn-personas">
            {scene.personas.map((p) => (
              <article className={`mn-persona mn-persona--${p.tag}`} key={p.name}>
                <header>
                  <span className="mn-persona__avatar">{p.initial}</span>
                  <div>
                    <span className="mn-persona__tag">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <span className="mn-persona__meta">{p.meta}</span>
                  </div>
                </header>
                <p className="mn-persona__line">{p.line}</p>
                <div className="mn-persona__cols">
                  <div>
                    <span className="mn-persona__k">Wants</span>
                    <ul>
                      {p.wants.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="mn-persona__k">Pains</span>
                    <ul>
                      {p.pains.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      );
    case "problem":
      return (
        <div className="mn-problem">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-problem__q">{scene.question}</h2>
          <p className="mn-problem__note">{scene.note}</p>
        </div>
      );
    case "artifact":
      return (
        <div className="mn-block">
          {scene.eyebrow && <p className="mn-eyebrow">{scene.eyebrow}</p>}
          <h2 className="mn-h2">{scene.headline}</h2>
          {scene.body && <p className="mn-lede">{scene.body}</p>}
          <Placeholder label={scene.artifact.label} kind={scene.artifact.kind} />
        </div>
      );
    case "figma":
      return (
        <div className="mn-block mn-block--figma">
          <Placeholder label={scene.artifact.label} kind="figma" node={scene.artifact.node} />
          <p className="mn-caption">{scene.caption}</p>
        </div>
      );
    case "statement":
      return (
        <div className={`mn-statement${scene.center ? " mn-statement--center" : ""}`}>
          {scene.eyebrow && <p className="mn-eyebrow">{scene.eyebrow}</p>}
          {scene.headline && <h2 className="mn-statement__h">{scene.headline}</h2>}
          {scene.body && <p className="mn-statement__body">{scene.body}</p>}
        </div>
      );
    case "whatif":
      return (
        <div className="mn-block">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-h2">{scene.lead}</h2>
          <ul className="mn-whatif">
            {scene.items.map((it, i) => (
              <li key={i}>
                <span className="mn-whatif__k">What if…</span>
                {it}
              </li>
            ))}
          </ul>
          <p className="mn-whatif__close">{scene.close}</p>
        </div>
      );
    case "definitions":
      return (
        <div className="mn-block">
          <h2 className="mn-h2">{scene.headline}</h2>
          <ol className="mn-defs">
            {scene.defs.map((d) => (
              <li className="mn-def" key={d.name}>
                <span className="mn-def__frac">{d.frac}</span>
                <div>
                  <h3>
                    {d.name} <span className="mn-def__ring">{d.ring}</span>
                  </h3>
                  <p>{d.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mn-subtext">{scene.subtext}</p>
        </div>
      );
    case "radar":
      return <RadarScene ref={radarRef} />;
    case "tech":
      return (
        <div className="mn-block">
          <p className="mn-eyebrow">{scene.eyebrow}</p>
          <h2 className="mn-h2">{scene.headline}</h2>
          <ol className="mn-tech">
            {scene.items.map((it) => (
              <li key={it.term}>
                <span className="mn-tech__term">{it.term}</span>
                <p>{it.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "closing":
      return (
        <div className="mn-closing">
          <p className="mn-quote__mark" aria-hidden="true">
            ”
          </p>
          <p className="mn-closing__q">{scene.quote}</p>
        </div>
      );
    case "quote":
      return (
        <div className="mn-quote">
          <p className="mn-quote__mark" aria-hidden="true">
            ”
          </p>
          <p className="mn-quote__q">{scene.quote}</p>
        </div>
      );
    default:
      return null;
  }
}

// ── Static (reduced-motion) fallback ──────────────────────────────────────────

function StaticNarration({ onClose }) {
  const radarRef = useRef(null);
  useEffect(() => {
    radarRef.current?.setProgress(0.5);
  }, []);
  return (
    <div className="mn mn--static" role="dialog" aria-modal="true" aria-label="Metro+ interactive narration">
      <button className="mn__exit" onClick={onClose} aria-label="Close narration">
        ✕
      </button>
      <div className="mn__static-scroll">
        {SCENES.map((s) => (
          <section className="mn__scene mn__scene--static" key={s.id}>
            <div className="mn__inner">
              <SceneBody scene={s} radarRef={radarRef} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

// ── Main engine ───────────────────────────────────────────────────────────────

export default function InteractiveNarration({ open, onClose }) {
  const reduce = usePrefersReducedMotion();
  const scrollerRef = useRef(null);
  const sceneRefs = useRef([]);
  const fillRef = useRef(null);
  const hintRef = useRef(null);
  const radarRef = useRef(null);
  const target = useRef(0);
  const smooth = useRef(0);

  // Weighted bands: each scene owns [a,b] in normalized progress.
  const { bands, total, radarIndex } = useMemo(() => {
    const w = SCENES.map((s) => s.weight ?? 1);
    const tot = w.reduce((a, b) => a + b, 0);
    let acc = 0;
    const bd = w.map((wi) => {
      const a = acc / tot;
      acc += wi;
      const b = acc / tot;
      return { a, b, c: (a + b) / 2, w: b - a };
    });
    return { bands: bd, total: tot, radarIndex: SCENES.findIndex((s) => s.kind === "radar") };
  }, []);

  // Body scroll-lock + restore prior scroll position on close.
  useEffect(() => {
    if (!open) return;
    const y = window.scrollY;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.scrollTo(0, y);
    };
  }, [open, onClose]);

  // rAF cross-fade loop (skipped when reduced-motion uses the static fallback).
  useEffect(() => {
    if (!open || reduce) return;
    const T = 0.22 / total; // cross-fade half-width in normalized progress
    let raf = 0;
    let lastActive = -1;

    const loop = () => {
      const el = scrollerRef.current;
      if (el) {
        const max = Math.max(1, el.scrollHeight - el.clientHeight);
        target.current = clamp(el.scrollTop / max);
      }
      smooth.current += (target.current - smooth.current) * 0.12;
      const p = smooth.current;

      let active = 0;
      for (let i = 0; i < SCENES.length; i++) {
        const node = sceneRefs.current[i];
        if (!node) continue;
        const { a, b, c, w } = bands[i];
        const up = i === 0 ? 1 : smoothstep((p - (a - T)) / (2 * T));
        const down = i === SCENES.length - 1 ? 1 : smoothstep(((b + T) - p) / (2 * T));
        const opacity = up * down;
        node.style.opacity = opacity.toFixed(3);
        node.style.visibility = opacity >= 0.01 ? "visible" : "hidden";
        if (i === radarIndex) {
          node.style.transform = "none";
          node.style.filter = "none";
        } else {
          const d = clamp((p - c) / (w / 2 || 1), -1.4, 1.4);
          node.style.transform = `translate3d(0, ${(-d * 3.5).toFixed(2)}vh, 0) scale(${(
            1 + d * 0.025
          ).toFixed(3)})`;
          node.style.filter = opacity < 0.92 ? `blur(${((1 - opacity) * 3.5).toFixed(2)}px)` : "none";
        }
        if (p >= a && p < b) active = i;
      }

      if (radarRef.current && radarIndex >= 0) {
        const rb = bands[radarIndex];
        radarRef.current.setProgress(clamp((p - rb.a) / (rb.w || 1)));
      }
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      if (hintRef.current) hintRef.current.style.opacity = clamp(1 - p * 30).toFixed(3);

      if (active !== lastActive) lastActive = active;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [open, reduce, bands, total, radarIndex]);

  if (!open) return null;
  if (reduce) return createPortal(<StaticNarration onClose={onClose} />, document.body);

  return createPortal(
    <div className="mn" ref={scrollerRef} role="dialog" aria-modal="true" aria-label="Metro+ interactive narration">
      <div className="mn__track" style={{ height: `${total * 85}vh` }} aria-hidden="true" />

      <div className="mn__scenes">
        {SCENES.map((s, i) => (
          <section
            className={`mn__scene mn__scene--${s.kind}`}
            key={s.id}
            ref={(el) => (sceneRefs.current[i] = el)}
          >
            <div className="mn__inner">
              <SceneBody scene={s} radarRef={radarRef} />
            </div>
          </section>
        ))}
      </div>

      <button className="mn__exit" onClick={onClose} aria-label="Close narration">
        ✕
      </button>
      <div className="mn__rail" aria-hidden="true">
        <span className="mn__rail-fill" ref={fillRef} />
      </div>
      <p className="mn__hint" ref={hintRef} aria-hidden="true">
        Scroll to begin ↓
      </p>
    </div>,
    document.body
  );
}
