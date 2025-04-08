
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy, Code } from "lucide-react";
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
    <Card className="border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Code size={18} className="text-amber-500" />
          Embed on your website
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-3">
            <Button
              type="button"
              variant={theme === "light" ? "default" : "outline"}
              className={`px-3 py-1 h-9 ${theme === "light" ? "bg-black text-white" : "text-zinc-700"}`}
              onClick={() => setTheme("light")}
            >
              Light
            </Button>
            <Button
              type="button"
              variant={theme === "dark" ? "default" : "outline"}
              className={`px-3 py-1 h-9 ${theme === "dark" ? "bg-black text-white" : "text-zinc-700"}`}
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>
          </div>
          
          <div className="relative">
            <pre className="bg-zinc-50 p-3 rounded-lg text-sm overflow-x-auto border border-zinc-200">
              <code className="text-zinc-800 text-xs">{iframeCode}</code>
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
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-zinc-500">
            Copy and paste this code into your website to embed the feedback form.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmbedCodeGenerator;
