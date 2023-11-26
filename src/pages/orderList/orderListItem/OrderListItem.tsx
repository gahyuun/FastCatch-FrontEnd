import { Swiper, SwiperSlide } from "swiper/react";
import { CommonButton, SelectedRoomItem } from "@/src/components";

import "swiper/css";
import "./orderListItem.scss";

const OrderListItem = () => {
  return (
    <div className="order-list-item">
      <div className="order-list-item__header">
        <div className="order-list-item__left">
          <h4 className="text-subtitle4">2023.11.30</h4>
          <span className="text-body2">총 3건</span>
        </div>
        <div className="order-list-item__right">
          <h5 className="text-subtitle5">총 333,100원</h5>
        </div>
      </div>
      <div className="order-list-item__body">
        <Swiper
          spaceBetween={8}
          slidesPerView={2.1}
          className="order-list-item__swiper"
        >
          <SwiperSlide>
            <SelectedRoomItem pageType={"orderList"} />
          </SwiperSlide>
          <SwiperSlide>
            <SelectedRoomItem pageType={"orderList"} />
          </SwiperSlide>
          <SwiperSlide>
            <SelectedRoomItem pageType={"orderList"} />
          </SwiperSlide>
        </Swiper>
        <CommonButton text={"취소하기"} buttonSize="exLarge" shape="line" />
      </div>
    </div>
  );
};

export default OrderListItem;
