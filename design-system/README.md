# Titan Homes Group — Design System

Brand design system for **Titan Homes Group**, Tampa Bay's licensed home remodeling & general construction company (FL License #CBC1264713). This folder contains the brand's design foundations, copy rules, iconography guidance, preview cards for the Design System tab, and a pixel-accurate UI kit recreating the marketing site.

---

## Company snapshot

Titan Homes Group delivers **full-service home remodeling and general construction** across the Tampa Bay region. Licensed, bonded and insured. In business since 2015, 350+ completed projects, 20+ full-time staff, 5.0★ Google rating.

**Services (7 pillars):**
1. Kitchen Remodeling ($20k–$50k, 4–12 weeks)
2. Bathroom Remodeling
3. Full Home Renovations
4. Home Additions
5. New Construction (design-build)
6. General Construction (commercial + residential)
7. Storm Damage Repair (hurricane response, insurance claims)

**Service areas:** 21 Tampa Bay / Sarasota communities including Tampa, Clearwater, St. Petersburg, South Tampa, Palm Harbor, Sarasota, Wesley Chapel, Brandon, etc.

**Offices:**
- **Tampa** — 5103 Memorial Hwy, Tampa, FL 33634 — (727) 709-4141
- **Sarasota** — 4333 S Tamiami Trail Suite A, Sarasota, FL 34231 — (727) 709-4141

**Tagline:** *Tampa Bay's Premier Home Remodeling & Construction Experts*
**Promise:** *"We don't ask for final payment until you're 100% happy." — The Titan Guarantee*

---

## Products represented

There is **one product**: the **marketing website** (`titanhomesgroup.com`). It is a programmatic SEO Next.js site generating ~150 service-×-location landing pages plus core pages (home, about, services, locations, contact). No logged-in product, no mobile app.

That means this design system centers on **marketing surfaces** — hero sections, service cards, testimonial blocks, trust bars, location grids, and CTA bands — rendered against a restrained navy + lavender palette.

---

## Sources

- **Codebase (local mount):** `titanhomesgroup/` — Next.js 15 App Router + Tailwind 4. Key files:
  - `app/globals.css` — CSS variables + button classes
  - `app/layout.tsx` — loads Gantari font, Header + Footer
  - `app/page.tsx` — home page composition
  - `components/*.tsx` — Header, Footer, Hero, ServiceCard, Testimonials, TrustSignals, ProcessSteps, CTASection
  - `lib/data.ts` — canonical services + locations data
  - `lib/seo.ts` — tagline, phone numbers, addresses, license
- **GitHub repo:** `coolpeter2025/Titan_Site` (same codebase, remote origin)
- **Screenshots:** `assets/screenshots/` — reference renders at 375/768/1440 widths
- **Reference styling origin:** per `globals.css` comment, the palette is "derived from premiere-builders.net"

---

## Index of this folder

