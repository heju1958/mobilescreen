import axios from "axios";

const api = axios.create({
  baseURL: "https://api-crud-python-2023.onrender.com",
  timeout: 5000,
});

export default api;
