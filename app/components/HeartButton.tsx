"use client";

import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const hasFavorited = true;
  const toggleFavorite = () => {};
  return (
    <div
      onClick={toggleFavorite}
      className="
        relative
        hover:cursor-pointer
        hover:opacity-80
        transition
    "
    >
      <AiOutlineHeart
        size={24}
        className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
        "
      />

      <AiFillHeart
        size={20}
        className={hasFavorited ? "fill-orange-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
