import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollSection, { SectionLabel } from "../components/ScrollSection";

export default function InsightSection() {
  const prefersReduced = useReducedMotion();

  return (
    <ScrollSection
      dark
      fullHeight
      id="insight"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,221,0,0.03) 0%, var(--cs-bg) 70%)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel dark>The Reframe</SectionLabel>
        </motion.div>

        <motion.h2
          className="cs-headline cs-headline--serif"
          style={{ maxWidth: 900, margin: "0 auto 24px" }}
          initial={{
            opacity: 0,
            scale: prefersReduced ? 1 : 0.97,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReduced ? 0.3 : 0.8,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          Invisible Tech + Transparent&nbsp;UX =<br />
          <span style={{ color: "#0980DB" }}>A friction-free product experience.</span>
        </motion.h2>

        <motion.p
          className="cs-caption"
          style={{ marginTop: 16 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The best verification is the one the user doesn't have to think about.
        </motion.p>
      </div>
    </ScrollSection>
  );
}
