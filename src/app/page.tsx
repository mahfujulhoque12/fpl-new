import React from "react";
import ShopCard from "@/components/shopCard";
import ProductsVideo from "@/components/productsVideo";
import Estimate from "@/components/estimate";
import InteriorDesigns from "@/components/interiorDesigns";
import Expreence from "@/components/expreence";
import Review from "@/components/review";
import GlimpseHomes from "@/components/glimpseHomes";

import HeroSlider from "@/components/section/HeroSlider";
import FaqAccordion from "@/components/faq/FaqAccordion";
import CallToAction from "@/components/CallToAction";
import InteriorHome from "@/components/interiorHome";
import Navigation from "@/components/navbar/Navigation";

export default function Home() {
  return (
    <>
      <main className="rlative">
        <Navigation />
        <HeroSlider />
        <Estimate />
        <InteriorDesigns />
        <ShopCard />
        <ProductsVideo />
        <Expreence />
        <Review />
        <InteriorHome />
        <GlimpseHomes />
        <FaqAccordion />
        <CallToAction />
      </main>
    </>
  );
}
