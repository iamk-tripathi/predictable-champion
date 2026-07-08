import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const SCREENS = [
  { label: "Metro Ticket", file: `${import.meta.env.BASE_URL}metro-screen-ticket.png` },
  { label: "Home", file: `${import.meta.env.BASE_URL}metro-screen-home.png` },
  { label: "Journey Overview", file: `${import.meta.env.BASE_URL}metro-screen-journey.png` },
  { label: "Final Ticket", file: `${import.meta.env.BASE_URL}metro-screen-final.png` },
  { label: "Active Trip", file: `${import.meta.env.BASE_URL}metro-screen-active.png` },
];

export default function SolutionSection() {
  return (
    <ScrollSection dark id="metro-solution">
      <RevealOnScroll>
        <SectionLabel dark>11 · Metro+</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          The whole product, on one rider's screen.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            Five screens carry 90% of the rider's time. The other 10% (wallet,
            history, settings) is intentionally one tap deeper. Every screen
            answers a question the rider already has, before they have to ask
            it.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-screens">
        {SCREENS.map((s, i) => (
          <RevealOnScroll key={s.label} delay={0.06 * i}>
            <div className="metro-screen">
              <div className="metro-screen__frame">
                <div className="metro-placeholder" style={{ borderRadius: 0 }}>
                  <div style={{ fontSize: "0.72rem" }}>{s.label}</div>
                  <div style={{ fontSize: "0.68rem", opacity: 0.7 }}>{s.file}</div>
                </div>
              </div>
              <div className="metro-screen__label">{s.label}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="metro-pole-grid">
        <RevealOnScroll delay={0.15}>
          <div className="metro-pole-card metro-pole-card--dark">
            <span className="metro-3c__label" style={{ color: "var(--cs-accent)" }}>Hardware</span>
            <h3 className="metro-pole-card__title">The pole: shared truth at the waiting point.</h3>
            <p className="cs-body" style={{ fontSize: "0.98rem", margin: 0, color: "var(--cs-blue-100)" }}>
              A simple solar-powered display at every stop showing live ETA,
              vehicle id, and seats remaining. No app required to use the
              system at the basic level, which means we never strand a
              rider whose phone has died or who doesn't have data.
            </p>
            <div className="metro-pole-card__placeholder" style={{ background: "rgba(168,200,251,0.05)", color: "var(--cs-text-secondary)" }}>
              Pole prototype render · drop <code>/metro-pole.png</code>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="metro-pole-card metro-pole-card--dark">
            <span className="metro-3c__label" style={{ color: "var(--cs-accent-green)" }}>Driver app</span>
            <h3 className="metro-pole-card__title">Hindi-first, instruction-only.</h3>
            <p className="cs-body" style={{ fontSize: "0.98rem", margin: 0, color: "var(--cs-blue-100)" }}>
              Drivers see one instruction at a time. Voice cue for the next
              pickup. No map clutter, no menu, no chat. The only buttons are
              "arrived", "started", and an SOS. Built around what drivers
              actually do, not what app designers think they should do.
            </p>
            <div className="metro-pole-card__placeholder" style={{ background: "rgba(168,200,251,0.05)", color: "var(--cs-text-secondary)" }}>
              Driver app screen · drop <code>/metro-driver-app.png</code>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
