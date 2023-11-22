import './orderTotalPrice.scss';

const OrderTotalPrice = ({ roomTotalPrice }: OrderTotalPriceProps) => {
  return (
    <div className="order-total-price">
      <span className="order-total-price__title text-subtitle4">총 가격</span>
      <span className="order-total-price__price text-subtitle1">
        {roomTotalPrice}원
      </span>
    </div>
  );
};

export default OrderTotalPrice;

interface OrderTotalPriceProps {
  roomTotalPrice: number;
}
