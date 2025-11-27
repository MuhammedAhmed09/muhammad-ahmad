'use client'
import { Github, Instagram, Linkedin, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SearchSection from "../../ui/header/search-section";

export default function Header () {
  const [isSearch, setIsSearch] = useState(false);

  const sociolItems = [
    {label: 'Instragram', icon: <Instagram />, href: 'https://www.instagram.com/b7r090/'},
    {label: 'Github', icon: <Github />, href: 'https://github.com/MuhammedAhmed09?tab=repositories'},
    {label: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/muhammad-a-ragab-a29078307/'},
  ];

  return (
    <section className="flex relative w-full z-20 text-white items-center justify-between px-[2%] sm:px-[5%] md:px-[7%] lg:px-[11%] border-b border-Aqua-Neon/20 ">
      <Link href='/' className="font-bold py-3 inline md:py-4 lg:py-5"><span className="text-Aqua-Neon">{`<`}</span>muhammadAhmad <span className="text-Aqua-Neon">{`/>`}</span></Link>
      <div className="flex gap-x-7 items-center text-center">
        <div className="relative">
          <div className="hidden md:flex">
            <SearchSection />
          </div>
          <button 
            className="md:hidden cursor-pointer translate-y-1 hover:scale-105 duration-300 transition-transform"
            onClick={() => setIsSearch((prev) => !prev)}
          >
            <Search />
          </button>
          {isSearch && (
            <div className="absolute right-0 translate-y-5 translate-x-2">
              <SearchSection />
            </div>
          )}
        </div>
        <div className="flex items-center">
          {sociolItems.map((item) => (
            <a 
              href={item.href}
              key={item.label}
              target="_blank"              
              rel="noopener noreferrer"
              className="flex ml-5 items-center lg:gap-1 lg:hover:scale-105 duration-300 transition-transform cursor-pointer"
            >
              <p className="text-Aqua-Neon text-sm">{item.icon}</p>
              <p className="hidden lg:block">{item.label}</p>              
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}