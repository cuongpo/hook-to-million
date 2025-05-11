
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🚀 Imagine This</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            You post 3–5 videos a day. Each one gets 5K–20K views.<br />
            By the end of the month: <span className="font-bold">1 million views</span><br />
            <span className="gradient-text font-medium">➡ All leading back to your product or landing page.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-viral-purple">Week 1</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-2">70K+</div>
              <p className="text-gray-600">Views from your first batch of videos</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-viral-teal">Week 2</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-2">250K+</div>
              <p className="text-gray-600">Accumulated views as momentum builds</p>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-viral-pink">Month 1</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-gray-600">Total views driving traffic to your product</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">📈 Ready to Go Viral?</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Let your product do the talking. We'll handle the virality.
            Start now for just $99/month.
          </p>
          <Button size="lg" className="gradient-bg text-white font-medium px-8 py-6">
            Get Started with ViralHook <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Results;
