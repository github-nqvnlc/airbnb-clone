"use client";

import React from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-50
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? "bg-white" : "bg-orange-500"}
        ${outline ? "border-black" : "border-orange-500"}
        ${outline ? "text-black" : "text-white"}
        ${
          small
            ? "py-1 px-2 text-sm font-light border-[1px]"
            : "py-2 px-4 text-md font-semibold border-2"
        }
    `}
    >
      {Icon && (
        <Icon
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          size={24}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
