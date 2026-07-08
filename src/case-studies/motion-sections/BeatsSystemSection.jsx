import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import RevealOnScroll from "../components/RevealOnScroll";
import VideoMockup from "../components/VideoMockup";

const BEATS = [
  { beat: 1, ms: 75 },
  { beat: 2, ms: 150 },
  { beat: 3, ms: 225 },
  { beat: 4, ms: 300 },
  { beat: 5, ms: 375 },
  { beat: 6, ms: 450 },
  { beat: 7, ms: 525 },
  { beat: 8, ms: 600 },
  { beat: 9, ms: 675 },
  { beat: 10, ms: 750 },
  { beat: 11, ms: 825 },
  { beat: 12, ms: 900 },
];

const CATEGORIES = [
  { label: "Very Fast", range: "Beat 1-3", variant: "fast", span: 3 },
  { label: "Fast", range: "Beat 4-6", variant: "moderate", span: 3 },
  { label: "Slow", range: "Beat 7-9", variant: "slow", span: 3 },
  { label: "Deliberate", range: "Beat 10-12", variant: "deliberate", span: 3 },
];

function BeatsTimeline() {
  const timelineRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.6"],
  });

  const trackWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={timelineRef} className="mo-beats-timeline">
      {/* Track background */}
      <div className="mo-beats-timeline__track" style={{ opacity: 0.15 }} />

      {/* Animated fill */}
      <motion.div
        className="mo-beats-timeline__track mo-beats-timeline__track--fill"
        style={{
          width: prefersReduced ? "100%" : trackWidth,
        }}
      />

      {/* Markers */}
      <div className="mo-beats-timeline__markers">
        {BEATS.map((b, i) => (
          <motion.div
            key={b.beat}
            className="mo-beats-timeline__marker"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: prefersReduced ? 0.2 : 0.4,
              delay: prefersReduced ? 0 : i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mo-beats-timeline__dot" />
            <span className="mo-beats-timeline__beat">{b.beat}</span>
            <span className="mo-beats-timeline__ms">{b.ms}ms</span>
          </motion.div>
        ))}
      </div>

      {/* Category labels */}
      <div className="mo-beats-timeline__categories">
        {CATEGORIES.map((c) => (
          <div
            key={c.label}
            className={`mo-beats-timeline__category mo-beats-timeline__category--${c.variant}`}
          >
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeatsSystemSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-beats" className="mo-section">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">The System: Beats & Tokens</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              "Fast" and "slow" mean different things to different designers.
              So we invented Beats.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                One of the biggest challenges in standardizing motion is
                timing. When a spec says "use a fast transition," one designer
                thinks 100ms, another thinks 300ms. The intent gets lost
                somewhere between the Figma file and the final product.
              </p>
              <p>
                We introduced a concept we called Beats. A numbered scale from
                1 to 12, where each beat maps to a specific millisecond value
                in increments of 75ms. Beat 1 is instant (75ms). Beat 12 is
                deliberate (900ms). No one needs to remember raw numbers
                anymore. You just pick a beat based on what the interaction
                needs.
              </p>
            </div>
          </RevealOnScroll>

          {/* Beats timeline */}
          <BeatsTimeline />

          {/* Animation examples showing beats in action */}
          <RevealOnScroll delay={0.12}>
            <h3 className="mo-headline" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", marginTop: 48 }}>
              Beats in action
            </h3>
            <div className="mo-video-pair">
              <VideoMockup
                youtubeId="HJWzycN2toI"
                title="Loyalty delight animation"
                caption="Loyalty Delight"
              />
              <VideoMockup
                youtubeId="UxLZ1s9N0dI"
                title="R2R check animation"
                caption="R2R Check"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <div className="mo-body" style={{ marginTop: 48 }}>
              <p>
                Beyond timing, we created a full set of design tokens for
                motion: easing curves, duration mappings, and interaction
                patterns. All documented so that any designer on any team could
                pick up the system and produce consistent results. The specs
                were later handed off to developers as motion tokens for
                implementation.
              </p>
            </div>
          </RevealOnScroll>

          {/* Token placeholder + Action Sheet & Parallax video */}
          <RevealOnScroll delay={0.16}>
            <div className="mo-tokens-row">
              <div className="mo-tokens-row__placeholder">
                <div className="mo-placeholder" style={{ aspectRatio: "16 / 9" }}>
                  <span className="mo-placeholder__label">
                    Motion Design Tokens & Easing Specifications
                  </span>
                </div>
              </div>
              <div className="mo-tokens-row__video">
                <VideoMockup
                  youtubeId="XkjX11hsJs0"
                  title="Action sheet and parallax animation"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <blockquote className="mo-quote">
              "The beauty of Beats is that it turned a subjective conversation
              into an objective one. Nobody argues about whether 300ms is
              'fast' anymore. It's just Beat 4."
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
