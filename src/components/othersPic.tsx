"use client";
import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import other1 from "/public/others/others1.png";
import other2 from "/public/others/others2.png";
import other3 from "/public/others/others3.png";
import other4 from "/public/others/others4.png";
import Link from "next/link";

type CardData = {
  id: number;
  imageUrl: string;
  des: string;
};
const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: other1.src,
    des: "A masterpiece of modern architecture, where elegance meets functionality in every detail. Every corner is designed with precision to enhance both aesthetics and practicality. This home is a true reflection of contemporary luxury.",
  },
  {
    id: 2,
    imageUrl: other2.src,
    des: "Blending innovation with timeless design, this home redefines luxury living. The seamless integration of space and light creates a warm yet sophisticated atmosphere. Experience a perfect balance of style and comfort in every room.",
  },
  {
    id: 3,
    imageUrl: other3.src,
    des: "Designed to inspire, this architectural gem harmonizes nature and contemporary style. Large glass windows invite natural light, creating a bright and airy ambiance. Every space is thoughtfully crafted to complement both beauty and function.",
  },
  {
    id: 4,
    imageUrl: other4.src,
    des: "A seamless fusion of space, light, and sophistication for the perfect living experience. High ceilings and open layouts create an inviting atmosphere. This house is a modern sanctuary built for both relaxation and elegance",
  },
];

const OthersPic = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase mb-10">
          There are losts off sample here
        </SubHeading>
        <Carousel>
          <CarouselContent>
            {cardData?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link href="/cotesion">
                  <div className="border p-4 shadow-md  mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                    <Image
                      src={card.imageUrl as string}
                      width={700}
                      height={300}
                      alt="village"
                      className="rounded-md h-[200px] object-cover"
                    />
                    <p className="text-sm py-2">{card.des}</p>

                    <div className="flex  justify-start w-full"></div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default OthersPic;
