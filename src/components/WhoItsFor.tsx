
import { Rocket, Globe, Play, LightbulbIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">👤 Who It's For</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ViralHook is perfect for:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="h-16 w-16 rounded-full bg-viral-purple/10 flex items-center justify-center mb-5 mx-auto">
                <Rocket className="h-8 w-8 text-viral-purple" />
              </div>
              <h3 className="text-lg font-bold mb-2">🚀 SaaS founders</h3>
              <p className="text-gray-600 text-sm">
                Validating MVPs and growing user base without extensive marketing teams
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="h-16 w-16 rounded-full bg-viral-teal/10 flex items-center justify-center mb-5 mx-auto">
                <Globe className="h-8 w-8 text-viral-teal" />
              </div>
              <h3 className="text-lg font-bold mb-2">🌐 Website owners</h3>
              <p className="text-gray-600 text-sm">
                Looking for more traffic and higher conversion rates from social platforms
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="h-16 w-16 rounded-full bg-viral-pink/10 flex items-center justify-center mb-5 mx-auto">
                <Play className="h-8 w-8 text-viral-pink" />
              </div>
              <h3 className="text-lg font-bold mb-2">📱 Indie hackers</h3>
              <p className="text-gray-600 text-sm">
                Launching products and need visibility without huge marketing budgets
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6 text-center">
              <div className="h-16 w-16 rounded-full bg-viral-orange/10 flex items-center justify-center mb-5 mx-auto">
                <LightbulbIcon className="h-8 w-8 text-viral-orange" />
              </div>
              <h3 className="text-lg font-bold mb-2">🧠 Creators & solopreneurs</h3>
              <p className="text-gray-600 text-sm">
                Who want to scale visibility without showing their face on camera
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
