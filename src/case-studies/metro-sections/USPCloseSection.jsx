import React from "react";
import { Link } from "react-router-dom";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const USP = [
  {
    num: "USP 01",
    title: "End-to-end last mile.",
    body:
      "Most transit apps stop at the station. Metro+ owns the rider's full journey (walk, metro, buggy, walk) and is held accountable for the seam between them.",
  },
  {
    num: "USP 02",
    title: "Book everything in one app.",
    body:
      "Auto, metro, shared buggy, e-bike · same flow, same wallet, same predictability contract. No mode-switching tax for the rider.",
  },
  {
    num: "USP 03",
    title: "Tech that expands and contracts.",
    body:
      "The same load-balancing model that runs a 20-buggy campus also runs a 2,000-vehicle metro feeder fleet. Deploy small, scale geometrically.",
  },
];

export default function USPCloseSection() {
  return (
    <ScrollSection id="metro-close">
      <RevealOnScroll>
        <SectionLabel dark={false}>14 · What makes Metro+ different</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          Three USPs, one underlying bet:
          <br />
          predictability is a product, not a feature.
        </SectionHeadline>
      </RevealOnScroll>

      <div className="metro-usp-grid">
        {USP.map((u, i) => (
          <RevealOnScroll key={u.num} delay={0.07 * i}>
            <div className="metro-usp">
              <span className="metro-usp__num">{u.num}</span>
              <h3 className="metro-usp__title">{u.title}</h3>
              <p className="metro-usp__body">{u.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.25}>
        <h3 className="cs-headline" style={{ fontSize: "1.6rem", marginTop: 80, marginBottom: 8 }}>
          Outcome &amp; what I'd do next.
        </h3>
      </RevealOnScroll>

      <div className="metro-two-col">
        <RevealOnScroll delay={0.28}>
          <div className="cs-body" style={{ fontSize: "1rem" }}>
            <p>
              The brief was a campus buggy. The deliverable was a coordination
              layer with a defensible business case: <strong>Phase 1 profit of
              ₹34.85 Cr on a ₹950 Cr TAM</strong>, validated by usability tests
              with real metro riders. The architecture and the Half-User
              model are mine; the rest was the work of a team I had the
              privilege of leading on the systems side.
            </p>
            <p>
              If I had three more months: instrument the Half-User model with
              real fleet telemetry, run a live A/B against a baseline
              first-come-first-served dispatcher, and publish the geometry
              as an open spec so it can be picked up by other public-transit
              operators.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.34}>
          <div style={{ padding: 32, borderRadius: 16, background: "var(--cs-bg-mid)", color: "#fff", border: "1px solid var(--cs-border)" }}>
            <span className="metro-3c__label" style={{ color: "var(--cs-accent-green)" }}>What I personally owned</span>
            <ul style={{ margin: "16px 0 0", paddingLeft: 16, lineHeight: 1.7, color: "var(--cs-blue-100)", fontSize: "0.95rem" }}>
              <li>Information Architecture (four-node spec)</li>
              <li>Load-balancing system + node graph</li>
              <li>Half-User concept (the unlock)</li>
              <li>Driver app instruction model (Hindi-first)</li>
              <li>Wireframing &amp; navigation lock</li>
              <li>Usability test plan &amp; synthesis</li>
            </ul>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.4}>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--cs-border-light)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--cs-blue-600)",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            ← Back to portfolio
          </Link>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--cs-text-secondary-light)" }}>
            Metro+ · IIT Bombay ePGD · Design of Interactive Products · 2026
          </span>
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
