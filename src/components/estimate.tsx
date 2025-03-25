"use client";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { useState, useEffect } from "react";
import Image from "next/image";
import es1 from "/public/estimate/Dinning 2.png";
import es2 from "/public/estimate/Entry 6.png";
import es3 from "/public/estimate/fur.png";
import { motion, useAnimation } from "framer-motion";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

type CardData = {
  id: number;
  title: string;
  des: string;
  imageUrl: string;
  href: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Interiors Faculty",
    des: "Our Interiors Faculty section showcases innovative and functional interior designs, blending aesthetics with practicality. We provide expert insights, design inspirations, and modern trends to transform spaces into stylish and comfortable environments. Explore our curated collection to bring your vision to life.",
    imageUrl: es1.src,
    href: "/interiors-faculty",
  },
  {
    id: 2,
    title: "Construction Faculty",
    des: "Our Construction Faculty section focuses on innovative building techniques, structural excellence, and sustainable construction practices. We provide expert insights, project showcases, and the latest industry trends to ensure durable and efficient structures. Explore our resources to build with confidence and precision.",
    imageUrl: es2.src,
    href: "/construction-faculty",
  },
  {
    id: 3,
    title: "Furniture Faculty",
    des: "Our Furniture Faculty section highlights stylish, functional, and innovative furniture designs that enhance any space. We provide expert insights, trend updates, and design inspirations to help you choose the perfect pieces for comfort and aesthetics. Discover timeless and modern furniture solutions tailored to your needs.",
    imageUrl: es3.src,
    href: "/interiors-faculty",
  },
];

const Estimate: React.FC = () => {
  const words = [
    "Interiors Faculty",
    "Construction Faculty",
    "Furniture Faculty",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [controls, words.length]);

  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<number | null>(null);

  const handleMoreDetails = async (id: number, href: string) => {
    setLoadingSlug(id);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(href);
    setLoadingSlug(null);
  };

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center font-bold uppercase py-3 text-gray-700">
          Get the estimate for your{" "}
          <motion.span
            animate={controls}
            className="inline-block text-gray-900"
          >
            {words[currentIndex]}
          </motion.span>
        </SubHeading>
        <Paragraph className="text-center pb-3 text-gray-500">
          Calculate the approximate cost of doing up your home interiors
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="  p-4 rounded-lg border shadow-md hover:scale-[102%] transform translate duration-500"
            >
              <div>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="h-[250px] rounded-md"
                />
              </div>
              <h3 className="text-xl md:text-2xl mt-1 font-semibold text-gray-700">
                {card.title}
              </h3>
              <p className="text-base md:mb-0 py-1">{card.des}</p>
              <div className="flex justify-start w-full">
                <button
                  type="button"
                  onClick={() => handleMoreDetails(card.id, card.href)}
                  disabled={loadingSlug === card.id}
                  className="gap-2 text-center flex bg-black px-4 py-1 text-white rounded-md hover:bg-gray-600 transition-all text-sm duration-150"
                >
                  {loadingSlug === card.id ? (
                    <div className="flex items-center">
                      <span className="loader mr-2" />
                      Loading...
                    </div>
                  ) : (
                    "More Details"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Estimate;
