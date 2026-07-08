import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const LAYERS = [
  {
    title: "Office Testing",
    desc: "Internal employees tried the KYC flow. Hesitation and confusion surfaced immediately. Even people who work at Western Union struggled.",
  },
  {
    title: "Guerrilla Research",
    desc: "Informal tests with real users. The consistent finding: people didn't know which version of their name to enter.",
  },
  {
    title: "User Interviews",
    desc: "Structured conversations confirmed the pattern. Repeated mismatch stories. Frustration. Abandonment.",
  },
  {
    title: "Quantitative Validation",
    desc: "Session replays and funnel analysis via Amplitude and Quantum Metrics confirmed the drop-off points with hard numbers.",
  },
];

const RESEARCH_PHOTOS = [
  {
    src: "/research-photo-2.jpg",
    caption: "User interview sessions with real users to understand key pain points",
  },
  {
    src: "/research-photo-1.jpg",
    caption: "Late-night workspace setup during the initial discovery sprint",
  },
  {
    src: "/research-photo-3.jpg",
    caption: "Whiteboarding the user flow and identifying failure points",
  },
  {
    src: "/benchmarking-details.png",
    caption: "Benchmarking flows of competitors",
  },
];

export default function ResearchSection() {
  const logosRef = useRef(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReduced = useReducedMotion();
  const autoRef = useRef(null);

  const goToSlide = (i) => {
    setActiveSlide(i);
    // Reset the 5s timer on manual interaction
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % RESEARCH_PHOTOS.length);
    }, 5000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % RESEARCH_PHOTOS.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    const el = logosRef.current;
    if (!el) return;
    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
    const handleScroll = () => {
      if (!isMobile()) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top <= vh * 0.7 && rect.top > vh * 0.2) {
        setMobileExpanded(true);
      } else {
        setMobileExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollSection id="research">
      <RevealOnScroll>
        <SectionLabel dark={false}>The Research</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          I didn't start with a solution. I started with the evidence.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <div className="cs-body">
          <p>
            Before proposing any design changes, I needed to understand the
            problem from every angle: qualitative and quantitative, internal
            and external.
          </p>
        </div>
      </RevealOnScroll>

      {/* Featured carousel — centered, full-width prominence */}
      <RevealOnScroll delay={0.1}>
        <div className="cs-research-featured">
          <div className="cs-research-featured__viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="cs-research-carousel__slide"
                initial={{ opacity: 0, x: prefersReduced ? 0 : 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReduced ? 0 : -48 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={RESEARCH_PHOTOS[activeSlide].src}
                  alt={RESEARCH_PHOTOS[activeSlide].caption}
                  className="cs-research-carousel__img"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="cs-research-carousel__caption">
            {RESEARCH_PHOTOS[activeSlide].caption}
          </p>
          <div className="cs-research-carousel__nav">
            {RESEARCH_PHOTOS.map((_, i) => (
              <button
                key={i}
                className={`cs-research-carousel__dot${i === activeSlide ? " is-active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`View photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* 2×2 grid of method cards */}
      <div className="cs-research-grid" style={{ marginTop: 40 }}>
        {LAYERS.map((layer, i) => (
          <RevealOnScroll key={i} delay={0.1 + 0.08 * i}>
            <div className="cs-layer-card">
              <span className="cs-layer-card__number">{i + 1}</span>
              <div>
                <p className="cs-layer-card__title">{layer.title}</p>
                <p className="cs-layer-card__desc">{layer.desc}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.1}>
        <div
          className="cs-glass-card cs-glass-card--light"
          style={{ marginTop: 40 }}
        >
          <div ref={logosRef} className={`cs-competitor-logos${mobileExpanded ? " is-expanded" : ""}`}>
            <div className="cs-competitor-logos__bubble cs-competitor-logos__bubble--white">
              <img src="/competitor-paytm.png" alt="Airtel Payments Bank" />
            </div>
            <div className="cs-competitor-logos__bubble cs-competitor-logos__bubble--black">
              <img src="/competitor-remit.png" alt="Remitly" />
            </div>
            <div className="cs-competitor-logos__bubble cs-competitor-logos__bubble--white">
              <img src="/competitor-paytm-actual.png" alt="Paytm" className="cs-competitor-logos__img--contain" />
            </div>
            <div className="cs-competitor-logos__bubble cs-competitor-logos__bubble--white">
              <img src="/competitor-zerodha.png" alt="Zerodha" />
            </div>
            <div className="cs-competitor-logos__bubble cs-competitor-logos__bubble--black">
              <img src="/competitor-wise.png" alt="Wise" />
            </div>
          </div>
          <p className="cs-body" style={{ maxWidth: "none" }}>
            I benchmarked fintech leaders like Zerodha, Paytm, and others, and
            found many had moved to API-based identity fetch. I evaluated API
            Setu for government-verified data and ultimately selected Signzy for
            secure, OTP-based NSDL access.
          </p>
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
