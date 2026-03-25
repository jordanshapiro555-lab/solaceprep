export default function SolutionSection() {
  return (
    <section className="bg-solace-green text-white relative">
      {/* Wave divider at top */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 60 }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#F9F6F1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left — abstract illustration */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Central hub */}
              <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">
                  Solace
                </span>
              </div>
              {/* Connected nodes */}
              {[
                { label: "Claims", angle: 0 },
                { label: "Prior Auth", angle: 72 },
                { label: "Bills", angle: 144 },
                { label: "Appeals", angle: 216 },
                { label: "Referrals", angle: 288 },
              ].map(({ label, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 100;
                const cx = 128 + r * Math.cos(rad);
                const cy = 128 + r * Math.sin(rad);
                return (
                  <div
                    key={label}
                    className="absolute w-14 h-14 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-xs text-white font-medium"
                    style={{
                      left: cx - 28,
                      top: cy - 28,
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — copy */}
          <div className="w-full md:w-7/12">
            <h2 className="section-heading text-white mb-4">
              Insurance is complicated.{" "}
              <span className="italic">Let us handle it.</span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Your Solace advocate navigates every obstacle — from appealing
              denials to decoding your Explanation of Benefits to negotiating
              bills down.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-7">
              They&apos;ll translate complicated forms, keep your doctors
              coordinated, and be there to listen when you need it most.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 bg-solace-gold hover:bg-solace-gold-dark text-white font-semibold px-7 py-3 rounded-full transition-colors duration-200"
            >
              Get Started →
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 60 }}
        >
          <path
            d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
