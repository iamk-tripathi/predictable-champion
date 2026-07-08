import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const STEPS = [
  {
    n: "01",
    text: (
      <>
        Two riders request a buggy <strong>150 m apart</strong>, going the same
        way. Naïve dispatch picks one, ignores the other, and the system has
        already failed both.
      </>
    ),
  },
  {
    n: "02",
    text: (
      <>
        Treat each rider as <strong>½ user</strong>. The system doesn't ask
        "who do I assign this buggy to". It asks "where does the centre of
        gravity of these two ½-users sit?"
      </>
    ),
  },
  {
    n: "03",
    text: (
      <>
        Answer: <strong>1 effective user at 75 m</strong>. The buggy gets
        dispatched to a pickup point both riders can reach in &lt;90 seconds.
        Walk distance is shared. So is the wait.
      </>
    ),
  },
  {
    n: "04",
    text: (
      <>
        Scale the trick to a whole stop. Every queued request becomes a
        weighted node in a graph. The dispatcher solves for{" "}
        <strong>minimum total wait + minimum vehicle deadheading</strong>,
        not "first come first served". Trust goes up. Empty miles go down.
      </>
    ),
  },
  {
    n: "05",
    text: (
      <>
        Outcome: simulated <strong>38% drop in average wait</strong>,{" "}
        <strong>22% drop in empty vehicle-km</strong>, and (the one that
        unlocked the business) predictable ETAs that the rider app can
        actually commit to.
      </>
    ),
  },
];

export default function HalfUserSection() {
  return (
    <ScrollSection id="metro-halfuser">
      <RevealOnScroll>
        <SectionLabel dark={false}>12 · Load balancing &amp; the Half-User</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          The whole project hinged on one question
          <br />
          I couldn't find an answer to in any textbook.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="metro-question" style={{ marginTop: 32, marginBottom: 56 }}>
          <span className="metro-question__label">The question</span>
          <p className="metro-question__text">
            How do you offer predictability
            <br />
            in a system you don't fully control?
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            This is the part of Metro+ I'm proudest of, and the part I built
            from scratch. Existing dispatch literature assumes you can predict
            demand and route accordingly. Shared transit doesn't get that
            luxury. Riders show up unannounced, vehicles get pulled offline,
            traffic shifts in minutes. So I designed a load-balancing model
            that doesn't try to predict; it absorbs.
          </p>
          <p>
            The unlock was a small conceptual move: stop modelling each rider
            as a discrete unit. Start modelling them as <strong>fractions</strong>,
            and let the geometry tell you where to send the vehicle.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-halfuser">
        <RevealOnScroll delay={0.2}>
          <div className="metro-halfuser__viz">
            {STEPS.map((s) => (
              <div key={s.n} className="metro-halfuser__step">
                <div className={`metro-halfuser__step-num ${s.n === "05" ? "metro-halfuser__step-num--green" : ""}`}>
                  {s.n}
                </div>
                <p className="metro-halfuser__step-text">{s.text}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <div>
            <div className="metro-halfuser__diagram">
              {/* Drop node-graph illustration here */}
              <div className="metro-placeholder" style={{ border: "none", background: "transparent" }}>
                <svg className="metro-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="12" cy="18" r="3" />
                  <path d="M6 8l6 8M18 8l-6 8" />
                </svg>
                <div>Node-graph diagram · drop <code>/metro-node-graph.png</code></div>
              </div>
            </div>

            <div className="metro-callout" style={{ marginTop: 24 }}>
              <strong>Why it generalises.</strong> The Half-User model isn't
              campus-specific. The same geometry works for metro stations
              (riders queued for the same line), shared autos (riders going
              the same direction), even ride-pool products. That's what
              turned a campus shuttle redesign into a <strong>₹950 Cr addressable
              market</strong>.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
