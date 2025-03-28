import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import DropdownContent from "./DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

// Define types for the component props
interface SubmenuItem {
  label: string;
  href: string;
}

interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

interface MenuItemProps {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional, as some items might not have a submenu
  onToggle?: () => void; // Optional, used for toggling dropdown
  active: boolean; // Whether the item is active or not
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional, to control the drawer state
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

  const pathname = usePathname(); // Get the current pathname

  // Corrected active check to prevent "Home" from always being active
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
  const handleClick = () => {
    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();
  };

  const handleLinkClick = async () => {
    setIsDrawerOpen?.(false);
    handleClick();
    router.push(href);
  };

  return (
    <li>
      <div className="nav_item_content relative flex w-full justify-between border-b border-[#cacaca] h-12 lg:border-none lg:h-auto">
        <button
          className={`${
            isActive ? " border-b-2 border-white font-semibold" : "text-white"
          } text-inherit text-white  w-full text-[14.5px] font-medium px-4 flex items-center lg:px-[0.7rem]`}
          onClick={handleLinkClick}
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
