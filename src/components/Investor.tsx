import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

import Neumerical from "./why-fpl/Neumerical";

const Investor = () => {
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <Neumerical />
      </MaxWidthWrapper>
    </section>
  );
};

export default Investor;
