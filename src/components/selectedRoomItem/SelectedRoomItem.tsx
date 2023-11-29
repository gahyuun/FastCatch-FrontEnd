import { OrderInfo } from "@/src/types/order";
import { getDayOfWeek } from "@/src/utils/getDayOfWeek";
import "./selectedRoomItem.scss";
import numberFormat from "@/src/utils/numberFormat";

interface RoomPropsType {
  pageType?: "basket" | "orderList";
  orderInfo: OrderInfo;
}

const SelectedRoomItem = ({
  pageType = "basket",
  orderInfo,
}: RoomPropsType) => {
  const {
    roomName,
    startDate,
    endDate,
    headCount,
    maxHeadCount,
    checkInTime,
    checkOutTime,
    orderPrice,
  } = orderInfo;

  const sliceCheckInTime = checkInTime.slice(0, -3);
  const sliceCheckOutTime = checkOutTime.slice(0, -3);
  const formattedOrderPrice = numberFormat(orderPrice);

  return (
    <div className="room-list__item">
      <div className="item-content">
        <div className="item-content__left-box">
          <p className="text-subtitle4">{roomName}</p>
          <div>
            <p className="text-body1">
              {startDate} {getDayOfWeek(startDate)} - {endDate}{" "}
              {getDayOfWeek(endDate)} (2박)
            </p>
            <p className="text-body1">
              인원 {headCount}인 / 최대 {maxHeadCount}인
            </p>
            <div className="check-in-out">
              <div className="check-in-out__content">
                <span className="check-in__span">체크인</span>
                <span>{sliceCheckInTime}</span>
              </div>
              <div className="check-in-out__retangle">|</div>
              <div className="check-in-out__content">
                <span className="check-in__span">체크아웃</span>
                <span>{sliceCheckOutTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-content__right-box">
          <span className="price text-subtitle5">{formattedOrderPrice}원</span>
          {pageType === "basket" && (
            <span className="delete-button text-body2">삭제</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomItem;
