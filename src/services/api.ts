import axios from "axios";

const BASE_URL = "https://cs-portfolio-server.vercel.app"
// const BASE_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});