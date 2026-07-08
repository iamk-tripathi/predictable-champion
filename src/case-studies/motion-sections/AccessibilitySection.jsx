import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const A11Y_PRINCIPLES = [
  {
    title: "Perceivable",
    desc: "Motion must not be the sole carrier of information. Every animated state change has a static fallback that conveys the same meaning.",
  },
  {
    title: "Operable",
    desc: "Animations never block interaction. Users can tap, scroll, or navigate at any point. Motion yields to input, always.",
  },
  {
    title: "Understandable",
    desc: "Motion reinforces the mental model. Transitions show where elements came from and where they're going, reducing cognitive disorientation.",
  },
  {
    title: "Robust",
    desc: "The system respects prefers-reduced-motion at every level. When reduced motion is active, animations are replaced with instant state changes. No degraded experience.",
  },
];

export default function AccessibilitySection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-a11y" className="mo-section mo-section--subtle">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Accessibility</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              We pressure-tested our assumptions. One user changed everything.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                During our initial user tests, an older gentleman watching one
                of our prototypes paused and said quietly, "Dear lord,
              something moved. I wasn't able to pay attention." It wasn't a
                complaint. It was a revelation.
              </p>
              <p>
                We had been so focused on making things feel alive that we'd
                overlooked a fundamental truth: motion accessibility doesn't
                work the same way as visual accessibility. You can't just add
                alt text to an animation. The motion itself can be the barrier.
              </p>
              <p>
                So we took a step back and built an accessibility framework
                specifically for motion, grounded in the same WCAG principles
                but adapted for the unique challenges of animated interfaces.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="mo-a11y-grid">
              {A11Y_PRINCIPLES.map((p) => (
                <div key={p.title} className="mo-a11y-card">
                  <div className="mo-a11y-card__title">{p.title}</div>
                  <div className="mo-a11y-card__desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <blockquote className="mo-quote">
              "Dear lord, something moved. I wasn't able to pay attention."
              <span className="mo-quote__attribution">
                User testing participant, the moment that reshaped our
                accessibility approach
              </span>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
