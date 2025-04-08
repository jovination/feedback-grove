
import { MessageSquare } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-200 mt-auto bg-white">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-xl font-bold mb-4 md:mb-0 flex items-center">
            <MessageSquare className="h-5 w-5 text-amber-500 mr-2" />
            FeedbackWave
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            <RouterLink to="/features" className="text-sm text-zinc-600 hover:text-zinc-900">Features</RouterLink>
            <RouterLink to="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</RouterLink>
            <RouterLink to="/resources" className="text-sm text-zinc-600 hover:text-zinc-900">Resources</RouterLink>
            <RouterLink to="/how-it-works" className="text-sm text-zinc-600 hover:text-zinc-900">How It Works</RouterLink>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
          <p className="text-sm text-zinc-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} FeedbackWave. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Terms</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Privacy</a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
