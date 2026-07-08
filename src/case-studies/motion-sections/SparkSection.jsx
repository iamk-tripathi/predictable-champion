import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import VideoMockup from "../components/VideoMockup";

export default function SparkSection() {
  return (
    <section id="mo-spark" className="mo-section mo-section--raised">
      <div className="mo-noise" aria-hidden="true" />
      <div className="mo-section__inner">
        <RevealOnScroll>
          <span className="mo-label">The Spark</span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.04}>
          <h2 className="mo-headline">
            It started the way most good ideas do, over bad cafeteria food.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="mo-body">
            <p>
              Someone at lunch mentioned that Revolut had just shipped a
              polished 3D onboarding flow. Meanwhile, we were still running
              loaders that looked like they hadn't been updated since the early
              2000s. The comment landed as a joke, but it stuck with me for the
              rest of the day.
            </p>
            <p>
              Western Union is a company built on centuries of trust. Boomers
              and Millennials know the brand by reputation. But Gen Z doesn't
              just inherit trust, they evaluate it. They notice when an app
              feels dated. They notice when transitions feel clunky. And they
              quietly move to competitors that feel more modern.
            </p>
            <p>
              The interface worked. It was functional. But it had no rhythm, no
              personality, no sense of life. Every tap felt like pressing a
              vending machine button. The transaction happened, but nothing
              about it felt intentional.
            </p>
            <p>
              I realized this wasn't just a visual gap. It was a trust gap. And
              for a company in fintech, trust is the product.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <blockquote className="mo-quote">
            "It's hard to believe that we're still using loaders that look like
            they're from the early 2000s."
            <span className="mo-quote__attribution">
              The lunchtime comment that started everything
            </span>
          </blockquote>
        </RevealOnScroll>

        <RevealOnScroll delay={0.16}>
          <div className="mo-video-pair">
            <VideoMockup
              youtubeId="zU2fNQPlJfw"
              title="Western Union old onboarding"
              caption="Western Union's old onboarding"
            />
            <VideoMockup
              youtubeId="n2-HkCHiydA"
              title="Revolut intro animation"
              caption="Meanwhile, Revolut's onboarding"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
