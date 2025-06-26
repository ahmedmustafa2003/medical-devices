const CertificationLogos = () => {
  const certifications = [
    { name: "CE", full: "CE Marking" },
    { name: "ISO", full: "ISO 13485" },
    { name: "SGS", full: "SGS Certified" },
    { name: "UKAS", full: "UKAS Accredited" },
  ];

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Tesla-style minimal header */}
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-2xl font-light text-gray-300 mb-6">
              Certified Quality
            </h3>
            <div className="w-12 h-px bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Tesla-style certification display */}
                <div className="border border-gray-700 p-8 hover:border-white transition-all duration-300 group-hover:bg-gray-900">
                  <div className="text-3xl font-extralight text-white mb-4 tracking-widest">
                    {cert.name}
                  </div>
                  <div className="text-sm text-gray-400 font-light">
                    {cert.full}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationLogos;
