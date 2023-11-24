import React from "react";
import "./checkOut.scss";

const CheckOut = ({ checkOutDate, checkOutTime }: CheckOutProps) => {
  return (
    <div className="check-out">
      <p className="check-out__title text-body1">체크아웃</p>
      <p className="check-out__date text-subtitle4">{checkOutDate}</p>
      <p className="check-out__time text-subtitle5">{checkOutTime}</p>
    </div>
  );
};

export default CheckOut;

interface CheckOutProps {
  checkOutDate: string;
  checkOutTime: string;
}
