import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const PROTO_URL =
  "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FG1QoEedk90tCpaRg0I7nlk%2FIN-R4-Concept%3Fnode-id%3D543-4853%26t%3DFMGaRt9oNNAoBp27-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D543%253A4853";

export default function PrototypeSection() {
  return (
    <ScrollSection id="prototype">
      <RevealOnScroll>
        <SectionLabel dark={false}>The Design</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          What it looks like when complexity disappears.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12}>
        <div className="cs-proto-embed-wrapper">
          <iframe
            className="cs-proto-embed"
            src={PROTO_URL}
            allowFullScreen
            title="KYC Redesign Prototype"
          />
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
