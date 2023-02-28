import axios from "axios";

const api = axios.create({
  baseURL: "https://api-crud-employees.onrender.com",
  timeout: 5000,
});

export default api;
