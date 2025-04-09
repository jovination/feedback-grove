
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const SocialProofSection = () => {
  return (
    <section className="py-12 bg-zinc-50 border-y border-zinc-100">
      <div className="container-tight">
        <p className="text-center text-sm text-zinc-500 mb-8 font-medium">Trusted by teams from</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {/* Company logos with modern styling */}
          <Card className="flex items-center justify-center h-20 bg-white hover:shadow-md transition-all duration-300 border-zinc-100">
            <div className="font-bold text-xl text-zinc-700">acme</div>
          </Card>
          
          <Card className="flex items-center justify-center h-20 bg-white hover:shadow-md transition-all duration-300 border-zinc-100">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">quantum</div>
          </Card>
          
          <Card className="flex items-center justify-center h-20 bg-white hover:shadow-md transition-all duration-300 border-zinc-100">
            <div className="font-bold text-xl text-zinc-700">VERTEX<span className="text-amber-500">corp</span></div>
          </Card>
          
          <Card className="flex items-center justify-center h-20 bg-white hover:shadow-md transition-all duration-300 border-zinc-100">
            <div className="font-bold text-xl text-zinc-700"><span className="bg-black text-white px-1">BOX</span></div>
          </Card>
          
          <Card className="flex items-center justify-center h-20 bg-white hover:shadow-md transition-all duration-300 border-zinc-100">
            <div className="font-bold text-xl text-green-600">eco<span className="text-zinc-700">sphere</span></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
