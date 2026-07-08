import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";

const FUTURE_ITEMS = [
  "Better fallback guidance for OTP failures",
  "Proactive Aadhaar-PAN linkage nudges",
  "TCS estimator using Form 26AS for real-time tax liability across providers",
  "UPI for international remittances up to ₹1L",
];

export default function CloseSection() {
  const prefersReduced = useReducedMotion();
  const dur = prefersReduced ? 0.3 : 0.65;
  const ease = [0.16, 1, 0.3, 1];

  return (
    <ScrollSection id="close">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: dur, ease }}
        style={{ marginBottom: 16 }}
      >
        <SectionLabel dark={false} style={{ color: '#b89a00' }}>What's Next</SectionLabel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: prefersReduced ? 0 : 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: dur, delay: 0.05, ease }}
        style={{ marginBottom: 64 }}
      >
        <SectionHeadline>
          This was the beginning, not the end.
        </SectionHeadline>
      </motion.div>

      <div className="cs-future-rows">
        {FUTURE_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            className="cs-future-row"
            initial={{ opacity: 0, x: prefersReduced ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: dur, delay: 0.1 + i * 0.1, ease }}
          >
            <span className="cs-future-row__num">0{i + 1}</span>
            <span className="cs-future-row__text">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cs-body"
        initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: dur, delay: 0.55, ease }}
        style={{ margin: "0 auto 64px" }}
      >
        <p>
          Each of these builds on the same principle: use invisible technology
          and transparent UX to eliminate friction. The KYC redesign proved it
          works at scale, and these extensions take it further.
        </p>
      </motion.div>
    </ScrollSection>
  );
}
