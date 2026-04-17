import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import TrustSignals from "@/components/TrustSignals";
import { SITE_NAME, PHONE_TAMPA, PHONE_SARASOTA, PHONE_TAMPA_RAW, LICENSE } from "@/lib/seo";
import { getLocations } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us — ${SITE_NAME} | Tampa Bay's Licensed General Contractor`,
  description:
    "Learn about Titan Homes Group — Tampa Bay's premier licensed, bonded, and insured general contractor. 10+ years, 350+ projects, 5-star Google rated. FL License #CBC1264713.",
  openGraph: {
    title: `About Titan Homes Group | Tampa Bay FL`,
    description: "10+ years serving Tampa Bay homeowners with expert remodeling and construction services.",
  },
};

export default function AboutPage() {
  const locations = getLocations();

  const team = [
    { name: "Jonathan Ofer", role: "Owner & Co-Founder", description: "Jonathan brings over a decade of hands-on construction and project management experience to every Titan Homes Group project. His commitment to quality and client satisfaction has been the foundation of the company's growth." },
    { name: "Shalom Halfon", role: "Owner & Co-Founder", description: "Shalom oversees business development and client relations, ensuring every homeowner receives the attentive, personalized service that has made Titan Homes Group a trusted name across Tampa Bay." },
    { name: "Shimi", role: "Project Manager", description: "Shimi coordinates all active projects, managing subcontractors, timelines, and quality control to ensure every job is completed on schedule and to the highest standards." },
    { name: "Danes", role: "Lead Designer", description: "Danes leads the design team, creating stunning floor plans, 3D renderings, and material selections that bring each client's vision to life with elegance and functionality." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[var(--lavender)] text-sm font-bold uppercase tracking-widest mb-3">About Titan Homes Group</p>
            <h1 className="text-5xl font-bold mb-5">
              Tampa Bay&apos;s Premier Home Remodeling &amp; Construction Company
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Licensed, bonded, and insured with over 10 years of experience and 350+ completed projects across the Tampa Bay region.
            </p>
            <a
              href={`tel:${PHONE_TAMPA_RAW}`}
              className="inline-block bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-lg transition-colors"
            >
              Call {PHONE_TAMPA} — Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[var(--navy)] text-sm font-bold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-4xl font-bold text-[var(--ink)] mb-6">Built on a Foundation of Trust and Excellence</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Titan Homes Group was founded with a simple but powerful mission: to deliver the highest-quality home remodeling and construction services in Tampa Bay, with complete transparency, integrity, and a relentless focus on client satisfaction.
                </p>
                <p>
                  Starting with a small team in Tampa, owners Jonathan Ofer and Shalom Halfon grew the company through exceptional work and word-of-mouth referrals. Today, Titan Homes Group operates from two offices — Tampa and Sarasota — with a team of 20+ full-time licensed professionals.
                </p>
                <p>
                  We hold Florida General Contractor License {LICENSE} and maintain full bonding and insurance coverage, giving our clients complete peace of mind on every project. We are also a HomeAdvisor Pro and a trusted partner across Yelp and Google with hundreds of 5-star reviews.
                </p>
                <p>
                  Our guarantee is simple and unique in the industry: <strong>we do not ask for final payment until you are 100% satisfied</strong> with the completed work. No exceptions.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { number: "10+", label: "Years in Business" },
                  { number: "350+", label: "Projects Completed" },
                  { number: "20+", label: "Full-Time Professionals" },
                  { number: "2", label: "Offices in Tampa Bay" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[var(--navy-deep)] rounded-2xl p-6 text-center">
                    <p className="text-5xl font-bold text-[var(--lavender)] mb-2">{stat.number}</p>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--lavender)] border border-[var(--lavender-hover)] rounded-2xl p-6">
                <p className="text-[var(--navy)] font-bold text-xl italic mb-2">
                  &ldquo;We don&apos;t ask for final payment until you&apos;re 100% happy.&rdquo;
                </p>
                <p className="text-[var(--navy)] text-sm">— The Titan Homes Group Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[var(--navy)] text-sm font-bold uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-4xl font-bold text-[var(--ink)] mb-4">Meet the Titan Homes Group Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by experienced owners and supported by 20+ licensed professionals, our team brings expertise, passion, and accountability to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[var(--navy-deep)] text-[var(--lavender)] font-bold text-xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--ink)] text-xl">{member.name}</h3>
                    <p className="text-[var(--navy)] text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-[var(--navy-deep)] rounded-2xl p-8">
            <p className="text-gray-300 text-lg">
              In addition to our leadership team, Titan Homes Group employs <strong className="text-[var(--lavender)]">20+ full-time professionals</strong> including licensed plumbers, electricians, carpenters, tile setters, and project coordinators — all committed to delivering excellence on every job.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--navy)] text-sm font-bold uppercase tracking-widest mb-3">Credentials</p>
            <h2 className="text-4xl font-bold text-[var(--ink)] mb-4">Licensed, Accredited &amp; Certified</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏛️", title: "FL General Contractor License", detail: `License ${LICENSE}` },
              { icon: "⭐", title: "Google 5-Star Rating", detail: "Hundreds of verified reviews" },
              { icon: "🏠", title: "HomeAdvisor Pro", detail: "Verified & screened professional" },
              { icon: "🛡️", title: "Fully Bonded & Insured", detail: "Complete project protection" },
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-bold text-[var(--ink)] text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-500 text-xs">{cert.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--ink)] mb-4">
              Serving {locations.length} Communities Across Tampa Bay &amp; Sarasota
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="bg-gray-100 hover:bg-[var(--lavender)] hover:text-[var(--navy)] text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {loc.name}, FL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Two Offices */}
      <section className="bg-[var(--navy-deep)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[var(--lavender)] text-xs font-bold uppercase tracking-widest mb-3">Tampa Office</p>
              <p className="text-white font-bold text-xl mb-1">5103 Memorial Hwy</p>
              <p className="text-gray-400 mb-3">Tampa, FL 33634</p>
              <a href="tel:+17277094141" className="text-white text-2xl font-bold">{PHONE_TAMPA}</a>
              <p className="text-gray-500 text-sm mt-2">Monday–Friday, 9:00 AM–5:00 PM</p>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-8">
              <p className="text-[var(--lavender)] text-xs font-bold uppercase tracking-widest mb-3">Sarasota Office</p>
              <p className="text-white font-bold text-xl mb-1">4333 S Tamiami Trail Suite A</p>
              <p className="text-gray-400 mb-3">Sarasota, FL 34231</p>
              <a href="tel:+17277094141" className="text-white text-2xl font-bold">{PHONE_SARASOTA}</a>
              <p className="text-gray-500 text-sm mt-2">Monday–Friday, 9:00 AM–5:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work with Tampa Bay's Best?"
        description="Contact Titan Homes Group today for a free consultation. Experience the difference that 10+ years, 350+ projects, and a 100% satisfaction guarantee makes."
      />
    </>
  );
}
