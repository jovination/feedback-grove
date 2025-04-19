import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { Trash2, Share2, Twitter, Facebook, Copy, Linkedin, ThumbsUp, ThumbsDown, MoreHorizontal, Download, CheckCircle2, RefreshCw, Paintbrush, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

// Define available themes with more beautiful options
const THEMES = {
  "classic": {
    name: "Classic",
    cardBg: "bg-white",
    border: "border-zinc-100",
    textColor: "text-zinc-800",
    shadow: "shadow-sm hover:shadow-md",
    accent: "blue",
    tagStyle: "rounded-full",
    socialBg: "bg-zinc-50"
  },
  "dark": {
    name: "Dark Mode",
    cardBg: "bg-zinc-900",
    border: "border-zinc-800",
    textColor: "text-zinc-100",
    shadow: "shadow-lg shadow-zinc-900/20",
    accent: "purple",
    tagStyle: "rounded-full",
    socialBg: "bg-zinc-800"
  },
  "gradient": {
    name: "Gradient",
    cardBg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    border: "border-blue-100",
    textColor: "text-zinc-800",
    shadow: "shadow-md shadow-blue-200/30",
    accent: "indigo",
    tagStyle: "rounded-full",
    socialBg: "bg-blue-100/50"
  },
  "minimal": {
    name: "Minimal",
    cardBg: "bg-zinc-50",
    border: "border-none",
    textColor: "text-zinc-700",
    shadow: "shadow-none",
    accent: "zinc",
    tagStyle: "rounded-md",
    socialBg: "bg-zinc-100"
  },
  "vibrant": {
    name: "Vibrant",
    cardBg: "bg-gradient-to-r from-pink-50 to-purple-50",
    border: "border-purple-100",
    textColor: "text-zinc-800",
    shadow: "shadow-md shadow-purple-200/30",
    accent: "purple",
    tagStyle: "rounded-full",
    socialBg: "bg-purple-100/50"
  },
  "elegant": {
    name: "Elegant",
    cardBg: "bg-stone-50",
    border: "border-stone-200",
    textColor: "text-stone-800",
    shadow: "shadow-md shadow-stone-200/30",
    accent: "stone",
    tagStyle: "rounded-md",
    socialBg: "bg-stone-100"
  },
  "nature": {
    name: "Nature",
    cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
    border: "border-green-100",
    textColor: "text-emerald-900",
    shadow: "shadow-md shadow-green-200/30",
    accent: "green",
    tagStyle: "rounded-full",
    socialBg: "bg-green-100/50"
  },
  "ocean": {
    name: "Ocean",
    cardBg: "bg-gradient-to-br from-sky-50 to-cyan-50",
    border: "border-sky-100",
    textColor: "text-sky-900",
    shadow: "shadow-md shadow-sky-200/30",
    accent: "sky",
    tagStyle: "rounded-full",
    socialBg: "bg-sky-100/50"
  },
  "sunset": {
    name: "Sunset",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    border: "border-orange-100",
    textColor: "text-orange-900",
    shadow: "shadow-md shadow-orange-200/30",
    accent: "orange",
    tagStyle: "rounded-full",
    socialBg: "bg-orange-100/50"
  },
  "modern": {
    name: "Modern",
    cardBg: "bg-white",
    border: "border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0",
    textColor: "text-zinc-800",
    shadow: "shadow-md",
    accent: "blue",
    tagStyle: "rounded-sm",
    socialBg: "bg-blue-50"
  }
};

// Define tag colors for different themes
const TAG_COLORS = {
  "blue": {
    read: "text-green-600 bg-green-50",
    rating: "text-amber-600 bg-amber-50",
    template: "text-blue-600 bg-blue-50"
  },
  "purple": {
    read: "text-green-500 bg-green-900/20",
    rating: "text-amber-500 bg-amber-900/20",
    template: "text-purple-400 bg-purple-900/20"
  },
  "indigo": {
    read: "text-green-600 bg-green-100/80",
    rating: "text-amber-600 bg-amber-100/80",
    template: "text-indigo-600 bg-indigo-100/80"
  },
  "zinc": {
    read: "text-green-600 bg-green-50/50",
    rating: "text-amber-600 bg-amber-50/50",
    template: "text-zinc-600 bg-zinc-200/50"
  },
  "stone": {
    read: "text-green-600 bg-green-50/70",
    rating: "text-amber-600 bg-amber-50/70",
    template: "text-stone-600 bg-stone-200/70"
  },
  "green": {
    read: "text-emerald-600 bg-emerald-50/80",
    rating: "text-amber-600 bg-amber-50/80",
    template: "text-green-600 bg-green-100/80"
  },
  "sky": {
    read: "text-green-600 bg-green-50/80",
    rating: "text-amber-600 bg-amber-50/80",
    template: "text-sky-600 bg-sky-100/80"
  },
  "orange": {
    read: "text-green-600 bg-green-50/80",
    rating: "text-amber-700 bg-amber-50/80",
    template: "text-orange-600 bg-orange-100/80" 
  }
};

// Social media icon styles
const SOCIAL_STYLES = {
  "default": {
    twitter: "text-[#1DA1F2] hover:bg-blue-50 dark:hover:bg-blue-900/20",
    facebook: "text-[#4267B2] hover:bg-blue-50 dark:hover:bg-blue-900/20",
    linkedin: "text-[#0077B5] hover:bg-blue-50 dark:hover:bg-blue-900/20",
    instagram: "text-[#E1306C] hover:bg-pink-50 dark:hover:bg-pink-900/20"
  },
  "monochrome": {
    twitter: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    facebook: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    linkedin: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    instagram: "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
  },
  "vibrant": {
    twitter: "text-white bg-[#1DA1F2] hover:bg-[#1a94df]",
    facebook: "text-white bg-[#4267B2] hover:bg-[#3b5998]",
    linkedin: "text-white bg-[#0077B5] hover:bg-[#006699]",
    instagram: "text-white bg-gradient-to-br from-[#E1306C] to-[#C13584] hover:from-[#d12d66] hover:to-[#b3317a]"
  }
};

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
  username: string; // or userId: string
}

