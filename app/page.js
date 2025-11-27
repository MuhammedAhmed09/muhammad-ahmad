import { Suspense } from "react";
import Footer from "./components/footer/page";
import OverviewPage from "./sections/(overview)/page";
import { FooterSkeleton } from "./ui/skeletons";

export default function Page() {
  return (
    <main>
      <OverviewPage />
      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </main>
  );
}
