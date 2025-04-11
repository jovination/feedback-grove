
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Search, Star, Heart, ThumbsUp, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Expanded Template interface to match WidgetTemplates page needs
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

interface TemplatesLibraryProps {
  embedded?: boolean;
}

const TemplatesLibrary = ({ embedded = false }: TemplatesLibraryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const templates: Template[] = [
    {
      id: "product-satisfaction",
      name: "Measure product satisfaction",
      description: "Gauge how satisfied users are with your product",
      category: "Product",
      questions: 7,
      estimatedTime: 2,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: false,
      color: "green",
      ratingType: "numbers",
      templateType: "standard",
      theme: "light"
    },
    {
      id: "customer-satisfaction",
      name: "Customer satisfaction survey",
      description: "Collect detailed feedback on customer experience",
      category: "Customer",
      questions: 4,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: false,
      color: "blue",
      ratingType: "stars",
      templateType: "minimal",
      theme: "dark"
    },
    {
      id: "csat",
      name: "Customer Satisfaction Survey (CSAT)",
      description: "Industry-standard customer satisfaction measurement",
      category: "Customer",
      questions: 4,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: false,
      color: "amber",
      ratingType: "emojis",
      templateType: "branded",
      theme: "branded"
    },
    {
      id: "customer-support",
      name: "Evaluate your customer support",
      description: "Get feedback on your customer support experience",
      category: "Support",
      questions: 6,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: true,
      color: "purple",
      ratingType: "thumbs",
      templateType: "standard",
      theme: "minimal"
    },
    {
      id: "new-users",
      name: "Product satisfaction survey for new users",
      description: "Collect feedback from your newest users",
      category: "Product",
      questions: 5,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: true,
      color: "red",
      ratingType: "hearts",
      templateType: "minimal",
      theme: "light"
    },
    {
      id: "product-survey",
      name: "Product satisfaction survey",
      description: "Detailed product feedback collection",
      category: "Product",
      questions: 6,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: false,
      color: "indigo",
      ratingType: "numbers",
      templateType: "branded",
      theme: "dark"
    },
    {
      id: "customer-needs",
      name: "See if your product meets customers' needs",
      description: "Evaluate how well your product solves customer problems",
      category: "Product",
      questions: 4,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: true,
      color: "green",
      ratingType: "stars",
      templateType: "standard",
      theme: "branded"
    },
    {
      id: "customer-motivation",
      name: "Customers' motivations research",
      description: "Understand what drives your customers",
      category: "Research",
      questions: 5,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: false,
      color: "blue",
      ratingType: "emojis",
      templateType: "minimal",
      theme: "minimal"
    },
    {
      id: "market-fit",
      name: "Measure product - market fit",
      description: "Evaluate how well your product fits the market",
      category: "Product",
      questions: 9,
      estimatedTime: 2,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: true,
      color: "amber",
      ratingType: "thumbs",
      templateType: "branded",
      theme: "light"
    },
    {
      id: "feature-release",
      name: "Feature release evaluation",
      description: "Get feedback on your latest feature release",
      category: "Product",
      questions: 4,
      estimatedTime: 1,
      imageUrl: "/lovable-uploads/f5ef5e2a-4861-4fa5-810b-b2fc6ee7b457.png",
      isPremium: true,
      color: "purple",
      ratingType: "hearts",
      templateType: "standard",
      theme: "dark"
    }
  ];

  const filteredTemplates = templates.filter(template => {
    return (
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleTemplateSelect = (template: Template) => {
    if (template.isPremium && !user?.is_premium) {
      toast.error("This template requires a premium subscription");
      return;
    }
    
    // Store complete template data in local storage
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    
    // Navigate to widget-templates with query parameters
    navigate(`/widget-templates?template=${template.templateType}&theme=${template.theme}&id=${template.id}`);
  };

  const renderRatingOptions = (template: Template) => {
    switch (template.ratingType) {
      case "numbers":
        return (
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className={`w-8 h-8 rounded-full border-2 border-${template.color}-200 flex items-center justify-center text-xs font-medium text-${template.color}-600`}>
                {rating}
              </div>
            ))}
          </div>
        );
      case "stars":
        return (
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className={`text-${template.color}-500`}>
                <Star size={20} fill="currentColor" />
              </div>
            ))}
          </div>
        );
      case "emojis":
        return (
          <div className="flex space-x-2">
            {["😡", "😕", "😐", "🙂", "😄"].map((emoji, idx) => (
              <div key={idx} className={`w-8 h-8 rounded-full border-2 border-${template.color}-200 flex items-center justify-center text-lg`}>
                {emoji}
              </div>
            ))}
          </div>
        );
      case "thumbs":
        return (
          <div className="flex space-x-6">
            <div className={`text-${template.color}-500 transform rotate-180`}>
              <ThumbsUp size={24} />
            </div>
            <div className={`text-gray-400`}>
              <ThumbsUp size={24} />
            </div>
            <div className={`text-${template.color}-500`}>
              <ThumbsUp size={24} />
            </div>
          </div>
        );
      case "hearts":
        return (
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <div key={rating} className={rating <= 3 ? "text-gray-300" : `text-${template.color}-500`}>
                <Heart size={20} fill={rating <= 3 ? "none" : "currentColor"} />
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${!embedded ? "min-h-screen bg-white font-inter text-black" : ""}`}>
      {!embedded && <Navbar />}
      
      <div className={`${embedded ? "" : "max-w-screen-lg mx-auto px-4 sm:px-6 py-12"}`}>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-4">
            <span className="inline-block text-amber-600">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Templates Library</h1>
          <p className="text-zinc-600 max-w-2xl">
            Find the perfect fit from 300+ templates using our AI-assisted search and personalized recommendations.
          </p>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={18} />
          <Input
            type="text"
            placeholder="Search by anything, for example: 'What can I improve about my app?'"
            className="pl-10 py-6 bg-white border-zinc-200 text-zinc-800 placeholder:text-zinc-500 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-black mb-4">Recommended</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card 
                key={template.id}
                className="overflow-hidden border border-zinc-200 bg-white cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg rounded-2xl"
                onClick={() => handleTemplateSelect(template)}
              >
                <CardContent className="p-5">
                  <div className="mb-4">
                    {template.isPremium && (
                      <Badge className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Premium
                      </Badge>
                    )}
                    <div className="flex justify-between items-center mb-5">
                      <div className={`bg-${template.color}-50 rounded-full p-3`}>
                        <X className={`h-5 w-5 text-${template.color}-600`} />
                      </div>
                      <Badge className="bg-zinc-100 text-zinc-600 text-xs font-normal px-2 py-1 rounded-full">
                        {template.templateType}
                      </Badge>
                    </div>
                    <div className="text-sm mb-5 text-zinc-600">
                      <div className="line-clamp-2 h-10 font-medium">
                        How satisfied are you with our product?
                      </div>
                      <div className="flex items-center space-x-4 mt-5">
                        {renderRatingOptions(template)}
                      </div>
                    </div>
                    <div className="mt-5 p-4 bg-zinc-50 rounded-xl">
                      <h3 className="font-semibold text-black text-base mb-1">{template.name}</h3>
                      <p className="text-zinc-600 text-sm">{template.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 text-xs text-zinc-500">
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-zinc-300 rounded-full mr-2"></span>
                        {template.questions} questions
                      </div>
                      <div className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-zinc-300 rounded-full mr-2"></span>
                        {template.estimatedTime} min
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {!embedded && (
          <div className="flex justify-center mt-10">
            <Button 
              onClick={() => navigate('/dashboard')}
              variant="outline" 
              className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 rounded-full px-6 py-6"
            >
              Back to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesLibrary;
