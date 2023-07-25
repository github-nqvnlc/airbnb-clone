"use client";

import React from "react";
import Avatar from "../Avatar";

interface MenuItemsProps {
  onClick?: () => void;
  label: string;
  classNames?: string;
  userAvatar?: string | null;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  onClick,
  label,
  classNames,
  userAvatar,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
        ${classNames}
    `}
    >
      <div>{label}</div>
      {userAvatar && (
        <div className="md:hidden">
          <Avatar src={`${userAvatar}`} />
        </div>
      )}
    </div>
  );
};

export default MenuItems;
