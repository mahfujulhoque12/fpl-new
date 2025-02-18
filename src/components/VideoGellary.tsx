"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";
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
    url: "https://www.youtube.com/embed/m55PTVUrlnA",
    thumbnail: "/familyV/family1.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/JblrN5oNse4",
    thumbnail: "/familyV/family2.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/bNnhr_bIR9c",
    thumbnail: "/familyV/family3.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/WlxcujsvcIY?start=839",
    thumbnail: "/familyV/family4.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/m55PTVUrlnA",
    thumbnail: "/familyV/family1.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/JblrN5oNse4",
    thumbnail: "/familyV/family2.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/bNnhr_bIR9c",
    thumbnail: "/familyV/family3.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/WlxcujsvcIY?start=839",
    thumbnail: "/familyV/family4.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/WlxcujsvcIY?start=839",
    thumbnail: "/familyV/family4.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/m55PTVUrlnA",
    thumbnail: "/familyV/family1.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/JblrN5oNse4",
    thumbnail: "/familyV/family2.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/bNnhr_bIR9c",
    thumbnail: "/familyV/family3.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
  {
    url: "https://www.youtube.com/embed/WlxcujsvcIY?start=839",
    thumbnail: "/familyV/family4.png",
    title: "Our Honorable client says",
    des: "Click the video and explore what our honorable client says",
  },
];

const VideoGallery: React.FC = () => {
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
          Video Gallery
        </SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videoData.map(({ url, thumbnail, title, des }, index) => (
            <div
              key={index}
              className="p-4 relative shadow-md z-10 border rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer"
              onClick={() => openModal(url)}
            >
              <Image
                src={thumbnail}
                alt={`Video thumbnail ${index + 1}`}
                width={700}
                height={300}
                className="rounded-md object-cover h-[250px] w-full"
              />
              <div className="absolute top-[45%] left-[45%] w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <FaPlay className="text-white" size={24} />
              </div>
              <h3 className="text-gray-600 py-1 text-lg font-semibold">
                {title}
              </h3>
              <p className="text-gray-600 text-sm font-normal">{des}</p>
            </div>
          ))}
        </div>

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

export default VideoGallery;
