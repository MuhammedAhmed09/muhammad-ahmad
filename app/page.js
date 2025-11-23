import { Suspense } from "react";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import OverviewPage from "./sections/(overview)/page";
import { FooterSkeleton, HeaderSkeleton } from "./ui/skeletons";

export default function Page() {
  return (
    <main>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      <OverviewPage />
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  );
}
