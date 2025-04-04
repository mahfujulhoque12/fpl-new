import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import logo from "/public/logo/fpl-logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-[#000000] text-black footer_">
      <div className="py-16">
        <MaxWidthWrapper>
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt=""
                  width={250}
                  height={100}
                  className="h-[90px] w-[90px]"
                />
              </Link>
              <p className="text-sm font-normal text-gray-300 mt-2">
                FPL is the latest endeavour by bti. We provide a comprehensive
                solution for both residential and commercial spaces and have
                four decades of expertise in delivering design and construction
                services.
              </p>
              <h5 className="mb-3 text-base text-gray-100 font-bold mt-5">
                {" "}
                Follow Us{" "}
              </h5>
              <div className="flex gap-3">
                <Link href="#">
                  <FaSquareFacebook size={25} className="text-gray-100" />
                </Link>
                <Link href="#">
                  <FaTwitterSquare size={25} className="text-gray-100" />
                </Link>
                <Link href="#">
                  <FaLinkedin size={25} className="text-gray-100" />
                </Link>
                <Link href="#">
                  <FaYoutubeSquare size={25} className="text-gray-100" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h5 className="mb-3 text-lg font-bold text-gray-100 ">
                {" "}
                About Us{" "}
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-us" className="text-normal text-gray-100">
                    Designing timeless spaces
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-normal text-gray-100">
                    Innovative architectural solutions
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-normal text-gray-100">
                    Building your vision
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-normal text-gray-100">
                    Crafting sustainable designs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <h5 className="mb-3 text-lg font-bold text-gray-100">Policy</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-normal text-gray-100"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-condition"
                    className="text-normal text-gray-100"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-normal text-gray-100"
                  >
                    {" "}
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return-policy"
                    className="text-normal text-gray-100"
                  >
                    {" "}
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <h5 className="mb-3 text-lg font-bold text-gray-100">
                Contact Us
              </h5>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center text-gray-100 ">
                  <FaSquarePhone size={25} className="text-normal" />{" "}
                  01896-088860
                </li>
                <li className="flex gap-2 items-center text-gray-100 text-normal">
                  <MdEmail size={25} className="text-gray-100" />
                  info.yourfpl@gmail.com
                </li>
                <li className="flex  gap-2 items-start text-normal text-gray-100">
                  <FaLocationDot size={30} className="text-gray-100" />
                  House # Ma-33/C/1, Basic Lake View (3rd Floor) <br />{" "}
                  Hatirjheel Badda Lake View Road <br /> Dhaka-1212, Bangladesh
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div className="bg-[#1d1c1c] text-white py-5">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <div>
              <p className="mb-0">
                &copy; {new Date().getFullYear()} yourfpl.com All Rights
                Reserved
              </p>
            </div>
            <div>
              <p className="mb-0">
                <Link href="/terms-and-condition">Terms of Service</Link> |{" "}
                <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
                <Link href="/cookie">Cookie Policy</Link>
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
