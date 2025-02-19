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

type CardData = {
  id: number;
  imageUrl: string;
  name?: string;
  title?: string;
};
const cardData: CardData[] = [
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
    title: "Assistan Manager",
  },
  {
    id: 6,
    imageUrl: man6.src,
    name: "Saiful Islam Forhad",
    title: "Project Engineer",
  },
  {
    id: 7,
    imageUrl: man7.src,
    name: "Md. Sohorab Hossen",
    title: "Senior Manager, sales",
  },
  {
    id: 8,
    imageUrl: man8.src,
    name: "Ms Roksana Sultana",
    title: "Architect",
  },
  {
    id: 9,
    imageUrl: man9.src,
    name: "Md Rafiq Islam",
    title: "Project Engineer",
  },
  {
    id: 10,
    imageUrl: man10.src,
    name: "Md Hafizul Islam",
    title: "site supervisor",
  },
  {
    id: 11,
    imageUrl: man11.src,
    name: "Md Nazmul Hassan",
    title: "Sr. Exclusive, sales & marketing ",
  },
  {
    id: 12,
    imageUrl: man12.src,
    name: "Afnan Abdul Hannan",
    title: "Associate Architect",
  },
  {
    id: 13,
    imageUrl: man13.src,
    name: "Ms Rubaya Sultana Piya.jpg",
    title: "Assistant Manager, Accounts",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 ">
            {cardData?.map((card) => (
              <div
                className="border rounded-lg shadow-md p-4 hover:scale-[101%] transition-all duration-300"
                key={card.id}
              >
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={200}
                  height={200}
                  className=" rounded-md w-full h-[200px] object-contain"
                />
                <h4 className="text-center font-semibold py-1 text-lg text-gray-600">
                  {card.name}
                </h4>
                <h4 className="text-center py-1 text-normal text-gray-500">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Team;
