import CommonFilter from "../commonFilter/CommonFilter";
import MyInfo from "./myInfo/MyInfo";
import "./commonHeader.scss";
import "../../styles/_theme.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../commonButton/CommonButton";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [locale, setLocale] = useState<"서울" | "경기">("서울");
  const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()]);
  const [amount, setAmount] = useState(2);

  const loginHandler = () => {
    navigate("/login");
    // good
  };

  return (
    <header className="header-container">
      <div className="header-container__inner">
        <section className="header-container__left">
          <div className="header-container__logo">빨리잡아!</div>
        </section>
        <section className="header-container__center">
          <CommonFilter //
            locale={locale}
            onChangeLocale={setLocale}
            date={date}
            amount={amount}
          />
        </section>
        <section className="header-container__right">{isLoggedIn ? <MyInfo></MyInfo> : <CommonButton text="로그인" buttonSize="small" shape="fill" colorName="coral500" onClick={loginHandler} />}</section>
      </div>
    </header>
  );
};

export default Header;
