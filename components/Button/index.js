import React from "react";

// standard button size
const btnSize = {
  small: "small",
  medium: "medium",
  large: "large",
};

// button style
const style = {
  small: "px-3 py-1 ",
  medium: " px-6 py-1.5",
  large: "px-8 py-2",
  global: " font-medium text-gray-200 shadow-lg rounded-md",
};

// check the size of the button
const checkSize = (size) => {
  return btnSize.small === size
    ? style.small
    : btnSize.medium === size
    ? style.medium
    : btnSize.large === size
    ? style.large
    : "";
};

//Primary Button
export const PrimaryButton = ({ children, size }) => {
  return (
    <button className={`${checkSize(size)} ${style.global} bg-[#3B5998]`}>
      {children}
    </button>
  );
};

//Secondary Button
export const SecondaryButton = ({ children, size }) => {
  return (
    <button className={`${checkSize(size)} ${style.global} bg-green-500`}>
      {children}
    </button>
  );
};
