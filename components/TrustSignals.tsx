/**
 * Trust signals band — icons from design-system/assets/icons/.
 * Uses shield-check, star, check paths inline for currentColor styling.
 */

const ShieldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const Star = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Clock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function TrustSignals() {
  const signals = [
    { label: "Licensed & Insured", Icon: ShieldCheck },
    { label: "350+ Projects", Icon: Check },
    { label: "10+ Years Experience", Icon: Clock },
  ];

  return (
    <section className="bg-[var(--lavender)] py-10 sm:py-12 border-y border-[var(--lavender-hover)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center eyebrow mb-6">Trusted Across Tampa Bay</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center">
          {signals.map(({ label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[var(--navy)] text-sm sm:text-base font-bold text-center"
            >
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
