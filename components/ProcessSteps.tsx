interface ProcessStepsProps {
  title?: string;
}

export default function ProcessSteps({
  title = "What to Expect: A Seamless Remodeling Experience",
}: ProcessStepsProps) {
  const steps = [
    {
      number: "01",
      title: "Consultation & Estimate",
      description:
        "We discuss your vision, budget, timeline, then provide a detailed estimate for your project.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our team collaborates with you to finalize materials, layouts, and project scope.",
    },
    {
      number: "03",
      title: "Construction & Execution",
      description:
        "Our skilled craftsmen bring your project to life with expert precision.",
    },
    {
      number: "04",
      title: "Final Walkthrough & Approval",
      description:
        "No final payment is requested until you are 100% satisfied — that&apos;s our guarantee.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--lavender)] text-[var(--navy)] flex items-center justify-center font-bold text-base">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-3">{step.title}</h3>
              <p
                className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
