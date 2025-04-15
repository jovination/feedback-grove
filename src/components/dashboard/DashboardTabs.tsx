import { useState } from "react";
import { Card } from "@/components/ui/card";
import FeedbackList from "./FeedbackList";
import AnalyticsTab from "./AnalyticsTab";

interface FeedbackItem {
  id: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface DashboardTabsProps {
  isLoading: boolean;
  feedbackItems: FeedbackItem[];
  username: string;
  isPremium: boolean;
  onDeleteFeedback: (id: string) => Promise<void>;
}

const DashboardTabs = ({ 
  isLoading, 
  feedbackItems, 
  username,
  isPremium,
  onDeleteFeedback
}: DashboardTabsProps) => {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
      <div className="flex border-b border-zinc-100 p-4">
        <button 
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === "recent" 
              ? "bg-zinc-100 text-zinc-900" 
              : "text-zinc-600 hover:text-zinc-900"
          }`}
          onClick={() => setActiveTab("recent")}
        >
          Recent Feedback
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            activeTab === "stats" 
              ? "bg-zinc-100 text-zinc-900" 
              : "text-zinc-600 hover:text-zinc-900"
          }`}
          onClick={() => setActiveTab("stats")}
        >
          Analytics
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === "recent" ? (
          <FeedbackList 
            isLoading={isLoading} 
            items={feedbackItems} 
            username={username} 
            onDelete={onDeleteFeedback} 
          />
        ) : (
          <AnalyticsTab isPremium={isPremium} />
        )}
      </div>
    </Card>
  );
};

export default DashboardTabs;