import React from "react";
import "./locationDropdownEls.scss";

interface locationProps {
  wholeLocale: [string, boolean][];
  locale: [string, boolean];
  onChangeLocale: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
  onChangeFilter: React.Dispatch<React.SetStateAction<"location" | "date" | "amount" | null>>;
}

const LocationCategoryName = (props: locationProps) => {
  const selectionHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    const copy = props.wholeLocale.slice().map((arg) => (arg[0] === props.locale[0] ? [arg[0], true] : [arg[0], false])) as [string, boolean][];

    props.onChangeLocale(copy);
    props.onChangeFilter("date");
  };

  return (
    <div
      className={props?.locale[1] ? "selected" : "unSelected"} //
      onClick={selectionHandler}
    >
      {props.locale[0]}
    </div>
  );
};

export default LocationCategoryName;
