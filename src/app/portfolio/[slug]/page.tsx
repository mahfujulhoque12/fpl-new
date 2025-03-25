import NavigationTwo from "@/components/navbar/NavigationTwo";
import PortfolioDetails from "@/components/portfolio/PortfolioDetails";
import { Metadata } from "next";
type ParamsProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Portfolio Details",
  description: "This portfolio Details page",
};

const page: React.FC<ParamsProps> = ({ params }) => {
  return (
    <div>
      <NavigationTwo />
      <PortfolioDetails params={params} />
    </div>
  );
};

export default page;
