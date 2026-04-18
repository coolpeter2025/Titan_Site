import { Metadata } from "next";
import Link from "next/link";
import { getServices, getLocations } from "@/lib/data";
import CTASection from "@/components/CTASection";
import ProcessSteps from "@/components/ProcessSteps";
import ServiceIcon from "@/components/ServiceIcon";
import { SITE_NAME, PHONE_TAMPA, PHONE_TAMPA_RAW } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Home Remodeling &amp; Construction Services Tampa Bay FL | ${SITE_NAME}`,
  description:
    "Complete home remodeling and construction services in Tampa Bay: kitchen remodeling, bathroom renovations, full home renovations, home additions, new construction, storm damage repair. Licensed FL contractor.",
  openGraph: {
    title: `Services — ${SITE_NAME} | Tampa Bay FL`,
    description: "Kitchen, bath, full renovations, additions, new construction, storm damage — all under one licensed contractor.",
  },
};

export default function ServicesPage() {
  const services = getServices();
  const locations = getLocations();

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--lavender)] text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-5xl font-bold mb-5">
            Complete Home Remodeling &amp; Construction Services in Tampa Bay
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From kitchen and bathroom remodeling to full home renovations, new construction, and emergency storm damage repair — Titan Homes Group handles every aspect of your project under one Florida General Contractor license.
          </p>
          <a
            href={`tel:${PHONE_TAMPA_RAW}`}
            className="inline-block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-xl transition-colors"
          >
            📞 Call {PHONE_TAMPA} — Free Consultation
          </a>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`pb-16 ${index !== services.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                  {/* Left: Info */}
                  <div className="lg:col-span-2">
                    <div className="sticky top-24">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-14 h-14 rounded-md bg-[var(--lavender)] text-[var(--navy)] flex items-center justify-center shrink-0">
                          <ServiceIcon slug={service.slug} size={28} />
                        </span>
                        <div>
                          <h2 className="text-3xl font-bold text-[var(--ink)]">{service.name}</h2>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                      <a
                        href={`tel:${PHONE_TAMPA_RAW}`}
                        className="block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] py-3 rounded font-bold text-center text-lg transition-colors mb-3"
                      >
                        Get a Free Quote
                      </a>
                      <div className="bg-gray-50 rounded-xl p-4 text-sm">
                        <p className="font-bold text-[var(--ink)] mb-2">Available in:</p>
                        <div className="flex flex-wrap gap-1">
                          {locations.slice(0, 6).map((loc) => (
                            <Link
                              key={loc.slug}
                              href={`/${service.slug}-${loc.slug}`}
                              className="text-[var(--navy)] hover:text-yellow-500 text-xs"
                            >
                              {loc.name}
                            </Link>
                          ))}
                          <Link href="/locations" className="text-gray-500 text-xs">
                            +{locations.length - 6} more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--ink)] mb-4">What&apos;s Included</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 bg-gray-50 rounded-lg p-3">
                            <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--ink)] mb-4">Project Types</h3>
                      <ul className="space-y-2">
                        {service.applications.map((app, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="text-yellow-500 font-bold">→</span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* FAQs */}
                    <div>
                      <h3 className="text-xl font-bold text-[var(--ink)] mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {service.faqs.map((faq, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-5">
                            <h4 className="font-bold text-[var(--ink)] mb-2">{faq.question}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps />

      {/* CTA */}
      <CTASection
        title="Request Your Free Consultation"
        description="Our team will assess your project, discuss your vision, and provide a transparent, detailed proposal — all at no cost and no obligation."
      />
    </>
  );
}
