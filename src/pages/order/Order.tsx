import { useEffect, useState } from "react";

import TermsAgreement from "@/src/components/termsAgreement/TermsAgreement";
import CommonButton from "@/src/components/commonButton/CommonButton";

import BookerInformation from "@/src/pages/order/bookerInformation/BookerInformation";
import OrderTotalPrice from "@/src/pages/order/orderTotalPrice/OrderTotalPrice";
import PaymentMethod from "@/src/pages/order/paymentMethod/PaymentMethod";
import EventBanner from "@/src/pages/order/eventBanner/EventBanner";
import SubDescription from "@/src/pages/order/subDescription/SubDescription";
import OrderItem from "@/src/pages/order/orderItem/OrderItem";

import "./order.scss";
import { axiosInstance } from "@/src/api/instanceApi";

const Order = () => {
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("카드 결제");
  const [isAllCheck, setIsAllCheck] = useState(false);
  const [isBookerValidationPass, setIsBookerValidationPass] = useState(false);
  const [isAllValidationPass, setIsAllValidationPass] = useState(false);

  useEffect(() => {
    if (!isAllCheck || !isBookerValidationPass) {
      setIsAllValidationPass(false);
      return;
    }
    setIsAllValidationPass(true);
  }, [isAllCheck, isBookerValidationPass]);

  const api = async () => {
    const { data } = await axiosInstance.get("/api/carts?memberId=1");
    console.log(data);
  };

  return (
    <div className="order">
      <form>
        <OrderItem />
        <OrderTotalPrice roomTotalPrice={65000} />
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
          text={"195,000원 예약하기"}
          buttonSize={"exLarge"}
          isAllValidationPass={isAllValidationPass}
          onClick={api}
        />
        <SubDescription />
      </form>
    </div>
  );
};

export default Order;
