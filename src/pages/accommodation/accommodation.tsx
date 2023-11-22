import React from "react";
import "./accommodation.scss";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccomodationOptions";

const Accommodation = () => {
  return (
    <div className="accommodation-container">
      <div style={{ width: "100%", height: "200px" }}>이미지swiper</div>
      <AccommodationMainInfo />
      <div className="accommodation__divider"></div>
      <AccommodationIntroduce />
      <div className="accommodation__divider"></div>
      <AccommodationOptions />
      <div className="accommodation__divider"></div>
      <RoomSelect />
    </div>
  );
};

export default Accommodation;
