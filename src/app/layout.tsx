import type { Metadata } from "next";
import { poppins } from "@/lib/font";
import "./globals.css";

import Navigation from "@/components/navbar/Navigation";
import Footer from "@/components/section/Footer";

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
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
