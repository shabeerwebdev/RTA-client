import { Avatar, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { GenericTable } from "../components/common/GenericTable";

export type WhitelistItem = {
  id: string;
  tradeLicenseName: string;
  licenseNumber: string;
  photoUrl: string;
  date: string;
};

const getWhitelistData = async (): Promise<WhitelistItem[]> => {
  console.log("Fetching whitelist data...");
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      tradeLicenseName: "ABC Traders Pvt Ltd",
      licenseNumber: "TLN12345678",
      photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      date: "01-07-2025",
    },
    {
      id: "2",
      tradeLicenseName: "XYZ Enterprises",
      licenseNumber: "TLN98765432",
      photoUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      date: "01-07-2025",
    },
    {
      id: "3",
      tradeLicenseName: "EFG Logistics",
      licenseNumber: "TLN98777432",
      photoUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      date: "01-07-2025",
    },
    {
      id: "4",
      tradeLicenseName: "Simple Corp",
      licenseNumber: "LN98765432",
      photoUrl: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      date: "01-07-2025",
    },
    {
      id: "5",
      tradeLicenseName: "XY Enterprises",
      licenseNumber: "TLN98765432",
      photoUrl: "https://i.pravatar.cc/150?u=a092581f4e29026705d",
      date: "01-07-2025",
    },
  ];
};

export default function WhitelistPage() {
  const [whitelistData, setWhitelistData] = useState<WhitelistItem[]>([]);

  useEffect(() => {
    getWhitelistData().then((data) => {
      setWhitelistData(data);
    });
  }, []);

  const columns = [
    {
      key: "tradeLicenseName",
      header: "TRADE LICENSE NAME",
    },
    { key: "licenseNumber", header: "LICENSE NUMBER" },
    {
      key: "photo",
      header: "PHOTO",
      render: (item: WhitelistItem) => <Avatar img={item.photoUrl} rounded />,
    },
    { key: "date", header: "DATE" },
    {
      key: "location",
      header: "LOCATION",
      render: () => (
        <a href="#" className="font-medium text-cyan-600 hover:underline">
          View Map
        </a>
      ),
    },
    {
      key: "action",
      header: "ACTION",
      render: (item: WhitelistItem) => (
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            color="light"
            onClick={() => alert(`Editing ${item.id}`)}
          >
            <HiPencilAlt />
          </Button>
          <Button
            size="sm"
            color="light"
            onClick={() => alert(`Deleting ${item.id}`)}
          >
            <HiTrash />
          </Button>
          <Button
            size="sm"
            color="light"
            onClick={() => alert(`Viewing ${item.id}`)}
          >
            <HiEye />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <GenericTable
        title="Whitelist"
        columns={columns}
        data={whitelistData}
        onAddNew={() => alert("Add new whitelist clicked!")}
        onDownloadCsv={() => alert("Download CSV clicked!")}
      />
    </DashboardLayout>
  );
}
