import { Suspense } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import { AboutSkeleton, ContactSkeleton, SkillsSkeleton, WorksSkeleton } from "./ui/skeletons";
import Works from "./works/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SkillsSkeleton />} >
        <Skills />
      </Suspense>
      <Suspense fallback={<WorksSkeleton />}>
        <Works />
      </Suspense>
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense> 
      <Footer />
    </>
  );
}
