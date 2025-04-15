import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ThumbsUp, Share2, Twitter, Facebook, Linkedin, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api } from "@/lib/api";

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
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const theme = searchParams.get('theme') || 'light';
  const template = searchParams.get('template') || 'standard';
  const id = searchParams.get('id');

  // Get template data from localStorage
  const templateData = JSON.parse(localStorage.getItem('selectedTemplate') || '{}');
  const ratingType = templateData?.ratingType || 'emojis';
  const color = templateData?.color || 'amber';

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!username) return;
      
      try {
        setIsLoading(true);
        const response = await api.get(`api/users/${username}`);
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
    
    const url = `${window.location.origin}/feedback/${username}?template=${template}&theme=${theme}&id=${id}`;
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

  // Get background color based on theme
  const getBackgroundColor = () => {
    switch (theme) {
      case "dark":
        return "bg-zinc-900 text-white";
      case "minimal":
        return "bg-white text-zinc-800 shadow-sm";
      case "branded":
        return `bg-${color}-50 text-${color}-900`;
      default: // light
        return "bg-white text-zinc-800";
    }
  };

  // Get border style based on theme
  const getBorderStyle = () => {
    switch (theme) {
      case "dark":
        return "border border-zinc-800";
      case "minimal":
        return "border-0";
      case "branded":
        return `border border-${color}-200`;
      default: // light
        return "border border-zinc-200";
    }
  };

  // Get button style based on theme
  const getButtonStyle = () => {
    switch (theme) {
      case "dark":
        return "bg-amber-500 text-white hover:bg-amber-600";
      case "minimal":
        return "bg-zinc-100 text-zinc-800 hover:bg-zinc-200";
      case "branded":
        return `bg-${color}-500 text-white hover:bg-${color}-600`;
      default: // light
        return "bg-amber-500 text-white hover:bg-amber-600";
    }
  };

  const renderRatingOptions = () => {
    switch (ratingType) {
      case "stars":
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Star 
                key={value} 
                size={24} 
                className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  rating && rating >= value ? `text-${color}-500 fill-current` : "text-gray-300"
                }`}
                onClick={() => setRating(value)}
              />
            ))}
          </div>
        );
      case "hearts":
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Heart 
                key={value} 
                size={24} 
                className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  rating && rating >= value ? `text-${color}-500 fill-current` : "text-gray-300"
                }`}
                onClick={() => setRating(value)}
              />
            ))}
          </div>
        );
      case "thumbs":
        return (
          <div className="flex space-x-6 justify-center my-4">
            <ThumbsUp 
              size={28} 
              className={`cursor-pointer transition-all duration-200 hover:scale-110 transform rotate-180 ${
                rating === 1 ? `text-${color}-500` : "text-gray-300"
              }`}
              onClick={() => setRating(1)}
            />
            <ThumbsUp 
              size={28} 
              className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                rating === 5 ? `text-${color}-500` : "text-gray-300"
              }`}
              onClick={() => setRating(5)}
            />
          </div>
        );
      case "emojis":
        return (
          <div className="flex space-x-3 justify-center my-4">
            {[
              { value: 1, emoji: "😡" },
              { value: 2, emoji: "😕" },
              { value: 3, emoji: "😐" },
              { value: 4, emoji: "🙂" },
              { value: 5, emoji: "😄" }
            ].map((item) => (
              <div 
                key={item.value}
                className={`cursor-pointer transition-all duration-200 hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  rating === item.value ? `bg-${color}-100 border-2 border-${color}-300` : "border border-gray-200"
                }`}
                onClick={() => setRating(item.value)}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        );
      default: // numbers
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <div 
                key={value}
                className={`cursor-pointer transition-all duration-200 hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center ${
                  rating === value 
                    ? `bg-${color}-500 text-white` 
                    : `border border-${color}-200 text-${color}-600`
                }`}
                onClick={() => setRating(value)}
              >
                {value}
              </div>
            ))}
          </div>
        );
    }
  };

  const handleSubmit = async () => {
    if (!rating) {
      toast.error("Please select a rating");
      return;
    }

    try {
      await api.post(`api/feedback/${username}`, {
        message: feedback,
        rating,
        template,
        theme,
        templateId: id
      });
      setSubmitted(true);
      toast.success("Thank you for your feedback!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${getBackgroundColor()}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-amber-500"></div>
      </div>
    );
  }

  if (error || !username) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${getBackgroundColor()}`}>
        <Card className={`w-full max-w-md ${getBorderStyle()}`}>
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-xl font-medium mb-2">Error</h2>
              <p className="text-sm opacity-70">
                {error || "Invalid username. Please check the URL and try again."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${getBackgroundColor()}`}>
      <Card className={`w-full rounded-3xl py-3 max-w-md ${getBorderStyle()}`}>
        <CardContent className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className={`w-16 h-16 rounded-full bg-${color}-100 text-${color}-500 flex items-center justify-center mx-auto mb-4 animate-bounce`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Thank you for your feedback!</h3>
              <p className="text-sm opacity-70">Your input helps us improve our product.</p>
              <Button
                className={`mt-6 ${getButtonStyle()} transition-all duration-200 hover:scale-105 rounded-lg`}
                onClick={() => {
                  setSubmitted(false);
                  setRating(null);
                  setFeedback("");
                }}
              >
                Submit another response
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium mb-2">Send feedback to @{username}</h2>
                <p className="text-sm opacity-70">Your feedback will remain 100% anonymous</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">How satisfied are you with our product?</h3>
                {renderRatingOptions()}

                <div className="mt-6">
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className={`w-full p-3 rounded-2xl resize-none transition-all duration-200 focus:ring-2 focus:ring-${color}-500 ${
                      theme === "dark" ? "bg-zinc-800 border-zinc-700" : "bg-white border-zinc-200"
                    } border`}
                    placeholder="Share any additional feedback (optional)"
                    rows={3}
                  ></textarea>
                </div>
                
                <Button
                  onClick={handleSubmit}
                  disabled={!rating}
                  className={`mt-4 w-full ${getButtonStyle()} transition-all duration-200 hover:scale-105 rounded-lg ${
                    !rating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Submit Feedback
                </Button>
              </div>

              <div className="mt-6 text-center">
                <div className="relative inline-block">
                  <button 
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className={`flex items-center justify-center gap-1 text-xs px-3 py-2 rounded-lg ${
                      theme === 'dark' ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}>
                    <Share2 size={12} /> 
                    Share this feedback form
                  </button>
                  
                  {showShareMenu && (
                    <div className={`absolute right-0 bottom-full mb-2 p-2 rounded-lg shadow-md z-10 ${getBorderStyle()}`}>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleShare('twitter')}
                          className="p-2 rounded-lg hover:bg-zinc-100">
                          <Twitter size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                        </button>
                        <button 
                          onClick={() => handleShare('facebook')}
                          className="p-2 rounded-lg hover:bg-zinc-100">
                          <Facebook size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')}
                          className="p-2 rounded-lg hover:bg-zinc-100">
                          <Linkedin size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                        </button>
                        <button 
                          onClick={() => handleShare('copy')}
                          className="p-2 rounded-lg hover:bg-zinc-100">
                          <Link size={16} className={theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                
                <p className={`text-xs mt-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Powered by <a href="/" className={`text-${color}-500 hover:text-${color}-600`}>FeedbackGrove</a>
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Feedback;
