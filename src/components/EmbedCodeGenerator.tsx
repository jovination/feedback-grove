
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface EmbedCodeGeneratorProps {
  username: string;
}

const EmbedCodeGenerator = ({ username }: EmbedCodeGeneratorProps) => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  const baseUrl = window.location.origin;
  
  const iframeCode = `<iframe
  src="${baseUrl}/feedback/${username}?theme=${theme}"
  width="100%"
  height="400"
  style="border:none;border-radius:12px;overflow:hidden;"
  title="FeedbackWave Widget"
></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(iframeCode);
    setCopied(true);
    toast.success("Embed code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Card className="border border-gray-200 rounded-xl shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Embed on your website</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center space-x-4 mb-3">
            <Button
              type="button"
              variant={theme === "light" ? "default" : "outline"}
              className="w-1/2"
              onClick={() => setTheme("light")}
            >
              Light
            </Button>
            <Button
              type="button"
              variant={theme === "dark" ? "default" : "outline"}
              className="w-1/2"
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>
          </div>
          
          <div className="relative">
            <pre className="bg-gray-50 p-3 rounded-lg text-sm overflow-x-auto">
              <code>{iframeCode}</code>
            </pre>
            <Button
              type="button"
              size="sm"
              className="absolute top-2 right-2"
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="sr-only">Copy embed code</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Copy and paste this code into your website to embed the feedback form.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbedCodeGenerator;
