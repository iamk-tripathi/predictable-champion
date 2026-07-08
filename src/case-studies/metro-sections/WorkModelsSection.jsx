import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

export default function WorkModelsSection() {
  return (
    <ScrollSection dark id="metro-work-models">
      <RevealOnScroll>
        <SectionLabel dark>05 · Work models</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Two models. Two different ways of
          <br />
          telling the same story.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            We built two work models on top of the affinity findings: a{" "}
            <strong>cultural model</strong> (how social pressure, gender, and
            class shape who shares with whom) and a <strong>flow model</strong>{" "}
            (how information and people physically move through a single
            commute). The flow model became the load-balancing brief later in
            the project.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-work-grid">
        <RevealOnScroll delay={0.15}>
          <div className="metro-work-card" style={{ background: "rgba(168,200,251,0.06)", borderColor: "var(--cs-border)", color: "var(--cs-text-primary)" }}>
            <span className="metro-work-card__type" style={{ color: "var(--cs-accent)" }}>Cultural model</span>
            <h3 className="metro-work-card__title" style={{ color: "#fff" }}>The Riviera effect: who shares with whom.</h3>
            <p className="cs-body" style={{ fontSize: "1rem", margin: 0, color: "var(--cs-blue-100)" }}>
              Shared autos and metros are not neutral spaces. Riders silently
              filter co-passengers by gender, perceived class, time of day,
              and group size. Any "shared" product had to give the rider
              <em> agency in who they shared with</em>, not just whether they shared.
            </p>
            <div className="metro-pole-card__placeholder" style={{ minHeight: 180, marginTop: 8 }}>
              Cultural model diagram · drop <code>/metro-cultural-model.jpg</code>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="metro-work-card" style={{ background: "rgba(61,220,132,0.06)", borderColor: "rgba(61,220,132,0.2)", color: "var(--cs-text-primary)" }}>
            <span className="metro-work-card__type" style={{ color: "var(--cs-accent-green)" }}>Flow model</span>
            <h3 className="metro-work-card__title" style={{ color: "#fff" }}>How information lags behind people.</h3>
            <p className="cs-body" style={{ fontSize: "1rem", margin: 0, color: "var(--cs-blue-100)" }}>
              At every step (arriving at the stop, boarding, paying,
              transferring) the rider made decisions on stale or absent
              information. The system knew. The driver knew. The rider didn't.
              That mismatch was the predictability gap, in one diagram.
            </p>
            <div className="metro-pole-card__placeholder" style={{ minHeight: 180, marginTop: 8 }}>
              Flow model diagram · drop <code>/metro-flow-model.jpg</code>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
