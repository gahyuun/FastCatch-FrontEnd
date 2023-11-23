import React from "react";
import CommonButton from "@/src/components/commonButton/CommonButton";
import numberFormat from "@/src/utils/numberFormat";
import { IoCartOutline, IoPeople } from "react-icons/io5";

const RoomInfo = ({ room }: any) => {
  const { roomName, price } = room;
  return (
    <div className="room__info">
      <div>
        <div className="accommodation__menu-title">
          <span className="text-subtitle4">{roomName}</span>
        </div>

        <div className="accommodation__main-info__detail">
          <IoPeople size="17px" />
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
          <div className="text-subtitle4">{numberFormat(price)} 원</div>
        </div>
      </div>

      <div>
        <div className="room__divider"></div>
        <div className="room__buttons-container">
          <button className="room__buttons-container__basket">
            <IoCartOutline size="30px" color="#93114E" />
          </button>
          <CommonButton
            text="예약하기"
            buttonSize="large"
            fontSize="text-subtitle5"
          />
        </div>
      </div>
    </div>
  );
};
export default RoomInfo;
