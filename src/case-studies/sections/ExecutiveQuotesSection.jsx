import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollSection, { SectionLabel } from "../components/ScrollSection";

const EXEC_QUOTES = [
  {
    photo: `${import.meta.env.BASE_URL}exec-devin.png`,
    name: "Devin McGranahan",
    title: "CEO, Western Union",
    quote:
      "We're investing in digital experiences that remove friction and build trust. India is one of our most important corridors, and getting identity right is the foundation for everything else.",
    accent: "#ffdd00",
  },
  {
    photo: `${import.meta.env.BASE_URL}exec-sohini.png`,
    name: "Sohini Rajola",
    title: "Head of Asia Pacific (then) · Now Executive Director, NPCI",
    quote:
      "The teams that move fastest are the ones closest to the customer's pain. This KYC work is a model for how we should operate across the region.",
    accent: "#0980DB",
  },
];

export default function ExecutiveQuotesSection() {
  const prefersReduced = useReducedMotion();
  const dur = prefersReduced ? 0.3 : 0.65;
  const ease = [0.16, 1, 0.3, 1];
  const [hovered, setHovered] = useState(null);

  return (
    <ScrollSection dark id="executive">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: dur, ease }}
        style={{ marginBottom: 56 }}
      >
        <SectionLabel dark>Organizational Impact</SectionLabel>
      </motion.div>

      <div className="cs-exec-grid">
        {EXEC_QUOTES.map((exec, i) => (
          <motion.div
            key={i}
            className="cs-exec-card"
            initial={{ opacity: 0, y: prefersReduced ? 0 : 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: dur, delay: 0.1 + i * 0.18, ease }}
            animate={{ y: hovered === i ? -6 : 0 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              boxShadow: hovered === i
                ? `0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px ${exec.accent}50`
                : '0 4px 24px rgba(0,0,0,0.25)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Animated top accent bar */}
            <motion.div
              className="cs-exec-card__glow"
              style={{ background: exec.accent }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3 + i * 0.18, ease }}
            />

            {/* Header: photo + identity */}
            <div className="cs-exec-card__header">
              <div
                className="cs-exec-card__photo-wrap"
                style={{ borderColor: exec.accent }}
              >
                <img src={exec.photo} alt={exec.name} className="cs-exec-card__photo" />
              </div>
              <div className="cs-exec-card__identity">
                <p className="cs-exec-card__name">{exec.name}</p>
                <p className="cs-exec-card__title">{exec.title}</p>
              </div>
            </div>

            {/* Quote with left accent bar */}
            <div className="cs-exec-card__quote-block">
              <div
                className="cs-exec-card__quote-bar"
                style={{ background: exec.accent }}
              />
              <p className="cs-exec-card__quote">{exec.quote}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollSection>
  );
}
