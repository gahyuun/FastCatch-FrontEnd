import numberFormat from "@/src/utils/numberFormat";
import "./orderPrice.scss";

const OrderPrice = ({ nightCount, roomPrice }: OrderPriceProps) => {
  const formattedPrice = numberFormat(roomPrice);

  return (
    <div className="order-price">
      <span className="order-price__night-count text-body1">
        ({nightCount}박)
      </span>
      <span className="order-price__price text-subtitle3">
        {formattedPrice}원
      </span>
    </div>
  );
};

export default OrderPrice;

interface OrderPriceProps {
  nightCount: number;
  roomPrice: number;
}
