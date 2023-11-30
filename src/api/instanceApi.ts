import axios, { AxiosInstance } from "axios";

const accessToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjY2NjQG5hdmVyLmNvbSIsImlhdCI6MTcwMTMyODA3NSwiZXhwIjoxNzAxNDE0NDc1fQ.5fVvglqa1ZfwDu7ztQ5Tzc-vNexO-lp6OHvNhaDcPPiiEoiCz7IuyhXjH5ZJDXgN4Bi0RGpGVslk0p4Nj3D2Tg";

const instance: AxiosInstance = axios.create({
  baseURL: "http://ec2-43-201-113-97.ap-northeast-2.compute.amazonaws.com/",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  config => {
    // const accessToken = getToken();
    // config.headers["Content-Type"] = "application/json";
    // config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // if (response.status === 404) {
    //   console.log("404 페이지로 넘어가야 함!");
    // }

    return response;
  },
  async error => {
    // if (error.response?.status === 401) {
    //   if (isTokenExpired()) await tokenRefresh();

    //   const accessToken = getToken();

    //   error.config.headers = {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accessToken}`,
    //   };

    //   const response = await axios.request(error.config);
    //   return response;
    // }
    return Promise.reject(error);
  }
);

export default instance;
