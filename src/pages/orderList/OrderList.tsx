import MembersHeader from "@/src/pages/members/membersHeader/MembersHeader";
import OrderListItem from "@/src/pages/orderList/orderListItem/OrderListItem";
import { CommonButton } from "@/src/components";

import "./orderList.scss";

const OrderList = () => {
  return (
    <div className="order-list">
      <div className="order-list__header">
        <MembersHeader />
      </div>
      <div className="order-list__body">
        <div className="order-list__booking-history">
          <h5 className="text-subtitle5">예약 내역</h5>
          <div className="order-list__item">
            <OrderListItem />
            <OrderListItem />
            <OrderListItem />
            <CommonButton text={"더보기"} buttonSize="exLarge" />
          </div>
        </div>
        <div className="order-list__usage-history">
          <h5 className="text-subtitle5">사용 내역</h5>
          <div className="order-list__item">
            <OrderListItem />
            <CommonButton text={"더보기"} buttonSize="exLarge" />
          </div>
        </div>
        <div className="order-list__refund-history">
          <h5 className="text-subtitle5">취소 내역</h5>
          <div className="order-list__item">
            <OrderListItem />
            <CommonButton text={"더보기"} buttonSize="exLarge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
