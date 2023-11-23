import React from "react";
import "./accommodationOptions.scss";
import englishToKoreanFormat from "../../../utils/englishToKoreanFormat";
import { TbSwimming, TbWifi } from "react-icons/tb";
import { FaSmoking } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import {
  MdLocalParking,
  MdOutlineFreeBreakfast,
  MdRestaurant,
} from "react-icons/md";
import { PiCookingPotBold, PiDogBold } from "react-icons/pi";

interface TemplateItem {
  [key: string]: [string, JSX.Element];
}
type AccommodationOptions = {
  [key: string]: boolean;
};

const AccommodationOptions = ({
  accommodationOptions,
}: AccommodationOptions) => {
  const template: TemplateItem = {
    has_smoking_room: ["흡연 가능", <FaSmoking size="50px" />],
    has_pet_room: ["반려견 동반", <PiDogBold size="50px" />],
    has_parking_lot: ["주차 가능", <MdLocalParking size="50px" />],
    has_wifi: ["와이파이", <TbWifi size="50px" />],
    has_swimming_pool: ["수영장", <TbSwimming size="50px" />],
    has_gym: ["헬스장", <BiDumbbell size="50px" />],
    has_breakfast: ["조식", <MdOutlineFreeBreakfast size="50px" />],
    has_restaurant: ["레스토랑", <MdRestaurant size="50px" />],
    has_cooking_room: ["취사 가능", <PiCookingPotBold size="50px" />],
  };
  console.log(accommodationOptions);

  return (
    <div className="accommodation__options">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">숙소 옵션</span>
      </div>
      <div className="accommodation__options-box">
        <div className="accommodation__options-box__grid">
          {englishToKoreanFormat(accommodationOptions, template).map(
            (option: any) => (
              <div className="accommodation__option" key={option}>
                {option[1]}
                <span>{option[0]}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AccommodationOptions;
