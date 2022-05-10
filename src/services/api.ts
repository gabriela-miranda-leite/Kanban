import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:5000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
