import "./dropdown.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { useRecoilState } from "recoil";
import { filterState } from "@/states/filterState";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
}

const AmountDropdown = (props: dropdownProps) => {
  const [filterStates, setFilterStates] = useRecoilState(filterState);

  const amountChangeHander = (event: React.MouseEvent, arg: number) => {
    event.stopPropagation();
    if (filterStates.amount === 15 && arg === 1) return; //15명인 상황에서 +1을 하면 바로 return
    if (filterStates.amount === 1 && arg === -1) return; //1명인 상황에서 -1을 하면 바로 return
    setFilterStates(prevStates => ({
      ...prevStates,
      amount: prevStates.amount + arg,
    }));
  };

  return (
    <>
      {props.isSelected === "amount" && ( //
        <div className="amount-container">
          <div className="text-body2">인원</div>
          <div className="amountChangeContainer">
            <div //
              className="amountChangeButton"
              onClick={event => amountChangeHander(event, 1)}
            >
              <FaPlus />
            </div>
            <div className="text-body2">{filterStates.amount}명</div>
            <div //
              className="amountChangeButton"
              onClick={event => amountChangeHander(event, -1)}
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
