
import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
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
    <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="font-medium text-zinc-800">Preview</h3>
        <div className="mt-2 sm:mt-0">
          <Tabs
            defaultValue="light"
            value={selectedTheme}
            onValueChange={setSelectedTheme}
            className="w-full"
          >
            <TabsList className="bg-zinc-100 p-0.5">
              <TabsTrigger
                value="light"
                className="text-xs py-1"
              >
                Light
              </TabsTrigger>
              <TabsTrigger
                value="dark"
                className="text-xs py-1"
              >
                Dark
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-zinc-200 p-4">
        <TemplatePreview templateName={selectedTemplate} theme={selectedTheme} />
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button
          variant="outline"
          className="text-sm"
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