const FeedbackEntry = ({ 
  id, 
  message, 
  created_at, 
  is_read,
  rating,
  template,
  theme: initialTheme = "classic",
  templateId,
  meta_data,
  onDelete,
  username, // Add this new prop
}: FeedbackEntryProps) => {
  const exactDate = format(new Date(created_at), "MMM d, yyyy h:mm a");
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>(initialTheme);
  const [socialIconStyle, setSocialIconStyle] = useState<string>("default");
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExportMode, setIsExportMode] = useState(false);
  const [hasLoadedTheme, setHasLoadedTheme] = useState(false);

  // Modify localStorage keys to be user-specific
  const getStorageKey = (key: string) => `user-${username}-${key}-${id}`;
  
  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    const storedLikedState = localStorage.getItem(getStorageKey('liked'));
    if (storedLikedState !== null) {
      setIsLiked(storedLikedState === 'true');
    }

    // Check for saved theme preference with user-specific key
    const storedTheme = localStorage.getItem(getStorageKey('theme'));
    if (storedTheme && THEMES[storedTheme as keyof typeof THEMES]) {
      setActiveTheme(storedTheme);
    } else {
      // If no stored theme, save the initial theme
      localStorage.setItem(getStorageKey('theme'), initialTheme);
    }

    // Check for saved social icon style
    const storedSocialStyle = localStorage.getItem(getStorageKey('social-style'));
    if (storedSocialStyle && SOCIAL_STYLES[storedSocialStyle as keyof typeof SOCIAL_STYLES]) {
      setSocialIconStyle(storedSocialStyle);
    }

    setHasLoadedTheme(true);
  }, [id, initialTheme, username]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (!hasLoadedTheme) return; // Skip saving until initial load is complete

    if (isLiked !== null) {
      localStorage.setItem(getStorageKey('liked'), isLiked.toString());
    } else {
      localStorage.removeItem(getStorageKey('liked'));
    }
    
    localStorage.setItem(getStorageKey('theme'), activeTheme);
    localStorage.setItem(getStorageKey('social-style'), socialIconStyle);
  }, [isLiked, activeTheme, socialIconStyle, id, hasLoadedTheme, username]);

  const handleShare = (platform?: string) => {
    const shareText = `"${message}" - Anonymous Feedback via FeedbackGrove`;
    const shareUrl = `https://feedbackgrove.com/f/${id}`;
    
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
      case 'instagram':
        toast.info("Image copied! You can paste it to your Instagram story");
        handleExportImage(true);
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
        toast.success("Copied to clipboard");
        break;
      default:
        // Do nothing
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
    localStorage.removeItem(getStorageKey('liked'));
    toast.success("Reaction reset");
  };

  const handleThemeChange = (themeKey: string) => {
    if (THEMES[themeKey as keyof typeof THEMES]) {
      setActiveTheme(themeKey);
      localStorage.setItem(getStorageKey('theme'), themeKey);
      toast.success(`Theme changed to ${THEMES[themeKey as keyof typeof THEMES].name}`);
    }
  };

  const handleSocialStyleChange = (styleKey: string) => {
    if (SOCIAL_STYLES[styleKey as keyof typeof SOCIAL_STYLES]) {
      setSocialIconStyle(styleKey);
      toast.success(`Social icon style changed to ${styleKey}`);
    }
  };

  const handleExportImage = async (copyToClipboard = false) => {
    if (!cardRef.current) return;
    
    try {
      // Toggle export mode to show a clean version for capture
      setIsExportMode(true);
      
      // Wait for the state update to render
      setTimeout(async () => {
        try {
          const canvas = await html2canvas(cardRef.current!, {
            scale: 2, // Higher resolution
            backgroundColor: null,
            logging: false,
          });
          
          if (copyToClipboard) {
            // Copy to clipboard for Instagram sharing
            canvas.toBlob(async (blob) => {
              if (!blob) {
                toast.error("Failed to generate image");
                setIsExportMode(false);
                return;
              }
              
              try {
                const item = new ClipboardItem({ 'image/png': blob });
                await navigator.clipboard.write([item]);
                toast.success("Image copied to clipboard for sharing");
              } catch (e) {
                console.error('Clipboard write failed:', e);
                // Fallback to download if clipboard access fails
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.download = `feedbackgrove-${id}-${Date.now()}.png`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
                toast.info("Image downloaded (clipboard access denied)");
              }
              setIsExportMode(false);
            }, 'image/png');
          } else {
            // Download the image
            canvas.toBlob((blob) => {
              if (!blob) {
                toast.error("Failed to generate image");
                setIsExportMode(false);
                return;
              }
              
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.download = `feedbackgrove-${id}-${Date.now()}.png`;
              link.href = url;
              link.click();
              URL.revokeObjectURL(url);
              toast.success("Image downloaded successfully");
              setIsExportMode(false);
            }, 'image/png');
          }
        } catch (error) {
          console.error('Export error:', error);
          toast.error("Failed to export image");
          setIsExportMode(false);
        }
      }, 100);
    } catch (error) {
      console.error('Export setup error:', error);
      toast.error("Failed to prepare export");
      setIsExportMode(false);
    }
  };

  // Get current theme settings
  const currentTheme = THEMES[activeTheme as keyof typeof THEMES] || THEMES.classic;
  const tagColors = TAG_COLORS[currentTheme.accent as keyof typeof TAG_COLORS] || TAG_COLORS.blue;
  const socialStyles = SOCIAL_STYLES[socialIconStyle as keyof typeof SOCIAL_STYLES] || SOCIAL_STYLES.default;

  return (
    <Card 
      ref={cardRef}
      className={`mb-3 ${currentTheme.cardBg} border ${currentTheme.border} rounded-lg ${currentTheme.shadow} transition-all duration-200`}
    >
      <CardContent className={`p-4 ${isExportMode ? 'pb-6' : ''}`}>
        <div className="flex flex-col justify-between items-start">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {is_read && (
                <span className={`inline-flex items-center text-xs ${tagColors.read} px-2 py-1 ${currentTheme.tagStyle}`}>
                  <CheckCircle2 size={12} className="mr-1" />
                  Read
                </span>
              )}
              {rating && (
                <span className={`inline-flex items-center text-xs ${tagColors.rating} px-2 py-1 ${currentTheme.tagStyle}`}>
                  {rating} ★
                </span>
              )}
              {template && (
                <span className={`inline-flex items-center text-xs ${tagColors.template} px-2 py-1 ${currentTheme.tagStyle} truncate max-w-full md:max-w-xs`}>
                  {template}
                </span>
              )}
            </div>
            <p className={`${currentTheme.textColor} mb-3 text-[15px] leading-relaxed break-words`}>{message}</p>
            
            {/* Footer row with all elements aligned on the same line */}
            {!isExportMode && (
              <div className="flex items-center justify-between flex-wrap gap-y-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-2">{exactDate}</span>
                
                <div className="flex items-center ml-auto gap-2">
                  {isLiked !== null ? (
                    <Button
                      variant="ghost"
                      className={`text-xs px-2 py-1 h-auto rounded-full flex items-center ${
                        isLiked ? 'bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30' : 'bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30'
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
                        className="text-zinc-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 h-7 w-7 rounded-full"
                        onClick={() => handleReaction(true)}
                      >
                        <ThumbsUp size={15} />
                        <span className="sr-only">Mark as helpful</span>
                      </Button>
                      <Button
                        variant="ghost" 
                        size="icon"
                        className="text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 h-7 w-7 rounded-full"
                        onClick={() => handleReaction(false)}
                      >
                        <ThumbsDown size={15} />
                        <span className="sr-only">Mark as unhelpful</span>
                      </Button>
                    </div>
                  )}
                  
                  {/* Theme selection button */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost" 
                        size="icon"
                        className="text-zinc-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-7 w-7 rounded-full"
                      >
                        <Paintbrush size={15} />
                        <span className="sr-only">Change theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="p-1.5 rounded-xl border border-zinc-100 shadow-lg backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95 dark:border-zinc-800 max-h-80 overflow-y-auto">
                      <div className="px-3 py-1.5 text-xs font-medium text-zinc-500">Select Theme</div>
                      <div className="grid grid-cols-1 gap-1">
                        {Object.entries(THEMES).map(([key, theme]) => (
                          <DropdownMenuItem 
                            key={key}
                            className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                              activeTheme === key ? 'bg-zinc-100 dark:bg-zinc-800' : ''
                            }`}
                            onClick={() => handleThemeChange(key)}
                          >
                            <div className={`w-4 h-4 rounded-full mr-2 ${theme.cardBg} border ${theme.border}`}></div>
                            {theme.name}
                            {activeTheme === key && (
                              <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                            )}
                          </DropdownMenuItem>
                        ))}
                      </div>
                      
                      <DropdownMenuSeparator className="my-1 h-px bg-zinc-100 dark:bg-zinc-800" />
                      <div className="px-3 py-1.5 text-xs font-medium text-zinc-500">Social Icon Style</div>
                      <div className="grid grid-cols-1 gap-1">
                        {Object.entries(SOCIAL_STYLES).map(([key, _]) => (
                          <DropdownMenuItem 
                            key={key}
                            className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                              socialIconStyle === key ? 'bg-zinc-100 dark:bg-zinc-800' : ''
                            }`}
                            onClick={() => handleSocialStyleChange(key)}
                          >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                            {socialIconStyle === key && (
                              <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                            )}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  {/* Share button with social options */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost" 
                        size="icon"
                        className="text-zinc-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-7 w-7 rounded-full"
                      >
                        <Share2 size={15} />
                        <span className="sr-only">Share feedback</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="p-1.5 rounded-xl border border-zinc-100 shadow-lg backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95 dark:border-zinc-800">
                      <div className="px-3 py-1.5 text-xs font-medium text-zinc-500">Share on</div>
                      <div className="grid grid-cols-1 gap-1">
                        <DropdownMenuItem 
                          className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${socialStyles.twitter}`}
                          onClick={() => handleShare('twitter')}
                        >
                          <Twitter className="mr-2.5 h-4 w-4" /> 
                          <span>Twitter</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${socialStyles.facebook}`}
                          onClick={() => handleShare('facebook')}
                        >
                          <Facebook className="mr-2.5 h-4 w-4" /> 
                          <span>Facebook</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${socialStyles.linkedin}`}
                          onClick={() => handleShare('linkedin')}
                        >
                          <Linkedin className="mr-2.5 h-4 w-4" /> 
                          <span>LinkedIn</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className={`cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${socialStyles.instagram}`}
                          onClick={() => handleShare('instagram')}
                        >
                          <Instagram className="mr-2.5 h-4 w-4" /> 
                          <span>Instagram Story</span>
                        </DropdownMenuItem>
                      </div>
                      
                      <DropdownMenuSeparator className="my-1 h-px bg-zinc-100 dark:bg-zinc-800" />
                      <DropdownMenuItem 
                        className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        onClick={() => handleExportImage()}
                      >
                        <Download className="mr-2.5 h-4 w-4 text-zinc-500" /> 
                        <span>Download as image</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        onClick={() => handleShare('copy')}
                      >
                        <Copy className="mr-2.5 h-4 w-4 text-zinc-500" /> 
                        <span>Copy to clipboard</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  {/* Main menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost" 
                        size="icon"
                        className="text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 h-7 w-7 rounded-full"
                      >
                        <MoreHorizontal size={15} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-1.5 rounded-xl border border-zinc-100 shadow-lg backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95 dark:border-zinc-800">
                      {isLiked !== null && (
                        <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400" onClick={resetReaction}>
                          <RefreshCw className="mr-2.5 h-4 w-4" /> 
                          <span>Reset reaction</span>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="cursor-pointer flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400" onClick={() => onDelete(id)}>
                        <Trash2 className="mr-2.5 h-4 w-4" /> 
                        <span>Delete feedback</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            )}
            
            {/* Branded footer for export mode */}
            {isExportMode && (
              <div className="flex items-center justify-between mt-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-medium text-zinc-600">feedbackgrove.com</span>
                <span className="text-xs text-zinc-400">{exactDate}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackEntry;