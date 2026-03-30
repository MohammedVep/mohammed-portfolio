import About from "@/components/sections/about/About";
import BlogPreview from "@/components/sections/blog-preview/BlogPreview";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/education/Education";
import Experience from "@/components/sections/experience/Experience";
import FeaturedSystems from "@/components/sections/featured-systems/FeaturedSystems";
import Hero from "@/components/sections/hero/Hero";
import LatestImprovements from "@/components/sections/latest-improvements/LatestImprovements";
import Projects from "@/components/sections/projects/Projects";
import Runbooks from "@/components/sections/runbooks/Runbooks";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSystems />
      <Runbooks />
      <BlogPreview />
      <Projects />
      <LatestImprovements />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
    </>
  );
}
