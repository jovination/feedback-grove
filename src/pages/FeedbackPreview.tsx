import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Star, Heart, ThumbsUp, X, Maximize2, Minimize2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FeedbackPreview = () => {
  const [searchParams] = useSearchParams();
  const template = searchParams.get('template') || 'standard';
  const theme = searchParams.get('theme') || 'light';
  const id = searchParams.get('id');
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [showBubble, setShowBubble] = useState(false);

  // Get template data from localStorage
  const templateData = JSON.parse(localStorage.getItem('selectedTemplate') || '{}');
  const ratingType = templateData?.ratingType || 'emojis';
  const color = templateData?.color || 'amber';
  const templateName = templateData?.name || 'Feedback Form';

  // Show bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Get background color based on theme
  const getBackgroundColor = () => {
    switch (theme) {
      case "dark":
        return "bg-zinc-800 text-white";
      case "minimal":
        return "bg-white text-zinc-800 shadow-sm";
      case "branded":
        return `bg-${color}-50 text-${color}-900`;
      default: // light
        return "bg-white text-zinc-800";
    }
  };

  // Get border style based on theme
  const getBorderStyle = () => {
    switch (theme) {
      case "dark":
        return "border border-zinc-700";
      case "minimal":
        return "border-0";
      case "branded":
        return `border border-${color}-200`;
      default: // light
        return "border border-zinc-200";
    }
  };

  // Get button style based on theme
  const getButtonStyle = () => {
    switch (theme) {
      case "dark":
        return "bg-white text-zinc-800 hover:bg-zinc-100";
      case "minimal":
        return "bg-zinc-100 text-zinc-800 hover:bg-zinc-200";
      case "branded":
        return `bg-${color}-500 text-white hover:bg-${color}-600`;
      default: // light
        return "bg-amber-500 text-white hover:bg-amber-600";
    }
  };

  const renderRatingOptions = () => {
    switch (ratingType) {
      case "stars":
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Star 
                key={value} 
                size={24} 
                className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  rating && rating >= value ? `text-${color}-500 fill-current` : "text-gray-300"
                }`}
                onClick={() => setRating(value)}
              />
            ))}
          </div>
        );
      case "hearts":
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <Heart 
                key={value} 
                size={24} 
                className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  rating && rating >= value ? `text-${color}-500 fill-current` : "text-gray-300"
                }`}
                onClick={() => setRating(value)}
              />
            ))}
          </div>
        );
      case "thumbs":
        return (
          <div className="flex space-x-6 justify-center my-4">
            <ThumbsUp 
              size={28} 
              className={`cursor-pointer transition-all duration-200 hover:scale-110 transform rotate-180 ${
                rating === 1 ? `text-${color}-500` : "text-gray-300"
              }`}
              onClick={() => setRating(1)}
            />
            <ThumbsUp 
              size={28} 
              className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                rating === 5 ? `text-${color}-500` : "text-gray-300"
              }`}
              onClick={() => setRating(5)}
            />
          </div>
        );
      case "emojis":
        return (
          <div className="flex space-x-3 justify-center my-4">
            {[
              { value: 1, emoji: "😡" },
              { value: 2, emoji: "😕" },
              { value: 3, emoji: "😐" },
              { value: 4, emoji: "🙂" },
              { value: 5, emoji: "😄" }
            ].map((item) => (
              <div 
                key={item.value}
                className={`cursor-pointer transition-all duration-200 hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                  rating === item.value ? `bg-${color}-100 border-2 border-${color}-300` : "border border-gray-200"
                }`}
                onClick={() => setRating(item.value)}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        );
      default: // numbers
        return (
          <div className="flex space-x-2 justify-center my-4">
            {[1, 2, 3, 4, 5].map((value) => (
              <div 
                key={value}
                className={`cursor-pointer transition-all duration-200 hover:scale-110 w-10 h-10 rounded-full flex items-center justify-center ${
                  rating === value 
                    ? `bg-${color}-500 text-white` 
                    : `border border-${color}-200 text-${color}-600`
                }`}
                onClick={() => setRating(value)}
              >
                {value}
              </div>
            ))}
          </div>
        );
    }
  };

  const handleSubmit = () => {
    if (!rating) {
      toast.error("Please select a rating");
      return;
    }
    setSubmitted(true);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {showBubble && !isOpen && (
            <div className="absolute -top-2 -right-2">
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          )}
          <Button 
            onClick={() => setIsOpen(true)}
            className={`rounded-full w-14 h-14 shadow-lg flex items-center justify-center ${getButtonStyle()} transition-all duration-300 hover:scale-110`}
          >
            <MessageCircle size={24} />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`fixed ${isExpanded ? 'inset-4 md:inset-12' : 'bottom-6 right-6 w-80'} rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-300 ${getBackgroundColor()} ${getBorderStyle()}`}
    >
      <div className="flex justify-between items-center p-4 border-b border-opacity-20">
        <h3 className="font-medium">Feedback Preview: {templateName}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors duration-200"
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-black hover:bg-opacity-10 transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {submitted ? (
          <div className="text-center py-8">
            <div className={`w-16 h-16 rounded-full bg-${color}-100 text-${color}-500 flex items-center justify-center mx-auto mb-4 animate-bounce`}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Thank you for your feedback!</h3>
            <p className="text-sm opacity-70">Your input helps us improve our product.</p>
            <Button
              className={`mt-6 ${getButtonStyle()} transition-all duration-200 hover:scale-105`}
              onClick={() => {
                setSubmitted(false);
                setRating(null);
                setFeedback("");
              }}
            >
              Submit another response
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">How satisfied are you with our product?</h3>

              {renderRatingOptions()}

              <div className="mt-6">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className={`w-full p-3 rounded-lg resize-none transition-all duration-200 focus:ring-2 focus:ring-${color}-500 ${
                    theme === "dark" ? "bg-zinc-700 border-zinc-600" : "bg-white border-zinc-200"
                  } border`}
                  placeholder="Share any additional feedback (optional)"
                  rows={3}
                ></textarea>
              </div>
              
              <Button
                onClick={handleSubmit}
                disabled={!rating}
                className={`mt-4 w-full ${getButtonStyle()} transition-all duration-200 hover:scale-105 ${
                  !rating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Submit Feedback
              </Button>
            </div>
          </>
        )}
      </div>
      
      <div className="p-3 text-xs text-center opacity-70">
        Powered by Lovable
      </div>
    </div>
  );
};

export default FeedbackPreview;

