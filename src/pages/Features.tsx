
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Link2, 
  BarChart3, 
  Sparkles, 
  ArrowRight,
  Users,
  Code,
  LineChart,
  Lock,
  Zap
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-tight text-center">
          <span className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            Features
          </span>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
            Everything you need to collect <span className="gradient-text">valuable feedback</span>
          </h1>
          
          <p className="text-lg text-zinc-600 mb-10 mx-auto max-w-2xl">
            Discover all the tools and features designed to help you gather honest feedback and act on it.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Core Features</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Built for honest feedback collection
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card hover-scale">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Anonymity</h3>
              <p className="text-zinc-600">
                Our platform ensures 100% anonymous feedback, encouraging honest responses without fear of identification.
              </p>
            </div>
            
            <div className="feature-card hover-scale">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Link2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Simple Integration</h3>
              <p className="text-zinc-600">
                Share a link or embed our widget directly on your website with a simple snippet of code.
              </p>
            </div>
            
            <div className="feature-card hover-scale">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insights Dashboard</h3>
              <p className="text-zinc-600">
                Track feedback trends and get actionable insights with our powerful built-in analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 items-center">
            <div>
              <span className="text-amber-600 font-medium">Privacy First</span>
              <h2 className="text-2xl font-semibold mt-2 mb-4">Complete Anonymity</h2>
              <p className="text-zinc-600 mb-4">
                We've built FeedbackGrove with privacy at its core. Our system ensures that feedback providers remain completely anonymous.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">No IP tracking or user identification</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">End-to-end encryption for all feedback data</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">GDPR compliant data handling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="aspect-video bg-zinc-100 rounded-xl mb-4 flex items-center justify-center">
                <Lock size={48} className="text-zinc-400" />
              </div>
              <div className="mb-4">
                <div className="h-4 w-3/4 bg-zinc-100 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-zinc-100 rounded"></div>
              </div>
              <div className="p-3 border border-green-100 bg-green-50 rounded-lg text-green-800 text-sm flex items-center">
                <Shield size={16} className="mr-2" />
                Your identity is protected
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="aspect-video bg-zinc-100 rounded-lg mb-4 flex items-center justify-center">
                <Code size={48} className="text-zinc-400" />
              </div>
              <div className="mb-4 font-mono text-xs bg-zinc-800 text-zinc-200 p-3 rounded-lg overflow-x-auto">
                &lt;script src="https://feedback-wave.com/embed.js" 
                <br />data-username="yourname"&gt;&lt;/script&gt;
              </div>
              <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg text-blue-800 text-sm flex items-center">
                <Zap size={16} className="mr-2" />
                Just one line of code to integrate
              </div>
            </div>
            
            <div>
              <span className="text-amber-600 font-medium">Easy Integration</span>
              <h2 className="text-2xl font-semibold mt-2 mb-4">Works Everywhere</h2>
              <p className="text-zinc-600 mb-4">
                Add FeedbackGrove to any website or platform with our flexible integration options.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Link2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">Simple embed code for any website</span>
                </li>
                <li className="flex items-start">
                  <Link2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">Shareable feedback links</span>
                </li>
                <li className="flex items-start">
                  <Link2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">API access for custom integrations</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-amber-600 font-medium">Smart Analytics</span>
              <h2 className="text-2xl font-semibold mt-2 mb-4">Actionable Insights</h2>
              <p className="text-zinc-600 mb-4">
                Transform feedback into actionable insights with our powerful analytics dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">Trend analysis and sentiment tracking</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">Customizable reports and exports</span>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <span className="text-zinc-700">Actionable feedback categorization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
              <div className="aspect-video bg-zinc-100 rounded-lg mb-4 flex items-center justify-center">
                <BarChart3 size={48} className="text-zinc-400" />
              </div>
              <div className="mb-4">
                <div className="flex items-end h-24 gap-2">
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '40%'}}></div>
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '60%'}}></div>
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '75%'}}></div>
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '50%'}}></div>
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '90%'}}></div>
                  <div className="w-1/6 bg-blue-500 rounded-t-md" style={{height: '65%'}}></div>
                </div>
              </div>
              <div className="p-3 border border-amber-100 bg-amber-50 rounded-lg text-amber-800 text-sm flex items-center">
                <Sparkles size={16} className="mr-2" />
                Visualize feedback trends
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">More Features</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Designed for growth
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                <Users className="text-purple-600" size={20} />
              </div>
              <h3 className="font-medium mb-2">Team Collaboration</h3>
              <p className="text-zinc-600 text-sm">
                Share feedback with your team and collaborate on responses.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center mb-4">
                <Sparkles className="text-pink-600" size={20} />
              </div>
              <h3 className="font-medium mb-2">Custom Branding</h3>
              <p className="text-zinc-600 text-sm">
                Customize your feedback widgets to match your brand's look and feel.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                <Zap className="text-indigo-600" size={20} />
              </div>
              <h3 className="font-medium mb-2">Automation</h3>
              <p className="text-zinc-600 text-sm">
                Set up automated responses and notifications for new feedback.
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-black hover:bg-zinc-800 h-11 px-6 rounded-md text-[15px] font-medium" asChild>
              <Link to="/register">Get started for free</Link>
            </Button>
            <Button variant="outline" className="h-11 px-6 rounded-md text-[15px] font-medium border-zinc-200" asChild>
              <Link to="/pricing">View pricing <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 mt-auto bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold mb-4 md:mb-0">FeedbackGrove</div>
            <div className="flex space-x-8">
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Features</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">Documentation</Link>
              <Link to="#" className="text-sm text-zinc-600 hover:text-zinc-900">About</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
            <p className="text-sm text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackGrove. All rights reserved.
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

export default Features;
