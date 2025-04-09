
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";

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
    <div className="min-h-screen flex flex-col font-inter relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-blue-50/40">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-blue-100/10 pointer-events-none"></div>
    
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-10"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-10"></div>
          <Navbar />
      
      <div className="flex flex-col justify-center items-center py-16 flex-grow px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-black mb-2">
              Create your FeedbackWave account
            </h2>
            <p className="text-zinc-600">
              Start collecting anonymous feedback in minutes
            </p>
          </div>

          <Card className="shadow-sm border border-zinc-200 bg-white rounded-xl overflow-hidden">
            <CardContent className="p-6 pt-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-zinc-300"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="username" className="block text-sm font-medium text-zinc-700 mb-1">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-md border-zinc-300"
                    placeholder="yourname"
                    required
                  />
                  <p className="mt-1 text-xs text-zinc-500">
                    This will be your public URL: feedbackwave.com/feedback/{username}
                  </p>
                </div>

                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-zinc-700 mb-1">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-zinc-300"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="block text-sm font-medium text-zinc-700 mb-1">
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
                    className={`block w-full rounded-md ${!passwordsMatch ? 'border-red-300' : 'border-zinc-300'}`}
                    placeholder="••••••••"
                    required
                  />
                  {!passwordsMatch && (
                    <p className="mt-1 text-xs text-red-500">
                      Passwords do not match
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-zinc-800 text-white rounded-md h-10 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Sign up with Email
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-5">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-zinc-500">or</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px" height="16px">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Continue with GitHub
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-6">
            <p className="text-sm text-zinc-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-amber-600 hover:text-amber-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <footer className="py-6 bg-white/50 backdrop-blur-sm border-t border-zinc-100">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackWave. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Terms</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Privacy</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
