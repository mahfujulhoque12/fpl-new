"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { cardData } from "@/data/livingRoomData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";

const KitchenResidences = () => {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  const handleMoreDetails = async (slug: string) => {
    setLoadingSlug(slug);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(`/cotesion`);
    setLoadingSlug(null);
  };

  const kitchenCard = cardData.filter((card) => card.id >= 13 && card.id <= 18);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          Kitchen Residences
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[80%] flex mx-auto">
          Kitchen Residences is a modern and functional space where culinary
          creativity meets comfort, designed to serve as the heart of the home
          for cooking, dining, and family gatherings.
        </Paragraph>
        <Carousel>
          <CarouselContent>
            {kitchenCard?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="border h-full p-3 shadow-md mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[250px]"
                  />
                  <h3 className=" text-base text-gray-600 font-bold mt-3">
                    {card.title}
                  </h3>
                  <p className=" py-2 text-sm">{card.des}</p>

                  <div className="flex  justify-start w-full">
                    <button
                      type="button"
                      className=" gap-2 text-center  flex  bg-black px-4 py-1 text-white rounded-md  hover:bg-gray-700 transition-all text-sm duration-150"
                      onClick={() => handleMoreDetails(card.slug)}
                      disabled={loadingSlug === card.slug}
                    >
                      {loadingSlug === card.slug ? (
                        <div className="flex items-center">
                          <span className="loader mr-2" />
                          Loading...
                        </div>
                      ) : (
                        "Get Quote"
                      )}
                    </button>
                  </div>
                </div>
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

export default KitchenResidences;
