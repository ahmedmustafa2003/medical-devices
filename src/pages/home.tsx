import { useEffect, useState } from "react";
import videoSrc from "../assets/videos/Background_video.mp4";
import Navbar from "../components/Navbar";
import { Waves } from "../components/Waves";
import logo from "../assets/images/logo_cropped.png";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import GlassBalls from "../components/GlassBalls";
import HeroSection from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TeamSection } from "../components/TeamSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
      className="relative w-full min-h-screen overflow-hidden bg-black"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glass Balls */}
      <GlassBalls
        colors={[
          "200, 240, 255", // Medical light blue
          "230, 250, 255", // Very light blue
          "220, 240, 250", // Soft blue
        ]}
        brightness={1.1}
        count={5}
      />

      {/* Gradient overlay */}
      <div
        className="fixed inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Logo in top left corner */}
      <div className="fixed top-6 left-6 z-30">
        <img
          src={logo}
          alt="Medical Devices Logo"
          className="h-12 w-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Floating Sidebar */}
      <div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30"
        style={{
          animation: "slideInLeft 1s ease-out forwards",
          opacity: 0,
        }}
      >
        <div className="flex flex-col gap-4 p-4 bg-gray-700/40 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)]">
          <a
            href="#location"
            className="p-3 rounded-full hover:bg-white/10 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
          >
            <MapPinIcon className="h-6 w-6 text-white" />
          </a>
          <a
            href="tel:+1234567890"
            className="p-3 rounded-full hover:bg-white/10 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
          >
            <PhoneIcon className="h-6 w-6 text-white" />
          </a>
          <a
            href="mailto:contact@medicaldevices.com"
            className="p-3 rounded-full hover:bg-white/10 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
          >
            <EnvelopeIcon className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        <Navbar />

        {/* Hero Section */}
        {/* Hero Section */}
        <section id="home" className="relative h-screen w-full">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/90 relative">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 relative">
          <ServicesSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-white relative">
          <PortfolioSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-blue-50 relative">
          <TestimonialsSection />
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white relative">
          <TeamSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 relative">
          <ContactSection />
        </section>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-100px) translateY(-50%);
              opacity: 0;
            }
            100% {
              transform: translateX(0) translateY(-50%);
              opacity: 1;
            }
          }
          @keyframes waveMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-wave {
            animation: waveMove 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
