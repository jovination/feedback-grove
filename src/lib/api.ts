
import axios from "axios";
import { toast } from "sonner";

// Define the base URL for the API
const API_URL = import.meta.env.VITE_API_URL || "https://api.feedbackwave.com";

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
          toast.error(response.data?.message || "An error occurred. Please try again.");
      }
    } else {
      // Network error or other issues
      toast.error("Unable to connect to the server. Please check your internet connection.");
    }
    
    return Promise.reject(error);
  }
);

export default api;
