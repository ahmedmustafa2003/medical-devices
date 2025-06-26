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
      className="relative w-full min-h-screen bg-black"
    >
      {/* Video background - only for hero section */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)",
          }}
        /> */}
      </div>

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

        {/* Hero Section - takes full viewport */}
        <section
          id="home"
          className="h-screen w-full flex items-center justify-center"
        >
          <HeroSection />
        </section>

        {/* Waves positioned at bottom of hero section */}
        <div className="relative w-full">
          <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
            <Waves />
          </div>
        </div>

        {/* Content below hero section */}
        <div className="relative bg-white">
          {/* About Section */}
          <section id="about" className="py-20 relative z-20 bg-white">
            <AboutSection />
          </section>

          {/* Other sections can follow here */}
          {/* <ServicesSection /> */}
          {/* <PortfolioSection /> */}
          {/* etc. */}
        </div>
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
        `}
      </style>
    </div>
  );
}
