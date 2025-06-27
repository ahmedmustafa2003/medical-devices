import React from "react";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center max-w-5xl">
        {/* Tesla-style large text */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-none">
            Medical
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 -mt-4">
            Diagnostic Excellence
          </h2>

          <div className="w-24 h-px bg-white mx-auto my-12"></div>

          <p className="text-xl md:text-2xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of medical diagnostics with precision
            engineering and innovative technology since 1991.
          </p>
        </div>

        {/* Tesla-style CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 animate-fade-in delay-500">
          <button className="px-8 py-3 bg-white text-black font-medium rounded-none hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide">
            EXPLORE PRODUCTS
          </button>
          <button className="px-8 py-3 border border-white text-white font-medium rounded-none hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-lg tracking-wide">
            OUR STORY
          </button>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
