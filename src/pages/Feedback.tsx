
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import FeedbackForm from "@/components/FeedbackForm";
import { api } from "@/lib/api";
import { Share2 } from "lucide-react";

interface UserProfile {
  username: string;
  avatar_url?: string;
}

const Feedback = () => {
  const { username } = useParams<{ username: string }>();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const theme = searchParams.get('theme') || 'light';

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!username) return;
      
      try {
        setIsLoading(true);
        const response = await api.get(`/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("User not found. Please check the URL and try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [username]);

  const themeClasses = theme === 'dark' 
    ? 'bg-zinc-900 text-zinc-100' 
    : 'gradient-bg text-zinc-800';

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${themeClasses} p-4 font-inter`}>
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-amber-500"></div>
      </div>
    );
  }

  if (error || !username) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${themeClasses} p-4 font-inter`}>
        <Card className={`w-full max-w-md ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border border-zinc-200'} rounded-lg shadow-sm`}>
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className={`text-xl font-medium mb-2 ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'}`}>
                Error
              </h2>
              <p className={`${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} text-[15px]`}>
                {error || "Invalid username. Please check the URL and try again."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // For this demo, we're simulating successful user fetch
  // In a real implementation, we would use the actual user data
  const displayUser = user || { username };

  return (
    <div className={`min-h-screen flex items-center justify-center ${themeClasses} p-4 font-inter`}>
      <Card className={`w-full max-w-md ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border border-zinc-200'} rounded-lg shadow-sm`}>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              {displayUser.avatar_url ? (
                <img 
                  src={displayUser.avatar_url} 
                  alt={`${displayUser.username}'s avatar`} 
                  className="rounded-full w-12 h-12"
                />
              ) : (
                <span className="text-lg font-semibold text-amber-600">
                  {displayUser.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <h2 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'}`}>
              Send feedback to {displayUser.username}
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-500'}`}>
              Your feedback will remain 100% anonymous
            </p>
          </div>
          
          <FeedbackForm username={displayUser.username} />
          
          <div className="mt-6 text-center">
            <p className={`text-xs ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} flex items-center justify-center`}>
              <Share2 size={12} className="mr-1" /> Share this feedback form
            </p>
            <p className={`text-xs mt-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Powered by <a href="/" className="text-amber-500 hover:text-amber-600">FeedbackWave</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;
