
import React from "react";
import { motion } from "framer-motion";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {templates.map((template) => (
        <motion.div
          key={template.name}
          className={`cursor-pointer rounded-lg overflow-hidden border ${
            selectedTemplate === template.name
              ? "border-amber-500 ring-2 ring-amber-200"
              : "border-zinc-200 hover:border-zinc-300"
          }`}
          whileHover={{ y: -2 }}
          onClick={() => onTemplateSelect(template.name)}
        >
          <div className="bg-zinc-100 p-2 h-36 flex items-center justify-center">
            <div className="w-full transform scale-75">
              <TemplatePreview templateName={template.name} theme={selectedTheme} />
            </div>
          </div>
          <div className="p-3 bg-white">
            <p className="font-medium text-zinc-800 capitalize">
              {template.name}
            </p>
            <p className="text-xs text-zinc-500">{template.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TemplateGallery;
