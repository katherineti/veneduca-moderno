import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProgramsSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
