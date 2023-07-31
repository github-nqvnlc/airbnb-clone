"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import React, { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = React.useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, currentUser, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            lg:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
        "
        >
          Booking Star your home
        </div>
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-2
                md:px-4
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "
        >
          <AiOutlineMenu />
          {currentUser ? (
            <div className="hidden md:flex md:justify-center md:items-center md:gap-4">
              <div className="hidden lg:block">{currentUser?.name}</div>
              <Avatar src={currentUser?.image} />
            </div>
          ) : (
            <div className="hidden md:block px-3">Menu</div>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[50vw]
            lg:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItems
                  classNames="flex flex-row items-center justify-between text-lg text-neutral-500 border-b lg:hidden"
                  userAvatar={currentUser?.image}
                  label={`${currentUser?.name}`}
                />
                <MenuItems
                  onClick={() => router.push("/trips")}
                  label="My Trips"
                />
                <MenuItems onClick={() => {}} label="My Favorites" />
                <MenuItems
                  onClick={() => router.push("/reservations")}
                  label="My Reservations"
                />
                <MenuItems onClick={() => {}} label="My Properties" />
                <MenuItems
                  onClick={rentModal.onOpen}
                  label="Booking Star My Home"
                />
                <hr />
                <MenuItems onClick={() => {}} label="Setting" />
                <MenuItems
                  onClick={() => {
                    signOut();
                    toggleOpen;
                  }}
                  label="Log out"
                />
              </>
            ) : (
              <>
                <MenuItems onClick={loginModal.onOpen} label="Login" />
                <MenuItems onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
