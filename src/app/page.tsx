import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Expertise } from "@/components/home/Expertise";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Stats } from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SelectedWork />
      <Expertise />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
