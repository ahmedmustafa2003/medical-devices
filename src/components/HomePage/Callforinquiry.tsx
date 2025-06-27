import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppCTAProps {
  phoneNumber: string;
  message?: string;
  title?: string;
  description?: string;
  className?: string;
}

const Callforinquiry = ({
  phoneNumber,
  message = "Hello! I'd like to learn more about your medical diagnostic instruments.",
  title = "Get In Touch",
  description = "Ready to discuss your medical diagnostic needs? Connect with our team instantly via WhatsApp for immediate support and personalized solutions.",
  className = "",
}: WhatsAppCTAProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className={`py-20 bg-gradient-to-r from-red-600 to-black text-white relative overflow-hidden ${className}`}
    >
      {/* Background Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-extralight tracking-tight">
                {title}
              </h2>
              <div className="w-16 h-px bg-white"></div>
              <p className="text-lg lg:text-xl font-light text-gray-200 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* Button with Sparks */}
            <div className="relative flex-shrink-0 animate-fade-in delay-300">
              {/* Spark Elements */}
              {[
                ["-20px", "-50px", "0s"],
                ["100%", "-60px", "0.3s"],
                ["-30px", "70px", "0.6s"],
                ["100%", "80px", "0.9s"],
                ["-40px", "0px", "1.2s"],
                ["100%", "0px", "1.5s"],
              ].map(([left, top, delay], i) => (
                <div
                  key={i}
                  className="absolute w-[2px] h-10 bg-white/70 blur-sm animate-spark z-10"
                  style={{
                    left,
                    top,
                    animationDelay: delay,
                  }}
                ></div>
              ))}

              <button
                onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg tracking-wide shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Contact on WhatsApp</span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>

              {/* Status Label */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Instant Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spark Keyframes */}
      <style>{`
        @keyframes spark {
          0%, 100% {
            opacity: 0.1;
            transform: translateY(-8px) scaleY(0.9);
          }
          50% {
            opacity: 1;
            transform: translateY(0px) scaleY(1.2);
          }
        }

        .animate-spark {
          animation: spark 1.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Callforinquiry;
