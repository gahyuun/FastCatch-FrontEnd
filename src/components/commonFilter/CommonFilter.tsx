import ReactDOM from "react-dom";
import "./commonFilter.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/atom";

import { format } from "date-fns";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

import AmountDropdown from "./filterDropdowns/AmountDropdown";
import DateDropdown from "./filterDropdowns/DateDropdown";
import LocationDropdown from "./filterDropdowns/LocationDropdown";

interface filterProps {
  isLocale?: boolean;
}

const CommonFilter = (props: filterProps) => {
  const categoryData = {
    GYEONGGI: "경기",
    SEOUL: "서울",
    GANGWON: "강원",
    CHUNGCHEONG: "충청",
    HONAM: "호남",
    GYEONGSANG: "경상",
    JEJU: "제주",
  };

  const [isSelected, setIsSelected] = useState<"location" | "date" | "amount" | null>(null);

  const [filterStates] = useRecoilState(filterState);
  console.log(filterStates);

  // date-fns 라이브러리로 Formatting을 합니다.
  const startDate = format(filterStates.startDate, "yyyy. MM. dd.");
  const endDate = filterStates.endDate ? format(filterStates.endDate, "yyyy. MM. dd.") : startDate;

  return (
    <div className="overall-container">
      <div className="filter__container">
        {props.isLocale && (
          <div
            onClick={() => setIsSelected("location")} //
            className={isSelected === "location" ? "filter__location select" : "filter__location"}
          >
            <span className="text-caption2 small-label">지역</span>
            <p>{categoryData[filterStates.locale]}</p>
            <LocationDropdown //
              isSelected={isSelected}
              onChangeSelected={setIsSelected}
              categoryData={categoryData}
            />
          </div>
        )}
        <div
          onClick={() => setIsSelected("date")} //
          className={isSelected === "date" ? "filter__schedule select" : "filter__schedule"}
        >
          <span className="text-caption2 small-label">일정</span>
          <p>
            {startDate} - {endDate}
          </p>
          <DateDropdown //
            isSelected={isSelected}
            startDate={filterStates.startDate}
            endDate={filterStates.endDate}
          />
        </div>
        <div
          onClick={() => setIsSelected("amount")} //
          onBlur={() => setIsSelected(null)}
          className={isSelected === "amount" ? "filter__accompany select" : "filter__accompany"}
        >
          <span className="text-caption2 small-label">인원</span>
          <p>{filterStates.amount}명</p>
          <AmountDropdown isSelected={isSelected} />
        </div>
        <button className="filter__primary-button">
          <IoFilter />
        </button>
      </div>
      {isSelected !== null && ReactDOM.createPortal(<div className="backdrop" onClick={() => setIsSelected(null)}></div>, document.getElementById("root") as Element)}
    </div>
  );
};

export default CommonFilter;
