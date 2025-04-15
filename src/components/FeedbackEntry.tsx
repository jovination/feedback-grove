import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Trash2, Share2, Twitter, Facebook, Copy, Linkedin, ThumbsUp, ThumbsDown, MoreHorizontal, MessageSquare, CheckCircle2, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
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
  meta_data?: Record<string, string | number | boolean | null>;
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
  const exactDate = format(new Date(created_at), "MMM d, yyyy h:mm a");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  
  // Load liked state from localStorage on component mount
  useEffect(() => {
    const storedLikedState = localStorage.getItem(`feedback-${id}-liked`);
    if (storedLikedState !== null) {
      setIsLiked(storedLikedState === 'true');
    }
  }, [id]);

  // Save liked state to localStorage whenever it changes
  useEffect(() => {
    if (isLiked !== null) {
      localStorage.setItem(`feedback-${id}-liked`, isLiked.toString());
    } else {
      // If isLiked is null, remove the item from localStorage
      localStorage.removeItem(`feedback-${id}-liked`);
    }
  }, [isLiked, id]);

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
    // Toggle off if clicking the same reaction again
    if (isLiked === liked) {
      setIsLiked(null);
      toast.success("Reaction removed");
    } else {
      setIsLiked(liked);
      toast.success(liked ? "Marked as helpful" : "Marked as unhelpful");
    }
  };

  const resetReaction = () => {
    setIsLiked(null);
    localStorage.removeItem(`feedback-${id}-liked`);
    toast.success("Reaction reset");
  };

  return (
    <Card className="mb-3 bg-white border border-zinc-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-2">
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
                <span className="inline-flex items-center text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full truncate max-w-full md:max-w-xs">
                  {template}
                </span>
              )}
            </div>
            <p className="text-zinc-800 mb-3 text-[15px] leading-relaxed break-words">{message}</p>
            
            {/* Footer row with all elements aligned on the same line */}
            <div className="flex items-center justify-between flex-wrap gap-y-2">
              <span className="text-xs text-zinc-500 mr-2">{exactDate}</span>
              
              <div className="flex items-center ml-auto gap-2">
                {isLiked !== null ? (
                  <Button
                    variant="ghost"
                    className={`text-xs px-2 py-1 h-auto rounded-full flex items-center ${
                      isLiked ? 'bg-green-50 text-green-600 hover:bg-green-100' : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                    onClick={() => handleReaction(isLiked)}
                  >
                    {isLiked ? (
                      <>
                        <ThumbsUp size={12} className="mr-1" />
                        Helpful
                      </>
                    ) : (
                      <>
                        <ThumbsDown size={12} className="mr-1" />
                        Not Helpful
                      </>
                    )}
                  </Button>
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
                  <DropdownMenuContent align="end" className="w-56 p-1.5 rounded-xl border border-zinc-100 shadow-lg backdrop-blur-sm bg-white/95">
                    <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50" onClick={() => handleShare('copy')}>
                      <Copy className="mr-2.5 h-4 w-4 text-zinc-500" /> 
                      <span>Copy to clipboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 h-px bg-zinc-100" />
                    <div className="px-3 py-1.5 text-xs font-medium text-zinc-500">Share on</div>
                    <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 text-[#1DA1F2]" onClick={() => handleShare('twitter')}>
                      <Twitter className="mr-2.5 h-4 w-4" /> 
                      <span>Twitter</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 text-[#4267B2]" onClick={() => handleShare('facebook')}>
                      <Facebook className="mr-2.5 h-4 w-4" /> 
                      <span>Facebook</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 text-[#0077B5]" onClick={() => handleShare('linkedin')}>
                      <Linkedin className="mr-2.5 h-4 w-4" /> 
                      <span>LinkedIn</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 h-px bg-zinc-100" />
                    {isLiked !== null && (
                      <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 text-blue-600" onClick={resetReaction}>
                        <RefreshCw className="mr-2.5 h-4 w-4" /> 
                        <span>Reset reaction</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-red-50 text-red-600" onClick={() => onDelete(id)}>
                      <Trash2 className="mr-2.5 h-4 w-4" /> 
                      <span>Delete feedback</span>
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