import "./accommodationMainInfo.scss";
import { accommodationCategoryData } from "@/src/constant/categories";

interface AccommodationMainInfoProps {
  accommodationName: string;
  accommodationLocation: string;
  accommodationPhone: string;
  accommodationCategory: string;
}

const AccommodationMainInfo = ({
  accommodationName,
  accommodationLocation,
  accommodationPhone,
  accommodationCategory,
}: AccommodationMainInfoProps) => {
  const categoryName: string = (accommodationCategoryData as any)[
    accommodationCategory
  ];

  return (
    <div className="accommodation__main-info">
      <div className="accommodation__name">
        <div className="accommondation__name__deco"></div>
        <span className="text-subtitle3">{accommodationName}</span>
        {/* <CommonBadge text="예약 가능" badgeType="fill" /> */}
      </div>
      <div className="accommodation__main-info__detail">
        <span className="text-body1">{categoryName} |</span>
        <span className="text-body1">{accommodationLocation}</span>
      </div>
      <div className="accommodation__main-info__detail">
        <span className="text-body1">{accommodationPhone}</span>
      </div>
    </div>
  );
};

export default AccommodationMainInfo;
