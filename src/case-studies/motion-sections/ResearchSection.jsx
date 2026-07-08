import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const COMPETITORS = [
  {
    name: "Stripe",
    insight: "Subtle entrance animations that reduce perceived load time without pulling attention away from conversion flows.",
  },
  {
    name: "Google Material",
    insight: "Systematic approach to duration and easing. Very structured but often too rigid for brand expression.",
  },
  {
    name: "Spotify",
    insight: "Playful transitions that reinforce brand personality. Proof that motion can carry emotional tone.",
  },
  {
    name: "Audi",
    insight: "Premium, restrained motion language that mirrors the brand's precision engineering. Every transition feels deliberate and considered.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Intentional",
    desc: "Motion should guide, not distract. Every animation needs a purpose: directing attention, confirming an action, or reducing cognitive load. If it doesn't serve the user, it doesn't belong.",
  },
  {
    number: "02",
    title: "Realistic",
    desc: "Rooted in natural physics: easing, inertia, momentum. Nothing should feel artificial or overshoot without reason. Movement in our product should feel like it belongs in the real world.",
  },
  {
    number: "03",
    title: "Energetic & Witty",
    desc: "Western Union's brand identity is human, confident, and approachable. Our motion should reflect that same personality. It should have character without being childish.",
  },
];

export default function ResearchSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-research" className="mo-section mo-section--subtle">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Research & Foundations</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              We studied 25+ motion systems before writing a single keyframe.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                When a project has the potential to touch multiple products
                across multiple markets, you can't just start designing. We
                began by looking at what the best in the industry were doing,
                and more importantly, what they were getting wrong.
              </p>
              <p>
                We analyzed motion systems from Stripe, Google, Spotify,
                Audi, Revolut, and 20+ others. We weren't looking to copy.
                We were looking for patterns. What made some microinteractions
                feel natural while others felt like decoration? What separated
                motion that helped users from motion that just added visual
                noise?
              </p>
            </div>
          </RevealOnScroll>

          {/* FigJam board from brainstorming */}
          <RevealOnScroll delay={0.1}>
            <div className="mo-placeholder" style={{ aspectRatio: "16 / 9", marginTop: 40 }}>
              <span className="mo-placeholder__label">
                FigJam Board from our brainstorming session
              </span>
            </div>
          </RevealOnScroll>

          {/* Competitor insights */}
          <RevealOnScroll delay={0.12}>
            <div style={{ marginTop: 48 }}>
              <h3 className="mo-headline" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
                What we learned
              </h3>
              <div className="mo-a11y-grid">
                {COMPETITORS.map((c) => (
                  <div key={c.name} className="mo-a11y-card">
                    <div className="mo-a11y-card__title">{c.name}</div>
                    <div className="mo-a11y-card__desc">{c.insight}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Key observations */}
          <RevealOnScroll delay={0.16}>
            <div className="mo-body" style={{ marginTop: 48 }}>
              <p>
                Three patterns stood out clearly: overuse of bounce led to
                user fatigue. Poor easing made interfaces feel either sluggish
                or hyperactive. And the systems that got it right shared one
                thing in common: meaningful motion made things simpler instead
                of adding visual noise.
              </p>
              <p>
                One key insight from our research was that the best motion
                systems don't exist in isolation. They follow the company's
                brand identity. A fintech product should move differently from
                a social media app. So we went back to Western Union's brand
                guidelines and distilled three motion principles directly from
                the brand's core values.
              </p>
            </div>
          </RevealOnScroll>

          {/* Design principles — elevated */}
          <RevealOnScroll delay={0.2}>
            <p className="mo-principles__prelude">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Derived from Western Union's Brand Identity
            </p>
            <div className="mo-principles">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="mo-principle-card">
                  <span className="mo-principle-card__number">{p.number}</span>
                  <div className="mo-principle-card__title">{p.title}</div>
                  <div className="mo-principle-card__desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
