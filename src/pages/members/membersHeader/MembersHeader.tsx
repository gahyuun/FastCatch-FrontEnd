import { Link, useLocation } from "react-router-dom";

import { PATH } from "@/routes/constants";

import "./membersHeader.scss";

const MembersHeader = () => {
  const location = useLocation();

  return (
    <div className="members-header">
      <h2 className="text-subtitle2">내 정보</h2>
      <nav className="members-header__nav">
        <ul className="members-header__ul">
          <li
            className={`members-header__li ${
              location.pathname === PATH.MEMBERS ? "selected" : ""
            }`}
          >
            <Link to={`${PATH.MEMBERS}`}>내 정보 관리</Link>
          </li>
          <li
            className={`members-header__li ${
              location.pathname === PATH.ORDERLIST ? "selected" : ""
            }`}
          >
            <Link to={`${PATH.ORDERLIST}`}>주문 목록</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MembersHeader;
