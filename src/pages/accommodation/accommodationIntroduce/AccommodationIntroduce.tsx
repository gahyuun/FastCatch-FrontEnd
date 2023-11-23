import React from "react";

const AccommodationIntroduce = ({ accommodationInfo }: any) => {
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
