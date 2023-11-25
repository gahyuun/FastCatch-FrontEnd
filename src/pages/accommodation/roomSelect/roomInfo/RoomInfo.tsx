import CommonBadge from "@/src/components/commonBadge/CommonBadge";
import CommonButton from "@/src/components/commonButton/CommonButton";
import englishToKoreanFormat from "@/src/utils/englishToKoreanFormat";
import numberFormat from "@/src/utils/numberFormat";
import React from "react";
import { IoCartOutline, IoPeople } from "react-icons/io5";

interface RoomInfoProps {
  room: {
    price: number;
    roomId: string;
    roomImage: string[];
    roomName: string;
    roomOptions: any;
  };
}
interface Template {
  [key: string]: string;
}

const RoomInfo: React.FC<RoomInfoProps> = ({ room }) => {
  const { roomName, price, roomOptions } = room;

  const template: Template = {
    city_view: "시티뷰",
    ocean_view: "오션뷰",
    pet_accompanying: "반려견 동반",
    can_smoking: "흡연 가능",
    has_tub: "욕조",
    has_netflix: "넷플릭스",
    has_pc: "PC",
    has_amenity: "어메니티",
    can_cooking: "취사 가능",
  };

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
          {englishToKoreanFormat(roomOptions, template).map((option: any) => (
            <CommonBadge key={option} text={option} badgeType="line" />
          ))}
        </div>

        <div className="room__detail-info">
          <div className="room__detail-info__time">
            <span className="text-body2">체크인 11:00</span>
            <span className="text-body2">체크아웃 13:00</span>
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
          <CommonButton text="예약하기" buttonSize="large" />
        </div>
      </div>
    </div>
  );
};
export default RoomInfo;
