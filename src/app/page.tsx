import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import NoteMarquee from "@/components/NoteMarquee";
import SponsorshipSection from "@/components/SponsorshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ProgressiveBlur from "@/components/ProgressiveBlur";
import CosmosInteractions from "@/components/CosmosInteractions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="main-wrapper">
        <HeroSection />
        <ClientsSection />
        <WorksSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <NoteMarquee />
        <SponsorshipSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <ProgressiveBlur />
      <CosmosInteractions />
    </>
  );
}
