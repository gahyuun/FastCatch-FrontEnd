import { useEffect, useState } from "react";
import { CommonButton } from "@/components";
import { getOrderApi } from "@/api/getOrderApi";
import { Order } from "@/types/order";
import { getOrderListApi } from "@/api/getOrderListApi";

import MembersHeader from "@/pages/members/membersHeader/MembersHeader";
import OrderListItem from "@/pages/orderList/orderListItem/OrderListItem";

import "./orderList.scss";
import CommonToastLayout from "@/components/commonToast/CommonToastLayout";

const OrderList = () => {
  const [reservedList, setReservedList] = useState<Order[]>([]);
  const [usedList, setUsedList] = useState<Order[]>([]);
  const [canceledList, setCanceledList] = useState<Order[]>([]);

  const [isReservedList, setIsReservedList] = useState<boolean>(true);
  const [isUsedList, setIsUsedList] = useState<boolean>(true);
  const [isCanceledList, setIsCanceledList] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getOrderApi();
      if (orderData) {
        const { reservedOrders, usedOrders, canceledOrders } = orderData;
        setReservedList(reservedOrders || []);
        setUsedList(usedOrders || []);
        setCanceledList(canceledOrders || []);

        setIsReservedList(reservedOrders.length < 3 ? false : true);
        setIsUsedList(usedOrders.length < 3 ? false : true);
        setIsCanceledList(canceledOrders.length < 3 ? false : true);
      }
    };

    fetchData();
  }, []);

  const getReservedList = async () => {
    const getReservedListData = await getOrderListApi("reserved");
    if (getReservedListData?.length > 0) {
      setReservedList(prev => [...prev, ...getReservedListData]);
    } else {
      showToast({
        theme: "info",
        message: '"더이상 불러올 데이터가 없습니다"',
      });
      setIsReservedList(false);
    }
  };

  const getUsedList = async () => {
    const getUsedListData = await getOrderListApi("used");
    if (getUsedListData?.length > 0) {
      setUsedList(prev => [...prev, ...getUsedListData]);
    } else {
      showToast({
        theme: "info",
        message: '"더이상 불러올 데이터가 없습니다"',
      });
      setIsUsedList(false);
    }
  };

  const getCancelList = async () => {
    const getCancelListData = await getOrderListApi("canceled");
    if (getCancelListData?.length > 0) {
      setCanceledList(prev => [...prev, ...getCancelListData]);
    } else {
      showToast({
        theme: "info",
        message: '"더이상 불러올 데이터가 없습니다"',
      });
      setIsCanceledList(false);
    }
  };

  const { showToast, ToastContainer } = CommonToastLayout();

  return (
    <div className="order-list">
      <div className="order-list__header">
        <MembersHeader />
      </div>
      <div className="order-list__body">
        <div className="order-list__booking-history">
          <h5 className="text-subtitle4">예약 내역</h5>
          <div className="order-list__item">
            {reservedList.length !== 0 ? (
              reservedList.map(item => (
                <OrderListItem
                  key={item.orderId}
                  roomInfo={item}
                  reservedList={reservedList}
                  setReservedList={setReservedList}
                />
              ))
            ) : (
              <p className="order-list__error-msg">내역이 존재하지 않습니다</p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={isReservedList}
              onClick={getReservedList}
            />
          </div>
        </div>
        <div className="order-list__usage-history">
          <h5 className="text-subtitle4">사용 내역</h5>
          <div className="order-list__item">
            {usedList.length !== 0 ? (
              usedList.map(item => (
                <OrderListItem key={item.orderId} roomInfo={item} />
              ))
            ) : (
              <p className="order-list__error-msg">내역이 존재하지 않습니다</p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={isUsedList}
              onClick={getUsedList}
            />
          </div>
        </div>
        <div className="order-list__refund-history">
          <h5 className="text-subtitle4">취소 내역</h5>
          <div className="order-list__item">
            {canceledList.length !== 0 ? (
              canceledList.map(item => (
                <OrderListItem key={item.orderId} roomInfo={item} />
              ))
            ) : (
              <p className="order-list__error-msg">내역이 존재하지 않습니다</p>
            )}
            <CommonButton
              text={"더보기"}
              buttonSize="exLarge"
              isPassed={isCanceledList}
              onClick={getCancelList}
            />
          </div>
        </div>
      </div>
      {ToastContainer}
    </div>
  );
};

export default OrderList;
