import "./commonHeader.scss";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

import CommonFilter from "../commonFilter/CommonFilter";
import MyInfo from "./myInfo/MyInfo";
import CommonButton from "../commonButton/CommonButton";
import CartButton from "./cartButton/CartButton";
import SearchFilter from "./searchFilter/SearchFilter";
import CategoryFilter from "./categoryFilter/CategoryFilter";

import { useRecoilState } from "recoil";
import { filterState } from "@/states/filterState";
import { format } from "date-fns";
import { fetchAccommodationsData } from "@/hooks/fetchAccommodations";
import { useQuery } from "react-query";
import LogoutButton from "./logoutButton/LogoutButton";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filterStates, setFilterStates] = useRecoilState(filterState);

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

  const startDate = format(filterStates.current.startDate, "yyyy-MM-dd");
  const endDate = filterStates.current.endDate
    ? format(filterStates.current.endDate, "yyyy-MM-dd")
    : startDate;

  const { refetch } = useQuery({
    queryKey: ["accommodations"],
    queryFn: () =>
      fetchAccommodationsData(
        filterStates.current.locale,
        startDate,
        endDate,
        filterStates.current.category,
        filterStates.current.amount,
        1
      ),
    select: data => data.data,
  });

  const changeFilterHandler = () => {
    setFilterStates(prevStates => ({
      ...prevStates,
      current: {
        locale: filterStates.locale,
        startDate: filterStates.startDate,
        endDate: filterStates.endDate,
        category: filterStates.category,
        amount: filterStates.amount,
      },
    }));
    setTimeout(() => refetch(), 200);
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
              <CommonFilter onClick={changeFilterHandler} isLocale={true} />
            )}
            {filterMode === "search" && <SearchFilter />}
            <button
              className="filter__secondary-button"
              onClick={changeFilterModeHandler}
            >
              {filterMode === "filter" && (
                <IoIosSearch className="secondary-button__icon" />
              )}
              {filterMode === "search" && (
                <IoFilter className="secondary-button__icon" />
              )}
            </button>
          </section>
          <section className="header-container__right">
            {localStorage.getItem("accessToken") ? ( //
              <>
                <CartButton />
                <LogoutButton />
                <MyInfo />
              </>
            ) : (
              <CommonButton
                text="로그인"
                buttonSize="small"
                shape="fill"
                colorName="coral500"
                onClick={moveToLoginHandler}
              />
            )}
          </section>
        </div>
      </header>
      {location.pathname === "/" && <CategoryFilter />}
    </>
  );
};

export default Header;
