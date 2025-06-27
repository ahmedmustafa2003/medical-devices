import { useEffect, useState } from "react";
import videoSrc from "../assets/videos/Background_video.mp4";
import Navbar from "../components/Navbar";
import { Waves } from "../components/Waves";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Homecontent from "../components/HomePage/Homecontent";
import Callforinquiry from "../components/HomePage/Callforinquiry";
import ClientTestimonials from "../components/HomePage/ClientTestimonials";
import Sendmessage from "../components/HomePage/Sendmessage";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolledPastHero(window.scrollY > heroHeight * 0.8);
      }
      setShowBorder(window.scrollY > 50);
    };

    const handleLoad = () => {
      handleScroll(); // Initialize state on load
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      {/* Video background - only for hero section */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* navbar container */}
      <div>
        <Navbar />
      </div>

      {/* sidebar and herosection container */}
      <div className="flex-col">
        <Sidebar />
        <HeroSection />
      </div>

      {/* waves container */}
      <div className="">
        <div className="my-20"></div>
        <Waves />
        <div className="bg-white py-10"></div>
      </div>

      {/* Home page content */}
      <div>
        <Homecontent />
      </div>
      <div>
        <Callforinquiry phoneNumber={"+92523571214"} />
      </div>
      <div>
        <ClientTestimonials />
      </div>
      <div>
        <Sendmessage />
      </div>
    </div>
  );
}
