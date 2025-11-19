import LiquidEther from "@/app/ui/bg-liquid-ether";
import HeroDetails from "@/app/ui/hero/hero-details";
import HeroCardDetails from "@/app/ui/hero/hero-details-Card";
import { HeroCardDetailsSkeleton, HeroDetailsSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


export default function Hero() {
  return (
    <section className="flex flex-col px-[14%] lg:px-[8%] py-8 gap-8 lg:flex-row min-h-screen items-center bg-Charcoal justify-center font-sans">
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#12F7D6' ]}
          mouseForce={20}
          cursorSize={50}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="z-10 flex flex-col lg:flex-row gap-8 items-center justify-center">
        <Suspense fallback={<HeroCardDetailsSkeleton />}>
          <HeroCardDetails />
        </Suspense>
        <Suspense fallback={<HeroDetailsSkeleton />} >
          <HeroDetails />   
        </Suspense>
      </div>
    </section>
  )
}
