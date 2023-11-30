import instance from "@/src/api/instanceApi";
import CommonToastLayout from "@/src/components/commonToast/CommonToastLayout";
import { orderState } from "@/src/states/orderState";
import numberFormat from "@/src/utils/numberFormat";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CommonButton } from "../../components";
import "./basket.scss";
import SelectedAccomodation from "./selectedAccomodation/SelectedAccomodation";
import { CiShoppingBasket } from "react-icons/ci";
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

interface ApiResponseType {
  data: { cartItemResponseList: CartItemType[] };
  status?: "SUCCESS" | "FAIL" | "ERROR";
}

const Basket = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const setOrderData = useSetRecoilState(orderState);
  const { showToast, ToastContainer } = CommonToastLayout();

  const navigate = useNavigate();

  const getCartItems = async () => {
    try {
      const { data } = await instance.get<ApiResponseType>("/api/carts");
      setCartItems(data.data.cartItemResponseList);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);
    }
  };
  const deleteCartItem = async (cartItemId: number) => {
    try {
      const { data } = await instance.delete<ApiResponseType>(
        `/api/cart-items/${cartItemId}`
      );
      setCartItems(data.data.cartItemResponseList);
      showToast({
        theme: "success",
        message: "객실이 삭제 되었습니다.",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);
    }
  };

  const deleteAllCartItems = async () => {
    try {
      const { data } = await instance.delete<ApiResponseType>("/api/carts");
      setCartItems(data.data.cartItemResponseList);
      showToast({
        theme: "success",
        message: "객실이 삭제 되었습니다.",
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError);
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

  const flattenData = (data: any[]) => {
    return data.reduce((flattenedData, accommodation) => {
      const { accommodationName, rooms } = accommodation;

      return [
        ...flattenedData,
        ...rooms.map((room: RoomDescriptionType) => ({
          accommodationName,
          ...room,
        })),
      ];
    }, []);
  };

  const handlePaymentClick = () => {
    const flattenedData = flattenData(cartItems);
    setOrderData(flattenedData);
    navigate("/order?cart=true");
  };

  const handleDeleteAllClick = () => {
    if (window.confirm("장바구니를 비우시겠습니까?")) {
      deleteAllCartItems();
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
        {cartItems.length !== 0 && (
          <CommonButton
            text="장바구니 비우기"
            shape="line"
            onClick={handleDeleteAllClick}
          />
        )}
      </div>
      {cartItems && cartItems.length !== 0 ? (
        <div className="basket-container__body">
          {cartItems?.map((item: CartItemType, index: number) => (
            <section key={item.accommodationId}>
              <SelectedAccomodation
                accomdationItems={item}
                deleteRoom={deleteCartItem}
              />
              {index !== cartItems.length - 1 && (
                <hr className="basket-container__hr" />
              )}
            </section>
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
              onClick={handlePaymentClick}
            />
          </div>
          {ToastContainer}
        </div>
      ) : (
        <div className="empty-basket">
          <CiShoppingBasket />
          <p>장바구니가 비어있어요.</p>
        </div>
      )}
    </div>
  );
};

export default Basket;
