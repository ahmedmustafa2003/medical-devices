import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex justify-center gap-4 p-4 bg-green-300">
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className="px-6 py-2 text-red-500 rounded-full bg-transparent hover:bg-red-100 transition"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
