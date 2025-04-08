
import { Shield, Link2, BarChart3, Rocket, Zap, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="section bg-zinc-50">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="inline-block mb-2 text-amber-600 font-medium">Features</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Everything you need for better feedback
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
            Our platform is designed to make feedback collection simple, insightful, and actionable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-green-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Complete Anonymity</h3>
            <p className="text-zinc-600 text-[15px]">
              Get honest opinions with complete anonymity that encourages candid responses.
            </p>
          </div>
          
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Link2 className="text-blue-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Simple Integration</h3>
            <p className="text-zinc-600 text-[15px]">
              Share a link or embed our widget directly on your website with a simple snippet.
            </p>
          </div>
          
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-4">
              <BarChart3 className="text-amber-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Insights Dashboard</h3>
            <p className="text-zinc-600 text-[15px]">
              Track feedback trends and insights with our powerful built-in analytics.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-4">
              <Rocket className="text-purple-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Quick Setup</h3>
            <p className="text-zinc-600 text-[15px]">
              Get started in minutes with our intuitive setup process. No coding required.
            </p>
          </div>
          
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-red-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Instant Notifications</h3>
            <p className="text-zinc-600 text-[15px]">
              Get notified instantly when someone sends you new feedback.
            </p>
          </div>
          
          <div className="feature-card hover:-translate-y-1">
            <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
              <Users className="text-indigo-600" size={20} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Team Collaboration</h3>
            <p className="text-zinc-600 text-[15px]">
              Share insights with your team and collaborate on improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
