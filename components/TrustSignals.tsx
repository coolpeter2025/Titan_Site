export default function TrustSignals() {
  const signals = [
    { label: "Licensed & Insured" },
    { label: "Google 5★ Rated" },
    { label: "350+ Projects" },
    { label: "10+ Years Experience" },
  ];

  return (
    <section className="bg-[var(--lavender)] py-10 sm:py-12 border-y border-[var(--lavender-hover)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center eyebrow mb-6">Trusted Across Tampa Bay</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
          {signals.map((s, i) => (
            <div
              key={i}
              className="text-center text-[var(--navy)] text-sm sm:text-base font-bold"
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
