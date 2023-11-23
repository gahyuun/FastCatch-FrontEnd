import { useState } from "react";
import LocationCategoryName from "./locationDropdownEl/LocationCategoryName";

import "./dropdown.scss";
import LocationList from "./locationDropdownEl/LocationList";
useState;

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
  onClick: (target: "location" | "date" | "amount" | null) => void;
  locale: string;
  onChangeLocale: React.Dispatch<React.SetStateAction<"서울" | "경기">>;
}

const LocationDropdown = (props: dropdownProps) => {
  const [categoryName, setCategoryName] = useState<[string, boolean][]>([
    ["서울", true],
    ["경기", false],
  ]);

  const category: { [key: string]: string[] } = {
    서울: ["강남구", "관악구", "동대문구", "노원구"],
    경기: ["가평/청평/양평", "고양/파주/김포", "안양/의왕/군포"],
  };

  const opened = (categoryName.find((value) => value[1] === true) as [string, boolean])[0];

  return (
    <>
      {props.isSelected === "location" && ( //
        <div className="location-container">
          <section className="categoryNames">
            {categoryName.map((locale) => (
              <LocationCategoryName //
                key={locale[0]}
                wholeLocale={categoryName}
                locale={locale}
                onClick={setCategoryName}
              />
            ))}
          </section>
          <section>
            {category[opened].map((locale) => (
              <LocationList //
                key={locale}
                locale={locale}
                onClick={props.onClick}
                isSelected={props.isSelected}
                onChangeLocale={props.onChangeLocale}
                opened={opened}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default LocationDropdown;

// const truthy = copy.find((value) => value[1] === true) as [string, boolean];

// props.onChangeLocale(truthy[0] as "서울" | "경기");
