import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedCounter from "../components/AnimatedCounter";

export default function ImpactSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-impact" className="mo-section">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Impact</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline mo-headline--serif">
              "It feels like our app finally moves the way money does. Fast,
              clear, and confident."
            </h2>
            <p className="mo-caption" style={{ marginTop: -12, marginBottom: 40 }}>
              Devin McGranahan, CEO, Western Union
            </p>
          </RevealOnScroll>

          {/* Metrics */}
          <RevealOnScroll delay={0.08}>
            <div className="mo-stat-grid">
              <div className="mo-stat-card">
                <span className="cs-counter" style={{ color: "var(--mo-accent)" }}>
                  <AnimatedCounter value={6} suffix="+" inline />
                </span>
                <span className="mo-stat-card__label">
                  Product teams adopted the motion system
                </span>
              </div>

              <div className="mo-stat-card">
                <span className="cs-counter" style={{ color: "var(--mo-accent)" }}>
                  <AnimatedCounter value={28} suffix="%" inline />
                </span>
                <span className="mo-stat-card__label">
                  Reduction in QA time for animation bugs
                </span>
              </div>

              <div className="mo-stat-card">
                <span className="cs-counter" style={{ color: "var(--mo-accent)" }}>
                  <AnimatedCounter value={1} inline />
                </span>
                <span className="mo-stat-card__label">
                  Shared language created across design and development
                </span>
              </div>

              <div className="mo-stat-card">
                <span className="cs-counter" style={{ color: "var(--mo-accent)" }}>
                  <AnimatedCounter value={12} inline />
                </span>
                <span className="mo-stat-card__label">
                  Standardized Beat tokens in the motion system
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
