import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Sendmessage() {
  return (
    <div className="bg-white">
      {/* Title with red lines */}
      <div className="flex justify-center items-center gap-4 mx-8 py-16">
        <div className="bg-red-600 w-40 h-[2px]" />
        <h1 className="text-3xl text-gray-900 font-semibold">
          Send Us Message
        </h1>
        <div className="bg-red-600 w-40 h-[2px]" />
      </div>

      {/* Main content layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-6 pb-20">
        {/* Left Side - Contact Info */}
        <div className="flex-1 py-6 space-y-10 max-w-[30%]">
          {[
            {
              icon: <MapPin size={18} />,
              label: "123 Medical Street, Health City, Country",
            },
            {
              icon: <Phone size={18} />,
              label: "+92 52 3571214",
            },
            {
              icon: <Mail size={18} />,
              label: "info@medicaldevices.com",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-red-600 text-white transition-colors duration-300 hover:bg-gray-300 hover:text-red-600">
                {item.icon}
              </div>
              <p className="text-gray-700 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex-1">
          <form className="rounded-lg w-full space-y-8">
            {/* Name and Email Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-md text-sm"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-8 rounded-full hover:bg-red-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
