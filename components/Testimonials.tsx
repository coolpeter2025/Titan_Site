export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Very professional, reliable, and always available. Titan Homes Group delivered exactly what they promised — on time and within budget. Our kitchen looks stunning.",
      author: "Paola F.",
      location: "Tampa, FL",
      service: "Kitchen Remodeling",
    },
    {
      quote:
        "Professional, reliable, and paid close attention to every detail. Our bathroom renovation exceeded all expectations. The craftsmanship is impeccable.",
      author: "Jessica Martinez",
      location: "South Tampa, FL",
      service: "Bathroom Remodeling",
    },
    {
      quote:
        "Responsive and always willing to go the extra mile. From consultation to final walkthrough, Titan made the entire process stress-free. Highly recommend!",
      author: "John Baker",
      location: "Clearwater, FL",
      service: "Full Home Renovation",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <p className="eyebrow mb-3">Client Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--ink)] mb-4">
            What Tampa Bay Homeowners Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Trusted by hundreds of Tampa Bay families. Here&apos;s what our clients say about working with Titan Homes Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--lavender)] rounded-lg p-7 sm:p-8 border border-[var(--lavender-hover)]"
            >
              <div className="flex gap-1 mb-4" aria-label="5 star review">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-[var(--navy)] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-[var(--ink)] leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[var(--lavender-hover)] pt-4">
                <p className="font-bold text-[var(--navy)]">{t.author}</p>
                <p className="text-gray-600 text-sm">{t.location}</p>
                <span className="inline-block mt-2 bg-[var(--navy)] text-white text-xs px-2.5 py-1 rounded font-medium">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
