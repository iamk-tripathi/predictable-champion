import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollSection, { SectionLabel } from "../components/ScrollSection";

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const dur = prefersReduced ? 0.3 : 0.8;
  const ease = [0.16, 1, 0.3, 1];
  const lottieRef = useRef(null);
  const [lottieVisible, setLottieVisible] = useState(true);

  useEffect(() => {
    import("@lottiefiles/dotlottie-wc");
  }, []);

  // Track scroll relative to hero height directly
  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const heroH = hero.offsetHeight;
      const scrolled = window.scrollY;
      // Start fading at 50% of hero height, fully gone by 70%
      setLottieVisible(scrolled < heroH * 0.5);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollSection dark fullHeight id="hero">
        <div className="cs-hero-vignette" aria-hidden="true" />
        <div className="cs-hero">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur, ease }}
          >
            <SectionLabel dark>Western Union · India · 2024-25</SectionLabel>
          </motion.div>

          <motion.h1
            className="cs-hero-title"
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.1, ease }}
          >
            KYC, PAN, and a Lot of Chaos
          </motion.h1>

          <motion.p
            className="cs-hero__subtitle"
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: 0.3, ease }}
          >
            India's KYC verification was rejecting honest users without
            telling them why. I redesigned the identity flow end-to-end,
            saving Western Union ₹1.2&nbsp;Cr/year and increasing KYC success
            by 20%.
          </motion.p>

          <motion.div
            className="cs-hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur, delay: 0.5, ease }}
          >
            <span>Role: Interaction Designer</span>
            <span className="cs-hero__meta-divider" aria-hidden="true" />
            <span>Company: Western Union</span>
            <span className="cs-hero__meta-divider" aria-hidden="true" />
            <div className="cs-scope-group">
              <span>Scope</span>
              <div className="cs-scope-chips">
                <span className="cs-scope-chip cs-scope-chip--research">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  Research
                </span>
                <span className="cs-scope-chip cs-scope-chip--design">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"/></svg>
                  Design
                </span>
                <span className="cs-scope-chip cs-scope-chip--legal">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v18"/><path d="M5 7l7-4 7 4"/><path d="M3 14l4-8 4 8"/><path d="M13 14l4-8 4 8"/><line x1="3" y1="14" x2="7" y2="14"/><line x1="13" y1="14" x2="21" y2="14"/></svg>
                  Legal
                </span>
                <span className="cs-scope-chip cs-scope-chip--vendor">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Vendor
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollSection>

      <motion.div
        className="cs-hero__scroll-lottie"
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
