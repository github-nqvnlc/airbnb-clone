"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IconType } from "react-icons/lib";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = React.useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2 
        p-3 
        border-b-2 
        hover:text-neutral-800 
        transition
        cursor-pointer
        ${
          selected
            ? "border-b-orange-500 text-neutral-800"
            : "border-transparent text-neutral-500"
        }
    `}
    >
      <Icon size={26} />
      <div className="text-sm font-semibold">{label}</div>
    </div>
  );
};

export default CategoryBox;
