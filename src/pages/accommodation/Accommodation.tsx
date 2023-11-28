// import { useState, useEffect } from "react";
import "./accommodation.scss";
import axios from "axios";
import { useQuery } from "react-query";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationImgSwiper from "./accommodationImgSwiper/AccommodationImgSwiper";
import AccommodationMap from "./accommodationMap/AccommodationMap";

const Accommodation = () => {
  const fetchListData = async () => {
    try {
      const res = await axios.get(
        "../../../public/data/accommodationDetail.json"
      );
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  const { data, error, isError, isLoading }: any = useQuery({
    queryKey: ["postDetail"],
    queryFn: fetchListData,
    staleTime: 500000,
    select: (data) => {
      const accommodationValue = data[0];
      return accommodationValue;
    },
  });
  if (isLoading) {
    return <div>로딩중..!!!!!</div>;
  }
  if (isError) {
    return <div>여기는 에러 페이지!!!!! {error.message}</div>;
  }

  return (
    <div className="accommodation-container">
      <AccommodationImgSwiper accommodationImage={data.accommodationImage} />
      <AccommodationMainInfo
        accommodationName={data.accommodationName}
        accommodationLocation={data.accommodationLocation}
        // accommodationPhone={data.accommodationPhone}
      />
      <div className="accommodation__divider"></div>
      <AccommodationIntroduce accommodationInfo={data.description} />
      <div className="accommodation__divider"></div>
      <AccommodationMap />
      <div className="accommodation__divider"></div>
      <AccommodationOptions accommodationOptions={data.accommodationOptions} />
      <div className="accommodation__divider"></div>
      <RoomSelect roomsInfo={data.roomsInfo} />
    </div>
  );
};

export default Accommodation;
