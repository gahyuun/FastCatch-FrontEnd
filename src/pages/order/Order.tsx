import { useContext } from "react";
import { TermsAgreementContext } from "@/context/TermsAgreementContext";

import TermsAgreement from "@components/termsAgreement/TermsAgreement";
import CommonButton from "@components/commonButton/CommonButton";

import BookerInformation from "@/pages/order/bookerInformation/BookerInformation";
import OrderTotalPrice from "@/pages/order/orderTotalPrice/OrderTotalPrice";
import PaymentMethod from "@/pages/order/paymentMethod/PaymentMethod";
import EventBanner from "@/pages/order/eventBanner/EventBanner";
import SubDescription from "@/pages/order/subDescription/SubDescription";
import OrderItem from "@/pages/order/orderItem/OrderItem";

import "./order.scss";

const Order = () => {
  const { isAllCheck } = useContext(TermsAgreementContext);

  return (
    <div className="order">
      <OrderItem />
      <OrderTotalPrice roomTotalPrice={65000} />
      <EventBanner />
      <BookerInformation />
      <PaymentMethod />
      <TermsAgreement />
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
