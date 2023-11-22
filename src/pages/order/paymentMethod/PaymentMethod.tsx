import PaymentMethodItem from '../paymentMethodItem/PaymentMethodItem';
import { useState } from 'react';
import './paymentMethod.scss';

const initialPaymentMethod = [
  '카드 결제',
  '카카오페이',
  '네이버페이',
  '휴대폰 결제',
  '토스페이',
];

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('카드 결제');

  return (
    <div className="payment-method">
      <h4 className="text-subtitle4">결제 수단</h4>
      {initialPaymentMethod.map((option, index) => (
        <PaymentMethodItem
          className={index === 0 ? 'full' : ''}
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
