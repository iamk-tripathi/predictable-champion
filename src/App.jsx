import React, { memo, useEffect, useState } from "react";
import UnicornScene from "unicornstudio-react";

const WORDS = ["Artificial Intelligence", "Tech", "Product"];
const PHRASE_TRANSITION_MS = 1200;
const PHRASE_HOLD_MS = 1600;

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
    </main>
  );
}
