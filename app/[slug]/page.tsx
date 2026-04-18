import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPageSlugs, getPageData, getServices, getLocations } from "@/lib/data";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import { SITE_NAME, PHONE_TAMPA, PHONE_TAMPA_RAW } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageData(slug);

  // Also handle pure location pages (e.g. /locations/tampa -> /tampa redirected) and service pages
  if (!data) {
    // Check if it's a location slug
    const locations = getLocations();
    const loc = locations.find((l) => l.slug === slug);
    if (loc) {
      return {
        title: `Home Remodeling ${loc.name} FL - Expert Contractors | ${SITE_NAME}`,
        description: `Expert home remodeling and construction services in ${loc.name}, FL. Kitchen remodeling, bathroom renovations, additions, new construction. Licensed FL contractor. Call ${PHONE_TAMPA}.`,
      };
    }
    // Check if it's a service slug
    const services = getServices();
    const svc = services.find((s) => s.slug === slug);
    if (svc) {
      return {
        title: `${svc.name} Tampa Bay FL - Expert Contractors | ${SITE_NAME}`,
        description: `Professional ${svc.name.toLowerCase()} services across Tampa Bay FL. Licensed, bonded, and insured. 350+ completed projects. Call ${PHONE_TAMPA} for a free quote.`,
      };
    }
    return { title: `${SITE_NAME}` };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: "website",
    },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  const data = getPageData(slug);

  // If no JSON page found, check if it's a location page
  if (!data) {
    const locations = getLocations();
    const services = getServices();
    const loc = locations.find((l) => l.slug === slug);

    if (loc) {
      // Render location landing page
      return (
        <>
          <section className="bg-[var(--navy-deep)] text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
                <Link href="/" className="hover:text-[var(--lavender)]">Home</Link>
                <span>/</span>
                <Link href="/locations" className="hover:text-[var(--lavender)]">Locations</Link>
                <span>/</span>
                <span className="text-[var(--lavender)]">{loc.name}</span>
              </div>
              <h1 className="text-5xl font-bold mb-5">
                Home Remodeling &amp; Construction Services in {loc.name}, FL
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                Titan Homes Group serves {loc.name}, {loc.state} with licensed, bonded, and insured home remodeling and construction services. Free consultations available.
              </p>
              <a href={`tel:${PHONE_TAMPA_RAW}`} className="inline-block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-xl transition-colors">
                📞 Call {PHONE_TAMPA}
              </a>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-8">
                Our Services in {loc.name}, FL
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/${svc.slug}-${loc.slug}`}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all group"
                  >
                    <span className="text-4xl mb-3 block">{svc.icon}</span>
                    <h3 className="text-xl font-bold text-[var(--ink)] group-hover:text-[var(--navy)] mb-2">{svc.name}</h3>
                    <p className="text-gray-600 text-sm">{svc.shortDescription}</p>
                    <p className="text-[var(--navy)] font-semibold text-sm mt-3">
                      {svc.name} in {loc.name} →
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <CTASection location={loc.name} />
        </>
      );
    }

    notFound();
  }

  // Render service+location page
  const allServices = getServices();
  const currentService = allServices.find((s) => s.slug === data.serviceSlug);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-5 flex-wrap">
            <Link href="/" className="hover:text-[var(--lavender)]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--lavender)]">Services</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[var(--lavender)]">Locations</Link>
            <span>/</span>
            <span className="text-[var(--lavender)]">{data.service} in {data.location}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{data.h1}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">{data.intro}</p>
          <div className="flex">
            <a
              href={`tel:${PHONE_TAMPA_RAW}`}
              className="inline-flex items-center justify-center bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              📞 Call {PHONE_TAMPA}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Body content */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
                  Expert {data.service} in {data.location}, {data.state}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                  {data.bodyContent}
                </div>
              </div>

              {/* Service benefits from data */}
              {currentService && (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
                      What&apos;s Included in Our {data.service} Service
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentService.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                          <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Project Types We Handle</h2>
                    <ul className="space-y-2">
                      {currentService.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500 font-bold">→</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* FAQs */}
              {data.faqs && data.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">
                    Frequently Asked Questions — {data.service} in {data.location}
                  </h2>
                  <div className="space-y-4">
                    {data.faqs.map((faq, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <h3 className="font-bold text-[var(--ink)] mb-2">{faq.question}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nearby locations */}
              {data.nearbyLocations && data.nearbyLocations.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">
                    Also Serving Nearby Communities
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {data.nearbyLocations.map((nearby, i) => {
                      const allLocs = getLocations();
                      const nearbyLoc = allLocs.find((l) => l.name === nearby);
                      return nearbyLoc ? (
                        <Link
                          key={i}
                          href={`/${data.serviceSlug}-${nearbyLoc.slug}`}
                          className="bg-[var(--lavender)] hover:bg-[var(--lavender)] text-gray-700 hover:text-[var(--navy)] px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          {data.service} in {nearby}
                        </Link>
                      ) : (
                        <span key={i} className="bg-[var(--lavender)] text-slate-600 px-4 py-2 rounded-full text-sm">
                          {nearby}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-[var(--navy-deep)] text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-5">
                    Contact us for expert {data.service.toLowerCase()} in {data.location}, FL. Licensed, bonded, insured.
                  </p>
                  <a
                    href={`tel:${PHONE_TAMPA_RAW}`}
                    className="block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] text-center py-3 rounded font-bold mb-3 transition-colors"
                  >
                    📞 {PHONE_TAMPA}
                  </a>
                  <a
                    href="mailto:info@titanhomesgroup.com"
                    className="block bg-transparent border border-slate-600 hover:border-yellow-400 text-gray-300 hover:text-[var(--lavender)] text-center py-3 rounded font-bold transition-colors"
                  >
                    ✉️ Email Us
                  </a>
                </div>

                {/* Why us */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[var(--ink)] mb-4">Why Titan Homes Group?</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      "FL Licensed #CBC1264713",
                      "Fully bonded & insured",
                      "5-star Google rated",
                      "HomeAdvisor Pro verified",
                      "10+ years, 350+ projects",
                      "100% satisfaction guarantee",
                      "Financing available",
                      "Two convenient offices",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other services */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-[var(--ink)] mb-4">Other Services in {data.location}</h3>
                  <ul className="space-y-2">
                    {allServices
                      .filter((s) => s.slug !== data.serviceSlug)
                      .slice(0, 5)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}-${data.locationSlug}`}
                            className="text-[var(--navy)] hover:text-yellow-500 text-sm font-medium"
                          >
                            {s.icon} {s.name} in {data.location} →
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link href="/services" className="text-gray-400 hover:text-gray-600 text-xs">
                        View all services →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* CTA */}
      <CTASection service={data.service} location={data.location} />
    </>
  );
}
