import React from "react";
import "./locationDropdownEls.scss";

interface locationProps {
  wholeLocale: [string, boolean][];
  locale: [string, boolean];
  onClick: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
}

const LocationCategoryName = (props: locationProps) => {
  const selectionHandler = () => {
    const copy = props.wholeLocale.slice().map((value) => [value[0] as string, !value[1]] as [string, boolean]);
    props.onClick(copy);
  };

  return (
    <div
      className={props.locale[1] ? "selected" : "unSelected"} //
      onClick={selectionHandler}
    >
      {props.locale[0]}
    </div>
  );
};

export default LocationCategoryName;
