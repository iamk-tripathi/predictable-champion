import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const PERSONAS = [
  {
    role: "Primary · campus rider",
    name: "Samaiyra",
    quote:
      "I just need to know when the next buggy actually shows up, and whether I'll fit.",
    body:
      "21, undergrad, lives in a hostel 1.2 km from the academic block. Hates wasted minutes; prefers to walk if the buggy is more than 6 minutes away.",
    pains: ["No live ETA", "Buggies arrive full", "Cancels plans rather than wait"],
  },
  {
    role: "Primary · metro rider",
    name: "Ramesh Gupta Ji",
    quote:
      "If they fix the last 800 metres, I save 40 minutes a day. That's the whole reason I'd use the metro.",
    body:
      "47, mid-level manager, lives 900 m from a station. Currently drives because the last-mile is so unreliable that the metro never beats his car door-to-door.",
    pains: ["Autos refuse short rides", "No share confidence", "Time variance is worse than time cost"],
  },
  {
    role: "Secondary · driver",
    name: "Driver app · Hindi-first",
    quote:
      "Mujhe sirf next pickup chahiye. Map theek hai, lekin instructions ek line mein.",
    body:
      "Drivers don't want a polished UI; they want unambiguous one-line instructions in their own language, voice-cued where possible. The driver app is built around that constraint.",
    pains: ["English-heavy UIs", "Map clutter while driving", "No clarity on next assignment"],
  },
];

export default function PersonasSection() {
  return (
    <ScrollSection id="metro-personas">
      <RevealOnScroll>
        <SectionLabel dark={false}>06 · Personas</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Three people. Two cities. One overlapping need:
          <br />
          <em>tell me what's about to happen.</em>
        </SectionHeadline>
      </RevealOnScroll>

      <div className="metro-personas">
        {PERSONAS.map((p, i) => (
          <RevealOnScroll key={p.name} delay={0.08 * i}>
            <div className="metro-persona">
              <span className="metro-persona__role">{p.role}</span>
              <h3 className="metro-persona__name">{p.name}</h3>
              <p className="metro-persona__quote">"{p.quote}"</p>
              <p className="metro-persona__body">{p.body}</p>
              <ul className="metro-persona__pains">
                {p.pains.map((pain) => (
                  <li key={pain}>{pain}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
}
