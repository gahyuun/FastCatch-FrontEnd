import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";

import "./react-datepicker.scss";
import "./dropdown.scss";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
  startDate: Date;
  endDate: Date | null;
  onChangeStartDate: React.Dispatch<React.SetStateAction<Date>>;
  onChangeEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DateDropdown = (props: dropdownProps) => {
  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    props.onChangeStartDate(start as Date);
    props.onChangeEndDate(end);
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
