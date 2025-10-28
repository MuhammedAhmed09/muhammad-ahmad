import LiquidEther from "../components/bgliquidether";
import HeroDetails from "../components/herodetails";
import HeroCardDetails from "../components/herodetailsCard";

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
      <HeroCardDetails />
      <HeroDetails />
    </section>
  )
}
