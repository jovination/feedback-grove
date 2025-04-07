
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { register, isAuthenticated, isLoading } = useAuth();

  const validateUsername = (value: string) => {
    return /^[a-zA-Z0-9_-]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    
    if (!validateUsername(username)) {
      // Handle invalid username
      return;
    }
    
    try {
      await register(email, username, password);
    } catch (err) {
      // Error handled in AuthContext
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar />
      
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Card className="shadow-soft border-gray-200 rounded-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Create Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="yourname"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    This will be your public URL: feedbackwave.com/feedback/{username}
                  </p>
                </div>

                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordsMatch(e.target.value === password);
                    }}
                    className={`mt-1 block w-full rounded-md ${!passwordsMatch ? 'border-red-300' : 'border-gray-300'}`}
                    placeholder="••••••••"
                    required
                  />
                  {!passwordsMatch && (
                    <p className="mt-1 text-xs text-red-500">
                      Passwords do not match
                    </p>
                  )}
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
