
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye, Monitor, Moon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TemplatePreview from "./TemplatePreview";

interface TemplatePreviewCardProps {
  selectedTemplate: string;
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
  navigateToPreview: () => void;
}

const TemplatePreviewCard = ({
  selectedTemplate,
  selectedTheme,
  setSelectedTheme,
  navigateToPreview
}: TemplatePreviewCardProps) => {
  return (
    <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="font-medium text-zinc-800 flex items-center">
          <Monitor size={16} className="mr-2 text-amber-500" />
          Preview
        </h3>
        <div className="mt-2 sm:mt-0">
          <Tabs
            defaultValue="light"
            value={selectedTheme}
            onValueChange={setSelectedTheme}
            className="w-full"
          >
            <TabsList className="bg-zinc-100 p-0.5 h-8">
              <TabsTrigger
                value="light"
                className="text-xs py-1 flex items-center gap-1.5 data-[state=active]:bg-white"
              >
                <span className="hidden sm:inline">Light</span>
              </TabsTrigger>
              <TabsTrigger
                value="dark"
                className="text-xs py-1 flex items-center gap-1.5 data-[state=active]:bg-zinc-800 data-[state=active]:text-white"
              >
                <Moon size={12} className="sm:mr-1" />
                <span className="hidden sm:inline">Dark</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-zinc-200 p-5 mb-3 shadow-sm">
        <div className="max-w-md mx-auto">
          <TemplatePreview templateName={selectedTemplate} theme={selectedTheme} />
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="text-sm hover:bg-zinc-50"
          onClick={navigateToPreview}
          size="sm"
        >
          <Eye size={14} className="mr-1" /> Full Preview
        </Button>
      </div>
    </div>
  );
};

export default TemplatePreviewCard;
