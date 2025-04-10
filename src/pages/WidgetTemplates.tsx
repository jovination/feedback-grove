
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Copy, Check, Eye, Code, MessageSquare, Palette, Layout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface TemplateProps {
  name: string;
  description: string;
  preview: React.ReactNode;
  theme: "light" | "dark" | "minimal" | "branded";
}

const WidgetTemplates = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string>("standard");
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  const [copiedCode, setCopiedCode] = useState(false);
  
  const baseUrl = window.location.origin;
  const username = user?.username || "username";

  // Template preview components
  const StandardTemplate = ({ theme }: { theme: string }) => (
    <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}>
      <div className="flex items-center mb-3">
        <MessageSquare size={18} className={theme === "dark" ? "text-amber-400" : "text-amber-500"} />
        <span className={`ml-2 font-medium ${theme === "dark" ? "text-zinc-100" : "text-zinc-800"}`}>
          Send Feedback
        </span>
      </div>
      <textarea
        className={`w-full p-2 rounded-md text-sm mb-3 ${
          theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
        }`}
        placeholder="Share your thoughts anonymously..."
        rows={3}
        readOnly
      />
      <Button
        className={`w-full ${
          theme === "dark" ? "bg-amber-500 hover:bg-amber-600" : "bg-black hover:bg-zinc-800"
        }`}
        size="sm"
      >
        Submit Anonymous Feedback
      </Button>
    </div>
  );

  const MinimalTemplate = ({ theme }: { theme: string }) => (
    <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}>
      <textarea
        className={`w-full p-2 rounded-md text-sm mb-2 ${
          theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
        }`}
        placeholder="Share feedback anonymously..."
        rows={2}
        readOnly
      />
      <div className="flex justify-end">
        <Button
          className={`${
            theme === "dark" ? "bg-zinc-800 hover:bg-zinc-700" : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
          }`}
          size="sm"
          variant="outline"
        >
          Send
        </Button>
      </div>
    </div>
  );

  const BrandedTemplate = ({ theme }: { theme: string }) => (
    <div className={`p-4 rounded-lg border ${
      theme === "dark" 
        ? "bg-zinc-900 text-white border-amber-500" 
        : "bg-white border-amber-400"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`font-medium ${theme === "dark" ? "text-amber-400" : "text-amber-500"}`}>
          FeedbackGrove
        </span>
        <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
      </div>
      <textarea
        className={`w-full p-2 rounded-md text-sm mb-2 ${
          theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
        }`}
        placeholder="What's on your mind? Share anonymously..."
        rows={2}
        readOnly
      />
      <Button
        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white"
        size="sm"
      >
        Submit Feedback
      </Button>
    </div>
  );

  // Template data
  const templates: TemplateProps[] = [
    {
      name: "standard",
      description: "Our classic feedback form with a clean design",
      preview: <StandardTemplate theme={selectedTheme} />,
      theme: "light" as const,
    },
    {
      name: "minimal",
      description: "A simplified form for distraction-free feedback",
      preview: <MinimalTemplate theme={selectedTheme} />,
      theme: "light" as const,
    },
    {
      name: "branded",
      description: "Showcase your brand with this customizable template",
      preview: <BrandedTemplate theme={selectedTheme} />,
      theme: "light" as const,
    }
  ];

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

  const handleTemplateSelect = (templateName: string) => {
    setSelectedTemplate(templateName);
  };
  
  const navigateToPreview = () => {
    navigate(`/feedback/${username}?template=${selectedTemplate}&theme=${selectedTheme}`);
  };

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-inter">
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Widget Templates</h1>
            <p className="text-zinc-500 text-sm mt-1">Customize how your feedback form looks on your website</p>
          </div>
          <Button 
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="mt-4 md:mt-0 flex items-center gap-2 border-zinc-200"
          >
            <ArrowRight size={14} className="rotate-180" />
            <span>Back to Dashboard</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
              <CardHeader className="pb-2 border-b border-zinc-100">
                <CardTitle className="text-lg font-medium">Choose a Template</CardTitle>
                <CardDescription>Select the layout that works best for your needs</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {templates.map((template) => (
                    <motion.div
                      key={template.name}
                      className={`cursor-pointer rounded-lg overflow-hidden border ${
                        selectedTemplate === template.name
                          ? "border-amber-500 ring-2 ring-amber-200"
                          : "border-zinc-200 hover:border-zinc-300"
                      }`}
                      whileHover={{ y: -2 }}
                      onClick={() => handleTemplateSelect(template.name)}
                    >
                      <div className="bg-zinc-100 p-2 h-36 flex items-center justify-center">
                        <div className="w-full transform scale-75">
                          {React.cloneElement(template.preview as React.ReactElement, { 
                            theme: selectedTheme 
                          })}
                        </div>
                      </div>
                      <div className="p-3 bg-white">
                        <p className="font-medium text-zinc-800 capitalize">
                          {template.name}
                        </p>
                        <p className="text-xs text-zinc-500">{template.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h3 className="font-medium text-zinc-800">Preview</h3>
                    <div className="mt-2 sm:mt-0">
                      <Tabs
                        defaultValue="light"
                        value={selectedTheme}
                        onValueChange={setSelectedTheme}
                        className="w-full"
                      >
                        <TabsList className="bg-zinc-100 p-0.5">
                          <TabsTrigger
                            value="light"
                            className="text-xs py-1"
                          >
                            Light
                          </TabsTrigger>
                          <TabsTrigger
                            value="dark"
                            className="text-xs py-1"
                          >
                            Dark
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-zinc-200 p-4">
                    {templates.find(t => t.name === selectedTemplate)?.preview}
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="outline"
                      className="mr-2 text-sm"
                      onClick={navigateToPreview}
                      size="sm"
                    >
                      <Eye size={14} className="mr-1" /> Full Preview
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
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
          </div>
          
          <div>
            <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
              <CardHeader className="pb-2 border-b border-zinc-100">
                <CardTitle className="text-sm font-medium">Template Features</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs">Feature</TableHead>
                      <TableHead className="text-xs">Availability</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="text-xs flex items-center gap-2">
                        <Palette size={14} /> Theming
                      </TableCell>
                      <TableCell className="text-xs">All templates</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-xs flex items-center gap-2">
                        <Layout size={14} /> Responsive
                      </TableCell>
                      <TableCell className="text-xs">All templates</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-xs flex items-center gap-2">
                        <Code size={14} /> Custom CSS
                      </TableCell>
                      <TableCell className="text-xs">Premium only</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm border border-zinc-200 rounded-lg">
              <CardHeader className="pb-2 border-b border-zinc-100">
                <CardTitle className="text-sm font-medium">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <p className="text-zinc-600 mb-4">
                  Having trouble with your widget? Check our documentation for detailed integration guides.
                </p>
                <Button variant="outline" className="w-full text-sm" size="sm">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetTemplates;
