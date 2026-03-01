import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/education/Education";
import Experience from "@/components/sections/experience/Experience";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import RoleFit from "@/components/sections/role-fit/RoleFit";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <RoleFit />
      <Contact />
    </>
  );
}
