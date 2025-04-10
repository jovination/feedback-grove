import { Sparkles, MessageSquare, Copy, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-24 md:pt-24 md:pb-32 relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-blue-50/40">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-blue-100/10 pointer-events-none"></div>

      {/* Announcement banner similar to dub.co */}
      <div className="flex justify-center mb-16">
        <Link to="/features" className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-zinc-200 text-sm hover:bg-zinc-50 transition-colors">
        Anonymous feedback collection made simple          
        <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main headline area */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold text-black mb-8 tracking-tight"
          >
Turn Feedback into Your            <br className="hidden md:block" />
Next  Big<span className="text-amber-500"> Breakthrough</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-md text-zinc-600 mb-10 mx-auto max-w-2xl"
          >
           FeedbackWave is the ultimate feedback tool built by founders, for founders. Collect anonymous, real-time feedback from your users.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <Link to="/register">
            <Button className="h-10 px-5 rounded-md text-[15px] font-medium bg-black hover:bg-zinc-800 text-white shadow-sm">
              Start for Free
            </Button>
          </Link>
          <Link to="#how-it-works">
            <Button variant="outline" className="h-10 px-5 rounded-md text-[15px] font-medium border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-700 shadow-sm hover:bg-white">
              See how it works
            </Button>
          </Link>
        </motion.div>

        {/* Feedback widget demo - styled similar to dub.co URL shortener demo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {/* Input box similar to dub.co */}
          <div className="bg-white rounded-xl border border-zinc-200 shadow-sm mb-4">
            <div className="p-4">
              <div className="bg-zinc-50 border border-zinc-200 rounded-lg flex items-center p-2 mb-3">
                <input 
                  type="text" 
                  className="flex-1 bg-transparent outline-none text-sm px-1 py-1 text-zinc-800" 
                  defaultValue="app.feedbackwave.co/register"
                  readOnly
                />
                <button className="p-1 hover:bg-zinc-100 rounded-md">
                  <Copy className="h-4 w-4 text-zinc-500" />
                </button>
              </div>
              
              {/* Example entry like dub in the interface */}
              <div className="bg-white rounded-lg border border-zinc-200 mb-3">
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white font-medium">F</div>
                    <div className="text-sm font-medium">f.to/feedback</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <div className="flex items-center space-x-1 text-xs text-zinc-500">
                      <span className="inline-block w-1 h-1 bg-zinc-400 rounded-full"></span>
                      <span>53.6K clicks</span>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2 text-xs text-zinc-500 border-t border-zinc-100">
                  <span>app.feedbackwave.co/register</span>
                </div>
              </div>
              
              {/* Placeholder rows like in dub interface */}
              <div className="py-2 px-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-48"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-16 ml-auto"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-40"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-20 ml-auto"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-52"></div>
                  <div className="h-3 bg-zinc-100 rounded-md w-16 ml-auto"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom message like in dub.co */}
          <div className="text-center text-sm text-zinc-600">
            Want to collect feedback, analyze it, or measure its impact? 
            <Link to="/register" className="text-amber-600 hover:text-amber-700 ml-1">
              Create a free account on FeedbackWave
            </Link> to get started.
          </div>
        </motion.div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;