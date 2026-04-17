import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  service?: string;
  location?: string;
}

export default function CTASection({
  title = "Let's Build Your Dream Home",
  description = "Get in touch with our team today to discuss your project, explore your options, and get a no-obligation estimate.",
  service,
  location,
}: CTASectionProps) {
  const displayTitle = service && location
    ? `Ready to Start Your ${service} Project in ${location}?`
    : title;

  const displayDesc = service && location
    ? `Titan Homes Group delivers expert ${service.toLowerCase()} in ${location}, FL. Free consultation, transparent pricing, and a 100% satisfaction guarantee.`
    : description;

  return (
    <section className="bg-[var(--navy)] py-16 sm:py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            {displayTitle}
          </h2>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            {displayDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Link href="/contact" className="btn-primary w-full">
            Free Consultation
          </Link>
          <a href="tel:+17277094141" className="btn-outline-white w-full">
            Tampa: (727) 709-4141
          </a>
          <a href="tel:+17277094141" className="btn-outline-white w-full">
            Sarasota: (727) 709-4141
          </a>
        </div>

        <p className="text-center text-white/70 text-sm mt-8 italic">
          &ldquo;We don&apos;t ask for final payment until you&apos;re 100% happy.&rdquo; — The Titan Guarantee
        </p>
      </div>
    </section>
  );
}
