import { memo } from "react";
import "./eventBanner.scss";

const EventBanner = memo(() => {
  return (
    <div className="event-banner">
      <p className="event-banner__title text-body3">네이버 페이</p>
      <p className="event-banner__content text-subtitle5">
        3만원 이상 결제시 네이버 마일리지 5% 적립
      </p>
      <p className="event-banner__description text-body2">
        일 선착순 260명 대상/기간 내 1일 적용
      </p>
    </div>
  );
});

export default EventBanner;
