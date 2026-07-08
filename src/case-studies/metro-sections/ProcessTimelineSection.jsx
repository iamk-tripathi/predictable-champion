import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const PHASES = [
  {
    num: "Phase 01",
    title: "Understand",
    items: [
      "18 contextual inquiries",
      "12 travellers, 4 drivers, 2 admins",
      "Field artifacts + transcripts",
      "Interpretation coding (OB / BD / IN / US / DI / QU)",
    ],
  },
  {
    num: "Phase 02",
    title: "Consolidate",
    items: [
      "Affinity mapping",
      "Cultural + flow work models",
      "5 design opportunities",
      "3 personas + 3Cs framework",
    ],
  },
  {
    num: "Phase 03",
    title: "Design",
    items: [
      "Information Architecture",
      "Paper sketching → wireframes",
      "Navigation system",
      "Visual identity + screens + pole",
    ],
  },
  {
    num: "Phase 04",
    title: "Evaluate",
    items: [
      "Hi-fi prototype build",
      "Usability tests · 5 metro travellers",
      "3 problem statements logged",
      "Design revisions + final spec",
    ],
  },
];

export default function ProcessTimelineSection() {
  return (
    <ScrollSection id="metro-process">
      <RevealOnScroll>
        <SectionLabel dark={false}>02 · Process</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Four phases. One question driving all of them:
          <br />
          <em>can this be made predictable?</em>
        </SectionHeadline>
      </RevealOnScroll>

      <div className="metro-timeline">
        {PHASES.map((p, i) => (
          <RevealOnScroll key={p.num} delay={0.08 * i}>
            <div className="metro-timeline__phase">
              <span className="metro-timeline__phase-num">{p.num}</span>
              <h3 className="metro-timeline__phase-title">{p.title}</h3>
              <ul className="metro-timeline__phase-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
}
