import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkApproach from "@/components/WorkApproach";
import VideoWork from "@/components/VideoWork";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Faq from "@/components/Faq";
import Stats from "@/components/Stats";
import TopCtaBanner from "@/components/TopCtaBanner";
import BottomCtaBanner from "@/components/BottomCtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <ClientLogos />
        <About />
        <Stats />
        <Services />
        <TopCtaBanner />
        <WorkApproach />
        <VideoWork />
        <Reviews />
        <Process />
        <Team />
        <WhyChooseUs />
        <BottomCtaBanner />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
