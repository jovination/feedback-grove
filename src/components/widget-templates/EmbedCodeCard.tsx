
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface EmbedCodeCardProps {
  username: string;
  selectedTemplate: string;
  selectedTheme: string;
}

const EmbedCodeCard = ({ username, selectedTemplate, selectedTheme }: EmbedCodeCardProps) => {
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<string>("html");
  
  const getEmbedCode = () => {
    const baseUrl = `${window.location.origin}/feedback/${username}`;
    const params = `template=${selectedTemplate}&theme=${selectedTheme}`;
    const fullUrl = `${baseUrl}?${params}`;
    
    switch(platform) {
      case "bubble":
        return `// Bubble.io Integration
// 1. Add an HTML element to your page
// 2. In the HTML element's properties, paste this code:
<div id="feedbackgrove-widget"></div>
<script src="${window.location.origin}/feedback-popup.js" 
  data-feedback-url="${fullUrl}" 
  data-position="bottom-right">
</script>`;
      
      case "wix":
        return `// Wix Integration
// 1. Add a Custom Element to your Wix site
// 2. In the Custom Element's HTML/JS panel, paste this code:
<div id="feedbackgrove-widget"></div>
<script src="${window.location.origin}/feedback-popup.js" 
  data-feedback-url="${fullUrl}" 
  data-position="bottom-right">
</script>
// 3. In the Wix Editor, go to Settings > Custom Code and add the script there`;
      
      case "framer":
        return `// Framer Integration
// 1. Add a Code component to your Framer project
// 2. Paste this code in the component:
export function FeedbackWidget() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "${window.location.origin}/feedback-popup.js";
    script.setAttribute('data-feedback-url', "${fullUrl}");
    script.setAttribute('data-position', "bottom-right");
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return <div id="feedbackgrove-widget"></div>;
}`;
      
      case "webflow":
        return `// Webflow Integration
// 1. Add a Custom Code element to your Webflow project
// 2. Paste this code:
<div id="feedbackgrove-widget"></div>
<script src="${window.location.origin}/feedback-popup.js" 
  data-feedback-url="${fullUrl}" 
  data-position="bottom-right">
</script>
// 3. You can also add this to the Custom Code section in your site settings`;
      
      default: // html
        return `<!-- Add this code to your website -->
<div id="feedbackgrove-widget"></div>
<script src="${window.location.origin}/feedback-popup.js" 
  data-feedback-url="${fullUrl}" 
  data-position="bottom-right">
</script>`;
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getEmbedCode());
    setCopied(true);
    toast.success("Embed code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  
  return (
    <Card className="shadow-sm border border-zinc-200 rounded-xl">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium">Embed Your Widget</CardTitle>
        <CardDescription>Add the feedback form to your website</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="html" value={platform} onValueChange={setPlatform} className="mb-4">
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="bubble">Bubble</TabsTrigger>
            <TabsTrigger value="wix">Wix</TabsTrigger>
            <TabsTrigger value="framer">Framer</TabsTrigger>
            <TabsTrigger value="webflow">Webflow</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-zinc-200 text-sm font-mono whitespace-pre-wrap">
            {getEmbedCode()}
          </pre>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <CheckCircle size={16} className="text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Code</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbedCodeCard;
