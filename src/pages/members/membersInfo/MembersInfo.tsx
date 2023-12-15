import { useState } from "react";
import { MdBlock, MdCheckCircleOutline } from "react-icons/md";
import { useRecoilState } from "recoil";
import { userInfoI, userState } from "@/states/userState";
import { putUserInfoApi } from "@/api/putUserInfoApi";

import { useValidation } from "@/hooks/useValidation";
import {
  REGEX_BIRTH_DAY,
  REGEX_NAME,
  REGEX_NICK_NAME,
  REGEX_PHONE_NUMBER,
} from "@/constant/validation";

import "./membersInfo.scss";
import { ToastLayout } from "@/components/common";
import { getUserInfoApi } from "@/api/getUserInfoApi";
import { useQuery } from "react-query";
import LoadingAnimation from "@/components/loadingAnimation/LoadingAnimation";
import ErrorAnimation from "@/components/errorAnimation/ErrorAnimation";

const MembersInfo = () => {
  const [isSettingMode, setIsSettingMode] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState<userInfoI | null>(userState);
  const [copyUserInfo, setCopyUserInfo] = useState(userInfo);
  const { name, nickname, phoneNumber, email, birthday } = copyUserInfo!;
  const [isNameValidationPass, setIsNameValidationPass] = useState(true);
  const [isNickNameValidationPass, setIsNickNameValidationPass] =
    useState(true);
  const [isPhoneNumberValidationPass, setIsPhoneNumberValidationPass] =
    useState(true);
  const [isBirthDayValidationPass, setIsBirthDayValidationPass] =
    useState(true);

  const { isLoading, isError } = useQuery("userData", getUserInfoApi);

  const handleInputChange = (fieldName: string, value: string) => {
    setCopyUserInfo((prevUserInfo: userInfoI | null) => ({
      ...prevUserInfo!,
      [fieldName]: value,
    }));
  };

  const handleClick = async () => {
    if (
      !isNameValidationPass ||
      !isNickNameValidationPass ||
      !isPhoneNumberValidationPass ||
      !isBirthDayValidationPass
    ) {
      showToast({
        theme: "error",
        message: "모든 정보를 정확히 입력하세요",
      });
      return;
    }

    setIsSettingMode(!isSettingMode);

    if (isSettingMode) {
      setUserInfo(copyUserInfo);

      const { name, nickname, birthday, phoneNumber } = copyUserInfo!;
      const requestBody = {
        name,
        nickname,
        birthday,
        phoneNumber,
      };

      try {
        const res = await putUserInfoApi(requestBody);
        showToast({
          theme: "success",
          message: "정보가 수정 되었습니다",
        });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const { showToast, ToastContainer } = ToastLayout();

  const checkNameValidation = () => {
    setIsNameValidationPass(isNameValidation);
  };

  const checkNickNameValidation = () => {
    setIsNickNameValidationPass(isNickNameValidation);
  };
  const checkPhoneNumberValidation = () => {
    setIsPhoneNumberValidationPass(isPhoneNumberValidation);
  };
  const checkBirthDayValidation = () => {
    setIsBirthDayValidationPass(isBirthDayValidation);
  };

  const { isValidation: isNameValidation } = useValidation(name, REGEX_NAME);
  const { isValidation: isNickNameValidation } = useValidation(
    nickname,
    REGEX_NICK_NAME
  );
  const { isValidation: isPhoneNumberValidation } = useValidation(
    phoneNumber,
    REGEX_PHONE_NUMBER
  );
  const { isValidation: isBirthDayValidation } = useValidation(
    birthday,
    REGEX_BIRTH_DAY
  );

  if (isLoading) {
    return <LoadingAnimation width="200px" height="200px" />;
  }

  if (isError) {
    return <ErrorAnimation width="200px" height="200px" />;
  }

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
        <div className="members-info__item">
          <label htmlFor="email" className="members-info__title">
            이메일
          </label>
          <div className="members-info__input">
            <input
              id="email"
              type="text"
              className="members-info__value text-body1"
              disabled
              value={email}
            />
            {isSettingMode ? <MdBlock className="members-info__block" /> : null}
          </div>
        </div>
        <div className="members-info__item">
          <label htmlFor="name" className="members-info__title">
            이름
          </label>
          <div className="members-info__input">
            <input
              id="name"
              type="text"
              className="members-info__value text-body1"
              disabled={!isSettingMode}
              value={name}
              onChange={e => handleInputChange("name", e.target.value)}
              onBlur={checkNameValidation}
            />
            {isSettingMode ? (
              <MdCheckCircleOutline className={"members-info__check"} />
            ) : null}
          </div>
          {isNameValidationPass ? (
            ""
          ) : (
            <p className="members-info__error-msg">
              2글자 이상 영어와 한글로 입력하세요
            </p>
          )}
        </div>
        <div className="members-info__item">
          <label htmlFor="nickName" className="members-info__title">
            닉네임
          </label>
          <div className="members-info__input">
            <input
              id="nickName"
              type="text"
              className="members-info__value text-body1"
              disabled={!isSettingMode}
              value={nickname}
              onBlur={checkNickNameValidation}
              onChange={e => handleInputChange("nickname", e.target.value)}
              placeholder="닉네임을 입력하세요"
            />
            {isSettingMode ? (
              <MdCheckCircleOutline className={"members-info__check"} />
            ) : null}
          </div>
          {isNickNameValidationPass ? (
            ""
          ) : (
            <p className="members-info__error-msg">
              2글자 ~ 14글자 사이 영어와 한글만 입력하세요
            </p>
          )}
        </div>
        <div className="members-info__item">
          <label htmlFor="birthDay" className="members-info__title">
            생년월일
          </label>
          <div className="members-info__input">
            <input
              id="birthDay"
              type="text"
              className="members-info__value text-body1"
              disabled={!isSettingMode}
              value={birthday}
              onBlur={checkBirthDayValidation}
              onChange={e => handleInputChange("birthday", e.target.value)}
              placeholder="생년월일을 입력하세요 (yyyy-mm-dd)"
            />
            {isSettingMode ? (
              <MdCheckCircleOutline className={"members-info__check"} />
            ) : null}
          </div>
          {isBirthDayValidationPass ? (
            ""
          ) : (
            <p className="members-info__error-msg">
              올바른 형식의 생년월일을 입력하세요 (yyyy-mm-dd)
            </p>
          )}
        </div>
        <div className="members-info__item">
          <label htmlFor="userPhoneNumber" className="members-info__title">
            휴대폰 번호
          </label>
          <div className="members-info__input">
            <input
              id="userPhoneNumber"
              type="text"
              className="members-info__value text-body1"
              disabled={!isSettingMode}
              value={phoneNumber}
              onBlur={checkPhoneNumberValidation}
              onChange={e => handleInputChange("phoneNumber", e.target.value)}
              placeholder="숫자만 입력하세요"
            />
            {isSettingMode ? (
              <MdCheckCircleOutline className={"members-info__check"} />
            ) : null}
          </div>
          {isPhoneNumberValidationPass ? (
            ""
          ) : (
            <p className="members-info__error-msg">
              10~11자리 사이의 숫자만 입력하세요
            </p>
          )}
        </div>
      </div>
      {ToastContainer}
    </div>
  );
};

export default MembersInfo;
