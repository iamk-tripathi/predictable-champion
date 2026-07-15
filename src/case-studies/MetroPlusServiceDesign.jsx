import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./metro-service-styles.css";

/**
 * Metro+ · Service Design case study
 * -----------------------------------------------------------------
 * A retelling of Metro+ (IIT Bombay ePGD, Design of Interactive
 * Products, 2026) framed through the service-design lens.
 *
 * Story spine:
 *   1. Frame the discipline.
 *   2. Original brief vs. revised brief.
 *   3. Systems view of the ecosystem.
 *   4. Research at scale.
 *   5. From a single artifact to a coordinated service.
 *   6. Naming the "Half User".
 *   7. Service blueprint — front / back / support choreography.
 *   8. Phygital touchpoints — pole, app, driver-app as one system.
 *   9. Usability testing and validation.
 *  10. The commercial case.
 *  11. Practice — the methods this case is built on.
 */

// ---------- Shared primitives ----------------------------------------------

function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

function SectionLabel({ index, children, tone = "ink" }) {
  return (
    <div className={`svc-label svc-label--${tone}`}>
      <span className="svc-label__index">{String(index).padStart(2, "0")}</span>
      <span className="svc-label__rule" aria-hidden="true" />
      <span className="svc-label__text">{children}</span>
    </div>
  );
}

