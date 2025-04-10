import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Star, Heart, ThumbsUp, X } from "lucide-react";
import TemplateGallery from "@/components/widget-templates/TemplateGallery";
import TemplatePreviewCard from "@/components/widget-templates/TemplatePreviewCard";
import EmbedCodeCard from "@/components/widget-templates/EmbedCodeCard";
import TemplateFeaturesSidebar from "@/components/widget-templates/TemplateFeaturesSidebar";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  questions: number;
  estimatedTime: number;
  imageUrl: string;
  isPremium: boolean;
  color: "green" | "blue" | "amber" | "purple" | "red" | "indigo";
  ratingType: "numbers" | "stars" | "emojis" | "thumbs" | "hearts";
  templateType: "standard" | "minimal" | "branded";
  theme: "light" | "dark" | "minimal" | "branded";
}

interface TemplateProps {
  name: string;
  description: string;
  preview: React.ReactNode;
  theme: "light" | "dark" | "minimal" | "branded";
}

// Component to render different rating options
const RatingPreview = ({ ratingType, color }: { ratingType: string, color: string }) => {
  switch (ratingType) {
    case "stars":
      return (
        <div className="flex space-x-1 justify-center my-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className={`text-${color}-500`}>
              <Star size={20} fill="currentColor" />
            </div>
          ))}
        </div>
      );
    case "hearts":
      return (
        <div className="flex space-x-2 justify-center my-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className={rating <= 3 ? "text-gray-300" : `text-${color}-500`}>
              <Heart size={20} fill={rating <= 3 ? "none" : "currentColor"} />
            </div>
          ))}
        </div>
      );
    case "thumbs":
      return (
        <div className="flex space-x-6 justify-center my-4">
          <div className={`text-${color}-500 transform rotate-180`}>
            <ThumbsUp size={24} />
          </div>
          <div className={`text-gray-400`}>
            <ThumbsUp size={24} />
          </div>
          <div className={`text-${color}-500`}>
            <ThumbsUp size={24} />
          </div>
        </div>
      );
    case "emojis":
      return (
        <div className="flex space-x-2 justify-center my-4">
          {["😡", "😕", "😐", "🙂", "😄"].map((emoji, idx) => (
            <div key={idx} className={`w-8 h-8 rounded-full border-2 border-${color}-200 flex items-center justify-center text-lg`}>
              {emoji}
            </div>
          ))}
        </div>
      );
    default: // numbers
      return (
        <div className="flex space-x-2 justify-center my-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className={`w-8 h-8 rounded-full border-2 border-${color}-200 flex items-center justify-center text-xs font-medium text-${color}-600`}>
              {rating}
            </div>
          ))}
        </div>
      );
  }
};

const WidgetTemplates = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Get template data from URL params or localStorage
  const [selectedTemplateData, setSelectedTemplateData] = useState<Template | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("standard");
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  
  const username = user?.username || "username";

  useEffect(() => {
    // Try to get template from localStorage first
    const storedTemplate = localStorage.getItem('selectedTemplate');
    if (storedTemplate) {
      try {
        const parsedTemplate = JSON.parse(storedTemplate);
        setSelectedTemplateData(parsedTemplate);
        setSelectedTemplate(parsedTemplate.templateType);
        setSelectedTheme(parsedTemplate.theme);
      } catch (e) {
        console.error("Error parsing stored template:", e);
      }
    }
    
    // Override with URL params if available
    const templateFromUrl = searchParams.get('template');
    const themeFromUrl = searchParams.get('theme');
    
    if (templateFromUrl) {
      setSelectedTemplate(templateFromUrl);
    }
    
    if (themeFromUrl) {
      setSelectedTheme(themeFromUrl);
    }
  }, [searchParams]);

  // Template data
  const templates: TemplateProps[] = [
    {
      name: "standard",
      description: "Our classic feedback form with a clean design",
      preview: null,
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

  if (isAuthenticated) {
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
            <p className="text-zinc-500 text-sm mt-1">
              Customize how your feedback form looks on your website
              {selectedTemplateData && <span className="ml-1">- {selectedTemplateData.name}</span>}
            </p>
          </div>
          <Button 
            onClick={() => navigate("/templates-library")}
            variant="outline"
            className="mt-4 md:mt-0 flex items-center gap-2 border-zinc-200 rounded-xl"
          >
            <ArrowRight size={14} className="rotate-180" />
            <span>Back to Templates</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {selectedTemplateData && (
              <Card className="shadow-sm border border-zinc-200 rounded-xl mb-6 overflow-hidden">
                <CardHeader className="pb-2 border-b border-zinc-100">
                  <CardTitle className="text-lg font-medium">Selected Template</CardTitle>
                  <CardDescription>You selected: {selectedTemplateData.name}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className={`bg-${selectedTemplateData.color}-50 p-6 rounded-xl mb-6`}>
                    <div className="flex justify-between items-center mb-5">
                      <div className={`bg-${selectedTemplateData.color}-100 rounded-full p-3`}>
                        <X className={`h-5 w-5 text-${selectedTemplateData.color}-600`} />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-4 text-zinc-800">How satisfied are you with our product?</h3>
                      <RatingPreview 
                        ratingType={selectedTemplateData.ratingType} 
                        color={selectedTemplateData.color} 
                      />
                      <p className="text-sm text-zinc-600 mt-4">{selectedTemplateData.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <Card className="shadow-sm border border-zinc-200 rounded-xl mb-6">
              <CardHeader className="pb-2 border-b border-zinc-100">
                <CardTitle className="text-lg font-medium">Choose a Template Style</CardTitle>
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
            
            {selectedTemplateData && (
              <Card className="mt-6 shadow-sm border border-zinc-200 rounded-xl">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium">Template Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-zinc-700">Category</p>
                      <p className="text-sm text-zinc-600">{selectedTemplateData.category}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-700">Questions</p>
                      <p className="text-sm text-zinc-600">{selectedTemplateData.questions} questions</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-700">Estimated Time</p>
                      <p className="text-sm text-zinc-600">{selectedTemplateData.estimatedTime} min to complete</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-700">Rating Type</p>
                      <p className="text-sm text-zinc-600 capitalize">{selectedTemplateData.ratingType}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetTemplates;