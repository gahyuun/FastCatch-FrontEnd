import { useState, useEffect } from "react";
import "./accommodation.scss";
import axios from "axios";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationImgSwiper from "./accommodationImgSwiper/AccommodationImgSwiper";

// interface ResType {
//   id: string;
//   name: string;
//   location: string;
// }

const Accommodation = () => {
  const [data, setData]: any = useState([]);
  // const [dummyData, setDummyData] = useState<ResType[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await axios({
    //       method: "get",
    //       url: "/accommodation",
    //     });
    //     console.log(res.data);
    //     if (res.status === 200) {
    //       setDummyData(res.data);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

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
      {/* {dummyData.length > 0 ? (
        dummyData.map((item) => (
          <div key={item.id}>
            <p>이름 : {item.name}</p>
            <p>위치 : {item.location}</p>
          </div>
        ))
      ) : (
        <p>...로딩중</p>
      )} */}
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
