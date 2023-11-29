import { SetStateAction } from "react";

import PaymentMethodItem from "@/src/pages/order/paymentMethodItem/PaymentMethodItem";
import { initialPaymentMethod } from "@/src/constant/initialPaymentMethod";

import "./paymentMethod.scss";

const PaymentMethod = ({
  selectedMethod,
  setSelectedMethod,
}: PaymentMethodProps) => {
  return (
    <div className="payment-method">
      <h4 className="text-subtitle4">결제 수단</h4>
      {initialPaymentMethod.map((option, index) => (
        <PaymentMethodItem
          className={index === 0 ? "full" : ""}
          methodName={option}
          key={index}
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
      ))}
    </div>
  );
};

export default PaymentMethod;

interface PaymentMethodProps {
  selectedMethod: string;
  setSelectedMethod: React.Dispatch<SetStateAction<string>>;
}
