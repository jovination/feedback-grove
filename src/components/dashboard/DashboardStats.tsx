import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, BarChart3 } from "lucide-react";
import { User } from "@/contexts/AuthContext";

interface DashboardStatsProps {
  feedbackCount: number;
  lastFeedbackDate: string | null;
  user: User | null;
  isLoading?: boolean;
}

const DashboardStats = ({ feedbackCount, lastFeedbackDate, user, isLoading = false }: DashboardStatsProps) => {
  const renderStat = (icon: React.ReactNode, label: string, value: React.ReactNode, bgColor: string, textColor: string) => (
    <Card className="dashboard-card">
      <CardContent className="p-5">
        <div className="dashboard-stat">
          <div className={`dashboard-icon-wrapper ${bgColor}`}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-zinc-500">{label}</p>
            {isLoading ? (
              <div className="h-7 w-16 bg-zinc-100 rounded animate-pulse" />
            ) : (
              <h3 className="text-xl font-semibold text-zinc-900">
                {value}
              </h3>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      {renderStat(
        <MessageSquare className="text-amber-600" size={18} />,
        "Total Feedback",
        feedbackCount,
        "bg-amber-50",
        "text-amber-600"
      )}
      
      {renderStat(
        <Clock className="text-blue-600" size={18} />,
        "Last Feedback",
        lastFeedbackDate
          ? new Date(lastFeedbackDate).toLocaleDateString()
          : "No feedback yet",
        "bg-blue-50",
        "text-blue-600"
      )}

      {renderStat(
        <BarChart3 className={user?.is_premium ? "text-green-600" : "text-yellow-600"} size={18} />,
        "Account Status",
        <div className="flex items-center">
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            user?.is_premium 
              ? "bg-green-50 text-green-700" 
              : "bg-yellow-50 text-yellow-700"
          }`}>
            {user?.is_premium ? "Premium" : "Free"}
          </div>
        </div>,
        user?.is_premium ? "bg-green-50" : "bg-yellow-50",
        user?.is_premium ? "text-green-600" : "text-yellow-600"
      )}
    </div>
  );
};

export default DashboardStats;
