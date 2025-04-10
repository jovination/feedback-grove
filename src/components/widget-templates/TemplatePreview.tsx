
import React from "react";
import StandardTemplate from "./templates/StandardTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import BrandedTemplate from "./templates/BrandedTemplate";

interface TemplatePreviewProps {
  templateName: string;
  theme: string;
}

const TemplatePreview = ({ templateName, theme }: TemplatePreviewProps) => {
  switch (templateName) {
    case "standard":
      return <StandardTemplate theme={theme} />;
    case "minimal":
      return <MinimalTemplate theme={theme} />;
    case "branded":
      return <BrandedTemplate theme={theme} />;
    default:
      return <StandardTemplate theme={theme} />;
  }
};

export default TemplatePreview;
