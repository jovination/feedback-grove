
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  UserPlus, 
  Link2, 
  MessageSquare,
  BarChart3,
  CheckCircle2
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-tight text-center">
          <span className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            How It Works
          </span>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
            Collect <span className="gradient-text">anonymous feedback</span> in minutes
          </h1>
          
          <p className="text-lg text-zinc-600 mb-10 mx-auto max-w-2xl">
            FeedbackWave makes it incredibly simple to start collecting honest, anonymous feedback 
            from your audience. Here's how it works.
          </p>
        </div>
      </section>

      {/* Step by Step */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <span className="inline-block mb-2 text-amber-600 font-medium">Getting Started</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Three simple steps to start collecting feedback
            </h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-zinc-200 -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20 items-center relative">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-800 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Create your account</h3>
                  <p className="text-zinc-600">
                    Sign up in less than 2 minutes with your email and get your personal feedback link immediately.
                  </p>
                </div>
                <div className="space-y-3 mt-5">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">No credit card required</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Free plan available</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Instant access to your dashboard</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                <div className="mb-5 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-zinc-700 block mb-1">Email</label>
                    <div className="h-10 bg-zinc-50 border border-zinc-200 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-700 block mb-1">Username</label>
                    <div className="h-10 bg-zinc-50 border border-zinc-200 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-zinc-700 block mb-1">Password</label>
                    <div className="h-10 bg-zinc-50 border border-zinc-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="h-10 bg-black rounded-lg flex items-center justify-center text-white text-sm font-medium">
                  Create account
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20 items-center md:rtl">
              <div className="md:order-2">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-800 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Share your feedback link</h3>
                  <p className="text-zinc-600">
                    Share your unique feedback collection link with your audience or embed our widget on your website.
                  </p>
                </div>
                <div className="space-y-3 mt-5">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Simple copy and paste your link</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Easy website integration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Customizable widget appearance</span>
                  </div>
                </div>
              </div>
              
              <div className="md:order-1 bg-white p-6 rounded-xl border border-zinc-200 shadow-sm flex flex-col space-y-3">
                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-sm font-medium text-zinc-700 truncate">https://feedbackwave.com/f/yourusername</div>
                  <button className="text-xs bg-zinc-200 hover:bg-zinc-300 px-2 py-1 rounded text-zinc-700">
                    Copy
                  </button>
                </div>
                <div className="font-mono text-xs bg-zinc-800 text-zinc-200 p-3 rounded-lg overflow-x-auto">
                  &lt;script src="https://feedback-wave.com/embed.js" 
                  <br />data-username="yourname"&gt;&lt;/script&gt;
                </div>
                <div className="p-3 border border-green-100 bg-green-50 rounded-lg text-green-800 text-sm flex items-center">
                  <Link2 className="h-4 w-4 mr-2" />
                  Ready to share with anyone
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-800 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Receive honest feedback</h3>
                  <p className="text-zinc-600">
                    Get 100% anonymous feedback in your dashboard. Analyze insights and take action to improve.
                  </p>
                </div>
                <div className="space-y-3 mt-5">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Complete anonymity for honest responses</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Real-time notifications</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span className="text-zinc-700 text-sm">Comprehensive analytics dashboard</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <div className="bg-zinc-50 border-b border-zinc-200 p-3 text-sm font-medium">
                  Your Feedback Dashboard
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center mr-2">A</div>
                        <div className="text-sm font-medium">Anonymous</div>
                      </div>
                      <div className="text-xs text-zinc-500">Just now</div>
                    </div>
                    <p className="text-sm text-zinc-800">
                      I really appreciated your presentation yesterday. The roadmap was clear and helpful.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">A</div>
                        <div className="text-sm font-medium">Anonymous</div>
                      </div>
                      <div className="text-xs text-zinc-500">1 hour ago</div>
                    </div>
                    <p className="text-sm text-zinc-800">
                      The new feature is great, but I think it could be more intuitive for new users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Use Cases</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Who can benefit from anonymous feedback?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <UserPlus className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Managers & Team Leaders</h3>
              <p className="text-zinc-600 text-sm">
                Collect honest feedback from your team to improve leadership and team dynamics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Creators</h3>
              <p className="text-zinc-600 text-sm">
                Get constructive feedback from your audience to improve your content and engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="text-amber-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Product Teams</h3>
              <p className="text-zinc-600 text-sm">
                Gather unfiltered user feedback to guide your product roadmap and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-slim">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Frequently asked questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">Is the feedback really anonymous?</h3>
              <p className="text-zinc-600 text-sm">
                Yes, absolutely. We do not track IP addresses, require logins from feedback providers, 
                or collect any identifying information. Your feedback is 100% anonymous.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">How do I embed the feedback widget on my website?</h3>
              <p className="text-zinc-600 text-sm">
                Simply copy the provided snippet of code from your dashboard and paste it into your website's 
                HTML. The widget will automatically appear where you place the code.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">Can I customize the feedback form?</h3>
              <p className="text-zinc-600 text-sm">
                Yes, on premium plans you can customize the appearance of your feedback widget including colors, 
                text, and add your logo to match your brand.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">Is there a limit to how much feedback I can receive?</h3>
              <p className="text-zinc-600 text-sm">
                Free plans have a monthly limit on feedback submissions. For unlimited submissions, 
                you can upgrade to one of our premium plans.
              </p>
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
            <Link to="/register">
              Get started for free <ArrowRight size={16} className="ml-1" />
            </Link>
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

export default HowItWorks;
