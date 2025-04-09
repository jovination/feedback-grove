
import { Users, Share2, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section bg-white py-20">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="inline-block mb-2 text-amber-600 font-medium px-3 py-1 bg-amber-50 rounded-full text-sm">How it works</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Collect anonymous feedback in 3 simple steps
          </h2>
          <p className="text-lg text-zinc-600 mx-auto max-w-2xl">
            Setting up your feedback collection system takes less than 2 minutes.
            No technical skills required!
          </p>
        </div>
        
        {/* Enhanced modern cards with connecting elements */}
        <div className="relative grid md:grid-cols-3 gap-10 mt-16">
          {/* Connecting line - visible on medium screens and up */}
          <div className="hidden md:block absolute top-24 left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-white z-10">
              1
            </div>
            <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white h-full pt-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-zinc-800 text-center">Create your account</h3>
                <p className="text-zinc-600 text-center mb-6">
                  Sign up in less than 2 minutes and get your personal feedback link immediately.
                </p>
                
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 text-amber-600 text-xs">✓</div>
                      No credit card required
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 text-amber-600 text-xs">✓</div>
                      Free plan available
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3 text-amber-600 text-xs">✓</div>
                      Set up in under 2 minutes
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-white z-10">
              2
            </div>
            <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white h-full pt-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                    <Share2 className="w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-zinc-800 text-center">Share your feedback link</h3>
                <p className="text-zinc-600 text-center mb-6">
                  Share the link with friends, colleagues, or embed it on your website.
                </p>
                
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 text-xs">✓</div>
                      Simple copy and paste
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 text-xs">✓</div>
                      Website widget available
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 text-xs">✓</div>
                      Social media integration
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-white z-10">
              3
            </div>
            <Card className="relative z-10 border-zinc-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white h-full pt-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100 shadow-sm">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-zinc-800 text-center">Receive honest feedback</h3>
                <p className="text-zinc-600 text-center mb-6">
                  Get 100% anonymous feedback to help you improve and grow.
                </p>
                
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 text-xs">✓</div>
                      Complete anonymity
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 text-xs">✓</div>
                      Real-time notifications
                    </li>
                    <li className="flex items-center text-sm text-zinc-600">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 text-xs">✓</div>
                      Actionable insights
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom link to more details */}
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group">
            Learn more about how it works
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
