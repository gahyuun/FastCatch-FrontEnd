import { useState, useEffect } from "react";

import "./termsAgreement.scss";

const TermsAgreement = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [checkRule, setCheckRule] = useState(false);
  const [checkUse, setCheckUse] = useState(false);
  const [checkProvision, setCheckProvision] = useState(false);
  const [checkAge, setCheckAge] = useState(false);

  useEffect(() => {
    setCheckRule(allCheck);
    setCheckUse(allCheck);
    setCheckProvision(allCheck);
    setCheckAge(allCheck);
  }, [allCheck]);

  return (
    <div className="terms-agreement">
      <div className="terms-agreement__header">
        <input
          type="checkbox"
          id="allCheck"
          checked={allCheck}
          onChange={() => {
            setAllCheck(!allCheck);
          }}
          required
        />
        <label htmlFor="allCheck" className="text-subtitle4">
          필수약관 전체 동의
        </label>
      </div>
      <div className="terms-agreement__body">
        <div className="terms-agreement__item">
          <input
            type="checkbox"
            id="checkRule"
            checked={checkRule}
            onChange={() => setCheckRule(!checkRule)}
            required
          />
          <label htmlFor="checkRule" className="text-body1">
            숙소이용규칙 및 취소/환불규정 동의 (필수)
          </label>
        </div>
        <div className="terms-agreement__item">
          <input
            type="checkbox"
            id="checkUse"
            checked={checkUse}
            onChange={() => setCheckUse(!checkUse)}
            required
          />
          <label htmlFor="checkUse" className="text-body1">
            개인정보 수집 및 이용 동의 (필수)
          </label>
        </div>
        <div className="terms-agreement__item">
          <input
            type="checkbox"
            id="checkProvision"
            checked={checkProvision}
            onChange={() => setCheckProvision(!checkProvision)}
            required
          />
          <label htmlFor="checkProvision" className="text-body1">
            개인정보 제 3자 제공 동의 (필수)
          </label>
        </div>
        <div className="terms-agreement__item">
          <input
            type="checkbox"
            id="checkAge"
            checked={checkAge}
            onChange={() => setCheckAge(!checkAge)}
            required
          />
          <label htmlFor="checkAge" className="text-body1">
            만 14세 이상 확인 (필수)
          </label>
        </div>
      </div>
    </div>
  );
};

export default TermsAgreement;
