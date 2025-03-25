import about1 from "/public/about/about.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section>
      <div className="">
        <div className=""></div>

        <div className="w-full h-auto  ">
          <Image
            src={about1.src}
            width={1500}
            height={600}
            alt="img"
            className="w-full h-[450px] object-cover"
            quality={100}
          />
          <div className="p-6  border rounded-md shadow-md  bg-white w-[90%]  flex mx-auto flex-col justify-center items-center mt-8">
            <h3 className="text-2xl text-center md:text-start font-bold text-gray-600">
              About Us
            </h3>

            <p className="text-normal text-gray-500 mt-3">
              We provide a comprehensive solution for both residential and
              commercial spaces and have expertise in delivering design and
              construction services. Our team is experts in construction,
              architecture, interior, design, landscaping, and logistic
              services. We provide an integrated and cohesive approach to
              designing magnificent projects in context with the environment.
            </p>
            <div className="flex  justify-center mt-4 w-full">
              <Link
                href="/cotesion"
                className=" gap-2 text-center  flex  bg-black px-4 py-1 mt-2 text-white rounded-md hover:bg-[#221a1a] transition-all text-sm duration-150"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
