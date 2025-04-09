import { Users, Share2, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

// Define the type for our card data
interface StepCard {
  step: number;
  title: string;
  description: string;
  benefits: string[];
  icon: keyof typeof icons;
  iconBgColor: string;
  iconColor: string;
}

// Create an object of icons for easy reference
const icons = {
  Users,
  Share2,
  MessageSquare
};

// Define our dynamic data
const stepsData: StepCard[] = [
  {
    step: 1,
    title: "Create your account",
    description: "Sign up in less than 2 minutes and get your personal feedback link immediately.",
    benefits: ["No credit card required", "Free plan available"],
    icon: "Users",
    iconBgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    step: 2,
    title: "Share your feedback link",
    description: "Share the link with friends, colleagues, or embed it on your website.",
    benefits: ["Simple copy and paste", "Website widget available"],
    icon: "Share2",
    iconBgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    step: 3,
    title: "Receive honest feedback",
    description: "Get 100% anonymous feedback to help you improve and grow.",
    benefits: ["Complete anonymity", "Real-time notifications"],
    icon: "MessageSquare",
    iconBgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-zinc-50">
      <div className="container-tight">
        <div className="text-center mb-12">
          <span className="inline-block mb-2 text-amber-600 font-medium text-sm">How it works</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
            Collect anonymous feedback in 3 simple steps
          </h2>
          <p className="text-zinc-600 mx-auto max-w-xl">
            Setting up your feedback collection system takes less than 2 minutes.
            No technical skills required!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stepsData.map((card, index) => {
            const IconComponent = icons[card.icon];
            
            return (
              <motion.div 
                key={card.step}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <Card className="feature-card h-full flex flex-col">
                  <div className="mb-4 flex items-center">
                    <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-3">
                      {card.step}
                    </div>
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                  </div>
                  <p className="text-zinc-600 text-sm mb-4">
                    {card.description}
                  </p>
                  <ul className="space-y-2 mt-auto mb-4">
                    {card.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-xs text-zinc-500">
                        <div className="w-3 h-3 rounded-full bg-zinc-200 mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-center mt-auto">
                    <div className={`w-10 h-10 ${card.iconBgColor} rounded-full flex items-center justify-center`}>
                      <IconComponent className={card.iconColor} size={20} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm group">
            Learn more about how it works
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;