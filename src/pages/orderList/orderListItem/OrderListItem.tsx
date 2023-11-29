import { Swiper, SwiperSlide } from "swiper/react";
import { CommonButton, SelectedRoomItem } from "@/src/components";

import "swiper/css";
import "./orderListItem.scss";
import { Order } from "@/src/types/order";
import numberFormat from "@/src/utils/numberFormat";

const OrderListItem = ({ orderInfo }: OrderListItemProps) => {
  const { orderDate, orderItems, totalPrice, orderStatus } = orderInfo;

  const formattedTotalPrice = numberFormat(totalPrice);

  return (
    <div className="order-list-item">
      <div className="order-list-item__header">
        <div className="order-list-item__left">
          <h4 className="text-subtitle4">{orderDate}</h4>
          <span className="text-body2">총 {orderItems.length}건</span>
        </div>
        <div className="order-list-item__right">
          <h5 className="text-subtitle5">총 {formattedTotalPrice}원</h5>
        </div>
      </div>
      <div className="order-list-item__body">
        <Swiper
          spaceBetween={8}
          slidesPerView={orderItems.length === 1 ? 1 : 1.5}
          className="order-list-item__swiper"
        >
          {orderItems.map((orderInfo, index) => (
            <SwiperSlide key={index}>
              <SelectedRoomItem pageType={"orderList"} orderInfo={orderInfo} />
            </SwiperSlide>
          ))}
        </Swiper>
        {orderStatus === "reserved" && (
          <CommonButton text={"취소하기"} buttonSize="exLarge" shape="line" />
        )}
      </div>
    </div>
  );
};

export default OrderListItem;

interface OrderListItemProps {
  orderInfo: Order;
}
