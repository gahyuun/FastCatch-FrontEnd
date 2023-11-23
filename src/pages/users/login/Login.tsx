import CommonButton from '../../../components/commonButton/CommonButton'
import './login.scss'

const Login = () => {
  return (
    <>
      <div className="login-wrap">
        <ul className="login-wrap__header">
          <li>
            <a href="">로그인</a>
          </li>
          <li>
            <a href="">회원가입</a>
          </li>
        </ul>
          <div className="login-wrap__body">
            <div className="input-inner">
              <label htmlFor="">아이디</label>
              <input type="text" />
            </div>
            <div className="input-inner">
              <label htmlFor="">비밀번호</label>
              <input type="text" />
            </div>
            <CommonButton
            text={'로그인'}
            size={'large'}
           />
          </div>
          <div className="login-wrap__body">
            <div className="input-inner">
              <label htmlFor="">아이디</label>
              <input type="text" />
            </div>
            <div className="input-inner">
              <label htmlFor="">비밀번호</label>
              <input type="text" />
            </div>
            <CommonButton 
            text={'로그인'}
            size={'large'}
           />
          </div>
      </div>
    </>
  )
}

export default Login
