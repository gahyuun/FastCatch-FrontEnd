import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./orderResult.scss";

const OrderResult = () => {
  const [result, setResult] = useState(false);
  const [orderId, setOrderId] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultParam = urlParams.get("result");
    setResult(resultParam ? resultParam === "true" : false);

    const orderIdParam = urlParams.get("orderid");
    setOrderId(orderIdParam ? parseInt(orderIdParam, 10) : 0);
  }, []);

  return (
    <div className="order-result">
      {result && (
        <p className="order-result__order-number text-body1">
          주문번호 {orderId}
        </p>
      )}
      <h3 className="text-subtitle3">
        {result === true
          ? "주문과 결제가 정상적으로 완료되었습니다."
          : "주문과 결제가 실패했습니다."}
      </h3>
      <div className="order-result__button-wrap">
        {result ? (
          <Link
            to={"/members/orderlist"}
            className="order-result__order-list-button text-body2"
          >
            결제 정보 확인
          </Link>
        ) : (
          ""
        )}
        <Link to={"/"} className="order-result__home-button text-body2">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
};

export default OrderResult;
