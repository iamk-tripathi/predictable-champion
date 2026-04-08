import React, { memo, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import UnicornScene from "unicornstudio-react";

const WORDS = ["Artificial Intelligence", "Tech", "Product"];
const PHRASE_TRANSITION_MS = 1200;
const PHRASE_HOLD_MS = 1600;
const FEATURE_CARDS = [
  {
    title: "UX Case Studies",
    description: "Interfaces shaped with structure, rhythm, and decision clarity.",
    accent: "01",
  },
  {
    title: "AI x UX",
    description: "Transitions choreographed to guide attention instead of decorating it.",
    accent: "02",
  },
  {
    title: "UX Minis",
    description: "Ideas translated into screens that feel useful the moment they appear.",
    accent: "03",
  },
];

function getSegments(phrase) {
  let charIndex = 0;
  const parts = phrase.split(/(\s+)/).filter(Boolean);
  const totalChars = phrase.length;

  return parts.map((part) => ({
    id: `${part}-${charIndex}`,
    chars: Array.from(part).map((char) => {
      const normalizedIndex = totalChars > 1 ? charIndex / (totalChars - 1) : 0;
      charIndex += 1;

      return {
        char,
        id: `${char}-${charIndex}`,
        delayMs: normalizedIndex * 320,
      };
    }),
  }));
}

function StaggeredPhrase({ phrase, phase, animationKey }) {
  const segments = getSegments(phrase);

  return (
    <div className={`staggered-phrase staggered-phrase--${phase}`} key={animationKey}>
      {segments.map((segment) => (
        <span className="staggered-segment" key={segment.id}>
          {segment.chars.map(({ char, id, delayMs }) => (
            <span
              className="staggered-char"
              key={id}
              style={{ "--char-delay": `${delayMs}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

function updateCardGlow(event) {
  const element = event.currentTarget;
  const bounds = element.getBoundingClientRect();
  const offsetX = event.clientX - bounds.left;
  const offsetY = event.clientY - bounds.top;
  const normalizedX = (offsetX / bounds.width - 0.5) * 2;
  const normalizedY = (offsetY / bounds.height - 0.5) * 2;

  element.style.setProperty("--glow-x", `${offsetX}px`);
  element.style.setProperty("--glow-y", `${offsetY}px`);
  element.style.setProperty("--tilt-y", `${normalizedX * 5.5}deg`);
  element.style.setProperty("--tilt-x", `${normalizedY * -4.75}deg`);
}

function resetCardGlow(event) {
  const element = event.currentTarget;

  element.style.removeProperty("--glow-x");
  element.style.removeProperty("--glow-y");
  element.style.removeProperty("--tilt-x");
  element.style.removeProperty("--tilt-y");
}

const StaggeredWordCycle = memo(function StaggeredWordCycle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [previousWordIndex, setPreviousWordIndex] = useState(null);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      setWordIndex(0);
      return undefined;
    }

    const transitionTimeout = window.setTimeout(() => {
      setPreviousWordIndex(wordIndex);
      setWordIndex((currentIndex) => (currentIndex + 1) % WORDS.length);
      setCycleCount((currentCount) => currentCount + 1);
    }, PHRASE_HOLD_MS + PHRASE_TRANSITION_MS);

    return () => {
      window.clearTimeout(transitionTimeout);
    };
  }, [wordIndex]);

  useEffect(() => {
    if (previousWordIndex === null) {
      return undefined;
    }

    const cleanupTimeout = window.setTimeout(() => {
      setPreviousWordIndex(null);
    }, PHRASE_TRANSITION_MS);

    return () => {
      window.clearTimeout(cleanupTimeout);
    };
  }, [previousWordIndex]);

  return (
    <div className="word-carousel" aria-live="polite">
      <span className="word-carousel-stage">
        {previousWordIndex !== null && (
          <StaggeredPhrase
            phrase={WORDS[previousWordIndex]}
            phase="exit"
            animationKey={`exit-${previousWordIndex}-${cycleCount}`}
          />
        )}
        <StaggeredPhrase
          phrase={WORDS[wordIndex]}
          phase={previousWordIndex === null ? "static" : "enter"}
          animationKey={`enter-${wordIndex}-${cycleCount}`}
        />
      </span>
    </div>
  );
});

const SwipeScene = memo(function SwipeScene() {
  return (
    <UnicornScene
      projectId="h0pS8ceM1BrcsYdxxizO"
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
      width="100%"
      height="100%"
    />
  );
});

export default function App() {
  const revealSectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress: revealProgress } = useScroll({
    target: revealSectionRef,
    offset: ["start end", "start start"],
  });
  const veilY = useTransform(revealProgress, [0, 0.16, 0.44], ["0%", "0%", "-108%"]);
  const veilOpacity = useTransform(revealProgress, [0, 0.24, 0.44], [1, 1, 0]);
  const meshOpacity = useTransform(revealProgress, [0.06, 0.32, 0.52], [0, 0.62, 1]);
  const meshY = useTransform(revealProgress, [0.06, 0.4], ["4svh", "0svh"]);
  const screenScale = useTransform(revealProgress, [0.06, 0.44], [0.985, 1]);
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: -56 + index * -4,
      y: 32,
      scale: 0.94,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.1 + index * 0.14,
        duration: 0.72,
        ease: [0.18, 0.84, 0.32, 1],
      },
    }),
  };

  return (
    <main className="page-shell">
      <section className="hero-scene" aria-label="Hero and swipe scene">
        <div className="scene-sticky">
          <div className="scene-shell">
            <div className="scene-frame">
              <SwipeScene />
            </div>
            <div className="scene-vignette" aria-hidden="true"></div>
          </div>
        </div>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy hero-copy-primary">
            <p className="intro-line">Hi, I am</p>
            <h1 id="hero-title">Kushagra!</h1>
          </div>

          <div className="hero-divider" aria-hidden="true"></div>

          <div className="hero-copy hero-copy-secondary">
            <p className="supporting-line">
              A designer building Interfaces at the intersection of
            </p>

            <StaggeredWordCycle />
          </div>
        </section>

        <div className="scene-scroll-spacer" aria-hidden="true"></div>
      </section>

      <section
        className="mesh-section"
        ref={revealSectionRef}
        aria-labelledby="selected-work-title"
      >
        <div className="mesh-background-layer" aria-hidden="true" />

        <motion.div
          className="mesh-reveal-veil"
          aria-hidden="true"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  y: veilY,
                  opacity: veilOpacity,
                }
          }
        />

        <motion.div
          className="mesh-content"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: meshOpacity,
                  y: meshY,
                  scale: screenScale,
                }
          }
        >
          <div className="mesh-header">
            <p className="mesh-eyebrow">Choose a Path...</p>
            <h2 id="selected-work-title">
              Pick a path to explore case studies and know more about my work...
            </h2>
          </div>

          <motion.div
            className="mesh-cards-layer"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.35 }}
          >
            {FEATURE_CARDS.map((card, index) => (
              <motion.article
                className="mesh-card"
                key={card.title}
                custom={index}
                variants={cardVariants}
                onPointerMove={updateCardGlow}
                onPointerLeave={resetCardGlow}
              >
                <div className="mesh-card-body">
                  <div className="mesh-card-meta">
                    <span className="mesh-card-accent">{card.accent}</span>
                    <span className="mesh-card-arrow" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none" focusable="false">
                        <path
                          d="M7 5.75H5.75C5.06 5.75 4.5 6.31 4.5 7V14.25C4.5 14.94 5.06 15.5 5.75 15.5H13C13.69 15.5 14.25 14.94 14.25 14.25V13"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 11L15.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M11.25 4.5H15.5V8.75"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
