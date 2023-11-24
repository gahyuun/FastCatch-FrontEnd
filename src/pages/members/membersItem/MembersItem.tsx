import "./membersItem.scss";

const MembersItem = ({ id, title, value }: MemberItemProps) => {
  return (
    <div className="members-item">
      <label htmlFor={`${id}`} className="members-item__title text-body3">
        {title}
      </label>
      <input
        id={`${id}`}
        type="text"
        className="members-item__value text-body1"
        value={value}
        disabled
      ></input>
    </div>
  );
};

export default MembersItem;

interface MemberItemProps {
  id: string;
  title: string;
  value: string;
}
