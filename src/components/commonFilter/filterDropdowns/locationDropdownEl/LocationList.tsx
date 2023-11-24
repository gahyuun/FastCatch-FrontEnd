import "./locationDropdownEls.scss";

interface listProps {
  locale: string;
  isSelected: "location" | "date" | "amount" | null;
  onClick: (target: "location" | "date" | "amount" | null) => void;
  onChangeLocale: React.Dispatch<React.SetStateAction<"서울" | "경기">>;
  opened: string;
}

const LocationList = (props: listProps) => {
  const changeHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    props.onClick("date");
    props.onChangeLocale(props.opened as "서울" | "경기");
  };

  return (
    <div
      onClick={changeHandler} //
      className="category-content"
    >
      {props.locale}
    </div>
  );
};

export default LocationList;
