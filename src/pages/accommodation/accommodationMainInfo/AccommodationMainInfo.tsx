import React from "react";
import "./accommodationMainInfo.scss";

const AccommodationMainInfo = () => {
  return (
    <div className="accommodation__main-info">
      <div>
        <span className="text-subtitle3">한국 신라 호텔</span>
        <span className="text-body1"> 예약가능</span>
      </div>
      <div className="accommodation__main-info__detail">
        <span className="text-body1"> 호텔 | </span>
        <span className="text-body1">한국 용산구 용산대로 175-1길</span>
      </div>
    </div>
  );
};

export default AccommodationMainInfo;
