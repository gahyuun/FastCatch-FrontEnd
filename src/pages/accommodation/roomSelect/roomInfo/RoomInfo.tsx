import { useRecoilValue, useSetRecoilState } from "recoil";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import CommonBadge from "@/src/components/commonBadge/CommonBadge";
import CommonButton from "@/src/components/commonButton/CommonButton";
import CommonToastLayout from "@/src/components/commonToast/CommonToastLayout";
import englishToKoreanFormat from "@/src/utils/englishToKoreanFormat";
import numberFormat from "@/src/utils/numberFormat";
import { IoCartOutline, IoPeople } from "react-icons/io5";
import { useMutation } from "react-query";
import axios from "axios";
import { filterState } from "@/src/states/filterState";
import { orderState } from "@/src/states/orderState";

interface RoomInfoProps {
  room: {
    price: number;
    roomId: number;
    name: string;
    roomOption: any;
    baseHeadCount: number;
    maxHeadCount: number;
    checkInTime: string;
    checkOutTime: string;
    soldOut: boolean;
    description: string;
  };
  accommodationId: number;
  accommodationName: string;
}
interface Template {
  [key: string]: string;
}

const RoomInfo = ({
  room,
  accommodationId,
  accommodationName,
}: RoomInfoProps) => {
  const {
    name,
    price,
    roomOption,
    roomId,
    baseHeadCount,
    maxHeadCount,
    checkInTime,
    checkOutTime,
    soldOut,
    // description,
  } = room;

  const setOrderData = useSetRecoilState(orderState);
  const navigate = useNavigate();

  const filterData = useRecoilValue(filterState).current;
  const startDate = format(filterData.startDate, "yyyy-MM-dd");
  const endDate = format(filterData.startDate, "yyyy-MM-dd");
  let totalPrice = 0;
  if (filterData.amount < baseHeadCount) {
    totalPrice = price;
  } else if (filterData.amount > maxHeadCount) {
    totalPrice = price + 15000 * (maxHeadCount - baseHeadCount);
  } else {
    totalPrice = price + 15000 * (filterData.amount - baseHeadCount);
  }

  const postBasket: any = () => {
    try {
      const response = axios.post("http://43.201.113.97/api/carts/members/1", {
        //memberId 나중에 전역변수 만들어지면 수정해주기
        roomId: roomId,
        startDate: startDate,
        endDate: endDate,
        headCount: filterData.amount,
        orderPrice: totalPrice,
      });
      return response;
    } catch (error) {
      console.log("에러에러에러엘에러엘", error);
    }
  };

  const mutation = useMutation({
    mutationFn: postBasket,
    onSuccess: data => {
      console.log("데이터 전송 성공", data);
      showToast();
    },
    onError: error => {
      console.log("전송 실패했습니다!!", error);
    },
  });

  const { showToast, ToastContainer } = CommonToastLayout({
    theme: "success",
    message: "장바구니에 상품이 담겼습니다",
  });

  const template: Template = {
    cityView: "시티뷰",
    oceanView: "오션뷰",
    petAccompanying: "반려견 동반",
    canSmoking: "흡연 가능",
    hasNetflix: "넷플릭스",
    has_pc: "PC",
    canCooking: "취사 가능",
  };

  const onClickBasket = () => {
    mutation.mutate();
  };
  const onClickOrder = () => {
    setOrderData([
      {
        accommodationId: accommodationId,
        accommodationName: accommodationName,
        checkInTime: checkInTime,
        checkOutTime: checkOutTime,
        headCount: filterData.amount,
        maxHeadCount: maxHeadCount,
        orderPrice: totalPrice,
        roomId: roomId,
        roomName: name,
        startDate: startDate,
        endDate: endDate,
        roomOption: roomOption,
      },
    ]);

    navigate("/order?cart=false");
    window.scrollTo(0, 0);
  };

  return (
    <div className="room__info">
      <div>
        <div className="accommodation__menu-title">
          <span className="text-subtitle4">{name}</span>
        </div>
        {/* <div>
          <span>{description}</span>
        </div> */}

        <div className="accommodation__main-info__detail">
          <IoPeople size="17px" />
          <span className="text-body1">
            기준 {baseHeadCount}인 / 최대 {maxHeadCount}인
          </span>
        </div>

        <div className="room__options-container">
          {englishToKoreanFormat(roomOption, template).map((option: any) => (
            <CommonBadge key={option} text={option} badgeType="line" />
          ))}
        </div>

        <div className="room__detail-info">
          <div className="room__detail-info__time">
            <span className="text-body2">체크인 {checkInTime}</span>
            <span className="text-body2">체크아웃 {checkOutTime}</span>
          </div>
          <div className="text-subtitle4">{numberFormat(totalPrice)} 원</div>
        </div>
      </div>

      <div>
        <div className="room__divider"></div>
        <div className="room__buttons-container">
          {soldOut ? (
            <CommonButton
              text="예약 불가"
              buttonSize="large"
              colorName="coral200"
            />
          ) : (
            <>
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
            </>
          )}
        </div>
        {ToastContainer}
      </div>
    </div>
  );
};
export default RoomInfo;
