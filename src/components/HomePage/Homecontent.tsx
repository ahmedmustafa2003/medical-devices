import React from "react";
import Logo from "../../assets/images/logo_cropped.png";
import { motion } from "framer-motion";

const products = [
  {
    name: "Laryngoscope",
    description: "Precision instruments for airway visualization.",
    image: "/src/assets/images/laryngoscope.png",
  },
  {
    name: "ENT Diagnostics",
    description: "Reliable diagnostic tools for ENT professionals.",
    image: "/src/assets/images/ent-diagnostics.png",
  },
  {
    name: "Dermatoscope",
    description: "High clarity tools for dermal inspections.",
    image: "/src/assets/images/dermatoscope.png",
  },
  {
    name: "ENT Headlights",
    description: "Powerful lighting solutions for accurate examination.",
    image: "/src/assets/images/ent-headlights.png",
  },
  {
    name: "Fiber Optic Cables",
    description: "Durable and flexible medical-grade optic cables.",
    image: "/src/assets/images/fiber-optic-cables.png",
  },
  {
    name: "Hammers",
    description: "Neurological hammers for reflex testing.",
    image: "/src/assets/images/hammers.png",
  },
  {
    name: "Proctology",
    description: "Professional tools for proctological procedures.",
    image: "/src/assets/images/proctology.png",
  },
  {
    name: "Operating Laryngoscopes",
    description: "Advanced surgical-grade laryngoscopes.",
    image: "/src/assets/images/ent-operating-laryngoscopes.png",
  },
];

export default function Homecontent() {
  return (
    <div className="bg-white px-20 pb-10 overflow-hidden">
      {/* About Section */}
      <div className="flex justify-center items-center gap-4 mx-8 py-16">
        <div className="bg-red-600 w-40 h-[2px]" />
        <h1 className="text-3xl text-gray-900 font-semibold">Our Products</h1>
        <div className="bg-red-600 w-40 h-[2px]" />
      </div>

      {/* Logo Section */}
      <div
        className="relative p-10 rounded-lg flex justify-end items-center"
        style={{
          backgroundImage: `url('/src/assets/images/bg_home.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={Logo} alt="Logo" className="h-20 w-auto animate-breathe" />
      </div>

      {/* Scrolling Products Section */}
      <div className="mt-16 overflow-hidden relative group">
        <motion.div className="flex gap-6 w-max animate-scroll-slow group-hover:[animation-play-state:paused]">
          {[...products, ...products].map((product, idx) => (
            <div
              key={idx}
              className="w-48 flex-shrink-0 border border-gray-300 bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-36 flex items-center justify-center bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 object-contain z-10 transition-transform duration-300"
                />
                {/* Hover Backdrop */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 z-0" />
              </div>
              <div className="p-3 text-center">
                <h4 className="text-sm font-semibold text-black">
                  {product.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {product.description}
                </p>
                <button className="mt-2 px-4 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center items-center gap-4 mx-8 py-16">
        <div className="bg-red-600 w-40 h-[2px]" />
        <h1 className="text-3xl text-gray-900 font-semibold">Contact Us</h1>
        <div className="bg-red-600 w-40 h-[2px]" />
      </div>
    </div>
  );
}
