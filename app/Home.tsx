import ClimbingStyleSection from "./components/ClimbingStyleSelection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bundle from "./components/Bundle";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ClimbingStyleSection />
      <Bundle />
    </div>
  );
}
