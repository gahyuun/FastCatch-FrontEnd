import React from "react";

interface AccommodationInfo {
  accommodationInfo: string;
}

const AccommodationIntroduce = ({ accommodationInfo }: AccommodationInfo) => {
  return (
    <div className="accommodation__introduce">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">숙소 소개</span>
      </div>
      <div>
        <span className="text-body1">{accommodationInfo}</span>
      </div>
    </div>
  );
};

export default AccommodationIntroduce;
