"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How are advocates qualified?",
    answer:
      "Solace advocates are experienced healthcare professionals with backgrounds in patient advocacy, case management, and insurance navigation. Each advocate goes through rigorous training and vetting before being matched with members.",
  },
  {
    question: "Does my employer insurance cover this?",
    answer:
      "Solace is covered by many commercial insurance plans including those from Cigna, Aetna, UnitedHealthcare, Anthem, and more. We'll verify your specific coverage during your intake session — many members pay $0 out of pocket.",
  },
  {
    question: "What can an advocate help with?",
    answer:
      "Advocates help with claim denials and appeals, prior authorizations, surprise billing disputes, finding in-network specialists, understanding your Explanation of Benefits (EOB), medical bill negotiation, and navigating complex treatment decisions.",
  },
  {
    question: "Are advocates available nationwide?",
    answer:
      "Yes. Solace advocates are available across all 50 states and work remotely, so you can connect by phone or video whenever you need support — no matter where you live.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="section-heading text-center text-solace-text mb-10">
          FAQ
        </h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-solace-text font-medium text-sm leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
