
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-tight text-center">
          <span className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            Resources
          </span>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
            Everything you need to <span className="gradient-text">succeed</span>
          </h1>
          
          <p className="text-lg text-zinc-600 mb-10 mx-auto max-w-2xl">
            Discover guides, tutorials, and best practices to get the most out of FeedbackWave
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="feature-card hover-scale">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-zinc-600 mb-4">
                Comprehensive guides to help you integrate and use FeedbackWave effectively.
              </p>
              <Button variant="outline" className="border-zinc-200 mt-2" asChild>
                <Link to="#">
                  View docs <ExternalLink size={14} className="ml-1" />
                </Link>
              </Button>
            </div>
            
            <div className="feature-card hover-scale">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <Video className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-zinc-600 mb-4">
                Step-by-step video guides showing how to set up and maximize your feedback collection.
              </p>
              <Button variant="outline" className="border-zinc-200 mt-2" asChild>
                <Link to="#">
                  Watch tutorials <ExternalLink size={14} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Resource items */}
          <div className="space-y-5 mb-10">
            <h2 className="text-2xl font-semibold mb-6">Latest Resources</h2>
            
            <div className="dub-card p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <FileText className="text-green-600" size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium">Getting Started with FeedbackWave</h3>
                <p className="text-zinc-600 text-sm mt-1">
                  Learn how to set up your account and collect your first feedback in under 5 minutes.
                </p>
              </div>
              <Button variant="ghost" className="flex-shrink-0" asChild>
                <Link to="#">
                  Read guide
                </Link>
              </Button>
            </div>
            
            <div className="dub-card p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileText className="text-blue-600" size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium">Advanced Widget Customization</h3>
                <p className="text-zinc-600 text-sm mt-1">
                  Customize your feedback widgets to match your brand's look and feel.
                </p>
              </div>
              <Button variant="ghost" className="flex-shrink-0" asChild>
                <Link to="#">
                  Read guide
                </Link>
              </Button>
            </div>
            
            <div className="dub-card p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                <FileText className="text-purple-600" size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium">Analyzing Feedback Insights</h3>
                <p className="text-zinc-600 text-sm mt-1">
                  Make the most of your collected feedback with our built-in analytics tools.
                </p>
              </div>
              <Button variant="ghost" className="flex-shrink-0" asChild>
                <Link to="#">
                  Read guide
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Templates */}
          <div className="mt-12 pt-12 border-t border-zinc-100">
            <h2 className="text-2xl font-semibold mb-6">Feedback Templates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="dub-card p-5">
                <h3 className="font-medium mb-2">General Feedback</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  A simple template for collecting general feedback from users.
                </p>
                <Button variant="outline" size="sm" className="w-full border-zinc-200" asChild>
                  <Link to="#">
                    <Download size={14} className="mr-1" /> Download
                  </Link>
                </Button>
              </div>
              
              <div className="dub-card p-5">
                <h3 className="font-medium mb-2">Product Feedback</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Detailed template focused on product features and improvements.
                </p>
                <Button variant="outline" size="sm" className="w-full border-zinc-200" asChild>
                  <Link to="#">
                    <Download size={14} className="mr-1" /> Download
                  </Link>
                </Button>
              </div>
              
              <div className="dub-card p-5">
                <h3 className="font-medium mb-2">Team Performance</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Template for gathering feedback about team members.
                </p>
                <Button variant="outline" size="sm" className="w-full border-zinc-200" asChild>
                  <Link to="#">
                    <Download size={14} className="mr-1" /> Download
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-zinc-50">
        <div className="container-slim text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to start collecting feedback?
          </h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
            Create your feedback widget in under 2 minutes and start gathering valuable insights.
          </p>
          <Button className="bg-black hover:bg-zinc-800 h-11 px-6 rounded-md text-[15px] font-medium" asChild>
            <Link to="/register">Get started for free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 mt-auto bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold mb-4 md:mb-0">FeedbackWave</div>
            <div className="flex space-x-8">
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Features</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Documentation</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">About</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
            <p className="text-sm text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackWave. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-zinc-500 hover:text-zinc-800">Terms</Link>
              <Link to="#" className="text-sm text-zinc-500 hover:text-zinc-800">Privacy</Link>
              <Link to="#" className="text-sm text-zinc-500 hover:text-zinc-800">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
