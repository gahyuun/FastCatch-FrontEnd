import { useState } from "react";

import TermsAgreement from "@/src/components/termsAgreement/TermsAgreement";
import CommonButton from "@/src/components/commonButton/CommonButton";

import BookerInformation from "@/src/pages/order/bookerInformation/BookerInformation";
import OrderTotalPrice from "@/src/pages/order/orderTotalPrice/OrderTotalPrice";
import PaymentMethod from "@/src/pages/order/paymentMethod/PaymentMethod";
import EventBanner from "@/src/pages/order/eventBanner/EventBanner";
import SubDescription from "@/src/pages/order/subDescription/SubDescription";
import OrderItem from "@/src/pages/order/orderItem/OrderItem";

import "./order.scss";

const Order = () => {
  const [isAllCheck, setIsAllCheck] = useState(false);
  return (
    <div className="order">
      <OrderItem />
      <OrderTotalPrice roomTotalPrice={65000} />
      <EventBanner />
      <BookerInformation />
      <PaymentMethod />
      <TermsAgreement isAllCheck={isAllCheck} setIsAllCheck={setIsAllCheck} />
      <CommonButton
        text={"195,000원 예약하기"}
        buttonSize={"exLarge"}
        isTermsAgreed={isAllCheck}
      />
      <SubDescription />
    </div>
  );
};

export default Order;
