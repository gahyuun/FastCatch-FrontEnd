import axios, { AxiosInstance } from "axios";
import { getToken } from "../utils/getToken";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json";
    const accessToken = getToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    https: return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  }
);

export default instance;
