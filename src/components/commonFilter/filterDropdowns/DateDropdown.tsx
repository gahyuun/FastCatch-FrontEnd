import { filterState } from "@/src/states/atom";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import { useRecoilState } from "recoil";

import "./react-datepicker.scss";
import "./dropdown.scss";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
  startDate: Date;
  endDate: Date | null;
}

const DateDropdown = (props: dropdownProps) => {
  const [, setFilterStates] = useRecoilState(filterState);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setFilterStates((prevStates) => ({
      ...prevStates,
      startDate: start as Date,
      endDate: end,
    }));
  };
  return (
    <>
      {props.isSelected === "date" && ( //
        <div className="date-container">
          <DatePicker //
            selected={props.startDate}
            onChange={onChange}
            minDate={new Date()}
            startDate={props.startDate}
            endDate={props.endDate}
            selectsRange
            inline
            showDisabledMonthNavigation
            locale={ko}
          />
        </div>
      )}
    </>
  );
};

export default DateDropdown;
