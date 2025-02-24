"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import mobileLogo from "/public/footer/footer1.png";
import UserProfile from "./UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "@/components/navbar/MegaMenu";
import MobileNavigationDrawer from "@/components/navbar/MobileNavigationDrawer";
import Image from "next/image";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom";
}

const Navigation = ({ mobileMenuPos = "left" }: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerButtonRef = useRef(null);

  return (
    <header className="sticky top-0 left-0 z-50 h-[80px] bg-white border-b border-[#cacaca]">
      <div className="flex items-center justify-between h-[60px] px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <button
            ref={drawerButtonRef}
            className="border-none h-[45px] w-[45px] bg-transparent"
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
            className="h-[70px] mt-4 w-[80px] object-cover "
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
        <div className="xl:hidden absolute">
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

export default Navigation;
