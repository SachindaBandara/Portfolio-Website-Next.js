import About from "@/components/about";
import Education from "@/components/education";
import EmailForm from "@/components/EmailForm";
import Intro from "@/components/intro";
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
      {/* <Education />
      <SectionDivider /> */}
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <EmailForm />
    </main>
  );
}
