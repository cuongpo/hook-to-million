
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-float">
          <span className="text-3xl">🚀</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 max-w-4xl mx-auto leading-tight">
          Get <span className="gradient-text">1 Million Views</span> a Month – 
          Turn Your Demo into Viral Traffic
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-700">
          With ViralHook, transform your software walkthroughs into viral videos that drive traffic, leads, and growth.
          <br />
          <span className="font-medium">📈 No face needed. No expensive team. Just results.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="gradient-bg text-white font-medium px-8 py-6">
            Start Now for $99/month <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="font-medium px-8 py-6">
            Watch Demo
          </Button>
        </div>
        
        <div className="bg-viral-light py-8 px-4 rounded-2xl max-w-5xl mx-auto shadow-lg">
          <div className="aspect-video max-w-3xl mx-auto bg-viral-dark rounded-lg flex items-center justify-center">
            <p className="text-white text-lg">Video Demo Placeholder</p>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            A short vertical video created by ViralHook, using only a raw screen recording. 
            See what we can do with your product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
