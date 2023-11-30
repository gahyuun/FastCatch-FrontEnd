import "./commonBadge.scss";

interface CommonBadgeType {
  text: string;
  badgeType?: "fill" | "line";
  badgeStatus?: "used" | "canceled";
}

function CommonBadge({ text, badgeType, badgeStatus }: CommonBadgeType) {
  return (
    <span className={`common-badge ${badgeType} ${badgeStatus}`}>{text}</span>
  );
}

CommonBadge.defaultProps = {
  badgeType: "line",
  badgeStatus: "used",
};

export default CommonBadge;
