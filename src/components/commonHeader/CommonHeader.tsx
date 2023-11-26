import "./commonHeader.scss";
import "../../styles/_theme.scss";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

import CommonFilter from "../commonFilter/CommonFilter";
import MyInfo from "./myInfo/MyInfo";
import CommonButton from "../commonButton/CommonButton";
import CartButton from "./cartButton/CartButton";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import SearchFilter from "./searchFilter/SearchFilter";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [amount, setAmount] = useState(2);

  const [isLoggedIn] = useState(true);
  const [filterMode, setFilterMode] = useState<"filter" | "search">("filter");

  const changeFilterModeHandler = () => {
    console.log(filterMode, "!");
    if (filterMode === "filter") {
      setFilterMode("search");
    } else {
      setFilterMode("filter");
    }
  };

  const moveToLoginHandler = () => {
    navigate("/login");
  };

  const clickLogoHandler = () => {
    navigate("/");
  };

  return (
    <>
      <header className="header-container">
        <div className="header-container__inner">
          <section className="header-container__left">
            <div className="header-container__logo" onClick={clickLogoHandler}>
              빨리잡아!
            </div>
          </section>
          <section className="header-container__center">
            {filterMode === "filter" && (
              <CommonFilter //
                locale={locale}
                onChangeLocale={setLocale}
                startDate={startDate}
                onChangeStartDate={setStartDate}
                endDate={endDate}
                onChangeEndDate={setEndDate}
                amount={amount}
                onChangeAmount={setAmount}
              />
            )}
            {filterMode === "search" && <SearchFilter />}
            <button className="filter__search-button" onClick={changeFilterModeHandler}>
              {filterMode === "filter" && <IoIosSearch className="search-button__icon" />}
              {filterMode === "search" && <IoFilter className="search-button__icon" />}
            </button>
          </section>
          <section className="header-container__right">
            {isLoggedIn ? ( //
              <>
                <CartButton />
                <MyInfo />
              </>
            ) : (
              <CommonButton text="로그인" buttonSize="small" shape="fill" colorName="coral500" onClick={moveToLoginHandler} />
            )}
          </section>
        </div>
      </header>
      {location.pathname === "/" && <CategoryFilter />}
    </>
  );
};

export default Header;
