import ContactUs from "@/components/contactUs";
import ContactForm from "@/components/contactForm";
import Subscribe from "@/components/subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is Contact  Us page",
};

const page = () => {
  return (
    <div>
      <ContactUs />
      <ContactForm />
      <Subscribe />
    </div>
  );
};

export default page;