function Reveal({ children, delay = 0, y = 24 }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ---------- 1. Hero ---------------------------------------------------------

function Hero() {
  return (
    <header className="svc-hero" aria-label="Metro+ service design case study introduction">
      <div className="svc-hero__grid" aria-hidden="true" />
      <div className="svc-container">
        <div className="svc-hero__meta">
          <span>Service Design · Case Study</span>
          <span>IIT Bombay ePGD · 2026</span>
        </div>

        <Reveal>
          <h1 className="svc-hero__title">
            The service<br />
            <em>behind</em> the app.
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="svc-hero__lede">
            Metro+ began as a brief for a last-mile buggy app. It ended as a
            phygital coordination service across three modes of transit, four
            stakeholder groups, and one very stubborn variable — human beings.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="svc-hero__facts">
            <Fact k="Brief" v="Design a phygital service for Mumbai’s last-mile transit" />
            <Fact k="Scale" v="25 buggy-stop poles within a 2 km radius of each metro station" />
            <Fact k="Discipline" v="Service design · research, blueprint, phygital IA, business case" />
            <Fact k="Outcome" v="₹34.85 Cr projected Yr-1 operating profit · MVP validated with 12 riders + 6 drivers" />
          </div>
        </Reveal>

        <Reveal delay={0.42}>
          <p className="svc-hero__pitch">
            <span className="svc-hero__pitch-mark">Thesis —</span>
            The screen is not the service. The service is the
            <em> invisible layer </em> of processes, actors and metrics that
            decides whether the screen is even the right answer. This case
            study is about finding that layer, naming what lived in it, and
            re-designing the service so the screen could disappear into the
            background.
          </p>
        </Reveal>
      </div>

      <div className="svc-hero__marker" aria-hidden="true">
        <span>SD/00</span>
        <span>Metro+</span>
      </div>
    </header>
  );
}

function Fact({ k, v }) {
  return (
    <div className="svc-fact">
      <span className="svc-fact__k">{k}</span>
      <span className="svc-fact__v">{v}</span>
    </div>
  );
}

// ---------- 2. Discipline framing -----------------------------------------

function Discipline() {
  return (
    <section className="svc-section svc-section--frame">
      <div className="svc-container">
        <SectionLabel index={1}>Framing</SectionLabel>

        <div className="svc-frame-grid">
          <Reveal>
            <h2 className="svc-h2">
              A service is the choreography of people, tools and processes that
              deliver a promise. This case study is about designing that
              choreography.
            </h2>
          </Reveal>

          <div className="svc-frame-grid__side">
            <Reveal delay={0.1}>
              <p className="svc-body">
                Digital transformation programs fail — the industry number is
                <strong> 84% </strong>— not because the interface is wrong,
                but because the invisible service around the interface is
                un-designed. Metro+ set out to make that service visible and
                accountable.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="svc-body">
                Service design is used here as a tool for
                <strong> alignment</strong>, <strong> research
                rigor</strong>, and <strong> metric honesty</strong> — not as
                a deliverable. The blueprint, the persona, the phygital pole —
                they are consequences, not the point.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <ol className="svc-principles" aria-label="Service design principles that guided the work">
            <Principle
              n="01"
              title="Remove the blinders"
              body="Question the brief. The buggy is not the service; the journey is."
            />
            <Principle
              n="02"
              title="Get the big picture"
              body="Research the whole ecosystem — passengers, drivers, transit, city."
            />
            <Principle
              n="03"
              title="Facilitate across teams"
              body="Sit product, ops and infra at the same table. Role-play the user."
            />
            <Principle
              n="04"
              title="Think in systems"
              body="Design for adjacent platforms — metro, autos, corporates, BMC."
            />
            <Principle
              n="05"
              title="User-centric metrics"
              body="Measure predictability and coverage, not app opens."
            />
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Principle({ n, title, body }) {
  return (
    <li className="svc-principle">
      <span className="svc-principle__n">{n}</span>
      <h3 className="svc-principle__title">{title}</h3>
      <p className="svc-principle__body">{body}</p>
    </li>
  );
}

// ---------- 2.5  Process (7 phases, mapped to the deck's arc) ------------

const PROCESS_PHASES = [
  {
    id: "frame",
    n: "I",
    label: "Frame",
    intent: "Question the brief before answering it.",
    methods: ["Brief interrogation", "Stakeholder scoping", "Scope re-write"],
    artifact: "Revised brief · one-page",
    slides: "Slides 01–03",
  },
  {
    id: "discover",
    n: "II",
    label: "Discover",
    intent: "Understand the ecosystem from every seat at the table.",
    methods: [
      "22 rider interviews",
      "8 driver ride-alongs",
      "10-day diary study",
      "Metro-exit observation",
    ],
    artifact: "User segments · driver personas",
    slides: "Slides 04–07",
  },
  {
    id: "synthesise",
    n: "III",
    label: "Synthesise",
    intent: "Turn field noise into decision-grade signal.",
    methods: [
      "Affinity mapping",
      "Journey mapping",
      "3Cs framework",
      "Variable identification",
    ],
    artifact: "Affinity insights · four variables",
    slides: "Slides 08–11",
  },
  {
    id: "reframe",
    n: "IV",
    label: "Reframe",
    intent: "Name the invisible thing the whole team can rally around.",
    methods: [
      "Concept modelling",
      "“Human Factor” framing",
      "Half-User definition",
    ],
    artifact: "The Half-User signal",
    slides: "Slides 12–15",
  },
  {
    id: "prototype",
    n: "V",
    label: "Prototype",
    intent: "Design the choreography, not just the screen.",
    methods: [
      "Service blueprint",
      "Phygital IA (pole + app + driver + web)",
      "Booking-method typology",
      "Hi-fi flow",
    ],
    artifact: "Blueprint + 4 touchpoint prototypes",
    slides: "Slides 16–19",
  },
  {
    id: "validate",
    n: "VI",
    label: "Validate",
    intent: "Move numbers, not opinions.",
    methods: [
      "12 rider usability sessions",
      "6 driver sessions",
      "3 key questions · pre / post",
      "Incentive-rule tuning",
    ],
    artifact: "Findings table · v2 spec",
    slides: "Slides 20–23",
  },
  {
    id: "position",
    n: "VII",
    label: "Position",
    intent: "Make the service survive a P&L conversation.",
    methods: [
      "Market sizing (TAM)",
      "Revenue / cost model",
      "DBO pitch to BMC",
      "Predictability-index metric",
    ],
    artifact: "₹34.85 Cr Yr-1 P&L Â· pitch deck",
    slides: "Slides 24–27",
  },
];

function Process() {
  return (
    <section className="svc-section svc-section--process">
      <div className="svc-container">
        <SectionLabel index={2}>Process</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            Seven phases.<br />
            One question driving all of them —{" "}
            <em>can this be made predictable?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body">
            The programme ran over the ePGD Design of Interactive Products
            semester. Each phase produced one load-bearing artifact that fed
            the next — no phase was decorative, none were skipped. The map
            below is the exact spine of the source deck.
          </p>
        </Reveal>

        <ol className="svc-process" aria-label="Seven-phase service design process">
          <div className="svc-process__rail" aria-hidden="true" />
          {PROCESS_PHASES.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <li className="svc-process__phase">
                <span className="svc-process__dot" aria-hidden="true" />
                <span className="svc-process__n">{p.n}</span>
                <h3 className="svc-process__label">{p.label}</h3>
                <p className="svc-process__intent">{p.intent}</p>

                <ul className="svc-process__methods">
                  {p.methods.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>

                <footer className="svc-process__foot">
                  <span className="svc-process__artifact">{p.artifact}</span>
                  <span className="svc-process__slides">{p.slides}</span>
                </footer>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.5}>
          <p className="svc-manager-note">
            <span className="svc-manager-note__k">Method note —</span>
            The seven phases sit inside a Double-Diamond outer shape (Frame /
            Discover open; Synthesise / Reframe close; Prototype / Validate
            open again; Position closes). What service design adds on top is
            the discipline of naming the <em>invisible artifact</em> at each
            phase — not the deck slide, but the thing the organisation now
            has to hold itself to.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


// ---------- 3. Brief → Revised Brief --------------------------------------

function BriefRevised() {
  return (
    <section className="svc-section svc-section--brief">
      <div className="svc-container">
        <SectionLabel index={3}>Removing the blinders</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            The original brief was a device.<br />
            The revised brief was a <em>service</em>.
          </h2>
        </Reveal>

        <div className="svc-brief-grid">
          <Reveal delay={0.08}>
            <article className="svc-brief-card svc-brief-card--original">
              <header>
                <span className="svc-brief-card__tag">Given</span>
                <h3>Original brief</h3>
              </header>
              <p>
                “Design a phygital experience for the IIT Bombay EV-buggy so
                drivers know demand and passengers know wait time. Install poles
                in 25 locations within 2 km of each metro station.”
              </p>
              <footer>
                <span>Scope</span>
                <strong>An artifact.</strong>
              </footer>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="svc-brief-arrow" aria-hidden="true">
              <span className="svc-brief-arrow__label">reframe</span>
              <svg viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12 H108" stroke="currentColor" strokeWidth="1" />
                <path d="M100 4 L116 12 L100 20" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <article className="svc-brief-card svc-brief-card--revised">
              <header>
                <span className="svc-brief-card__tag">Reframed</span>
                <h3>Revised brief</h3>
              </header>
              <p>
                Design the <em>end-to-end last-mile service</em> that makes the
                metro a credible daily commute in Mumbai. The buggy is one
                mode; the pole is one touchpoint; predictability is the
                product.
              </p>
              <footer>
                <span>Scope</span>
                <strong>A service.</strong>
              </footer>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <blockquote className="svc-pullquote">
            <p>
              “Last-mile connectivity is cited as the <strong>#1 reason</strong>
              commuters avoid Mumbai Metro. Aqua Line runs at <strong>1.3%
              capacity</strong>. India has invested <strong>$26 Bn </strong>
              into metro rail with average ridership at 25–35% of capacity.”
            </p>
            <cite>MMMOCL, TOI, BBC · 2025–26</cite>
          </blockquote>
        </Reveal>

        <Reveal delay={0.45}>
          <p className="svc-manager-note">
            <span className="svc-manager-note__k">Why the reframe mattered —</span>
            The scope of a design programme is set at the brief. Widening the
            brief responsibly — with data, not opinion — is the highest-leverage
            move available to a design team. Everything after this page is
            downstream of that move.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- 4. Systems View / Stakeholder Ecosystem ------------------------

function Ecosystem() {
  const stakeholders = [
    { id: "passenger", label: "Passenger", note: "Wants predictability, low cost, one plan" },
    { id: "driver", label: "Driver", note: "Wants steady income, less empty running" },
    { id: "metro", label: "Metro Rail", note: "Wants ridership growth, capacity utilisation" },
    { id: "corp", label: "Corporates", note: "Wants staff punctuality, ESG, cost relief" },
    { id: "bmc", label: "City / BMC", note: "Wants throughput, safety, cleaner air" },
    { id: "ops", label: "Ops & Poles", note: "Wants uptime, offline resilience" },
  ];

  return (
    <section className="svc-section svc-section--ecosystem">
      <div className="svc-container">
        <SectionLabel index={4} tone="paper">The big picture</SectionLabel>

        <Reveal>
          <h2 className="svc-h2 svc-h2--onDark">
            Six stakeholders, one promise:<br />
            <em>“The next leg is handled.”</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="svc-body svc-body--onDark">
            Systems thinking said this could not be designed as an app for the
            passenger. Every stakeholder had a different definition of “done”.
            The service had to hold all six definitions at once.
          </p>
        </Reveal>

        <div className="svc-orbit" role="img" aria-label="Stakeholder ecosystem for Metro+">
          <div className="svc-orbit__ring svc-orbit__ring--1" aria-hidden="true" />
          <div className="svc-orbit__ring svc-orbit__ring--2" aria-hidden="true" />
          <div className="svc-orbit__core">
            <span>Metro+</span>
            <small>coordination service</small>
          </div>
          {stakeholders.map((s, i) => (
            <div
              key={s.id}
              className={`svc-orbit__node svc-orbit__node--${i + 1}`}
              style={{ "--i": i, "--n": stakeholders.length }}
            >
              <span className="svc-orbit__label">{s.label}</span>
              <span className="svc-orbit__note">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- 5. Research at scale ------------------------------------------

const PERSONAS = [
  {
    id: "samaiyra",
    kicker: "Passenger · 9-to-5 Gladiator",
    initial: "S",
    name: "Samaiyra",
    meta: "28 · Product Manager, Infosys · Mumbai",
    story:
      "Samaiyra travels daily for work. Her commute decisions are made in real-time and shaped by time, comfort and cost — she moves between metro, cab and shared rickshaw depending on how the day is going. She earlier used auto in the evening, but faced heavy driver rejection in traffic.",
    wants: [
      "A reliable, predictable commute",
      "Comfortable, cost-effective travel",
      "Clear visibility of travel time",
      "One end-to-end plan, one price",
    ],
    pains: [
      "Traffic uncertainty and delays",
      "Auto rejections at peak hours",
      "Expensive recurring costs",
      "Tiring, mode-hopping journeys",
    ],
    quote:
      "It’s difficult to understand the details of time and cost for each lap and total journey.",
    tag: "passenger",
  },
  {
    id: "ramesh",
    kicker: "Driver · Stability Seeker",
    initial: "R",
    name: "Ramesh Gupta Ji",
    meta: "30 · Rickshaw driver · Mumbai",
    story:
      "Ramesh Gupta Ji is a rickshaw driver whose day revolves around earning a stable income, reading commuter demand, and balancing 12\u201316 hour shifts with family life. He takes pride in his work and aspires to do better — the current TISS benchmark for Ola/Uber drivers is ₹19,667 gross / ₹10\u201313k net a month.",
    wants: [
      "Stable, predictable livelihood",
      "Transparent demand signal",
      "Clear shifts and routing",
      "Dignity of labour — rest, breaks",
    ],
    pains: [
      "Empty runs eat the day’s margin",
      "No line-of-sight into where demand is heavy",
      "Rejections and idle time at wrong poles",
      "Long hours with no rhythm",
    ],
    quote:
      "I want empty runs to stop. I want to know where the pole is heavy tomorrow morning.",
    tag: "driver",
  },
];

function Research() {
  return (
    <section className="svc-section svc-section--research">
      <div className="svc-container">
        <SectionLabel index={5}>Research at scale</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            The IIT-Bombay buggy is a prototype.<br />
            Mumbai is the production system.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="svc-body">
            We ran 22 rider interviews, 8 driver ride-alongs, three
            observational sessions at metro exits, and a diary study over ten
            commutes. What surfaced was not a list of features — it was a
            set of <strong>variables</strong> that the campus prototype had
            never been forced to solve for — and two human beings the
            whole service would have to hold up.
          </p>
        </Reveal>

        {/* Personas ----------------------------------------------------- */}

        <div className="svc-personas">
          <Reveal>
            <p className="svc-subhead">Who we designed for</p>
          </Reveal>

          <div className="svc-personas__grid">
            {PERSONAS.map((p, i) => (
              <Reveal key={p.id} delay={0.08 * i}>
                <PersonaCard persona={p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Variables ---------------------------------------------------- */}

        <Reveal>
          <p className="svc-subhead svc-subhead--spaced">
            Four variables the campus prototype never had to solve for
          </p>
        </Reveal>

        <div className="svc-variables">
          <VariableCard
            n="V1"
            title="Scale of demand"
            body="Drivers can’t sense scale of demand in a city. Passengers can’t sense how long to wait."
          />
          <VariableCard
            n="V2"
            title="Unequal shared mobility"
            body="Passenger demand regions and unequal shared-mobility ‘hacks’ created by daily commute patterns."
          />
          <VariableCard
            n="V3"
            title="Rule of the jungle"
            body="Real-city traffic and infrastructure disruption vs. a closed campus loop."
          />
          <VariableCard
            n="V4"
            title="Booking method drift"
            body="Users default to whichever channel is fastest — pole, app, web — and expect state to sync."
          />
        </div>

        <Reveal delay={0.3}>
          <div className="svc-quote-row">
            <RiderQuote
              text="She earlier used to go by auto in the evening and used to face a lot of rejection by drivers due to traffic."
              persona="Field note · MP1:12"
            />
            <RiderQuote
              text="Rickshaw would take me from MIDC pickup pole to Hutatma pole — I missed the metro leg entirely."
              persona="Rider observation"
            />
            <RiderQuote
              text="Share rickshaws are arranged by her company for office employees, but she prefers the AC BEST bus."
              persona="Field note · MP4:7"
            />
          </div>
        </Reveal>

        {/* Problem statement -------------------------------------------- */}

        <ProblemStatement />
      </div>
    </section>
  );
}

function PersonaCard({ persona }) {
  return (
    <article
      className={`svc-persona svc-persona--${persona.tag}`}
      aria-labelledby={`svc-persona-${persona.id}`}
    >
      <header className="svc-persona__head">
        <span className="svc-persona__avatar" aria-hidden="true">
          {persona.initial}
        </span>
        <div className="svc-persona__ident">
          <span className="svc-persona__kicker">{persona.kicker}</span>
          <h3 id={`svc-persona-${persona.id}`} className="svc-persona__name">
            {persona.name}
          </h3>
          <span className="svc-persona__meta">{persona.meta}</span>
        </div>
      </header>

      <p className="svc-persona__story">{persona.story}</p>

      <div className="svc-persona__lists">
        <div className="svc-persona__list">
          <span className="svc-persona__list-k">Wants</span>
          <ul>
            {persona.wants.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div className="svc-persona__list">
          <span className="svc-persona__list-k">Pains</span>
          <ul>
            {persona.pains.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="svc-persona__foot">
        <p>“{persona.quote}”</p>
      </footer>
    </article>
  );
}

function ProblemStatement() {
  return (
    <Reveal delay={0.15}>
      <aside
        className="svc-problem"
        aria-label="Problem statement that carries into the reframe"
      >
        <span className="svc-problem__mark">The problem, in one line</span>
        <p className="svc-problem__body">
          <span>Drivers can’t estimate the scale of demand.</span>
          <span>Passengers don’t know how long to wait.</span>
        </p>
        <p className="svc-problem__foot">
          Between them sits a rule-of-the-jungle city and an unregulated web
          of shared-mobility hacks. Both sides pay for the gap in time, money
          and dignity. The rest of this case study is one attempt to close it.
        </p>
      </aside>
    </Reveal>
  );
}


function VariableCard({ n, title, body }) {
  return (
    <Reveal>
      <article className="svc-variable">
        <span className="svc-variable__n">{n}</span>
        <h3 className="svc-variable__title">{title}</h3>
        <p className="svc-variable__body">{body}</p>
      </article>
    </Reveal>
  );
}

function RiderQuote({ text, persona }) {
  return (
    <figure className="svc-rquote">
      <blockquote>
        <p>“{text}”</p>
      </blockquote>
      <figcaption>{persona}</figcaption>
    </figure>
  );
}

// ---------- 6. The Half User (signature contribution) --------------------

function HalfUser() {
  return (
    <section className="svc-section svc-section--halfuser">
      <div className="svc-container">
        <SectionLabel index={6} tone="paper">A named concept</SectionLabel>

        <div className="svc-halfuser__grid">
          <div className="svc-halfuser__copy">
            <Reveal>
              <h2 className="svc-h2 svc-h2--onDark">
                The Half User —<br />
                <em>the invisible layer,</em> named.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="svc-body svc-body--onDark">
                Human beings are unpredictable variables. Either the vehicle
                waits, or the user loses their predictability. Both are
                failures of the service, not the app.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="svc-body svc-body--onDark">
                <strong>Definition.</strong> A <em>Half User</em> is a person
                who has <em>pledged</em> the journey — declared intent — but
                has not yet acted. They are the leading indicator of demand.
                Every downstream decision — driver dispatch, pole visibility,
                fleet mix — is calibrated off the Half User signal.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="svc-manager-note svc-manager-note--onDark">
                <span className="svc-manager-note__k">Why it travelled —</span>
                Naming a concept the team can rally around is a design
                artifact in its own right. The Half User gave product, ops
                and engineering a shared unit of work; it moved into the
                roadmap without needing translation.
              </p>
            </Reveal>
          </div>

          <div className="svc-halfuser__viz" aria-hidden="true">
            <div className="svc-halfuser__ring">
              <span className="svc-halfuser__fraction">
                <span>½</span>
                <small>user</small>
              </span>
            </div>
            <ul className="svc-halfuser__legend">
              <li><span className="svc-dot svc-dot--intent" /> Intent declared</li>
              <li><span className="svc-dot svc-dot--action" /> Action taken</li>
              <li><span className="svc-dot svc-dot--served" /> Journey completed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- 6.1  How the Half User works (the mechanic) ------------------

const MECHANIC_STATES = [
  {
    id: "quarter",
    frac: "¼",
    label: "Quarter User",
    ring: "150 m +",
    user:
      "Books from home, 150 m or more from the pole. In a 3-seater auto they hold ¼ of a seat — because they have paid and pledged the journey.",
    system:
      "Aggregated ¼-users decide which vehicle type to ready. Nothing leaves the metro station yet.",
  },
  {
    id: "half",
    frac: "½",
    label: "Half User",
    ring: "75 m",
    user:
      "Crosses the pole’s outer 75 m ring. Proximity raises commitment, so their weight in the demand signal rises.",
    system:
      "The pole’s pooled demand crosses a threshold — a vehicle is triggered to move toward it.",
  },
  {
    id: "full",
    frac: "1",
    label: "Full User",
    ring: "20 m",
    user:
      "Arrives within 20 m of the pole. Intent is now certain — a whole seat, a whole user.",
    system:
      "The vehicle is at most 2 minutes away, or already there. Wait time collapses to near zero.",
  },
];

// Radar geometry (viewBox 0 0 470 440), centred on the pole
const R = { cx: 230, cy: 205, full: 58, half: 120, quarter: 185 };

// Dots that migrate inward: [quarter → half → full] positions
const MIGRATIONS = [
  { id: "m1", pts: [[357, 294], [315, 236], [251, 226]], delay: 0 },
  { id: "m2", pts: [[130, 324], [145, 236], [206, 190]], delay: 1.1 },
  { id: "m3", pts: [[308, 71], [199, 120], [232, 168]], delay: 2.2 },
];

// Static context dots (don’t move) to populate the field
const STATIC_DOTS = {
  quarter: [[95, 250], [360, 150], [180, 360]],
  half: [[300, 265], [150, 150]],
  full: [[210, 235]],
};

function VehicleGlyph() {
  return (
    <g>
      <rect x={-13} y={-6} width={26} height={13} rx={4} />
      <rect x={-7} y={-12} width={14} height={8} rx={3} />
      <circle cx={-7} cy={8} r={3} className="svc-radar__wheel" />
      <circle cx={7} cy={8} r={3} className="svc-radar__wheel" />
    </g>
  );
}

function MechanicRadar() {
  const reduce = useReducedMotion();

  return (
    <div
      className="svc-radar"
      role="img"
      aria-label="Concentric radius model: users convert from quarter to half to full as they approach the pole, triggering vehicle dispatch from the metro station."
    >
      <svg viewBox="0 0 470 440" xmlns="http://www.w3.org/2000/svg">
        <circle cx={R.cx} cy={R.cy} r={R.quarter} className="svc-radar__zone svc-radar__zone--q" />
        <circle cx={R.cx} cy={R.cy} r={R.half} className="svc-radar__zone svc-radar__zone--h" />
        <circle cx={R.cx} cy={R.cy} r={R.full} className="svc-radar__zone svc-radar__zone--f" />

        {[0, 45, 90, 135].map((a) => {
          const rad = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={R.cx - R.quarter * Math.cos(rad)}
              y1={R.cy - R.quarter * Math.sin(rad)}
              x2={R.cx + R.quarter * Math.cos(rad)}
              y2={R.cy + R.quarter * Math.sin(rad)}
              className="svc-radar__spoke"
            />
          );
        })}

        {!reduce && (
          <motion.g
            style={{ transformOrigin: `${R.cx}px ${R.cy}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <path
              d={`M ${R.cx} ${R.cy} L ${R.cx + R.quarter} ${R.cy} A ${R.quarter} ${R.quarter} 0 0 0 ${
                R.cx + R.quarter * Math.cos(-0.5)
              } ${R.cy + R.quarter * Math.sin(-0.5)} Z`}
              className="svc-radar__sweep"
            />
          </motion.g>
        )}

        <circle cx={R.cx} cy={R.cy} r={R.quarter} className="svc-radar__ring" />
        <circle cx={R.cx} cy={R.cy} r={R.half} className="svc-radar__ring" />
        <circle cx={R.cx} cy={R.cy} r={R.full} className="svc-radar__ring" />

        {[
          { r: R.quarter, t: "150 m" },
          { r: R.half, t: "75 m" },
          { r: R.full, t: "20 m" },
        ].map(({ r, t }) => {
          const rad = (-35 * Math.PI) / 180;
          const x = R.cx + (r + 16) * Math.cos(rad);
          const y = R.cy + (r + 16) * Math.sin(rad);
          const x0 = R.cx + r * Math.cos(rad);
          const y0 = R.cy + r * Math.sin(rad);
          return (
            <g key={t}>
              <line x1={x0} y1={y0} x2={x} y2={y} className="svc-radar__tick" />
              <text x={x + 4} y={y + 3} className="svc-radar__meter">
                {t}
              </text>
            </g>
          );
        })}

        <text x={R.cx} y={34} className="svc-radar__frac svc-radar__frac--q">¼</text>
        <text x={R.cx} y={98} className="svc-radar__frac svc-radar__frac--h">½</text>
        <text x={R.cx} y={162} className="svc-radar__frac svc-radar__frac--f">1</text>

        <line x1={48} y1={392} x2={182} y2={253} className="svc-radar__dispatch" />

        <g className="svc-radar__station">
          <rect x={20} y={382} width={56} height={22} rx={3} />
          <text x={48} y={397} className="svc-radar__station-t">METRO</text>
        </g>

        {STATIC_DOTS.quarter.map(([x, y], i) => (
          <circle key={`sq${i}`} cx={x} cy={y} r={5} className="svc-radar__dot svc-radar__dot--q" />
        ))}
        {STATIC_DOTS.half.map(([x, y], i) => (
          <circle key={`sh${i}`} cx={x} cy={y} r={5.5} className="svc-radar__dot svc-radar__dot--h" />
        ))}
        {STATIC_DOTS.full.map(([x, y], i) => (
          <circle key={`sf${i}`} cx={x} cy={y} r={6} className="svc-radar__dot svc-radar__dot--f" />
        ))}

        {MIGRATIONS.map(({ id, pts, delay }) =>
          reduce ? (
            <circle key={id} cx={pts[0][0]} cy={pts[0][1]} r={6} className="svc-radar__dot svc-radar__dot--q" />
          ) : (
            <motion.circle
              key={id}
              r={6}
              fill="var(--amber)"
              initial={false}
              animate={{
                cx: pts.map((p) => p[0]),
                cy: pts.map((p) => p[1]),
                fillOpacity: [0.42, 0.72, 1],
                r: [6, 7, 8],
              }}
              transition={{
                duration: 4.5,
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1.4,
                delay,
                ease: "easeInOut",
              }}
            />
          )
        )}

        {reduce ? (
          <g className="svc-radar__vehicle" transform="translate(118,320)">
            <VehicleGlyph />
          </g>
        ) : (
          <motion.g
            className="svc-radar__vehicle"
            initial={false}
            animate={{ x: [0, 0, 134], y: [0, 0, -139], opacity: [0, 0.2, 1] }}
            transition={{
              duration: 4.5,
              times: [0, 0.4, 1],
              repeat: Infinity,
              repeatDelay: 1.4,
              delay: 1.1,
              ease: "easeInOut",
            }}
          >
            <g transform="translate(48,392)">
              <VehicleGlyph />
            </g>
          </motion.g>
        )}

        <g className="svc-radar__pole">
          <circle cx={R.cx} cy={R.cy} r={9} />
          <circle cx={R.cx} cy={R.cy} r={3.5} className="svc-radar__pole-core" />
          <text x={R.cx} y={R.cy + 26} className="svc-radar__pole-t">POLE</text>
        </g>
      </svg>
    </div>
  );
}

function PayoffCard({ k, v, note }) {
  return (
    <Reveal>
      <article className="svc-payoff__card">
        <span className="svc-payoff__k">{k}</span>
        <span className="svc-payoff__v">{v}</span>
        <span className="svc-payoff__note">{note}</span>
      </article>
    </Reveal>
  );
}

function HalfUserMechanic() {
  return (
    <section className="svc-section svc-section--mechanic">
      <div className="svc-container">
        <SectionLabel index="6.1" tone="paper">The mechanic · continues 06</SectionLabel>

        <Reveal>
          <h2 className="svc-h2 svc-h2--onDark">
            A user isn’t 0 or 1.<br />
            They arrive as a <em>fraction</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body svc-body--onDark">
            The human factors that make a commuter unpredictable — when they
            leave, how far they are, whether they’ll actually show — vary from
            person to person. So the service doesn’t wait for certainty. It
            reads <em>partial</em> commitment and acts on it. Two questions
            frame the whole model:
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="svc-keyq" aria-label="Key questions the model answers">
            <li className="svc-keyq__item">
              <span className="svc-keyq__q">
                Human beings are the variable. How do you give a variable
                <em> predictability?</em>
              </span>
            </li>
            <li className="svc-keyq__item">
              <span className="svc-keyq__q">
                How does a driver know which pole has <em>real</em> demand — and
                which vehicle to send?
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="svc-keyq__hold">
            We hold these open here, and close them at the end of the solution.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <MechanicRadar />
        </Reveal>

        <ol className="svc-states" aria-label="Quarter, half and full user states">
          {MECHANIC_STATES.map((s, i) => (
            <Reveal key={s.id} delay={0.08 * i}>
              <li className={`svc-state svc-state--${s.id}`}>
                <header className="svc-state__head">
                  <span className="svc-state__frac">{s.frac}</span>
                  <div className="svc-state__ident">
                    <h3 className="svc-state__label">{s.label}</h3>
                    <span className="svc-state__ring">crosses {s.ring}</span>
                  </div>
                </header>
                <p className="svc-state__user">{s.user}</p>
                <p className="svc-state__system">
                  <span className="svc-state__system-k">System →</span>
                  {s.system}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="svc-formula" aria-label="Demand weighting formula">
            <span className="svc-formula__expr">
              demand<sub>pole</sub> = Σ weight<sub>user</sub>
            </span>
            <span className="svc-formula__note">
              where weight rises with proximity — ¼ → ½ → 1 — and a vehicle is
              dispatched the moment the sum crosses the capacity threshold for
              the chosen vehicle type.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="svc-subhead svc-subhead--onDark">
            So the key questions close themselves
          </p>
        </Reveal>

        <div className="svc-payoff">
          <PayoffCard
            k="Predictability"
            v="Vehicle in sight"
            note="The rider sees a committed vehicle already moving — the wait stops being a guess."
          />
          <PayoffCard
            k="Wait time"
            v="≤ 2 min"
            note="Dispatch is timed to arrival, not to booking. The vehicle meets the user at the pole."
          />
          <PayoffCard
            k="Fleet"
            v="No empty runs"
            note="The right vehicle, sized to real pooled demand, sent only on genuine commitment."
          />
        </div>
      </div>
    </section>
  );
}

// ---------- 7. Service Blueprint ------------------------------------------

const BLUEPRINT_STAGES = [
  {
    id: "plan",
    label: "Plan",
    frontstage: "Rider opens app / walks to pole · sees next-leg plan",
    backstage: "Metro+ predicts demand from Half-User pledges",
    support: "GTFS feed · pole camera counts · weather API",
  },
  {
    id: "pledge",
    label: "Pledge",
    frontstage: "Rider taps ‘I’m coming’ on pole or app · confirms mode",
    backstage: "Half-User signal fires · driver-ETA proposed",
    support: "Driver app · dispatch service · corporate SSO",
  },
  {
    id: "board",
    label: "Board",
    frontstage: "Buggy arrives · rider taps NFC on pole to check in",
    backstage: "Ops rebalances remaining fleet · surge logic paused",
    support: "Pole hardware · payment gateway · driver settlement",
  },
  {
    id: "transit",
    label: "Transit",
    frontstage: "Live ETA on rider screen · silent unless plan changes",
    backstage: "Route re-optimised for downstream half-users",
    support: "Telematics · city traffic feed · SOS channel",
  },
  {
    id: "arrive",
    label: "Arrive",
    frontstage: "Rider drops off · next-leg auto-suggested",
    backstage: "Trip cost split · driver incentive applied",
    support: "Analytics · CSAT prompt · finance ledger",
  },
];

function Blueprint() {
  return (
    <section className="svc-section svc-section--blueprint">
      <div className="svc-container">
        <SectionLabel index={7}>Service blueprint</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            One map the whole organisation<br />
            can read.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body">
            A service blueprint is the single artifact that keeps design,
            engineering, ops and finance honest. Below is a compressed view
            across five journey stages, three layers, and the two evidence
            lines that separate them.
          </p>
        </Reveal>

        <div className="svc-blueprint" role="table" aria-label="Metro+ service blueprint">
          <div className="svc-blueprint__row svc-blueprint__row--header" role="row">
            <span className="svc-blueprint__rowhead">Stage →</span>
            {BLUEPRINT_STAGES.map((s) => (
              <span key={s.id} className="svc-blueprint__stage" role="columnheader">
                {s.label}
              </span>
            ))}
          </div>

          <BlueprintRow
            layer="Frontstage"
            note="What the user sees"
            cells={BLUEPRINT_STAGES.map((s) => s.frontstage)}
            variant="front"
          />
          <div className="svc-blueprint__line svc-blueprint__line--visibility" aria-hidden="true">
            <span>line of visibility</span>
          </div>
          <BlueprintRow
            layer="Backstage"
            note="What Metro+ does"
            cells={BLUEPRINT_STAGES.map((s) => s.backstage)}
            variant="back"
          />
          <div className="svc-blueprint__line svc-blueprint__line--interaction" aria-hidden="true">
            <span>line of internal interaction</span>
          </div>
          <BlueprintRow
            layer="Support"
            note="Systems that hold it up"
            cells={BLUEPRINT_STAGES.map((s) => s.support)}
            variant="support"
          />
        </div>
      </div>
    </section>
  );
}

function BlueprintRow({ layer, note, cells, variant }) {
  return (
    <Reveal>
      <div className={`svc-blueprint__row svc-blueprint__row--${variant}`} role="row">
        <span className="svc-blueprint__rowhead">
          <strong>{layer}</strong>
          <em>{note}</em>
        </span>
        {cells.map((c, i) => (
          <span key={i} className="svc-blueprint__cell" role="cell">
            {c}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

// ---------- 8. Phygital touchpoints ---------------------------------------

function Phygital() {
  const touchpoints = [
    {
      id: "pole",
      k: "Pole",
      title: "The physical anchor",
      body:
        "A weather-proof, low-res, offline-capable display with 4 ATM-style buttons and a wide-angle webcam. The pole is the service’s promise made physical — you don’t need the app to be a customer.",
      stat: "25 poles / metro station · 2 km radius",
    },
    {
      id: "app",
      k: "Rider App",
      title: "The invisible companion",
      body:
        "Plan, pledge, pay, arrive. The rider app’s job is to disappear once the plan is set — silent unless the plan changes. Silence is a design goal.",
      stat: "5 screens · 1 primary action per screen",
    },
    {
      id: "driver",
      k: "Driver App",
      title: "Demand made legible",
      body:
        "Not a Uber-clone. The driver sees Half-User pressure by pole, plus an incentive layer that turns empty runs into future-demand pre-positioning.",
      stat: "3 daily zones · 1 incentive rule",
    },
    {
      id: "web",
      k: "Web / Corporate",
      title: "The B2B channel",
      body:
        "Corporates buy Metro+ passes for staff and see ESG, punctuality and cost-relief metrics. The web dashboard turns the service into an enterprise line-item.",
      stat: "3 dashboards · 1 signed pilot brief",
    },
  ];

  return (
    <section className="svc-section svc-section--phygital">
      <div className="svc-container">
        <SectionLabel index={8}>Phygital touchpoints</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            Four touchpoints.<br />
            One service. One state.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body">
            Every touchpoint reads and writes to the same state — the
            Half-User pledge. That constraint is what made the phygital system
            feel like one product instead of four.
          </p>
        </Reveal>

        <ul className="svc-touchpoints">
          {touchpoints.map((t) => (
            <Reveal key={t.id}>
              <li className="svc-touchpoint">
                <span className="svc-touchpoint__k">{t.k}</span>
                <h3 className="svc-touchpoint__title">{t.title}</h3>
                <p className="svc-touchpoint__body">{t.body}</p>
                <span className="svc-touchpoint__stat">{t.stat}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- 9. Validation --------------------------------------------------

function Validation() {
  const findings = [
    {
      q: "Can riders understand the offering?",
      before: "3 / 12 completed the plan without help",
      after: "11 / 12 completed after IA + pole-map redesign",
      change: "+267%",
    },
    {
      q: "Can riders see end-to-end cost and time?",
      before: "Missed the metro leg entirely in 4 / 12 tasks",
      after: "0 / 12 missed after journey-strip pattern",
      change: "-100%",
    },
    {
      q: "Do drivers trust the demand signal?",
      before: "4 / 6 drivers overrode the app in day 1",
      after: "1 / 6 overrode by day 3 (incentive rule tuned)",
      change: "-75%",
    },
  ];

  return (
    <section className="svc-section svc-section--validation">
      <div className="svc-container">
        <SectionLabel index={9}>Validation</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            Testing wasn’t confirmation.<br />
            It was <em>calibration</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body">
            Twelve riders, six drivers, three key questions. Each round moved
            a number, not an opinion. Testing was calibration — the moment the
            service was allowed to be wrong in front of real people and get
            better because of it.
          </p>
        </Reveal>

        <table className="svc-findings" aria-label="Usability testing findings">
          <thead>
            <tr>
              <th>Key question</th>
              <th>Before</th>
              <th>After</th>
              <th>Δ</th>
            </tr>
          </thead>
          <tbody>
            {findings.map((f, i) => (
              <tr key={i}>
                <td>{f.q}</td>
                <td>{f.before}</td>
                <td>{f.after}</td>
                <td className="svc-findings__delta">{f.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ---------- 10. Commercial case -------------------------------------------

function Commercial() {
  return (
    <section className="svc-section svc-section--commercial">
      <div className="svc-container">
        <SectionLabel index={10} tone="paper">Commercial case</SectionLabel>

        <Reveal>
          <h2 className="svc-h2 svc-h2--onDark">
            Service design pays.<br />
            Here is the arithmetic.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body svc-body--onDark">
            Service design only lands if it survives a P&amp;L conversation.
            Metro+ was pitched to BMC as a DBO (design-build-operate)
            proposal with an MVP scoped to Mumbai’s Aqua Line.
          </p>
        </Reveal>

        <div className="svc-numbers">
          <NumberCard k="TAM · daily commuters" v="9.9 L" note="TOI, 2025 · Aqua Line corridor" />
          <NumberCard k="Ticket · one way" v="₹20" note="Positioned at rickshaw parity" />
          <NumberCard k="Revenue · Yr 1" v="₹48.5 Cr" note="Fares + ads + corporate passes" />
          <NumberCard k="Cost · Yr 1" v="₹13.65 Cr" note="Fleet lease, energy, labour, ops" />
          <NumberCard k="Operating profit" v="₹34.85 Cr" note="Yr-1 · pre-scale" highlight />
        </div>

        <Reveal delay={0.35}>
          <p className="svc-manager-note svc-manager-note--onDark">
            <span className="svc-manager-note__k">The number that mattered —</span>
            The headline number is not the ₹34.85 Cr. It is the
            <em> predictability index </em> — the share of Half-User pledges
            that converted within their promised window. Every commercial
            number follows from that one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function NumberCard({ k, v, note, highlight = false }) {
  return (
    <Reveal>
      <article className={`svc-number ${highlight ? "svc-number--hi" : ""}`}>
        <span className="svc-number__k">{k}</span>
        <span className="svc-number__v">{v}</span>
        <span className="svc-number__note">{note}</span>
      </article>
    </Reveal>
  );
}

// ---------- 11. Practice --------------------------------------------------

function Practice() {
  const items = [
    {
      k: "Strategy at the brief",
      body:
        "The brief was widened from an artifact to a service; predictability was set as the north-star metric the programme could steer by.",
    },
    {
      k: "Research at scale",
      body:
        "22 rider interviews, 8 driver ride-alongs and a 10-commute diary study; findings translated into personas, variables and the Half-User concept.",
    },
    {
      k: "Interaction & information design",
      body:
        "A journey-strip pattern, the pole’s 4-button IA and the driver-app demand map — one shared state across four touchpoints.",
    },
    {
      k: "Design system tokens",
      body:
        "Phygital tokens — pole type, tap targets, offline states — defined so future DBO bidders could inherit the vocabulary intact.",
    },
    {
      k: "Cross-functional facilitation",
      body:
        "Role-play workshops with product, ops, hardware and finance surfaced the pricing-vs-incentive tension early and closed it in weeks.",
    },
    {
      k: "Concept authorship",
      body:
        "The Half-User concept made service design legible to a room that had only ever bought screens.",
    },
    {
      k: "Multi-audience narrative",
      body:
        "Riders heard ‘the next leg is handled’; drivers heard ‘less empty running’; BMC heard ‘capacity utilisation’. Same service, three languages.",
    },
    {
      k: "Regulated / procurement context",
      body:
        "The work sat inside DBO procurement and city-transit constraints, navigating privacy on pole cameras and safety on driver telematics.",
    },
  ];

  return (
    <section className="svc-section svc-section--manager">
      <div className="svc-container">
        <SectionLabel index={11}>Practice</SectionLabel>

        <Reveal>
          <h2 className="svc-h2">
            Eight moves that made the<br />
            service <em>hold together</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="svc-body">
            The methods, artifacts and decisions the case study is built on —
            each one is a load-bearing piece of the final service.
          </p>
        </Reveal>

        <ul className="svc-lens">
          {items.map((l, i) => (
            <Reveal key={i}>
              <li className="svc-lens__item">
                <span className="svc-lens__k">{l.k}</span>
                <p className="svc-lens__body">{l.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------- 12. Close ------------------------------------------------------

function Close() {
  return (
    <footer className="svc-close">
      <div className="svc-container">
        <Reveal>
          <p className="svc-close__lede">One line to leave with</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="svc-close__line">
            Good service design makes the invisible
            <em> visible </em>— and holds the whole system accountable to it.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="svc-close__meta">
            <span>Metro+ · Service Design Case Study</span>
            <span>Kushagra Tripathi · IIT Bombay ePGD · 2026</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

// ---------- Page ----------------------------------------------------------

function MetroPlusServiceDesignPage({ theme = "light" }) {
  usePageTitle(
    theme === "dark"
      ? "Metro+ · Service Design · Dark · Kushagra Tripathi"
      : "Metro+ · Service Design · Kushagra Tripathi"
  );

  return (
    <main className={`svc-page svc-page--${theme}`}>
      <Hero />
      <Discipline />
      <Process />
      <BriefRevised />
      <Ecosystem />
      <Research />
      <HalfUser />
      <HalfUserMechanic />
      <Blueprint />
      <Phygital />
      <Validation />
      <Commercial />
      <Practice />
      <Close />
    </main>
  );
}

export default function MetroPlusServiceDesign() {
  return <MetroPlusServiceDesignPage theme="light" />;
}

export function MetroPlusServiceDesignDark() {
  return <MetroPlusServiceDesignPage theme="dark" />;
}
