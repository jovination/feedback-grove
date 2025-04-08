
import { Users, Share2, MessageSquare } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block mb-2 text-amber-600 font-medium">How it works</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Collect anonymous feedback in 3 simple steps
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
            Setting up your anonymous feedback collection system takes less than 2 minutes.
            No technical skills required!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
            <div className="step-number mb-6">1</div>
            <div className="illustration-placeholder mb-6 bg-blue-50 rounded-lg h-40 flex items-center justify-center">
              <Users size={50} className="text-blue-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Create your account</h3>
            <p className="text-zinc-600 text-[15px]">
              Sign up in less than 2 minutes and get your personal feedback link immediately.
            </p>
          </div>
          
          <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
            <div className="step-number mb-6">2</div>
            <div className="illustration-placeholder mb-6 bg-purple-50 rounded-lg h-40 flex items-center justify-center">
              <Share2 size={50} className="text-purple-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Share your feedback link</h3>
            <p className="text-zinc-600 text-[15px]">
              Share the link with friends, colleagues, or embed it on your website.
            </p>
          </div>
          
          <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
            <div className="step-number mb-6">3</div>
            <div className="illustration-placeholder mb-6 bg-amber-50 rounded-lg h-40 flex items-center justify-center">
              <MessageSquare size={50} className="text-amber-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Receive honest feedback</h3>
            <p className="text-zinc-600 text-[15px]">
              Get 100% anonymous feedback to help you improve and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
