import NavigationTwo from "@/components/navbar/NavigationTwo";
import VideoGellary from "@/components/VideoGellary";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fpl Gallery ",
  description: "This is Fpl Gallery page",
};
const page = () => {
  return (
    <div>
      <NavigationTwo />
      <VideoGellary />
    </div>
  );
};

export default page;
