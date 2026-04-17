import { Metadata } from "next";
import Link from "next/link";
import { getLocations, getServices } from "@/lib/data";
import CTASection from "@/components/CTASection";
import { SITE_NAME, PHONE_TAMPA_RAW, PHONE_TAMPA } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Service Areas Tampa Bay FL — ${SITE_NAME}`,
  description:
    "Titan Homes Group serves 21 cities and communities across Tampa Bay and Sarasota. Find home remodeling and construction services near you.",
  openGraph: {
    title: `Service Locations — ${SITE_NAME}`,
    description: "Serving 21 communities across Tampa Bay and the Sarasota region.",
  },
};

export default function LocationsPage() {
  const locations = getLocations();
  const services = getServices();

  const hillsborough = locations.filter((l) => l.county === "Hillsborough");
  const pinellas = locations.filter((l) => l.county === "Pinellas");
  const other = locations.filter((l) => l.county !== "Hillsborough" && l.county !== "Pinellas");

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--lavender)] text-sm font-bold uppercase tracking-widest mb-3">Where We Work</p>
          <h1 className="text-5xl font-bold mb-5">
            Home Remodeling &amp; Construction Services Across Tampa Bay, FL
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Titan Homes Group serves {locations.length} cities and communities across the Tampa Bay region and Sarasota area from our two offices.
          </p>
        </div>
      </section>

      {/* Services Available Everywhere */}
      <section className="py-12 bg-[var(--lavender)]0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[var(--ink)] font-bold text-2xl">All Services Available in Every Location</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <span key={s.slug} className="bg-[var(--navy-deep)] text-white text-sm px-4 py-2 rounded-full font-semibold">
                {s.icon} {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations by County */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hillsborough */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-2">Hillsborough County</h2>
            <p className="text-gray-500 mb-8">Tampa and surrounding communities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hillsborough.map((loc) => (
                <div key={loc.slug} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--ink)]">
                      {loc.name}
                      {loc.isMainCity && (
                        <span className="ml-2 text-xs bg-[var(--lavender)] text-[var(--navy)] px-2 py-0.5 rounded font-bold">HQ</span>
                      )}
                    </h3>
                    <span className="text-gray-400 text-sm">FL</span>
                  </div>
                  {loc.description && (
                    <p className="text-gray-600 text-sm mb-4">{loc.description}</p>
                  )}
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="text-[var(--navy)] font-semibold text-sm hover:text-yellow-500"
                    >
                      View All Services in {loc.name} →
                    </Link>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {services.slice(0, 3).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}-${loc.slug}`}
                          className="text-xs text-gray-500 hover:text-[var(--navy)] underline"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pinellas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-2">Pinellas County</h2>
            <p className="text-gray-500 mb-8">Clearwater, St. Petersburg, and coastal communities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinellas.map((loc) => (
                <div key={loc.slug} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--ink)]">{loc.name}</h3>
                    <span className="text-gray-400 text-sm">FL</span>
                  </div>
                  {loc.description && (
                    <p className="text-gray-600 text-sm mb-4">{loc.description}</p>
                  )}
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-[var(--navy)] font-semibold text-sm hover:text-yellow-500"
                  >
                    View All Services in {loc.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Other Counties */}
          {other.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-[var(--ink)] mb-2">Sarasota, Manatee &amp; Pasco Counties</h2>
              <p className="text-gray-500 mb-8">Sarasota, Bradenton, Wesley Chapel, and surrounding areas</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {other.map((loc) => (
                  <div key={loc.slug} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-[var(--ink)]">{loc.name}</h3>
                      <span className="text-gray-400 text-xs">{loc.county} County</span>
                    </div>
                    {loc.description && (
                      <p className="text-gray-600 text-sm mb-4">{loc.description}</p>
                    )}
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="text-[var(--navy)] font-semibold text-sm hover:text-yellow-500"
                    >
                      View All Services in {loc.name} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Don't see your city */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--ink)] mb-3">Don&apos;t See Your City?</h2>
          <p className="text-gray-600 mb-6">
            Titan Homes Group serves the entire Tampa Bay area. If your city isn&apos;t listed, call us — we may still be able to serve you!
          </p>
          <a
            href={`tel:${PHONE_TAMPA_RAW}`}
            className="inline-block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-3 rounded font-bold text-lg transition-colors"
          >
            Call {PHONE_TAMPA}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
