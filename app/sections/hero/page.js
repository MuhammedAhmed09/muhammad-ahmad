import Header from "@/app/components/header/page";
import HeroDetails from "@/app/ui/hero/hero-details";
import HeroCardDetails from "@/app/ui/hero/hero-details-Card";
import ScrollDown from "@/app/ui/scroll-down-icon";
import { HeaderSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center font-sans">
      <div className="top-0 w-full absolute">
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>
      </div>
      <div className="z-10 flex flex-col lg:flex-row gap-8 px-[14%] lg:px-[8%] items-center justify-center">
          <HeroCardDetails />
          <HeroDetails />  
      </div>
      <div className="bottom-0 w-full absolute">
        <ScrollDown pageToScroll={'about'}/>
      </div>
    </section>
  )
}
