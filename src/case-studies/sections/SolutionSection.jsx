import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";
import JourneyFlow from "../components/JourneyFlow";

export default function SolutionSection() {
  return (
    <ScrollSection dark id="solution">
      <RevealOnScroll>
        <SectionLabel dark>The Idea</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          What if the user never had to type their name at all?
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="cs-body" style={{ margin: "0 auto" }}>
          <p>
            The root cause wasn't user error. It was a design that assumed
            people knew their exact legal name in the exact format a government
            database expected. They didn't. And they shouldn't have to.
          </p>
          <p>
            Instead of asking users to type their identity, I proposed fetching
            it. Using PAN and date of birth as the only inputs, we could verify
            Aadhaar linkage through government APIs, then pull the legal name
            directly from NSDL via Signzy, confirmed with a single OTP.
          </p>
          <p>
            No typing. No guessing. No mismatch. The user's identity is
            verified by the system that issued it. Manual fallback preserved for
            edge cases where OTP fails.
          </p>
        </div>
      </RevealOnScroll>

      <JourneyFlow />
    </ScrollSection>
  );
}
