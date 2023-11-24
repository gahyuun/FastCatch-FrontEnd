import "./selectedRoomItem.scss";

interface RoomPropsType {
  pageType?: "basket" | "myPage";
}

const SelectedRoomItem = ({ pageType = "basket" }: RoomPropsType) => {
  return (
    <div className="room-list__item">
      <div className="item-content">
        <div className="item-content__left-box">
          <p className="text-subtitle4">프리미엄 룸</p>
          <div>
            <p className="text-body1">06.24 토 - 06.26 월 (2박)</p>
            <div className="check-in-out">
              <div className="check-in-out__content">
                <span className="check-in__span">체크인</span>
                <span>09:00</span>
              </div>
              <div className="check-in-out__retangle">|</div>
              <div className="check-in-out__content">
                <span className="check-in__span">체크아웃</span>
                <span>15:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item-content__right-box">
          <span className="price text-subtitle5">75,000원</span>
          {pageType === "basket" && (
            <span className="delete-button text-body2">삭제</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomItem;
