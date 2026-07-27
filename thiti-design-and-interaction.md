# thiti.design: Design and Interaction Notes

Source URL: https://www.thiti.design/

Method

- Rendered content scrape of the landing page
- Live browser inspection of layout, structure, links, and interactive controls
- Human analysis of visual hierarchy, pacing, and likely design intent
- Firecrawl was not directly available in this environment, so this document uses an equivalent rendered-page inspection workflow

## Executive Summary

This landing page is a restrained portfolio site for a product designer focused on fintech and web3. The design is deliberately minimal at the shell level and visually rich in the work samples. The page uses a dark canvas, sparse navigation, tight typography, large negative space, and high-saturation project imagery to keep the interface quiet while letting portfolio pieces carry the emotional weight.

Interaction is similarly restrained. The page appears to prioritize low-friction browsing over novelty: primary navigation, project-card linking, a theme toggle, testimonial carousel controls, and a direct booking CTA. The experience is closer to editorial curation than to an animated marketing page.

## Information Architecture

Top-level sections observed on the landing page:

1. Header / navigation
2. Hero statement
3. Quick facts strip
4. Featured work
5. Agency work
6. Services / capabilities
7. Client logos or client band
8. Testimonials carousel
9. Footer CTA and social/contact links

Primary navigation targets:

- Work
- About
- Contact
- Book an Intro

Internal portfolio destinations linked from the landing page include:

- /polkadot
- /bitazza
- /block-aero
- /nightify
- /ooda
- /octav
- /novawallet
- /kardpay

## Content Summary

Hero proposition:

"Product Designer in Fintech & Web3. Building systems and interfaces that power global financial products."

Supporting metadata shown near the hero:

- Availability: Open to remote opportunities
- Experience: 8+ years, principal / lead designer
- Industry: Fintech, Web3 / blockchain
- Location: Bangkok, TH
- Local time and weather

Featured work emphasizes named client projects with short categorical descriptors such as web design, product design, web3 infra, CEX, and B2B SaaS.

Services listed:

- Product Design
- App Design
- Web Design
- Web Development
- Consultation
- Design System
- Design Review

The footer closes with a direct CTA around exploring possibilities and booking an intro call.

## Visual Design Analysis

### Overall Direction

The visual system is high-contrast and understated. The interface scaffolding is intentionally quiet, while the portfolio images are bright, glossy, and saturated. This creates a clear split between container and content:

- The site chrome is almost invisible
- The project thumbnails do the persuasive work
- The typography carries credibility and tone

### Color

Observed page background is near-black:

- Background: rgb(12, 12, 12)

Likely color strategy:

- Base canvas: near-black
- Primary text: white or near-white on dark surfaces
- Accent color: project-dependent, mostly coming from artwork instead of UI chrome
- Utility contrast: subtle lines, muted labels, understated separators

This is a strong portfolio pattern because it avoids competing with the case study visuals.

### Typography

Observed hero and section heading family:

- NeueHaasGroteskDisp Pro Regular fallbacking to sans-serif

Observed hero size sample:

- H1 around 36px in the inspected viewport

Typography behavior:

- Hero copy is concise and high-authority
- Section labels are small and editorial rather than loud
- Card copy is compact and functional
- Footer CTA likely returns to large-scale display typography

The type direction suggests taste, control, and confidence rather than startup exuberance.

### Layout and Spacing

The page uses significant negative space, especially above the featured work grid. That spacing creates a gallery-like rhythm:

- Navigation sits lightly at the top edge
- The hero has room to breathe
- Work sections are separated with generous vertical padding
- Cards align in a clean multi-column grid

The spacing strategy makes the site feel premium without needing heavy decoration.

### Imagery

The project tiles are the most visually dominant elements on the page.

Characteristics observed:

- Large-format mockup imagery
- Bold gradients and saturated colors
- Product screens staged inside device or marketing compositions
- Minimal text overlay on the artwork itself

This signals a portfolio built to sell outcome and craft at a glance.

## Interaction Analysis

### Primary Interaction Model

The landing page is browse-first. Users are expected to scan, identify a relevant project, and click into deeper work.

Core interactive elements found:

