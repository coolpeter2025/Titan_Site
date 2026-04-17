/* global React */

const SERVICES = [
  { slug: "kitchen-remodeling", name: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Custom luxury kitchen remodeling — layout planning, cabinetry, countertops, flooring, and lighting." },
  { slug: "bathroom-remodeling", name: "Bathroom Remodeling",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Full bathroom renovations — tile, fixtures, vanities, walk-in showers, and bathtubs for all styles and budgets." },
  { slug: "full-home-renovations", name: "Full Home Renovations",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Complete interior and exterior renovations — transform your entire home with one trusted contractor." },
  { slug: "home-additions", name: "Home Additions",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Expand your living space — room additions, second stories, sunrooms, and garage conversions." },
  { slug: "new-construction", name: "New Construction",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Build your dream home from the ground up with full design-build services." },
  { slug: "general-construction", name: "General Construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Commercial and residential general contracting for any project scope — licensed, bonded, and insured." },
  { slug: "storm-damage-repair", name: "Storm Damage Repair",
    image: "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shortDescription: "Emergency and insurance-backed storm damage restoration for roofs, walls, windows, and more." },
];

const LOCATIONS = [
  { slug: "tampa", name: "Tampa", county: "Hillsborough" },
  { slug: "clearwater", name: "Clearwater", county: "Pinellas" },
  { slug: "palm-harbor", name: "Palm Harbor", county: "Pinellas" },
  { slug: "south-tampa", name: "South Tampa", county: "Hillsborough" },
  { slug: "st-petersburg", name: "St. Petersburg", county: "Pinellas" },
  { slug: "tarpon-springs", name: "Tarpon Springs", county: "Pinellas" },
  { slug: "westchase", name: "Westchase", county: "Hillsborough" },
  { slug: "belleair", name: "Belleair", county: "Pinellas" },
  { slug: "sarasota", name: "Sarasota", county: "Sarasota" },
  { slug: "bradenton", name: "Bradenton", county: "Manatee" },
  { slug: "wesley-chapel", name: "Wesley Chapel", county: "Pasco" },
  { slug: "brandon", name: "Brandon", county: "Hillsborough" },
];

const TESTIMONIALS = [
  { quote: "Very professional, reliable, and always available. Titan Homes Group delivered exactly what they promised — on time and within budget. Our kitchen looks stunning.",
    author: "Paola F.", location: "Tampa, FL", service: "Kitchen Remodeling" },
  { quote: "Professional, reliable, and paid close attention to every detail. Our bathroom renovation exceeded all expectations. The craftsmanship is impeccable.",
    author: "Jessica Martinez", location: "South Tampa, FL", service: "Bathroom Remodeling" },
  { quote: "Responsive and always willing to go the extra mile. From consultation to final walkthrough, Titan made the entire process stress-free. Highly recommend!",
    author: "John Baker", location: "Clearwater, FL", service: "Full Home Renovation" },
];

const PROCESS_STEPS = [
  { n: "01", title: "Consultation & Estimate", d: "We discuss your vision, budget, timeline, then provide a detailed estimate for your project." },
  { n: "02", title: "Design & Planning",       d: "Our team collaborates with you to finalize materials, layouts, and project scope." },
  { n: "03", title: "Construction & Execution", d: "Our skilled craftsmen bring your project to life with expert precision." },
  { n: "04", title: "Final Walkthrough & Approval", d: "No final payment is requested until you are 100% satisfied — that's our guarantee." },
];

Object.assign(window, { SERVICES, LOCATIONS, TESTIMONIALS, PROCESS_STEPS });
