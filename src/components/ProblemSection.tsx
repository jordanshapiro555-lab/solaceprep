const painPoints = [
  "Claim denied? Good luck getting a straight answer.",
  "Prior auth delays that put your health on hold.",
  "Surprise bills from doctors you thought were in-network.",
];

export default function ProblemSection() {
  return (
    <section className="bg-solace-green text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left */}
          <div className="w-full md:w-1/2">
            <h2 className="section-heading text-white mb-4">
              The system isn&apos;t designed to work for you.
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-7">
              Every year, millions of Americans are denied care they deserve,
              overcharged on bills they didn&apos;t understand, and left waiting
              months for authorizations that should take days. You deserve
              someone in your corner.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 bg-solace-gold hover:bg-solace-gold-dark text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              Get Started →
            </a>
          </div>

          {/* Right — pain points */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 border-solace-gold flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-solace-gold"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <p className="text-white/90 text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
