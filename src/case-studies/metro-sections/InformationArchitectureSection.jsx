import React from "react";
import ScrollSection, { SectionLabel, SectionHeadline } from "../components/ScrollSection";
import RevealOnScroll from "../components/RevealOnScroll";

const IA_BRANCHES = [
  {
    node: "Home",
    children: [
      "Live nearby vehicles (buggy / auto / metro)",
      "Quick book · last route, last share preference",
      "Status of any active journey, pinned to top",
      "Account, wallet, history (collapsed)",
    ],
  },
  {
    node: "Search",
    children: [
      "From · To · When (default = now)",
      "Mode toggle · solo / shared / cheapest / fastest",
      "Saved places (home, work, hostel, station)",
      "Recent searches · one-tap replay",
    ],
  },
  {
    node: "Journey Preview",
    children: [
      "Multimodal plan (walk → metro → buggy → walk)",
      "ETA window with confidence band",
      "Share-with-whom filter (gender preference, group size)",
      "Confirm + pay in one screen",
    ],
  },
  {
    node: "Active Journey",
    children: [
      "Live ETA, next step always visible",
      "Driver / vehicle id + share contact (driver app)",
      "What happens if the next leg fails · pre-computed fallback",
      "End-of-journey rating + receipt",
    ],
  },
];

export default function InformationArchitectureSection() {
  return (
    <ScrollSection id="metro-ia">
      <RevealOnScroll>
        <SectionLabel dark={false}>08 · Information architecture</SectionLabel>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <SectionHeadline serif>
          The IA wasn't a deliverable. It was
          <br />
          the moment the product became designable.
        </SectionHeadline>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="cs-body" style={{ maxWidth: 820 }}>
          <p>
            This is the part of the project I owned end-to-end. I spent two
            days at a whiteboard mapping every state a rider could be in,
            then collapsed them into four screens. Not fourteen, not nine.
            Four. Anything that didn't fit into Home, Search, Journey Preview,
            or Active Journey was either a setting, a receipt, or a feature
            we didn't actually need.
          </p>
          <p>
            That constraint is what made the rest of the design tractable.
            Once the team agreed on these four nodes, every wireframe,
            navigation decision, and copy choice had a parent to defer to.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className="metro-ia-board">
          {/* Drop /metro-ia-whiteboard-1.jpg into public/ */}
          <div className="metro-placeholder" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
            <svg className="metro-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 3v18" />
            </svg>
            <div>
              IA whiteboard · drop <code>/metro-ia-whiteboard-1.jpg</code> into <code>/public</code>
            </div>
          </div>
          <div className="metro-ia-board__caption">
            Original IA exploration · whiteboard, IIT Bombay studio. Photographed
            during the architecture lock.
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className="metro-ia-board" style={{ marginTop: 24 }}>
          {/* Drop /metro-ia-whiteboard-2.jpg into public/ */}
          <div className="metro-placeholder" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
            <svg className="metro-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3v18" />
            </svg>
            <div>
              Node graph sketch · drop <code>/metro-ia-whiteboard-2.jpg</code> into <code>/public</code>
            </div>
          </div>
          <div className="metro-ia-board__caption">
            Node-graph view: the same IA collapsed onto the load-balancing
            problem, which set up the Half-User work later in the project.
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.25}>
        <h3 className="cs-headline" style={{ fontSize: "1.6rem", marginTop: 56, marginBottom: 8 }}>
          The four-node spec, written down.
        </h3>
        <p className="cs-caption" style={{ marginBottom: 0, maxWidth: 720 }}>
          The whiteboard turned into this. Every node has a job, a state, and
          a fallback. Nothing else ships.
        </p>
      </RevealOnScroll>

      <div className="metro-ia-tree">
        {IA_BRANCHES.map((b) => (
          <div key={b.node} className="metro-ia-tree__branch">
            <div className="metro-ia-tree__node">▎ {b.node}</div>
            {b.children.map((c) => (
              <div key={c} className="metro-ia-tree__sub">{c}</div>
            ))}
          </div>
        ))}
      </div>

      <RevealOnScroll delay={0.3}>
        <div className="metro-callout" style={{ marginTop: 32 }}>
          <strong>Why this mattered.</strong> Most travel apps optimise the
          search-and-book flow. We optimised the <strong>"I've already booked, now
          what?"</strong> flow, because the affinity wall told us that's where
          trust is won or lost.
        </div>
      </RevealOnScroll>
    </ScrollSection>
  );
}
