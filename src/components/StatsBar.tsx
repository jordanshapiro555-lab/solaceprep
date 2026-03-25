const stats = [
  { value: "87%", label: "of denied claims successfully appealed" },
  { value: "$2,300", label: "average savings on medical bills" },
  { value: "4.9★", label: "average member satisfaction" },
];

export default function StatsBar() {
  return (
    <section className="bg-solace-cream py-10 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif font-bold text-4xl text-solace-green mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-600 leading-snug max-w-[180px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
