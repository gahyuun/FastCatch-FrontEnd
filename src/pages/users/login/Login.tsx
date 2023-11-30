import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig } from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "@/src/states/userState";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { CommonButton } from "@/src/components";
import CommonToastLayout from "@/src/components/commonToast/CommonToastLayout";

import "../users.scss";

const Login = () => {
  // 회원가입/로그인 링크이동
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/signup");
  };

  // 패스워드 숨김/보임처리
  const [isPwVisible, setIsPwVisible] = useState(false);
  const togglePw = () => {
    setIsPwVisible(prev => !prev);
  };

  // 변수, state
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginData>({
    mode: "onBlur",
  });
  const setUserInfo = useSetRecoilState(userState);
  const [errorMsg, setErrorMsg] = useState("");
  const { showToast, ToastContainer } = CommonToastLayout();

  // TODO : .env에서 가져올것
  const baseURL =
    "http://ec2-54-180-97-194.ap-northeast-2.compute.amazonaws.com/";

  // 데이터 호출 함수
  const sendRequest = async ({ method, endpoint, data }: axiosI) => {
    try {
      const response = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        data,
      });

      const resData = response.data;
      const userData = resData.data;

      // 엑세스 토큰 로컬스토리지 저장
      const { accessToken, memberResponse }: memberResI = userData;
      localStorage.setItem("accessToken", accessToken);

      // 유저정보 전역상태관리
      setUserInfo(memberResponse);

      navigate("/");

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.response?.data.errorMessage);
        throw error;
      } else {
        console.error(error);
        throw error;
      }
    }
  };

  // 오류메시지 노출
  useEffect(() => {
    if (errorMsg) {
      showToast({
        theme: "error",
        message: errorMsg,
      });
    }
  }, [errorMsg]);

  // 로그인 폼 제출
  const onSubmit = (data: loginData) => {
    sendRequest({
      method: "post",
      endpoint: "api/members/signin",
      data,
    });
    reset();
  };

  return (
    <>
      <div className="user-wrap">
        <div className="bg-wrap">
          <div className="login-wrap">
            <ul className="login-wrap__header">
              <li className="header-list">
                <a className="link on">로그인</a>
              </li>
              <li className="header-list">
                <a className="link" onClick={goToSignUp}>
                  회원가입
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login-wrap__body">
                <div className="input-inner">
                  <label htmlFor="">이메일</label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    {...register("email", {
                      required: "이메일을 입력하세요",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "유효한 이메일 주소를 입력하세요",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="alert-message">{errors.email.message}</p>
                  )}
                </div>
                <div className="input-inner">
                  <label htmlFor="">비밀번호</label>
                  <div className="input-inner__item">
                    <div className="button-inner">
                      <input
                        placeholder="비밀번호를 입력하세요"
                        type={isPwVisible ? "text" : "password"}
                        {...register("password", {
                          required: "비밀번호를 입력하세요",
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                            message:
                              "영문자, 숫자 포함 최소 8~20자로 입력하세요",
                          },
                        })}
                        data-cy="password-input"
                      />
                      <button
                        type="button"
                        className="btn-visible"
                        onClick={() => togglePw()}
                      >
                        {isPwVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="alert-message">{errors.password.message}</p>
                    )}
                  </div>
                </div>
                <CommonButton
                  type="submit"
                  text={"로그인"}
                  buttonSize={"large"}
                />
                {ToastContainer}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

interface loginData {
  email: string;
  password: string;
}

interface axiosI {
  method: AxiosRequestConfig["method"];
  endpoint: string;
  data?: AxiosRequestConfig["data"];
}

interface memberInfoI {
  id: number;
  email: string;
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
  cartId: number;
}

interface memberResI {
  accessToken: string;
  refreshToken: string;
  memberResponse: memberInfoI;
}
