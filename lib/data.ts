import fs from "fs";
import path from "path";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  priceRange?: string;
  timeline?: string;
  financing?: boolean;
  benefits: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
}

export interface Location {
  name: string;
  slug: string;
  state: string;
  isMainCity?: boolean;
  county?: string;
  description?: string;
}

export interface PageData {
  service: string;
  serviceSlug: string;
  location: string;
  locationSlug: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bodyContent: string;
  faqs: { question: string; answer: string }[];
  nearbyLocations: string[];
}

// ─── Services ─────────────────────────────────────────────────────────────────

export function getServices(): Service[] {
  return [
    {
      name: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      icon: "🍳",
      shortDescription:
        "Custom luxury kitchen remodeling — layout planning, cabinetry, countertops, flooring, and lighting.",
      description:
        "Titan Homes Group delivers stunning, fully custom kitchen renovations designed around your lifestyle. From the initial layout consultation through material selection, cabinetry installation, countertop fabrication, flooring, and finishing details — our licensed team handles every phase. We specialize in high-end finishes and functional design that dramatically increases home value.",
      priceRange: "$20,000–$50,000",
      timeline: "4–12 weeks",
      financing: true,
      benefits: [
        "Custom cabinetry designed to maximize storage",
        "Premium countertop options — quartz, granite, marble",
        "LED and recessed lighting design",
        "Hardwood, tile, or luxury vinyl flooring",
        "New plumbing and electrical rough-in included",
        "Financing available — low monthly payments",
        "100% satisfaction guarantee before final payment",
      ],
      applications: [
        "Full kitchen gut and rebuild",
        "Cabinet refacing and replacement",
        "Countertop replacement",
        "Kitchen island additions",
        "Open-concept kitchen conversions",
        "Appliance niche and built-in design",
      ],
      faqs: [
        {
          question: "How long does a kitchen remodel take?",
          answer:
            "Most kitchen remodels take 4 to 12 weeks depending on scope. A simple refresh may complete in 4–6 weeks, while a full gut renovation can run 8–12 weeks. We provide a detailed timeline during your free consultation.",
        },
        {
          question: "Do you offer financing for kitchen remodels?",
          answer:
            "Yes. Titan Homes Group offers flexible financing options to make your dream kitchen achievable. Ask us about low monthly payment plans during your consultation.",
        },
        {
          question: "What is your payment policy?",
          answer:
            "We do not ask for final payment until you are 100% satisfied with the completed work — that's our guarantee.",
        },
        {
          question: "Do I need to move out during the remodel?",
          answer:
            "Most clients stay in their homes during a kitchen remodel. We work efficiently and keep the work area contained to minimize disruption to your daily life.",
        },
      ],
    },
    {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      icon: "🚿",
      shortDescription:
        "Full bathroom renovations — tile, fixtures, vanities, walk-in showers, and bathtubs for all styles and budgets.",
      description:
        "From a simple vanity upgrade to a spa-quality master bath transformation, Titan Homes Group handles the full scope of bathroom remodeling. Our designers work with you to select tile, fixtures, vanities, walk-in shower systems, freestanding tubs, and lighting that match your vision and budget. All work is performed by our licensed team with full permits where required.",
      benefits: [
        "Walk-in shower and rain head installations",
        "Freestanding soaking tub installation",
        "Custom tile work — floor, walls, and accents",
        "Frameless glass enclosures",
        "Double-sink vanity upgrades",
        "Heated flooring installation",
        "ADA-accessible bathroom design available",
      ],
      applications: [
        "Master bathroom renovations",
        "Guest and hall bathroom updates",
        "Walk-in shower conversions",
        "Tub-to-shower conversions",
        "Luxury spa bathroom design",
        "Accessible bathroom modifications",
      ],
      faqs: [
        {
          question: "How much does a bathroom remodel cost?",
          answer:
            "Bathroom remodeling costs vary widely based on size and scope. A basic update may start around $8,000, while a luxury master bath renovation can range from $25,000 to $60,000+. We provide free, detailed quotes.",
        },
        {
          question: "How long does a bathroom remodel take?",
          answer:
            "A typical bathroom remodel takes 2–4 weeks. Larger master baths with custom tilework may take 4–6 weeks. We'll give you an accurate timeline at your consultation.",
        },
        {
          question: "Do you handle plumbing and electrical?",
          answer:
            "Yes. Our team includes licensed plumbers and electricians who handle all rough-in and finish work as part of your remodel.",
        },
      ],
    },
    {
      name: "Full Home Renovations",
      slug: "full-home-renovations",
      icon: "🏠",
      shortDescription:
        "Complete interior and exterior renovations — transform your entire home with one trusted contractor.",
      description:
        "Titan Homes Group specializes in comprehensive whole-home renovations that transform outdated properties into modern, beautiful spaces. Whether you've purchased a fixer-upper or want to completely reimagine your current home, we manage every trade, permit, and design decision under one roof. Our team coordinates flooring, painting, kitchen, baths, windows, doors, and exterior updates seamlessly.",
      benefits: [
        "Single point of contact for all trades",
        "Full permit management and inspections",
        "Interior and exterior work in one project",
        "Significant cost savings vs. multiple contractors",
        "3D design concepts before construction begins",
        "Transparent scheduling and progress updates",
        "10+ years delivering whole-home transformations",
      ],
      applications: [
        "Fixer-upper complete transformations",
        "Pre-sale home renovations to maximize value",
        "Investment property rehabs",
        "Aging-home modernization",
        "Interior redesign and space reconfiguration",
        "Exterior makeovers including siding and roofing",
      ],
      faqs: [
        {
          question: "How is a whole-home renovation priced?",
          answer:
            "Pricing depends on home size, scope of work, and selected materials. We provide a detailed scope-of-work proposal with transparent line-item pricing after an in-person assessment.",
        },
        {
          question: "Do I need to vacate my home during a full renovation?",
          answer:
            "For extensive gut renovations, we recommend temporarily relocating. For phased renovations, many clients remain. We'll advise on the best approach for your specific project.",
        },
      ],
    },
    {
      name: "Home Additions",
      slug: "home-additions",
      icon: "🏗️",
      shortDescription:
        "Expand your living space — room additions, second stories, sunrooms, and garage conversions.",
      description:
        "When your family outgrows your current space, Titan Homes Group can design and build the perfect addition. We handle everything from architectural planning and permitting to foundation work, framing, roofing, and finish work. Our additions are built to seamlessly match your existing home's style and structure, adding both space and significant resale value.",
      benefits: [
        "Seamlessly integrated with existing structure",
        "Full architectural and permit management",
        "Foundation, framing, roofing, and finish",
        "Second-story additions and bump-outs",
        "Garage conversions and ADU builds",
        "Sunroom and Florida room additions",
        "Increases home value substantially",
      ],
      applications: [
        "Primary bedroom and en-suite additions",
        "Second-story additions",
        "In-law suite or ADU construction",
        "Sunroom and enclosed porch additions",
        "Garage-to-living-space conversions",
        "Home office additions",
      ],
      faqs: [
        {
          question: "Do home additions require permits?",
          answer:
            "Yes. Virtually all home additions require building permits. Titan Homes Group manages the entire permitting process with your local jurisdiction, ensuring full code compliance.",
        },
        {
          question: "How long does a home addition take?",
          answer:
            "Most home additions take 3–6 months from permit approval to completion, depending on size and complexity. We provide a detailed project schedule at the start.",
        },
      ],
    },
    {
      name: "New Construction",
      slug: "new-construction",
      icon: "🏛️",
      shortDescription:
        "Build your dream home from the ground up with full design-build services.",
      description:
        "Titan Homes Group is a fully licensed General Contractor in Florida (License #CBC1264713) offering complete design-build services for new residential construction. From land assessment and architectural design through foundation, framing, mechanical systems, and interior finishes — we bring your vision to life with quality craftsmanship and total transparency throughout the build process.",
      benefits: [
        "Full design-build under one contract",
        "Licensed General Contractor #CBC1264713",
        "Architectural design and engineering coordination",
        "Energy-efficient construction practices",
        "Premium material selections",
        "Transparent progress reporting throughout the build",
        "Warranty on all workmanship",
      ],
      applications: [
        "Custom single-family home construction",
        "Luxury estate builds",
        "Spec home construction",
        "Townhome and villa construction",
        "Vacation and second-home builds",
        "Energy-efficient and green construction",
      ],
      faqs: [
        {
          question: "How long does new home construction take?",
          answer:
            "Custom home builds typically take 8–18 months depending on size and complexity. We provide a detailed construction schedule during the design phase so you always know what to expect.",
        },
        {
          question: "Do you offer design services?",
          answer:
            "Yes. Our design-build model includes floor plan design, material selections, and 3D concept renderings so you can visualize your home before a single nail is driven.",
        },
      ],
    },
    {
      name: "General Construction",
      slug: "general-construction",
      icon: "🔨",
      shortDescription:
        "Commercial and residential general contracting for any project scope — licensed, bonded, and insured.",
      description:
        "Titan Homes Group provides professional general contracting services for both residential and commercial clients across Tampa Bay. Our licensed team coordinates all trades, manages subcontractors, and ensures every project is completed on time, on budget, and to code. From tenant improvements to structural repairs and new commercial builds, we bring 10+ years of expertise to every project.",
      benefits: [
        "Licensed General Contractor — FL #CBC1264713",
        "Fully bonded and insured",
        "Commercial and residential experience",
        "Single-source subcontractor management",
        "Detailed project scheduling",
        "Open-book budgeting and cost transparency",
        "BBB Accredited with 5-star Google rating",
      ],
      applications: [
        "Commercial tenant improvements",
        "Retail and office build-outs",
        "Structural repairs and reinforcement",
        "Multi-family residential projects",
        "Mixed-use development construction",
        "HOA and community renovation projects",
      ],
      faqs: [
        {
          question: "Are you licensed for commercial work?",
          answer:
            "Yes. Titan Homes Group holds Florida General Contractor license #CBC1264713 and is fully licensed, bonded, and insured for both residential and commercial construction projects.",
        },
        {
          question: "Do you manage subcontractors?",
          answer:
            "Absolutely. As your general contractor, we manage all subcontractors — plumbers, electricians, HVAC, framing, and more — so you have a single point of accountability.",
        },
      ],
    },
    {
      name: "Storm Damage Repair",
      slug: "storm-damage-repair",
      icon: "⛈️",
      shortDescription:
        "Emergency and insurance-backed storm damage restoration for roofs, walls, windows, and more.",
      description:
        "Florida homeowners know the devastation storms can cause. Titan Homes Group provides emergency storm damage repair and full restoration services for residential and commercial properties across Tampa Bay. We work directly with insurance companies, provide detailed damage assessments and documentation, and restore your property quickly and to the highest standards. Available for emergency response.",
      benefits: [
        "Emergency response available",
        "Direct insurance claim coordination",
        "Detailed damage documentation and photos",
        "Roof, siding, window, and structural repairs",
        "Licensed and insured for all restoration work",
        "Fast turnaround to protect your property",
        "10+ years experience with Florida storm damage",
      ],
      applications: [
        "Hurricane and tropical storm damage repair",
        "Roof damage and replacement",
        "Water intrusion and moisture damage",
        "Siding and exterior wall repairs",
        "Window and door replacement after impact",
        "Structural damage assessment and repair",
      ],
      faqs: [
        {
          question: "Do you work with insurance companies?",
          answer:
            "Yes. We work directly with all major insurance carriers, provide thorough damage documentation, and assist with the claims process to ensure you receive maximum coverage for your repairs.",
        },
        {
          question: "How quickly can you respond to storm damage?",
          answer:
            "We offer emergency response services for storm-damaged properties. Call us at (813) 608-4564 immediately after a storm for priority scheduling and emergency tarping or board-up services.",
        },
        {
          question: "What types of storm damage do you repair?",
          answer:
            "We repair all types of storm damage including roof damage, missing shingles, broken windows, siding damage, water intrusion, structural damage, and complete rebuilds when necessary.",
        },
      ],
    },
  ];
}