- Standard top navigation links
- Project cards that act as large click targets
- Theme toggle in the header
- Testimonial carousel previous/next controls
- Footer CTA to book a call
- Social and contact links

### Navigation Behavior

The nav is simple and low-noise:

- Brand/home link at left
- Work, About, Contact links
- Theme toggle as a compact utility action

This suggests the homepage is not trying to trap the user in a long scroll. It is a gateway into portfolio content and direct contact.

### Work Card Behavior

Observed from live inspection:

- Cards are anchor-based click targets
- The first sampled card is rendered as a flex container
- Border radius is 0px, reinforcing the sharp editorial feel
- Transition is present at the CSS level, though the exact animated property was not exposed in the inspection snapshot

Interpretation:

- Cards likely rely on subtle hover states rather than dramatic motion
- The visual invitation is driven mostly by the artwork itself
- The absence of rounded corners keeps the page crisp and modernist

### Testimonial Carousel

The testimonials section includes explicit previous and next arrow buttons.

Observed behavior:

- Buttons expose accessible labels: Previous and Next
- Clicking Next changes the visible quote content

Interpretation:

- The carousel is there to compress social proof into a small footprint
- Manual controls suggest user-paced browsing over auto-rotation
- This is the page's most obvious non-navigation interactive component

### Theme Toggle

The header includes a toggle theme control.

Design implication:

- The site likely supports a light/dark variation or a display-mode swap
- Including it in the header signals a polished personal-product sensibility rather than a static portfolio export

### Cursor and Motion

Inspection surfaced cursor styles of none on sampled interactive elements. That suggests one of two patterns:

- A custom cursor system is in use
- The default pointer is intentionally hidden for a stylized browsing experience

This is important interactionally because it changes the feel of hovering and clicking. If intentional, it positions the site closer to fashion/editorial portfolio behavior than conventional SaaS UX.

## UX Strengths

- Clear professional positioning above the fold
- Strong visual restraint in the shell, keeping attention on work
- Large, legible portfolio cards with straightforward categorization
- Good conversion path via "Book an Intro"
- Social proof included without overwhelming the page
- Services list supports breadth without diluting the portfolio focus

## UX Risks or Tradeoffs

- Heavy reliance on imagery means slower load or weaker performance could damage first impressions
- A hidden or custom cursor can reduce clarity if not executed carefully
- Very minimal shell UI can feel sparse if the work imagery fails to load
- Theme toggles on portfolio sites are nice-to-have, but not always valuable enough to justify complexity
- Testimonial carousel content can be skipped if controls are visually understated

## Likely Design Intent

The site appears optimized for three user questions:

1. Is this designer credible in serious product categories?
2. Does the work look premium and contemporary?
3. Can I quickly move from browsing to contacting?

Every major decision supports those questions:

- Short, authoritative hero copy establishes domain fit
- Work cards provide immediate proof
- Services and testimonials broaden trust
- Booking CTA shortens the path to engagement

## Suggested Structured Extraction Schema

If this were being extracted via Firecrawl into structured JSON, these fields would be worth capturing:

- site_title
- meta_description
- hero_headline
- hero_supporting_facts
- primary_nav_links
- featured_projects[]
- agency_projects[]
- services[]
- client_logos_present
- testimonials[]
- cta_label
- cta_target
- social_links[]
- interaction_features[]
- visual_style_notes

## Crawl Recommendations

For a full crawl focused on design documentation rather than generic content scraping, prioritize:

1. Landing page
2. Work index page
3. Individual case study pages
4. About page
5. Contact / booking flow destinations

Best extraction outputs:

- Markdown for page narrative
- HTML for structural fidelity
- Screenshot for visual reference
- Structured JSON for project metadata and testimonial records

## Final Assessment

This is a disciplined, image-forward portfolio homepage with a premium dark editorial aesthetic. It does not try to impress through complexity. It tries to demonstrate taste, maturity, and relevant domain experience with as little interface noise as possible.

The interaction model is intentionally lightweight: browse, inspect, trust, contact. That is the correct choice for this kind of personal portfolio. The strongest aspect of the page is the balance between restraint in the frame and intensity in the showcased work.