import axios from "axios";
import { useEffect, useState } from "react";
import { CommonButton, SelectedAccomodation } from "../../components";
import "./basket.scss";
import numberFormat from "@/src/utils/numberFormat";

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

  const deleteRoom = async (cartItemId: number) => {
    try {
      const { data } = await axios.delete(
        `http://43.201.113.97/api/cart-items/${cartItemId}?memberId=1`
      );
      setCartItems(data.data.cartItemResponseList);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalRoomsAndPrice = (
    data: any[]
  ): { totalRooms: number; totalPrice: string } => {
    let totalRooms = 0;
    let price = 0;

    data.forEach((accommodation: any) => {
      accommodation.rooms.forEach((room: { price: number }) => {
        totalRooms++;
        price += room.price;
      });
    });
    const totalPrice = numberFormat(price);
    return { totalRooms, totalPrice };
  };

  const { totalRooms, totalPrice } = calculateTotalRoomsAndPrice(cartItems);

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
      {cartItems && (
        <div className="basket-container__body">
          {cartItems?.map((item: any, index: number) => (
            <div key={item.accommodationId}>
              <SelectedAccomodation
                accomdationItems={item}
                deleteRoom={deleteRoom}
              />
              {index !== cartItems.length - 1 && (
                <hr className="basket-container__hr" />
              )}
            </div>
          ))}
          <div className="basket-container__bottom">
            <div className="total-info">
              <span className="text-subtitle5 total-info__count">
                {`총 ${totalRooms}건`}
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
