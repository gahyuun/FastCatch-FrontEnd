import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommonButton } from "@/src/components";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import "../users.scss";
import TermsAgreement from "@/src/components/termsAgreement/TermsAgreement";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  // 회원가입/로그인 링크이동
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  // 패스워드 숨김/보임처리
  const [isPwVisible, setIsPwVisible] = useState(false);

  const togglePw = (field: string) => {
    if (field === "password") {
      setIsPwVisible((prev) => !prev);
    }
  };

  interface SignupData {
    name: string;
    email: string;
    nickname: string;
    birthday: string; 
    phoneNumber: number;
    password: string;
  }

  const [isAllCheck, setIsAllCheck] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignupData>();
  const onSubmit: SubmitHandler<SignupData> = (data: SignupData) => {
    if (isAllCheck) {
      const postUser = async () => {
        try {
          const response = await axios.post('/members/signup', data);
          console.log('post 요청 성공:', response.data);
        } catch (error) {
          console.error('에러 발생:', error);
        }
      };
      postUser();
      reset();
    } else {
      alert('약관에 동의해주세요!');
    }
  }

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
            <form action="">
              <div className="login-wrap__body">
              <div className="input-inner">
                <label htmlFor="">이름</label>
                <input type="text" placeholder="이름을 입력해주세요" />
              </div>
              <div className="input-inner">
                <label htmlFor="">아이디</label>
                <div className="input-inner__item">
                  <input type="text" placeholder="아이디를 입력해주세요" />
                  <button className="btn-check">중복확인</button>
                </div>
              </div>
              <div className="input-inner">
                <label htmlFor="">닉네임</label>
                <div className="input-inner__item">
                  <input type="text" placeholder="닉네임을 입력해주세요" />
                  <button className="btn-check">중복확인</button>
                </div>
              </div>
              <div className="input-inner">
                <label htmlFor="">휴대폰 번호</label>
                <input type="text" placeholder="숫자만 입력해주세요" />
              </div>
              <div className="input-inner">
                <label htmlFor="">비밀번호</label>
                <div className="input-inner__item">
                  <input
                    placeholder="비밀번호를 입력해주세요"
                    type={isPwVisible ? "text" : "password"}
                  />
                  <button type="button"
                    className="btn-visible"
                    onClick={() => togglePw('password')}
                  >
                    {isPwVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
              <div className="input-inner">
                <label htmlFor="">비밀번호 확인</label>
                <div className="input-inner__item">
                  <input
                      placeholder="비밀번호를 입력해주세요"
                      type={isPwsVisible ? "text" : "password"}
                    />
                    <button type="button"
                      className="btn-visible"
                      onClick={() => togglePw('confirmPassword')}
                    >
                      {isPwsVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                </div>
              </div>
              <ul className="agree-inner">
                <TermsAgreement />
              </ul>
                <CommonButton
                text={'회원가입'}
                buttonSize={'large'}
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
