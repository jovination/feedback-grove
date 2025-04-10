
import React from "react";
import { Button } from "@/components/ui/button";

interface BrandedTemplateProps {
  theme: string;
}

const BrandedTemplate = ({ theme }: BrandedTemplateProps) => (
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

export default BrandedTemplate;
