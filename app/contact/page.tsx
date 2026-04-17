import { Metadata } from "next";
import { SITE_NAME, PHONE_TAMPA, PHONE_SARASOTA, PHONE_TAMPA_RAW, PHONE_SARASOTA_RAW, EMAIL, ADDRESS_TAMPA, ADDRESS_SARASOTA, LICENSE } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Contact Us — ${SITE_NAME} | Tampa Bay Home Remodeling`,
  description:
    "Contact Titan Homes Group for a free consultation on kitchen remodeling, bathroom renovation, home additions, or any construction project. Two offices serving Tampa Bay.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-deep)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[var(--lavender)] text-sm font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-5xl font-bold mb-5">Contact Titan Homes Group</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Call us or email us for a free, no-obligation consultation. We serve all of Tampa Bay from our two offices.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-5xl mb-4">📞</div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-3">Call Us</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Tampa Office</p>
                  <a href={`tel:${PHONE_TAMPA_RAW}`} className="text-[var(--navy)] font-bold text-2xl hover:text-yellow-500 block">
                    {PHONE_TAMPA}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Sarasota Office</p>
                  <a href={`tel:${PHONE_SARASOTA_RAW}`} className="text-[var(--navy)] font-bold text-2xl hover:text-yellow-500 block">
                    {PHONE_SARASOTA}
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">Monday–Friday, 9:00 AM–5:00 PM</p>
            </div>

            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-3">Email Us</h2>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[var(--navy)] font-bold text-lg hover:text-yellow-500 break-all"
              >
                {EMAIL}
              </a>
              <p className="text-gray-500 text-sm mt-4">We respond within 1 business day</p>
            </div>

            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-5xl mb-4">🏢</div>
              <h2 className="text-2xl font-bold text-[var(--ink)] mb-4">Visit Us</h2>
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-[var(--navy)] text-xs font-bold uppercase tracking-wider mb-1">Tampa</p>
                  <p className="text-gray-700 text-sm">{ADDRESS_TAMPA}</p>
                </div>
                <div>
                  <p className="text-[var(--navy)] text-xs font-bold uppercase tracking-wider mb-1">Sarasota</p>
                  <p className="text-gray-700 text-sm">{ADDRESS_SARASOTA}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-[var(--navy-deep)] rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Free Consultation — No Obligation</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Every project starts with a free consultation. Our team will visit your home, assess your project, discuss your vision and budget, and provide a transparent, itemized proposal — no pressure, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_TAMPA_RAW}`}
                className="bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-8 py-4 rounded font-bold text-xl transition-colors"
              >
                📞 Tampa: {PHONE_TAMPA}
              </a>
              <a
                href={`tel:${PHONE_SARASOTA_RAW}`}
                className="bg-[var(--navy)] hover:bg-slate-600 text-white px-8 py-4 rounded font-bold text-xl transition-colors"
              >
                📞 Sarasota: {PHONE_SARASOTA}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* License Info */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Titan Homes Group — Florida Licensed General Contractor {LICENSE} · Fully Bonded &amp; Insured · BBB Accredited · NKBA Certified
          </p>
        </div>
      </section>
    </>
  );
}
