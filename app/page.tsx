import Link from "next/link";
import { getServices, getLocations } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { PHONE_TAMPA, PHONE_TAMPA_RAW, LICENSE } from "@/lib/seo";

export default function HomePage() {
  const services = getServices();
  const locations = getLocations();
  const featuredLocations = locations.slice(0, 8);

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Titan Homes Group",
    url: "https://titanhomesgroup.com",
    logo: "https://titanhomesgroup.com/logo.png",
    description:
      "Tampa Bay's premier home remodeling and general construction company. Kitchen remodeling, bathroom renovations, full home renovations, home additions, new construction, and storm damage repair.",
    telephone: PHONE_TAMPA_RAW,
    email: "info@titanhomesgroup.com",
    foundingDate: "2015",
    numberOfEmployees: "20+",
    priceRange: "$$$$",
    hasCredential: LICENSE,
    areaServed: ["Tampa, FL", "Clearwater, FL", "St. Petersburg, FL", "Sarasota, FL", "Bradenton, FL"],
    address: { "@type": "PostalAddress", streetAddress: "5103 Memorial Hwy", addressLocality: "Tampa", addressRegion: "FL", postalCode: "33634", addressCountry: "US" },
    openingHours: "Mo-Fr 09:00-17:00",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "100" },
    sameAs: ["https://www.bbb.org", "https://www.houzz.com"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

      {/* 1. Hero */}
      <Hero
        headline="Tampa's Trusted Home Remodeling Experts"
        subheadline="For Tampa homeowners who demand quality, precision, and trust. Kitchen & bath remodels, full home renovations, additions, new construction, and storm damage repair — all under one licensed contractor."
        bgImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400"
        showTrustBar={true}
      />

      {/* 2. Services grid (What We Do) */}
      <section className="py-20 sm:py-24 bg-[#fafbff] border-y border-[var(--lavender-hover)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)] mb-4 leading-tight">
              From Kitchens to Full Rebuilds — We Do It All
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Kitchen remodeling, bathroom renovations, full home renovations, additions, new construction, and storm damage restoration — all under one licensed contractor.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-navy">View All Services</Link>
          </div>
        </div>
      </section>

      {/* 3. Intro + side card (About Titan Homes Group) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">About Titan Homes Group</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)] mb-6 leading-tight">
                Award-Winning Craftsmanship, Unmatched Expertise
              </h2>
              <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                <p>
                  At Titan Homes Group, we believe that home remodeling isn&apos;t just about construction — it&apos;s about trust, precision, and delivering a space that exceeds expectations. Our commitment to quality, professionalism, and customer satisfaction has earned us a reputation as Tampa Bay&apos;s most trusted remodeling team.
                </p>
                <p>
                  As a fully licensed, bonded, and insured General Contractor in Florida (#{LICENSE}), we ensure every project meets the highest standards of safety and craftsmanship. We bring design innovation, attention to detail, and competitive pricing — without compromising on quality.
                </p>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary">Free Consultation</Link>
                <Link href="/about" className="btn-navy">Learn More</Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-[var(--navy)] text-white rounded-lg p-7">
                <h3 className="text-xl font-semibold mb-3">Build Your Dream Home Today</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Titan Homes Group delivers expert craftsmanship, competitive pricing, and a seamless remodeling experience from first consultation to final walkthrough.
                </p>
                <Link href="/contact" className="btn-primary">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust signals band */}
      <TrustSignals />

      {/* 4. Stats / Why Choose */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Why Homeowners Choose Titan</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)] leading-tight">
              Expert Renovations · Transparent Pricing · Unmatched Customer Care
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { num: "10+", label: "Years in Business" },
              { num: "350+", label: "Projects Completed" },
              { num: "20+", label: "Full-Time Professionals" },
              { num: "5.0★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--lavender)] rounded-lg p-6 sm:p-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-2">{s.num}</p>
                <p className="text-[var(--ink)] text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ProcessSteps />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Service Areas */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Where We Work</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)] mb-4 leading-tight">
              Serving All of Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our Tampa office, we serve {locations.length} communities across Tampa Bay.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-[var(--lavender)] border border-[var(--lavender-hover)] rounded-lg p-4 text-center hover:bg-[var(--lavender-hover)] transition-colors"
              >
                <p className="font-semibold text-[var(--navy)]">{loc.name}</p>
                <p className="text-gray-600 text-xs mt-0.5">{loc.state} · {loc.county} County</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locations" className="btn-navy">View All {locations.length} Service Areas</Link>
          </div>
        </div>
      </section>

      {/* 9. Tampa office strip */}
      <section className="bg-[var(--navy-deep)] py-10 sm:py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Tampa Office</p>
            <p className="text-white font-semibold text-base mb-2">5103 Memorial Hwy, Tampa, FL 33634</p>
            <a href={`tel:${PHONE_TAMPA_RAW}`} className="text-[var(--lavender)] text-2xl font-bold hover:text-white">
              {PHONE_TAMPA}
            </a>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <CTASection />
    </>
  );
}
