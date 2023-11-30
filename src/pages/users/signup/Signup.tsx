import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig } from "axios";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import TermsAgreement from "@/src/components/termsAgreement/TermsAgreement";
import { CommonButton } from "@/src/components";
import { ToastContainer } from "react-toastify";

import "../users.scss";

const Signup = () => {

  // 회원가입/로그인 링크이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  // 패스워드 숨김/보임처리
  const [isPwVisible, setIsPwVisible] = useState(false);
  const togglePw = (field: string) => {
    if (field === "password") {
      setIsPwVisible(prev => !prev);
    }
  };

  // 변수, state
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setError
  } = useForm<SignupData>({
    mode: 'onBlur', 
  });
  const nickname = watch("nickname") ?? '';

  // TODO : .env에서 가져올것
  const baseURL = 'http://ec2-43-201-113-97.ap-northeast-2.compute.amazonaws.com/';

  // 데이터 호출 함수
  const sendRequest = async ({ method, endpoint, data }: axiosI) => {
    try {
      const response = await axios({
        method,
        url: `${baseURL}${endpoint}`,
        data,
      });

      const nameData = response.data;

      if (nameData.data) {
        setNicknameError('중복된 닉네임입니다');
        setIsNicknameValid(false);
      } else {
        setNicknameError('사용가능한 닉네임입니다');
        setIsNicknameValid(true);
      }

      return response.data;
  
    } catch (error) {
      console.error(`에러 발생 (${method} 요청):`, error);
      throw error; 
    }
  };

  // 회원가입 폼 제출
  const onSubmit = (data: SignupData) => {
    if (isAllCheck) {
      sendRequest({
        method: 'post',
        endpoint: 'api/members/signup',
        data,
      });
      reset();
      window.alert('회원가입이 완료되었습니다');
      goToLogin();
    }
  };

  // 닉네임 중복확인
  const checkName = () => {
    setError('nickname', {
      type: 'manual',
      message: '', 
    });
    sendRequest({
      method: 'get',
      endpoint: `api/members/nickname?nickname=${nickname}`,
    });
  }

  // 중복확인 조건문
  const isNicknameValids =
  /^[A-Za-z가-힣]+$/.test(nickname) &&
  nickname.length >= 2 &&
  nickname.length <= 14;

  return (
    <>
      <div className="user-wrap">
        <div className="bg-wrap">
          <div className="login-wrap">
            <ul className="login-wrap__header">
              <li className="header-list">
                <a href="" className="link" onClick={goToLogin}>
                  로그인
                </a>
              </li>
              <li className="header-list">
                <a href="" className="link on">
                  회원가입
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="login-wrap__body">
                <div className="input-inner">
                  <label htmlFor="">이름</label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    {...register("name", {
                      required: "이름을 입력하세요",
                      pattern: {
                        value: /^[A-Za-z가-힣]{2,}$/,
                        message: "이름은 최소 2글자 이상 입력하세요",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="alert-message">{errors.name.message}</p>
                  )}
                </div>
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
                  <label htmlFor="">닉네임</label>
                  <div className="input-inner__item">
                    <input
                      type="text"
                      placeholder="닉네임을 입력하세요"
                      {...register("nickname", {
                        required: "닉네임을 입력하세요",
                        minLength: {
                          value: 2,
                          message: "닉네임은 최소 2글자 이상 입력하세요",
                        },
                        maxLength: {
                          value: 14,
                          message: "닉네임은 최대 14글자를 초과할 수 없습니다",
                        },
                        pattern: {
                          value: /^[A-Za-z가-힣]+$/,
                          message: "영어와 한글만 입력 가능합니다",
                        },
                      })}
                      onFocus={() => setNicknameError('')}
                    />
                    <button className="btn-check" onClick={checkName} disabled={!isNicknameValids}>중복확인</button>
                  </div>
                  {errors.nickname && (
                    <p className="alert-message">{errors.nickname.message}</p>
                  )}
                  {nicknameError && (
                    <p className="alert-message">{nicknameError}</p>
                  )}
                </div>
                <div className="input-inner">
                  <label htmlFor="">생년월일</label>
                  <input
                    type="text"
                    placeholder="생년월일을 입력하세요 (yyyy-mm-dd)"
                    {...register("birthday", {
                      required: "생년월일을 입력하세요",
                      pattern: {
                        value: /^\d{4}-\d{2}-\d{2}$/,
                        message:
                          "올바른 형식의 생년월일을 입력하세요 (yyyy-mm-dd)",
                      },
                    })}
                  />
                  {errors.birthday && (
                    <p className="alert-message">{errors.birthday.message}</p>
                  )}
                </div>
                <div className="input-inner">
                  <label htmlFor="">휴대폰 번호</label>
                  <input
                    type="number"
                    placeholder="숫자만 입력하세요"
                    {...register("phoneNumber", {
                      required: "휴대폰 번호를 입력하세요",
                      minLength: {
                        value: 10,
                        message: "10자리 이상 입력하세요",
                      },
                      maxLength: {
                        value: 11,
                        message: "11자리 이하로 입력하세요",
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "숫자만 입력하세요",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="alert-message">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="input-inner">
                  <label htmlFor="">비밀번호</label>
                  <div className="input-inner__item">
                    <input
                      type={isPwVisible ? "text" : "password"}
                      placeholder="영문자, 숫자 포함 최소 8~20자로 입력하세요"
                      {...register("password", {
                        required: "비밀번호를 입력하세요",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                          message: "영문자, 숫자 포함 최소 8~20자로 입력하세요",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="btn-visible"
                      onClick={() => togglePw("password")}
                    >
                      {isPwVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="alert-message">{errors.password.message}</p>
                  )}
                </div>
                <TermsAgreement
                  isAllCheck={isAllCheck}
                  setIsAllCheck={setIsAllCheck}
                />
                <CommonButton
                  type="submit"
                  buttonSize="large"
                  text="회원가입"
                  isPassed={isAllCheck && isNicknameValid}
                />
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

interface SignupData {
  name: string;
  email: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
  password: string;
}

interface axiosI {
  method: AxiosRequestConfig["method"];
  endpoint: string;
  data?: AxiosRequestConfig["data"];
}
