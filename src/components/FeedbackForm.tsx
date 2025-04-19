
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { feedbackApi } from "@/lib/api";
import { MessageSquare } from "lucide-react";

interface FeedbackFormProps {
  username: string;
}

const FeedbackForm = ({ username }: FeedbackFormProps) => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Please enter feedback before submitting");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await feedbackApi.submitFeedback(username, message);
      toast.success("Feedback submitted successfully!");
      setMessage("");
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      // Error will be handled by the API interceptor
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Share your anonymous feedback here..."
          className="min-h-[150px] bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 p-4 text-[15px] transition-all duration-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div className="absolute top-2 right-2">
          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            Anonymous
          </div>
        </div>
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting || !message.trim()}
        className="w-full bg-black hover:bg-zinc-800 rounded-lg h-12 font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-white"></div>
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <MessageSquare size={16} />
            Send Feedback Anonymously
          </>
        )}
      </Button>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-center text-zinc-500 text-sm">
          Your feedback will be completely anonymous
        </p>
        <div className="flex items-center text-xs text-zinc-400">
          <svg viewBox="0 0 24 24" className="h-3 w-3 mr-1" fill="currentColor">
            <path d="M19.023 7.5c-.413-2.92-2.603-5.11-5.523-5.523v2.023h-3v-2.023c-2.92.413-5.11 2.603-5.523 5.523h2.023v3h-2.023c.413 2.92 2.603 5.11 5.523 5.523v-2.023h3v2.023c2.92-.413 5.11-2.603 5.523-5.523h-2.023v-3h2.023z" />
          </svg>
          <span>Powered by FeedbackGrove</span>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
