import "./dropdown.scss";

interface dropdownProps {
  isSelected: "location" | "date" | "amount" | null;
}

const AmountDropdown = (props: dropdownProps) => {
  return (
    <>
      {props.isSelected === "amount" && ( //
        <div className="amount-container">amount</div>
      )}
    </>
  );
};

export default AmountDropdown;
