import { memo } from "react";
import "./paymentMethodItem.scss";

const PaymentMethodItem = memo(
  ({
    className,
    methodName,
    selectedMethod,
    setSelectedMethod,
  }: PaymentMethodItemProps) => {
    const handleSelected = () => {
      setSelectedMethod(methodName);
    };

    return (
      <input
        className={`${
          className ? `payment-method-item ${className}` : "payment-method-item"
        } text-body1 ${
          selectedMethod === methodName ? "payment-method-item__selected" : ""
        }`}
        onClick={handleSelected}
        type="button"
        value={methodName}
      />
    );
  }
);

export default PaymentMethodItem;

interface PaymentMethodItemProps {
  className: string;
  methodName: string;
  selectedMethod: string;
  setSelectedMethod: (methodName: string) => void;
}
