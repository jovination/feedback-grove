
import { Sparkles, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-24 md:pt-24 md:pb-32 bg-white relative overflow-hidden">
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 py-1 px-3 bg-zinc-100 rounded-full text-[13px] font-medium text-zinc-800"
        >
          <Sparkles className="w-3 h-3 inline-block mr-1 text-amber-500" />
          Anonymous feedback collection made simple
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold text-black mb-5 tracking-tight"
        >
          Anonymous Feedback <br className="hidden md:block" />
          With <span className="text-amber-500">Superpowers</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-zinc-600 mb-8 mx-auto max-w-2xl"
        >
          FeedbackWave is the open-source feedback management infrastructure 
          for gathering honest, anonymous insights that help teams improve.
        </motion.p>
        
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
            <Button variant="outline" className="h-10 px-5 rounded-md text-[15px] font-medium border-zinc-200 text-zinc-700 shadow-sm">
              See how it works
            </Button>
          </Link>
        </motion.div>

        {/* Simplified Feedback Widget Demo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-lg"
        >
          <div className="bg-white rounded-lg border border-zinc-200 shadow-sm relative z-10 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-3 border-b border-zinc-100 flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white font-medium text-sm">F</div>
                <div className="text-sm font-medium">Send anonymous feedback</div>
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="relative mb-4">
                <textarea 
                  className="w-full h-28 bg-zinc-50 border border-zinc-200 rounded-md p-3 text-sm text-zinc-700 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="I really appreciate how you handled the client meeting yesterday. Your presentation was clear and engaging. One thing that could be improved is..."
                ></textarea>
                <div className="absolute top-2 right-2">
                  <div className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Anonymous
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-black hover:bg-zinc-800 rounded-md h-10 shadow-sm text-sm font-medium">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Feedback Anonymously
              </Button>
              
              <div className="mt-2 text-center">
                <p className="text-xs text-zinc-500">100% anonymous and secure</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute top-40 -left-20 w-40 h-40 bg-amber-50 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 -right-20 w-60 h-60 bg-blue-50 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default HeroSection;
