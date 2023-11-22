import React from "react";
import "./commonButton.scss";

interface ButtonType {
  text: string;
  size?: string;
  shape?: string;
  colorName?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function CommonButton({ text, size, shape, colorName, onClick }: ButtonType) {
  return (
    <button
      className={`text-body1 common-button ${size} ${shape}-${colorName}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

CommonButton.defaultProps = {
  size: "small",
  shape: "fill",
  colorName: "coral500",
};

export default CommonButton;
