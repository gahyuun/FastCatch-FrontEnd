import axios from "axios";
import { useSetRecoilState } from "recoil";

import { userInfoI, userState } from "@/states/userState";

export const useAuth = () => {

  const setUserInfo = useSetRecoilState(userState);

  const setToken = (
    accessToken: string, refreshToken: string, memberRes: userInfoI
  ) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setUserInfo(memberRes)
  }
  return {
    setToken
  }
}

export async function refreshAccessToken () {

  const refreshToken = localStorage.getItem("refreshToken");
  const userDataString = localStorage.getItem("userState");

  if (!userDataString) {
    console.error('User data not found in localStorage');
    return
  }

  const userData = JSON.parse(userDataString);
  const userEmail = userData.email;

  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/members/re-token`,
    { email: userEmail },
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log('토큰 재발급 성공', response.data);
  const newAccessToken = response.data.data.accessToken;
  localStorage.setItem('accessToken', newAccessToken);

  return newAccessToken;
}
