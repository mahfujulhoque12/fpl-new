import AboutUs from "@/components/aboutUs";
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
      <AboutUs />
      <WhyClientChoseUs />
      <Team />
    </div>
  );
};

export default page;
