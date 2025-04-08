
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { Trash2, Share2, Twitter, Facebook, Copy, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FeedbackEntryProps {
  id: string;
  message: string;
  created_at: string;
  onDelete: (id: string) => void;
}

const FeedbackEntry = ({ id, message, created_at, onDelete }: FeedbackEntryProps) => {
  const formattedDate = formatDistanceToNow(new Date(created_at), { addSuffix: true });
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = (platform?: string) => {
    const shareText = `"${message}" - Anonymous Feedback via FeedbackWave`;
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

  return (
    <Card className="mb-3 bg-white border border-zinc-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-zinc-800 mb-2 text-[15px] leading-relaxed">{message}</p>
            <div className="flex items-center justify-between">
              <p className="text-zinc-500 text-xs">{formattedDate}</p>
              <div className="flex items-center space-x-1 relative">
                <Button
                  variant="ghost" 
                  size="icon"
                  className="text-zinc-400 hover:text-zinc-700 hover:bg-zinc-50 h-7 w-7 rounded-full"
                  onClick={() => handleShare()}
                >
                  <Share2 size={15} />
                  <span className="sr-only">Share feedback</span>
                </Button>
                
                {showShareOptions && (
                  <div className="absolute right-0 bottom-8 bg-white shadow-lg rounded-md border border-zinc-200 py-2 z-10 min-w-[180px]">
                    <div className="flex flex-col">
                      <button 
                        onClick={() => handleShare('copy')}
                        className="flex items-center px-3 py-1.5 hover:bg-zinc-50 text-sm text-zinc-700"
                      >
                        <Copy size={15} className="mr-2" /> Copy link
                      </button>
                      <button 
                        onClick={() => handleShare('twitter')}
                        className="flex items-center px-3 py-1.5 hover:bg-zinc-50 text-sm text-zinc-700"
                      >
                        <Twitter size={15} className="mr-2" /> Share on Twitter
                      </button>
                      <button 
                        onClick={() => handleShare('facebook')}
                        className="flex items-center px-3 py-1.5 hover:bg-zinc-50 text-sm text-zinc-700"
                      >
                        <Facebook size={15} className="mr-2" /> Share on Facebook
                      </button>
                      <button 
                        onClick={() => handleShare('linkedin')}
                        className="flex items-center px-3 py-1.5 hover:bg-zinc-50 text-sm text-zinc-700"
                      >
                        <Linkedin size={15} className="mr-2" /> Share on LinkedIn
                      </button>
                    </div>
                  </div>
                )}
                
                <Button
                  variant="ghost" 
                  size="icon"
                  className="text-zinc-400 hover:text-red-500 hover:bg-red-50 h-7 w-7 rounded-full"
                  onClick={() => onDelete(id)}
                >
                  <Trash2 size={15} />
                  <span className="sr-only">Delete feedback</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackEntry;
