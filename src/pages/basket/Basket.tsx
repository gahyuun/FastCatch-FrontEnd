import axios from "axios";
import { CommonButton, SelectedAccomodation } from "../../components";
import "./basket.scss";
import { useEffect, useState } from "react";

export interface CartItemType {
  accommodationName: string;
  cartItemId: number;
  endDate: string;
  headCount: number;
  price: number;
  roomId: number;
  startDate: string;
}

const Basket = () => {
  const [cartItems, setCartItems] = useState<CartItemType[] | null>(null);
  console.log(cartItems);
  const getCartItems = async () => {
    const { data } = await axios.get(
      "http://43.201.113.97/api/carts?memberId=1"
    );
    try {
      setCartItems(data.data.cartItemResponseList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="basket-container">
      <div className="basket-container__header">
        <h1 className="basket-container__header-title text-subtitle2">
          장바구니
        </h1>
      </div>
      <div className="basket-container__body">
        {cartItems?.map((item, index) => (
          <>
            <SelectedAccomodation accomdationItems={item} />
            {index !== cartItems.length - 1 && (
              <hr className="basket-container__hr" />
            )}
          </>
        ))}
        <div className="basket-container__bottom">
          <div className="total-info">
            <span className="text-subtitle5 total-info__count">
              총 {cartItems?.length}건
            </span>
            <span className="text-subtitle3">1,815,000원</span>
          </div>
          <CommonButton text="1,815,000원 결제하기" buttonSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Basket;
