import BlogContent from "@/components/blogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fpl Blogs ",
  description: "This is blogs page",
};

const page = () => {
  return (
    <div>
      <BlogContent />
    </div>
  );
};

export default page;
