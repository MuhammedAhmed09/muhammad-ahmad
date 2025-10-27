import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Header from "./header/page";
import Hero from "./hero/page";
import Skills from "./skills/page";
import Works from "./works/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
