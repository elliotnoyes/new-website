import React from "react";
import { useTheme } from "next-themes";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "cancel") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base pb-3 pr-0 my-1 ml-auto rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 active:scale-100 ${classes} link`}
      >
        {children}
      </button>
    );
  }
  if (type === "header") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex justify-center items-center transition-all ease-out duration-300 ${
          theme === "dark"
            ? "hover:bg-yellow-900 text-white"
            : "hover:bg-orange-100 text-black"
        } hover:scale-105 active:scale-100 ${classes} link`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-yellow-900 text-white"
          : "hover:bg-orange-100 text-black"
      } hover:scale-105 active:scale-100 tablet:first:ml-0 ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
