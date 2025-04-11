
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const UserSettings = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [embedVisible, setEmbedVisible] = useState(true);
  const [brandingVisible, setBrandingVisible] = useState(true);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully");
  };

  return (
    <Card className="shadow-sm border border-zinc-200 rounded-lg mb-6">
      <CardHeader className="border-b border-zinc-100">
        <CardTitle className="text-lg font-medium">User Settings</CardTitle>
        <CardDescription>Configure your feedback collection preferences</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSaveSettings}>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium mb-3 text-zinc-800">Account Information</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue={user?.username} disabled />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} disabled />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-medium mb-3 text-zinc-800">Notification Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications" className="font-normal">Email Notifications</Label>
                    <p className="text-sm text-zinc-500">Receive emails when you get new feedback</p>
                  </div>
                  <Switch 
                    id="notifications" 
                    checked={notifications} 
                    onCheckedChange={setNotifications}
                    disabled={!user?.is_premium}
                  />
                </div>
                {!user?.is_premium && (
                  <p className="text-xs text-amber-600">Premium feature</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-base font-medium mb-3 text-zinc-800">Widget Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="embed-visible" className="font-normal">Show Embed Button</Label>
                    <p className="text-sm text-zinc-500">Display the embed button on your widgets</p>
                  </div>
                  <Switch 
                    id="embed-visible" 
                    checked={embedVisible} 
                    onCheckedChange={setEmbedVisible}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="branding-visible" className="font-normal">Show FeedbackGrove Branding</Label>
                    <p className="text-sm text-zinc-500">Display our logo on your feedback widgets</p>
                  </div>
                  <Switch 
                    id="branding-visible" 
                    checked={brandingVisible} 
                    onCheckedChange={setBrandingVisible}
                    disabled={!user?.is_premium}
                  />
                </div>
                {!user?.is_premium && (
                  <p className="text-xs text-amber-600">Remove branding with premium</p>
                )}
              </div>
            </div>
          </div>
          
          <Button type="submit" className="mt-6 bg-amber-500 hover:bg-amber-600 text-white">
            Save Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserSettings;
