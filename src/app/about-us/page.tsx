import AboutUs from "@/components/aboutUs";
import NavigationTwo from "@/components/navbar/NavigationTwo";
import Team from "@/components/team";
import WhyClientChoseUs from "@/components/whyClientChoseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About us page",
};

const page = () => {
  return (
    <div>
      <NavigationTwo />
      <AboutUs />
      <WhyClientChoseUs />
      <Team />
    </div>
  );
};

export default page;
