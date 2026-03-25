const steps = [
  {
    title: "Intake Session",
    description:
      "We'll call and discuss your situation, your insurance coverage, and the ways an advocate can help you get the care you deserve.",
  },
  {
    title: "Advocate Meeting",
    description:
      "Meet your Solace advocate — an expert who will listen to you, understand your coverage, and start fighting for you right away.",
  },
  {
    title: "Ongoing Support",
    description:
      "We're here whenever you need us — however long it takes. No insurance issue is too big or too small.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-solace-cream py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center text-solace-text mb-12">
          Meet your care team as soon as today!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-6 h-px bg-gray-300 z-10" />
              )}
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                <div className="w-10 h-10 rounded-full bg-solace-green text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-lg text-solace-text mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#get-started" className="btn-gold">
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
