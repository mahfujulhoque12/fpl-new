import WhyFpl from "@/components/whyFpl";
import WhyChoseUs from "@/components/whyChoseUs";
import WhyPartnerWithus from "@/components/whyPartnerWithus";
import Investor from "@/components/Investor";
import Cabinet from "@/components/Cabinet";
import { Metadata } from "next";
import NavigationTwo from "@/components/navbar/NavigationTwo";

export const metadata: Metadata = {
  title: "Why Fpl",
  description: "This is Why Fpl  page",
};
const page = () => {
  return (
    <div>
      <NavigationTwo />
      <WhyFpl />
      <Cabinet />
      <WhyChoseUs />
      <Investor />
      <WhyPartnerWithus />
    </div>
  );
};
export default page;
