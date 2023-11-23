import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  buttonSize?: "small" | "large" | "exLarge";
  shape?: "fill" | "line";
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isTermsAgreed?: boolean;
}

function CommonButton({
  text,
  buttonSize,
  shape,
  colorName,
  onClick,
  isTermsAgreed,
}: ButtonType) {
  return (
    <button
      className={`common-button ${buttonSize} ${shape}-${colorName} ${
        isTermsAgreed ? "" : "disabled"
      }`}
      onClick={onClick}
      disabled={!isTermsAgreed}
    >
      {text}
    </button>
  );
}

CommonButton.defaultProps = {
  buttonSize: "small",
  shape: "fill",
  colorName: "coral500",
};

export default CommonButton;
