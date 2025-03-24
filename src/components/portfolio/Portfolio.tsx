"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import SubHeading from "../typography/SubHeading";
import { useRouter } from "next/navigation";
import { images } from "@/data/portfolioData";
import Image from "next/image";

const Portfolio = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");

  const handleMoreImage = (slug: string) => {
    router.push(`/portfolio/${slug}`);
  };

  const filteredImage = images.filter((img) =>
    activeFilter === "all" ? true : img.type === activeFilter
  );

  return (
    <MaxWidthWrapper>
      <div className="my-16">
        <SubHeading className="font-bold text-center uppercase">
          Our Portfolio
        </SubHeading>

        <div className="flex items-center justify-center gap-4 my-6">
          {["all", "interior", "construction"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-md ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors duration-200`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {filteredImage.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden  shadow-md group cursor-pointer"
            >
              <button
                className="w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-md border"
                onClick={() => handleMoreImage(img.slug)}
              >
                <Image
                  src={img.img}
                  width={500}
                  height={400}
                  alt="img"
                  className="w-full h-[300px] object-cover transition-all duration-300 group-hover:opacity-40 rounded-md "
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-all duration-300 flex items-center justify-center">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                   {img.project}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Portfolio;
