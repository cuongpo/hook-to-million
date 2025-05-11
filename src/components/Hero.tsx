
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Left side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="animate-float md:mx-0 mb-3">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get <span className="gradient-text">1 Million Views</span> a Month – 
              Turn Your Demo into Viral Traffic
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              With ViralHook, transform your software walkthroughs into viral videos that drive traffic, leads, and growth.
              <span className="block mt-2 font-medium">📈 No face needed. No expensive team. Just results.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-white font-medium px-8 py-6" asChild>
                <a href="https://calendly.com/henrypham-po/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Free Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-medium px-8 py-6">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
            <div className="max-w-[320px] rounded-lg overflow-hidden" style={{ aspectRatio: '9/16', height: '480px' }}>
              <iframe
                className="w-full h-full" 
                src="https://www.youtube.com/embed/64iL52nEYCc?rel=0&autoplay=1&mute=1&loop=1&playlist=64iL52nEYCc"
                title="ViralHook Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
