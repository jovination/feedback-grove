import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Star, Heart, ThumbsUp, Award, CheckCircle, Copy, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import PreviewFeedbackWidget from "@/components/PreviewFeedbackWidget";
import EmbedCodeCard from "@/components/widget-templates/EmbedCodeCard";

// Using the shared Template interface from TemplatesLibrary
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

interface ThemeOption {
  value: string;
  label: string;
  description: string;
}

// Component to render different rating options
const RatingPreview = ({ ratingType, color }: { ratingType: string, color: string }) => {
  switch (ratingType) {
    case "stars":
      return (
        <div className="flex space-x-1 justify-center my-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Star key={rating} size={20} className={`text-${color}-500`} fill="currentColor" />
          ))}
        </div>
      );
    case "hearts":
      return (
        <div className="flex space-x-2 justify-center my-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <Heart 
              key={rating} 
              size={20} 
              className={rating <= 3 ? "text-gray-300" : `text-${color}-500`}
              fill={rating <= 3 ? "none" : "currentColor"} 
            />
          ))}
        </div>
      );
    case "thumbs":
      return (
        <div className="flex space-x-6 justify-center my-4">
          <ThumbsUp size={24} className={`text-${color}-500 transform rotate-180`} />
          <ThumbsUp size={24} className="text-gray-400" />
          <ThumbsUp size={24} className={`text-${color}-500`} />
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

// Template Gallery Component
const TemplateGallery = ({ 
  templates, 
  selectedTemplate, 
  onTemplateSelect 
}: { 
  templates: Array<{name: string, description: string}>,
  selectedTemplate: string,
  onTemplateSelect: (template: string) => void
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {templates.map((template) => (
        <Card 
          key={template.name}
          className={`cursor-pointer transition-all ${
            selectedTemplate === template.name 
              ? 'border-2 border-amber-500 ring-2 ring-amber-200' 
              : 'border border-zinc-200 hover:border-amber-200'
          } rounded-xl`}
          onClick={() => onTemplateSelect(template.name)}
        >
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
              selectedTemplate === template.name ? 'bg-amber-100' : 'bg-zinc-100'
            }`}>
              {selectedTemplate === template.name && (
                <CheckCircle className="h-6 w-6 text-amber-500" />
              )}
            </div>
            <h3 className="font-medium text-zinc-900 mb-1 capitalize">{template.name}</h3>
            <p className="text-xs text-zinc-500">{template.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Theme Selector Component
const ThemeSelector = ({ 
  theme, 
  setTheme,
  themeOptions
}: { 
  theme: string, 
  setTheme: (theme: string) => void,
  themeOptions: ThemeOption[]
}) => {
  return (
    <Tabs defaultValue={theme} onValueChange={setTheme} className="w-full">
      <TabsList className="grid grid-cols-4 mb-4">
        {themeOptions.map(option => (
          <TabsTrigger key={option.value} value={option.value} className="capitalize">
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {themeOptions.map(option => (
        <TabsContent key={option.value} value={option.value}>
          <Card className="border-none shadow-none bg-zinc-50 p-4 rounded-xl">
            <CardContent className="p-0">
              <p className="text-sm text-zinc-600">{option.description}</p>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

// Features Sidebar Component
const TemplateFeaturesSidebar = ({ onShowDocs }: { onShowDocs: () => void }) => {
  return (
    <Card className="shadow-sm border border-zinc-200 rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {[
            "Fully responsive on all devices",
            "Customizable colors and branding",
            "Multiple rating types",
            "Easy embedding on any website",
            "Works with any framework"
          ].map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-zinc-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={onShowDocs}
          variant="outline"
          className="w-full mt-6 border-zinc-200 text-zinc-700"
        >
          View Documentation
        </Button>
      </CardContent>
    </Card>
  );
};

const WidgetTemplates = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Theme options
  const themeOptions = [
    { value: "light", label: "Light", description: "Clean white background with subtle shadows and borders" },
    { value: "dark", label: "Dark", description: "Dark theme for better contrast on dark websites" },
    { value: "minimal", label: "Minimal", description: "Ultra-simplified design with minimal styling" },
    { value: "branded", label: "Branded", description: "Match your brand colors and styling" }
  ];
  
  // Template options
  const templateOptions = [
    {
      name: "standard",
      description: "Our classic feedback form with a clean design"
    },
    {
      name: "minimal",
      description: "A simplified form for distraction-free feedback"
    },
    {
      name: "branded",
      description: "Showcase your brand with this customizable template"
    }
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // If no template is selected, redirect to templates library
    if (!searchParams.get('template') && !localStorage.getItem('selectedTemplate')) {
      navigate("/templates-library");
    }
  }, [isAuthenticated, navigate, searchParams]);

  // Get template data from URL params or localStorage
  const [selectedTemplateData, setSelectedTemplateData] = useState<Template | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("standard");
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  const [templateId, setTemplateId] = useState<string>("");
  
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
        setTemplateId(parsedTemplate.id);
      } catch (e) {
        console.error("Error parsing stored template:", e);
      }
    }
    
    // Override with URL params if available
    const templateFromUrl = searchParams.get('template');
    const themeFromUrl = searchParams.get('theme');
    const idFromUrl = searchParams.get('id');
    
    if (templateFromUrl) {
      setSelectedTemplate(templateFromUrl);
    }
    
    if (themeFromUrl) {
      setSelectedTheme(themeFromUrl);
    }
    
    if (idFromUrl) {
      setTemplateId(idFromUrl);
    }
  }, [searchParams]);

  const handleTemplateSelect = (templateName: string) => {
    setSelectedTemplate(templateName);
    
    // Update localStorage when template changes
    if (selectedTemplateData) {
      const updatedTemplate = {
        ...selectedTemplateData,
        templateType: templateName
      };
      localStorage.setItem('selectedTemplate', JSON.stringify(updatedTemplate));
    }
  };
  
  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    
    // Update localStorage when theme changes
    if (selectedTemplateData) {
      const updatedTemplate = {
        ...selectedTemplateData,
        theme: themeName
      };
      localStorage.setItem('selectedTemplate', JSON.stringify(updatedTemplate));
    }
  };
  
  const navigateToPreview = () => {
    navigate(`/feedback/${username}?template=${selectedTemplate}&theme=${selectedTheme}&id=${templateId}`);
  };

  const handleShowDocs = () => {
    window.open('/documentation/widget-api', '_blank');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto"></div>
          <p className="mt-4 text-zinc-600">Loading template editor...</p>
        </div>
      </div>
    );
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
            className="mt-4 md:mt-0 flex items-center gap-2 border-zinc-200 hover:bg-zinc-100 rounded-xl"
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
                        <Award className={`h-5 w-5 text-${selectedTemplateData.color}-600`} />
                      </div>
                      <Badge className={`bg-${selectedTemplateData.color}-100 text-${selectedTemplateData.color}-600 text-xs font-medium px-3 py-1 rounded-full`}>
                        {selectedTemplateData.category}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-4 text-zinc-800">How satisfied are you with our product?</h3>
                      <div className="flex justify-center my-4">
                        {selectedTemplateData.ratingType === "stars" && (
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Star key={rating} size={20} className={`text-${selectedTemplateData.color}-500`} fill="currentColor" />
                            ))}
                          </div>
                        )}
                        {selectedTemplateData.ratingType === "hearts" && (
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Heart key={rating} size={20} className={`text-${selectedTemplateData.color}-500`} fill="currentColor" />
                            ))}
                          </div>
                        )}
                        {selectedTemplateData.ratingType === "thumbs" && (
                          <div className="flex space-x-6">
                            <ThumbsUp size={24} className={`text-${selectedTemplateData.color}-500 transform rotate-180`} />
                            <ThumbsUp size={24} className={`text-${selectedTemplateData.color}-500`} />
                          </div>
                        )}
                        {selectedTemplateData.ratingType === "emojis" && (
                          <div className="flex space-x-3">
                            {["😡", "😕", "😐", "🙂", "😄"].map((emoji, idx) => (
                              <div 
                                key={idx}
                                className={`w-10 h-10 rounded-full border-2 border-${selectedTemplateData.color}-200 flex items-center justify-center text-xl`}
                              >
                                {emoji}
                              </div>
                            ))}
                          </div>
                        )}
                        {selectedTemplateData.ratingType === "numbers" && (
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <div 
                                key={rating}
                                className={`w-10 h-10 rounded-full border-2 border-${selectedTemplateData.color}-200 flex items-center justify-center text-sm font-medium text-${selectedTemplateData.color}-600`}
                              >
                                {rating}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600 mt-4">{selectedTemplateData.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-zinc-50 p-3 rounded-lg">
                      <p className="text-zinc-500">Questions</p>
                      <p className="font-medium">{selectedTemplateData.questions}</p>
                    </div>
                    <div className="bg-zinc-50 p-3 rounded-lg">
                      <p className="text-zinc-500">Estimated Time</p>
                      <p className="font-medium">{selectedTemplateData.estimatedTime} min</p>
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
                  templates={templateOptions}
                  selectedTemplate={selectedTemplate}
                  onTemplateSelect={handleTemplateSelect}
                />
                
                <div className="bg-zinc-50 p-6 rounded-xl">
                  <h3 className="text-base font-medium mb-4">Choose a Theme</h3>
                  <ThemeSelector
                    theme={selectedTheme}
                    setTheme={handleThemeChange}
                    themeOptions={themeOptions}
                  />
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button 
                    onClick={navigateToPreview}
                    className="bg-amber-500 text-white hover:bg-amber-600 flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    <span>Preview Template</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <EmbedCodeCard 
              username={username} 
              selectedTemplate={selectedTemplate} 
              selectedTheme={selectedTheme}
              id={templateId} 
            />
          </div>
          
          <div>
            <TemplateFeaturesSidebar onShowDocs={handleShowDocs} />
            
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
                    <div>
                      <p className="text-sm font-medium text-zinc-700">Template ID</p>
                      <p className="text-sm text-zinc-600">{templateId}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                    onClick={() => navigate(`/template-editor/${templateId}`)}
                  >
                    Advanced Customization
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {/* Add the preview widget */}
      {selectedTemplateData && (
        <PreviewFeedbackWidget
          template={selectedTemplate}
          theme={selectedTheme}
          ratingType={selectedTemplateData.ratingType}
          color={selectedTemplateData.color}
          templateName={selectedTemplateData.name}
        />
      )}
    </div>
  );
};

export default WidgetTemplates;