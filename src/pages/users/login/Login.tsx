import { useNavigate } from "react-router-dom";
import CommonButton from "../../../components/commonButton/CommonButton"

import "../users.scss";

const Login = () => {

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="bg-wrap">
        <div className="login-wrap">
          <ul className="login-wrap__header">
            <li className="header-list">
              <a href="" className="link on">로그인</a>
            </li>
            <li className="header-list">
              <a href="" className="link" onClick={goToSignUp}>회원가입</a>
            </li>
          </ul> 
          <div className="login-wrap__body">
            <div className="input-inner">
              <label htmlFor="">아이디</label>
              <input type="text" placeholder="아이디를 입력해주세요" />
            </div>
            <div className="input-inner">
              <label htmlFor="">비밀번호</label>
              <input type="text" placeholder="비밀번호를 입력해주세요" />
            </div>
            <CommonButton
            text={'로그인'}
            buttonSize={'large'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
