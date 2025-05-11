
import { 
  Video, 
  Rocket, 
  Users 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-viral-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">💡 How It Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our simple 3-step process turns your software demo into a viral content machine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="card-hover">
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-viral-purple/10 flex items-center justify-center mb-5 mx-auto">
                <Video className="h-6 w-6 text-viral-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">1️⃣ Share Your Demo</h3>
              <p className="text-gray-600 text-center">
                Send us a 5-minute raw screen recording of your product. That's it.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-purple mr-2"></span>
                  <span className="text-sm">Just a walkthrough – no need to show your face</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-purple mr-2"></span>
                  <span className="text-sm">Record it in under 24 hours</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-purple mr-2"></span>
                  <span className="text-sm">No script or editing required</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Step 2 */}
          <Card className="card-hover">
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-viral-teal/10 flex items-center justify-center mb-5 mx-auto">
                <Rocket className="h-6 w-6 text-viral-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">2️⃣ We Create Viral Hooks</h3>
              <p className="text-gray-600 text-center">
                We craft 10–15 second clips optimized for TikTok, Reels, YouTube Shorts, and more.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-teal mr-2"></span>
                  <span className="text-sm">Scroll-stopping hooks</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-teal mr-2"></span>
                  <span className="text-sm">Eye-catching captions</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-teal mr-2"></span>
                  <span className="text-sm">Trending sounds + strong CTAs</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-teal mr-2"></span>
                  <span className="text-sm">Platform-specific formats</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Step 3 */}
          <Card className="card-hover">
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-viral-orange/10 flex items-center justify-center mb-5 mx-auto">
                <Users className="h-6 w-6 text-viral-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">3️⃣ Watch Traffic & Leads Explode</h3>
              <p className="text-gray-600 text-center">
                Consistent views. Real leads. Predictable results.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-orange mr-2"></span>
                  <span className="text-sm">1 video → 10K+ views</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-orange mr-2"></span>
                  <span className="text-sm">100 videos/month → 1M+ views</span>
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-viral-orange mr-2"></span>
                  <span className="text-sm">Build awareness, drive conversions, validate your idea fast</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
