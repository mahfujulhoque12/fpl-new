import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import whyFpl from "/public/whyFpl/whyFpl.png";

import Image from "next/image";

const WhyFpl = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          Why Choose FPL
        </SubHeading>
        <Image src={whyFpl} alt="why-fpl" width={1500} height={700} />
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyFpl;
