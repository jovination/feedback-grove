
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="container-tight text-center">
          <span className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            Pricing
          </span>
          
          <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h1>
          
          <p className="text-lg text-zinc-600 mb-10 mx-auto max-w-2xl">
            Choose the plan that best fits your needs. All plans include core features like anonymous feedback collection.
          </p>
          
          <div className="inline-flex items-center bg-zinc-100 p-1 rounded-full mb-10">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${annual ? 'bg-white shadow-sm text-black' : 'text-zinc-600'}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? 'bg-white shadow-sm text-black' : 'text-zinc-600'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white pb-32 -mt-20">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 flex flex-col relative">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Perfect for individuals just getting started
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-zinc-500 ml-1">/month</span>
                </div>
                <Button className="w-full bg-zinc-800 hover:bg-black h-11 mb-6" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
              
              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 100 feedback submissions/month</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic dashboard analytics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Feedback widget & shareable link</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-500">Custom branding</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-500">Advanced analytics</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-500">Team collaboration</span>
                </div>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white border-2 border-amber-500 rounded-xl shadow-md p-6 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  For professionals and growing teams
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${annual ? '19' : '25'}</span>
                  <span className="text-zinc-500 ml-1">/month</span>
                </div>
                <Button className="w-full bg-black hover:bg-zinc-800 h-11 mb-6" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
              
              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 1,000 feedback submissions/month</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics & reporting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom branding & white labeling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Team collaboration (up to 3 members)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email notifications</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-zinc-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-500">API access</span>
                </div>
              </div>
            </div>
            
            {/* Business Plan */}
            <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 flex flex-col relative">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  For organizations with advanced needs
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">${annual ? '49' : '59'}</span>
                  <span className="text-zinc-500 ml-1">/month</span>
                </div>
                <Button className="w-full bg-zinc-800 hover:bg-black h-11 mb-6" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
              
              <div className="space-y-3 text-sm flex-grow">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited feedback submissions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics & custom reports</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom branding & white labeling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited team members</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>API access & custom integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Compare Plans</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Feature comparison
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-zinc-200 rounded-xl shadow-sm">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="p-5 text-left text-sm font-medium text-zinc-700 border-b border-zinc-200">Feature</th>
                  <th className="p-5 text-center text-sm font-medium text-zinc-700 border-b border-zinc-200">Free</th>
                  <th className="p-5 text-center text-sm font-medium text-amber-700 border-b border-zinc-200 bg-amber-50">Pro</th>
                  <th className="p-5 text-center text-sm font-medium text-zinc-700 border-b border-zinc-200">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Monthly feedback submissions</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">100</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50">1,000</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Custom branding</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Team members</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">1</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50">3</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Analytics</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">Basic</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50">Advanced</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200">Custom</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Email notifications</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">API access</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm border-b border-zinc-200">Priority support</td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200 bg-amber-50"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm border-b border-zinc-200"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-5 text-sm">Custom domain</td>
                  <td className="p-5 text-center text-sm"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm bg-amber-50"><X className="h-4 w-4 text-zinc-400 mx-auto" /></td>
                  <td className="p-5 text-center text-sm"><CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
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
              <h3 className="font-medium mb-2">Can I upgrade or downgrade my plan anytime?</h3>
              <p className="text-zinc-600 text-sm">
                Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">What happens if I exceed my feedback submission limit?</h3>
              <p className="text-zinc-600 text-sm">
                If you exceed your monthly feedback limit, you'll still receive the feedback, but you'll need to upgrade to 
                access new submissions beyond your plan's limit.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">Do you offer discounts for nonprofits or educational institutions?</h3>
              <p className="text-zinc-600 text-sm">
                Yes, we offer special pricing for nonprofits and educational institutions. Please contact our sales team for details.
              </p>
            </div>
            
            <div className="p-5 border border-zinc-100 rounded-xl shadow-sm">
              <h3 className="font-medium mb-2">Can I get a refund if I'm not satisfied?</h3>
              <p className="text-zinc-600 text-sm">
                We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team 
                within 14 days of your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-zinc-50">
        <div className="container-slim text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to collect honest feedback?
          </h2>
          <p className="text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
            Start with our free plan and upgrade as your needs grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-black hover:bg-zinc-800 h-11 px-6 rounded-md text-[15px] font-medium" asChild>
              <Link to="/register">Get started for free</Link>
            </Button>
            <Button variant="outline" className="h-11 px-6 rounded-md text-[15px] font-medium border-zinc-200" asChild>
              <Link to="/contact">Contact sales <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
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

export default Pricing;
