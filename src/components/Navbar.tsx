import React, { useEffect, useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo_cropped.png"; // Adjust path if needed

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", icon: HomeIcon },
    { name: "About Us", icon: UserGroupIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Contact Us", icon: ChatBubbleBottomCenterTextIcon },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full flex items-center justify-between px-6 py-4 gap-6 transition-all duration-500 ${
        scrolled ? "bg-white/10 backdrop-blur-md shadow-lg " : "bg-transparent"
      }`}
      style={{
        animation: "slideDown 1s ease-out forwards",
      }}
    >
      {/* Left: Logo */}
      <div
        className={`transition-all duration-500 ${
          scrolled ? "h-10" : "h-14"
        } flex-shrink-0`}
      >
        <img
          src={logo}
          alt="Company Logo"
          className={`transition-all duration-500 ${
            scrolled ? "h-10" : "h-14"
          } w-auto`}
        />
      </div>

      {/* Center: Nav Buttons */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-lg font-medium border border-white/30 px-4 py-2 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_0_25px_6px_rgba(185,28,28,0.8)] shadow-red-600"
            : "hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.5)]"
        }`}
        style={{
          backgroundImage: `url('/section2_bg.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="flex gap-4">
          {navItems.map((item) => {
            const id = item.name.toLowerCase().replace(/ /g, "");
            return (
              <button
                key={item.name}
                onClick={() => handleScroll(id)}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm text-black bg-white/20 hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
              >
                <item.icon className="h-5 w-5 text-black" />
                <span className="whitespace-nowrap">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right: Company Name with smooth size transition */}
      <div
        className={`transition-all duration-500 ease-in-out transform whitespace-nowrap ${
          scrolled ? "text-xl text-red-600" : "text-xl text-white"
        }`}
      >
        Medical Devices (Pvt) LTD.
      </div>

      {/* SlideDown animation */}
      <style>
        {`
          @keyframes slideDown {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
