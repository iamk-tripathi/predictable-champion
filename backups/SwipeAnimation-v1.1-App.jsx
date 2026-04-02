import React, { memo, useEffect, useState } from "react";
import UnicornScene from "unicornstudio-react";

const WORDS = ["Artificial Intelligence", "Tech", "Product"];

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
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      setWordIndex(0);
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % WORDS.length);
    }, 1700);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

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

            <div className="word-carousel" aria-live="polite">
              <span className="word-carousel-mask">
                <span
                  className="word-carousel-track"
                  style={{ "--word-index": String(wordIndex) }}
                >
                  {WORDS.map((word) => (
                    <span className="word-carousel-word" key={word}>
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </div>
          </div>
        </section>

        <div className="scene-scroll-spacer" aria-hidden="true"></div>
      </section>
    </main>
  );
}
