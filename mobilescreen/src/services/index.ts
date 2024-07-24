import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-node-api-j7pt.onrender.com",
  timeout: 5000,
});

export default api;
