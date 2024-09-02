import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Other from "@/components/other";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Other/>
      <SectionDivider />
      <Contact />
    </main>
  );
}