| File / folder | What it is |
|---|---|
| `README.md` | You are here — brand context, content rules, visual foundations, iconography |
| `SKILL.md` | Agent Skills front-matter — makes this folder reusable in Claude Code |
| `colors_and_type.css` | All CSS variables + button classes. Import this into any design. |
| `assets/logo/` | Logo lockups (SVG, built to match the codebase's inline logo treatment) |
| `assets/icons/` | Service icon set (line SVGs — **flag:** codebase currently uses emoji, see ICONOGRAPHY) |
| `assets/screenshots/` | Reference renders of the live site at 375/768/1440 |
| `preview/` | HTML cards registered in the Design System tab (type, colors, spacing, components, brand) |
| `ui_kits/marketing-site/` | Pixel-perfect recreation of the marketing site — `index.html` + JSX components |

---

## CONTENT FUNDAMENTALS

### Voice
Trustworthy contractor. Grown-up, confident, local. Not chatty, not flowery. The brand sells a high-trust, high-ticket service (kitchen remodels from $20k), so copy leans on **credentials, numbers, and guarantees** rather than lifestyle poetry.

### Person
- **"We"** for Titan, **"you"** for the reader. Almost always.
- Owner-directed: *"We bring your vision to life."* *"Get in touch with our team today."*
- Never first-person singular. Never breezy ("hey there" / "let's get started"). Never corporate-plural-passive ("it is recommended").

### Tone levers

| Dimension | Setting | Evidence |
|---|---|---|
| Formality | Medium-high | *"Award-Winning Craftsmanship, Unmatched Expertise"* |
| Warmth | Medium | *"We believe that home remodeling isn't just about construction — it's about trust"* |
| Urgency | Low baseline, high for storm damage | *"Available for emergency response"* |
| Hype | Low. No superlative stacking. | Service descriptions stick to facts + benefits |
| Humor / emoji | **None in body copy.** | (Emoji-as-icons in data.ts are a dev stand-in — see ICONOGRAPHY) |

### Casing
- **Section headlines:** Title Case — *"From Kitchens to Full Rebuilds — We Do It All"*
- **Eyebrow labels:** ALL CAPS, 0.14em tracking — *"ABOUT TITAN HOMES GROUP"*, *"WHAT WE DO"*, *"CLIENT REVIEWS"*
- **Buttons:** Title Case — *Free Consultation*, *Get a Quote*, *Learn More*, *View All Services*
- **Nav:** Title Case — *Home, About, Services, Areas Served, Contact*
- **Body copy:** Sentence case.

### Sentence structure
Short leading clause, em-dash, expansion. Very common pattern:
> *"From the initial layout consultation through material selection, cabinetry installation, countertop fabrication, flooring, and finishing details — our licensed team handles every phase."*

Em-dashes (—, not hyphens) and bulleted benefit lists are core rhythm. Numbers appear as numerals (*10+, 350+, 5.0★*), never spelled out.

### Required trust tokens
Every major page includes:
- The license number: **#CBC1264713**
- The four trust stats: **10+ years, 350+ projects, 20+ pros, 5.0★ Google**
- Two phone numbers (Tampa + Sarasota)
- The guarantee line: *"We don't ask for final payment until you're 100% happy."*

### Headline examples (lifted verbatim)
- *Tampa's Trusted Home Remodeling Experts* (hero H1)
- *Award-Winning Craftsmanship, Unmatched Expertise* (about H2)
- *Expert Renovations · Transparent Pricing · Unmatched Customer Care* (middot-separated tri-point)
- *What to Expect: A Seamless Remodeling Experience* (process section)
- *From Kitchens to Full Rebuilds — We Do It All* (services grid)
- *What Tampa Bay Homeowners Say* (testimonials)
- *Serving All of Tampa Bay* (locations)
- *Let's Build Your Dream Home* (closing CTA)

### Vibe summary
**Confident local craftsman in a clean navy uniform.** More "licensed general contractor" than "luxury lifestyle brand." Speaks to a Tampa homeowner deciding whether to trust a large project to a stranger.

---

## VISUAL FOUNDATIONS

### Palette

A **two-color brand**: **Navy** (`#333d7a`) + **Lavender** (`#ebeeff`). These two do 90% of the work. Three navy shades stack depth (primary / deep / darker), one lavender hover creates the only pale interactive state. No teals, no golds, no reds.

- **Navy `#333d7a`** — buttons, card backgrounds, headings, nav bar
- **Navy-deep `#2a315b`** — hero gradient overlay, footer, office strip
- **Navy-darker `#1f2547`** — utility bar above header, deepest sections
- **Lavender `#ebeeff`** — alt-section backgrounds, primary-CTA fill on dark, testimonial cards, stat tiles, location tiles
- **Lavender-hover `#d9defc`** — button hover, tile hover, borders on lavender cards
- **Ink `#1a1f3a`** — body headings on white
- **Muted `#6b7280`** — secondary copy (gray-500)

**Inversion rule:** On light sections the primary CTA is **navy fill + white text**. On dark/navy sections the primary CTA **inverts to lavender fill + navy text** — the lavender becomes the "accent" that reads as pale on navy.

### Typography

- **Family:** **Gantari** (Google Fonts, weights 300/400/500/600/700/800). One family only. Used for display and body.
- **Weights in use:** 500 (medium), 600 (semibold — all headings), 700 (bold — eyebrow, buttons), 800 (extrabold — the "TITAN" logo box only).
- **Tracking:** headings `-0.01em` (letterspacing tightened), eyebrows `0.14em` (generously spaced caps).
- **Line heights:** 1.1 for hero H1, 1.15 for H2, 1.6 for body.
- **Scale on desktop:** hero 56px → H2 36px → H3 24px → body 16px → eyebrow 13px. Mobile drops hero to 36px.

### Backgrounds

- **No patterns, no textures, no hand-drawn anything, no repeating tile images.** The site is flat color.
- **One photographic hero:** stock kitchen photography (light, warm, realistic — no filters/grain) with a navy gradient overlay: `linear-gradient(90deg, rgba(42,49,91,0.88) 0%, rgba(42,49,91,0.72) 40%, rgba(42,49,91,0.35) 100%)` — darker at left so text is legible, fades right to reveal the image.
- **Section rhythm** alternates three surfaces: `white → lavender → white → navy → lavender → white → navy(deep) → navy`. Never two white sections adjacent.

### Gradients

- **One gradient only** — the hero navy overlay described above.
- All buttons, cards, bars are **solid fills**. No gradient buttons. No glassmorphism. No colorful gradients.

### Imagery vibe

Photography is **warm daylight, realistic, American-suburban kitchen/bath interiors**. No black-and-white. No grain. No color-graded "moody" treatments. No people close-ups in marketing photos — focus on finished rooms. (The single hero has people, shot bright.)

### Layout & rhythm

- Max content width **1280px** (`max-w-7xl`), gutter **24px** at `lg`, **16px** at mobile.
- Section vertical padding **64–80px** (`py-16 sm:py-20`).
- Grids: 4-up for services/stats, 3-up for testimonials, 2-up for about + side-cards.
- Center-aligned H2 + eyebrow + kicker paragraph is the default "section intro" pattern.

### Cards

Three card species, each with a distinct treatment:
1. **Navy service card** — solid `--navy` fill, white text, **rounded 8px** (`rounded-lg`), no border, subtle icon tile (`bg-white/10`, rounded-md). Hover: `-translate-y-1` + `shadow-2xl`.
2. **Lavender testimonial / stat card** — `--lavender` fill, **1px border** in `--lavender-hover`, rounded 8px, ink body text, navy accent.
3. **Navy panel (home intro side cards)** — full navy block with white heading, 70% white body, lavender CTA button nested inside.

No card ever uses a colored left-border accent. No card has a drop shadow at rest (except hover lift).

### Borders & dividers

- Lavender cards: 1px `--lavender-hover` border.
- Testimonial cards: internal divider is 1px `--lavender-hover` above the author line.
- On navy: 1px `rgba(255,255,255,0.10–0.15)` for footer column dividers.
- Never double borders, never dashed.

### Radii

One small family: **4px / 6px / 8px**.
- **6px** — buttons, inputs, the TITAN logo box (`rounded-sm`–`rounded`).
- **8px** — cards, panels (`rounded-lg`).
- **4px** — service tags, small pills.
- **Full-round** only on: the 56px process-step numbered circles, the 5-star icons (implicit).
No 16/20/24px radii. No asymmetric radii.

### Shadows

Almost none at rest. Shadow only appears on **hover** for the navy service cards (`shadow-2xl` / `0 25px 50px -12px`). The header itself uses a small `shadow-md`. No inner shadows anywhere. No glow, no colored shadows.

### Hover states

- **Primary (lavender) button:** lavender → lavender-hover (a shade darker).
- **Navy button:** navy → navy-deep.
- **White-outline button (on navy):** outline fades to solid white fill + navy text.
- **Navy service card:** `-translate-y-1` lift + large shadow.
- **Location tile:** lavender → lavender-hover (background only).
- **Nav links:** `text-white/90` → `text-white`.
- **Footer links:** `text-white/75` → `text-white`.

All transitions are **150ms ease**. No bounces, no springs, no stagger.

### Press / active states

Not explicitly styled — relies on browser default tap highlight, which is suppressed via `-webkit-tap-highlight-color: transparent`. Translation: treat press as the same visual as hover; don't add shrink/scale.

### Animation

Effectively none. `scroll-behavior: smooth` on `<html>` is the only page-level motion. No scroll-triggered reveals, no Lottie, no video, no parallax, no marquee.

### Transparency & blur

Used sparingly on the hero trust bar: `bg-[var(--navy-darker)]/80 backdrop-blur-sm`. Elsewhere, opacity is used on **text on navy** (`text-white/90`, `/80`, `/70`, `/55`) to create hierarchy without introducing a new color. No blurs on images.

### Fixed elements

- **Sticky header** (`sticky top-0 z-50`) — navy, full width.
- **No sticky footer, no floating CTA, no cookie banner, no chat bubble.**

### Icons

See **ICONOGRAPHY** below — currently emoji in data (⚠️ flagged), replaced with line SVG icons in this design system.

### Minimum hit targets

Buttons, nav tap targets ≥ **44px** (mobile CTAs use 48px).

### Vibe summary

**Flat, confident, two-color, no-ornament, no-motion.** A trustworthy utilities-company aesthetic dressed up slightly with Gantari's warm humanist letterforms and a calming lavender pale against structural navy.

---

## ICONOGRAPHY

### Current state in the codebase
`lib/data.ts` stores service icons as **emoji literals**: 🍳 (kitchen), 🚿 (bath), 🏠 (full home), 🏗️ (additions), 🏛️ (new construction), 🔨 (general), ⛈️ (storm). `ServiceCard.tsx` renders them inside a 48px rounded `bg-white/10` tile at 24px size. No other icons exist in the codebase — nav, footer, and trust bar are text-only.

**⚠️ This is a brand gap.** Emoji render differently per OS (Apple sparkle vs. Windows Segoe vs. Android Noto), hurting a premium contractor's visual consistency. The design system recommends replacing them with **stroke SVG icons**.

### Recommended icon set

**Lucide** (`lucide.dev`, ISC licensed, ~1,400 icons, 2px stroke, 24×24 grid). Rationale:
- 2px uniform stroke matches Gantari's medium weight
- Monoline style pairs with a flat, border-light UI
- Renders crisply at the 24px / 48px sizes the site uses
- CDN available: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`

**Service → Lucide mapping:**
| Service | Icon | Replaces |
|---|---|---|
| Kitchen Remodeling | `chef-hat` or `utensils` | 🍳 |
| Bathroom Remodeling | `bath` | 🚿 |
| Full Home Renovations | `home` | 🏠 |
| Home Additions | `hard-hat` or `square-plus` | 🏗️ |
| New Construction | `building-2` | 🏛️ |
| General Construction | `hammer` | 🔨 |
| Storm Damage Repair | `cloud-lightning` | ⛈️ |

SVG assets for each service are in `assets/icons/` — drawn to a 24×24 grid with 2px stroke, `currentColor` stroke, no fill. Use at 24px inside a 48px `rgba(255,255,255,0.10)` tile (matches existing ServiceCard layout).

### Unicode usage
One Unicode character is part of the brand rhythm: **`·` (middot, U+00B7)** used to separate trust-bar items and tri-point headlines — *"Expert Renovations · Transparent Pricing · Unmatched Customer Care"*. The star rating uses **`★` (U+2605)** at size 20–24px in navy fill. Don't introduce other decorative glyphs.

### Logo
The codebase draws the logo inline as HTML: a white rounded box with `TITAN` in extrabold navy letters, next to the wordmark "Titan Homes Group" + kicker line. No image asset exists in the repo. `assets/logo/titan-lockup.svg` in this design system is a faithful SVG reconstruction of that treatment, plus an inverted variant for light backgrounds.

### Emoji policy
**Never in production body copy, headings, buttons, or hero.** The only historical use is the data-level service icon field and that's slated for replacement.

---

## Substitutions flagged

1. **Font files not shipped** — the codebase uses `next/font/google` to load Gantari at build time. No TTFs are in-tree. This design system imports Gantari via Google Fonts CSS. If you need a self-hosted copy, download it from [fonts.google.com/specimen/Gantari](https://fonts.google.com/specimen/Gantari) and drop it in `fonts/`.
2. **Service icons: emoji → Lucide SVGs.** The codebase renders emoji; this system supplies proper SVGs in `assets/icons/` and flags emoji as a brand consistency issue. If the client wants to keep emoji, revert the ServiceCard mapping.
3. **Logo is code-drawn, not an image.** The `TITAN` rounded box is composed in JSX. I've created a matching SVG in `assets/logo/` for use in decks and PDFs where HTML-drawn logos aren't portable.
