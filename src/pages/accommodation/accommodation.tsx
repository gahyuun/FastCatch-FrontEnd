import React, { useState, useEffect } from "react";
import "./accommodation.scss";
import axios from "axios";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationImgSwiper from "./accommodationImgSwiper/AccommodationImgSwiper";

const Accommodation = () => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    axios
      .get("/data/accommodationDetail.json")
      .then((response) => setData(response.data[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);
  if (!data) {
    return <div>로딩 화면</div>;
  }

  return (
    <div className="accommodation-container">
      <AccommodationImgSwiper accommodationImage={data.accommodationImage} />
      <AccommodationMainInfo
        accommodationName={data.accommodationName}
        accommodationLocation={data.accommodationLocation}
      />
      <div className="accommodation__divider"></div>
      <AccommodationIntroduce accommodationInfo={data.description} />
      <div className="accommodation__divider"></div>
      <AccommodationOptions accommodationOptions={data.accommodationOptions} />
      <div className="accommodation__divider"></div>
      <RoomSelect roomsInfo={data.roomsInfo} />
    </div>
  );
};

export default Accommodation;
