
import React from "react";
import { Button } from "@/components/ui/button";

interface BrandedTemplateProps {
  theme: string;
}

const BrandedTemplate = ({ theme }: BrandedTemplateProps) => (
  <div className={`p-4 rounded-xl ${
    theme === "dark" 
      ? "bg-zinc-900 text-white border-2 border-amber-500" 
      : "bg-gradient-to-br from-white to-amber-50 border border-amber-200 shadow-sm"
  }`}>
    <div className="flex items-center justify-between mb-3">
      <span className={`font-medium ${theme === "dark" ? "text-amber-400" : "text-amber-500"}`}>
        FeedbackGrove
      </span>
      <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
    </div>
    <textarea
      className={`w-full p-3 rounded-lg text-sm mb-3 transition-all focus:ring-2 focus:ring-amber-200 outline-none ${
        theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-white border border-amber-200"
      }`}
      placeholder="What's on your mind? Share anonymously..."
      rows={2}
      readOnly
    />
    <Button
      className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white rounded-lg transition-all duration-200 shadow-sm"
      size="sm"
    >
      Submit Feedback
    </Button>
  </div>
);

export default BrandedTemplate;
