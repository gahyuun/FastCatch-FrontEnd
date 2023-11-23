import "./commonBadge.scss";

interface CommonBadgeType {
  text: string;
  badgeType?: "fill" | "line";
}

function CommonBadge({ text, badgeType }: CommonBadgeType) {
  return <span className={`common-badge ${badgeType}`}>{text}</span>;
}

CommonBadge.defaultProps = {
  badgeType: "line",
};

export default CommonBadge;
