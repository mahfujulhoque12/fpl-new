import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import pic1 from "/public/clients/1.png";
import pic2 from "/public/clients/2.png";
import pic3 from "/public/clients/3.png";
import pic4 from "/public/clients/4.png";
import pic5 from "/public/clients/5.png";
import pic6 from "/public/clients/6.png";
import pic7 from "/public/clients/7.png";
import pic8 from "/public/clients/8.png";
import pic9 from "/public/clients/9.png";
import pic10 from "/public/clients/10.png";
import pic11 from "/public/clients/11.png";
import pic12 from "/public/clients/12.png";
import pic13 from "/public/clients/13.png";

import Image from "next/image";

function WhyPartnerWithUs() {
  const clients = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
  ];
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <h2 className="text-4xl font-semibold text-center uppercase mb-5">
          Some Of Our clinets
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {clients.map((client, index) => (
            <Image
              src={client}
              key={index}
              width={400}
              height={300}
              alt="clinet"
              className="w-full p-4 bg-white rounded-md  shadow-md h-[200px]"
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default WhyPartnerWithUs;
