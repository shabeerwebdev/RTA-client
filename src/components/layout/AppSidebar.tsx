import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiClipboardList,
  HiCollection,
  HiDocumentText,
  HiExclamationCircle,
  HiInbox,
  HiReceiptTax,
  HiTicket,
  HiTruck,
  HiUserGroup,
  HiUsers,
} from "react-icons/hi";

export function AppSidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`fixed top-16 left-0 z-20 h-full w-64 bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Sidebar aria-label="Sidebar" className="h-full">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarCollapse
              icon={HiCollection}
              label="Parking Management"
              open
            >
              <SidebarItem href="/whitelist" icon={HiDocumentText} active>
                Whitelist
              </SidebarItem>
              <SidebarItem href="#" icon={HiDocumentText}>
                Whitelist2
              </SidebarItem>
              <SidebarItem href="#" icon={HiExclamationCircle}>
                Violations
              </SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiInbox}>
              Pledges Management
            </SidebarItem>
            <SidebarCollapse icon={HiTicket} label="Permits">
              <SidebarItem href="#">Permit List</SidebarItem>
            </SidebarCollapse>
            <SidebarCollapse icon={HiUserGroup} label="HRMS">
              <SidebarItem href="#">HRMS List</SidebarItem>
            </SidebarCollapse>
            <SidebarCollapse icon={HiClipboardList} label="Inspections">
              <SidebarItem href="#">Inspection List</SidebarItem>
            </SidebarCollapse>
            <SidebarCollapse icon={HiReceiptTax} label="Fines Management">
              <SidebarItem href="#">Fines List</SidebarItem>
            </SidebarCollapse>
            <SidebarItem href="#" icon={HiUsers}>
              Dispute Management
            </SidebarItem>
            <SidebarItem href="#" icon={HiTruck}>
              Towing
            </SidebarItem>
            <SidebarCollapse icon={HiUserGroup} label="Team Assessment">
              <SidebarItem href="#">Assessment List</SidebarItem>
            </SidebarCollapse>
            <SidebarCollapse icon={HiChartPie} label="Analytics & Insights">
              <SidebarItem href="#">Analytics Dashboard</SidebarItem>
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </aside>
  );
}
