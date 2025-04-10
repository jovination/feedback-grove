
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TemplateGallery from "@/components/widget-templates/TemplateGallery";
import TemplatePreviewCard from "@/components/widget-templates/TemplatePreviewCard";
import EmbedCodeCard from "@/components/widget-templates/EmbedCodeCard";
import TemplateFeaturesSidebar from "@/components/widget-templates/TemplateFeaturesSidebar";

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
  
  const username = user?.username || "username";

  // Template data
  const templates: TemplateProps[] = [
    {
      name: "standard",
      description: "Our classic feedback form with a clean design",
      preview: null, // We don't need this anymore as we use TemplatePreview component
      theme: "light" as const,
    },
    {
      name: "minimal",
      description: "A simplified form for distraction-free feedback",
      preview: null,
      theme: "light" as const,
    },
    {
      name: "branded",
      description: "Showcase your brand with this customizable template",
      preview: null,
      theme: "light" as const,
    }
  ];
  
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
                <TemplateGallery 
                  templates={templates}
                  selectedTemplate={selectedTemplate}
                  selectedTheme={selectedTheme}
                  onTemplateSelect={handleTemplateSelect}
                />
                
                <TemplatePreviewCard
                  selectedTemplate={selectedTemplate}
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                  navigateToPreview={navigateToPreview}
                />
              </CardContent>
            </Card>
            
            <EmbedCodeCard 
              username={username} 
              selectedTemplate={selectedTemplate} 
              selectedTheme={selectedTheme} 
            />
          </div>
          
          <div>
            <TemplateFeaturesSidebar onShowDocs={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetTemplates;
