"use client";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

import SubHeading from "@/components/typography/SubHeading";
import { images } from "@/data/portfolioData";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  params: {
    slug: string;
  };
};

const PortfolioDetails: React.FC<ParamsProps> = ({ params }) => {
  const datas = images.find((img) => img.slug === params.slug);
  return <MaxWidthWrapper>
  <div className="">
    <SubHeading className="font-bold text-center uppercase my-10">
      Project Details
    </SubHeading>
    {/* Row 1: Images 1 and 2 */}
    <div className="flex flex-col sm:flex-row  gap-5 mt-10">
      {datas?.imgs.slice(0, 2).map((img, index) => (
        <Image
          key={index}
          src={img}
          width={500}
          height={400}
          alt={`img-${index}`}
          className="rounded-md shadow-md w-full max-h-[400px] border object-cover"
        />
      ))}
    </div>

    {/* Row 2: Image 3 */}
    <div className="w-full">
      {datas?.imgs.slice(2, 3).map((img, index) => (
        <Image
          key={index + 2}
          src={img}
          width={500}
          height={400}
          alt={`img-${index + 2}`}
          className="my-8 rounded-md shadow-md w-full  max-h-[600px] border object-cover"
        />
      ))}
    </div>

    {/* Row 3: Image 4 */}
    <div className="w-full">
      {datas?.imgs.slice(3, 4).map((img, index) => (
        <Image
          key={index + 3}
          src={img}
          width={500}
          height={400}
          alt={`img-${index + 3}`}
          className="rounded-md shadow-md w-full  max-h-[600px] border object-cover"
        />
      ))}
    </div>

    {/* Row 4: Images 5 and 6 */}
    <div className="flex flex-col sm:flex-row  gap-5 mt-5 mb-10">
      {datas?.imgs.slice(4, 6).map((img, index) => (
        <Image
          key={index + 4}
          src={img}
          width={500}
          height={400}
          alt={`img-${index + 4}`}
          className=" rounded-md shadow-md w-full object-cover border max-h-[400px]"
        />
      ))}
    </div>
  </div>
</MaxWidthWrapper>
};

export default PortfolioDetails;
