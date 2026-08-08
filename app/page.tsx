import Hero from "@/components/home/Hero";
import TickerHeading from "@/components/home/TickerHeading";
import Intro from "@/components/home/Intro";
import WorkPreview from "@/components/home/WorkPreview";
import WhyUs from "@/components/home/WhyUs";
import ServicesScroll from "@/components/home/ServicesScroll";

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerHeading />
      <Intro />
      <WorkPreview />
      <WhyUs />
      <ServicesScroll />
    </main>
  );
}
