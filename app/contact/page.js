export default function Contact() {
    return (
     <section id="contact" className={`relative py-8  min-h-screen text-white font-sans bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-no-repeat`}>
      <div className="inset-0 z-0 absolute bg-Charcoal/50"></div>
      <div className="relative z-10 gap-8 flex items-center justify-center flex-col">
        <div className="hidden md:flex">
          <img src="/images/Scroll.png" alt="scroll" className="w-1/2" />
        </div>
        <div className="items-center gap-4 text-center flex flex-col justify-center">
          <p className="text-Aqua-Neon text-3xl md:text-4xl">Contact</p>
          <img src="images/line.png" alt="line" className="text-Aqua-Neon w-30 md:w-40" />
          <p className="text-white/70 text-sm">I’m currently available for freelance work</p>
        </div>
        <p className="text-center text-xl md:text-2xl text-Aqua-Neon border-4 border-Aqua-Neon rounded-tl-4xl rounded-br-4xl py-2 px-6">Send Me A Massage</p>
        <div className="flex flex-col justify-center gap-8 w-full px-28 my-10">
          <div className="flex flex-col md:flex-row gap-8 self-center justify-center w-full md:w-sm">
            <input 
              type="text"
              placeholder="Enter Your name"
              className="border-b-2 text-sm font-semibold outline-none"
            />
            <input 
              type="email"
              placeholder="Enter Your email"
              className="border-b-2 text-sm font-semibold outline-none"
            />
          </div>
          <textarea 
            placeholder="Enter your needs"
            className="border-b-2 text-sm font-semibold outline-none w-full md:w-sm self-center"
          />
        </div>
      </div>
    </section>
    )
}