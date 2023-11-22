import BookerInformation from './bookerInformation/BookerInformation';
import OrderItem from './orderItem/OrderItem';
import OrderTotalPrice from './orderTotalPrice/OrderTotalPrice';
import PaymentMethod from './paymentMethod/PaymentMethod';

import './order.scss';
import TermsAgreement from './termsAgreement/TermsAgreement';
import CommonButton from '../../components/commonButton/CommonButton';
import EventBanner from './eventBanner/EventBanner';

const Order = () => {
  return (
    <div className="order">
      <OrderItem />
      <OrderItem />
      <OrderTotalPrice roomTotalPrice={65000} />
      <EventBanner />
      <BookerInformation />
      <PaymentMethod />
      <TermsAgreement />
      <CommonButton text={'195,000원 예약하기'} buttonSize={'large'} />
    </div>
  );
};

export default Order;
