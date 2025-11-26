// Environment variables configuration
// In Vite, only variables prefixed with VITE_ are exposed to the client

export const env = {
  // API Configuration
  VITE_API_URL: import.meta.env.VITE_API_URL || "http://localhost:3001",
  VITE_API_BASE_PATH: import.meta.env.VITE_API_BASE_PATH || "/api",

  // App Configuration
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || "React + Vite + TypeScript",
  VITE_APP_ENV:
    import.meta.env.VITE_APP_ENV || import.meta.env.MODE || "development",

  // Frontend Configuration
  VITE_FRONTEND_PORT: import.meta.env.VITE_FRONTEND_PORT || "3000",
} as const;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string = ""): string => {
  const baseUrl = env.VITE_API_URL;
  const basePath = env.VITE_API_BASE_PATH;
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${baseUrl}${basePath}${cleanEndpoint ? `/${cleanEndpoint}` : ""}`;
};

// Type-safe environment check
export const isDevelopment = (): boolean => env.VITE_APP_ENV === "development";
export const isProduction = (): boolean => env.VITE_APP_ENV === "production";
