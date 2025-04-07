
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Link2, Shield } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="section pt-10 md:pt-20">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 mb-6">
            Collect <span className="gradient-text">Anonymous Feedback</span> With Confidence
          </h1>
          <p className="text-xl text-zinc-600 mb-10 mx-auto max-w-2xl">
            FeedbackWave helps you gather honest, anonymous feedback from your audience with a simple, shareable link or widget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <RouterLink to="/register">
              <Button className="h-11 px-5 rounded-md text-[15px] font-medium bg-blue-500 hover:bg-blue-600 text-white">
                Get started for free <ArrowRight size={16} className="ml-1" />
              </Button>
            </RouterLink>
            <RouterLink to="/login">
              <Button variant="outline" className="h-11 px-5 rounded-md text-[15px] font-medium border-zinc-200">
                Log in
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-zinc-50 border-y border-zinc-100">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-900 mb-12">
            Simple, Powerful Feedback Collection
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="text-blue-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-900">Anonymous Feedback</h3>
              <p className="text-zinc-600 text-[15px]">
                Get honest opinions with 100% anonymous feedback that encourages candid responses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Link2 className="text-blue-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-900">Shareable Link</h3>
              <p className="text-zinc-600 text-[15px]">
                Share a simple link or embed the widget directly on your website.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zinc-100 shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-500" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-900">Privacy First</h3>
              <p className="text-zinc-600 text-[15px]">
                No tracking, no personal data collection, just the feedback you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-slim text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-4">
            Ready to gather honest feedback?
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            Create your feedback widget in under 2 minutes.
          </p>
          <RouterLink to="/register">
            <Button className="bg-blue-500 hover:bg-blue-600 h-11 px-6 rounded-md text-[15px] font-medium">
              Get started for free
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
