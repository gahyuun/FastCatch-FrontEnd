import numberFormat from "@/src/utils/numberFormat";

import "./orderTotalPrice.scss";

const OrderTotalPrice = ({ roomTotalPrice }: OrderTotalPriceProps) => {
  const formattedPrice = numberFormat(roomTotalPrice);
  return (
    <div className="order-total-price">
      <span className="order-total-price__title text-subtitle4">총 가격</span>
      <span className="order-total-price__price text-subtitle1">
        {formattedPrice}원
      </span>
    </div>
  );
};

export default OrderTotalPrice;

interface OrderTotalPriceProps {
  roomTotalPrice: number;
}
