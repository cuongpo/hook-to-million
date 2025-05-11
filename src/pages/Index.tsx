
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoSection from "@/components/DemoSection";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <HowItWorks />
        <WhoItsFor />
        <Pricing />
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
