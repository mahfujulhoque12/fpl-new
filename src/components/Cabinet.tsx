import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

import tropy from "/public/tropy/trophy.png";

import Image from "next/image";

const Cabinet = () => {
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">
          <Image src={tropy} alt="tropy" width={1000} height={400} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cabinet;
