import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

export default function SeizingSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-seizing" className="mo-section">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Seizing the Moment</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              Nobody asked for a motion system. I pitched one anyway.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                A few weeks later, the stars aligned. Senior leadership visited
                the India Technology & Engineering Center. CXOs had come with a
                vision to push the product into a new direction. They wanted
                the digital experience to feel as modern as the competitors
                that were gaining ground.
              </p>
              <p>
                We had been brainstorming with designers and product managers,
                sketching ideas on FigJam boards. When the opportunity came up,
                I packaged our thinking into a concise pitch and presented it
                to the CXOs directly. The idea grabbed their attention right
                away.
              </p>
              <p>
                That single presentation turned a cafeteria conversation into a
                funded initiative with cross-functional support. No formal
                brief. No RFP. Just a designer who saw a gap and had the
                conviction to fill it.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="mo-placeholder" style={{ aspectRatio: "16 / 9", marginTop: 48 }}>
              <span className="mo-placeholder__label">
                Snapshot of the final Motion Guidelines
              </span>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
