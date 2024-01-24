import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

interface AccommodationSwiperProps {
  roomImg: string[];
}
const AccommodationSwiper = ({ roomImg }: AccommodationSwiperProps) => {
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
      style={{ margin: "0 4px" }}
    >
      {roomImg.map((obj: any, index) => (
        <>
          <SwiperSlide key={index}>
            <img
              style={{ height: "550px", width: "100%", objectFit: "cover" }}
              src={`${obj}`}
              alt="호텔"
              loading="lazy"
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};
export default AccommodationSwiper;
