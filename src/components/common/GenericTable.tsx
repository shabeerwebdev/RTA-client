import {
  Button,
  Checkbox,
  Datepicker,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiDownload, HiPlus } from "react-icons/hi";

export type ColumnDef<T> = {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
};

interface GenericTableProps<T> {
  title: string;
  columns: ColumnDef<T>[];
  data: T[];
  onAddNew: () => void;
  onDownloadCsv: () => void;
}

export function GenericTable<T extends { id: string }>({
  title,
  columns,
  data,
  onAddNew,
  onDownloadCsv,
}: GenericTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);

    console.log("Navigating to page:", page);
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        <Button color="failure" onClick={onAddNew}>
          <HiPlus className="mr-2 h-5 w-5" />
          Add New {title}
        </Button>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-4">
        <TextInput id="search" name="search" placeholder="Search" />
        <Datepicker id="from-date" name="from-date" title="From Date" />
        <Datepicker id="to-date" name="to-date" title="To Date" />
        <Button onClick={onDownloadCsv}>
          <HiDownload className="mr-2 h-5 w-5" />
          Download CSV
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-red-50 text-red-700">
            <TableHeadCell className="p-4">
              <Checkbox />
            </TableHeadCell>
            {columns.map((col) => (
              <TableHeadCell key={String(col.key)}>{col.header}</TableHeadCell>
            ))}
          </TableHead>
          <TableBody className="divide-y">
            {data.map((item) => (
              <TableRow key={item.id} className="bg-white">
                <TableCell className="p-4">
                  <Checkbox />
                </TableCell>
                {columns.map((col) => (
                  <TableCell key={String(col.key)}>
                    {col.render
                      ? col.render(item)
                      : String(item[col.key as keyof T])}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2 text-sm">Show:</span>
          <Select id="entries" sizing="sm">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </Select>
          <span className="ml-2 text-sm">entries</span>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={onPageChange}
          previousLabel="Prev"
          nextLabel="Next"
        />
      </div>
    </div>
  );
}
