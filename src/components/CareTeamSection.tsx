const steps = [
  {
    number: "1",
    title: "Check Your Coverage",
    description:
      "Tell us about your insurance. We'll confirm if your plan covers Solace — and patients pay $0.",
    note: "Will this cost me money?",
    answer: "Usually nothing",
  },
  {
    number: "2",
    title: "Quick Intake Call",
    description:
      "A 15-minute call to understand your situation fully: appointment needs, diagnoses, or care concerns.",
    note: "Do I have to figure this out alone?",
    answer: "No, we guide every step",
  },
  {
    number: "3",
    title: "Meet Your Advocate",
    description:
      "We match you with an experienced health advocate — a nurse, physician, or specialist — who understands your situation.",
    note: "Who exactly am I getting?",
    answer: "A trusted healthcare professional",
  },
  {
    number: "4",
    title: "Start Getting Support",
    description:
      "Your advocate helps with their team: meets with doctors, resolves bills, and keeps you up-to-date for as long as you need.",
    note: "What happens after?",
    answer: "Ongoing support, for as long as you need",
  },
];

export default function CareTeamSection() {
  return (
    <section className="bg-solace-cream py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center text-solace-text mb-10">
          Meet your care team as soon as today!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              {/* Step number + icon */}
              <div className="w-10 h-10 rounded-full bg-solace-green/10 flex items-center justify-center">
                <span className="text-solace-green font-bold text-sm">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-solace-text text-sm md:text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* FAQ note */}
              <div className="mt-auto pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400 italic">{step.note}</p>
                <p className="text-xs font-medium text-solace-green mt-0.5">
                  {step.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <a href="#get-started" className="btn-gold text-base">
            Get Started →
          </a>
          <p className="text-xs text-gray-400">
            Covered by Medicare &bull; Rated 4.7/5 by 8,332 patients.
          </p>
        </div>
      </div>
    </section>
  );
}
