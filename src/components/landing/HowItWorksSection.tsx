
import { Users, Share2, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 text-amber-600 font-medium">How it works</span>
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-2">
            Collect anonymous feedback in 3 simple steps
          </h2>
          <p className="text-lg text-zinc-600 mx-auto max-w-2xl">
            Setting up your feedback collection system takes less than 2 minutes.
            No technical skills required!
          </p>
        </div>
        
        {/* Enhanced modern dub.co style cards with connecting line */}
        <div className="relative grid md:grid-cols-3 gap-8 mt-16">
          {/* Connecting line - visible on medium screens and up */}
          <div className="hidden md:block absolute top-24 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0"></div>
          
          {/* Step 1 */}
          <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group bg-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transition-all duration-300 group-hover:h-2 group-hover:w-full group-hover:opacity-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4 border border-amber-100 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div className="h-10 w-10 flex items-center justify-center text-2xl font-bold text-amber-500 ml-auto">1</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Create your account</h3>
              <p className="text-zinc-600">
                Sign up in less than 2 minutes and get your personal feedback link immediately.
              </p>
              
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                    No credit card required
                  </li>
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></div>
                    Free plan available
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 2 */}
          <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group mt-8 md:mt-0 bg-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transition-all duration-300 group-hover:h-2 group-hover:w-full group-hover:opacity-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 border border-blue-100 shadow-sm">
                  <Share2 className="w-6 h-6" />
                </div>
                <div className="h-10 w-10 flex items-center justify-center text-2xl font-bold text-blue-500 ml-auto">2</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Share your feedback link</h3>
              <p className="text-zinc-600">
                Share the link with friends, colleagues, or embed it on your website.
              </p>
              
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                    Simple copy and paste
                  </li>
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                    Website widget available
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Step 3 */}
          <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group mt-8 md:mt-0 bg-white">
            <div className="absolute top-0 left-0 w-2 h-full bg-green-500 transition-all duration-300 group-hover:h-2 group-hover:w-full group-hover:opacity-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
            
            <CardContent className="p-6">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4 border border-green-100 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="h-10 w-10 flex items-center justify-center text-2xl font-bold text-green-500 ml-auto">3</div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-zinc-800">Receive honest feedback</h3>
              <p className="text-zinc-600">
                Get 100% anonymous feedback to help you improve and grow.
              </p>
              
              <div className="mt-6 pt-6 border-t border-zinc-100">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Complete anonymity
                  </li>
                  <li className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Real-time notifications
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom link to more details */}
        <div className="text-center mt-12">
          <RouterLink to="/how-it-works" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
            Learn more about how it works
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
