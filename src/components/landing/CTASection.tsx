
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section bg-zinc-50">
      <div className="container-slim text-center relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-12 border border-amber-200">
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Ready to gather honest feedback?
          </h2>
          <p className="text-lg text-zinc-700 mb-8">
            Create your feedback widget in under 2 minutes.
          </p>
          <RouterLink to="/register">
            <Button className="bg-black hover:bg-zinc-800 h-12 px-8 rounded-md text-[16px] font-medium">
              Get started for free <ArrowRight size={18} className="ml-2" />
            </Button>
          </RouterLink>
          <p className="mt-4 text-sm text-zinc-600">No credit card required. Free plan available.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
