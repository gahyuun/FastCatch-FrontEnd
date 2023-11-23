import "./commonDateFilter.scss";

interface filterProps {
  location?: string;
  date: [Date, Date];
  amount: number;
}

const CommonDateFilter = (props: filterProps) => {
  // let processed = props.date[0]
  return (
    <div className="filter__container">
      <div className="filter__location">
        <span className="text-caption2 small-label">지역</span>
        <p>{props.location}</p>
      </div>
      <div className="filter__schedule">
        <span className="text-caption2 small-label">일정</span>
        <p>
          {props.date[0].toLocaleDateString()} - {props.date[1].toLocaleDateString()}
        </p>
      </div>
      <div className="filter__accompany">
        <span className="text-caption2 small-label">인원</span>
        <p>{props.amount}명</p>
      </div>
      <button className="filter__sort-button"></button>
    </div>
  );
};

export default CommonDateFilter;
