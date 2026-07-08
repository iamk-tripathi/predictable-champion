import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const MOTION_ATTRIBUTES = [
  "Fade In & Out",
  "Transformation",
  "Morphing",
  "Masking",
  "Dimension",
  "Parallax",
  "Zoom",
];

const LEARNINGS = [
  "Tokenization is the bridge between design intent and development output.",
  "Microinteractions carry macro impact when they're grounded in user need.",
  "Good motion doesn't call attention to itself. It just feels right.",
  "Adoption is a design problem, not a documentation problem.",
  "Accessibility for motion requires its own framework, not retrofitted visual accessibility.",
];

export default function ReflectionsSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-reflections" className="mo-section mo-section--subtle">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Reflections</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              What I learned about designing systems, not screens.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                This project changed how I think about design work. Building a
                motion system for a company this size isn't about making things
                look polished. It's about creating a shared language that
                scales across teams, markets, and products without losing its
                soul.
              </p>
              <p>
                The hardest part wasn't the design. It was the alignment. Getting
                engineers to trust that motion specs were worth following.
                Getting product managers to allocate sprint time for animation
                polish. Getting QA to treat a janky transition with the same
                seriousness as a broken button.
              </p>
            </div>
          </RevealOnScroll>

          {/* Learnings */}
          <RevealOnScroll delay={0.12}>
            <ul className="mo-collab-list">
              {LEARNINGS.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* What's next */}
          <RevealOnScroll delay={0.16}>
            <div className="mo-body" style={{ marginTop: 48 }}>
              <h3 className="mo-headline" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
                What's next
              </h3>
              <p>
                We identified various UI pattern attributes where motion could
                be standardized further. These will be defined as directional
                specifications for designers and developers to use directly in
                their work.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mo-attributes">
              {MOTION_ATTRIBUTES.map((a) => (
                <span key={a} className="mo-attribute-tag">{a}</span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Closing */}
      <section className="mo-section mo-section--full" style={{ minHeight: "60dvh" }}>
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner" style={{ textAlign: "center" }}>
          <RevealOnScroll>
            <p className="mo-closing-line">
              "Good motion doesn't ask for attention.
              <br />
              It <em>earns trust</em>."
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <p className="mo-caption" style={{ marginTop: 40, textAlign: "center" }}>
              Thank you for reading.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
