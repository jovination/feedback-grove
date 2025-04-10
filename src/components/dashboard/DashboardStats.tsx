
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, BarChart3 } from "lucide-react";
import { User } from "@/contexts/AuthContext";

interface DashboardStatsProps {
  feedbackCount: number;
  lastFeedbackDate: string | null;
  user: User | null;
}

const DashboardStats = ({ feedbackCount, lastFeedbackDate, user }: DashboardStatsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      <Card className="dashboard-card">
        <CardContent className="p-5">
          <div className="dashboard-stat">
            <div className="dashboard-icon-wrapper bg-amber-50">
              <MessageSquare className="text-amber-600" size={18} />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Total Feedback</p>
              <h3 className="text-xl font-semibold text-zinc-900">
                {feedbackCount}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="dashboard-card">
        <CardContent className="p-5">
          <div className="dashboard-stat">
            <div className="dashboard-icon-wrapper bg-blue-50">
              <Clock className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Last Feedback</p>
              <h3 className="text-xl font-semibold text-zinc-900">
                {lastFeedbackDate
                  ? new Date(lastFeedbackDate).toLocaleDateString() 
                  : "No feedback yet"}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dashboard-card">
        <CardContent className="p-5">
          <div className="dashboard-stat">
            <div className={`dashboard-icon-wrapper ${
              user?.is_premium ? "bg-green-50" : "bg-yellow-50"
            }`}>
              <BarChart3 className={
                user?.is_premium ? "text-green-600" : "text-yellow-600"
              } size={18} />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Account Status</p>
              <div className="flex items-center">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user?.is_premium 
                    ? "bg-green-50 text-green-700" 
                    : "bg-yellow-50 text-yellow-700"
                }`}>
                  {user?.is_premium ? "Premium" : "Free"}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
