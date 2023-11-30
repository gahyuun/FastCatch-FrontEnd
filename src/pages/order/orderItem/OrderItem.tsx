import AccommodationGuest from "@/src/components/accommodationGuest/AccommodationGuest";
import HotelName from "@/src/components/accommodationName/AccommodationName";
import RoomName from "@/src/components/roomName/RoomName";
import CheckIn from "@/src/components/checkIn/CheckIn";
import CheckOut from "@/src/components/checkOut/CheckOut";
import OrderPrice from "@/src/pages/order/orderPrice/OrderPrice";

import "./orderItem.scss";
import { calculateNightStay } from "@/src/utils/calculateNightStay";

const OrderItem = ({ orderData }: OrderItemProps) => {
  const {
    accommodationName,
    roomName,
    headCount,
    maxHeadCount,
    startDate,
    checkInTime,
    endDate,
    checkOutTime,
    price,
  } = orderData;

  return (
    <div className="order-item">
      <div className="order-item__name">
        <HotelName hotelName={accommodationName} />
        <RoomName roomName={roomName} />
      </div>
      <div className="order-item__guest">
        <AccommodationGuest minimum={headCount} maximum={maxHeadCount} />
      </div>
      <div className="order-item__info">
        <div className="order-item__check">
          <CheckIn checkInDate={startDate} checkInTime={checkInTime} />
          <CheckOut checkOutDate={endDate} checkOutTime={checkOutTime} />
        </div>
        <OrderPrice
          nightCount={calculateNightStay(startDate, endDate)}
          roomPrice={price}
        />
      </div>
    </div>
  );
};

export default OrderItem;

interface OrderItemProps {
  orderData: {
    accommodationName: string;
    roomName: string;
    headCount: number;
    maxHeadCount: number;
    startDate: string;
    checkInTime: string;
    endDate: string;
    checkOutTime: string;
    price: number;
  };
}
