import "./commonBadge.scss";

interface CommonBadgeType {
  text: string;
  badgeType?: "fill" | "line";
  fontSize?: string;
}

function CommonBadge({ text, badgeType, fontSize }: CommonBadgeType) {
  return (
    <span className={`${fontSize} common-badge ${badgeType}`}>{text}</span>
  );
}

CommonBadge.defaultProps = {
  fontSize: "text-body2",
  badgeType: "line",
};

export default CommonBadge;
