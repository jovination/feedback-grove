
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Link2, Shield, Sparkles, MessageSquare, Share2, BarChart3, ArrowUpRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="container-tight text-center">
          <div className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
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

          {/* Mock Widget Preview */}
          <div className="mx-auto max-w-2xl bg-white rounded-xl border border-zinc-200 shadow-sm">
            <div className="p-4 border-b border-zinc-100 flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium">F</div>
                <div className="text-sm font-medium">Send feedback to username</div>
              </div>
              <div className="ml-auto">
                <Share2 className="h-4 w-4 text-zinc-400" />
              </div>
            </div>
            <div className="p-5">
              <div className="w-full h-32 bg-zinc-50 border border-zinc-200 rounded-md p-3 text-sm text-zinc-500 mb-4">
                Share your anonymous feedback here...
              </div>
              <Button className="w-full bg-black hover:bg-zinc-800 rounded-md">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Feedback Anonymously
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-10 border-y border-zinc-100">
        <div className="container-tight">
          <p className="text-center text-sm text-zinc-500 mb-6">Trusted by teams from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-zinc-400 font-semibold">COMPANY</div>
            <div className="text-zinc-400 font-semibold">STARTUP</div>
            <div className="text-zinc-400 font-semibold">ENTERPRISE</div>
            <div className="text-zinc-400 font-semibold">BUSINESS</div>
            <div className="text-zinc-400 font-semibold">AGENCY</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <span className="inline-block mb-2 text-amber-600 font-medium">How it works</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Collect anonymous feedback in 3 simple steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="how-it-works-step">
              <div className="step-number">1</div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Create your account</h3>
              <p className="text-zinc-600 text-[15px]">
                Sign up in less than 2 minutes and get your personal feedback link immediately.
              </p>
            </div>
            
            <div className="how-it-works-step">
              <div className="step-number">2</div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Share your feedback link</h3>
              <p className="text-zinc-600 text-[15px]">
                Share the link with friends, colleagues, or embed it on your website.
              </p>
            </div>
            
            <div className="how-it-works-step">
              <div className="step-number">3</div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Receive honest feedback</h3>
              <p className="text-zinc-600 text-[15px]">
                Get 100% anonymous feedback to help you improve and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Features</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Everything you need for better feedback
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Complete Anonymity</h3>
              <p className="text-zinc-600 text-[15px]">
                Get honest opinions with complete anonymity that encourages candid responses.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Link2 className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Simple Integration</h3>
              <p className="text-zinc-600 text-[15px]">
                Share a link or embed our widget directly on your website with a simple snippet.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-amber-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Insights Dashboard</h3>
              <p className="text-zinc-600 text-[15px]">
                Track feedback trends and insights with our powerful built-in analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Feedback Section */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Examples</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              See what feedback looks like
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="feedback-example">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">A</div>
                  <div className="text-sm font-medium">Anonymous Feedback</div>
                </div>
                <div className="text-xs text-zinc-500">2 days ago</div>
              </div>
              <p className="text-zinc-700">
                "I really appreciated your presentation yesterday. Your explanation of the new project roadmap was clear and helped me understand our goals for the next quarter."
              </p>
            </div>

            <div className="feedback-example">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">A</div>
                  <div className="text-sm font-medium">Anonymous Feedback</div>
                </div>
                <div className="text-xs text-zinc-500">5 days ago</div>
              </div>
              <p className="text-zinc-700">
                "I think the team could benefit from more regular check-ins. Sometimes I feel like I'm missing important updates that could help me be more effective."
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <RouterLink to="/register">
              <Button variant="outline" className="border-zinc-200">
                Start collecting feedback <ArrowRight size={16} className="ml-2" />
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-zinc-50">
        <div className="container-slim">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="stat-counter">5k+</div>
              <p className="text-zinc-600 mt-1">Active users</p>
            </div>
            <div>
              <div className="stat-counter">120k</div>
              <p className="text-zinc-600 mt-1">Feedback collected</p>
            </div>
            <div>
              <div className="stat-counter">98%</div>
              <p className="text-zinc-600 mt-1">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
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
      <footer className="py-10 border-t border-zinc-200 mt-auto bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold mb-4 md:mb-0">FeedbackWave</div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Features</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Documentation</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">About</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
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
