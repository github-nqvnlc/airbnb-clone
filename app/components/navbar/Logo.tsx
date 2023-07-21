"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="150"
      width="150"
      src="/images/logo100.png"
    />
  );
};

export default Logo;
