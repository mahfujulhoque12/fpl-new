import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";

import man1 from "/public/team/Managing Director.jpg";
import man2 from "/public/team/director.jpg";
import man3 from "/public/team/pic3.jpg";
import man4 from "/public/team/pic4.jpg";
import man5 from "/public/team/pic5.jpg";
import man6 from "/public/team/Forhad.jpg";
import man7 from "/public/team/Md. Sohorab Hossen.jpg";
import man8 from "/public/team/Arch. Roksana.jpg";
import man9 from "/public/team/Md Rafiq.jpg";
import man10 from "/public/team/Hafij.jpg";
import man11 from "/public/team/Nazmul Hassan.jpg";
import man12 from "/public/team/Afnan.jpg";
import man13 from "/public/team/Ms Rubaya Sultana Piya.jpg";
import man14 from "/public/team/nadia.png";
import { GoDotFill } from "react-icons/go";

type CardData = {
  id: number;
  imageUrl: string;
  name?: string;
  title?: string;
};
const cardDataOne: CardData[] = [
  {
    id: 1,
    imageUrl: man1.src,
    name: "Md  Mainul Islam",
    title: "Managing Director",
  },
  {
    id: 2,
    imageUrl: man2.src,
    name: "Muhummad Shajed Alam Mujumder",
    title: "Director",
  },
  {
    id: 3,
    imageUrl: man3.src,
    name: "Md Mozammel Hoque",
    title: "Executive Director",
  },
];

const cardDataTwo: CardData[] = [
  {
    id: 9,
    imageUrl: man9.src,
    name: "Md Rafiq Islam",
    title: " Senior Manager, HR & Admin",
  },
];
const cardDataThree: CardData[] = [
  {
    id: 13,
    imageUrl: man13.src,
    name: "Ms Rubaya Sultana Piya",
    title: "Assistant Manager, Accounts",
  },
];
const cardDataFour: CardData[] = [
  {
    id: 4,
    imageUrl: man4.src,
    name: "Md Akram Hossain",
    title: "Assistant General Manager",
  },
  {
    id: 5,
    imageUrl: man5.src,
    name: "Tareq Rahman Bhuiyan",
    title: "Assistant Manager",
  },
  {
    id: 6,
    imageUrl: man6.src,
    name: "Saiful Islam Forhad",
    title: "Project Engineer",
  },

  {
    id: 10,
    imageUrl: man10.src,
    name: "Md Hafizul Islam",
    title: "site supervisor",
  },
];
const cardDataFive: CardData[] = [
  {
    id: 8,
    imageUrl: man8.src,
    name: "Ms Roksana Sultana",
    title: "Architect",
  },

  {
    id: 12,
    imageUrl: man12.src,
    name: "Afnan Abdul Hannan",
    title: "Associate Architect",
  },
];
const cardDataSix: CardData[] = [
  {
    id: 7,
    imageUrl: man7.src,
    name: "Md. Sohorab Hossen",
    title: "Senior Manager, sales",
  },

  {
    id: 11,
    imageUrl: man11.src,
    name: "Md Nazmul Hassan",
    title: "Sr. Executive, sales & marketing ",
  },

  {
    id: 14,
    imageUrl: man14.src,
    name: "Nadia Hasan",
    title: "Sr. Executive,CRM",
  },
];

const Team = () => {
  return (
    <section className="py-15 md:py-10">
      <MaxWidthWrapper>
        <div>
          <SubHeading className="text-center font-bold text-gray-700 uppercase">
            Our Team
          </SubHeading>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            Management Team
          </h2>

          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataOne?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-1"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sec part */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            HR Admin
          </h2>
          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataTwo?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* third part */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            Accounts Department
          </h2>
          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataThree?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* fourth part */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            PMI (Project Management & Implementation) Dept:
          </h2>

          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataFour?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* fifth part */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            Design Team
          </h2>
          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataFive?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* sixth part */}
        <div>
          <h2 className="text-2xl font-semibold text-black mt-5 text-center">
            Sales & Marketing
          </h2>

          <div className="my-5 gap-5 flex justify-center items-center">
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
            <GoDotFill size={20} color="gray-800" />
            <p className="bg-gray-600 max-w-[350px] h-[1px] block w-full"></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8">
            {cardDataSix?.map((card) => (
              <div
                className="relative overflow-hidden shadow-md group cursor-pointer"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-full h-[300px] transition-all duration-300 group-hover:opacity-40 rounded-md object-contain p-3"
                />
                <div className="absolute inset-x-0 bottom-0 h-0 bg-black group-hover:h-full transition-all duration-300 flex items-center justify-center px-5">
                  <span className="text-cyan-400 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-center font-semibold py-1 text-lg text-white">
                      {card.name}
                    </h4>
                    <h4 className="text-center py-1 text-normal text-white">
                      {card.title}
                    </h4>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Team;
