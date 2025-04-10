
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Copy, Code, ExternalLink, Globe } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import EmbedCodePlatforms from "./EmbedCodePlatforms";

interface EmbedCodeGeneratorProps {
  username: string;
}

const EmbedCodeGenerator = ({ username }: EmbedCodeGeneratorProps) => {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [template, setTemplate] = useState<"standard" | "minimal" | "branded" | "popup">("standard");
  const [showPlatformCodes, setShowPlatformCodes] = useState(false);
  const navigate = useNavigate();
  
  const baseUrl = window.location.origin;
  
  const iframeCode = `<iframe
  src="${baseUrl}/feedback/${username}?theme=${theme}&template=${template}"
  width="100%"
  height="400"
  style="border:none;border-radius:12px;overflow:hidden;"
  title="FeedbackGrove Widget"
></iframe>`;

  const popupCode = `<script>
  (function() {
    var script = document.createElement('script');
    script.src = "${baseUrl}/feedback-popup.js";
    script.setAttribute('data-username', "${username}");
    script.setAttribute('data-theme', "${theme}");
    script.setAttribute('data-template', "${template}");
    document.head.appendChild(script);
  })();
</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(template === "popup" ? popupCode : iframeCode);
    setCopied(true);
    toast.success("Embed code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleExploreTemplates = () => {
    navigate('/widget-templates');
  };

  return (
    <Card className="border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader className="pb-2 border-b border-zinc-100">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Code size={18} className="text-amber-500" />
          Embed on your website
        </CardTitle>
        <CardDescription>
          Customize the widget and get embed code
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="flex flex-col space-y-3 mb-4">
            <div>
              <p className="text-sm font-medium text-zinc-700 mb-1">Widget Type</p>
              <Tabs
                value={template}
                onValueChange={(value) => setTemplate(value as "standard" | "minimal" | "branded" | "popup")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 h-9">
                  <TabsTrigger value="standard" className="text-xs">Standard</TabsTrigger>
                  <TabsTrigger value="minimal" className="text-xs">Minimal</TabsTrigger>
                  <TabsTrigger value="branded" className="text-xs">Branded</TabsTrigger>
                  <TabsTrigger value="popup" className="text-xs">Popup</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div>
              <p className="text-sm font-medium text-zinc-700 mb-1">Appearance</p>
              <Tabs
                value={theme}
                onValueChange={(value) => setTheme(value as "light" | "dark")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 h-9">
                  <TabsTrigger value="light" className="text-xs">Light</TabsTrigger>
                  <TabsTrigger value="dark" className="text-xs">Dark</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="relative">
            <pre className="bg-zinc-50 p-3 rounded-lg text-sm overflow-x-auto border border-zinc-200">
              <code className="text-zinc-800 text-xs">{template === "popup" ? popupCode : iframeCode}</code>
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
        
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-zinc-500">
            Copy and paste this code into your website to embed the feedback form.
          </p>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPlatformCodes(!showPlatformCodes)}
              className="whitespace-nowrap text-xs flex items-center gap-1"
            >
              <Globe size={14} /> {showPlatformCodes ? "Hide Platforms" : "Show More Platforms"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExploreTemplates}
              className="whitespace-nowrap text-xs flex items-center gap-1"
            >
              <ExternalLink size={12} /> More Options
            </Button>
          </div>
        </div>
        
        {showPlatformCodes && (
          <EmbedCodePlatforms 
            username={username} 
            theme={theme} 
            template={template} 
          />
        )}
      </CardContent>
    </Card>
  );
};

export default EmbedCodeGenerator;
