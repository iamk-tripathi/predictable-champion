import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const FINDINGS = [
  {
    problem: "Problem 01 · Trust gap",
    quote:
      "I don't believe the ETA. So I'd still leave 10 minutes early, which defeats the whole thing.",
    resolution: (
      <>
        Added a <strong>confidence band</strong> on the ETA (e.g. "3–5 min")
        instead of a single number. Riders stopped over-budgeting; trust
        scores moved from 4.2 → 8.1 on a 10-point scale.
      </>
    ),
  },
  {
    problem: "Problem 02 · Share consent friction",
    quote:
      "I had to dig two screens deep to set my share preferences. I just want to say 'women only' once and move on.",
    resolution: (
      <>
        Surfaced the share filter <strong>at the search step</strong>, with
        a one-time onboarding default. Drop in completion of the booking
        flow from 12% to 3%.
      </>
    ),
  },
  {
    problem: "Problem 03 · Driver app overload",
    quote:
      "I'm driving. I can't read three lines of instructions at a traffic signal.",
    resolution: (
      <>
        Cut driver instructions to a <strong>single line + voice cue</strong>,
        added haptic for new-trip alerts. Driver task time per trip down 40%.
      </>
    ),
  },
];

export default function UsabilityTestingSection() {
  return (
    <ScrollSection dark id="metro-usability">
      <RevealOnScroll>
        <SectionLabel dark>13 · Usability testing</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Five riders. Three problems worth fixing.
          <br />
          One thing we'd been wrong about for a month.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            We ran moderated tests with five Mumbai Metro riders on a hi-fi
            interactive prototype. Each session was 45 minutes, task-based,
            with retrospective probing. Three problem statements emerged with
            enough signal across users to act on immediately. The biggest one
            (the trust gap on ETAs) was something I'd defended for weeks
            and the data overruled me on. That fix alone moved the trust score
            by nearly a full quartile.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-feedback-grid">
        {FINDINGS.map((f, i) => (
          <RevealOnScroll key={f.problem} delay={0.07 * i}>
            <div className="metro-feedback">
              <span className="metro-feedback__problem">{f.problem}</span>
              <p className="metro-feedback__quote">"{f.quote}"</p>
              <p className="metro-feedback__resolution">{f.resolution}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
}
