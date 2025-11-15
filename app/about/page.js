'use client';

import Image from "next/image";
import { useEffect } from "react";
import sal from "sal.js";
import { ScrollImage } from "../components/images";

export default function About() {
  useEffect(() => {
    sal({ threshold: 0.2, once: true });
  }, []);

    return (
    <section id="about" className={`relative py-8 px-[14%] lg:px-[8%] min-h-screen text-white font-sans bg-[url('/images/about-bg.jpg')]`}>
      {/* BACK GROUND */}
      <div className="inset-0 z-0 absolute bg-Mint-Light/5"></div>
      {/* ====BACK GROUND==== */}

      <div className="flex gap-8 flex-col items-center justify-center relative z-10">
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="200"
          className="hidden md:flex"
        >
          <ScrollImage />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
          <div 
            className="flex flex-col gap-8"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="200"
          >
            <p className="text-center sm:justify-start w-fit bg-Charcoal text-xl md:text-3xl py-2 px-8 border-4 border-Aqua-Neon rounded-tl-4xl rounded-br-4xl">
              About me
            </p>

            <div className="bg-Charcoal rounded-4xl p-5">
              <span className="text-Aqua-Neon">{`<p>`}</span>
              <p className="text-Aqua-Neon text-2xl font-semibold translate-x-2">Hello!</p>
              <p className="my-2 translate-x-2">My name is Muhammad and I specialize in web developement 
                that utilizes <span className="text-Aqua-Neon">HTML</span>, <span className="text-Aqua-Neon">CSS</span>, <span className="text-Aqua-Neon">JS</span>, <span className="text-Aqua-Neon">REACT</span> and <span className="text-Aqua-Neon">NEXT</span> etc. <br/>
                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br/>
                When I'm not coding, I am <span className="text-Aqua-Neon">watching films</span>, <span className="text-Aqua-Neon">reading</span>, or picking up some new hands-on art project like <span className="text-Aqua-Neon">photography</span>.<br/>
                I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
              <span className="text-Aqua-Neon">{`</p>`}</span>
            </div>
          </div>

          <div 
            className="flex justify-center"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="200"
          >
            <Image 
              src="/images/muhammad-ahmad2.jpg" 
              alt="portfolio image for Muhammad Ahmad"
              className="rounded-4xl lg:min-w-66"
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
    )
}