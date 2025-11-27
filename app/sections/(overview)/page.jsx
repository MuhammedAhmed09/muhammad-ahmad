import { Suspense } from "react";
import Hero from "../hero/page";
import {
    HeroSkeleton,  
    AboutSkeleton, 
    ContactSkeleton, 
    SkillsSkeleton, 
    WorksSkeleton 
} from "@/app/ui/skeletons";
import About from "../about/page";
import Skills from "../skills/page";
import Works from "../works/page";
import Contact from "../contact/page";

export default function Page() {
    return (
        <main className="px-[4%] md:px-[8%] grid gap-12 py-12">
            <Suspense fallback={<HeroSkeleton />}>
                <Hero />
            </Suspense>
            
            <Suspense fallback={<AboutSkeleton />}>
                <About />
            </Suspense>
            
            <Suspense fallback={<SkillsSkeleton />}>
                <Skills />
            </Suspense>
            
            <Suspense fallback={<WorksSkeleton />}>
                <Works />
            </Suspense>
            
            <Suspense fallback={<ContactSkeleton />}>
                <Contact />
            </Suspense>

        </main>
    )
}