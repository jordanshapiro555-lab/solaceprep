"use client";

import { useState } from "react";

const slides = [
  {
    problem:
      "Your claim was denied and you're getting bounced between departments with no resolution.",
    solution:
      "Your advocate files the appeal with the right documentation, tracks its progress, and escalates until it's fully resolved.",
  },
  {
    problem:
      "Your doctor ordered a procedure but your insurance is requiring prior authorization and delaying your care.",
    solution:
      "Your advocate handles all the paperwork, follows up relentlessly, and ensures authorization is approved as fast as possible.",
  },
  {
    problem:
      "You received a surprise $8,000 bill from an out-of-network anesthesiologist you never chose.",
    solution:
      "Your advocate reviews the bill for errors, invokes your rights under the No Surprises Act, and negotiates the balance down.",
  },
];

export default function AdvocateDoSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="section-heading text-solace-text mb-3">
            What exactly does an advocate do?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Everyone&apos;s insurance journey is unique, but here are just some
            of the ways a Solace advocate makes healthcare less stressful.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {/* Problem */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-solace-gold mb-3 block">
              Problem
            </span>
            <p className="text-solace-text text-sm leading-relaxed">
              {slides[current].problem}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <span className="text-xs font-bold uppercase tracking-widest text-solace-green mb-3 block">
              Solution
            </span>
            <p className="text-solace-text text-sm leading-relaxed">
              {slides[current].solution}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-solace-green" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-solace-green text-white flex items-center justify-center hover:bg-solace-green-light transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-solace-green text-white flex items-center justify-center hover:bg-solace-green-light transition-colors"
            >
              <svg
                className="w-4 h-4"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
