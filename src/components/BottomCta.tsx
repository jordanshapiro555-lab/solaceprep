export default function BottomCta() {
  return (
    <section
      id="get-started"
      className="bg-solace-green text-white py-16 md:py-20 text-center"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-white mb-3">
          You don&apos;t have to fight your insurance company alone.
        </h2>
        <p className="text-white/70 text-base mb-8">
          Start receiving support from your advocate today.
        </p>
        <a
          href="https://www.solace.health/get-started"
          className="inline-flex items-center gap-2 bg-solace-gold hover:bg-solace-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-base"
        >
          Get Started →
        </a>
      </div>
    </section>
  );
}
