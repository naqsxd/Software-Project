import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:9999/api",
  withCredentials: true,
});

export default apiRequest;