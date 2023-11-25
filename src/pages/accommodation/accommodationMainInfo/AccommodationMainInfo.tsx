import "./accommodationMainInfo.scss";
import CommonBadge from "@/src/components/commonBadge/CommonBadge";

interface AccommodationMainInfoProps {
  accommodationName: string;
  accommodationLocation: string;
}

const AccommodationMainInfo = ({
  accommodationName,
  accommodationLocation,
}: AccommodationMainInfoProps) => {
  return (
    <div className="accommodation__main-info">
      <div className="accommodation__name">
        <span className="text-subtitle3">{accommodationName}</span>
        <CommonBadge text="예약 가능" badgeType="fill" />
      </div>
      <div className="accommodation__main-info__detail">
        <span className="text-body1"> 호텔 | </span>
        <span className="text-body1">{accommodationLocation}</span>
      </div>
    </div>
  );
};

export default AccommodationMainInfo;
