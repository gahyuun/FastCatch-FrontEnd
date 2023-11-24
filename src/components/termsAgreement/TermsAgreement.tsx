import React from "react";
import { useState, useEffect } from "react";
import TermsAgreementItem from "../termsAgreementItem/TermsAgreementItem";

import "./termsAgreement.scss";

const TermsAgreement = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [checkRule, setCheckRule] = useState(false);
  const [checkUse, setCheckUse] = useState(false);
  const [checkProvision, setCheckProvision] = useState(false);
  const [checkAge, setCheckAge] = useState(false);

  useEffect(() => {
    if (allCheck) {
      setCheckRule(allCheck);
      setCheckUse(allCheck);
      setCheckProvision(allCheck);
      setCheckAge(allCheck);
    }
  }, [allCheck]);

  useEffect(() => {
    if (
      allCheck !== checkRule ||
      allCheck !== checkUse ||
      allCheck !== checkProvision ||
      allCheck !== checkAge
    ) {
      setAllCheck(false);
    }
  }, [checkRule, checkUse, checkProvision, checkAge]);

  return (
    <div className="terms-agreement">
      <div className="terms-agreement__header">
        <TermsAgreementItem
          state={allCheck}
          setState={setAllCheck}
          labelText={"필수약관 전체 동의"}
          className={"text-subtitle4"}
          id={"allCheck"}
        />
      </div>
      <div className="terms-agreement__body">
        <TermsAgreementItem
          state={checkRule}
          setState={setCheckRule}
          labelText={"숙소이용규칙 및 취소/환불규정 동의 (필수)"}
          className={"text-body1"}
          id={"checkRule"}
        />
        <TermsAgreementItem
          state={checkUse}
          setState={setCheckUse}
          labelText={"개인정보 수집 및 이용 동의 (필수)"}
          className={"text-body1"}
          id={"checkUse"}
        />
        <TermsAgreementItem
          state={checkProvision}
          setState={setCheckProvision}
          labelText={"개인정보 제 3자 제공 동의 (필수)"}
          className={"text-body1"}
          id={"checkProvision"}
        />
        <TermsAgreementItem
          state={checkAge}
          setState={setCheckAge}
          labelText={"만 14세 이상 확인 (필수)"}
          className={"text-body1"}
          id={"checkAge"}
        />
      </div>
    </div>
  );
};

export default TermsAgreement;
