import axios, { AxiosRequestConfig } from "axios";

interface axiosI {
  method: AxiosRequestConfig["method"];
  endpoint: string;
  data?: AxiosRequestConfig["data"];
}

const baseURL = 'http://ec2-43-201-113-97.ap-northeast-2.compute.amazonaws.com';

// const defaultHeaders = {
//   'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
// };

export const sendRequest = async ({ method, endpoint, data }: axiosI) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${endpoint}`,
      data,
      // headers: defaultHeaders,
    });
    console.log(`${method} 요청 성공:`, response.data);
    return response.data;

  } catch (error) {
    console.error(`에러 발생 (${method} 요청):`, error);
    throw error; 
  }
};