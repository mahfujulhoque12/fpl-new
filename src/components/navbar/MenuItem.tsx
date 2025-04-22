"use client";

import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import DropdownContent from "./DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

interface SubmenuItem {
  label: string;
  href: string;
  scrollToId?: string;
}

interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

interface MenuItemProps {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[];
  onToggle?: () => void;
  active: boolean;
  setIsDrawerOpen?: (isOpen: boolean) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  nestedMenu,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isScrolling = useRef(false);

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      isScrolling.current = true;
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    } else {
      setTimeout(() => scrollToSection(id), 200);
    }
  };

  const handleClick = async (href: string, scrollToId?: string) => {
    setIsDrawerOpen?.(false);

    const currentPath = pathname;
    const targetPath = href;

    const waitForScrollTargetAndScroll = (id: string, attempt = 0) => {
      if (attempt > 10) return;

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `${targetPath}#${id}`);
      } else {
        setTimeout(() => waitForScrollTargetAndScroll(id, attempt + 1), 200);
      }
    };

    if (currentPath === targetPath) {
      if (scrollToId) {
        scrollToSection(scrollToId);
        window.history.replaceState(null, "", `${targetPath}#${scrollToId}`);
      }
    } else {
      if (scrollToId) {
        await router.push(targetPath);
        waitForScrollTargetAndScroll(scrollToId);
      } else {
        await router.push(targetPath);
      }
    }
  };

  return (
    <li>
      <div className="nav_item_content relative flex w-full justify-between border-b border-[#cacaca] h-12 lg:border-none lg:h-auto">
        <button
          className={`${
            isActive ? " border-b-2 border-white font-semibold" : "text-white"
          } text-inherit text-white w-full text-[14.5px] font-medium px-4 flex items-center lg:px-[0.7rem]`}
          onClick={() => handleClick(href)}
        >
          {label}
        </button>

        {nestedMenu && (
          <button
            className="px-3 border-none bg-white flex items-center lg:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
          >
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>

      {nestedMenu && (
        <div
          role="menu"
          className={`dropdown bg-black lg:absolute lg:left-0 lg:top-[60px] lg:w-full lg:border-b lg:border-[#cacaca)] lg:rounded-b-[16px] lg:pt-8 lg:pb-8 lg:invisible lg:z-10 ${
            active ? "h-auto" : "h-0 overflow-hidden lg:h-auto"
          }`}
        >
          <MaxWidthWrapper>
            <DropdownContent
              submenuscontent={nestedMenu}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </MaxWidthWrapper>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
