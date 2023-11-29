import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

interface RoomImgSwiperProps {
  roomImg: object[];
}
const RoomImgSwiper = ({ roomImg }: RoomImgSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={6}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
      }}
      resistance={false}
      style={{ height: "100%", margin: "0 4px" }}
    >
      {roomImg.map((obj: any) => (
        <SwiperSlide key={obj.fileName}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={`https://fastcatch-image.s3.ap-northeast-2.amazonaws.com/${obj.fileName}`}
            alt={"이미지"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default RoomImgSwiper;
