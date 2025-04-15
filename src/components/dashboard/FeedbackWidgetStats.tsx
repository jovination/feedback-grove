import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, PlusCircle, Lock, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Widget {
  id: string;
  name: string;
  type: string;
  is_active: boolean;
  settings?: Record<string, unknown>;
  created_at: string;
}

interface FeedbackWidgetStatsProps {
  isPremium: boolean;
  widgets: Widget[];
  isLoading: boolean;
  onConfigureWidget: (id: string) => void;
  onCreateWidget: () => void;
}

const FeedbackWidgetStats = ({ 
  isPremium, 
  widgets = [], 
  isLoading,
  onConfigureWidget,
  onCreateWidget
}: FeedbackWidgetStatsProps) => {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d">("7d");
  const navigate = useNavigate();
  
  // If no real widgets exist yet, show demo widgets for a better UX
  const displayWidgets = widgets;

  if (isLoading) {
    return (
      <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-zinc-100">
          <div>
            <h2 className="text-lg font-medium text-zinc-900">Feedback Widgets</h2>
            <p className="text-sm text-zinc-500">Manage your feedback collection forms</p>
          </div>
        </div>
        
        <CardContent className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-amber-500"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-zinc-100">
        <div>
          <h2 className="text-lg font-medium text-zinc-900">Feedback Widgets</h2>
          <p className="text-sm text-zinc-500">Manage your feedback collection forms</p>
        </div>
        <div className="mt-3 md:mt-0 flex items-center">
          <Tabs value={period} onValueChange={(value) => setPeriod(value as "7d" | "30d" | "90d")} className="mr-4">
            <TabsList className="bg-zinc-100 p-0.5">
              <TabsTrigger value="7d" className="text-xs py-1">7d</TabsTrigger>
              <TabsTrigger value="30d" className="text-xs py-1">30d</TabsTrigger>
              <TabsTrigger value="90d" className="text-xs py-1">90d</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button 
            onClick={onCreateWidget}
            className="flex items-center gap-2 bg-black hover:bg-zinc-800"
            size="sm"
          >
            <PlusCircle size={14} />
            <span>New Widget</span>
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="text-xs font-medium text-zinc-500 text-left pb-2 pl-2">Name</th>
                <th className="text-xs font-medium text-zinc-500 text-left pb-2">Type</th>
                <th className="text-xs font-medium text-zinc-500 text-left pb-2">Responses</th>
                <th className="text-xs font-medium text-zinc-500 text-left pb-2">Last Active</th>
                <th className="text-xs font-medium text-zinc-500 text-left pb-2">Status</th>
                <th className="text-xs font-medium text-zinc-500 text-left pb-2"></th>
              </tr>
            </thead>
            <tbody>
              {displayWidgets.map((widget) => (
                <tr key={widget.id} className="border-b border-zinc-100 last:border-0">
                  <td className="py-3 pl-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-amber-100 rounded-md flex items-center justify-center">
                        <Layers className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium">{widget.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-zinc-600">{widget.type}</td>
                  <td className="py-3 text-sm text-zinc-600">
                    {/* In a real implementation, this would come from the widget stats */}
                    {Math.floor(Math.random() * 30)}
                  </td>
                  <td className="py-3 text-sm text-zinc-600">
                    {new Date(widget.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      widget.is_active 
                        ? "bg-green-100 text-green-700" 
                        : "bg-zinc-100 text-zinc-600"
                    }`}>
                      {widget.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-zinc-500 hover:text-zinc-800"
                      onClick={() => onConfigureWidget(widget.id)}
                    >
                      Configure
                    </Button>
                  </td>
                </tr>
              ))}
              {!isPremium && (
                <tr className="border-b border-zinc-100 bg-gradient-to-r from-amber-50 to-transparent">
                  <td colSpan={6} className="py-3 pl-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-amber-100 rounded-md flex items-center justify-center">
                          <Lock className="h-4 w-4 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium">Premium Widget Templates</span>
                      </div>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-amber-200 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                        onClick={() => navigate('/pricing')}
                      >
                        Upgrade to Premium
                      </Button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => navigate('/templates-library')} 
            variant="outline" 
            className="text-sm border-zinc-200"
          >
            <BarChart3 className="h-4 w-4 mr-2 text-zinc-500" />
            View All Templates
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackWidgetStats;