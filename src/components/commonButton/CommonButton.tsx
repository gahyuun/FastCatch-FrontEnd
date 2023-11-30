import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  buttonSize?: "small" | "large" | "exLarge";
  shape?: "fill" | "line";
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isPassed?: boolean;
  type?: "button" | "submit";
}

function CommonButton({
  text,
  buttonSize,
  shape,
  colorName,
  onClick,
  isPassed,
  type,
}: ButtonType) {
  return (
    <button
      className={`common-button ${buttonSize} ${shape}-${colorName} ${
        isPassed ? "" : "disabled"
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
  isPassed: true,
  type: "button",
};

export default CommonButton;
