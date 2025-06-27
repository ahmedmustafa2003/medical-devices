const CompanyStats = () => {
  const stats = [
    { number: "30+", label: "Years", sublabel: "of Excellence" },
    { number: "100+", label: "Countries", sublabel: "Served" },
    { number: "ISO", label: "13485:2016", sublabel: "Certified" },
    { number: "1000+", label: "Partners", sublabel: "Worldwide" },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-extralight text-black tracking-tight">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-black tracking-wide">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 font-light">
                  {stat.sublabel}
                </div>
              </div>

              {/* Minimal underline effect */}
              <div className="w-full h-px bg-gray-200 mt-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
