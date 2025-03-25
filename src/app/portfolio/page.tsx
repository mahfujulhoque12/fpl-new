import NavigationTwo from "@/components/navbar/NavigationTwo";
import Portfolio from "@/components/portfolio/Portfolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is portfolio page",
};

const page = () => {
  return (
    <div>
      <NavigationTwo />
      <Portfolio />
    </div>
  );
};

export default page;
