
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import EmbedCodeGenerator from "@/components/EmbedCodeGenerator";
import PremiumUpsell from "@/components/PremiumUpsell";
import { Link as LinkIcon, Settings, LayoutDashboard } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardGuide from "@/components/dashboard/DashboardGuide";
import FeedbackWidgetStats from "@/components/dashboard/FeedbackWidgetStats";
import UserSettings from "@/components/dashboard/UserSettings";
import TemplatesLibraryPage from "@/pages/TemplatesLibrary";

interface FeedbackItem {
  id: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

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

  // Redirect to login if not authenticated
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
            <Button onClick={() => setActiveTab("templates")} className="bg-amber-500 hover:bg-amber-600 text-white" size="sm">
              Create Widget
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <LinkIcon size={16} />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-4">
            <DashboardStats 
              feedbackCount={feedbackItems.length}
              lastFeedbackDate={feedbackItems.length > 0 ? feedbackItems[0].created_at : null}
              user={user}
            />
            
            <FeedbackWidgetStats isPremium={!!user?.is_premium} />
            
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
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="bg-white rounded-lg border border-zinc-200 p-6 mb-6">
              <TemplatesLibraryPage embedded={true} />
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <UserSettings />
              </div>
              <div>
                {!user.is_premium && <PremiumUpsell />}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
