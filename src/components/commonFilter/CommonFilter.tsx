import "./commonFilter.scss";
import { regionData } from "@/src/constant/categories";

import { useRecoilState, useSetRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";

import { format } from "date-fns";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";

import AmountDropdown from "./filterDropdowns/AmountDropdown";
import DateDropdown from "./filterDropdowns/DateDropdown";
import LocationDropdown from "./filterDropdowns/LocationDropdown";
import { responseState } from "@/src/states/responseState";
import { detailState } from "@/src/states/detailState";

interface filterProps {
  isLocale?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CommonFilter = (props: filterProps) => {
  const setResponseStates = useSetRecoilState(responseState);
  const setDetailStates = useSetRecoilState(detailState);
  const [isSelected, setIsSelected] = useState<
    "location" | "date" | "amount" | null
  >(null);

  const [filterStates, setFilterStates] = useRecoilState(filterState);

  // date-fns 라이브러리로 Formatting을 합니다.
  const startDate = format(filterStates.startDate, "yyyy. MM. dd.");
  const endDate = filterStates.endDate
    ? format(filterStates.endDate, "yyyy. MM. dd.")
    : startDate;

  const filterSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onClick(e);
    setResponseStates({
      pageIndex: 0,
      responseArray: [],
    });
    setDetailStates([]);
    setIsSelected(null);
  };

  return (
    <div className="overall-container">
      <div className="filter__container">
        {props.isLocale && (
          <div
            onClick={() => setIsSelected("location")} //
            className={
              isSelected === "location"
                ? "filter__location select"
                : "filter__location"
            }
          >
            <span className="text-caption2 small-label">지역</span>
            <p>{regionData[filterStates.locale]}</p>
            <LocationDropdown //
              isSelected={isSelected}
              onChangeSelected={setIsSelected}
              categoryData={regionData}
            />
          </div>
        )}
        <div
          onClick={() => setIsSelected("date")} //
          className={
            isSelected === "date"
              ? "filter__schedule select"
              : "filter__schedule"
          }
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
          className={
            isSelected === "amount"
              ? "filter__accompany select"
              : "filter__accompany"
          }
        >
          <span className="text-caption2 small-label">인원</span>
          <p>{filterStates.amount}명</p>
          <AmountDropdown isSelected={isSelected} />
        </div>
        <button
          className="filter__primary-button"
          onClick={filterSubmitHandler}
        >
          <IoFilter />
        </button>
      </div>
      {isSelected !== null && (
        <div
          className="backdrop"
          onClick={() => {
            setFilterStates(prev => ({
              ...prev,
              locale: prev.current.locale,
              startDate: prev.current.startDate,
              endDate: prev.current.endDate,
              category: prev.current.category,
              amount: prev.current.amount,
            }));
            setIsSelected(null);
          }}
        ></div>
      )}
    </div>
  );
};

export default CommonFilter;
