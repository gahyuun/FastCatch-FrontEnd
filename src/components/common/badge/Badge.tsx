import "./badge.scss";

interface CommonBadgeType {
  text: string;
  badgeType?: "fill" | "line";
  badgeStatus?: "used" | "canceled";
}

function Badge({ text, badgeType, badgeStatus }: CommonBadgeType) {
  return (
    <span className={`common-badge ${badgeType} ${badgeStatus}`}>{text}</span>
  );
}

Badge.defaultProps = {
  badgeType: "line",
  badgeStatus: "used",
};

export default Badge;
