import React from "react";
import ScrollSection, {
  SectionLabel,
  SectionHeadline,
} from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedCounter from "../components/AnimatedCounter";
import Placeholder from "../components/Placeholder";

const WINS = [
  "Legal approved OTP-based verification",
  "Less friction for first-time users",
  "YoY growth linked to verified users",
];

export default function ResultsSection() {
  return (
    <ScrollSection id="results">
      <RevealOnScroll>
        <SectionLabel dark={false}>The Results</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.04}>
        <SectionHeadline>
          The numbers told the story before anyone asked.
        </SectionHeadline>
      </RevealOnScroll>

      <div className="cs-stat-grid">
        {/* Tile 1: +20% KYC success rate */}
        <RevealOnScroll delay={0}>
          <div className="cs-stat-card">
            <span className="cs-counter">
              <span style={{ color: "#57AA41", marginRight: 4 }}>▲</span>
              <span style={{ color: "#57AA41" }}>
                <AnimatedCounter value={20} prefix="+" suffix="%" inline />
              </span>
            </span>
            <span className="cs-stat-card__label">Increase in KYC success rate</span>
          </div>
        </RevealOnScroll>

        {/* Tile 2: -70% Name mismatch drop-offs */}
        <RevealOnScroll delay={0.1}>
          <div className="cs-stat-card">
            <span className="cs-counter">
              <span style={{ color: "#D73747", marginRight: 4 }}>▼</span>
              <span style={{ color: "#0980DB" }}>
                <AnimatedCounter value={70} prefix="-" suffix="%" inline />
              </span>
            </span>
            <span className="cs-stat-card__label">Name mismatch drop-offs</span>
          </div>
        </RevealOnScroll>

        {/* Tile 3: ₹1.2 Cr/yr savings */}
        <RevealOnScroll delay={0.2}>
          <div className="cs-stat-card">
            <span className="cs-counter">
              <span style={{ color: "#57AA41" }}>
                <AnimatedCounter value={1.2} prefix="₹" suffix="" inline />
              </span>
              <span style={{ color: "#0980DB" }}> Cr/yr</span>
            </span>
            <span className="cs-stat-card__label">Savings from eliminated failed-KYC fees</span>
          </div>
        </RevealOnScroll>

        {/* Tile 4: 7→4 min */}
        <RevealOnScroll delay={0.3}>
          <div className="cs-stat-card">
            <span className="cs-counter">
              <span style={{ color: "#D73747" }}>7</span>
              <span style={{ color: "#57AA41" }}>→</span>
              <span style={{ color: "#57AA41" }}>
                <AnimatedCounter value={4} inline />
              </span>
              <span style={{ color: "#0980DB" }}> min</span>
            </span>
            <span className="cs-stat-card__label">Time to complete KYC</span>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1}>
        <div className="cs-wins-row">
          {WINS.map((w, i) => (
            <div key={i} className="cs-wins-row__item">
              <span className="cs-wins-row__icon" aria-hidden="true">✓</span>
              <span>{w}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <p className="cs-caption" style={{ marginTop: 24, textAlign: "center" }}>
          Data as of Aug 2025
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <div style={{ marginTop: 48 }}>
          <img
            src="/analytics-dashboard.png"
            alt="Analytics dashboard — KYC success trend"
            style={{
              width: "100%",
              maxWidth: "1200px",
              aspectRatio: "21 / 9",
              borderRadius: "16px",
              display: "block",
              margin: "0 auto"
            }}
          />
          <p className="cs-caption" style={{ textAlign: "center", marginTop: 12 }}>
            Amplitude dashboard data of conversion, green line indicates the launch
          </p>
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
