import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const RoomImgSwiper = ({ roomImg }: any) => {
  console.log(roomImg);
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
      style={{ height: "250px", margin: "8px 4px" }}
    >
      {roomImg.map((url: string) => (
        <SwiperSlide key={url}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={url}
            alt={"이미지"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default RoomImgSwiper;
