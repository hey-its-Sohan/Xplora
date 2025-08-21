
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Spots from "./components/Spots";
import ProblemSolve from "./components/ProblemSolve";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Categories />
      <Spots />
      <ProblemSolve />
      <CTA />
    </div>
  );
}
