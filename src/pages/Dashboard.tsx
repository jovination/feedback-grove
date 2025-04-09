
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import EmbedCodeGenerator from "@/components/EmbedCodeGenerator";
import FeedbackEntry from "@/components/FeedbackEntry";
import PremiumUpsell from "@/components/PremiumUpsell";
import { MessageSquare, Clock, Copy, BarChart3, Link as LinkIcon } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface FeedbackItem {
  id: string;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);
  const [activeTab, setActiveTab] = useState("recent");

  useEffect(() => {
    const fetchFeedback = async () => {
      if (!isAuthenticated) return;
      
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

    fetchFeedback();
  }, [isAuthenticated]);

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

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-inter">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
          <Button onClick={copyFeedbackLink} variant="outline" className="flex items-center gap-2 border-zinc-200">
            <LinkIcon size={14} />
            <span>Copy feedback link</span>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <Card className="dashboard-card">
            <CardContent className="p-5">
              <div className="dashboard-stat">
                <div className="dashboard-icon-wrapper bg-amber-50">
                  <MessageSquare className="text-amber-600" size={18} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Total Feedback</p>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {feedbackItems.length}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardContent className="p-5">
              <div className="dashboard-stat">
                <div className="dashboard-icon-wrapper bg-blue-50">
                  <Clock className="text-blue-600" size={18} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Last Feedback</p>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {feedbackItems.length > 0 
                      ? new Date(feedbackItems[0].created_at).toLocaleDateString() 
                      : "No feedback yet"}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dashboard-card">
            <CardContent className="p-5">
              <div className="dashboard-stat">
                <div className={`dashboard-icon-wrapper ${
                  user?.is_premium ? "bg-green-50" : "bg-yellow-50"
                }`}>
                  <BarChart3 className={
                    user?.is_premium ? "text-green-600" : "text-yellow-600"
                  } size={18} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Account Status</p>
                  <div className="flex items-center">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user?.is_premium 
                        ? "bg-green-50 text-green-700" 
                        : "bg-yellow-50 text-yellow-700"
                    }`}>
                      {user?.is_premium ? "Premium" : "Free"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
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
                  <>
                    {isLoadingFeedback ? (
                      <div className="flex justify-center items-center h-32">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-amber-500"></div>
                      </div>
                    ) : feedbackItems.length > 0 ? (
                      <div className="space-y-3">
                        {feedbackItems.map((item) => (
                          <FeedbackEntry
                            key={item.id}
                            id={item.id}
                            message={item.message}
                            created_at={item.created_at}
                            onDelete={handleDeleteFeedback}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-10 px-6 border border-dashed border-zinc-200 rounded-lg">
                        <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MessageSquare className="text-amber-500" size={20} />
                        </div>
                        <h3 className="text-lg font-medium text-zinc-900 mb-2">No feedback yet</h3>
                        <p className="text-zinc-500 text-[15px] max-w-sm mx-auto mb-6">
                          Share your feedback link with others to start collecting anonymous feedback.
                        </p>
                        <Button onClick={copyFeedbackLink} variant="outline" className="flex items-center gap-2 mx-auto">
                          <Copy size={14} />
                          <span>Copy your feedback link</span>
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="border border-dashed border-zinc-200 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="text-amber-500" size={20} />
                    </div>
                    <h3 className="text-lg font-medium text-zinc-900 mb-2">Analytics</h3>
                    <p className="text-zinc-500 text-[15px] mb-4">
                      {user?.is_premium 
                        ? "View detailed analytics of your feedback data." 
                        : "Upgrade to Premium to access detailed analytics."}
                    </p>
                    {!user?.is_premium && (
                      <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                        Upgrade to Premium
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
            
            <EmbedCodeGenerator username={user?.username || ""} />
          </div>
          
          <div>
            {!user?.is_premium && <PremiumUpsell />}
            
            {/* Quick Guide Card */}
            <Card className="shadow-sm border border-zinc-200 rounded-lg mt-6">
              <CardContent className="p-5">
                <h3 className="text-lg font-medium mb-3">Quick Guide</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div className="text-sm text-zinc-600">Share your feedback link with others</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div className="text-sm text-zinc-600">Receive anonymous feedback from anyone</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div className="text-sm text-zinc-600">Embed the feedback widget on your website</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
