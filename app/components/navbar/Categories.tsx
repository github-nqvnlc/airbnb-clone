"use client";

import React from "react";
import Container from "../Container";

import { TbBeach, TbMountain, TbPool, TbTrekking } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiCampingTent,
  GiIsland,
  GiWindmill,
  GiFarmer,
  GiShoonerSailboat,
} from "react-icons/gi";
import { RiAncientGateLine } from "react-icons/ri";
import { BiHomeCircle, BiSolidDog, BiChurch } from "react-icons/bi";
import { FaPersonSkiing } from "react-icons/fa6";
import { BsSnow } from "react-icons/Bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdOutlineForest } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Home Stay",
    icon: BiHomeCircle,
    description: "This property is home stay!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Temple",
    icon: RiAncientGateLine,
    description: "This property is near a temple!",
  },
  {
    label: "Dog Friendly",
    icon: BiSolidDog,
    description: "This property is has dog friendly!",
  },
  {
    label: "Trekking",
    icon: TbTrekking,
    description: "This property is close to trekking place!",
  },
  {
    label: "Church",
    icon: BiChurch,
    description: "This property is near a church!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaPersonSkiing,
    description: "This property has skiing activities!",
  },
  {
    label: "Farm",
    icon: GiFarmer,
    description: "This property is near a farm!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Yacht",
    icon: GiShoonerSailboat,
    description: "This property is an Yacht!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiCampingTent,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
        {categories.map((items, index) => (
          <CategoryBox
            key={items.label}
            label={items.label}
            selected={category === items.label}
            icon={items.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
