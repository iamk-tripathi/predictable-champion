import React, { memo, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UnicornScene from "unicornstudio-react";
import DungaFly from "./DungaFly";

const WORDS = ["Artificial Intelligence", "Tech", "Product"];
const PHRASE_TRANSITION_MS = 1200;
const PHRASE_HOLD_MS = 1600;

const CASE_STUDIES = [
  {
    title: "Metro plus Service design case study",
    url: "#/case-study/metro-plus-service-design",
    thumbnail: `${import.meta.env.BASE_URL}case-thumbnails/metro-plus-video.gif`,
    thumbnailPoster: `${import.meta.env.BASE_URL}case-thumbnails/metro-plus-video-poster.jpg`,
    thumbnailType: "gif",
    gifDurationMs: 4040,
  },
  {
    title: "AI x UX Case Study",
    url: "#/case-study/aiux-design-system",
    thumbnail: `${import.meta.env.BASE_URL}case-thumbnails/aiux-video.json`,
    thumbnailType: "lottie",
    // the true final frames fade to a plain background, so freeze earlier while the scene is still fully visible
    stopFrame: 450,
  },
  {
    title: "KYC Case Study",
    url: "#/case-study/kyc",
    thumbnail: `${import.meta.env.BASE_URL}case-thumbnails/kyc-video.json`,
    thumbnailType: "lottie",
    loopForever: true,
  },
  {
    title: "Western Union Motion Guidelines",
    url: "#/case-study/motion-guidelines",
    thumbnail: `${import.meta.env.BASE_URL}case-thumbnails/motion-guideline-video.json`,
    thumbnailType: "lottie",
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

function CaseStudyThumbnail({ item }) {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const gifTimerRef = useRef(null);
  const stopFrameHandlerRef = useRef(null);

  useEffect(() => {
    if (item.thumbnailType === "lottie") {
      import("@lottiefiles/dotlottie-wc");
    }
  }, [item.thumbnailType]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    const playLottieFromStart = () => {
      const media = mediaRef.current;
      if (!media) return;
      const start = () => {
        const dl = media.dotLottie;
        if (!dl) return;
        if (stopFrameHandlerRef.current) {
          dl.removeEventListener("frame", stopFrameHandlerRef.current);
          stopFrameHandlerRef.current = null;
        }
        if (item.stopFrame != null) {
          const onFrame = (event) => {
            if (event.currentFrame >= item.stopFrame) {
              dl.pause();
              dl.setFrame(item.stopFrame);
              dl.removeEventListener("frame", onFrame);
              stopFrameHandlerRef.current = null;
            }
          };
          stopFrameHandlerRef.current = onFrame;
          dl.addEventListener("frame", onFrame);
        }
        dl.stop();
        dl.play();
      };
      if (media.dotLottie?.isLoaded) {
        start();
      } else {
        media.addEventListener("load", start, { once: true });
      }
    };

    const pauseLottie = () => {
      mediaRef.current?.dotLottie?.pause();
    };

    const playGifFromStart = () => {
      const media = mediaRef.current;
      if (!media) return;
      clearTimeout(gifTimerRef.current);
      media.src = `${item.thumbnail}?r=${Date.now()}`;
      gifTimerRef.current = setTimeout(() => {
        media.src = item.thumbnailPoster;
      }, item.gifDurationMs ?? 0);
    };

    const freezeGif = () => {
      clearTimeout(gifTimerRef.current);
      const media = mediaRef.current;
      if (media) media.src = item.thumbnailPoster;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (item.thumbnailType === "lottie") playLottieFromStart();
          else playGifFromStart();
        } else if (item.thumbnailType === "lottie") {
          pauseLottie();
        } else {
          freezeGif();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(gifTimerRef.current);
    };
  }, [item]);

  return (
    <div className="mesh-card-thumb" ref={containerRef} aria-hidden="true">
      {item.thumbnailType === "lottie" ? (
        <dotlottie-wc
          ref={mediaRef}
          src={item.thumbnail}
          loop={item.loopForever || undefined}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <img ref={mediaRef} src={item.thumbnailPoster} alt="" loading="lazy" />
      )}
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();
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
  const handleCardClick = (item) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(item.url.replace("#", ""));
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
            <p className="mesh-eyebrow">Selected work</p>
            <h2 id="selected-work-title">Case Studies</h2>
          </div>

          <motion.div
            className="mesh-cards-layer mesh-cards-layer--studies"
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {CASE_STUDIES.map((item, index) => (
              <motion.article
                className="mesh-card mesh-card--study"
                key={item.title}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.94 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.18, 0.84, 0.32, 1] },
                  },
                }}
                onPointerMove={updateCardGlow}
                onPointerLeave={resetCardGlow}
                onClick={() => handleCardClick(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="mesh-card-body mesh-card-body--study">
                  <CaseStudyThumbnail item={item} />
                  <h3>{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <DungaFly />
    </main>
  );
}
