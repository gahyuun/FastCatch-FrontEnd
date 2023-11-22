import CommonInput from "../../../components/commonInput/CommonInput";
import { useState } from "react";

import "./bookerInformation.scss";

const BookerInformation = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhoneNumber(e.target.value);
  };

  return (
    <div className="booker-information">
      <h4 className="text-subtitle4">예약자 정보</h4>
      <div className="booker-information__input">
        <CommonInput
          title={"예약자 이름"}
          placeholder={"예약자 이름을 입력해주세요"}
          onChange={handleUserName}
          value={userName}
        />
        <CommonInput
          title={"휴대폰 번호"}
          placeholder={"휴대폰 번호를 입력해주세요"}
          onChange={handleUserPhoneNumber}
          value={userPhoneNumber}
        />
      </div>
    </div>
  );
};

export default BookerInformation;
