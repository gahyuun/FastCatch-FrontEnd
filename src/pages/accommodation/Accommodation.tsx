import { useRecoilValue } from "recoil";
import { format } from "date-fns";
import "./accommodation.scss";
import axios from "axios";
import { useQuery } from "react-query";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationIntroduce from "./accommodationIntroduce/AccommodationIntroduce";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationMap from "./accommodationMap/AccommodationMap";
import { filterState } from "@/src/states/filterState";

const Accommodation = () => {
  const filterData = useRecoilValue(filterState);
  const startDate = format(filterData.startDate, "yyyy-MM-dd");
  const endDate = format(filterData.startDate, "yyyy-MM-dd");

  const fetchListData = async () => {
    try {
      const res = await axios.get(
        `http://54.180.97.194/api/accommodations/1?startDate=${startDate}&endDate=${endDate}`
      );
      return res.data.data;
    } catch (error) {
      console.log("에러발생!!!!!!!!!", error);
      throw new Error("Failed to fetch data");
    }
  };

  const { data, error, isError, isLoading }: any = useQuery({
    queryKey: ["postDetail"],
    queryFn: fetchListData,
    staleTime: 500000,
  });
  if (isLoading) {
    return <div>로딩중..!!!!!</div>;
  }
  if (isError) {
    return <div>여기는 에러 페이지!!!!! {error.message}</div>;
  }

  return (
    <div className="accommodation-container">
      <img
        style={{ height: "300px", width: "100%", objectFit: "cover" }}
        src="https://i.pinimg.com/564x/10/dc/c1/10dcc131c6d0ca34e2ca119af059cb6a.jpg"
        alt={data.name}
      />
      <AccommodationMainInfo
        accommodationName={data.name}
        accommodationLocation={data.address}
        accommodationPhone={data.phoneNumber}
        accommodationCategory={data.category}
      />
      <div className="accommodation__divider"></div>
      <AccommodationIntroduce accommodationInfo={data.description} />
      <div className="accommodation__divider"></div>
      <AccommodationMap accommodationName={data.name} />
      {/* <AccommodationMap /> */}
      <div className="accommodation__divider"></div>
      <AccommodationOptions accommodationOptions={data.accommodationOption} />
      <div className="accommodation__divider"></div>
      <RoomSelect roomsInfo={data.rooms} />
    </div>
  );
};

export default Accommodation;
