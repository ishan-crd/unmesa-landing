import HeroSection from "@/components/hero";
import HowItWorks from "@/components/hiw";
import UniqueFeatures from "@/components/uniqueFeat";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* new */}
      <HowItWorks />
      <UniqueFeatures />
      <Testimonials />
    </>
  );
}
