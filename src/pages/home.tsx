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
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      // Check for waves section
      const wavesSection = document.querySelector(".relative.w-full");
      if (wavesSection) {
        const wavesPosition = wavesSection.getBoundingClientRect().top;
        setIsScrolledPastHero(wavesPosition < 0);
      }

      // Check for scroll position to show border
      setShowBorder(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      </div>

      {/* Header container with border glow effect */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500
    flex items-center justify-between px-6 py-4 rounded-full
    ${
      showBorder
        ? "w-[80%] bg-white backdrop-blur-md shadow-[0_0_20px_10px_rgba(185,28,28,0.7)]"
        : "w-full bg-transparent"
    }`}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
        </div>
        <Navbar />
        {/* Company Name on the right */}
        <h2
          className={`text-md md:text-lg ${
            isScrolledPastHero ? "text-black" : "text-white"
          } transition-colors duration-500`}
        >
          Medical Devices (Pvt) LTD
        </h2>
      </div>

      {/* Floating Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative z-20 pt-16">
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
          <section id="aboutus" className="py-20 relative z-20 bg-white">
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
