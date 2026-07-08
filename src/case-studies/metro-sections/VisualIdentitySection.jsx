import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const SWATCHES = [
  { name: "Trust Blue", hex: "#1F6DF0", role: "Primary action, brand, navigation" },
  { name: "Deep Navy", hex: "#0D3D8E", role: "Headers, dark surfaces" },
  { name: "Signal Green", hex: "#3DDC84", role: "Live state · ETA, on-trip, success" },
  { name: "Off-White", hex: "#F4F7FB", role: "Light surfaces, default canvas" },
  { name: "Slate", hex: "#0D1A30", role: "Text on light, ink" },
];

export default function VisualIdentitySection() {
  return (
    <ScrollSection id="metro-visual">
      <RevealOnScroll>
        <SectionLabel dark={false}>10 · Visual identity</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Boring blue. Loud green. A logo that hides a "+".
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            The visual identity does one job: be quiet enough that ETA changes
            and live status read instantly, then get out of the way. Primary
            blue carries authority. Riders are trusting us with their
            commute. Green is reserved for live state: ETA, on-trip,
            confirmed. Nothing else is allowed to use it.
          </p>
        </div>
      </RevealOnScroll>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
        {SWATCHES.map((s, i) => (
          <RevealOnScroll key={s.name} delay={0.04 * i}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--cs-border-light)", background: "#fff" }}>
              <div style={{ height: 96, background: s.hex }} />
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--cs-text-secondary-light)" }}>
                  {s.hex}
                </div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--cs-text-primary-dark)", margin: "2px 0 4px" }}>
                  {s.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--cs-text-secondary-light)", lineHeight: 1.4 }}>
                  {s.role}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="metro-two-col" style={{ marginTop: 56 }}>
        <RevealOnScroll delay={0.15}>
          <div className="metro-3c">
            <span className="metro-3c__label">Typography</span>
            <h4 className="metro-3c__title">Two faces, one job each.</h4>
            <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--cs-text-secondary-light)", lineHeight: 1.5 }}>
              <strong>Satoshi</strong> for UI: high legibility at small sizes,
              numeric tabular for ETAs. <strong>Instrument Serif</strong> for
              emotional surfaces: onboarding, empty states, marketing.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="metro-3c">
            <span className="metro-3c__label">Logo</span>
            <h4 className="metro-3c__title">The "+" earns its meaning.</h4>
            <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--cs-text-secondary-light)", lineHeight: 1.5 }}>
              The plus isn't a typographic flourish. It marks the moment
              Metro+ stops being a metro app and becomes the system that
              owns the gap between modes. The plus is the last mile.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
