const signals = [
  {
    value: "4.7 out of 5",
    stars: true,
    label: "Based on 8,332 patient reviews",
  },
  {
    value: "98%",
    stars: false,
    label: "of patients report better healthcare outcomes",
  },
  {
    value: "50,000+",
    stars: false,
    label: "patients supported by Solace advocates",
  },
];

function StarRating() {
  return (
    <div className="flex items-center justify-center gap-0.5 mb-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-solace-green"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustSignalsBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {signals.map((signal, i) => (
            <div key={i} className="flex flex-col items-center pt-6 sm:pt-0 first:pt-0">
              {signal.stars && <StarRating />}
              <span className="font-serif font-bold text-2xl md:text-3xl text-solace-green leading-tight">
                {signal.value}
              </span>
              <span className="text-xs text-gray-500 leading-snug mt-1 max-w-[160px]">
                {signal.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
