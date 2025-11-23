import HeroDetails from "@/app/ui/hero/hero-details";
import HeroCardDetails from "@/app/ui/hero/hero-details-Card";


export default function Hero() {
  return (
    <section className="flex flex-col px-[14%] lg:px-[8%] py-8 gap-8 lg:flex-row min-h-screen items-center bg-Charcoal justify-center font-sans">
      <div className="z-10 flex flex-col lg:flex-row gap-8 items-center justify-center">
          <HeroCardDetails />
          <HeroDetails />  
      </div>
    </section>
  )
}
