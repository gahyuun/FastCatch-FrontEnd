import instance from "@/src/api/instanceApi";
import numberFormat from "@/src/utils/numberFormat";
import { useEffect, useState } from "react";
import { CommonButton, SelectedAccomodation } from "../../components";
import "./basket.scss";

export interface RoomDescriptionType {
  cartItemId: number;
  checkInTime: string;
  checkOutTime: string;
  endDate: string;
  headCount: number;
  maxHeadCount: number;
  price: number;
  roomId: number;
  roomName: string;
  startDate: string;
}

export interface CartItemType {
  accommodationName: string;
  accommodationId: number;
  rooms: RoomDescriptionType[];
}

const Basket = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  console.log(cartItems);

  const updateCartItems = async (cartItemId?: number) => {
    try {
      let endpoint = "/api/carts";

      if (cartItemId !== undefined) {
        endpoint = `/api/cart-items/${cartItemId}`;
      }

      const { data } = await (cartItemId !== undefined
        ? instance.delete(endpoint)
        : instance.get(endpoint));

      setCartItems(data.data.cartItemResponseList);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalRoomsAndPrice = (
    data: CartItemType[]
  ): { totalRoomsConunt: number; totalPrice: string } => {
    let totalRoomsConunt = 0;
    let price = 0;

    data.forEach((accommodation: CartItemType) => {
      accommodation.rooms.forEach((room: { price: number }) => {
        totalRoomsConunt++;
        price += room.price;
      });
    });
    const totalPrice = numberFormat(price);
    return { totalRoomsConunt, totalPrice };
  };

  const { totalRoomsConunt, totalPrice } =
    calculateTotalRoomsAndPrice(cartItems);

  useEffect(() => {
    updateCartItems();
  }, []);

  return (
    <div className="basket-container">
      <div className="basket-container__header">
        <h1 className="basket-container__header-title text-subtitle2">
          장바구니
        </h1>
      </div>
      {cartItems && (
        <div className="basket-container__body">
          {cartItems?.map((item: any, index: number) => (
            <div key={item.accommodationId}>
              <SelectedAccomodation
                accomdationItems={item}
                deleteRoom={updateCartItems}
              />
              {index !== cartItems.length - 1 && (
                <hr className="basket-container__hr" />
              )}
            </div>
          ))}
          <div className="basket-container__bottom">
            <div className="total-info">
              <span className="text-subtitle5 total-info__count">
                총 {totalRoomsConunt}건
              </span>
              <span className="text-subtitle3">{}</span>
            </div>
            <CommonButton
              text={`${totalPrice}원 결제하기`}
              buttonSize="large"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
