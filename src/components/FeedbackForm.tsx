
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/lib/api";
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
      await api.post(`/feedback/${username}`, { message });
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
      <Textarea
        placeholder="Share your anonymous feedback here..."
        className="min-h-[150px] bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting || !message.trim()}
        className="w-full bg-black hover:bg-zinc-800 rounded-md h-12 font-medium flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            <MessageSquare size={16} />
            Send Feedback Anonymously
          </>
        )}
      </Button>
      <p className="text-center text-gray-500 text-sm">
        Your feedback will be completely anonymous.
      </p>
    </form>
  );
};

export default FeedbackForm;
