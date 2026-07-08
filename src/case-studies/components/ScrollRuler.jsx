import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Idea" },
  { id: "results", label: "The Results" },
  { id: "empathy", label: "Why It Mattered" },
  { id: "research", label: "The Research" },
  { id: "insight", label: "The Reframe" },
  { id: "prototype", label: "The Design" },
  { id: "testimonials", label: "Validation" },
  { id: "executive", label: "Impact" },
  { id: "close", label: "What's Next" },
];

const TOTAL_TICKS = 60;
const SPRING_CONFIG = { stiffness: 120, damping: 20, mass: 0.8 };
const PADDING_PX = 24;

export default function ScrollRuler() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
  const [sectionPositions, setSectionPositions] = useState([]);
  const [activeLabel, setActiveLabel] = useState(null);
  const [labelOpacity, setLabelOpacity] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const fadeTimer = useRef(null);
  const lastActiveRef = useRef(null);
  const trackRef = useRef(null);
  const prevProgressRef = useRef(0);

  // Calculate section positions as fractions of total page height
  const recalcPositions = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const positions = SECTIONS.map((s) => {
      const el = document.getElementById(s.id);
      if (!el) return null;
      const top = el.offsetTop;
      return { ...s, position: top / docHeight };
    }).filter(Boolean);

    setSectionPositions(positions);
  }, []);

  useEffect(() => {
    recalcPositions();
    window.addEventListener("resize", recalcPositions);
    const timer = setTimeout(recalcPositions, 1500);
    return () => {
      window.removeEventListener("resize", recalcPositions);
      clearTimeout(timer);
    };
  }, [recalcPositions]);

  // Convert a 0-1 progress value to a CSS % that accounts for track padding
  // Ticks should only span the area between the two paddings
  const progressToPercent = useCallback((p) => {
    if (!trackRef.current) return `${p * 100}%`;
    const trackW = trackRef.current.offsetWidth;
    if (trackW <= 0) return `${p * 100}%`;
    const usable = trackW - PADDING_PX * 2;
    const px = PADDING_PX + p * usable;
    return `${(px / trackW) * 100}%`;
  }, []);

  // Detect when marker crosses a section tick — use raw scrollYProgress
  // to avoid spring overshoot issues, but check crossing direction
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const THRESHOLD = 0.015;
    let hit = null;

    for (const sp of sectionPositions) {
      const prev = prevProgressRef.current;
      const crossed =
        (prev < sp.position && v >= sp.position - THRESHOLD) ||
        (prev > sp.position && v <= sp.position + THRESHOLD);
      const near = Math.abs(v - sp.position) < THRESHOLD;

      if (crossed || near) {
        hit = sp;
        break;
      }
    }

    prevProgressRef.current = v;

    if (hit && hit.id !== lastActiveRef.current) {
      lastActiveRef.current = hit.id;
      setActiveLabel(hit.label);
      setLabelOpacity(1);

      if (fadeTimer.current) clearTimeout(fadeTimer.current);
      fadeTimer.current = setTimeout(() => {
        setLabelOpacity(0);
        setTimeout(() => {
          lastActiveRef.current = null;
        }, 400);
      }, 1400);
    }
  });

  useEffect(() => {
    return () => {
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  const handleTickClick = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Generate tick marks
  const ticks = Array.from({ length: TOTAL_TICKS }, (_, i) => i);

  return (
    <div className="cs-ruler">
      <div className="cs-ruler__track" ref={trackRef}>
        {/* Regular tick marks */}
        {ticks.map((i) => {
          const tickPos = i / (TOTAL_TICKS - 1);
          // Skip positions that will get a section tick
          const isNearSection = sectionPositions.some(
            (sp) => Math.abs(tickPos - sp.position) < 1 / TOTAL_TICKS
          );
          if (isNearSection) return null;
          return (
            <div
              key={i}
              className="cs-ruler__tick"
              style={{ left: progressToPercent(tickPos) }}
            />
          );
        })}

        {/* Section ticks — interactive */}
        {sectionPositions.map((sp) => (
          <div
            key={sp.id}
            className="cs-ruler__tick cs-ruler__tick--section"
            style={{ left: progressToPercent(sp.position) }}
            onClick={() => handleTickClick(sp.id)}
            onMouseEnter={() => setHoveredSection(sp)}
            onMouseLeave={() => setHoveredSection(null)}
            role="button"
            tabIndex={0}
            aria-label={`Scroll to ${sp.label}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleTickClick(sp.id);
            }}
          />
        ))}

        {/* Red marker with momentum */}
        <motion.div
          className="cs-ruler__marker"
          style={{
            left: useTransform(smoothProgress, (v) => progressToPercent(v)),
          }}
        />
      </div>

      {/* Hover tooltip — outside track to avoid overflow clip */}
      {hoveredSection && (
        <div
          className="cs-ruler__tooltip"
          style={{ left: progressToPercent(hoveredSection.position) }}
        >
          <span className="cs-ruler__label-text">{hoveredSection.label}</span>
        </div>
      )}

      {/* Red marker label popup — outside track */}
      <motion.div
        className="cs-ruler__tooltip cs-ruler__tooltip--marker"
        style={{
          left: useTransform(smoothProgress, (v) => progressToPercent(v)),
          opacity: labelOpacity,
        }}
      >
        {activeLabel && (
          <span className="cs-ruler__label-text">{activeLabel}</span>
        )}
      </motion.div>
    </div>
  );
}
