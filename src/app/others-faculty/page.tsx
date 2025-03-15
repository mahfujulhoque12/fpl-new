import { Metadata } from "next";
import OthersPic from "@/components/othersPic";
import MoreReview from "@/components/moreReview";
import MoreVideo from "@/components/moreVideo";
import RecentProducts from "@/components/recentProducts";
import WorkHightlight from "@/components/workHightlight";

export const metadata: Metadata = {
  title: "Fpl Updates",
  description: "This is fpl updates page",
};
const page = () => {
  return (
    <div>
      <OthersPic />
      <MoreReview />
      <WorkHightlight />
      <MoreVideo />
      <RecentProducts />
    </div>
  );
};

export default page;
