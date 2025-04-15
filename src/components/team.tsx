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

import man12 from "/public/team/Afnan.jpg";
import man13 from "/public/team/Ms Rubaya Sultana Piya.jpg";
import man14 from "/public/team/nadia.png";
import { GoDotFill } from "react-icons/go";

type CardData = {
  id: number;
  imageUrl: string;
  name?: string;
  title?: string;
  subTitle?: string;
};
const cardDataOne: CardData[] = [
  {
    id: 1,
    imageUrl: man1.src,
    name: "Md  Mainul Islam",
    title: "Managing Director",
    subTitle:
      "Mainul Islam has recently been appointed as Managing Director of Floor Planner Ltd (FPL). He is also one of the founder member of this company. Prior to joining FPL, He has served with several renowned organizations in the countery in various key positions of category & supply chain management like OTOBI Ltd, bti, unilliance Group and P2P engineering & constructions Ltd. He was accorded with the ' Executive of Innovation' for his enormous ingenious contribution in those organizations. During his fifteen year career, he was a devoted soul mate of the institutions having vast experience in the relavent field of procuring, budgeting, cost analysis, market exploration, strategic business planning and execution , its procedure as well as he is recognized as ' Material Master'. He is an ardent promoter of the concept of material invention. He has completed Master of Business Administration (MBA) & Master of Arts (M.A) in Bengali. He is writing enthusiastic & published in several daily & weekly journals. He has attended various training courses & workshops in the field of marketing tactics. He has travelled to India and Nepal in connection with the business. He was born in a noble Muslim family. He has a happy family with his wife, a lovely daughter & son.",
  },
  {
    id: 2,
    imageUrl: man2.src,
    name: "Muhummad Shajed Alam Mujumder",
    title: "Director",
    subTitle:
      "Muhammad Shajed Alam Mazumder, a true visionary and a driving force in the corporate world, has ascended to the position of Director at Floor Planner Ltd. (FPL), a company he co-founded. With a remarkable career spanning eighteen years, he has consistently excelled in leading sales and customer relationship management roles across renowned organizations in the country. His illustrious journey includes significant contributions to STUDIO45, partex group, Sanmar properties Ltd, P2P Engineering & Construction Ltd, and bti. In the dynamic landscape of business, he has left an indelible mark, having served both local, and multinational giants such as NOVARTIS Bangladesh, Warid Telecom, Envoy Group, The Daily Prothom Alo, UCBL, Brac Bank, ROBI, Bangla Link, ACI Godrej, Independent University, BRAC University, ICDDRB, SMC, and many more. His expertise and passion for marketing shine through with an MBA in Marketing from the esteemed University of ASA. Beyond borders, Shajed`s quest for excellence has taken him to India and Nepal in connection with his business endeavors. Hailing from a noble Muslim family, he embodies values that drive success with integrity. His happiness knows no bounds with a loving family by his side- a cherished wife, a delightful daughter, and a promising son. He is synonymous with dedication, innovation, and success in the business world.",
  },
  {
    id: 3,
    imageUrl: man3.src,
    name: "Md Mozammel Hoque",
    title: "Executive Director",
    subTitle:
      "Md. Mozammel Haque. Born in a Muslim noble family in Shariatpur district. His father was a teacher. He joined the world-renowned furniture company OTOBI Limited as his first job and worked in various departments at OTOBI for 10 years. He got the opportunity to work with Nitun Kundu, the father of office furniture for a long time. After working at OTOBI, he joined Navana Furniture Limited, a well-established group in Bangladesh, as a founding member. After working for 5 years, he worked with furniture materials. And consulted some established furniture companies in Bangladesh. Later, he set up a business called Liveart Plus. He started importing furniture-related products from abroad. He started establishing connections by importing furniture parts and furniture hardware and started supplying to various big furniture companies in Bangladesh. Which is still going on. Mr. Mozammel Haque joined Floor Planner Limited as an Executive Director in September 2023.  He has traveled to various countries including India, China, Malaysia, Singapore, Dubai, Sri Lanka, Saudi Arabia for business. He is particularly experienced in furniture materials. He has worked as the head of procurement department in various furniture companies for a long time.He has passed B.A. from Tejgaon College, Dhaka. He has participated in various meetings and seminars on furniture materials.In his personal life, he is the father of 3 children.",
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

                    {card.subTitle && (
                      <div className="text-xs text-gray-300 font-normal overflow-y-auto pr-2 h-[200px] scroll-thin scroll-thumb-gray-400 scroll-track-gray-700">
                        {card.subTitle}
                      </div>
                    )}
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
