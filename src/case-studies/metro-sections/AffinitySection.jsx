import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const INSIGHTS = [
  {
    num: "Insight 01",
    title: "Availability was invisible.",
    quote:
      "I just stand here and hope. Sometimes one comes in two minutes, sometimes twenty.",
    source: "Student · Hostel 12 stop",
    featured: true,
  },
  {
    num: "Insight 02",
    title: "Rejections were normal.",
    quote:
      "Autos refuse based on where you're going. Half the time I just walk.",
    source: "Working professional · Andheri",
  },
  {
    num: "Insight 03",
    title: "The last leg was forced, not chosen.",
    quote:
      "If you live more than 1 km from the station, the metro stops being an option.",
    source: "Daily commuter · Ghatkopar",
  },
  {
    num: "Insight 04",
    title: "Culture shapes who shares with whom.",
    quote:
      "I'll share an auto with another woman. Not with a stranger at 9 pm.",
    source: "Student · campus survey",
  },
  {
    num: "Insight 05",
    title: "Riders distrust changing behaviour.",
    quote:
      "If they change the route once, I'll stop trusting the timing forever.",
    source: "Faculty · long-term campus resident",
  },
];

export default function AffinitySection() {
  return (
    <ScrollSection id="metro-affinity">
      <RevealOnScroll>
        <SectionLabel dark={false}>04 · Consolidate</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          The wall told us five things.
          <br />
          Only one of them was solvable with a better app.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            We took every coded note onto a physical affinity wall (roughly
            600 sticky notes) and let the categories emerge instead of forcing
            them. After three passes, five insight clusters stabilised. The
            first one was the wedge: <strong>availability was invisible</strong>.
            Every other problem was a symptom of riders not knowing what was
            happening next.
          </p>
        </div>
      </RevealOnScroll>

      <div className="metro-insights">
        {INSIGHTS.map((ins, i) => (
          <RevealOnScroll key={ins.num} delay={0.05 * i}>
            <div className={`metro-insight ${ins.featured ? "metro-insight--featured" : ""}`}>
              <span className="metro-insight__num">{ins.num}</span>
              <h3 className="metro-insight__title">{ins.title}</h3>
              <p className="metro-insight__quote">"{ins.quote}"</p>
              <span className="metro-insight__source">· {ins.source}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.2}>
        <div className="metro-callout">
          <strong>Reframe.</strong> The product was never going to be "a better
          buggy app." It needed to be a <strong>system that gave riders a confident
          answer to one question</strong>: how do I get from where I am to where I'm
          going, right now, without guessing?
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
