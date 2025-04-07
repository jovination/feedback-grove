
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Link2, Shield, Sparkles } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container-tight text-center">
          <div className="inline-block mb-4 py-1.5 px-3 bg-white border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            Anonymous feedback collection made simple
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight">
            Anonymous Feedback <br className="hidden md:block" />
            With <span className="gradient-text">Superpowers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 mb-10 mx-auto max-w-2xl">
            FeedbackWave is the open-source feedback management infrastructure 
            for gathering honest, anonymous insights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <RouterLink to="/register">
              <Button className="h-11 px-5 rounded-md text-[15px] font-medium bg-black hover:bg-zinc-800 text-white">
                Start for Free
              </Button>
            </RouterLink>
            <RouterLink to="#demo">
              <Button variant="outline" className="h-11 px-5 rounded-md text-[15px] font-medium border-zinc-200">
                Get a Demo
              </Button>
            </RouterLink>
          </div>

          {/* Mock Widget Section */}
          <div className="mx-auto max-w-2xl bg-white rounded-lg border border-zinc-200 shadow-sm">
            <div className="p-4 border-b border-zinc-100 flex items-center gap-2">
              <div className="h-4 w-16 bg-zinc-100 rounded-full"></div>
              <div className="ml-auto flex gap-1">
                <div className="h-4 w-4 bg-zinc-100 rounded-full"></div>
                <div className="h-4 w-4 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="w-full h-8 bg-zinc-50 border border-zinc-200 rounded-md mb-4"></div>
              <div className="w-full h-24 bg-zinc-50 border border-zinc-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white py-20">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-purple-500 font-medium">Features</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Everything you need for better feedback
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-purple-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">100% Anonymous</h3>
              <p className="text-zinc-600 text-[15px]">
                Get honest opinions with complete anonymity that encourages candid responses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Link2 className="text-blue-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Simple Integration</h3>
              <p className="text-zinc-600 text-[15px]">
                Share a link or embed our widget directly on your website with a simple snippet.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-orange-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Powerful Analytics</h3>
              <p className="text-zinc-600 text-[15px]">
                Track feedback trends and insights with our powerful built-in analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-zinc-50">
        <div className="container-slim text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Ready to gather honest feedback?
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Create your feedback widget in under 2 minutes.
          </p>
          <RouterLink to="/register">
            <Button className="bg-black hover:bg-zinc-800 h-11 px-6 rounded-md text-[15px] font-medium">
              Get started for free <ArrowRight size={16} className="ml-1" />
            </Button>
          </RouterLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 mt-auto">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackWave. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Terms</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Privacy</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
