import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Challenges from "@/components/challenges";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Challenges />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
