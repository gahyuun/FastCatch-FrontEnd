import numberFormat from "@/utils/numberFormat";
import { useRecoilValue } from "recoil";
import { discountState } from "@/states/discountState";
import "./orderPrice.scss";

const OrderPrice = ({ nightCount, roomPrice }: OrderPriceProps) => {
  const discountAmt = useRecoilValue(discountState);
  const finalPrice = discountAmt > 0 ? discountAmt : roomPrice;

  return (
    <div className="order-price">
      <span className="order-price__night-count text-body1">
        ({nightCount}박)
      </span>
      {discountAmt !== 0 && (
        <div className="coupon-box">
          <div className="coupon-label">쿠폰가</div>
        </div>
      )}

      <div className="original-price-container">
        {discountAmt !== 0 && (
          <span className="original-price">
            {numberFormat(roomPrice + discountAmt)}원
          </span>
        )}
        <span className="order-price__price text-subtitle3">
          {numberFormat(finalPrice)}원
        </span>
      </div>
    </div>
  );
};

export default OrderPrice;

interface OrderPriceProps {
  nightCount: number;
  roomPrice: number;
}
