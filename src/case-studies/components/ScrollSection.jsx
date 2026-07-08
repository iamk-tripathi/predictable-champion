import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ScrollSection({
  children,
  dark = false,
  fullHeight = false,
  className = "",
  id,
  style,
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id={id}
      className={`cs-section ${dark ? "cs-section--dark" : "cs-section--light"} ${fullHeight ? "cs-section--full" : ""} ${className}`}
      style={style}
    >
      {dark && <div className="cs-noise-overlay" aria-hidden="true" />}
      <div className="cs-section__inner">{children}</div>
    </section>
  );
}

export function SectionLabel({ children, dark = true, style }) {
  return (
    <span
      className={`cs-label ${dark ? "cs-label--dark" : "cs-label--light"}`}
      style={style}
    >
      {children}
    </span>
  );
}

export function SectionHeadline({ children, serif = false, className = "" }) {
  return (
    <h2 className={`cs-headline ${serif ? "cs-headline--serif" : ""} ${className}`}>
      {children}
    </h2>
  );
}
