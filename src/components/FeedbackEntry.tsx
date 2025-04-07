
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Trash2 } from "lucide-react";

interface FeedbackEntryProps {
  id: string;
  message: string;
  created_at: string;
  onDelete: (id: string) => void;
}

const FeedbackEntry = ({ id, message, created_at, onDelete }: FeedbackEntryProps) => {
  const formattedDate = formatDistanceToNow(new Date(created_at), { addSuffix: true });

  return (
    <Card className="mb-3 border border-zinc-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-zinc-800 mb-2 text-[15px] leading-relaxed">{message}</p>
            <p className="text-zinc-500 text-xs">{formattedDate}</p>
          </div>
          <Button
            variant="ghost" 
            size="icon"
            className="text-zinc-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 rounded-full"
            onClick={() => onDelete(id)}
          >
            <Trash2 size={16} />
            <span className="sr-only">Delete feedback</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackEntry;
