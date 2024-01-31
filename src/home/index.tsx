import Content from "./content";
import FigmaWork from "./figma-work";
import Hero from "./hero";
import SubHero from "./sub-hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <SubHero />
      <FigmaWork />
      <Content />
    </main>
  )
}

