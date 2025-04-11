
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import TemplatePreview from "./TemplatePreview";

interface TemplateData {
  name: string;
  description: string;
  theme: "light" | "dark" | "minimal" | "branded";
}

interface TemplateGalleryProps {
  templates: TemplateData[];
  selectedTemplate: string;
  selectedTheme: string;
  onTemplateSelect: (templateName: string) => void;
}

const TemplateGallery = ({ 
  templates, 
  selectedTemplate, 
  selectedTheme,
  onTemplateSelect 
}: TemplateGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {templates.map((template) => (
        <motion.div
          key={template.name}
          className={`relative cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 ${
            selectedTemplate === template.name
              ? "border-amber-500 ring-2 ring-amber-200"
              : "border-zinc-200 hover:border-zinc-300 hover:shadow-md"
          }`}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          onClick={() => onTemplateSelect(template.name)}
        >
          <div className="bg-zinc-50 p-4 h-40 flex items-center justify-center">
            <div className="w-full transform scale-90 transition-transform duration-200 hover:scale-95">
              <TemplatePreview templateName={template.name} theme={selectedTheme} />
            </div>
          </div>
          <div className="p-4 bg-white border-t border-zinc-100">
            <div className="flex items-center justify-between">
              <p className="font-medium text-zinc-800 capitalize">
                {template.name}
              </p>
              {selectedTemplate === template.name && (
                <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
              )}
            </div>
            <p className="text-xs text-zinc-500 mt-1">{template.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TemplateGallery;
