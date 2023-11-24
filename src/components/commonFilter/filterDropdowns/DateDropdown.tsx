import "./dropdown.scss";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
}

const DateDropdown = (props: dropdownProps) => {
  return (
    <>
      {props.isSelected === "date" && ( //
        <div className="date-container">date</div>
      )}
    </>
  );
};

export default DateDropdown;
