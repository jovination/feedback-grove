
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
    <Card className="mb-3 border border-gray-200 rounded-lg shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-gray-800 mb-2 text-sm">{message}</p>
            <p className="text-gray-500 text-xs">{formattedDate}</p>
          </div>
          <Button
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-red-500 h-8 w-8"
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
