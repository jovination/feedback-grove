
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const PremiumUpsell = () => {
  const handleLemonSqueezyRedirect = () => {
    // Replace with your actual Lemon Squeezy product URL
    window.open("https://feedbackgrove.lemonsqueezy.com", "_blank");
  };

  return (
    <Card className="border border-amber-100 rounded-xl shadow-sm bg-gradient-to-r from-amber-50 to-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-amber-800">Upgrade to Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600 mb-4">
          Unlock premium features to get more from your feedback.
        </p>
        
        <ul className="space-y-2 mb-4">
          <li className="flex items-center">
            <Check size={18} className="text-amber-600 mr-2" />
            <span className="text-zinc-700">Email notifications for new feedback</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-amber-600 mr-2" />
            <span className="text-zinc-700">Export feedback to CSV</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-amber-600 mr-2" />
            <span className="text-zinc-700">Detailed analytics</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-amber-600 mr-2" />
            <span className="text-zinc-700">Custom branding options</span>
          </li>
        </ul>
        
        <Button 
          onClick={handleLemonSqueezyRedirect}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          Upgrade Now <ArrowRight size={16} className="ml-2" />
        </Button>
        
        <p className="text-xs text-center text-zinc-500 mt-3">
          One-time payment. No recurring fees.
        </p>
      </CardContent>
    </Card>
  );
};

export default PremiumUpsell;
