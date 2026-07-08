import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";
import PhoneMockup from "../components/PhoneMockup";

export default function ProblemSection() {
  return (
    <ScrollSection id="problem">
      <div className="cs-problem-grid">
        {/* Left column — narrative */}
        <div>
          <RevealOnScroll>
            <SectionLabel dark={false}>The Problem</SectionLabel>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <SectionHeadline>
              The form was punishing people for being honest.
            </SectionHeadline>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="cs-body">
              <p>
                Western Union India's digital KYC required users to manually
                enter their full legal name, exactly as it appeared on their
                PAN card. One wrong character and the verification failed
                silently. No error message. No guidance. Just a dead end.
              </p>
              <p>
                For millions of Indian users, "legal name" is not
                straightforward. Marriage changes names. Regional conventions
                add father's names. Transliteration from Hindi or Tamil to
                English introduces inconsistencies. The form didn't account for
                any of this.
              </p>
              <p>
                The result: a 15+ field form with an invisible tripwire. Users
                who did everything right were being silently rejected, and
                Western Union was paying the cost in failed-KYC fees, drop-offs,
                and lost trust.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="cs-stat-pull">
              <span className="cs-counter" style={{ fontFamily: "var(--font-mono)" }}>
                15+
              </span>
              <p className="cs-stat-pull__label">
                fields in the old KYC form. One wrong character meant failure.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right column — phone mockup */}
        <RevealOnScroll delay={0.16} direction="right">
          <PhoneMockup
            screenshotSrc="/kyc-old-form.png"
            screenshotAlt="Old KYC form — 15+ fields with no error guidance"
          />
        </RevealOnScroll>
      </div>
    </ScrollSection>
  );
}
