import BlogContent from "@/components/blogContent";
import NavigationTwo from "@/components/navbar/NavigationTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fpl Blogs ",
  description: "This is blogs page",
};

const page = () => {
  return (
    <div>
      <NavigationTwo />
      <BlogContent />
    </div>
  );
};

export default page;
