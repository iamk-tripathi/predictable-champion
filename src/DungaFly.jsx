import React from "react";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { DungaStarfield } from "./DungaStarfield";
import "./dunga-fly.css";

const BASE = import.meta.env.BASE_URL;

const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const smoothstepFn = (x) => x * x * (3 - 2 * x);

const SECTIONS = [
  { id: "pitch", label: "pitch" },
  { id: "the-decade", label: "experience" },
  { id: "short-story", label: "short story" },
  { id: "talks", label: "talks" },
  { id: "manifesto", label: "manifesto" },
  { id: "lets-talk", label: "let's talk" },
];

// ── Content ──────────────────────────────────────────────────────────────────

const PITCH_DATA = {
  eyebrow: "Elevator pitch",
  body: "I build products that people need. Through research, experiments, design, common sense — and AI, of course.",
};

const DECADE_DATA = {
  caption: "I've worked for...",
  title: "Experience",
  logos: [
    `${BASE}images/logo-admkard.png`,
    `${BASE}images/logo-paytm.png`,
    `${BASE}images/logo-wu.png`,
  ],
};

const SHORT_STORY_DATA = {
  eyebrow: "About me",
  title: "Short story",
  bullets: [
    "An Engineer turned into Designer",
    "Homebrewer & amateur cook",
    "Badminton, Formula 1, Hiking",
    "Travel — but to eat and drink",
    "Workaholic ;)",
  ],
};

const TALKS_DATA = {
  title: "Talks",
  eyebrow: "Speaker / Mentor at",
  logos: [
    { src: `${BASE}images/talk-gdg.png`,          alt: "GDG",          label: "Google Developers Group" },
    { src: `${BASE}images/talk-iiitd.png`,         alt: "IIIT Delhi",   label: "IIIT Delhi" },
    { src: `${BASE}images/talk-growthschool.png`,  alt: "Growth School",label: "Growth School" },
    { src: `${BASE}images/talk-wu.png`,            alt: "IDC IIT Bombay",label: "IDC, IIT Bombay" },
  ],
};

const MANIFESTO_DATA = {
  lines: [
    "Art is abstract. I don't do art.",
    "Design is a function.",
    "I help people get the job done.",
  ],
};

const LETS_TALK_DATA = {
  title: "LET'S TALK",
  email: "iamk.tripathi@gmail.com",
  location: "PUNE, INDIA",
  name: "KUSHAGRA TRIPATHI",
};

// ── Section components ────────────────────────────────────────────────────────

function PitchSection() {
  return (
    <div className="df-pitch">
      <p className="df-eyebrow">{PITCH_DATA.eyebrow}</p>
      <p className="df-pitch__body">{PITCH_DATA.body}</p>
    </div>
  );
}

