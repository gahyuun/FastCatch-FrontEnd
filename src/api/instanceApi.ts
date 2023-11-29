import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://ec2-43-201-113-97.ap-northeast-2.compute.amazonaws.com/",
  timeout: 5000,
});

export { axiosInstance };
