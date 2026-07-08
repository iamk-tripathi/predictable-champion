import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const OLD_STEPS = [
  { label: "User signs up", icon: "→" },
  { label: "Fills 15+ field form", icon: "→" },
  { label: "Submits to bank", icon: "→" },
  { label: "Name mismatch", icon: "✕" },
  { label: "KYC fails", icon: "✕" },
  { label: "WU pays fee", icon: "✕" },
];

const NEW_STEPS = [
  { label: "PAN + DOB", icon: "✓" },
  { label: "Identity via Signzy", icon: "✓" },
  { label: "OTP confirms", icon: "✓" },
  { label: "Verified user proceeds", icon: "✓" },
];

function FlowRow({ steps, variant, progress }) {
  const isOld = variant === "old";
  const colorVar = isOld ? "var(--cs-error)" : "var(--cs-success)";

  return (
    <div className={`cs-flow cs-flow--${variant}`}>
      {/* Horizontal line — desktop */}
      <svg
        className="cs-flow__line cs-flow__line--h"
        viewBox="0 0 1000 4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="0"
          y1="2"
          x2="1000"
          y2="2"
          stroke={colorVar}
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            pathLength: progress,
          }}
        />
      </svg>
      {/* Vertical line — mobile */}
      <svg
        className="cs-flow__line cs-flow__line--v"
        viewBox="0 0 4 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="1000"
          stroke={colorVar}
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            pathLength: progress,
          }}
        />
      </svg>
      <div className="cs-flow__steps">
        {steps.map((step, i) => {
          const isFailure = isOld && i >= 3;
          return (
            <motion.div
              key={i}
              className={`cs-flow__step ${isFailure ? "cs-flow__step--fail" : ""}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="cs-flow__icon"
                style={{ color: colorVar }}
                aria-hidden="true"
              >
                {step.icon}
              </span>
              <span className="cs-flow__label">{step.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function JourneyFlow() {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const oldProgress = useTransform(scrollYProgress, [0, isMobile ? 0.9 : 0.45], [0, 1]);
  const newProgress = useTransform(scrollYProgress, [isMobile ? 0 : 0.5, isMobile ? 0.9 : 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="cs-journey">
      <div className="cs-journey__row">
        <span className="cs-journey__row-label cs-journey__row-label--old">
          Old Flow
        </span>
        <FlowRow
          steps={OLD_STEPS}
          variant="old"
          progress={prefersReduced ? 1 : oldProgress}
        />
      </div>

      <div className="cs-journey__shift" aria-hidden="true">
        <span className="cs-journey__shift-label">The shift</span>
        <svg viewBox="0 0 2 100" preserveAspectRatio="none" className="cs-journey__shift-line">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="var(--cs-accent)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="cs-journey__row">
        <span className="cs-journey__row-label cs-journey__row-label--new">
          New Flow
        </span>
        <FlowRow
          steps={NEW_STEPS}
          variant="new"
          progress={prefersReduced ? 1 : newProgress}
        />
      </div>

      <p className="cs-journey__fallback">
        Manual fallback preserved for OTP failures.
      </p>
    </div>
  );
}
