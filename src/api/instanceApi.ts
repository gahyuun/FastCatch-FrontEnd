import axios, { AxiosInstance } from "axios";
import { getToken } from "../utils/getToken";

// const accessToken =
//   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjY2NjQG5hdmVyLmNvbSIsImlhdCI6MTcwMTMyODA3NSwiZXhwIjoxNzAxNDE0NDc1fQ.5fVvglqa1ZfwDu7ztQ5Tzc-vNexO-lp6OHvNhaDcPPiiEoiCz7IuyhXjH5ZJDXgN4Bi0RGpGVslk0p4Nj3D2Tg";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_TEST_SERVER,
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
