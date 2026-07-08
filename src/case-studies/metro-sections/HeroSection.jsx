import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <ScrollSection dark fullHeight id="metro-hero">
      <div className="metro-hero">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="cs-label cs-label--dark" style={{ marginBottom: 28, display: "block" }}>
            Case Study · 2026 · IIT Bombay ePGD
          </span>
        </motion.div>

        <motion.h1
          className="metro-hero__title"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Metro<span className="metro-hero__title-accent">+</span>
        </motion.h1>

        <motion.p
          className="metro-hero__subtitle"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          An end-to-end metro and last-mile system that turned an unpredictable shared
          commute into something you can actually plan around, by re-architecting
          how riders, vehicles, and queues talk to each other.
        </motion.p>

        <motion.div
          className="metro-hero__meta"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span><strong style={{ color: "#fff" }}>Role</strong> · Lead Designer, Information Architecture &amp; Systems Logic</span>
          <span className="metro-hero__meta-divider" aria-hidden="true" />
          <span><strong style={{ color: "#fff" }}>Year</strong> · 2026</span>
          <span className="metro-hero__meta-divider" aria-hidden="true" />
          <span><strong style={{ color: "#fff" }}>Team</strong> · 6 designers</span>
        </motion.div>

        <motion.div
          className="metro-hero__chips"
          style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <span className="metro-chip">Contextual Inquiry · 18 people</span>
          <span className="metro-chip">Information Architecture</span>
          <span className="metro-chip metro-chip--green">Load Balancing</span>
          <span className="metro-chip metro-chip--green">Half-User Concept</span>
          <span className="metro-chip">Hardware + App</span>
          <span className="metro-chip">Usability Testing</span>
        </motion.div>

        <motion.div
          className="metro-hero__video"
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Drop in /metro-prototype.mp4 when ready */}
          <div className="metro-placeholder">
            <svg className="metro-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
            <div>Prototype walkthrough · drop <code>/metro-prototype.mp4</code> into <code>/public</code></div>
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
}
