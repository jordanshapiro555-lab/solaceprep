"use client";

const options = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#1A3C34" opacity="0.08" />
        <circle cx="16" cy="16" r="7" stroke="#1A3C34" strokeWidth="1.5" fill="none" />
        <path d="M16 12v1.5M16 18.5V20M13.5 14.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.2-.84 2.2-2 2.45V18" stroke="#C9974A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Medical Bills",
    description: "Review and negotiate medical bills",
    href: "#get-started",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#1A3C34" opacity="0.08" />
        <path d="M8 10h16v10a2 2 0 01-2 2H10a2 2 0 01-2-2V10z" stroke="#1A3C34" strokeWidth="1.5" fill="none" />
        <path d="M8 10l8 5 8-5" stroke="#C9974A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Doctor Communication",
    description: "Ask questions and get clear answers",
    href: "#get-started",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="3" fill="#1A3C34" opacity="0.08" />
        <rect x="9" y="8" width="14" height="16" rx="1.5" stroke="#1A3C34" strokeWidth="1.5" fill="none" />
        <path d="M12 13h8M12 16h6M12 19h4" stroke="#C9974A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Insurance Paperwork",
    description: "Handle the details and cut through the red tape",
    href: "#get-started",
  },
];

export default function PainPointGrid() {
  return (
    <section className="bg-solace-cream py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-solace-text mb-2">
            What do you most need help with?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Your Solace advocate helps with all aspects of your medical care.
            Select where you need the most help:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {options.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              className="group bg-white border border-gray-200 hover:border-solace-green rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex-shrink-0 mt-0.5">{opt.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-solace-text text-sm mb-1">
                  {opt.title}
                </div>
                <div className="text-xs text-gray-500 leading-snug">
                  {opt.description}
                </div>
              </div>
              <svg
                className="w-4 h-4 text-solace-green flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="#get-started"
            className="text-sm text-solace-text underline underline-offset-2 hover:text-solace-green transition-colors"
          >
            Other
          </a>
          <a
            href="#get-started"
            className="text-sm text-solace-text underline underline-offset-2 hover:text-solace-green transition-colors"
          >
            All of the above
          </a>
        </div>
      </div>
    </section>
  );
}
