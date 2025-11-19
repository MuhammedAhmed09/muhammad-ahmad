'use client';

import { ComputerIcon, } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import sal from "sal.js";
import { LineImage, ScrollImage } from "@/app/ui/images";

export default function Skills() {
  useEffect(() => {
    sal({ threshold: 0.2, once: true });
  }, []);

  const languageItems = [
    {id: 0, label: 'HTML', icon: '/images/html.png', href: 'https://html.com/', textColor:'text-Vivid-Orange'},
    {id: 1, label: 'CSS', icon: '/images/css.png', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', textColor: 'text-Bright-Blue'},
    {id: 2, label: 'JS', icon: '/images/js.png', href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting', textColor: 'text-Golden-Yellow'},
    {id: 3, label: 'REACT', icon: '/images/react.png', href: 'https://react.dev/', textColor: 'text-Sky-Blue'},
  ];

    return (
    <section 
      id="skills" 
      className={`
        relative py-8 min-h-screen text-white font-sans bg-[url('/images/skills-bg.jpg')] bg-cover bg-center bg-no-repeat
      `}
    >
      <div className="inset-0 z-0 absolute bg-Charcoal/50"></div>
      <div 
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="200"
        className="relative z-10 gap-8 flex items-center justify-center flex-col"
      >
        <div className="hidden md:flex">
          <ScrollImage />
        </div>
        <div className="items-center gap-4 text-center flex flex-col justify-center">
          <p className="text-Aqua-Neon text-3xl md:text-4xl">Skills</p>
          <LineImage />
          <p className="text-white/70 text-sm">I am striving to never stop learning and improving</p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center bg-Mint-Light text-Dark-Navy border-l-4 border-Bright-Blue rounded-lg py-2 px-4">
          <p><ComputerIcon /></p>
          <p className="font-semibold">Frontend Developement</p>
          <p className="text-xs">HTML · CSS · JS · React · NEXT</p>
        </div>
        <div className="flex flex-row items-center text-center justify-center flex-wrap gap-8">
          {languageItems.map((item) => (
            <a 
              href={item.href} 
              target="_blank"
              rel="noopener noreferrer"
              key={item.id} 
              className="flex flex-col flex-wrap gap-2"
            >
              <Image 
                src={item.icon} 
                alt={item.label} 
                width={100}
                height={100}
              />
              <h3 className={`${item.textColor} text-2xl`}>{item.label}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
    )
}