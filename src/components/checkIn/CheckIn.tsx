import { getDayOfWeek } from "@/src/utils/getDayOfWeek";
import "./checkIn.scss";

const CheckIn = ({ checkInDate, checkInTime }: CheckInProps) => {
  return (
    <div className="check-in">
      <p className="check-in__title text-body1">체크인</p>
      <p className="check-in__date text-subtitle4">
        {checkInDate} {`(${getDayOfWeek(checkInDate)})`}
      </p>
      <p className="check-in__time text-subtitle5">{checkInTime}</p>
    </div>
  );
};

export default CheckIn;

interface CheckInProps {
  checkInDate: string;
  checkInTime: string;
}
