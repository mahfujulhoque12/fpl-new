"use client";
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import logo5 from "/public/partner/work.png";

const WhyChoseUs: React.FC = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="w-full mt-8 flex items-center justify-center">
          <Image src={logo5} alt="img" width={1200} height={500} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChoseUs;
