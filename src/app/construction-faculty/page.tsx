import React from "react";
import VillageHouse from "../../components/villageHouse";
import SimplexHouse from "../../components/simplexHouse";
import DuplexHouse from "@/components/duplexHouse";
import MultiStoriedHouse from "@/components/multiStoriedHouse";
import Resort from "@/components/resort";
import HotelHouse from "@/components/hotelHouse";
import HouseRanovation from "@/components/houseRanovation";
import BoundaryRenovation from "@/components/boundaryRenovation";
import { Metadata } from "next";
import NavigationTwo from "@/components/navbar/NavigationTwo";

export const metadata: Metadata = {
  title: "Construction Faculty",
  description: "This is construction faculty page",
};

const page = () => {
  return (
    <div>
      <NavigationTwo />
      <VillageHouse />
      <SimplexHouse />
      <DuplexHouse />
      <MultiStoriedHouse />
      <Resort />
      <HotelHouse />
      <HouseRanovation />
      <BoundaryRenovation />
    </div>
  );
};

export default page;
