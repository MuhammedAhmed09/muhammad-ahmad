import Projects from "../components/projectslides";

export default function Works() {
  
    return (
     <section id="works" className={`flex py-8 gap-8 flex-col min-h-screen text-white items-center justify-center font-sans bg-[url('/images/works-bg.jpg')] bg-cover bg-no-repeat`}>
        <div className="hidden md:flex">
          <img src="/images/Scroll.png" alt="scroll" className="w-1/2" />
        </div>
      <div className="px-[14%] lg:px-[8%]">
        <div className="items-center gap-4 text-center flex flex-col justify-center">
          <p className="text-Aqua-Neon text-3xl md:text-4xl">Works</p>
          <img src="images/line.png" alt="line" className="text-Aqua-Neon w-20 md:w-30" />
          <p className="text-white/70 text-sm">I had the pleasure of working with these awesome projects</p>
        </div>
      </div>
      <div className="w-full md:w-lg">
        <Projects />
      </div>
    </section>
    )
}