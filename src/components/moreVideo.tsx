"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";

// Define the video data type
type VideoData = {
  url: string;
  thumbnail: string;
  title: string;
  des: string;
};

const videoData: VideoData[] = [
  {
    url: "https://www.youtube.com/embed/ImjTCmZdKgU",
    thumbnail: "/thumb/thumb5.png",
    title: "Complete home interiors & style | Bangladesh",
    des: "Click the video and explore more about the interiors design",
  },
  {
    url: "https://www.youtube.com/embed/rnV3rvDHmT4",
    thumbnail: "/thumb/thumb6.png",
    title: "LUXURY Home Interior Design | Bangladesh",
    des: "Click the video and explore more about the interiors design",
  },
  {
    url: "https://www.youtube.com/embed/Jm5Zzi-sAvE",
    thumbnail: "/thumb/thumb7.png",
    title: "Duplex house with interiors design.",
    des: "Click the video and explore more about the interiors design",
  },
  {
    url: "https://www.youtube.com/embed/piPf-Qt2YVk",
    thumbnail: "/thumb/thumb8.png",
    title: "Contemporary level house with complete interiors designs",
    des: "Click the video and explore more about the interiors design",
  },
  {
    url: "https://www.youtube.com/embed/sfoIstZTdDI",
    thumbnail: "/thumb/thumb9.png",
    title: "আপনার ফ্ল্যাটে ইন্টেরিয়র ডিজাইন কেমন হওয়া দরকার",
    des: "Click the video and explore more about the interiors design",
  },
];

const MoreVideo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideoUrl(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-gray-700 uppercase font-bold text-center pb-10">
          Whats say our clients
        </SubHeading>
        <Carousel>
          <CarouselContent>
            {videoData.map(({ url, thumbnail, title, des }, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex"
                onClick={() => openModal(url)}
              >
                <div className="p-4 relative shadow-md z-10 border rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer">
                  <Image
                    src={thumbnail}
                    alt={`Video thumbnail ${index + 1}`}
                    width={700}
                    height={300}
                    className="rounded-md object-cover  h-[250px]"
                  />
                  <div className="absolute top-[45%] left-[45%] w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <FaPlay className="text-white" size={24} />
                  </div>
                  <h3 className="text-gray-600 py-1 text-lg font-semibold	">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm font-normal">{des}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {isModalOpen && activeVideoUrl && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <IoClose />
              </button>
              <iframe
                width="100%"
                height="400"
                className="rounded-md"
                src={activeVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default MoreVideo;
