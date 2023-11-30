import axios, { AxiosRequestConfig } from "axios";

interface axiosI {
  method: AxiosRequestConfig["method"];
  url: string;
  data?: AxiosRequestConfig["data"];
}

export const sendRequest = async ({ method, url, data }: axiosI) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    console.log(`${method} 요청 성공:`, response.data);

    return response.data;
  } catch (error) {
    console.error(`에러 발생 (${method} 요청):`, error);

    throw error; 
  }
};