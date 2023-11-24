import CommonFilter from "../commonFilter/CommonFilter";
import MyInfo from "./myInfo/MyInfo";
import "./commonHeader.scss";
import "../../styles/_theme.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../commonButton/CommonButton";

const Header = () => {
  const [isLoggedIn] = useState(false);
  const navigate = useNavigate();

  const categoryData: [string, boolean][] = [
    ["서울", true],
    ["경기", false],
    ["강원", false],
    ["충청", false],
    ["전라", false],
    ["경상", false],
    ["제주", false],
  ];

  const [locale, setLocale] = useState(categoryData);
  const [date] = useState<[Date, Date]>([new Date(), new Date()]);
  const [amount] = useState(2);

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
