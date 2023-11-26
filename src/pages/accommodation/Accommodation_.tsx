// import { useState, useEffect } from "react";
import "./accommodation.scss";
import axios from "axios";
import { useQuery } from "react-query";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationImgSwiper from "./accommodationImgSwiper/AccommodationImgSwiper";

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
    return <div>여기는 에러 페이지!!!!!!!!!!! {error.message}</div>;
  }

  // const [data, setData]: any = useState([]);

  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios({
  //         method: "get",
  //         url: "/accommodation",
  //       });
  //       // console.log(res.data[0]);
  //       if (res.status === 200) {
  //         await setData(res.data[0]);
  //       }
  //       setIsLoaded(!isLoaded);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();

  //   // const postHotel = async () => {
  //   //   try {
  //   //     const response = await axios({
  //   //       method: "post",
  //   //       url: "/accommodation",
  //   //     });
  //   //     console.log("post 성공", response.data);
  //   //   } catch (error) {
  //   //     console.log("post도중 에러 발생", error);
  //   //   }
  //   // };
  //   // postHotel();
  // }, []);

  // if (!isLoaded) {
  //   return <div>로딩 화면</div>;
  // }

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
