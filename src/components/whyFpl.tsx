import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import whyFpl from "/public/whyFpl/whyFpl.png";

import Image from "next/image";

const WhyFpl = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <Image src={whyFpl} alt="why-fpl" width={1500} height={700} />
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyFpl;
