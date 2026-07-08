import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const QUOTES = [
  {
    text: "I didn't have to guess what version of my name to use.",
    avatar: "/avatar-testimonial-1.png",
    alt: "User avatar 1",
  },
  {
    text: "Didn't know Aadhaar and PAN were synced. Saved me from a mistake.",
    avatar: "/avatar-testimonial-2.png",
    alt: "User avatar 2",
  },
  {
    text: "Felt like the app already knew me.",
    avatar: "/avatar-testimonial-3.png",
    alt: "User avatar 3",
  },
];

export default function TestimonialSection() {
  return (
    <ScrollSection id="testimonials">
      <RevealOnScroll>
        <SectionLabel dark={false}>Validation</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          The real test is what people say when you're not in the room.
        </SectionHeadline>
      </RevealOnScroll>

      <div className="cs-testimonial-grid">
        {QUOTES.map((q, i) => (
          <RevealOnScroll key={i} delay={0.08 * i}>
            <div className="cs-testimonial-card">
              <div className="cs-testimonial-card__header">
                <span className="cs-testimonial-card__mark" aria-hidden="true">"</span>
                <div className="cs-testimonial-card__avatar">
                  <img src={q.avatar} alt={q.alt} />
                </div>
              </div>
              <p className="cs-testimonial-card__text">{q.text}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </ScrollSection>
  );
}
