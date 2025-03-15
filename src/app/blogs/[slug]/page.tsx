import BlogDetails from "@/components/blog/BlogDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "This is Blog details page",
};

type ParamsProps = {
  params: {
    slug: string;
  };
};

const Page: React.FC<ParamsProps> = ({ params }) => {
  return (
    <div>
      <BlogDetails params={params} />
    </div>
  );
};

export default Page;
