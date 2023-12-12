// import imageCompression, { Options } from "browser-image-compression";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { format } from "date-fns";
import "./accommodation.scss";
import { useQuery } from "react-query";
import RoomSelect from "./roomSelect/RoomSelect";
import AccommodationMainInfo from "./accommodationMainInfo/AccommodationMainInfo";
import AccommodationOptions from "./accommodationOptions/AccommodationOptions";
import AccommodationMap from "./accommodationMap/AccommodationMap";
import { filterState } from "@/src/states/filterState";
import { getAccommodationDetailApi } from "@/src/api/getAccommodationDetailApi";

const Accommodation = () => {
  const filterData = useRecoilValue(filterState);
  const startDate = format(filterData.current.startDate, "yyyy-MM-dd");
  const endDate = filterData.endDate
    ? format(filterData.endDate, "yyyy-MM-dd")
    : format(filterData.startDate, "yyyy-MM-dd");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const getAccommodationDetailData = async () => {
    const result = await getAccommodationDetailApi(id, startDate, endDate);
    return result;
  };

  const memoizedQueryKey = useMemo(() => [id, "postDetail"], [id]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: memoizedQueryKey,
    queryFn: getAccommodationDetailData,
    staleTime: 500000,
    cacheTime: 5000000,
    onError: error => {
      console.log(error);
    },
  });

  if (isLoading || !data) {
    return <div>로딩중..!!!!!</div>;
  }

  // const optimizeImage = async () => {
  //   try {
  //     // 이미지 최적화 설정
  //     const options: Options = {
  //       maxSizeMB: 100,
  //       fileType: "image/webp",
  //     };
  // 이미지 다운로드
  // const response = await fetch(
  //   `https://fastcatch-image.s3.ap-northeast-2.amazonaws.com/${data.image}`
  // );

  // const blob = await response.blob();
  // const file = new File([blob], "compressed.jpg", {
  //   type: "image/jpeg",
  //   lastModified: Date.now(),
  // });

  // 이미지 최적화
  // const compressedBlob = await imageCompression(file, options);

  // 최적화된 이미지를 사용 (예: 이미지 뷰어에 표시)
  // const compressedImageURL = URL.createObjectURL(compressedBlob);
  // console.log(compressedImageURL);
  //   } catch (error) {
  //     console.error("이미지 최적화 중 에러 발생:", error);
  //   }
  // };

  // optimizeImage();
  return (
    <div className="accommodation-container">
      <img
        style={{ height: "550px", width: "100%", objectFit: "cover" }}
        src={`https://fastcatch-image.s3.ap-northeast-2.amazonaws.com/${data.image}`}
        alt={data.name}
        loading="lazy"
      />

      <AccommodationMainInfo
        accommodationName={data.name}
        accommodationLocation={data.address}
        accommodationPhone={data.phoneNumber}
        accommodationCategory={data.category}
      />
      <div className="accommodation__divider"></div>

      <div className="accommodation__introduce">
        <div className="accommodation__menu-title">
          <span className="text-subtitle4">숙소 소개</span>
        </div>
        <div>
          <span className="text-body1">{data.description}</span>
        </div>
      </div>

      <div className="accommodation__divider"></div>
      <AccommodationMap
        accommodationName={data.name}
        latitude={data.latitude}
        longitude={data.longitude}
      />
      <div className="accommodation__divider"></div>
      <AccommodationOptions accommodationOptions={data.accommodationOption} />
      <div className="accommodation__divider"></div>
      <RoomSelect
        roomsInfo={data.rooms}
        accommodationId={data.id}
        accommodationName={data.name}
        refetch={refetch}
      />
    </div>
  );
};

export default Accommodation;
