import MenuItem from "@/components/navbar/MenuItem";

// Define the type for each submenu item
interface SubmenuItem {
  label: string;
  href: string;
  scrollToId?: string;
}

// Define the type for each nested menu section
interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the type for the main menu item
interface MenuDataItem {
  label: string;
  href: string;
  scrollToId?: string;
  nestedMenu?: NestedMenu[]; // Optional because not all menu items have nested menus
}

// Correct menuData type to be an array of MenuDataItem

const menuData: MenuDataItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Interiors",
    href: "/interiors-faculty",
    nestedMenu: [
      {
        heading: "Interiors",
        submenu: [
          {
            label: "Living Room",
            href: "/interiors-faculty",
            scrollToId: "livingRoom",
          },
          {
            label: "Bed Room",
            href: "/interiors-faculty",
            scrollToId: "bedRoom",
          },
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          {
            label: "Kitchen Residences",
            href: "/interiors-faculty",
            scrollToId: "kitchinResidence",
          },
          {
            label: "Kitchen Commercial",
            href: "/interiors-faculty",
            scrollToId: "kitchinCommercial",
          },
          {
            label: "Store Room",
            href: "/interiors-faculty",
            scrollToId: "storeRoom",
          },
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          {
            label: "Corporate Office",
            href: "/interiors-faculty",
            scrollToId: "corporateOffice",
          },
          {
            label: "Office Reception",
            href: "/interiors-faculty",
            scrollToId: "officeReciption",
          },
          {
            label: "Supper Shop",
            href: "/interiors-faculty",
            scrollToId: "supperShop",
          },
        ],
      },
    ],
  },
  {
    label: "Construction",
    href: "/construction-faculty",
    nestedMenu: [
      {
        heading: "Construction",
        submenu: [
          {
            label: "Village House",
            href: "/construction-faculty",

            scrollToId: "villageHouse",
          },
          {
            label: "Simplex House",
            href: "/construction-faculty",
            scrollToId: "simplexHouse",
          },
          {
            label: "Duplex House",
            href: "/construction-faculty",
            scrollToId: "duplexHouse",
          },
        ],
      },
      {
        heading: "Construction",
        submenu: [
          {
            label: "Multi Storied House",
            href: "/construction-faculty",
            scrollToId: "multiStoriedHouse",
          },
          {
            label: "Resort",
            href: "/construction-faculty",
            scrollToId: "resort",
          },
          {
            label: "Hotel House",
            href: "/construction-faculty",
            scrollToId: "hotelHouse",
          },
        ],
      },
      {
        heading: "Construction",
        submenu: [
          {
            label: "Bulding  Ranovation",
            href: "/construction-faculty",
            scrollToId: "houseRanovation",
          },
          {
            label: "Boundary  Ranovation",
            href: "/construction-faculty",
            scrollToId: "boundaryRenovation",
          },
        ],
      },
    ],
  },

  { label: "FPL\u00A0Updates", href: "/others-faculty" },

  { label: "Why\u00A0FPL", href: "/why-fpl" },
  { label: "Portfolio", href: "/portfolio" },

  { label: "Gallery", href: "/gallery" },

  { label: "About\u00A0Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact\u00A0Us", href: "/contact-us" },
];
// Define the props for the MegaMenu component
interface MegaMenuProps {
  handleToggle?: (index: number) => void; // Optional function to handle toggle
  clicked?: number; // Index of the currently clicked item
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul className="lg:flex lg:items-center lg:leading-[50px]">
          {menuData.map(({ label, href, nestedMenu }, index) => {
            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                nestedMenu={nestedMenu}
                setIsDrawerOpen={setIsDrawerOpen}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
