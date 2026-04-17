# Marketing Site UI Kit — Titan Homes Group

Pixel-accurate React recreation of the `titanhomesgroup.com` marketing site. Components are cosmetic — no real routing, form submission, or data fetching — but the visual vocabulary matches the source codebase one-to-one.

## Run it
Open `index.html` — it demonstrates an interactive click-thru: Home → Services → Contact, with a working mobile menu + sticky header.

## Components
- `Header.jsx` — Sticky navy header with utility bar, mobile menu toggle, Free Consultation CTA.
- `Footer.jsx` — Four-column navy-deep footer with service/location/contact links.
- `Hero.jsx` — Photo hero with navy gradient overlay + trust bar underneath.
- `ServiceCard.jsx` — Navy card with icon tile, title, kicker copy, Learn More + Get Quote CTAs.
- `TrustSignals.jsx` — Lavender trust band (4 callouts).
- `Testimonials.jsx` — Three lavender quote cards + Google rating pill.
- `ProcessSteps.jsx` — Four navy-panel steps with lavender numeral circles.
- `StatsBand.jsx` — 4-up lavender stat tiles.
- `ServicesGrid.jsx` — Lavender-bg grid of ServiceCards.
- `LocationsGrid.jsx` — Lavender location tiles + View All CTA.
- `OfficesStrip.jsx` — Dark navy strip with Tampa + Sarasota office blocks.
- `CTASection.jsx` — Closing navy band with 3 CTAs + guarantee line.
- `Icons.jsx` — Lucide SVG icons for services + UI chrome.

## Sources
Direct recreation from `titanhomesgroup/components/*` and `titanhomesgroup/app/page.tsx`. Strings, numbers, service descriptions, and testimonials are copied verbatim from `titanhomesgroup/lib/data.ts` and the original JSX.
