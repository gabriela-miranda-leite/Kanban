import axios from "axios";
const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const api = axios.create({
  baseURL: "http://0.0.0.0:5000",
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
