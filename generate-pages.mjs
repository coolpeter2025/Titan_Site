import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const services = [
  { name: "Kitchen Remodeling", slug: "kitchen-remodeling" },
  { name: "Bathroom Remodeling", slug: "bathroom-remodeling" },
  { name: "Full Home Renovations", slug: "full-home-renovations" },
  { name: "Home Additions", slug: "home-additions" },
  { name: "New Construction", slug: "new-construction" },
  { name: "General Construction", slug: "general-construction" },
  { name: "Storm Damage Repair", slug: "storm-damage-repair" },
];

const locations = [
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Clearwater", slug: "clearwater", state: "FL" },
  { name: "Palm Harbor", slug: "palm-harbor", state: "FL" },
  { name: "South Tampa", slug: "south-tampa", state: "FL" },
  { name: "St. Petersburg", slug: "st-petersburg", state: "FL" },
  { name: "Tarpon Springs", slug: "tarpon-springs", state: "FL" },
  { name: "Westchase", slug: "westchase", state: "FL" },
  { name: "Belleair", slug: "belleair", state: "FL" },
  { name: "East Lake", slug: "east-lake", state: "FL" },
  { name: "Keystone", slug: "keystone", state: "FL" },
  { name: "Sarasota", slug: "sarasota", state: "FL" },
  { name: "Bradenton", slug: "bradenton", state: "FL" },
  { name: "Wesley Chapel", slug: "wesley-chapel", state: "FL" },
  { name: "Brandon", slug: "brandon", state: "FL" },
  { name: "Riverview", slug: "riverview", state: "FL" },
  { name: "Land O Lakes", slug: "land-o-lakes", state: "FL" },
  { name: "Lutz", slug: "lutz", state: "FL" },
  { name: "Odessa", slug: "odessa", state: "FL" },
  { name: "Dunedin", slug: "dunedin", state: "FL" },
  { name: "Safety Harbor", slug: "safety-harbor", state: "FL" },
  { name: "Largo", slug: "largo", state: "FL" },
];

// Nearby locations map
const nearbyMap = {
  "tampa": ["South Tampa", "Westchase", "Brandon", "Lutz"],
  "clearwater": ["Dunedin", "Safety Harbor", "Palm Harbor", "Largo"],
  "palm-harbor": ["Clearwater", "Tarpon Springs", "East Lake", "Dunedin"],
  "south-tampa": ["Tampa", "Westchase", "Brandon"],
  "st-petersburg": ["Clearwater", "Safety Harbor", "Largo"],
  "tarpon-springs": ["Palm Harbor", "Dunedin", "Clearwater"],
  "westchase": ["Tampa", "Odessa", "Lutz"],
  "belleair": ["Clearwater", "Largo", "Safety Harbor"],
  "east-lake": ["Palm Harbor", "Tarpon Springs", "Clearwater"],
  "keystone": ["Odessa", "Lutz", "Tampa"],
  "sarasota": ["Bradenton", "Riverview"],
  "bradenton": ["Sarasota"],
  "wesley-chapel": ["Land O Lakes", "Lutz", "Brandon"],
  "brandon": ["Tampa", "Riverview", "Wesley Chapel"],
  "riverview": ["Brandon", "Tampa", "Sarasota"],
  "land-o-lakes": ["Lutz", "Wesley Chapel", "Tampa"],
  "lutz": ["Land O Lakes", "Tampa", "Odessa"],
  "odessa": ["Tampa", "Westchase", "Keystone"],
  "dunedin": ["Clearwater", "Palm Harbor", "Tarpon Springs"],
  "safety-harbor": ["Clearwater", "Dunedin", "St. Petersburg"],
  "largo": ["Clearwater", "Belleair", "St. Petersburg"],
};

