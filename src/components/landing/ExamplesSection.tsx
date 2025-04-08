
import { Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

const ExamplesSection = () => {
  return (
    <section className="section bg-zinc-50">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="inline-block mb-2 text-amber-600 font-medium">Examples</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            See what feedback looks like
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
            Here are examples of the kind of valuable feedback you can collect with FeedbackWave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="feedback-example hover:shadow-md hover:border-zinc-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">A</div>
                <div className="text-sm font-medium">Anonymous Feedback</div>
              </div>
              <div className="text-xs text-zinc-500">2 days ago</div>
            </div>
            <p className="text-zinc-700">
              "I really appreciated your presentation yesterday. Your explanation of the new project roadmap was clear and helped me understand our goals for the next quarter."
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center">
              <div className="text-xs text-zinc-500">Positive feedback</div>
              <div className="flex gap-1">
                <div className="p-1 rounded hover:bg-zinc-100 cursor-pointer">
                  <Share2 size={14} className="text-zinc-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="feedback-example hover:shadow-md hover:border-zinc-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">A</div>
                <div className="text-sm font-medium">Anonymous Feedback</div>
              </div>
              <div className="text-xs text-zinc-500">5 days ago</div>
            </div>
            <p className="text-zinc-700">
              "I think the team could benefit from more regular check-ins. Sometimes I feel like I'm missing important updates that could help me be more effective."
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center">
              <div className="text-xs text-zinc-500">Constructive feedback</div>
              <div className="flex gap-1">
                <div className="p-1 rounded hover:bg-zinc-100 cursor-pointer">
                  <Share2 size={14} className="text-zinc-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <RouterLink to="/register">
            <Button variant="outline" className="border-zinc-200 hover:bg-zinc-100 transition-all duration-200">
              Start collecting feedback <ArrowRight size={16} className="ml-2" />
            </Button>
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
