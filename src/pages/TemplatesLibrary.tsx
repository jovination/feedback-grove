
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Search, Star, CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  questions: number;
  estimatedTime: number;
  imageUrl: string;
  isPremium: boolean;
  color: "purple" | "amber";
}

const TemplatesLibrary = () => {
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
      color: "purple"
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
      color: "purple"
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
      color: "amber"
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
      color: "purple"
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
      color: "purple"
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
      color: "amber"
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
      color: "purple"
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
      color: "amber"
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
      color: "amber"
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
      color: "purple"
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
    
    // Store selected template in local storage
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    navigate('/widget-templates');
  };

  return (
    <div className="min-h-screen bg-zinc-900 font-inter text-white">
      <Navbar />
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="mb-4">
            <span className="inline-block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Templates Library</h1>
          <p className="text-zinc-400 max-w-2xl">
            Find the perfect fit from 300+ templates using our AI-assisted search and personalized recommendations.
          </p>
        </div>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={18} />
          <Input
            type="text"
            placeholder="Search by anything, for example: 'What can I improve about my app?'"
            className="pl-10 py-6 bg-zinc-800/50 border-zinc-700 text-zinc-300 placeholder:text-zinc-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-zinc-300 mb-4">Recommended</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.map((template) => (
              <Card 
                key={template.id}
                className={`overflow-hidden border-0 bg-transparent cursor-pointer transition-all hover:scale-[1.02]`}
                onClick={() => handleTemplateSelect(template)}
              >
                <CardContent className="p-0">
                  <div className={`relative bg-${template.color}-900/30 p-4 border border-${template.color}-700/50 rounded-lg`}>
                    {template.isPremium && (
                      <Badge className="absolute top-3 right-3 bg-amber-500 text-xs font-medium">
                        Premium
                      </Badge>
                    )}
                    <div className="flex justify-between items-center mb-4">
                      <div className="bg-zinc-800 rounded p-1">
                        <X className="h-4 w-4 text-zinc-500" />
                      </div>
                    </div>
                    <div className="text-sm mb-4 text-zinc-300">
                      <div className="line-clamp-2 h-10">
                        How satisfied are you with our product?
                      </div>
                      <div className="flex items-center space-x-4 mt-4">
                        {template.color === "purple" ? (
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <div key={rating} className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center text-xs">
                                {rating}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <div key={rating} className="w-6 h-6 rounded-full border border-zinc-600 flex items-center justify-center">
                                😊
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg">
                      <h3 className="font-medium text-zinc-200 text-sm mb-1">{template.name}</h3>
                      <p className="text-zinc-400 text-xs">{template.description}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3 text-xs text-zinc-500">
                      <div>{template.questions} questions</div>
                      <div>{template.estimatedTime} min</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            onClick={() => navigate('/dashboard')}
            variant="outline" 
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplatesLibrary;