// Service-specific content generators
function getServiceContent(service, location, state) {
  const s = service.name;
  const l = location.name;
  const sl = `${l}, ${state}`;

  const contentMap = {
    "kitchen-remodeling": {
      intro: `Transform your kitchen with Titan Homes Group's expert kitchen remodeling services in ${sl}. Our licensed team designs and builds stunning, functional kitchens tailored to your lifestyle and budget.`,
      body: `Titan Homes Group delivers world-class kitchen remodeling services to homeowners throughout ${sl}. Whether you envision an open-concept cooking space, a chef-inspired layout, or a complete luxury kitchen transformation, our experienced team brings your vision to life with exceptional craftsmanship.

Our ${l} kitchen remodeling services cover every aspect of your project — from initial design consultation and 3D concept renderings to full installation. We source premium cabinetry, countertops, flooring, and fixtures, and our licensed contractors handle all plumbing and electrical work required during the remodel.

Homeowners in ${l} choose Titan Homes Group because we offer:

Transparent pricing with no hidden fees, a detailed project timeline, and regular progress updates. We work with budgets ranging from $20,000 for a focused refresh to $50,000+ for high-end custom builds. Financing options are available to make your ${l} kitchen remodel financially accessible.

Our satisfaction guarantee means we don't ask for final payment until you are 100% satisfied — that's our promise to every ${l} homeowner.`,
      faqs: [
        { question: `How much does kitchen remodeling cost in ${l}, FL?`, answer: `Kitchen remodeling in ${l} typically ranges from $20,000 for a targeted refresh to $50,000+ for a full luxury build. Factors include kitchen size, cabinet quality, countertop material, and scope of plumbing and electrical work. We provide detailed quotes after a free in-home consultation.` },
        { question: `How long does a kitchen remodel take in ${l}?`, answer: `Most kitchen remodels in ${l} take 4–12 weeks depending on scope. A cosmetic update might complete in 4–6 weeks, while a full gut renovation can take 8–12 weeks. We provide a detailed schedule at the start of every project.` },
        { question: `Do you offer kitchen design services in ${l}?`, answer: `Yes. Our in-house designer creates floor plans, assists with cabinet and countertop selection, and produces 3D concept renderings specifically for your ${l} home. All design services are included in our project proposals.` },
        { question: `Is financing available for kitchen remodeling in ${l}?`, answer: `Yes! Titan Homes Group offers flexible financing options for ${l} homeowners. Ask about our low monthly payment plans during your free consultation.` },
      ],
    },
    "bathroom-remodeling": {
      intro: `Elevate your bathroom with Titan Homes Group's premium bathroom remodeling services in ${sl}. From walk-in shower installations to complete spa-quality transformations, we handle every detail.`,
      body: `Titan Homes Group offers comprehensive bathroom remodeling services to homeowners in ${sl}. Our licensed team transforms outdated bathrooms into stunning, functional spaces that increase both your daily quality of life and your home's value.

Whether you're dreaming of a master bathroom with a freestanding soaking tub and rain shower, a sleek guest bathroom refresh, or an ADA-accessible renovation, our ${l} bathroom remodeling team delivers with expert craftsmanship and attention to detail.

Our bathroom remodeling services in ${l} include custom tile work (floor, wall, and accent), frameless glass shower enclosures, walk-in shower conversions, vanity and fixture upgrades, heated flooring, and all associated plumbing and electrical work.

${l} homeowners consistently rate Titan Homes Group 5 stars for professionalism, communication, and the quality of our finished work. We're proud to be a BBB Accredited, NKBA Certified contractor serving ${l} and the broader Tampa Bay region.`,
      faqs: [
        { question: `How much does bathroom remodeling cost in ${l}, FL?`, answer: `Bathroom remodeling in ${l} typically starts around $8,000 for a basic update and ranges to $50,000+ for a complete luxury master bath renovation. The final cost depends on bathroom size, tile selection, fixture quality, and plumbing requirements.` },
        { question: `How long does a bathroom remodel take in ${l}?`, answer: `A standard bathroom remodel in ${l} takes 2–4 weeks. Larger master bath renovations with custom tilework can take 4–6 weeks. We'll provide a detailed timeline after your free consultation.` },
        { question: `Do you handle plumbing and electrical for ${l} bathroom remodels?`, answer: `Yes. Our team includes licensed plumbers and electricians who handle all rough-in and finish work. Everything is coordinated in-house for a seamless ${l} bathroom remodeling experience.` },
      ],
    },
    "full-home-renovations": {
      intro: `Complete home transformation services in ${sl}. Titan Homes Group manages every trade, permit, and detail of your full home renovation — delivering stunning results under one licensed contractor.`,
      body: `Titan Homes Group specializes in complete whole-home renovations for ${l}, FL homeowners. If you've purchased a fixer-upper, want to modernize an aging property, or plan to maximize your home's value before selling, our experienced team delivers comprehensive renovation solutions with unmatched coordination and quality.

What sets Titan Homes Group apart for ${l} full home renovations is our ability to manage every aspect of your project — kitchen, bathrooms, flooring, painting, windows, doors, and exterior work — under one contract with one point of contact. This eliminates the coordination headaches that come with managing multiple contractors.

Our ${l} renovation process begins with a thorough assessment and a detailed scope-of-work proposal with transparent line-item pricing. We create 3D design concepts before construction begins, keep you informed with regular progress updates, and ensure every detail meets your vision.

With 10+ years serving the Tampa Bay area and 350+ completed projects, Titan Homes Group is the trusted choice for homeowners in ${l} who want a reliable, experienced partner for their biggest investment.`,
      faqs: [
        { question: `How do you price full home renovations in ${l}?`, answer: `We provide detailed, line-item pricing after a thorough in-home assessment of your ${l} property. Pricing depends on home size, scope of work, and your material selections. We're committed to complete transparency — no surprise charges.` },
        { question: `Do I need to move out during a full home renovation in ${l}?`, answer: `For extensive gut renovations in ${l}, we typically recommend temporarily relocating. For phased projects, many clients remain at home. We'll advise on the best approach for your specific project and timeline.` },
        { question: `How long does a full home renovation take in ${l}?`, answer: `Whole-home renovation timelines vary based on scope. Most projects in ${l} range from 2–6 months. We provide a detailed project schedule before work begins so you always know what to expect.` },
      ],
    },
    "home-additions": {
      intro: `Expand your living space in ${sl} with Titan Homes Group. We design and build room additions, second stories, sunrooms, and garage conversions that seamlessly integrate with your home.`,
      body: `When your family outgrows your current space or your lifestyle demands more room, Titan Homes Group designs and builds the perfect addition for your ${l} home. Our fully licensed general contracting team handles every phase — from architectural planning and permit management through foundation work, framing, roofing, and finish work.

Home additions are among the most valuable investments a ${l} homeowner can make. Whether you need a primary bedroom suite, a home office, an in-law suite, a sunroom with views of your Florida yard, or a full second-story addition, Titan Homes Group delivers additions that are structurally sound, architecturally harmonious with your existing home, and beautifully finished.

Our ${l} home addition services include all permit management with your local jurisdiction, coordination of all trades (structural, mechanical, electrical, plumbing, and finish), 3D design concepts, and our standard 100% satisfaction guarantee.

Titan Homes Group is proud to hold Florida General Contractor License #CBC1264713, giving ${l} homeowners the assurance that every addition is designed, permitted, and built to code.`,
      faqs: [
        { question: `Do home additions require permits in ${l}, FL?`, answer: `Yes. All home additions in ${l} require building permits. Titan Homes Group manages the entire permitting process with Hillsborough County or your local jurisdiction, ensuring full code compliance and protecting your investment.` },
        { question: `How much does a home addition cost in ${l}?`, answer: `Home addition costs in ${l} vary significantly based on size and type. A single-room addition might start around $50,000, while a second-story addition can range from $150,000 to $400,000+. We provide detailed quotes after assessing your property and discussing your vision.` },
        { question: `How long does a home addition take in ${l}?`, answer: `Most home additions in ${l} take 3–6 months from permit approval to completion. Larger projects like second-story additions may take 6–9 months. We provide a detailed construction schedule at the start of every project.` },
      ],
    },
    "new-construction": {
      intro: `Build your dream home from the ground up in ${sl} with Titan Homes Group. Complete design-build services from a fully licensed Florida General Contractor — FL #CBC1264713.`,
      body: `Titan Homes Group offers full design-build services for new residential construction in ${l}, FL. As a fully licensed Florida General Contractor (License #CBC1264713), we guide ${l} homeowners through every phase of building a custom home — from land assessment and architectural design through construction, inspections, and final walkthrough.

Building a custom home in ${l} is one of life's most significant decisions. Our design-build model gives you a single point of contact and full accountability from first sketch to move-in day. Our in-house design team creates detailed floor plans and 3D renderings so you can visualize your ${l} dream home before construction begins.

Throughout the build, we coordinate all trades and subcontractors, maintain rigorous quality control, and provide transparent progress reporting. Our new construction team in ${l} uses premium materials, energy-efficient building practices, and proven construction methods to deliver homes that are built to last and designed to perform in Florida's climate.

Titan Homes Group's reputation in ${l} and throughout Tampa Bay is built on quality craftsmanship, honest communication, and a genuine commitment to bringing each client's vision to life.`,
      faqs: [
        { question: `How long does it take to build a custom home in ${l}, FL?`, answer: `Custom home construction in ${l} typically takes 8–18 months depending on design complexity, size, and permitting timeline. We provide a detailed construction schedule during the design phase so you can plan accordingly.` },
        { question: `Do you offer design services for new construction in ${l}?`, answer: `Yes. Our design-build model includes full architectural coordination, floor plan design, material selections, and 3D renderings. We handle design and construction as a unified team, saving you time and ensuring cohesive results.` },
        { question: `What is your new construction warranty in ${l}?`, answer: `Titan Homes Group provides a workmanship warranty on all new construction in ${l}. We are also fully licensed, bonded, and insured, giving you comprehensive protection throughout the build process.` },
      ],
    },
    "general-construction": {
      intro: `Professional general contracting services for residential and commercial projects in ${sl}. Titan Homes Group — FL Licensed #CBC1264713, fully bonded and insured.`,
      body: `Titan Homes Group provides comprehensive general contracting services for residential and commercial clients throughout ${l}, FL. As a licensed Florida General Contractor (License #CBC1264713), our team manages all trades, coordinates subcontractors, and ensures every project in ${l} is completed on time, within budget, and to code.

Our ${l} general construction services are ideal for clients who need a reliable, experienced contractor to manage complex projects. This includes commercial tenant improvements, retail and office build-outs, structural repairs, multi-family residential projects, and large-scale residential renovations that require professional general contractor oversight.

What makes Titan Homes Group the preferred general contractor for ${l} clients is our open-book approach to budgeting, our detailed project scheduling, and our commitment to clear communication throughout every phase of construction. With 10+ years of experience and a BBB Accredited status, we are a trusted partner for ${l} businesses and homeowners alike.

Our team of 20+ full-time professionals — including experienced project managers, skilled carpenters, licensed plumbers, and licensed electricians — brings the depth and expertise necessary to deliver any project in ${l} to the highest standards.`,
      faqs: [
        { question: `Are you licensed for commercial construction in ${l}, FL?`, answer: `Yes. Titan Homes Group holds Florida General Contractor License #CBC1264713 and is fully licensed, bonded, and insured for both commercial and residential construction projects in ${l} and throughout Tampa Bay.` },
        { question: `How do you manage subcontractors on projects in ${l}?`, answer: `As your general contractor in ${l}, we manage and coordinate all subcontractors — plumbers, electricians, HVAC technicians, framing crews, and specialty trades. You have a single point of accountability throughout the project.` },
      ],
    },
    "storm-damage-repair": {
      intro: `Emergency storm damage repair and restoration services in ${sl}. Titan Homes Group works directly with insurance companies to restore your home quickly and professionally.`,
      body: `Florida homeowners in ${l} know the damage that hurricanes, tropical storms, and severe weather can cause. Titan Homes Group provides emergency storm damage repair and full property restoration services for ${l} residential and commercial clients, including direct coordination with your insurance company to maximize your claim.

Our ${l} storm damage repair services cover the full scope of storm-related damage: roof repairs and replacement, water intrusion and moisture damage remediation, siding and exterior wall repairs, window and door replacement, structural damage assessment and repair, and interior restoration after storm water entry.

We understand that time is critical after a storm. A damaged roof or broken window left unaddressed can lead to escalating water damage, mold, and structural deterioration. That's why Titan Homes Group offers priority emergency response for ${l} homeowners — including emergency tarping and board-up services to protect your property while full repairs are planned.

With our experience working directly with Florida insurance carriers, we provide comprehensive damage documentation, detailed repair estimates, and advocate for maximum coverage on your behalf. ${l} homeowners trust Titan Homes Group to restore their properties quickly, properly, and with the quality craftsmanship that holds up through future storms.`,
      faqs: [
        { question: `Do you work with insurance companies for storm damage in ${l}?`, answer: `Yes. Titan Homes Group works directly with all major insurance carriers serving ${l}, FL. We provide thorough damage documentation and detailed repair estimates to support your claim and help ensure you receive the coverage you're entitled to.` },
        { question: `How quickly can you respond to storm damage in ${l}?`, answer: `We offer emergency response for storm-damaged properties in ${l}. Call us immediately after a storm at (813) 608-4564 for priority scheduling, emergency tarping, and board-up services to prevent further damage.` },
        { question: `What types of storm damage do you repair in ${l}?`, answer: `We repair all types of storm damage in ${l} including roof damage, missing shingles, broken windows and doors, siding damage, water intrusion, structural damage, and complete rebuilds when necessary. No storm damage project is too large or complex for our licensed team.` },
      ],
    },
  };

  return contentMap[service.slug] || {
    intro: `Professional ${s} services in ${sl} from Titan Homes Group — Tampa Bay's licensed, bonded, and insured general contractor.`,
    body: `Titan Homes Group provides expert ${s.toLowerCase()} services throughout ${sl}. Our licensed team delivers quality results on every project. Call us at (813) 608-4564 for a free consultation.`,
    faqs: [
      { question: `How much does ${s.toLowerCase()} cost in ${l}?`, answer: `Pricing varies based on project scope and specifications. Call Titan Homes Group at (813) 608-4564 for a free, detailed quote for your ${l} project.` },
    ],
  };
}

const pagesDir = path.join(__dirname, "public", "pages");
fs.mkdirSync(pagesDir, { recursive: true });

let count = 0;
for (const service of services) {
  for (const location of locations) {
    const slug = `${service.slug}-${location.slug}`;
    const content = getServiceContent(service, location, location.state);
    const nearby = nearbyMap[location.slug] || [];

    const pageData = {
      service: service.name,
      serviceSlug: service.slug,
      location: location.name,
      locationSlug: location.slug,
      state: location.state,
      metaTitle: `${service.name} ${location.name} FL - Expert Contractors | Titan Homes Group`,
      metaDescription: `Top-rated ${service.name.toLowerCase()} in ${location.name}, FL. Licensed general contractor with 10+ years and 350+ completed projects. Free consultations — call (813) 608-4564 | Titan Homes Group.`,
      h1: `${service.name} Services in ${location.name}, FL`,
      intro: content.intro,
      bodyContent: content.body,
      faqs: content.faqs,
      nearbyLocations: nearby,
    };

    fs.writeFileSync(
      path.join(pagesDir, `${slug}.json`),
      JSON.stringify(pageData, null, 2)
    );
    count++;
  }
}

console.log(`Generated ${count} page JSON files in public/pages/`);
