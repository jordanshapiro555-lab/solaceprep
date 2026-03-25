const insurers = [
  { name: "Cigna", color: "#005EB8" },
  { name: "Aetna", color: "#7B1E3E" },
  { name: "UnitedHealthcare", color: "#006A4E" },
  { name: "Blue Cross", color: "#003087" },
  { name: "Anthem", color: "#286FC6" },
  { name: "Humana", color: "#007C89" },
];

export default function InsuranceTrustBar() {
  return (
    <section className="bg-white border-t border-b border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Now Covered by Insurance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {insurers.map((ins) => (
            <span
              key={ins.name}
              className="font-bold text-sm md:text-base tracking-tight"
              style={{ color: ins.color }}
            >
              {ins.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
