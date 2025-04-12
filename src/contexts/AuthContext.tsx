
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authApi } from "@/lib/api";

export interface User {
  id: string;
  email: string;
  username: string;
  is_premium: boolean;
  created_at?: string;
  last_login?: string;
  profile_image?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if the user is authenticated on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (token) {
          const response = await authApi.getCurrentUser();
          if (response.status === 200) {
            setUser(response.data);
          }
        }
      } catch (error) {
        console.error("Not authenticated", error);
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authApi.login(email, password);
      const { user, token } = response.data;
      
      // Store the token
      localStorage.setItem('authToken', token);
      
      setUser(user);
      toast.success("Successfully logged in!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      // Error handling is done in API interceptor
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authApi.register(email, username, password);
      const { user, token } = response.data;
      
      // Store the token
      localStorage.setItem('authToken', token);
      
      setUser(user);
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error: unknown) {
      console.error("Registration failed", error);
      // Error handling is done in API interceptor
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      localStorage.removeItem('authToken');
      setUser(null);
      toast.success("Successfully logged out!");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
      // Still remove token and user data on client side even if API call fails
      localStorage.removeItem('authToken');
      setUser(null);
      navigate("/");
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    setIsLoading(true);
    try {
      const response = await authApi.updateProfile(data);
      setUser(response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update failed", error);
      // Error handling is done in API interceptor
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const refreshSession = async () => {
    try {
      const response = await authApi.getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.error("Session refresh failed", error);
      // If session refresh fails, log the user out
      localStorage.removeItem('authToken');
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        refreshSession
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
