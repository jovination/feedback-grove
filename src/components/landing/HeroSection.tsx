
import { Sparkles, Share2, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-20 pb-32 md:pt-28 md:pb-40 relative overflow-hidden">
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800"
        >
          <Sparkles className="w-4 h-4 inline-block mr-2 text-amber-500" />
          Anonymous feedback collection made simple
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight"
        >
          Anonymous Feedback <br className="hidden md:block" />
          With <span className="gradient-text">Superpowers</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-600 mb-10 mx-auto max-w-2xl"
        >
          FeedbackWave is the open-source feedback management infrastructure 
          for gathering honest, anonymous insights that help teams improve.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link to="/register">
            <Button className="h-11 px-5 rounded-md text-[15px] font-medium bg-black hover:bg-zinc-800 text-white">
              Start for Free
            </Button>
          </Link>
          <Link to="#how-it-works">
            <Button variant="outline" className="h-11 px-5 rounded-md text-[15px] font-medium border-zinc-200">
              See how it works
            </Button>
          </Link>
        </motion.div>

        {/* Enhanced Interactive Demo Widget with dub.co style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-3xl relative"
        >
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
              <div className="relative mb-4 group">
                <div className="w-full h-36 bg-white border border-zinc-200 rounded-md p-3 text-sm text-zinc-700 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 transition-all shadow-sm hover:shadow-md overflow-hidden">
                  <div className="animate-pulse opacity-80">I really appreciate how you handled the client meeting yesterday. Your presentation was clear and engaging. One thing that could be improved is...</div>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Anonymous
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-black to-zinc-800 hover:from-zinc-800 hover:to-black rounded-md h-12 shadow-sm hover:shadow-md transition-all duration-300">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Feedback Anonymously
              </Button>
              
              <div className="mt-3 text-center">
                <p className="text-xs text-zinc-500">100% anonymous and secure</p>
              </div>
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
        </motion.div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
