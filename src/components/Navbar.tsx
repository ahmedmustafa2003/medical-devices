import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo_cropped.png"; // Adjust if needed

export default function Navbar() {
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

  return (
    <div
      className="relative w-full flex items-center justify-between px-6 gap-6 py-6"
      style={{
        animation: "slideDown 1s ease-out forwards",
        opacity: 0,
      }}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Company Logo" className="h-12 w-auto" />
      </div>

      {/* Center: Button Island - absolutely centered */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg backdrop-blur-lg font-medium border border-white/30 px-4 py-2 transition-shadow duration-300 hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.5)]"
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

      {/* Right: Company Name */}
      <div className="text-white text-xl whitespace-nowrap">
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
