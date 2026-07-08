import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const STORIES = [
  {
    icon: "💍",
    text: "She changed her name after marriage. The PAN card was never updated. She entered her current name, the only name she uses, and was silently rejected.",
  },
  {
    icon: "👨🏻👱🏻‍♂️",
    text: "His PAN was issued with his father's name as a middle name, a regional convention he didn't choose. He had no idea his legal name and his PAN name were different.",
  },
];

export default function EmpathySection() {
  return (
    <ScrollSection dark id="empathy">
      <RevealOnScroll>
        <SectionLabel dark>Why It Mattered</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          Behind every drop-off was someone trying to send money to their loved ones.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="cs-body">
          <p>
            Western Union in India is not a fintech novelty. It's how families
            send money. Migrant workers, married women supporting parents,
            small-business owners paying suppliers across state lines. A failed
            KYC doesn't just lose a transaction. It loses trust.
          </p>
        </div>
      </RevealOnScroll>

      <div className="cs-empathy-grid">
        {STORIES.map((s, i) => (
          <RevealOnScroll
            key={i}
            delay={0.12 + i * 0.08}
            direction={i === 0 ? "left" : "right"}
          >
            <div className="cs-glass-card cs-empathy-card">
              <div className="cs-empathy-card__icon" aria-hidden="true">
                {s.icon}
              </div>
              <p className="cs-empathy-card__text">{s.text}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.3}>
        <div className="cs-callout">
          <p className="cs-callout__text">
            In both cases, the users did nothing wrong. They simply didn't know
            what the system expected, because the system never told them.
          </p>
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
