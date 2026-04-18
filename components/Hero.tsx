import Image from "next/image";
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
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #1a1f3a 0%, #2a315b 100%)" }}
    >
      {/* Atmospheric lavender glows */}
      <div
        className="pointer-events-none absolute -top-48 -right-48 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(212,201,239,.22), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-36 -left-36 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(212,201,239,.10), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — copy column */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d4c9ef]/30 bg-[#d4c9ef]/10 px-3.5 py-1.5 text-[13px] font-semibold text-[#e8e0f7] mb-6 sm:mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4c9ef] ring-4 ring-[#d4c9ef]/20" />
              Licensed General Contractor · CBC1264713
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.02] tracking-[-0.025em] mb-5 sm:mb-6 text-balance">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-9 max-w-xl">
                {subheadline}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mb-9 sm:mb-10">
              <Link href={primaryCtaHref} className="btn-primary">
                {primaryCtaLabel}
              </Link>
              <a href="tel:+17277094141" className="btn-outline-white">
                Call (727) 709-4141
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-7 border-t border-[#d4c9ef]/20">
              <div>
                <div className="text-sm font-bold text-white mb-0.5">350+</div>
                <div className="text-xs text-white/65">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px self-stretch bg-[#d4c9ef]/20" />
              <div>
                <div className="text-sm font-bold text-white mb-0.5">10+ Years</div>
                <div className="text-xs text-white/65">Serving Tampa Bay</div>
              </div>
            </div>
          </div>

          {/* RIGHT — photo card composition */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] mt-4 lg:mt-0">
            {/* Lavender accent block */}
            <div className="absolute -top-4 -right-4 h-40 w-40 sm:h-48 sm:w-48 rounded-2xl bg-[var(--lavender)] z-0" />
            {/* Main photo */}
            <div
              className="absolute inset-0 z-[2] overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,.5), 0 0 0 1px rgba(212,201,239,.15)" }}
            >
              <Image
                src={bgImage}
                alt="Completed Tampa Bay remodel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(26,31,58,0) 50%, rgba(26,31,58,0.35) 100%)" }}
              />
            </div>
            {/* Floating badge — on-time */}
            <div className="absolute left-2 sm:-left-6 bottom-8 z-[3] min-w-[200px] rounded-2xl bg-white text-[var(--ink)] px-5 py-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--lavender)] text-[var(--navy)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold leading-none tracking-tight">On-Time</div>
                  <div className="text-xs text-[var(--muted)] mt-1">Transparent milestones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showTrustBar && (
        <div className="relative border-t border-[#d4c9ef]/15 bg-[rgba(14,17,36,.55)] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] font-medium text-white/80">
              <span className="inline-flex items-center gap-2 text-[#e8e0f7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4c9ef]" />
                Licensed &amp; Insured · #CBC1264713
              </span>
              <span className="hidden sm:inline">10+ Years in Tampa Bay</span>
              <span>350+ Projects Completed</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
