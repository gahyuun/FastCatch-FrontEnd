import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  buttonSize?: "small" | "large";
  shape?: "fill" | "line";
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CommonButton({ text, buttonSize, shape, colorName, onClick }: ButtonType) {
  return (
    <button className={`common-button ${buttonSize} ${shape}-${colorName}`} onClick={onClick}>
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
