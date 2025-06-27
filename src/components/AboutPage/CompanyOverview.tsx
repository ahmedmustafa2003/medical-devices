const CompanyOverview = () => {
  return (
    <section className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tesla-style section header */}
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-extralight text-black mb-6 tracking-tight">
              Our Mission
            </h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          {/* Content blocks */}
          <div className="space-y-16">
            <div className="transform translate-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
              <p className="text-2xl lg:text-3xl font-light text-black leading-relaxed text-center">
                Medical Devices (Pvt.) Ltd. stands as the most sought-after name
                in Medical Diagnostic Instruments, combining precision
                engineering with user-friendly design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center transform translate-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]">
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-black">Global Reach</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Located strategically outside Sialkot, we specialize in
                  anesthesia products, laryngoscopes, and diagnostic
                  instruments, serving healthcare professionals in virtually
                  every country.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-light text-black">Innovation</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  From a small-scale operation to a global enterprise, our
                  growth reflects the dedication of skilled professionals
                  committed to premium quality products.
                </p>
              </div>
            </div>

            {/* Tesla-style feature highlight */}
            <div className="bg-black text-white p-12 transform translate-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.7s_forwards]">
              <div className="text-center">
                <h3 className="text-3xl font-light mb-6">Quality Excellence</h3>
                <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Our manufacturing facilities are equipped with the most modern
                  machinery to attain the highest perfection of quality through
                  innovative processes and total quality management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
