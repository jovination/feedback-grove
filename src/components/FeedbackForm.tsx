
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/lib/api";

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
        className="min-h-[150px] bg-gray-50 border border-gray-200 rounded-xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting || !message.trim()}
        className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-xl h-12 font-medium"
      >
        {isSubmitting ? "Submitting..." : "Send Feedback Anonymously"}
      </Button>
      <p className="text-center text-gray-500 text-sm">
        Your feedback will be completely anonymous.
      </p>
    </form>
  );
};

export default FeedbackForm;
