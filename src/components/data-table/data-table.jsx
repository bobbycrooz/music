"use client";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
// import { EmptyFilterState } from "@/components/empty-state/empty-states";
import
{
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import
{
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as React from "react";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
//   emptyState?: React.ReactNode;
//   placeholder?: string;
//   column_to_filter?: string;
//   show_toolbar?: boolean;
//   show_pagination?: boolean;
//   export_modal?: React.JSX.Element;
//   filter_modal?: React.JSX.Element;
//   queryType?: string;
//   propertyString?: string;
//   dummyData?: TData[];
// }

// export type ResourceQueryInput = {
//   pageSize: number;
//   pageNumber: number;
//   filterJsonString?: string;
//   order?: string;
// };

export function DataTable({
  columns,
  data,
  emptyState,
  placeholder,
  column_to_filter,
  show_toolbar = true,
  show_pagination = true,
  export_modal,
})
{
  const [rowSelection, setRowSelection] = React.useState({});

  const [columnVisibility, setColumnVisibility] =
    React.useState({});

  const [columnFilters, setColumnFilters] = React.useState(
    []
  );
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="space-y-8">
      {show_toolbar && column_to_filter && (
        <DataTableToolbar placeholder={placeholder} column_to_filter={column_to_filter} table={table} export_modal={export_modal} />
      )}
      <div>
        <Table>
          <TableHeader className="bg-gray-100 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header) =>
                {
                  return (
                    <TableHead key={header.id} className="text-semibold">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {isFiltered ?
                    <EmptyFilterState />
                    : emptyState ? emptyState : "No results yet"
                  }
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {show_pagination && table.getRowModel().rows?.length > 0 && <DataTablePagination table={table} />}
    </div>
  );
}


function EmptyFilterState()
{
  return <div className="w-full">empty filter</div>;
}
