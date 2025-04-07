
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const PremiumUpsell = () => {
  const handleGumroadRedirect = () => {
    // Replace with your actual Gumroad product URL
    window.open("https://gumroad.com/l/feedbackwave", "_blank");
  };

  return (
    <Card className="border border-indigo-100 rounded-xl shadow-soft bg-gradient-to-r from-indigo-50 to-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-indigo-800">Upgrade to Premium</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Unlock premium features to get more from your feedback.
        </p>
        
        <ul className="space-y-2 mb-4">
          <li className="flex items-center">
            <Check size={18} className="text-indigo-600 mr-2" />
            <span className="text-gray-700">Email notifications for new feedback</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-indigo-600 mr-2" />
            <span className="text-gray-700">Export feedback to CSV</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-indigo-600 mr-2" />
            <span className="text-gray-700">Detailed analytics</span>
          </li>
          <li className="flex items-center">
            <Check size={18} className="text-indigo-600 mr-2" />
            <span className="text-gray-700">Custom branding options</span>
          </li>
        </ul>
        
        <Button 
          onClick={handleGumroadRedirect}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Upgrade Now <ArrowRight size={16} className="ml-2" />
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-3">
          One-time payment. No recurring fees.
        </p>
      </CardContent>
    </Card>
  );
};

export default PremiumUpsell;
