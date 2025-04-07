
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Link, Shield } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Collect Anonymous Feedback That Matters
          </h1>
          <p className="text-xl text-gray-600 mb-8 mx-auto max-w-2xl">
            FeedbackWave lets you collect honest, anonymous feedback from your audience with a simple, shareable widget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <RouterLink to="/register">
              <Button className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 rounded-xl text-lg">
                Create Your Widget <ArrowRight size={18} className="ml-2" />
              </Button>
            </RouterLink>
            <RouterLink to="/login">
              <Button variant="outline" className="h-12 px-8 rounded-xl text-lg border-gray-300">
                Log In
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Simple, Powerful Feedback Collection
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Anonymous Feedback</h3>
              <p className="text-gray-600">
                Get honest opinions with 100% anonymous feedback that encourages candid responses.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Link className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Shareable Link</h3>
              <p className="text-gray-600">
                Share a simple link or embed the widget directly on your website.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Privacy First</h3>
              <p className="text-gray-600">
                No tracking, no personal data collection, just the feedback you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to gather honest feedback?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Create your feedback widget in under 2 minutes.
          </p>
          <RouterLink to="/register">
            <Button className="bg-indigo-600 hover:bg-indigo-700 h-12 px-8 rounded-xl text-lg">
              Get Started Now
            </Button>
          </RouterLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 mt-auto">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackWave. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">Terms</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
