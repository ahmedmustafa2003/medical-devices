import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function FloatingSidebar() {
  return (
    <div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30"
      style={{
        animation: "slideInLeft 1s ease-out forwards",
        opacity: 0,
      }}
    >
      <div
        className="flex flex-col gap-4 p-2 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)]"
        style={{
          backgroundImage: "url('/section2_bg.jpeg')", // ✅ Use image from /public
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a
          href="#location"
          className="p-3 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200 whitespace-nowrap"
        >
          <MapPinIcon className="h-6 w-6 text-black" />
        </a>
        <a
          href="tel:+1234567890"
          className="p-3 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200 whitespace-nowrap"
        >
          <PhoneIcon className="h-6 w-6 text-black" />
        </a>
        <a
          href="mailto:contact@medicaldevices.com"
          className="p-3 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200 whitespace-nowrap"
        >
          <EnvelopeIcon className="h-6 w-6 text-black" />
        </a>
      </div>

      {/* SlideIn animation */}
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-50px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
