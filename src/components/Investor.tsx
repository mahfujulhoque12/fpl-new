import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import Image from "next/image";
import investor from "/public/investor/investor.png";

const Investor = () => {
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">
          <Image src={investor} alt="img" width={1000} height={400} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Investor;
