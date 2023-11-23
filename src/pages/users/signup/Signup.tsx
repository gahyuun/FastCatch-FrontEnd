import CommonButton from "components/commonButton/CommonButton"
import CommonInput from "components/commonInput/CommonInput";
import { useNavigate } from "react-router-dom";

import "../users.scss";

const Signup = () => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div className='bg-wrap'>
        <div className="login-wrap">
          <ul className="login-wrap__header">
            <li className="header-list">
              <a href="" className="link" onClick={goToLogin}>로그인</a>
            </li>
            <li className="header-list">
              <a href="" className="link on">회원가입</a>
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
              <input type="text" placeholder="아이디를 입력해주세요" />
            </div>
            <div className="input-inner">
              <label htmlFor="">닉네임</label>
              <input type="text" placeholder="닉네임을 입력해주세요" />
            </div>
            <div className="input-inner">
              <label htmlFor="">휴대폰 번호</label>
              <input type="text" placeholder="숫자만 입력해주세요" />
            </div>
            <div className="input-inner">
              <label htmlFor="">비밀번호</label>
              <input type="text" placeholder="비밀번호를 입력해주세요" />
            </div>
            <div className="input-inner">
              <label htmlFor="">비밀번호 확인</label>
              <input type="text" placeholder="비밀번호를 입력해주세요" />
            </div>
            <ul className="agree-inner">
              {/* <TermsAgreement /> */}
            </ul>
              <CommonButton
              text={'회원가입'}
              buttonSize={'large'}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
