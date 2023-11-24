import { useState } from "react";
import MembersItem from "@/pages/members/membersItem/MembersItem";

import "./membersInfo.scss";

const MembersInfo = () => {
  const [isSettingMode, setIsSettingMode] = useState(false);

  const handleClick = () => {
    setIsSettingMode(!isSettingMode);

    if (isSettingMode) {
    }
  };

  return (
    <div className="members-info">
      <div className="members-info__header">
        <h5 className="text-subtitle5">개인 정보</h5>
        <button
          className="members-info__modify text-body2"
          onClick={handleClick}
        >
          {isSettingMode ? "수정 완료" : "정보 수정"}
        </button>
      </div>
      <div className="members-info__body">
        <MembersItem id={"memberId"} title={"아이디"} value={"tkyoun0421"} />
        <MembersItem
          id={"email"}
          title={"이메일"}
          value={"tkyoun0421@naver.com"}
        />
        <MembersItem id={"name"} title={"이름"} value={"윤태관"} />
        <MembersItem
          id={"nickName"}
          title={"닉네임"}
          value={"프론트엔드개발자"}
        />
        <MembersItem id={"birthDay"} title={"생년월일"} value={"2023-04-21"} />
        <MembersItem
          id={"userPhoneNumber"}
          title={"휴대폰 번호"}
          value={"01012345678"}
        />
      </div>
    </div>
  );
};

export default MembersInfo;
