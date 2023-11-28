import React from "react";
import "./locationDropdownEls.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";
import { filterStateTypes } from "@/src/states/filterState";

interface locationProps {
  allocated: [string, string];
  onChangeSelected: React.Dispatch<React.SetStateAction<"location" | "date" | "amount" | null>>;
}

const LocationCategoryName = (props: locationProps) => {
  const [filterStates, setFilterStates] = useRecoilState(filterState);

  const selectionHandler = (event: React.MouseEvent) => {
    event.stopPropagation(); // 버블링 방지
    setFilterStates((prevStates) => {
      return { ...prevStates, locale: props.allocated[0] as filterStateTypes["locale"] };
    });

    props.onChangeSelected("date"); // 일정 필터로 바꿈
  };

  return (
    <div
      className={props?.allocated[0] === filterStates.locale ? "selected" : "unSelected"} //
      onClick={selectionHandler}
    >
      {props.allocated[1]}
    </div>
  );
};

export default LocationCategoryName;
