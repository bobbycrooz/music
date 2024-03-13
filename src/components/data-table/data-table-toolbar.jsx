"use client";

import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
// import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { XIcon, FolderDown } from "lucide-react";
import
{
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";



export function DataTableToolbar({ table, column_to_filter, placeholder, export_modal })
{
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative w-[200px] lg:w-[400px]">
          <Input
            placeholder={placeholder || "Search..."}
            value={(table.getColumn(column_to_filter)?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn(column_to_filter)?.setFilterValue(event.target.value)
            }
            className="pl-10 w-full py-3 h-fit rounded- border-border placeholder:text-gray-400"
          />
          <div className="absolute left-4 transform -translate-y-1/2 top-1/2">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center space-x-4 text-gray-500">

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size={"sm"}
              className="text-sm px-2 lg:px-3 py-2 inline-flex items-center gap-2 border rounded-[12px]"
            >
              <FolderDown className="w-4 h-4 text-gray-600" />
              Export
            </Button>
          </DialogTrigger>
          {export_modal}
        </Dialog>
      </div>
    </div>
  );
}


// <Button
//   variant="ghost"
//   size={"sm"}
//   className="text-sm px-2 lg:px-3 py-2 inline-flex items-center gap-2 border rounded-[12px]"
// >
//   <Filter className="w-4 h-4 text-gray-600" />
//   Filter
// </Button>