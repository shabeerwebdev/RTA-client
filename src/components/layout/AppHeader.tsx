import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import {
  HiBell,
  HiCog,
  HiCurrencyDollar,
  HiLogout,
  HiMenuAlt1,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

interface AppHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function AppHeader({ toggleSidebar }: AppHeaderProps) {
  return (
    <Navbar
      fluid
      className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white"
    >
      <div className="flex items-center">
        <Button
          onClick={toggleSidebar}
          color="light"
          className="mr-3 border-none"
        >
          <HiMenuAlt1 className="h-6 w-6" />
        </Button>
        <NavbarBrand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Dubai_RTA_Logo.svg/200px-Dubai_RTA_Logo.svg.png"
            className="mr-3 h-9"
            alt="RTA Logo"
          />
        </NavbarBrand>
      </div>
      <div className="flex items-center md:order-2">
        <Button
          outline
          color="light"
          className="mr-3 border-gray-300 text-red-600 focus:ring-red-300 enabled:hover:bg-red-600 enabled:hover:text-white"
        >
          عربي
        </Button>
        <div className="relative mr-3">
          <HiBell className="h-6 w-6 text-gray-600" />
          <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></div>
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center text-gray-600">
              <HiUser className="mr-2 h-6 w-6" />
              <span>administrator</span>
            </div>
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Administrator</span>
            <span className="block truncate text-sm font-medium">
              admin@rta.ae
            </span>
          </DropdownHeader>
          <DropdownItem icon={HiViewBoards}>Dashboard</DropdownItem>
          <DropdownItem icon={HiCog}>Settings</DropdownItem>
          <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </Navbar>
  );
}
