import React from "react";
import { useState, useEffect } from "react";
import "./accommodation.scss";
import axios from "axios";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationImgSwiper from "./accommodationImgSwiper/AccommodationImgSwiper";

const Accommodation = () => {
  const [data, setData]: any = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("/data/accommodationDetail.json")
      .then((response) => setData(response.data[0]))
      .then(() => setIsLoaded(!isLoaded))
      .catch((error) => console.error("데이터 가져오기 에러 발생:", error));
  }, []);

  if (!isLoaded) {
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
