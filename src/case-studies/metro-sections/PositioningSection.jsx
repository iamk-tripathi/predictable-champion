import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const THREE_CS = [
  {
    label: "Considerations",
    title: "What we couldn't ignore.",
    items: [
      "Drivers are operators, not power users. Hindi-first, voice-cued.",
      "Hardware lives outdoors. Monsoon, dust, no internet.",
      "Riders distrust changing behaviour, so onboarding has to feel familiar.",
      "Women, students, and elders read shared rides very differently.",
    ],
  },
  {
    label: "Criteria",
    title: "What success had to look like.",
    items: [
      "Predicted ETA accurate within ±90 seconds.",
      "Booking-to-board completed in under 4 taps.",
      "Driver instructions readable in <2 seconds at 30 km/h.",
      "System gracefully degrades when one node loses connectivity.",
    ],
  },
  {
    label: "Constraints",
    title: "What we had to work inside.",
    items: [
      "Existing fleet, no new vehicle procurement.",
      "Phase-1 deployment on a single campus before metro rollout.",
      "₹34.85 Cr Phase-1 budget across hardware + software.",
      "No GPS upgrade on legacy buggies. Has to work with what's there.",
    ],
  },
];

const GOALS = [
  {
    label: "Business goals",
    title: "Make the unit economics work.",
    items: [
      "₹950 Cr TAM across Indian metro last-mile.",
      "Phase 1 profitable inside 24 months on campus deployment alone.",
      "Hardware that pays for itself in 18 months via increased ridership.",
    ],
  },
  {
    label: "User goals",
    title: "Replace anxiety with confidence.",
    items: [
      "Know what's coming and when, every time.",
      "Choose who you share with, not whether you share.",
      "Pay once. Get home. No mental tax in between.",
    ],
  },
  {
    label: "Product goals",
    title: "One system. Three surfaces.",
    items: [
      "Rider app · predictability + booking.",
      "Driver app · Hindi-first, voice-led, instruction-only.",
      "Pole hardware · shared truth at the physical waiting point.",
    ],
  },
];

export default function PositioningSection() {
  return (
    <ScrollSection dark id="metro-positioning">
      <RevealOnScroll>
        <SectionLabel dark>07 · Positioning the product</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Before sketching a single screen,
          <br />
          I locked down the 3Cs and the goal stack.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            The team kept reaching for screens. I held us back for a week to
            write the constraints and goals down explicitly, because if we
            optimised for the wrong objective, no amount of pretty UI would
            save us. The 3Cs framework gave us a sharable contract; the goal
            stack made it obvious which trade-offs were acceptable.
          </p>
        </div>
      </RevealOnScroll>

      <h3 className="cs-headline" style={{ fontSize: "1.4rem", marginTop: 48, marginBottom: 8 }}>
        3Cs framework
      </h3>
      <div className="metro-3c-grid">
        {THREE_CS.map((c, i) => (
          <RevealOnScroll key={c.label} delay={0.06 * i}>
            <div className="metro-3c">
              <span className="metro-3c__label">{c.label}</span>
              <h4 className="metro-3c__title">{c.title}</h4>
              <ul className="metro-3c__list">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <h3 className="cs-headline" style={{ fontSize: "1.4rem", marginTop: 64, marginBottom: 8 }}>
        Goal stack
      </h3>
      <div className="metro-goals-grid">
        {GOALS.map((g, i) => (
          <RevealOnScroll key={g.label} delay={0.06 * i}>
            <div className="metro-goal">
              <span className="metro-goal__label">{g.label}</span>
              <h4 className="metro-goal__title">{g.title}</h4>
              <ul className="metro-goal__list">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2}>
        <div className="metro-callout" style={{ marginTop: 48 }}>
          <strong>Conceptual model.</strong> Metro+ is one coordination layer
          with three faces: a rider app for predictability, a driver app for
          unambiguous instruction, and pole hardware for shared truth at the
          waiting point. Every feature has to earn its place on at least one
          of those surfaces.
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
