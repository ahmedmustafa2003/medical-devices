import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function FloatingSidebar() {
  return (
    <div
      className="fixed top-1/3 left-8 -translate-y-1/2"
      style={{
        animation: "slideInLeft 1s ease-out forwards",
        opacity: 0,
      }}
    >
      <div
        className="flex flex-col gap-2 p-2 backdrop-blur-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)]"
        style={{
          backgroundImage: "url('/section2_bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a
          href="#location"
          className="p-2 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
        >
          <MapPinIcon className="h-5 w-5 text-black" />
        </a>
        <a
          href="tel:+1234567890"
          className="p-2 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
        >
          <PhoneIcon className="h-5 w-5 text-black" />
        </a>
        <a
          href="mailto:contact@medicaldevices.com"
          className="p-2 rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200"
        >
          <EnvelopeIcon className="h-5 w-5 text-black" />
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
