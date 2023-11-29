import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommonButton } from "@/src/components";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

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
    setIsPwVisible((prev) => !prev);
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
                <a className="link" 
                onClick={goToSignUp}>회원가입</a>
              </li>
            </ul> 
            <form action="">
              <div className="login-wrap__body">
                <div className="input-inner">
                  <label htmlFor="">아이디</label>
                  <input type="text" placeholder="아이디를 입력해주세요" />
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
                    onClick={() => togglePw()}
                  >
                    {isPwVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
              </div>
                <CommonButton
                text={'로그인'}
                buttonSize={'large'}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
