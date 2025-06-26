import { Shield, Award, CheckCircle } from "lucide-react";

const QualityStandards = () => {
  const standards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ISO 13485:2016",
      description: "Medical devices quality management system certification",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "CE Mark",
      description: "European conformity marking for medical devices",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "cGMP Compliant",
      description: "Current Good Manufacturing Practice standards",
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tesla-style header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-extralight text-black mb-6 tracking-tight">
              Standards
            </h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and compliance in
              everything we do.
            </p>
          </div>

          {/* Tesla-style cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="group animate-fade-in hover:bg-gray-50 transition-all duration-300 p-8"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-medium text-black mb-4 tracking-wide">
                  {standard.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {standard.description}
                </p>

                {/* Minimal hover effect */}
                <div className="w-full h-px bg-gray-200 mt-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
