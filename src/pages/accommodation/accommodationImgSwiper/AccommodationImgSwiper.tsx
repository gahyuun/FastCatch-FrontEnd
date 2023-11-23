import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const AccommodationImgSwiper = ({ accommodationImage }: any) => {
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
      style={{ height: "500px" }}
    >
      {accommodationImage &&
        accommodationImage.map((url: string) => (
          <SwiperSlide key={url}>
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={url}
              alt={"이미지"}
            />
          </SwiperSlide>
        ))}
      <SwiperSlide>
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src="https://i.pinimg.com/564x/3d/12/32/3d123298399c83647862e0c894f57520.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src="https://i.pinimg.com/564x/2c/08/c4/2c08c4e251ebb9a16396caa8d4aaf575.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default AccommodationImgSwiper;
