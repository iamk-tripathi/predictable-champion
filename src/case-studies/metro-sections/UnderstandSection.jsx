import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const NUMBERS = [
  { value: "18", label: "Contextual inquiries across two cities" },
  { value: "12", label: "Travellers (5 IIT, 7 metro)" },
  { value: "4", label: "Drivers across buggy + auto" },
  { value: "2", label: "Administrators (operations + ops)" },
];

const TAXONOMY = [
  { code: "OB", label: "Observation", desc: "What was actually happening in front of me." },
  { code: "BD", label: "Breakdown", desc: "Where the current experience fell apart." },
  { code: "IN", label: "Intent", desc: "What the user was trying to do, not what they said." },
  { code: "US", label: "User trigger", desc: "Stated needs, complaints, workarounds." },
  { code: "DI", label: "Design idea", desc: "Hypotheses we logged for later." },
  { code: "QU", label: "Question", desc: "What I still didn't know after the session." },
];

export default function UnderstandSection() {
  return (
    <ScrollSection dark id="metro-understand">
      <RevealOnScroll>
        <SectionLabel dark>03 · Understand</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          The buggies were running. The system wasn't.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            We ran 18 contextual inquiries across two contexts: the IIT Bombay
            campus and four Mumbai Metro stations. The brief was to design for
            the campus, but the goal was always to design a pattern that would
            generalise. Every session was paired (one interviewer, one note-taker),
            audio-recorded, and immediately coded against a shared interpretation taxonomy.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-numbers">
        {NUMBERS.map((n, i) => (
          <RevealOnScroll key={n.value} delay={0.05 * i}>
            <div className="metro-number">
              <span className="metro-number__value">{n.value}</span>
              <div className="metro-number__label">{n.label}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.15}>
        <h3
          className="cs-headline"
          style={{ fontSize: "1.6rem", marginTop: 56, marginBottom: 16 }}
        >
          Interpretation taxonomy
        </h3>
        <p className="cs-caption" style={{ marginBottom: 24, maxWidth: 720 }}>
          Every line of every transcript was tagged with one of six codes. This
          turned 100+ hours of raw audio into a queryable dataset, and forced
          us to separate observation from inference before we ever opened the
          affinity wall.
        </p>
      </RevealOnScroll>

      <div className="metro-3c-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {TAXONOMY.map((t, i) => (
          <RevealOnScroll key={t.code} delay={0.04 * i}>
            <div className="metro-3c">
              <span className="metro-3c__label">{t.code}</span>
              <h4 className="metro-3c__title">{t.label}</h4>
              <p style={{ margin: 0, fontSize: "0.92rem", color: "var(--cs-text-secondary-light)", lineHeight: 1.5 }}>
                {t.desc}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Artifacts strip · placeholders */}
      <RevealOnScroll delay={0.2}>
        <h3 className="cs-headline" style={{ fontSize: "1.6rem", marginTop: 56, marginBottom: 16 }}>
          Glimpse of artifacts
        </h3>
      </RevealOnScroll>
      <div className="metro-artifacts">
        {["Buggy stop · evening", "Driver tablet UI", "Metro pole queue", "Auto stand · monsoon", "Field transcripts"].map((label, i) => (
          <RevealOnScroll key={label} delay={0.04 * i}>
            <div className="metro-artifact">{label}</div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
}
