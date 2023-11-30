import { useEffect, useState } from "react";
import { CommonButton } from "@/src/components";
import { getOrderApi } from "@/src/api/getOrderApi";
import { Order } from "@/src/types/order";

import MembersHeader from "@/src/pages/members/membersHeader/MembersHeader";
import OrderListItem from "@/src/pages/orderList/orderListItem/OrderListItem";

import "./orderList.scss";

const OrderList = () => {
  const [reservedList, setReservedList] = useState<Order[]>([]);
  const [usedList, setUsedList] = useState<Order[]>([]);
  const [canceledList, setCanceledList] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getOrderApi();
      if (orderData) {
        const { reservedOrders, usedOrders, canceledOrders } = orderData;
        setReservedList(reservedOrders || []);
        setUsedList(usedOrders || []);
        setCanceledList(canceledOrders || []);
      }
    };

    fetchData();
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
                <OrderListItem key={item.orderId} roomInfo={item} />
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
                <OrderListItem key={item.orderId} roomInfo={item} />
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
                <OrderListItem key={item.orderId} roomInfo={item} />
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
