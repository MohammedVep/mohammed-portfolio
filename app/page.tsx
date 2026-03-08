import About from "@/components/sections/about/About";
import BlogPreview from "@/components/sections/blog-preview/BlogPreview";
import Contact from "@/components/sections/contact/Contact";
import Education from "@/components/sections/education/Education";
import Experience from "@/components/sections/experience/Experience";
import FeaturedSystems from "@/components/sections/featured-systems/FeaturedSystems";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import RecruiterIndex from "@/components/sections/recruiter-index/RecruiterIndex";
import RoleFit from "@/components/sections/role-fit/RoleFit";
import Runbooks from "@/components/sections/runbooks/Runbooks";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <RecruiterIndex />
      <FeaturedSystems />
      <Projects />
      <Runbooks />
      <BlogPreview />
      <RoleFit />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
    </>
  );
}
