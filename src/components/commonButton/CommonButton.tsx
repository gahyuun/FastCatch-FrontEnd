import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  fontSize?: string; //예시 text-subtitle5, text-body2,...
  buttonSize?: "small" | "large";
  shape?: "fill" | "line";
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CommonButton({ text, fontSize, buttonSize, shape, colorName, onClick }: ButtonType) {
  return (
    <button className={`${fontSize} common-button ${buttonSize} ${shape}-${colorName}`} onClick={onClick}>
      {text}
    </button>
  );
}

CommonButton.defaultProps = {
  fontSize: "text-body2",
  buttonSize: "small",
  shape: "fill",
  colorName: "coral500",
};

export default CommonButton;
