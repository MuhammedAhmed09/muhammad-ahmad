import HeroDetails from "@/app/ui/hero/hero-details";
import HeroCardDetails from "@/app/ui/hero/hero-details-Card";
import ScrollDown from "@/app/ui/scroll-down-icon";


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid gap-4 font-sans justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <HeroCardDetails />
          <HeroDetails />  
      </div>
      <div>
        <ScrollDown pageToScroll={'about'}/>
      </div>
    </section>
  )
}
