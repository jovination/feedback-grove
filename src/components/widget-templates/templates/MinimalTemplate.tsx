
import React from "react";
import { Button } from "@/components/ui/button";

interface MinimalTemplateProps {
  theme: string;
}

const MinimalTemplate = ({ theme }: MinimalTemplateProps) => (
  <div className={`p-4 rounded-xl shadow-sm transition-all duration-300 ${
    theme === "dark" 
      ? "bg-zinc-900 text-white" 
      : "bg-white border border-zinc-200"
  }`}>
    <textarea
      className={`w-full p-3 rounded-lg text-sm mb-3 transition-all focus:outline-none focus:ring-2 ${
        theme === "dark" 
          ? "bg-zinc-800 text-white border-zinc-700 focus:ring-zinc-600" 
          : "bg-zinc-50 border-zinc-200 focus:ring-amber-300"
      }`}
      placeholder="Share feedback anonymously..."
      rows={2}
      readOnly
    />
    <div className="flex justify-end">
      <Button
        className={`${
          theme === "dark" 
            ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-200" 
            : "bg-amber-500 hover:bg-amber-600 text-white"
        } rounded-lg transition-all duration-200`}
        size="sm"
      >
        Send
      </Button>
    </div>
  </div>
);

export default MinimalTemplate;
