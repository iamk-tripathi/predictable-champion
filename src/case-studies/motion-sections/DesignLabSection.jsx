import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import VideoMockup from "../components/VideoMockup";

export default function DesignLabSection() {
  return (
    <>
      <div className="mo-divider mo-divider--accent" />
      <section id="mo-designlab" className="mo-section mo-section--raised">
        <div className="mo-noise" aria-hidden="true" />
        <div className="mo-section__inner">
          <RevealOnScroll>
            <span className="mo-label">The Design Lab</span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.04}>
            <h2 className="mo-headline">
              Dozens of concepts. Most of them didn't survive the morning.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="mo-body">
              <p>
                With our principles locked in, we moved into the design lab.
                This was the messy middle, the part that doesn't make it into
                most case studies. Dozens of concepts. Prototypes that felt
                brilliant at 2 AM and embarrassing by morning. Animations that
                were technically impressive but served no real need.
              </p>
              <p>
                We iterated across loaders, button states, page transitions,
                input feedback, and card reveals. Each concept was tested
                against a simple question: does this help the user understand
                what just happened, or does it just look cool?
              </p>
            </div>
          </RevealOnScroll>

          {/* Microanimation demos - actual prototypes */}
          <RevealOnScroll delay={0.12}>
            <div className="mo-video-pair">
              <VideoMockup
                youtubeId="iE3wx94CvbQ"
                title="Slide to send animation"
                caption="Slide to Send"
              />
              <VideoMockup
                youtubeId="IJgFEQGaJAU"
                title="Status tracker animation"
                caption="Status Tracker"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <div className="mo-body">
              <p>
                We went through multiple rounds of iteration. Some animations
                felt too playful for a financial product. Others were so subtle
                they were invisible. The sweet spot was always the same:
                motion that felt like a natural part of the interaction, not
                something added on top of it.
              </p>
            </div>
          </RevealOnScroll>

          {/* More microanimation demos */}
          <RevealOnScroll delay={0.2}>
            <div className="mo-video-pair">
              <VideoMockup
                youtubeId="UxLZ1s9N0dI"
                title="R2R check animation"
                caption="R2R Check"
              />
              <VideoMockup
                youtubeId="HB98LgYLZA4"
                title="Action sheet animation"
                caption="Action Sheet"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.24}>
            <blockquote className="mo-quote">
              "We didn't want to just copy what others were doing. We wanted to
              build something uniquely Western Union, flexible enough for
              every product, distinctive enough to feel like us."
            </blockquote>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
