
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface EmbedCodeCardProps {
  username: string;
  selectedTemplate: string;
  selectedTheme: string;
}

const EmbedCodeCard = ({ username, selectedTemplate, selectedTheme }: EmbedCodeCardProps) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const baseUrl = window.location.origin;

  const getEmbedCode = (templateName: string, themeName: string) => {
    return `<iframe
  src="${baseUrl}/feedback/${username}?template=${templateName}&theme=${themeName}"
  width="100%"
  height="400"
  style="border:none;border-radius:12px;overflow:hidden;"
  title="FeedbackGrove Widget"
></iframe>`;
  };
  
  const copyToClipboard = () => {
    const code = getEmbedCode(selectedTemplate, selectedTheme);
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast.success("Embed code copied to clipboard!");
    
    setTimeout(() => {
      setCopiedCode(false);
    }, 2000);
  };

  return (
    <Card className="shadow-sm border border-zinc-200 rounded-lg">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium">Embed Code</CardTitle>
        <CardDescription>Copy this code to your website</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4 bg-zinc-50 rounded-lg p-4 relative">
          <pre className="text-xs overflow-x-auto font-mono text-zinc-800 whitespace-pre-wrap">
            {getEmbedCode(selectedTemplate, selectedTheme)}
          </pre>
          <Button
            size="sm"
            className="absolute top-2 right-2 bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200"
            onClick={copyToClipboard}
          >
            {copiedCode ? <Check size={14} /> : <Copy size={14} />}
            <span className="sr-only">Copy embed code</span>
          </Button>
        </div>
        <p className="text-xs text-zinc-500">
          Add this HTML snippet to your website where you want the feedback form to appear.
        </p>
      </CardContent>
    </Card>
  );
};

export default EmbedCodeCard;
