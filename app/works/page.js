'use client';
import { useEffect } from "react";
import Projects from "../components/projectslides";
import sal from "sal.js";
import Image from "next/image";
import { LineImage, ScrollImage } from "../components/images";


export default function Works() {
  useEffect(() => {
    sal({ threshold: 0.2, once: true });
  }, []);

    return (
     <section id="works" className={`relative py-8  min-h-screen text-white font-sans bg-[url('/images/works-bg.jpg')] bg-cover bg-center bg-no-repeat`}>
      <div className="inset-0 z-0 absolute bg-Mint-Light/5"></div>

      <div
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="200" 
        className="relative z-10 gap-8 flex items-center justify-center flex-col"
      >
        <div className="hidden md:flex">
          <ScrollImage />
        </div>
        <div className="px-[14%] lg:px-[8%]">
          <div className="items-center gap-4 text-center flex flex-col justify-center">
            <p className="text-Aqua-Neon text-3xl md:text-4xl">Works</p>
            <LineImage />
            <p className="text-white/70 text-sm">I had the pleasure of working with these awesome projects</p>
          </div>
        </div>
        <div className="w-full md:w-lg">
          <Projects />
        </div>
      </div>
    </section>
    )
}