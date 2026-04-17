import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline?: string;
  bgImage?: string;
  showTrustBar?: boolean;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
}

export default function Hero({
  headline,
  subheadline,
  bgImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1800&auto=format&fit=crop",
  showTrustBar = true,
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Free Consultation",
}: HeroProps) {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navy overlay — darker at top-left, fading right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(42,49,91,0.88) 0%, rgba(42,49,91,0.72) 40%, rgba(42,49,91,0.35) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-[1.1] mb-5">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
              {subheadline}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href={primaryCtaHref} className="btn-primary">
              {primaryCtaLabel}
            </Link>
            <a href="tel:+17277094141" className="btn-outline-white">
              Call (727) 709-4141
            </a>
          </div>
        </div>
      </div>

      {showTrustBar && (
        <div className="relative bg-[var(--navy-darker)]/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center md:justify-between gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-white/90">
              <span>Licensed &amp; Insured · #CBC1264713</span>
              <span className="hidden sm:inline">10+ Years in Tampa Bay</span>
              <span>350+ Projects Completed</span>
              <span>5.0★ Google Rating</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
