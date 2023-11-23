import React from "react";
import "./accommodationMainInfo.scss";

const AccommodationMainInfo = ({
  accommodationName,
  accommodationLocation,
}: any) => {
  return (
    <div className="accommodation__main-info">
      <div>
        <span className="text-subtitle3">{accommodationName}</span>
        <span className="text-body1"> 예약가능</span>
      </div>
      <div className="accommodation__main-info__detail">
        <span className="text-body1"> 호텔 | </span>
        <span className="text-body1">{accommodationLocation}</span>
      </div>
    </div>
  );
};

export default AccommodationMainInfo;
