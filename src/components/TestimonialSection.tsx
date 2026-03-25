export default function TestimonialSection() {
  return (
    <section className="bg-solace-cream py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Copy */}
          <div className="p-8 md:p-10 flex-1">
            <span className="inline-block text-xs font-semibold tracking-widest text-solace-gold uppercase mb-4">
              Watch Now
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-solace-text mb-3">
              Hear Marcus &amp; Sarah&apos;s story.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Marcus was blindsided by a $14,000 surprise bill after his
              wife&apos;s surgery. They had no idea how to fight it — until
              their Solace advocate stepped in and negotiated it down to zero.
              Watch the video to hear how.
            </p>
          </div>

          {/* Video thumbnail */}
          <div className="relative w-full md:w-64 lg:w-80 flex-shrink-0 min-h-[180px] bg-solace-green flex items-center justify-center">
            <button
              aria-label="Play video"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center border-2 border-white/50"
            >
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white/70 text-xs text-center">
                Marcus &amp; Sarah — Solace members since 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
