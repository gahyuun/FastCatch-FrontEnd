import React from "react";
import "./roomSelect.scss";
import CommonButton from "@/src/components/commonButton/CommonButton";
import basketIcon from "../../../assets/icons/basketIcon.svg";
import peopleIcon from "../../../assets/icons/peopleIcon.svg";
import RoomImgSwiper from "../roomImgSwiper/RoomImgSwiper";

const RoomSelect = ({ roomsInfo }: any) => {
  roomsInfo.map((room: any) => {
    console.log(room);
  });

  return (
    <div className="accommodation__select-room">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">객실 선택</span>
      </div>

      <div>룸 필터링 컴포넌트</div>

      <div className="room-container">
        {roomsInfo.map((room: any, index: number) => (
          <div className="room-container__list">
            <div className="room__imgs">
              <RoomImgSwiper roomImg={room.roomImage} />
            </div>

            <div className="room__info">
              <div className="accommodation__menu-title">
                <span className="text-subtitle4">{room.roomName}</span>
              </div>
              <div className="accommodation__main-info__detail">
                <img src={peopleIcon} alt="인원" />
                <span className="text-body1"> 기준2인 / 최대2인</span>
              </div>

              <div className="room__options-container">
                <div> 1번 태그 </div>
                <div> 2번 태그 </div>
                <div> 3번 태그 </div>
              </div>

              <div className="room__detail-info">
                <div className="room__detail-info__time">
                  <span className="text-body2">체크인 09:00</span>
                  <span className="text-body2">체크아웃 15:00</span>
                </div>
                <div className="text-subtitle4">{room.price} 원</div>
              </div>

              <div className="room__divider"></div>

              <div className="room__buttons-container">
                <button className="room__buttons-container__basket">
                  <img src={basketIcon} alt="담기" />
                </button>
                <CommonButton
                  text="예약하기"
                  buttonSize="large"
                  fontSize="text-subtitle5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelect;
