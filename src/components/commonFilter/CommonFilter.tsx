import React from "react";
import "./commonFilter.scss";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import AmountDropdown from "./filterDropdowns/AmountDropdown";
import DateDropdown from "./filterDropdowns/DateDropdown";
import LocationDropdown from "./filterDropdowns/LocationDropdown";

interface filterProps {
  date: [Date, Date];
  amount: number;
  locale?: [string, boolean][];
  onChangeLocale: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
  onChangeAmount: React.Dispatch<React.SetStateAction<number>>;
}

const CommonFilter = (props: filterProps) => {
  const [isSelected, setIsSelected] = useState<"location" | "date" | "amount" | null>(null);

  // 선택이 true인 것을 찾습니다.
  const selectedLocale = (props.locale?.find((value) => value[1] === true) as [string, boolean])[0];

  return (
    <div className="overall-container">
      <div className="filter__container">
        {props.locale && (
          <>
            <button
              onClick={() => setIsSelected("location")} //
              onBlur={() => setIsSelected(null)}
              className={isSelected === "location" ? "filter__location select" : "filter__location"}
            >
              <span className="text-caption2 small-label">지역</span>
              <p>{selectedLocale}</p>
              <LocationDropdown //
                onChangeFilter={setIsSelected}
                isSelected={isSelected}
                locale={props.locale}
                onChangeLocale={props.onChangeLocale}
              />
            </button>
          </>
        )}
        <button
          onFocus={() => setIsSelected("date")} //
          onBlur={() => setIsSelected(null)}
          className={isSelected === "date" ? "filter__schedule select" : "filter__schedule"}
        >
          <span className="text-caption2 small-label">일정</span>
          <p>
            {props.date[0].toLocaleDateString()} - {props.date[1].toLocaleDateString()}
          </p>
          <DateDropdown isSelected={isSelected} />
        </button>
        <button
          onFocus={() => setIsSelected("amount")} //
          onBlur={() => setIsSelected(null)}
          className={isSelected === "amount" ? "filter__accompany select" : "filter__accompany"}
        >
          <span className="text-caption2 small-label">인원</span>
          <p>{props.amount}명</p>
          <AmountDropdown isSelected={isSelected} amount={props.amount} onChangeAmount={props.onChangeAmount} />
        </button>
        <button className="filter__sort-button">
          <IoFilter />
        </button>
      </div>
    </div>
  );
};

export default CommonFilter;
