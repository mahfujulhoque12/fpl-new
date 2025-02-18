import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import clients from "/public/whyFpl/clents.png";
import Image from "next/image";

function WhyPartnerWithUs() {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div>
          <Image src={clients} alt="clients" width={1500} height={700} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default WhyPartnerWithUs;
