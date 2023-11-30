import { HiMiniUsers } from "react-icons/hi2";

import "./accommodationGuest.scss";

const AccommodationGuest = ({ minimum, maximum }: AccommodationGuestProps) => {
  return (
    <div className="accommodation-guest text-body1">
      <HiMiniUsers></HiMiniUsers>
      <div className="accommodation-guest__count">
        <span>인원 {minimum}인</span>
        <span>/</span>
        <span>최대 {maximum}인</span>
      </div>
    </div>
  );
};

export default AccommodationGuest;

interface AccommodationGuestProps {
  minimum: number;
  maximum: number;
}
