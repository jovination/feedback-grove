import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Trash2, Share2, Twitter, Facebook, Copy, Linkedin, ThumbsUp, ThumbsDown, MoreHorizontal, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface FeedbackEntryProps {
  id: string;
  message: string;
  created_at: string;
  is_read: boolean;
  rating?: number;
  template?: string;
  theme?: string;
  templateId?: string;
  meta_data?: Record<string, any>;
  onDelete: (id: string) => void;
}

const FeedbackEntry = ({ 
  id, 
  message, 
  created_at, 
  is_read,
  rating,
  template,
  theme,
  templateId,
  meta_data,
  onDelete 
}: FeedbackEntryProps) => {
  const formattedDate = formatDistanceToNow(new Date(created_at), { addSuffix: true });
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  const handleShare = (platform?: string) => {
    const shareText = `"${message}" - Anonymous Feedback via FeedbackGrove`;
    const shareUrl = `${window.location.origin}/f/${id}`;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        toast.success("Copied to clipboard");
        setShowShareOptions(false);
        break;
      default:
        setShowShareOptions(!showShareOptions);
    }
  };

  const handleReaction = (liked: boolean) => {
    setIsLiked(liked);
    toast.success(liked ? "Marked as helpful" : "Marked as unhelpful");
  };

  return (
    <Card className="mb-3 bg-white border border-zinc-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {is_read && (
                <span className="inline-flex items-center text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <CheckCircle2 size={12} className="mr-1" />
                  Read
                </span>
              )}
              {rating && (
                <span className="inline-flex items-center text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                  {rating} ★
                </span>
              )}
              {template && (
                <span className="inline-flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {template}
                </span>
              )}
            </div>
            <p className="text-zinc-800 mb-3 text-[15px] leading-relaxed">{message}</p>
            <div className="flex items-center justify-between">
              <p className="text-zinc-500 text-xs">{formattedDate}</p>
              <div className="flex items-center space-x-1">
                {isLiked !== null ? (
                  <div className={`text-xs px-2 py-1 rounded-full ${isLiked ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {isLiked ? 'Helpful' : 'Not Helpful'}
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-zinc-400 hover:text-green-500 hover:bg-green-50 h-7 w-7 rounded-full"
                      onClick={() => handleReaction(true)}
                    >
                      <ThumbsUp size={15} />
                      <span className="sr-only">Mark as helpful</span>
                    </Button>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-zinc-400 hover:text-red-500 hover:bg-red-50 h-7 w-7 rounded-full"
                      onClick={() => handleReaction(false)}
                    >
                      <ThumbsDown size={15} />
                      <span className="sr-only">Mark as unhelpful</span>
                    </Button>
                  </div>
                )}
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 h-7 w-7 rounded-full"
                    >
                      <MoreHorizontal size={15} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare('copy')}>
                      <Copy className="mr-2 h-4 w-4" /> Copy to clipboard
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare('twitter')}>
                      <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare('facebook')}>
                      <Facebook className="mr-2 h-4 w-4" /> Share on Facebook
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={() => handleShare('linkedin')}>
                      <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => onDelete(id)}>
                      <Trash2 className="mr-2 h-4 w-4" /> Delete feedback
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackEntry;
