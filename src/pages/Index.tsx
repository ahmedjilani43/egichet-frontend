import { ConcertsSection } from "@/components/ConcertsSection";
import { EventSection } from "@/components/EventSection";
import { HeroSection } from "@/components/HeroSection";



const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <ConcertsSection />
      <EventSection />
    </div>
  );
};

export default Index;
