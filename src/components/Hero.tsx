export default function Hero() {
  return (
    <section className="bg-white pt-10 pb-4 md:pt-16 md:pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-8">
        {/* Illustration — abstract collage matching Solace visual style */}
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full bg-solace-cream" />

            {/* Advocate card */}
            <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-3 w-48">
              <div className="w-10 h-10 rounded-full bg-solace-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                SA
              </div>
              <div>
                <div className="text-xs font-semibold text-solace-green">
                  Solace Advocate
                </div>
                <div className="text-xs text-gray-500">Christine G.</div>
              </div>
            </div>

            {/* Appeal won card */}
            <div className="absolute bottom-10 left-4 bg-white rounded-2xl shadow-lg p-3 w-44">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-green-600">
                  Claim Appeal Won
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Saved $4,200 on denied claim
              </div>
            </div>

            {/* Prior auth card */}
            <div className="absolute top-16 right-2 bg-white rounded-2xl shadow-lg p-3 w-40">
              <div className="text-xs font-semibold text-solace-green mb-1">
                Prior Auth
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-solace-gold" />
                <span className="text-xs text-gray-500">In Progress</span>
              </div>
              <div className="mt-1 w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-solace-gold h-1.5 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

            {/* Member circle */}
            <div className="absolute bottom-16 right-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md bg-solace-green-light flex items-center justify-center text-white font-bold">
              You
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
          <h1 className="section-heading text-solace-text mb-4 text-3xl md:text-[2.6rem] leading-tight">
            Your insurance company has a team of lawyers.{" "}
            <span className="text-solace-green">
              You should have an expert too.
            </span>
          </h1>
          <p className="text-gray-600 text-lg mb-7 leading-relaxed">
            Your Solace advocate fights for you — handling claim denials, prior
            authorizations, surprise bills, and anything else standing between
            you and the care you deserve.
          </p>
          <a href="#get-started" className="btn-gold text-base">
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}
