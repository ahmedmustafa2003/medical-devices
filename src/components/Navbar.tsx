import {
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const navItems = [
    { name: "Home", icon: HomeIcon },
    { name: "About Us", icon: UserGroupIcon },
    { name: "Products", icon: ShoppingBagIcon },
    { name: "Contact Us", icon: ChatBubbleBottomCenterTextIcon },
  ];

  return (
    <header
      className="fixed top-4 w-full z-30 flex justify-center px-4"
      style={{
        animation: "slideDown 1s ease-out forwards",
        opacity: 0,
      }}
    >
      <div
        className="flex items-center justify-center w-full max-w-xl px-3 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)] backdrop-blur-lg text-black font-medium"
        style={{
          backgroundImage: `url('/section2_bg.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="flex gap-2 sm:gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/ /g, "")}`}
              className="flex items-center px-3 sm:px-4 py-1.5 text-sm rounded-full text-black hover:bg-black/20 hover:shadow-md hover:shadow-white/70 transition-all duration-200 whitespace-nowrap"
            >
              <item.icon className="h-5 w-5 mr-1.5 text-black" />
              {item.name}
            </a>
          ))}
        </nav>
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
    </header>
  );
}
