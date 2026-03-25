"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Maru M.",
    quote:
      "I was living with extreme pain that stole my focus and energy. My advocate found me the care I needed with sweetness, efficiency, and excellence. He feels like family, and I'm eternally grateful.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3ce0ef0d957b1fc438b0_765a3e75c73530e9736764f6767392ed_Maru%201.avif",
  },
  {
    name: "Diane J.",
    quote:
      "My cardiologist stopped taking my insurance and said I had to find a replacement on my own. It was overwhelming. My advocate is amazing, and she's been solving all my problems. What a relief to have someone on my side!",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3cdfef0d957b1fc438aa_3842844e09a88c3c8a4c4ff314f1890a_Diane%201.avif",
  },
  {
    name: "Megan B.",
    quote:
      "My advocate has changed everything about my healthcare, helping me coordinate my doctor's appointments, medications, scans, and x-rays. She's brought a new level of calm to my life. Solace has been amazing.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3ce0ef0d957b1fc438b3_d77ece1bcc146be6606cbb253397d711_Megan%201.avif",
  },
  {
    name: "Veronica M.",
    quote:
      "My advocate has gotten me referrals I couldn't get on my own — even within a day or two, compared to the six months I used to wait. He's taken a huge weight off my shoulders.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3cdfef0d957b1fc438a1_b9241a6c4cde4458c6aa90a1ce725d71_Veronica%201.avif",
  },
  {
    name: "Patricia F.",
    quote:
      "Michele got my scooter covered, set up Meals on Wheels, and arranged for a housekeeper. Now I can go to my mailbox, my home is clean, and I don't eat microwave meals. She's changed my moods and my whole life.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3cdfef0d957b1fc438a7_a7f7fd78077ad648a669b98d94179f6d_Patricia%201.avif",
  },
  {
    name: "Pennie H.",
    quote:
      "My advocate is such a great person. She makes me feel heard and cared for. I'm able to tell her things you only tell your best friend and she doesn't judge.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696f01ba28babc0c21e7459e_7395cf4dd8f4357a2238b1b0b2c33189_Pennie%201.avif",
  },
  {
    name: "Anna A.",
    quote:
      "Finally, someone who listens, understands my problem and I can speak with human to human. Communication with courtesy is becoming a lost art. I am so happy to have found Solace.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3cdfef0d957b1fc438a4_9af064e4b2589a4d2ce58a4f6d14c989_Annie%201.avif",
  },
  {
    name: "Monty L.",
    quote:
      "My advocate has been invaluable. Her moxie and dedication are second to none. She's had to fight to get others to do the bare minimum, and she never gives up. Solace is a true champion for people in need.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/696c3ce0ef0d957b1fc438ad_20265ab8873eb6f651739f980d0f280f_Monty%201.avif",
  },
  {
    name: "Jubilee C.",
    quote:
      "My advocate is incredible! So helpful, communicates where I am comfortable & can handle, and organizes everything so that I can focus on the day to day management of my chronic illnesses.",
    photo:
      "https://cdn.prod.website-files.com/632a21d0ec93a082b11988a0/6970ff2527f83496a3057c66_fa3b61e9bb62c1c9f4e432b0cc85b68b_Jubilee%201.avif",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-solace-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientStoriesSection() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  return (
    <section className="bg-solace-cream py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-3">
          <h2 className="section-heading text-solace-text">
            See How Solace Made All the Difference
          </h2>
        </div>

        {/* As seen in */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            As seen in
          </span>
          <span className="font-serif font-bold text-lg text-gray-700 tracking-tight">
            WSJ
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row min-h-[260px]">
          {/* Photo */}
          <div className="w-full sm:w-56 flex-shrink-0 bg-solace-green/10">
            <img
              src={t.photo}
              alt={t.name}
              className="w-full h-56 sm:h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Quote */}
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <StarRow />
              <p className="text-solace-text text-lg leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div>
              <p className="font-semibold text-solace-text text-sm">{t.name}</p>
              <p className="text-gray-400 text-xs">Solace Patient</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm text-gray-400">
            {index + 1}/{total}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIndex((index - 1 + total) % total)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-solace-green flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-solace-text rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => setIndex((index + 1) % total)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-solace-green hover:bg-solace-green-light flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <a
            href="#get-started"
            className="btn-gold text-sm"
          >
            See More Patient Stories →
          </a>
        </div>
      </div>
    </section>
  );
}
