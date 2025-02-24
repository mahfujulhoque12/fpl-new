import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import clients from "/public/whyFpl/clients.png";
import Image from "next/image";

function WhyPartnerWithUs() {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div>
          <Image
            src={clients}
            alt="clients"
            width={1200}
            height={500}
            className="flex mx-auto"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default WhyPartnerWithUs;
