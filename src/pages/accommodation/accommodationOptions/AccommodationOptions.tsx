import React from "react";
import "./accommodationOptions.scss";

const AccommodationOptions = ({ accommodationOptions }: any) => {
  // console.log(accommodationOptions);
  // let trueKeys: any = [];
  // if (accommodationOptions) {
  //   trueKeys = Object.keys(accommodationOptions).filter(
  //     (key) => accommodationOptions[key] === true
  //   );
  // }

  // console.log(trueKeys);

  return (
    <div className="accommodation__options">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">숙소 옵션</span>
      </div>
      <div className="accommodation__options-box">
        {/* {trueKeys &&
          trueKeys.map((option: any) => <div key={option}> {option} - </div>)} */}
      </div>
    </div>
  );
};

export default AccommodationOptions;
