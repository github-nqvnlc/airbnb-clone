import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request, res: Response) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.next();
  }

  const body = await req.json();
  const {
    title,
    description,
    imageSrc,
    price,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listings = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      price: parseInt(price, 10),
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listings);
}
