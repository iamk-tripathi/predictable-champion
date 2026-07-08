import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function EpilogueSection() {
  const prefersReduced = useReducedMotion();
  const dur = prefersReduced ? 0.3 : 0.75;
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="cs-epilogue">
      <div className="cs-epilogue__inner">
        <motion.p
          className="cs-epilogue__main"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur, ease }}
        >
          This project wasn't about fixing a form. It was about building trust
          in a country where documentation is a pain, government records are
          inconsistent, and users are just trying to do the right thing.
        </motion.p>

        <motion.p
          className="cs-epilogue__sub"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur, delay: 0.15, ease }}
        >
          If the UX of something as painful as tax-linked KYC can be
          transformed, nothing is off-limits.
        </motion.p>

        <motion.div
          className="cs-epilogue__author"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: dur, delay: 0.3, ease }}
        >
          <div className="cs-epilogue__divider" />
          <p className="cs-epilogue__name">Kushagra Tripathi</p>
          <p className="cs-epilogue__role">Interaction Designer · Western Union</p>
        </motion.div>
      </div>
    </section>
  );
}
