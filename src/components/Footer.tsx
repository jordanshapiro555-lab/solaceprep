export default function Footer() {
  return (
    <footer className="bg-solace-green text-white/70 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Mission */}
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
              Our Mission
            </p>
            <p className="text-sm leading-relaxed">
              Solace&apos;s mission is to empower patients, improve outcomes,
              and restore the promise of the U.S. healthcare system.
            </p>
          </div>

          {/* Contact + links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
              Contact Us
            </p>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="mailto:info@solace.health"
                  className="hover:text-white transition-colors"
                >
                  info@solace.health
                </a>
              </li>
              <li>
                <a
                  href="tel:6506865013"
                  className="hover:text-white transition-colors"
                >
                  (650) 686-5013
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2024 Find Solace, Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a
              href="/terms"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
