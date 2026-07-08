import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const USER_VIDEOS = [
  { id: "JhFGlI0dH2c", label: "Session 1" },
  { id: "LrS8TUXZOC0", label: "Session 2" },
  { id: "hkc9G5b_sLM", label: "Session 3" },
  { id: "3vodNHMpC1I", label: "Session 4" },
  { id: "v-bNFYJHyFw", label: "Session 5" },
  { id: "J3sgFd_hrQU", label: "Session 6" },
  { id: "JahPAXmUkl0", label: "Session 7" },
  { id: "fbh6Ib6nVbA", label: "Session 8" },
];

export default function UserFeedbackSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-feedback" className="mo-section mo-section--raised">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">User Reactions</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              We showed the prototypes to real users. Their reactions told us
              everything.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                Numbers tell one story. But watching someone interact with
                your work for the first time tells another. We ran user
                testing sessions across different demographics and markets.
                The reactions ranged from quiet nods of approval to genuine
                surprise at how different the experience felt.
              </p>
              <p>
                What stood out was how consistently users noticed the motion
                without being able to articulate exactly what changed. They
                said things like "it feels smoother" or "it feels more
                premium." That's exactly the response we were designing for.
                Motion that's felt, not seen.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="mo-user-grid">
              {USER_VIDEOS.map((v) => (
                <div key={v.id} className="mo-user-grid__item">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={v.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <blockquote className="mo-quote">
              "It feels like a completely different app. But I can't tell you
              exactly what changed."
              <span className="mo-quote__attribution">
                User testing participant
              </span>
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
