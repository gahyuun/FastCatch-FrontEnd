import React from "react";
import "./commonFilter.scss";
import { IoFilter } from "react-icons/io5";
import { useState } from "react";
import AmountDropdown from "./filterDropdowns/AmountDropdown";
import DateDropdown from "./filterDropdowns/DateDropdown";
import LocationDropdown from "./filterDropdowns/LocationDropdown";

interface filterProps {
  locale?: string;
  date: [Date, Date];
  amount: number;
  onChangeLocale: React.Dispatch<React.SetStateAction<"서울" | "경기">>;
}

const CommonFilter = (props: filterProps) => {
  const [isSelected, setIsSelected] = useState<"location" | "date" | "amount" | null>(null);

  const selectedHandler = (target: "location" | "date" | "amount" | null) => {
    setIsSelected(target);
  };

  return (
    <div className="overall-container">
      <div className="filter__container">
        {props.locale && (
          <>
            <button
              onClick={() => selectedHandler("location")} //
              onBlur={() => selectedHandler(null)}
              className={isSelected === "location" ? "filter__location select" : "filter__location"}
            >
              <span className="text-caption2 small-label">지역</span>
              <p>{props.locale}</p>
              <LocationDropdown //
                onClick={selectedHandler}
                isSelected={isSelected}
                locale={props.locale}
                onChangeLocale={props.onChangeLocale}
              />
            </button>
          </>
        )}
        <button
          onFocus={() => selectedHandler("date")} //
          onBlur={() => selectedHandler(null)}
          className={isSelected === "date" ? "filter__schedule select" : "filter__schedule"}
        >
          <span className="text-caption2 small-label">일정</span>
          <p>
            {props.date[0].toLocaleDateString()} - {props.date[1].toLocaleDateString()}
          </p>
          <DateDropdown isSelected={isSelected} />
        </button>
        <button
          onFocus={() => selectedHandler("amount")} //
          onBlur={() => selectedHandler(null)}
          className={isSelected === "amount" ? "filter__accompany select" : "filter__accompany"}
        >
          <span className="text-caption2 small-label">인원</span>
          <p>{props.amount}명</p>
          <AmountDropdown isSelected={isSelected} />
        </button>
        <button className="filter__sort-button">
          <IoFilter />
        </button>
      </div>
    </div>
  );
};

export default CommonFilter;
