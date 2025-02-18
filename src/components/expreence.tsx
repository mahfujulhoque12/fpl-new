import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Banner from "/public/review/Picture3.png";
import Link from "next/link";

const Experience: React.FC = () => {
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div className="w-full">
          <div>
            <Link href="/contact-us">
              <Image
                src={Banner}
                alt="Banner-Img"
                layout="responsive"
                width={1200}
                height={800}
                className="max-w-[1400px] max-h-[500px] object-cover"
              />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
