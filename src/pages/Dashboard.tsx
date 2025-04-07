
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmbedCodeGenerator from "@/components/EmbedCodeGenerator";
import FeedbackEntry from "@/components/FeedbackEntry";
import PremiumUpsell from "@/components/PremiumUpsell";
import { MessageSquare } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 font-inter">
        <Navbar />
        <div className="max-w-screen-lg mx-auto px-6 py-16">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="shadow-soft border-gray-200 rounded-xl">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="text-indigo-600" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Feedback</p>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {feedbackItems.length}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-gray-200 rounded-xl">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500 mb-2">Your Public Feedback URL</p>
              <div className="flex items-center">
                <div className="truncate text-gray-800 font-medium">
                  {window.location.origin}/feedback/{user?.username}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-gray-200 rounded-xl">
            <CardContent className="p-6">
              <p className="text-sm text-gray-500 mb-2">Account Status</p>
              <div className="flex items-center">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user?.is_premium 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {user?.is_premium ? "Premium" : "Free"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-soft mb-8 p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Feedback</h2>
              
              {isLoadingFeedback ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : feedbackItems.length > 0 ? (
                <div className="space-y-4">
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
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    You haven't received any feedback yet.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Share your feedback link with others to get started!
                  </p>
                </div>
              )}
            </div>
            
            <EmbedCodeGenerator username={user?.username || ""} />
          </div>
          
          <div>
            {!user?.is_premium && <PremiumUpsell />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
