import "./dropdown.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
  amount: number;
  onChangeAmount: React.Dispatch<React.SetStateAction<number>>;
}

const AmountDropdown = (props: dropdownProps) => {
  const amountChangeHander = (event: React.MouseEvent, arg: number) => {
    event.stopPropagation();
    if (props.amount === 15 && arg === 1) return;
    if (props.amount === 1 && arg === -1) return;
    props.onChangeAmount((prev) => prev + arg);
  };

  return (
    <>
      {props.isSelected === "amount" && ( //
        <div className="amount-container">
          <div className="text-body2">인원</div>
          <div className="amountChangeContainer">
            <div //
              className="amountChangeButton"
              onClick={(event) => amountChangeHander(event, 1)}
            >
              <FaPlus />
            </div>
            <div className="text-body2">{props.amount}명</div>
            <div //
              className="amountChangeButton"
              onClick={(event) => amountChangeHander(event, -1)}
            >
              <FaMinus />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AmountDropdown;
