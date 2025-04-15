
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnalyticsTabProps {
  isPremium: boolean;
}

const AnalyticsTab = ({ isPremium }: AnalyticsTabProps) => {
  return (
    <div className="border border-dashed border-zinc-200 rounded-lg p-6 text-center">
      <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <BarChart3 className="text-amber-500" size={20} />
      </div>
      <h3 className="text-lg font-medium text-zinc-900 mb-2">Analytics</h3>
      <p className="text-zinc-500 text-[15px] mb-4">
        {isPremium 
          ? "View detailed analytics of your feedback data." 
          : "Upgrade to Premium to access detailed analytics."}
      </p>
      {!isPremium && (
        <Button className="bg-amber-500 hover:bg-amber-600 text-white">
          Upgrade to Premium
        </Button>
      )}
    </div>
  );
};

export default AnalyticsTab;