const fallbackBaseUrl = "http://localhost:5000";

const resolvedBaseUrl = (() => {
  const envUrl = import.meta?.env?.VITE_API_URL;
  if (typeof envUrl === "string" && envUrl.trim()) {
    return envUrl.trim();
  }
  return fallbackBaseUrl;
})();

export default resolvedBaseUrl;
