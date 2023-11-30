import { RoomDescriptionType } from "@/src/pages/basket/Basket";
import "./selectedRoomItem.scss";
import numberFormat from "@/src/utils/numberFormat";

interface RoomPropsType {
  pageType?: "basket" | "orderList";
  room: RoomDescriptionType;
  deleteRoom: (cartId: number) => Promise<void>;
}

const SelectedRoomItem = ({
  pageType = "basket",
  room,
  deleteRoom,
}: RoomPropsType) => {
  const {
    cartItemId,
    checkInTime,
    checkOutTime,
    endDate,
    headCount,
    maxHeadCount,
    price,
    roomId,
    roomName,
    startDate,
  } = room;
  const roomPrice = numberFormat(price);
  return (
    <div className="room-list__item">
      <div className="item-content">
        <div className="item-content__left-box">
          <p className="text-subtitle4">{roomName}</p>
          <div>
            <p className="text-body1">{`${startDate} - ${endDate}`}</p>
            <p className="text-body1">
              {`예약인원 ${headCount}인 / 최대인원 ${maxHeadCount}인`}
            </p>
            <div className="check-in-out">
              <div className="check-in-out__content">
                <span className="check-in__span">체크인</span>
                <span>{checkInTime}</span>
              </div>
              <div className="check-in-out__retangle">|</div>
              <div className="check-in-out__content">
                <span className="check-in__span">체크아웃</span>
                <span>{checkOutTime}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-content__right-box">
          <span className="price text-subtitle5">{`${roomPrice}원`}</span>
          {pageType === "basket" && (
            <span
              className="delete-button text-body2"
              onClick={() => deleteRoom(cartItemId)}
            >
              삭제
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomItem;
