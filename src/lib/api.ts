
import axios from "axios";
import { toast } from "sonner";

// Define the base URL for the API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Create an instance of axios with the base URL
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Important for cookies/authentication
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem('authToken');
    
    // If token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    
    if (response) {
      // Handle specific status codes
      switch (response.status) {
        case 401:
          // Unauthorized - redirect to login
          localStorage.removeItem('authToken');
          window.location.href = "/login";
          break;
        case 403:
          // Forbidden
          toast.error("You don't have permission to access this resource.");
          break;
        case 404:
          // Not found
          toast.error("The requested resource was not found.");
          break;
        case 422:
          // Validation error (Pydantic validation in FastAPI)
          const validationErrors = response.data?.detail || [];
          if (Array.isArray(validationErrors)) {
            validationErrors.forEach((err: any) => 
              toast.error(`${err.loc.join('.')}: ${err.msg}`)
            );
          } else {
            toast.error("Validation error. Please check your input.");
          }
          break;
        case 429:
          // Too many requests
          toast.error("Too many requests. Please try again later.");
          break;
        case 500:
          // Server error
          toast.error("An unexpected error occurred. Please try again later.");
          break;
        default:
          // Handle other errors
          toast.error(response.data?.detail || response.data?.message || "An error occurred. Please try again.");
      }
    } else {
      // Network error or other issues
      toast.error("Unable to connect to the server. Please check your internet connection.");
    }
    
    return Promise.reject(error);
  }
);

// API service functions for authentication
export const authApi = {
  register: (email: string, username: string, password: string) => 
    api.post("/api/auth/register", { email, username, password }),
    
  login: (email: string, password: string) => 
    api.post("/api/auth/login", { email, password }),
    
  logout: () => 
    api.post("/api/auth/logout"),
    
  getCurrentUser: () => 
    api.get("/api/auth/me"),
    
  updateProfile: (userData: any) => 
    api.put("/api/users/profile", userData),
};

// API service functions for feedback
export const feedbackApi = {
  getFeedback: () => 
    api.get("/api/feedback"),
    
  submitFeedback: (username: string, message: string) => 
    api.post(`/api/feedback/${username}`, { message }),
    
  deleteFeedback: (id: string) => 
    api.delete(`/api/feedback/${id}`),
    
  markAsRead: (id: string) => 
    api.patch(`/api/feedback/${id}/read`),
};

// API service functions for widgets
export const widgetsApi = {
  getWidgets: () => 
    api.get("/api/widgets"),
    
  createWidget: (widgetData: any) => 
    api.post("/api/widgets", widgetData),
    
  updateWidget: (id: string, widgetData: any) => 
    api.put(`/api/widgets/${id}`, widgetData),
    
  deleteWidget: (id: string) => 
    api.delete(`/api/widgets/${id}`),
    
  getWidgetStats: (id: string) => 
    api.get(`/api/widgets/${id}/stats`),
};

export default api;
