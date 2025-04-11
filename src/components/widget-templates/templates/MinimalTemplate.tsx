
import React from "react";
import { Button } from "@/components/ui/button";

interface MinimalTemplateProps {
  theme: string;
}

const MinimalTemplate = ({ theme }: MinimalTemplateProps) => (
  <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200 shadow-sm"}`}>
    <textarea
      className={`w-full p-3 rounded-lg text-sm mb-3 transition-all focus:ring-2 focus:ring-zinc-200 outline-none ${
        theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
      }`}
      placeholder="Share feedback anonymously..."
      rows={2}
      readOnly
    />
    <div className="flex justify-end">
      <Button
        className={`${
          theme === "dark" ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-200" : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
        } rounded-lg transition-all duration-200`}
        size="sm"
        variant="outline"
      >
        Send
      </Button>
    </div>
  </div>
);

export default MinimalTemplate;
