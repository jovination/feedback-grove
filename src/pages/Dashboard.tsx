import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import EmbedCodeGenerator from "@/components/EmbedCodeGenerator";
import PremiumUpsell from "@/components/PremiumUpsell";
import { Link as LinkIcon, Settings, LayoutDashboard } from "lucide-react";
import { feedbackApi, widgetsApi } from "@/lib/api";
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

interface Widget {
  id: string;
  name: string;
  type: string;
  is_active: boolean;
  settings: any;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [isLoadingWidgets, setIsLoadingWidgets] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  // Separate effect for fetching feedback
  useEffect(() => {
    const fetchFeedback = async () => {
      if (!user) return;
      
      try {
        setIsLoadingFeedback(true);
        const response = await feedbackApi.getFeedback();
        setFeedbackItems(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
        toast.error("Failed to load feedback");
      } finally {
        setIsLoadingFeedback(false);
      }
    };

    // Only fetch if user is available and not in loading state
    if (user && !isAuthLoading) {
      fetchFeedback();
    }
  }, [user, isAuthLoading]);

  // Separate effect for fetching widgets
  useEffect(() => {
    const fetchWidgets = async () => {
      if (!user) return;
      
      try {
        setIsLoadingWidgets(true);
        const response = await widgetsApi.getWidgets();
        setWidgets(response.data);
      } catch (error) {
        console.error("Error fetching widgets:", error);
        toast.error("Failed to load widgets");
      } finally {
        setIsLoadingWidgets(false);
      }
    };

    // Only fetch if user is available and not in loading state
    if (user && !isAuthLoading) {
      fetchWidgets();
    }
  }, [user, isAuthLoading]);

  const handleDeleteFeedback = async (id: string) => {
    try {
      await feedbackApi.deleteFeedback(id);
      setFeedbackItems(feedbackItems.filter(item => item.id !== id));
      toast.success("Feedback deleted successfully");
    } catch (error) {
      console.error("Error deleting feedback:", error);
      toast.error("Failed to delete feedback");
    }
  };

  const handleConfigureWidget = (widgetId: string) => {
    navigate(`/widget-templates?id=${widgetId}`);
  };

  const handleCreateWidget = () => {
    navigate('/templates-library');
  };

  const copyFeedbackLink = () => {
    if (!user) return;
    
    const link = `${window.location.origin}/api/feedback/${user.username}`;
    navigator.clipboard.writeText(link);
    toast.success("Feedback link copied to clipboard!");
  };

  // Show loading state for the entire dashboard when auth is loading
  if (isAuthLoading) {
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
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  // Now we're sure user is not null
  return (
    <div className="min-h-screen bg-zinc-50 font-inter">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-zinc-900">Dashboard</h1>
            <p className="text-zinc-500 text-sm">Manage your feedback and widgets</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={copyFeedbackLink} variant="outline" size="sm" className="flex items-center gap-1 sm:gap-2 border-zinc-200 text-xs sm:text-sm w-full sm:w-auto">
              <LinkIcon size={14} className="flex-shrink-0" />
              <span className="truncate">Copy feedback link</span>
            </Button>
            <Button onClick={handleCreateWidget} className="bg-amber-500 hover:bg-amber-600 text-white text-xs sm:text-sm w-full sm:w-auto" size="sm">
              Create Widget
            </Button>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-4 sm:mb-6">
          <TabsList className="grid grid-cols-3 mb-4 sm:mb-6 w-full">
            <TabsTrigger value="dashboard" className="flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2 text-xs sm:text-sm">
              <LayoutDashboard size={14} className="hidden xs:inline-block" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2 text-xs sm:text-sm">
              <LinkIcon size={14} className="hidden xs:inline-block" />
              <span>Templates</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2 text-xs sm:text-sm">
              <Settings size={14} className="hidden xs:inline-block" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-4">
            <DashboardStats 
              feedbackCount={feedbackItems.length}
              lastFeedbackDate={feedbackItems.length > 0 ? feedbackItems[0].created_at : null}
              user={user}
            />
            
            <FeedbackWidgetStats 
              isPremium={user.is_premium} 
              widgets={widgets}
              isLoading={isLoadingWidgets}
              onConfigureWidget={handleConfigureWidget}
              onCreateWidget={handleCreateWidget}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="md:col-span-2 space-y-4">
                <DashboardTabs
                  isLoading={isLoadingFeedback}
                  feedbackItems={feedbackItems}
                  username={user.username}
                  isPremium={user.is_premium}
                  onDeleteFeedback={handleDeleteFeedback}
                />
                
                <EmbedCodeGenerator username={user.username} />
              </div>
              
              <div className="space-y-4">
                {!user.is_premium && <PremiumUpsell />}
                <DashboardGuide />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="templates">
            <div className="bg-white rounded-lg border border-zinc-200 p-3 sm:p-6 mb-4 sm:mb-6 overflow-x-auto">
              <TemplatesLibraryPage embedded={true} />
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="md:col-span-2">
                <UserSettings user={user} />
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