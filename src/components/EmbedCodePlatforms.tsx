
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, Code } from "lucide-react";
import { toast } from "sonner";

interface EmbedCodePlatformsProps {
  username: string;
  template: string;
  theme: string;
}

const EmbedCodePlatforms = ({ username, template, theme }: EmbedCodePlatformsProps) => {
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<"generic" | "webflow" | "wix" | "bubble" | "framer">("generic");
  
  const baseUrl = window.location.origin;
  
  const embedCodes = {
    generic: `<iframe
  src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}"
  width="100%" 
  height="400" 
  style="border:none;border-radius:12px;overflow:hidden;" 
  title="FeedbackGrove Widget"
></iframe>`,
    webflow: `<div class="feedback-widget-container">
  <iframe 
    src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}" 
    width="100%" height="400" style="border:none;border-radius:12px;overflow:hidden;"
    title="FeedbackGrove Widget">
  </iframe>
</div>

<script>
  // Webflow embed script 
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.feedback-widget-container');
    // Initialize widget (Webflow-specific)
    if (container) {
      console.log('FeedbackGrove widget loaded in Webflow');
    }
  });
</script>`,
    wix: `<!-- Add this HTML embed element to your Wix site -->
<html>
  <body>
    <iframe 
      src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}" 
      width="100%" height="400" style="border:none;border-radius:12px;overflow:hidden;"
      title="FeedbackGrove Widget">
    </iframe>
    
    <script>
      // Wix-specific initialization
      window.addEventListener('message', function(event) {
        if (event.data === 'feedbackSubmitted') {
          console.log('Feedback submitted in Wix');
        }
      });
    </script>
  </body>
</html>`,
    bubble: `<!-- For Bubble.io -->
<iframe 
  src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}" 
  width="100%" height="400" style="border:none;border-radius:12px;overflow:hidden;"
  title="FeedbackGrove Widget">
</iframe>

/* In Bubble, add this to your page's JavaScript */
function handleFeedbackSubmission() {
  // You can trigger a Bubble workflow here
  console.log('Feedback submitted in Bubble');
}`,
    framer: `// Add this code to your Framer project
import { useEffect } from "react"

export function FeedbackWidget() {
  useEffect(() => {
    // Framer-specific initialization code
    console.log("FeedbackGrove widget loaded in Framer")
  }, [])

  return (
    <iframe
      src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}"
      width="100%"
      height="400"
      style={{
        border: "none",
        borderRadius: "12px",
        overflow: "hidden"
      }}
      title="FeedbackGrove Widget"
    />
  )
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCodes[platform]);
    setCopied(true);
    toast.success("Embed code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card className="border border-zinc-200 rounded-xl shadow-sm mt-6">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Code size={18} className="text-amber-500" />
          Platform-specific embed codes
        </CardTitle>
        <CardDescription>
          Choose the platform where you want to embed your feedback widget
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="generic" value={platform} onValueChange={(value) => setPlatform(value as any)} className="w-full">
          <TabsList className="grid grid-cols-5 h-9">
            <TabsTrigger value="generic" className="text-xs">Generic HTML</TabsTrigger>
            <TabsTrigger value="webflow" className="text-xs">Webflow</TabsTrigger>
            <TabsTrigger value="wix" className="text-xs">Wix</TabsTrigger>
            <TabsTrigger value="bubble" className="text-xs">Bubble</TabsTrigger>
            <TabsTrigger value="framer" className="text-xs">Framer</TabsTrigger>
          </TabsList>
          
          {Object.entries(embedCodes).map(([key, code]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <div className="relative">
                <pre className="bg-zinc-50 p-3 rounded-lg text-sm overflow-x-auto border border-zinc-200 max-h-64">
                  <code className="text-zinc-800 text-xs whitespace-pre-wrap">{code}</code>
                </pre>
                <Button
                  type="button"
                  size="sm"
                  className="absolute top-2 right-2 bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200"
                  onClick={handleCopy}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span className="sr-only">Copy embed code</span>
                </Button>
              </div>
              
              <div className="mt-3 text-sm text-zinc-500">
                {platform === "generic" && "Standard HTML embed code that works on most platforms."}
                {platform === "webflow" && "Optimized for Webflow sites with proper initialization."}
                {platform === "wix" && "Specifically formatted for Wix's HTML embed element."}
                {platform === "bubble" && "Compatible with Bubble.io's HTML element and workflows."}
                {platform === "framer" && "React component code for Framer projects."}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EmbedCodePlatforms;
