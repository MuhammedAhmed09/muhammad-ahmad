"use client";

import { Code, LayoutGrid, Mail, SquarePen, TvMinimal, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);

  const pageItems = [
    { label: "", icon: <LayoutGrid /> },
    { label: "About", icon: <User /> },
    { label: "Skills", icon: <Code /> },
    { label: "Works", icon: <TvMinimal /> },    
    { label: "Contact", icon: <Mail /> },
  ];

  return (
    <nav className="fixed left-5 translate-y-1/2 flex flex-col space-y-3 dark:bg-Dark-Navy p-3 rounded-full shadow-lg z-50">
      {pageItems.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center group"
          onMouseEnter={() => setHovered(item.label)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link
            href={`#${item.label.toLowerCase()}`}
            scroll={true}
            className={`text-white text-xl cursor-pointer`}
          >
            {item.icon}
          </Link>

          {/* Tooltip يظهر عند الـ hover */}
          {item.label && hovered === item.label && (
            <div className="absolute left-12 bg-white text-Dark-Navy text-sm font-medium px-2 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.label}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
