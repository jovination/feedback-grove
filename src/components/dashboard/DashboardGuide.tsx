
import { Card, CardContent } from "@/components/ui/card";

const DashboardGuide = () => {
  return (
    <Card className="shadow-sm border border-zinc-200 rounded-lg mt-6">
      <CardContent className="p-5">
        <h3 className="text-lg font-medium mb-3">Quick Guide</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
            <div className="text-sm text-zinc-600">Share your feedback link with others</div>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
            <div className="text-sm text-zinc-600">Receive anonymous feedback from anyone</div>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
            <div className="text-sm text-zinc-600">Embed the feedback widget on your website</div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default DashboardGuide;
