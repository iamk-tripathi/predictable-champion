import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

export default function NavigationSection() {
  return (
    <ScrollSection dark id="metro-navigation">
      <RevealOnScroll>
        <SectionLabel dark>09 · Wireframing &amp; navigation</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Paper first. Three sketches before any pixel.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            With the IA locked, the team sketched on paper for a week: three
            variations per screen, posted on the studio wall, voted on by the
            team and three external riders we'd already interviewed. Only the
            sketches that survived made it into wireframes.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-artifacts" style={{ marginTop: 32 }}>
        {[
          "Sketch · Home (3 variants)",
          "Sketch · Search",
          "Sketch · Journey Preview",
          "Sketch · Active Journey",
          "Sketch · Driver app",
        ].map((label, i) => (
          <RevealOnScroll key={label} delay={0.04 * i}>
            <div className="metro-artifact">{label}</div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2}>
        <h3 className="cs-headline" style={{ fontSize: "1.4rem", marginTop: 56, marginBottom: 8 }}>
          The navigation problem.
        </h3>
      </RevealOnScroll>

      <div className="metro-two-col" style={{ marginTop: 16 }}>
        <RevealOnScroll delay={0.22}>
          <div style={{ padding: 24, borderRadius: 12, background: "rgba(255,98,102,0.08)", border: "1px solid rgba(255,98,102,0.3)" }}>
            <span className="metro-3c__label" style={{ color: "var(--cs-error)" }}>Problem</span>
            <p className="cs-body" style={{ margin: "12px 0 0", fontSize: "1rem", color: "var(--cs-blue-100)" }}>
              Riders forget which mode they're in (solo vs shared, metro vs
              buggy) the moment they switch context: taking a call, paying,
              changing leg. Tab bars get lost. Hamburgers hide everything.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.28}>
          <div style={{ padding: 24, borderRadius: 12, background: "rgba(61,220,132,0.08)", border: "1px solid rgba(61,220,132,0.3)" }}>
            <span className="metro-3c__label" style={{ color: "var(--cs-accent-green)" }}>Solution</span>
            <p className="cs-body" style={{ margin: "12px 0 0", fontSize: "1rem", color: "var(--cs-blue-100)" }}>
              A persistent <strong>"journey strip"</strong> docked to the top of
              every screen: current leg, next leg, ETA, one-tap escape. The
              tab bar handles navigation; the strip handles context. The two
              never compete for the same job.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
