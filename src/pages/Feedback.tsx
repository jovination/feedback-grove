
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import FeedbackForm from "@/components/FeedbackForm";
import { api } from "@/lib/api";
import { Share2, Twitter, Facebook, Linkedin, Link } from "lucide-react";
import { toast } from "sonner";

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
  const [showShareMenu, setShowShareMenu] = useState(false);
  
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

  const handleShare = (platform: string) => {
    if (!username) return;
    
    const url = `${window.location.origin}/feedback/${username}`;
    let shareUrl = "";
    
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Send me anonymous feedback!')}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        setShowShareMenu(false);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
      setShowShareMenu(false);
    }
  };

  const themeClasses = theme === 'dark' 
    ? 'bg-zinc-900 text-zinc-100' 
    : 'hero-gradient text-zinc-800';

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
      <Card className={`w-full max-w-md ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border border-zinc-200'} rounded-xl shadow-sm`}>
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              {displayUser.avatar_url ? (
                <img 
                  src={displayUser.avatar_url} 
                  alt={`${displayUser.username}'s avatar`} 
                  className="rounded-full w-14 h-14"
                />
              ) : (
                <span className="text-xl font-semibold text-amber-600">
                  {displayUser.username.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            <h2 className={`text-xl font-medium mb-1 ${theme === 'dark' ? 'text-zinc-100' : 'text-zinc-800'}`}>
              Send feedback to @{displayUser.username}
            </h2>
            <p className={`text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-500'}`}>
              Your feedback will remain 100% anonymous
            </p>
          </div>
          
          <FeedbackForm username={displayUser.username} />
          
          <div className="mt-6 text-center">
            <div className="relative inline-block">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className={`flex items-center justify-center gap-1 text-xs px-3 py-2 rounded-md ${theme === 'dark' ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                <Share2 size={12} /> 
                Share this feedback form
              </button>
              
              {showShareMenu && (
                <div className={`absolute right-0 bottom-full mb-2 p-2 rounded-lg shadow-md z-10 ${theme === 'dark' ? 'bg-zinc-800 border border-zinc-700' : 'bg-white border border-zinc-200'}`}>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleShare('twitter')}
                      className="p-2 rounded-full hover:bg-zinc-100">
                      <Twitter size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                    </button>
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="p-2 rounded-full hover:bg-zinc-100">
                      <Facebook size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="p-2 rounded-full hover:bg-zinc-100">
                      <Linkedin size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                    </button>
                    <button 
                      onClick={() => handleShare('copy')}
                      className="p-2 rounded-full hover:bg-zinc-100">
                      <Link size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <p className={`text-xs mt-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Powered by <a href="/" className="text-amber-500 hover:text-amber-600">FeedbackWave</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;
