"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import mobileLogo from "/public/logo/fpl-logo.png";
import UserProfile from "./UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "@/components/navbar/MegaMenu";
import MobileNavigationDrawer from "@/components/navbar/MobileNavigationDrawer";
import Image from "next/image";
import { cn } from "@/lib/utilis";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom";
  isTransparent?: boolean;
  className?: string;
}

const NavigationTwo = ({
  mobileMenuPos = "left",
}: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const drawerButtonRef = useRef(null);

  // Effect to handle scroll and toggle background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set background to black when scrolled, transparent when at top
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        " top-0 z-50 transition-all duration-300   left-0 h-[90px]  w-full bg-black sticky" // Toggle background based on scroll
      )}
    >
      <div className="flex items-center justify-between h-[60px] px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            ref={drawerButtonRef}
            className="border-none h-[45px] w-[45px] bg-transparent text-white"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            <AlignJustify />
          </button>
          <Link href="/" className="md:hidden">
            <Image
              src={mobileLogo}
              alt="logo"
              width={500}
              height={500}
              className="h-[50px] w-[50px] object-contain"
            />
          </Link>
        </div>

        {/* Center: Main logo (visible on desktop only) */}
        <Link href="/" className="hidden md:block">
          <Image
            src={mobileLogo}
            alt="logo mbl"
            width={200}
            height={200}
            className="h-[70px] mt-6 w-[80px] object-cover "
          />
        </Link>

        {/* Right side: MegaMenu and UserProfile */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block mt-2">
            <MegaMenu />
          </div>
        </div>
        <div className="mt-1">
          <UserProfile />
        </div>
        {/* Mobile navigation drawer */}
        <div className="lg:hidden absolute">
          <MobileNavigationDrawer
            {...{
              isDrawerOpen,
              setIsDrawerOpen,
              drawerButtonRef,
              mobileMenuPos,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavigationTwo;
