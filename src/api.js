import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function generateResponse(prompt) {
  // Uncomment to mock without a backend:
  // await new Promise(r => setTimeout(r, 600));
  // return `Echo: ${prompt}`;

  const res = await axios.post(`${API_URL}/generate`, { prompt });
  return res?.data?.output ?? "No response.";
}
