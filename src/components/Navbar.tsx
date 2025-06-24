import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo_cropped.png";
import "../index.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [showTalkModal, setShowTalkModal] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Talk to Us Modal */}
      {showTalkModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center pt-20 pb-20">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 max-w-md w-full mx-4 text-white border border-white/30 animate-slideDown">
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} alt="img_logo" className="h-6 w-auto" />
              <h2 className="text-md">TALK TO US</h2>
              <button
                onClick={() => setShowTalkModal(false)}
                className="text-white hover:text-white/70"
              >
                ✕
              </button>
            </div>
            <p className="bg-white/0 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              Please share a message with your required information and we will
              get back to you ASAP.
            </p>

            <div className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  id="name"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  id="email"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col space-y-2">
                <input
                  type="tel"
                  id="phone"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <textarea
                  id="message"
                  rows={4}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  placeholder="Please share your requirements and any specific information..."
                />
              </div>

              {/* Contact Preference */}
              <div className="space-y-4 pt-2">
                <div className="ml-6 space-y-3">
                  <p className="text-sm">Preferred contact method:</p>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="contactEmail"
                      className="h-4 w-4 text-blue-300 focus:ring-blue-300 border-white/20 rounded bg-white/10"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="contactPhone"
                      className="h-4 w-4 text-blue-300 focus:ring-blue-300 border-white/20 rounded bg-white/10"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-right">
              <button
                onClick={() => setShowTalkModal(false)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="relative flex justify-between items-center p-6 px-6 bg-white/20 backdrop-blur-sm rounded-xl mx-12 mt-6 text-white group">
        {/* Shadow wrapper */}
        <div className="absolute inset-0 rounded-xl group-hover:shadow-xl group-hover:shadow-white/50 transition-shadow duration-300 pointer-events-none"></div>

        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3 z-10">
          <img src={Logo} alt="img_logo" className="h-12 w-auto" />
          <div className="text-xl cursor-pointer" onClick={() => navigate("/")}>
            Medical Devices
          </div>
        </div>

        {/* Navigation items - right aligned */}
        <div className="hidden md:flex gap-8 z-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="text-sm uppercase tracking-wider hover:opacity-75 transition-opacity"
            >
              {item.name}
            </button>
          ))}

          {/* Talk to Us Button */}
          <button
            onClick={() => setShowTalkModal(true)}
            className="relative overflow-hidden px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <span className="relative z-10">Talk to Us</span>
            <span className="shine-effect"></span>
          </button>
        </div>

        {/* Mobile Projects button with arrow */}
        <button
          onClick={() => navigate("/projects")}
          className="md:hidden flex items-center gap-1 text-sm uppercase z-10"
        >
          Projects <span>→</span>
        </button>
      </div>

      {/* Mobile Talk to Us Button (shown only on mobile) */}
      <button
        onClick={() => setShowTalkModal(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-lg hover:shadow-white/30 transition-all"
      >
        Talk to Us
      </button>
    </>
  );
}
