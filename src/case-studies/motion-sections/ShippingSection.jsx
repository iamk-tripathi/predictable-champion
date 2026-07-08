import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import VideoMockup from "../components/VideoMockup";

const COLLAB_ITEMS = [
  {
    team: "Engineering",
    action: "Validated implementation feasibility and defined Lottie export pipeline.",
  },
  {
    team: "QA",
    action: "Standardized test criteria for motion: frame-rate benchmarks, easing validation, reduced-motion compliance.",
  },
  {
    team: "Product",
    action: "Embedded motion milestones into feature roadmaps across 6+ product teams.",
  },
  {
    team: "Design System",
    action: "Integrated motion properties as drag-and-drop components in Figma.",
  },
  {
    team: "New Designers",
    action: "Created a motion onboarding kit so anyone joining the team could use the system from day one.",
  },
];

export default function ShippingSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-shipping" className="mo-section mo-section--raised">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">Shipping & Adoption</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              Rolling out motion isn't a delivery. It's a cultural shift.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                A design system that nobody uses is just a PDF. We knew that
              adoption would be the real measure of success. Not the quality
                of the specs, but whether teams actually reached for them in
                their daily work.
              </p>
              <p>
                Implementation was a challenge. We wanted microanimations that
                were plug-and-play for developers, so we leveraged Lottie files.
                After hours of export experimentation with different dotLottie
                formats and JSON configurations, we built a pipeline that let
                developers drop in motion components without touching animation
                code.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12}>
            <div className="mo-video-pair" style={{ maxWidth: 800, margin: "48px auto" }}>
              <VideoMockup
                youtubeId="a1ndYLnF-UQ"
                title="Carousel Welcome animation"
                caption="Welcome Carousel"
              />
              <VideoMockup
                youtubeId="pDUJbZWft28"
                title="More components animation"
                caption="More Components"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <div className="mo-body">
              <p>
                We also built WunderBoi, a Figma plugin that lets designers
                select two frames, choose Beat values and curve presets, and
                instantly apply motion specs from our guidelines. No more
                copy-pasting easing values. No more memorizing the table of 75.
              </p>
            </div>
          </RevealOnScroll>

          {/* Collaboration list */}
          <RevealOnScroll delay={0.2}>
            <ul className="mo-collab-list">
              {COLLAB_ITEMS.map((item) => (
                <li key={item.team}>
                  <strong>{item.team}:</strong> {item.action}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
