import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MotionHeroSection() {
  const prefersReduced = useReducedMotion();
  const dur = prefersReduced ? 0.3 : 0.8;
  const ease = [0.16, 1, 0.3, 1];
  const lottieRef = useRef(null);
  const [lottieVisible, setLottieVisible] = useState(true);

  useEffect(() => {
    import("@lottiefiles/dotlottie-wc");
  }, []);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("mo-hero");
      if (!hero) return;
      setLottieVisible(window.scrollY < hero.offsetHeight * 0.5);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        id="mo-hero"
        className="mo-section mo-section--full"
        style={{ paddingBottom: 80 }}
      >
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <div className="mo-hero">
            <motion.span
              className="mo-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: dur, ease }}
            >
              Western Union · 2024
            </motion.span>

            <motion.h1
              className="mo-hero-title"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.1, ease }}
            >
              Motion Guidelines for <em>Western Union</em>
            </motion.h1>

            <motion.p
              className="mo-hero__subtitle"
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: 0.3, ease }}
            >
              Western Union moves $150B a year. But on screen, nothing moved
              at all. This is the story of how a lunchtime conversation turned
              into a company-wide motion design system, adopted by 6+ product
              teams.
            </motion.p>

            <motion.div
              className="mo-hero__meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: dur, delay: 0.5, ease }}
            >
              <span>Role: Interaction Designer</span>
              <span className="mo-hero__meta-divider" aria-hidden="true" />
              <span>Company: Western Union</span>
              <span className="mo-hero__meta-divider" aria-hidden="true" />
              <div className="mo-scope-group">
                <span>Scope</span>
                <div className="mo-scope-chips">
                  <span className="mo-scope-chip mo-scope-chip--research">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    Research
                  </span>
                  <span className="mo-scope-chip mo-scope-chip--design">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"/></svg>
                    Design
                  </span>
                  <span className="mo-scope-chip mo-scope-chip--dev">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    Dev Handoff
                  </span>
                  <span className="mo-scope-chip mo-scope-chip--adopt">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Adoption
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        className="mo-hero__scroll-lottie"
        initial={{ opacity: 0 }}
        animate={{ opacity: lottieVisible ? 0.7 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <dotlottie-wc
          ref={lottieRef}
          src="/scroll-down.lottie"
          autoplay
          loop
          style={{ width: "56px", height: "56px" }}
        />
      </motion.div>
    </>
  );
}
