
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import EmbedCodeGenerator from "@/components/EmbedCodeGenerator";
import PremiumUpsell from "@/components/PremiumUpsell";
import { Link as LinkIcon } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardGuide from "@/components/dashboard/DashboardGuide";
import FeedbackWidgetStats from "@/components/dashboard/FeedbackWidgetStats";

interface FeedbackItem {
  id: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (!user) return;
      
      try {
        setIsLoadingFeedback(true);
        const response = await api.get("/feedback");
        setFeedbackItems(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      } finally {
        setIsLoadingFeedback(false);
      }
    };

    if (user) {
      fetchFeedback();
    }
  }, [user]);

  const handleDeleteFeedback = async (id: string) => {
    try {
      await api.delete(`/feedback/${id}`);
      setFeedbackItems(feedbackItems.filter(item => item.id !== id));
      toast.success("Feedback deleted successfully");
    } catch (error) {
      console.error("Error deleting feedback:", error);
      toast.error("Failed to delete feedback");
    }
  };

  const copyFeedbackLink = () => {
    if (!user) return;
    
    const link = `${window.location.origin}/feedback/${user.username}`;
    navigator.clipboard.writeText(link);
    toast.success("Feedback link copied to clipboard!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-50 font-inter">
        <Navbar />
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-amber-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-inter">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
            <p className="text-zinc-500 text-sm">Manage your feedback and widgets</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={copyFeedbackLink} variant="outline" size="sm" className="flex items-center gap-2 border-zinc-200">
              <LinkIcon size={14} />
              <span>Copy feedback link</span>
            </Button>
            <Button onClick={() => window.location.href = '/templates-library'} className="bg-black hover:bg-zinc-800 text-white" size="sm">
              Create Widget
            </Button>
          </div>
        </div>
        
        <DashboardStats 
          feedbackCount={feedbackItems.length}
          lastFeedbackDate={feedbackItems.length > 0 ? feedbackItems[0].created_at : null}
          user={user}
        />
        
        <FeedbackWidgetStats isPremium={!!user.is_premium} />
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <DashboardTabs
              isLoading={isLoadingFeedback}
              feedbackItems={feedbackItems}
              username={user.username}
              isPremium={!!user.is_premium}
              onDeleteFeedback={handleDeleteFeedback}
            />
            
            <EmbedCodeGenerator username={user.username} />
          </div>
          
          <div>
            {!user.is_premium && <PremiumUpsell />}
            <DashboardGuide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
