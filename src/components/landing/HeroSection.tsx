
import { Sparkles, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-20 pb-32 md:pt-28 md:pb-40 relative overflow-hidden">
      <div className="container-tight text-center relative z-10">
        <div className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
          <Sparkles className="w-4 h-4 inline-block mr-2 text-amber-500" />
          Anonymous feedback collection made simple
        </div>
        
        <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight">
          Anonymous Feedback <br className="hidden md:block" />
          With <span className="gradient-text">Superpowers</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 mb-10 mx-auto max-w-2xl">
          FeedbackWave is the open-source feedback management infrastructure 
          for gathering honest, anonymous insights that help teams improve.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <RouterLink to="/register">
            <Button className="h-11 px-5 rounded-md text-[15px] font-medium bg-black hover:bg-zinc-800 text-white">
              Start for Free
            </Button>
          </RouterLink>
          <RouterLink to="#how-it-works">
            <Button variant="outline" className="h-11 px-5 rounded-md text-[15px] font-medium border-zinc-200">
              See how it works
            </Button>
          </RouterLink>
        </div>

        {/* Enhanced Interactive Demo Widget with dub.co style */}
        <div className="mx-auto max-w-3xl relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-100 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
          
          <div className="bg-white rounded-xl border border-zinc-200 shadow-lg relative z-10 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-4 border-b border-zinc-100 flex items-center bg-gradient-to-r from-zinc-50 to-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-medium shadow-sm">F</div>
                <div className="text-sm font-medium">Send anonymous feedback</div>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 cursor-pointer transition-all">
                  <Share2 className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-white to-zinc-50">
              <div className="w-full h-36 bg-white border border-zinc-200 rounded-md p-3 text-sm text-zinc-700 mb-4 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 transition-all shadow-sm hover:shadow-md">
                <div className="animate-pulse">I really appreciate how you handled the client meeting yesterday. Your presentation was clear and engaging. One thing that could be improved is...</div>
              </div>
              <Button className="w-full bg-gradient-to-r from-black to-zinc-800 hover:from-zinc-800 hover:to-black rounded-md h-11 shadow-sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Feedback Anonymously
              </Button>
            </div>

            {/* Enhanced Widget Annotation */}
            <div className="absolute top-full right-0 transform -translate-y-6 translate-x-4">
              <div className="bg-blue-50 text-blue-700 rounded-lg px-3 py-2 text-xs font-medium shadow-md border border-blue-100 animate-bounce">
                100% anonymous!
                <div className="absolute -top-2 right-6 w-2 h-2 bg-blue-50 border-t border-l border-blue-100 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview Floating with enhanced styling */}
          <div className="hidden md:block absolute -bottom-10 right-0 transform translate-x-1/2 translate-y-1/4 w-48 h-36 bg-white rounded-lg shadow-xl border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="h-5 bg-zinc-50 border-b border-zinc-200 flex items-center px-2">
              <div className="w-2 h-2 rounded-full bg-red-300 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-300 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-green-300"></div>
            </div>
            <div className="p-2">
              <div className="w-full h-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded mb-2"></div>
              <div className="w-2/3 h-3 bg-zinc-100 rounded mb-2"></div>
              <div className="w-full h-10 bg-zinc-50 rounded border border-zinc-100 mb-2 shadow-sm"></div>
              <div className="w-1/2 h-3 bg-zinc-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