// ─── Locations ────────────────────────────────────────────────────────────────

export function getLocations(): Location[] {
  return [
    { name: "Tampa", slug: "tampa", state: "FL", isMainCity: true, county: "Hillsborough", description: "Tampa is the primary market for Titan Homes Group, serving as headquarters for the Tampa Bay region." },
    { name: "Clearwater", slug: "clearwater", state: "FL", county: "Pinellas", description: "Beautiful coastal city on the Gulf of Mexico known for its pristine beaches and growing residential market." },
    { name: "Palm Harbor", slug: "palm-harbor", state: "FL", county: "Pinellas", description: "Upscale unincorporated community in Pinellas County with a strong demand for home remodeling." },
    { name: "South Tampa", slug: "south-tampa", state: "FL", county: "Hillsborough", description: "One of Tampa's most desirable neighborhoods with luxury homes and high-end renovation demand." },
    { name: "St. Petersburg", slug: "st-petersburg", state: "FL", county: "Pinellas", description: "Florida's sunshine city — a vibrant metropolitan area with a booming real estate market." },
    { name: "Tarpon Springs", slug: "tarpon-springs", state: "FL", county: "Pinellas", description: "Historic Gulf Coast community known for its Greek heritage and beautiful waterfront properties." },
    { name: "Westchase", slug: "westchase", state: "FL", county: "Hillsborough", description: "Master-planned community in northwest Hillsborough County with premium home values." },
    { name: "Belleair", slug: "belleair", state: "FL", county: "Pinellas", description: "Affluent town in Pinellas County with luxury homes and a strong renovation market." },
    { name: "East Lake", slug: "east-lake", state: "FL", county: "Pinellas", description: "Growing suburban community on the east side of Pinellas County." },
    { name: "Keystone", slug: "keystone", state: "FL", county: "Hillsborough", description: "Upscale unincorporated community in northern Hillsborough County." },
    { name: "Sarasota", slug: "sarasota", state: "FL", county: "Sarasota", description: "Cultural hub on the Gulf Coast — Titan Homes Group's second office location serves this growing market.", isMainCity: false },
    { name: "Bradenton", slug: "bradenton", state: "FL", county: "Manatee", description: "Gateway to Anna Maria Island with a strong residential renovation market." },
    { name: "Wesley Chapel", slug: "wesley-chapel", state: "FL", county: "Pasco", description: "One of Florida's fastest-growing communities with extensive new construction and renovation demand." },
    { name: "Brandon", slug: "brandon", state: "FL", county: "Hillsborough", description: "Large unincorporated suburb east of Tampa with significant residential market." },
    { name: "Riverview", slug: "riverview", state: "FL", county: "Hillsborough", description: "Rapidly growing community in southern Hillsborough County." },
    { name: "Land O Lakes", slug: "land-o-lakes", state: "FL", county: "Pasco", description: "Charming community in northern Hillsborough and Pasco Counties." },
    { name: "Lutz", slug: "lutz", state: "FL", county: "Hillsborough", description: "Suburban community north of Tampa with established neighborhoods." },
    { name: "Odessa", slug: "odessa", state: "FL", county: "Hillsborough", description: "Upscale rural community in northwest Hillsborough County." },
    { name: "Dunedin", slug: "dunedin", state: "FL", county: "Pinellas", description: "Charming waterfront city in Pinellas County with a thriving arts scene." },
    { name: "Safety Harbor", slug: "safety-harbor", state: "FL", county: "Pinellas", description: "Historic waterfront city at the head of Old Tampa Bay." },
    { name: "Largo", slug: "largo", state: "FL", county: "Pinellas", description: "The third-largest city in Pinellas County with a diverse residential market." },
  ];
}

// ─── Page Data ────────────────────────────────────────────────────────────────

export function getPageData(slug: string): PageData | undefined {
  const filePath = path.join(process.cwd(), "public", "pages", `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as PageData;
}

export function getAllPageSlugs(): string[] {
  const pagesDir = path.join(process.cwd(), "public", "pages");
  if (!fs.existsSync(pagesDir)) return [];
  return fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find((s) => s.slug === slug);
}

export function getLocationBySlug(slug: string): Location | undefined {
  return getLocations().find((l) => l.slug === slug);
}
