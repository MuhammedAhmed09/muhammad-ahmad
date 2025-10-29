import SubmitForm from "../components/submitedcontactform";

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
        <SubmitForm />
      </div>
    </section>
    )
}