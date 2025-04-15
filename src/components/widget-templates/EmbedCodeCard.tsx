import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, Link, MessageSquare } from "lucide-react";
import { toast } from "sonner";

interface EmbedCodeCardProps {
  username: string;
  selectedTemplate: string;
  selectedTheme: string;
  id: string;
}

const EmbedCodeCard = ({ username, selectedTemplate, selectedTheme, id }: EmbedCodeCardProps) => {
  const [copied, setCopied] = useState(false);
  const [embedType, setEmbedType] = useState<"popup" | "link">("popup");
  
  const baseUrl = window.location.origin;
  const feedbackUrl = `${baseUrl}/feedback/${username}?template=${selectedTemplate}&theme=${selectedTheme}&id=${id}`;
  
  const getEmbedCode = () => {
    if (embedType === "popup") {
      return `<script>
  (function() {
    var script = document.createElement('script');
    script.src = "${baseUrl}/feedback-popup.js";
    script.setAttribute('data-username', "${username}");
    script.setAttribute('data-theme', "${selectedTheme}");
    script.setAttribute('data-template', "${selectedTemplate}");
    script.setAttribute('data-id', "${id}");
    document.head.appendChild(script);
  })();
</script>`;
    } else {
      return feedbackUrl;
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getEmbedCode());
    setCopied(true);
    toast.success("Code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card className="shadow-sm border border-zinc-200 rounded-xl mb-6">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium">Share Your Feedback Widget</CardTitle>
        <CardDescription>Choose how you want to share your feedback form</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-4 mb-6">
          <Button
            variant={embedType === "popup" ? "default" : "outline"}
            className="flex-1"
            onClick={() => setEmbedType("popup")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Popup Widget
          </Button>
          <Button
            variant={embedType === "link" ? "default" : "outline"}
            className="flex-1"
            onClick={() => setEmbedType("link")}
          >
            <Link className="w-4 h-4 mr-2" />
            Share Link
          </Button>
        </div>
        
        <div className="bg-zinc-900 rounded-xl p-4 font-mono text-xs text-white overflow-x-auto">
          <pre>{getEmbedCode()}</pre>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between px-6 pb-6 pt-0">
        <Button 
          variant="outline" 
          className="border-zinc-200 text-zinc-700 flex items-center gap-2"
          onClick={handleCopyCode}
        >
          <Copy size={14} />
          <span>{copied ? "Copied!" : "Copy Code"}</span>
        </Button>
        <Button 
          variant="outline" 
          className="border-zinc-200 text-zinc-700 flex items-center gap-2"
          onClick={() => window.open(feedbackUrl, '_blank')}
        >
          <ExternalLink size={14} />
          <span>Preview Widget</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmbedCodeCard;
