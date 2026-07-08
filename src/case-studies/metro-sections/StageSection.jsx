import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

export default function StageSection() {
  return (
    <ScrollSection id="metro-stage">
      <RevealOnScroll>
        <SectionLabel dark={false}>01 · Setting the stage</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          A phygital last-mile brief.
          <br />
          The hard part was hiding in two words.
        </SectionHeadline>
      </RevealOnScroll>

      <div className="metro-brief-grid">
        <RevealOnScroll delay={0.1}>
          <div className="metro-brief-card metro-brief-card--original" style={{ height: "100%" }}>
            <span className="metro-brief-card__tag">The brief</span>
            <h3 className="metro-brief-card__title">
              Information system for an EV buggy in Mumbai.
            </h3>
            <p className="metro-brief-card__body">
              Design a phygital service experience to help drivers and
              commuters of EV buggies that provide last-mile connectivity
              between Mumbai's metro stations and nearby neighbourhoods. The
              IIT Bombay campus buggy is the prototype. Make routes flexible
              but transparent, optimise utilisation, reduce wait-time
              uncertainty, support accessible planning across physical and
              digital channels.
            </p>
            <p
              className="metro-brief-card__body"
              style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
            >
              Constraints · 25 poles per metro · 2 km radius · pole (offline)
              + rider web app + driver app · BMC DBO pitch
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.18}>
          <div className="metro-brief-card metro-brief-card--revised" style={{ height: "100%" }}>
            <span className="metro-brief-card__tag">What the brief didn't give us</span>
            <h3 className="metro-brief-card__title">
              An architecture for predictability.
            </h3>
            <p className="metro-brief-card__body">
              The brief named the symptom (uncertain waits, unclear routes,
              drivers blind to demand). It didn't say how to fix it. The pole
              and the app are just surfaces. The real work was designing the
              coordination layer underneath: how rider demand, an unowned
              driver fleet, and 25 poles per station talk to each other in
              real time. <strong>That layer is what I built the IA, the load-balancing
              model, and the Half-User concept for.</strong>
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.25}>
        <div className="stage-body cs-body">
          <p>
            The brief came in already ambitious. We were asked to design an
            information system for an EV buggy fleet that would connect Mumbai
            Metro stations to the neighbourhoods around them, using the IIT
            Bombay campus buggy as a working proof-of-concept. A phygital
            system: poles at every stop, a web app for riders, a separate app
            for drivers who would own and operate their own vehicles. 25 poles
            per metro station, inside a 2 km radius. The deliverable was a
            startup pitch to BMC for a design-build-operate contract.
          </p>
          <p>
            The interesting problem was hiding in two words near the bottom
            of the brief: <strong>"reduce wait-time uncertainty."</strong> A
            pole and an app are surfaces. They don't, by themselves, make
            anything predictable. Everything I owned on this project came out
            of taking those two words seriously and asking what kind of system
            would actually have to exist behind them.
          </p>
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}

