
import { useState } from "react";
import { MessageSquare, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeedbackEntry from "@/components/FeedbackEntry";
import { toast } from "sonner";

interface FeedbackItem {
  id: string;
  message: string;
  created_at: string;
}

interface FeedbackListProps {
  isLoading: boolean;
  items: FeedbackItem[];
  username: string;
  onDelete: (id: string) => Promise<void>;
}

const FeedbackList = ({ isLoading, items, username, onDelete }: FeedbackListProps) => {
  const copyFeedbackLink = () => {
    if (!username) return;
    
    const link = `${window.location.origin}/feedback/${username}`;
    navigator.clipboard.writeText(link);
    toast.success("Feedback link copied to clipboard!");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-amber-500"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
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
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <FeedbackEntry
          key={item.id}
          id={item.id}
          message={item.message}
          created_at={item.created_at}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
