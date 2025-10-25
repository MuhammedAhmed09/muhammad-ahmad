import HeroDetails from "../components/herodetails";
import HeroCardDetails from "../components/herodetailsCard";

export default function Hero() {
  return (
    <section className="flex flex-col px-[14%] lg:px-[8%] py-8 gap-8 lg:flex-row min-h-screen items-center justify-center dark:bg-Charcoal font-sans">
      <HeroCardDetails />
      <HeroDetails />
    </section>
  )
}
