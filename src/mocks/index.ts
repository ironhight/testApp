import axios from "axios";

const api = axios.create({
  baseURL: "http://5dd690cfce4c300014403a93.mockapi.io/api/dashboard"
});

export default api;
