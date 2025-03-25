import type { Metadata } from "next";
import { poppins } from "@/lib/font";
import "./globals.css";
import Footer from "@/components/section/Footer";
import ContactBtn from "@/components/ContactBtn";

export const metadata: Metadata = {
  title: "Your Fpl",
  description: "Your Fpl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {/* <Navigation /> */}

        <ContactBtn />
        {children}
        <Footer />
      </body>
    </html>
  );
}
