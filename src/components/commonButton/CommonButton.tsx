import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  buttonSize?: "small" | "large" | "exLarge";
  shape?: "fill" | "line";
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isAllValidationPass?: boolean;
  type?: "button" | "submit";
}

function CommonButton({
  text,
  buttonSize,
  shape,
  colorName,
  onClick,
  isAllValidationPass,
  type,
}: ButtonType) {
  return (
    <button
      className={`common-button ${buttonSize} ${shape}-${colorName} ${
        isAllValidationPass ? "" : "disabled"
      }`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}

CommonButton.defaultProps = {
  buttonSize: "small",
  shape: "fill",
  colorName: "coral500",
  isAllValidationPass: true,
  type: "button",
};

export default CommonButton;
