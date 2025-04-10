
import React from "react";
import { Button } from "@/components/ui/button";

interface MinimalTemplateProps {
  theme: string;
}

const MinimalTemplate = ({ theme }: MinimalTemplateProps) => (
  <div className={`p-3 rounded-lg ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white border border-zinc-200"}`}>
    <textarea
      className={`w-full p-2 rounded-md text-sm mb-2 ${
        theme === "dark" ? "bg-zinc-800 text-white border-zinc-700" : "bg-zinc-50 border-zinc-200"
      }`}
      placeholder="Share feedback anonymously..."
      rows={2}
      readOnly
    />
    <div className="flex justify-end">
      <Button
        className={`${
          theme === "dark" ? "bg-zinc-800 hover:bg-zinc-700" : "bg-zinc-200 hover:bg-zinc-300 text-zinc-800"
        }`}
        size="sm"
        variant="outline"
      >
        Send
      </Button>
    </div>
  </div>
);

export default MinimalTemplate;