function DecadeSection() {
  return (
    <div className="df-decade">
      <p className="df-eyebrow">{DECADE_DATA.caption}</p>
      <h2 className="df-section-title">{DECADE_DATA.title}</h2>
      <div className="df-logo-grid">
        {DECADE_DATA.logos.map((src, i) => (
          <span className="df-logo-grid__item" key={src}>
            <img src={src} alt={`Client logo ${i + 1}`} loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ShortStorySection() {
  return (
    <div className="df-short-story">
      <p className="df-eyebrow">{SHORT_STORY_DATA.eyebrow}</p>
      <h2 className="df-section-title">{SHORT_STORY_DATA.title}</h2>
      <ul className="df-story-list">
        {SHORT_STORY_DATA.bullets.map((b) => (
          <li key={b}>
            <span className="df-story-list__marker">×</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TalksSection() {
  return (
    <div className="df-talks">
      <h2 className="df-section-title df-talks__title">{TALKS_DATA.title}</h2>
      <p className="df-eyebrow df-talks__eyebrow">{TALKS_DATA.eyebrow}</p>
      <div className="df-talk-logos">
        {TALKS_DATA.logos.map((logo) => (
          <span className="df-talk-logo__item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
            <span className="df-talk-logo__label">{logo.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ManifestoSection() {
  return (
    <div className="df-manifesto">
      {MANIFESTO_DATA.lines.map((line, i) => (
        <p
          key={line}
          className={
            i === 0
              ? "df-manifesto__line df-manifesto__line--muted"
              : "df-manifesto__line"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function LetsTalkSection() {
  return (
    <div className="df-lets-talk">
      <h2 className="df-lets-talk__title">{LETS_TALK_DATA.title}</h2>
      <a
        className="df-lets-talk__email"
        href={`mailto:${LETS_TALK_DATA.email}?subject=Let's Talk`}
      >
        {LETS_TALK_DATA.email}
      </a>
      <div className="df-lets-talk__foot">
        <span>{LETS_TALK_DATA.location}</span>
        <span>{LETS_TALK_DATA.name}</span>
      </div>
    </div>
  );
}

function SectionContent({ id }) {
  switch (id) {
    case "pitch":
      return <PitchSection />;
    case "the-decade":
      return <DecadeSection />;
    case "short-story":
      return <ShortStorySection />;
    case "talks":
      return <TalksSection />;
    case "manifesto":
      return <ManifestoSection />;
    case "lets-talk":
      return <LetsTalkSection />;
    default:
      return null;
  }
}

function ChevronUp() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      width="11"
      height="11"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5 6 4l3.5 3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Main experience ───────────────────────────────────────────────────────────

export default function DungaFly() {
  const N = SECTIONS.length;
  const zoneRef = useRef(null);
  const sectionRefs = useRef([]);
  const fillRef = useRef(null);
  const hintRef = useRef(null);
  const starRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const inZoneRef = useRef(false);
  const [active, setActive] = useState(0);
  const [inZone, setInZone] = useState(false);

  useEffect(() => {
    const readScroll = () => {
      const zone = zoneRef.current;
      if (!zone) return;
      // Absolute position from document top
      const zoneTop =
        zone.getBoundingClientRect().top + window.scrollY;
      const scrollMax = zone.offsetHeight - window.innerHeight;
      const localScroll = window.scrollY - zoneTop;
      targetProgress.current = clamp(localScroll / Math.max(1, scrollMax));
      const inRange =
        window.scrollY >= zoneTop - 80 &&
          window.scrollY <= zoneTop + scrollMax + 80;
      inZoneRef.current = inRange;
      setInZone(inRange);
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);

    let raf = 0;
    let lastIndex = -1;
    const span = 1 / (N - 1);

    const loop = (time) => {
      smoothProgress.current +=
        (targetProgress.current - smoothProgress.current) * 0.09;
      const p = smoothProgress.current;

      starRef.current?.render(p, time);

      for (let i = 0; i < N; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const d = (p - i * span) / span;
        const opacity = smoothstepFn(clamp(1 - Math.abs(d) / 0.6));
        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `translate3d(0, ${(-d * 7).toFixed(2)}vh, 0) scale(${(
          1 +
          d * 0.06
        ).toFixed(3)})`;
        el.style.pointerEvents = (inZoneRef.current && opacity > 0.6) ? "auto" : "none";
        el.style.filter =
          opacity < 0.9
            ? `blur(${((1 - opacity) * 6).toFixed(2)}px)`
            : "none";
        el.style.visibility = (inZoneRef.current && opacity >= 0.01) ? "visible" : "hidden";
      }

      if (fillRef.current)
        fillRef.current.style.height = `${(p * 100).toFixed(2)}%`;
      if (hintRef.current)
        hintRef.current.style.opacity = clamp(1 - p * 22).toFixed(3);

      const idx = Math.round(p * (N - 1));
      if (idx !== lastIndex) {
        lastIndex = idx;
        setActive(idx);
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
    };
  }, [N]);

  const goToNext = () => {
    const zone = zoneRef.current;
    if (!zone) return;
    const zoneTop =
      zone.getBoundingClientRect().top + window.scrollY;
    const scrollMax = zone.offsetHeight - window.innerHeight;
    const next = (active + 1) % N;
    window.scrollTo({
      top: zoneTop + (next / (N - 1)) * scrollMax,
      behavior: "smooth",
    });
  };

  const world = (
    <div
      className={`df-world${inZone ? " df-active" : ""}`}
      aria-hidden={!inZone}
    >
      <DungaStarfield ref={starRef} />
      <div className="df-vignette" aria-hidden="true" />
      <div className="df-grain" aria-hidden="true" />

      <div className="df-sections">
        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            className={`df-layer df-layer--${s.id}`}
            aria-label={s.label}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
          >
            <SectionContent id={s.id} />
          </section>
        ))}
      </div>

      <div className="df-overlay">
        <div className="df-progress-track">
          <div className="df-progress-fill" ref={fillRef} />
        </div>

        <nav className="df-section-nav">
          <button
            className="df-section-label"
            type="button"
            onClick={goToNext}
          >
            section <b>{SECTIONS[active].label}</b>
            <ChevronUp />
          </button>
        </nav>

        <div className="df-hint" ref={hintRef} aria-hidden="true">
          <span>scroll to fly</span>
          <div className="df-hint__line" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Scroll spacer — gives the zone its scrollable height */}
      <div
        ref={zoneRef}
        style={{ height: `${N * 110}vh` }}
        aria-hidden="true"
      />
      {/* Fixed world portaled to <body> so it isn't clipped by any ancestor */}
      {createPortal(world, document.body)}
    </>
  );
}
