import SubmitForm from "@/app/ui/contact/submited-contact-form";
import { LineImage, ScrollImage } from "@/app/ui/images";

export default function Contact() {
    return (
     <section id="contact" className={`flex justify-center min-h-screen text-white font-sans`}>
      {/* <div className="inset-0 z-0 absolute bg-[url('/images/contact-bg.jpg')] opacity-95 bg-cover bg-center bg-no-repeat"/> */}

      <div className="relative z-10 gap-8 flex items-center justify-center flex-col">
        <div className="hidden md:flex">
          <ScrollImage />
        </div>
        <div className="items-center gap-4 text-center flex flex-col justify-center">
          <p className="text-Aqua-Neon text-3xl md:text-4xl">Contact</p>
          <LineImage />
          <p className="text-white/70 text-sm">I’m currently available for freelance work</p>
        </div>
        <p className="text-center text-xl md:text-2xl text-Aqua-Neon border-4 border-Aqua-Neon rounded-tl-4xl rounded-br-4xl py-2 px-6">Send Me A Massage</p>
        <SubmitForm />
      </div>
    </section>
    )
}