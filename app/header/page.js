'use client'
import { Github, Instagram, Linkedin, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header () {
  const pathname = usePathname();
  const [isSearch, setIsSearch] = useState(false);

  const pageItems = [
    {page: 'Home', href: '/'},
    {page: 'Blogs', href: '/Blogs'},
  ];

  const sociolItems = [
    {label: 'Instragram', icon: <Instagram />, href: 'https://www.instagram.com/b7r090/'},
    {label: 'Github', icon: <Github />, href: 'https://github.com/MuhammedAhmed09?tab=repositories'},
    {label: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/muhammad-a-ragab-a29078307/'},
  ];

  const searchInput = (
    <input 
        placeholder="search" 
        className="bg-white text-Aqua-Neon outline-none placeholder:text-Charcoal font-semibold rounded-full px-2 py-0.5"
      />
  )

    return (
    <section className="flex w-full text-white items-center justify-between bg-Charcoal px-[2%] sm:px-[5%] md:px-[7%] lg:px-[11%] border-b border-Charcoal/30">
      <Link href='/' className="font-bold py-5 inline  md:py-6 lg:py-7"><span className="text-Aqua-Neon">{`<`}</span>muhammadAhmad <span className="text-Aqua-Neon">{`/>`}</span></Link>
      <div className="flex gap-x-7 items-center text-center">
        <div className="flex gap-4">
          {pageItems.map((item) => (
            <Link 
              href={item.href} 
              key={item.page}
            >
              <p className={`${pathname === item.href? 'text-Aqua-Neon': ''} hover:scale-105 duration-300 transition-transform`}>{item.page}</p>
            </Link>
          ))}
        </div>
        <div className="relative">
          <div className="hidden md:flex">
            {searchInput}
          </div>
          <button 
            className="md:hidden cursor-pointer translate-y-1 hover:scale-105 duration-300 transition-transform"
            onClick={() => setIsSearch((prev) => !prev)}
          >
            <Search />
          </button>
          {isSearch && (
            <div className="absolute right-0 translate-y-5 translate-x-2">
              {searchInput}
            </div>
          )}
        </div>
        <div className="flex items-center">
          {sociolItems.map((item) => (
            <Link 
              href={item.href}
              key={item.label}
              target="_blank"
            >
              <div className="flex sm:ml-5 items-center lg:gap-1 lg:hover:scale-105 duration-300 transition-transform">
                <p className="hidden text-Aqua-Neon text-sm sm:block">{item.icon}</p>
                <p className="hidden lg:block">{item.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    )
}