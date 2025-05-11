
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-viral-light to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🎁 What You Get</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            For just $99/month, you'll receive:
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="gradient-bg p-6 text-center text-white">
            <h3 className="text-2xl font-bold">ViralHook Package</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-xl">/month</span>
            </div>
          </div>
          
          <div className="p-8">
            <ul className="space-y-4">
              <li className="flex">
                <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>100 unique, short-form videos</strong> - ready to post every month</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Hook-first editing style</strong> - designed to stop the scroll</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Captions, sounds, CTA added</strong> - fully optimized content</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Ready to post across platforms</strong> - TikTok, YouTube Shorts, IG Reels</span>
              </li>
              <li className="flex">
                <Check className="h-5 w-5 text-viral-purple mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>All based on your product</strong> - no need to show your face</span>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="gradient-bg w-full py-6">
                Get Started with ViralHook
              </Button>
              <p className="mt-4 text-sm text-gray-500">No contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-viral-purple/5 border border-viral-purple/20 rounded-xl max-w-4xl mx-auto">
          <p className="text-lg font-medium text-center">
            💡 "Instead of hiring a $1K/month editor or team, let ViralHook do the heavy lifting – faster, cheaper, and built for virality."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
