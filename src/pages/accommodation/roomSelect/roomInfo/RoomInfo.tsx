import React from "react";
import { useNavigate } from "react-router-dom";
import CommonBadge from "@/src/components/commonBadge/CommonBadge";
import CommonButton from "@/src/components/commonButton/CommonButton";
import CommonToastLayout from "@/src/components/commonToast/CommonToastLayout";
import englishToKoreanFormat from "@/src/utils/englishToKoreanFormat";
import numberFormat from "@/src/utils/numberFormat";
import { IoCartOutline, IoPeople } from "react-icons/io5";
import { useMutation } from "react-query";
import axios from "axios";

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
  const { roomName, price, roomOptions, roomId } = room;
  const navigate = useNavigate();

  const postBasket = (roomId: string) => {
    const response = axios.post("/accommodation", { roomId });

    return response;
  };

  const mutation = useMutation({
    mutationFn: postBasket,
    onSuccess: (data) => {
      console.log("데이터 전송 성공", data);
      showToast();
    },
    onError: (error) => {
      console.log("전송 실패했습니다!!", error);
    },
  });

  const { showToast, ToastContainer } = CommonToastLayout({
    theme: "success",
    message: "장바구니에 상품이 담겼습니다",
  });

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

  const onClickBasket = () => {
    console.log(roomId);
    mutation.mutate(roomId);
    // showToast();
  };
  const onClickOrder = () => {
    navigate("/order");
    window.scrollTo(0, 0);
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
          <button
            className="room__buttons-container__basket"
            onClick={onClickBasket}
          >
            <IoCartOutline size="30px" color="#93114E" />
          </button>
          <CommonButton
            text="예약하기"
            buttonSize="large"
            onClick={onClickOrder}
          />
        </div>
        {ToastContainer}
      </div>
    </div>
  );
};
export default RoomInfo;
