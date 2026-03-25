export default function CareTeamSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left — copy */}
          <div className="w-full md:w-1/2">
            <h2 className="section-heading text-solace-text mb-4">
              Solace means support.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-7">
              We pair you with an expert health advocate who&apos;s right for
              you. Working alongside your doctors and insurance, they&apos;ll be
              by your side every step of the way — fighting for the support you
              need, when you need it.
            </p>
            <p className="text-gray-500 text-sm italic mb-7">
              This is your Solace Care Team.
            </p>
            <a href="#get-started" className="btn-gold">
              Get Started →
            </a>
          </div>

          {/* Right — care team diagram */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72">
              {/* Solace — top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-solace-green border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <span className="text-xs font-semibold text-gray-600 mt-1">
                  Solace
                </span>
              </div>

              {/* You — center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-solace-green border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-base">
                  You
                </div>
                {/* Connecting lines */}
                <svg
                  className="absolute top-8 left-8 -z-10 pointer-events-none"
                  width="200"
                  height="200"
                  style={{ transform: "translate(-50%, -50%)" }}
                  viewBox="-100 -100 200 200"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-90"
                    stroke="#1A3C34"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2="-80"
                    y2="70"
                    stroke="#1A3C34"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />
                  <line
                    x1="0"
                    y1="0"
                    x2="80"
                    y2="70"
                    stroke="#1A3C34"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />
                </svg>
              </div>

              {/* Solace Advocate — bottom left */}
              <div className="absolute bottom-0 left-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-solace-gold border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
                  SA
                </div>
                <span className="text-xs font-semibold text-gray-600 mt-1 text-center">
                  Solace
                  <br />
                  Advocate
                </span>
              </div>

              {/* Supporting Physician — bottom right */}
              <div className="absolute bottom-0 right-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-amber-100 border-4 border-white shadow-md flex items-center justify-center text-solace-green font-bold text-xs text-center leading-tight">
                  MD
                </div>
                <span className="text-xs font-semibold text-gray-600 mt-1 text-center">
                  Supporting
                  <br />
                  Physician
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
