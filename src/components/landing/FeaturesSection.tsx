import { Shield, Link2, BarChart3, Rocket, Zap, Users } from "lucide-react";

// Define the type for our feature data
interface Feature {
  icon: keyof typeof icons;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
}

// Create an object of icons for easy reference
const icons = {
  Shield,
  Link2,
  BarChart3,
  Rocket,
  Zap,
  Users
};

// Define our dynamic data
const featuresData: Feature[] = [
  {
    icon: "Shield",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-600",
    title: "Complete Anonymity",
    description: "Get honest opinions with complete anonymity that encourages candid responses."
  },
  {
    icon: "Link2",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Simple Integration",
    description: "Share a link or embed our widget directly on your website with a simple snippet."
  },
  {
    icon: "BarChart3",
    iconBgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Insights Dashboard",
    description: "Track feedback trends and insights with our powerful built-in analytics."
  },
  {
    icon: "Rocket",
    iconBgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Quick Setup",
    description: "Get started in minutes with our intuitive setup process. No coding required."
  },
  {
    icon: "Zap",
    iconBgColor: "bg-red-50",
    iconColor: "text-red-600",
    title: "Instant Notifications",
    description: "Get notified instantly when someone sends you new feedback."
  },
  {
    icon: "Users",
    iconBgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    title: "Team Collaboration",
    description: "Share insights with your team and collaborate on improvements."
  }
];

const FeaturesSection = () => {
  // Split the features into two rows of three
  const firstRowFeatures = featuresData.slice(0, 3);
  const secondRowFeatures = featuresData.slice(3);

  const renderFeature = (feature: Feature, index: number) => {
    const IconComponent = icons[feature.icon];
    
    return (
      <div key={index} className="feature-card hover:-translate-y-1">
        <div className={`w-10 h-10 ${feature.iconBgColor} rounded-full flex items-center justify-center mb-4`}>
          <IconComponent className={feature.iconColor} size={20} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-black">{feature.title}</h3>
        <p className="text-zinc-600 text-[15px]">
          {feature.description}
        </p>
      </div>
    );
  };

  return (
    <section className="section bg-zinc-50">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="inline-block mb-2 text-amber-600 font-medium">Features</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            Everything you need for better feedback
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
            Our platform is designed to make feedback collection simple, insightful, and actionable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {firstRowFeatures.map(renderFeature)}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {secondRowFeatures.map(renderFeature)}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;