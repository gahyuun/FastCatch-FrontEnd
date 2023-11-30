import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OrderItemTypes, orderState } from "@/src/states/orderState";
import { postOrderApi } from "@/src/api/postOrderApi";

import TermsAgreement from "@/src/components/termsAgreement/TermsAgreement";
import CommonButton from "@/src/components/commonButton/CommonButton";

import BookerInformation from "@/src/pages/order/bookerInformation/BookerInformation";
import OrderTotalPrice from "@/src/pages/order/orderTotalPrice/OrderTotalPrice";
import PaymentMethod from "@/src/pages/order/paymentMethod/PaymentMethod";
import EventBanner from "@/src/pages/order/eventBanner/EventBanner";
import SubDescription from "@/src/pages/order/subDescription/SubDescription";
import OrderItem from "@/src/pages/order/orderItem/OrderItem";
import numberFormat from "@/src/utils/numberFormat";

import "./order.scss";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("카드 결제");
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isBookerValidationPass, setIsBookerValidationPass] = useState(false);
  const [isAllValidationPass, setIsAllValidationPass] = useState(false);
  const orderData: OrderItemTypes[] = useRecoilValue(orderState);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cartParam = urlParams.get("cart");
  const totalOrderPrice = orderData.reduce(
    (total, item) => total + item.orderPrice,
    0
  );

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestBody = {
      ageConsent: isAllCheck,
      reservationPersonName: userName,
      reservationPhoneNumber: userPhoneNumber,
      totalPrice: totalOrderPrice,
      orderItems: orderData.map(item => ({
        roomId: item.roomId,
        startDate: item.startDate,
        endDate: item.endDate,
        headCount: item.headCount,
        orderPrice: item.orderPrice,
      })),
    };

    console.log(requestBody);

    if (cartParam === "true") {
      try {
        const res = await postOrderApi("/api/orders/carts", requestBody);
        navigate(`/order/result?result=true&orderid=${res.data.orderId}`);
      } catch (error) {
        console.log(error);
        navigate("/order/result?=false");
      }
    }
    if (cartParam === "false") {
      try {
        const res = await postOrderApi("/api/orders", requestBody);
        // navigate(`/order/result?result=true&orderid=${res.data.orderId}`);
      } catch (error) {
        console.log(error);
        // navigate("/order/result?=false");
      }
    }
  };

  useEffect(() => {
    if (!isAllCheck || !isBookerValidationPass) {
      setIsAllValidationPass(false);
      return;
    }
    setIsAllValidationPass(true);
  }, [isAllCheck, isBookerValidationPass]);

  return (
    <div className="order">
      <form>
        {orderData.map((orderData, index) => (
          <OrderItem key={index} orderData={orderData} />
        ))}
        <OrderTotalPrice roomTotalPrice={totalOrderPrice} />
        <EventBanner />
        <BookerInformation
          userName={userName}
          setUserName={setUserName}
          userPhoneNumber={userPhoneNumber}
          setUserPhoneNumber={setUserPhoneNumber}
          setIsBookerValidationPass={setIsBookerValidationPass}
        />
        <PaymentMethod
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
        <TermsAgreement isAllCheck={isAllCheck} setIsAllCheck={setIsAllCheck} />
        <CommonButton
          text={`${numberFormat(totalOrderPrice)}원 예약하기`}
          buttonSize={"exLarge"}
          isPassed={isAllValidationPass}
          onClick={handleClick}
        />
        <SubDescription />
      </form>
    </div>
  );
};

export default Order;
