import { ScrollImage } from "@/app/ui/images";
import Image from "next/image";

export default function About() {

    return (
    <section id="about" className={`min-h-screen flex justify-center text-white font-sans`}>
      <div className="flex gap-8 flex-col items-center justify-center z-10">
        <div
          className="hidden md:flex"
        >
          <ScrollImage />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
          <div 
            className="flex flex-col gap-8"
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

          <div className="flex justify-center">
            <Image 
              src="/images/muhammad-ahmad2.jpg" 
              alt="portfolio image for Muhammad Ahmad"
              className="rounded-4xl h-auto"
              width={500}
              height={700}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
    )
}