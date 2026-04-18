import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocations, getServices, getLocationBySlug } from "@/lib/data";
import CTASection from "@/components/CTASection";
import { SITE_NAME, PHONE_TAMPA, PHONE_TAMPA_RAW } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const locations = getLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return { title: SITE_NAME };

  return {
    title: `Home Remodeling ${loc.name} FL - Expert Contractors Near You | ${SITE_NAME}`,
    description: `Expert home remodeling and construction services in ${loc.name}, FL. Kitchen remodeling, bathroom renovations, additions, new construction, and storm damage repair. Licensed FL contractor #CBC1264713. Call ${PHONE_TAMPA}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const services = getServices();
  const allLocations = getLocations();
  const nearbyLocations = allLocations
    .filter((l) => l.slug !== slug && l.county === loc.county)
    .slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-[var(--lavender)]">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-[var(--lavender)]">Locations</Link>
            <span>/</span>
            <span className="text-[var(--lavender)]">{loc.name}, FL</span>
          </div>
          <h1 className="text-5xl font-bold mb-5">
            Home Remodeling &amp; Construction Services in {loc.name}, FL
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Titan Homes Group serves {loc.name}, Florida with fully licensed, bonded, and insured home remodeling and construction services. 10+ years of experience. 350+ projects completed.
          </p>
          <a
            href={`tel:${PHONE_TAMPA_RAW}`}
            className="inline-block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-xl transition-colors"
          >
            📞 Call {PHONE_TAMPA} — Free Consultation
          </a>
        </div>
      </section>

      {/* About serving this location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-5">
              Your Trusted {loc.name} Home Remodeling Contractor
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Titan Homes Group is proud to serve homeowners and businesses throughout {loc.name}, {loc.state}. As Tampa Bay&apos;s premier licensed general contractor, we bring over 10 years of hands-on experience to every project in {loc.name} and the surrounding area.
              </p>
              {loc.description && (
                <p>{loc.description}</p>
              )}
              <p>
                Whether you&apos;re planning a kitchen transformation, a luxury bathroom renovation, a home addition, or a complete home renovation in {loc.name}, our team delivers exceptional results with complete transparency and a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--ink)] mb-10">
            Our Services in {loc.name}, FL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/${svc.slug}-${loc.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-yellow-400 hover:shadow-md transition-all group"
              >
                <span className="text-4xl mb-3 block">{svc.icon}</span>
                <h3 className="text-xl font-bold text-[var(--ink)] group-hover:text-[var(--navy)] mb-2 transition-colors">
                  {svc.name} in {loc.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{svc.shortDescription}</p>
                {svc.priceRange && (
                  <p className="text-[var(--navy)] text-sm font-semibold">{svc.priceRange}</p>
                )}
                <p className="text-[var(--navy)] font-bold text-sm mt-3 group-hover:underline">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-14 bg-[var(--navy-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Why {loc.name} Homeowners Choose Titan Homes Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🛡️", label: "Licensed & Insured", detail: "FL #CBC1264713" },
              { icon: "🏠", label: "350+ Projects", detail: "In Tampa Bay" },
              { icon: "💯", label: "100% Guarantee", detail: "Pay when satisfied" },
            ].map((s, i) => (
              <div key={i} className="bg-[var(--navy)] rounded-xl p-5 text-center border border-white/10">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-white font-bold text-sm">{s.label}</p>
                <p className="text-gray-400 text-xs mt-0.5">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[var(--ink)] mb-6">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="bg-gray-100 hover:bg-[var(--lavender)] text-gray-700 hover:text-[var(--navy)] px-5 py-2.5 rounded-full font-medium transition-colors"
                >
                  {nearby.name}, FL
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection location={loc.name} />
    </>
  );
}
