import "./selectedRoomItem.scss";

interface RoomPropsType {
  pageType?: "basket" | "orderList";
  roomName: string;
  startDate: string;
  endDate: string;
  headCount: number;
  price: number;
}

const SelectedRoomItem = ({
  pageType = "basket",
  roomName,
  startDate,
  endDate,
  headCount,
  price,
}: RoomPropsType) => {
  return (
    <div className="room-list__item">
      <div className="item-content">
        <div className="item-content__left-box">
          <p className="text-subtitle4">{roomName}</p>
          <div>
            <p className="text-body1">{`${startDate} - ${endDate}`}</p>
            <p className="text-body1">{headCount}인</p>
            <div className="check-in-out">
              <div className="check-in-out__content">
                <span className="check-in__span">체크인</span>
                <span>15:00</span>
              </div>
              <div className="check-in-out__retangle">|</div>
              <div className="check-in-out__content">
                <span className="check-in__span">체크아웃</span>
                <span>11:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-content__right-box">
          <span className="price text-subtitle5">{price}원</span>
          {pageType === "basket" && (
            <span className="delete-button text-body2">삭제</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomItem;
