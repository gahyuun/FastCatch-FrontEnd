import { useEffect, useState } from "react";
import { CommonButton } from "@/src/components";

import MembersHeader from "@/src/pages/members/membersHeader/MembersHeader";
import OrderListItem from "@/src/pages/orderList/orderListItem/OrderListItem";
import instance from "@/src/api/instanceApi";
import { Order, OrderDataTypes } from "@/src/types/order";

import "./orderList.scss";

const OrderList = () => {
  const [reservedList, setReservedList] = useState<Order[]>([]);
  const [usedList, setUsedList] = useState<Order[]>([]);
  const [canceledList, setCanceledList] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await instance.get("/api/orders");
        const orderData = res.data.data.orders;

        const reservedOrders =
          orderData.find((order: OrderDataTypes) => order.status === "reserved")
            ?.orderResponses || [];
        setReservedList(reservedOrders);

        const usedOrders =
          orderData.find((order: OrderDataTypes) => order.status === "used")
            ?.orderResponses || [];
        setUsedList(usedOrders);

        const canceledOrders =
          orderData.find((order: OrderDataTypes) => order.status === "canceled")
            ?.orderResponses || [];
        setCanceledList(canceledOrders);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrderList();
  }, []);

  return (
    <div className="order-list">
      <div className="order-list__header">
        <MembersHeader />
      </div>
      <div className="order-list__body">
        <div className="order-list__booking-history">
          <h5 className="text-subtitle5">예약 내역</h5>
          <div className="order-list__item">
            {reservedList.length !== 0 ? (
              reservedList.map(item => (
                <OrderListItem key={item.orderId} orderInfo={item} />
              ))
            ) : (
              <p className="order-list__error-msg">
                아이템이 존재하지 않습니다
              </p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={reservedList.length <= 3 ? false : true}
            />
          </div>
        </div>
        <div className="order-list__usage-history">
          <h5 className="text-subtitle5">사용 내역</h5>
          <div className="order-list__item">
            {usedList.length !== 0 ? (
              usedList.map(item => (
                <OrderListItem key={item.orderId} orderInfo={item} />
              ))
            ) : (
              <p className="order-list__error-msg">
                아이템이 존재하지 않습니다
              </p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={usedList.length <= 3 ? false : true}
            />
          </div>
        </div>
        <div className="order-list__refund-history">
          <h5 className="text-subtitle5">취소 내역</h5>
          <div className="order-list__item">
            {canceledList.length !== 0 ? (
              canceledList.map(item => (
                <OrderListItem key={item.orderId} orderInfo={item} />
              ))
            ) : (
              <p className="order-list__error-msg">
                아이템이 존재하지 않습니다
              </p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={canceledList.length <= 3 ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
