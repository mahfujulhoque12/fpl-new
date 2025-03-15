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
      <Portfolio />
    </div>
  );
};

export default page;
