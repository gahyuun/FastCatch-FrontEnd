import BookerInformation from "./bookerInformation/BookerInformation";
import OrderItem from "./orderItem/OrderItem";
import OrderTotalPrice from "./orderTotalPrice/OrderTotalPrice";
import PaymentMethod from "./paymentMethod/PaymentMethod";
import CommonButton from "../../components/commonButton/CommonButton";
import { useContext } from "react";
import { TermsAgreementContext } from "context/TermsAgreementContext";
import EventBanner from "./eventBanner/EventBanner";
import SubDescription from "./subDescription/SubDescription";
import TermsAgreement from "components/termsAgreement/TermsAgreement";

import "./order.scss";

const Order = () => {
  const { isAllCheck } = useContext(TermsAgreementContext);

  return (
    <div className="order">
      <OrderItem />
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
