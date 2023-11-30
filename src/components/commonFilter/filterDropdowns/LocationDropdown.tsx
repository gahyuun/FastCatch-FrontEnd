import React from "react";
import LocationCategoryName from "./locationDropdownEl/LocationCategoryName";

import "./dropdown.scss";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
  onChangeSelected: React.Dispatch<React.SetStateAction<"location" | "date" | "amount" | null>>;
  categoryData: {
    GYEONGGI: string;
    SEOUL: string;
    GANGWON: string;
    CHUNGCHEONG: string;
    HONAM: string;
    GYEONGSANG: string;
    JEJU: string;
  };
}

const LocationDropdown = (props: dropdownProps) => {
  const entries = Object.entries(props.categoryData);

  return (
    <>
      {props.isSelected === "location" && ( //
        <div className="location-container">
          <section className="categoryNames">
            {entries.map((arg) => (
              <LocationCategoryName //
                onChangeSelected={props.onChangeSelected}
                key={arg[0]}
                allocated={arg}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default LocationDropdown;
