import AccommodationGuest from "@/src/components/accommodationGuest/AccommodationGuest";
import HotelName from "@/src/components/accommodationName/AccommodationName";
import RoomName from "@/src/components/roomName/RoomName";
import CheckIn from "@/src/components/checkIn/CheckIn";
import CheckOut from "@/src/components/checkOut/CheckOut";
import CommonBadge from "@/src/components/commonBadge/CommonBadge";
import OrderPrice from "@/src/pages/order/orderPrice/OrderPrice";

import "./orderItem.scss";

const OrderItem = () => {
  return (
    <div className="order-item">
      <div className="order-item__name">
        <HotelName hotelName={"한국 신라 호텔"} />
        <RoomName roomName={"스탠다드 룸"} />
      </div>
      <div className="order-item__guest">
        <AccommodationGuest minimum={2} maximum={2} />
      </div>
      <div className="order-item__badge">
        <CommonBadge text={"흡연 가능"} />
        <CommonBadge text={"룸 옵션1"} />
      </div>
      <div className="order-item__info">
        <div className="order-item__check">
          <CheckIn checkInDate={"2023.11.23(목)"} checkInTime={"09:00"} />
          <CheckOut checkOutDate={"2023.11.24(금)"} checkOutTime={"15:00"} />
        </div>
        <OrderPrice nightCount={1} roomPrice={65000} />
      </div>
    </div>
  );
};

export default OrderItem;
