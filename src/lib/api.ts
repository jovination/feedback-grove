import axios from "axios";
import { toast } from "sonner";

// Define the base URL for the API
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Create an axios instance
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (response) {
      const { status, data } = response;

      switch (status) {
        case 401:
          localStorage.removeItem("authToken");
          toast.error("Unauthorized. Please log in again.");
          window.location.href = "/login";
          break;

        case 403:
          toast.error("You don't have permission to access this resource.");
          break;

        case 404:
          toast.error("The requested resource was not found.");
          break;

        case 422:
          handleValidationError(data.detail);
          break;

        case 429:
          toast.error("Too many requests. Please try again later.");
          break;

        case 500:
          toast.error("An unexpected server error occurred.");
          break;

        default:
          toast.error(data?.message || "An error occurred. Please try again.");
      }
    } else {
      toast.error("Network error. Please check your internet connection.");
    }

    return Promise.reject(error);
  }
);

interface ValidationError {
  loc: string[];
  msg: string;
  type: string;
}

// Handle validation errors from backend
const handleValidationError = (errors: ValidationError[]) => {
  if (Array.isArray(errors)) {
    errors.forEach((err) => {
      const field = err.loc?.join(".") || "Field";
      toast.error(`${field}: ${err.msg}`);
    });
  } else {
    toast.error("Invalid request format. Please check your input.");
  }
};

// --- Auth API ---
export const authApi = {
  register: (email: string, username: string, password: string) =>
    api.post("/api/auth/register", { email, username, password }),

  login: (email: string, password: string) =>
    api.post(
      "/api/auth/login",
      new URLSearchParams({
        grant_type: "password",
        username: email,
        password: password,
        scope: "",
        client_id: "",
        client_secret: "",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ),

  logout: () => api.post("/api/auth/logout"),
  getCurrentUser: () => api.get("/api/auth/me"),
  updateProfile: (userData: object) => api.put("/api/users/profile", userData),
};

// --- Feedback API ---
export const feedbackApi = {
  getFeedback: () => api.get("/api/feedback"),
  submitFeedback: (username: string, message: string) =>
    api.post(`/api/feedback/${username}`, { message }),
  deleteFeedback: (id: string) => api.delete(`/api/feedback/${id}`),
  markAsRead: (id: string) => api.patch(`/api/feedback/${id}/read`),
};

// --- Widgets API ---
export const widgetsApi = {
  getWidgets: () => api.get("/api/widgets"),
  createWidget: (widgetData: object) => api.post("/api/widgets", widgetData),
  updateWidget: (id: string, widgetData: object) =>
    api.put(`/api/widgets/${id}`, widgetData),
  deleteWidget: (id: string) => api.delete(`/api/widgets/${id}`),
  getWidgetStats: (id: string) => api.get(`/api/widgets/${id}/stats`),
};

export default api;
