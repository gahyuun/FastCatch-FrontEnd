import { CommonButton, SelectedAccomodation } from "../../components";
import "./basket.scss";

const Basket = () => {
  return (
    <div className="basket-container">
      <div className="basket-container__header">
        <h1 className="basket-container__header-title text-subtitle2">
          장바구니
        </h1>
      </div>
      <div className="basket-container__body">
        <SelectedAccomodation />
        <hr className="basket-container__hr" />
        <SelectedAccomodation />
        <div className="basket-container__bottom">
          <div className="total-info">
            <span className="text-subtitle5 total-info__count">총 4건</span>
            <span className="text-subtitle3">1,815,000원</span>
          </div>
          <CommonButton text="1,815,000원 결제하기" buttonSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Basket;
