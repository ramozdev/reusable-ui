"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpIcon,
  ChevronDownIcon,
  ArrowDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import Select from "@/ui/radix/select";

import Button from "@/ui/html/button";
import { useRouter } from "next/navigation";
import Input from "@/ui/html/input";
import Table from "@/ui/html/table";

export type Payment = {
  id: string;
  price: number;
  name: "Fufu Token" | "Jesus Coin" | "Metablox" | "Morra Token" | "Pepe Coin";
  change: string;
  tvl: string;
  volume: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: () => <div>#</div>,
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Token name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button.Solid
          color="white-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          price
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button.Solid>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));

      // Format the price as a dollar price
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "change",
    header: ({ column }) => {
      return (
        <Button.Solid
          color="white-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          change
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button.Solid>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("change")}</div>
    ),
  },
  {
    accessorKey: "tvl",
    header: ({ column }) => {
      return (
        <Button.Solid
          color="white-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          tvl
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button.Solid>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("tvl")}</div>,
  },
  {
    accessorKey: "volume",
    header: ({ column }) => {
      return (
        <Button.Solid
          color="white-black"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          volume
          {column.getIsSorted() === "asc" ? (
            <ArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <ArrowDownIcon className="ml-2 h-4 w-4" />
          )}
        </Button.Solid>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("volume")}</div>
    ),
  },
];

export default function TokenDemo({ data }: { data: Payment[] }) {
  const [chain, setChain] = React.useState<string>("");
  const router = useRouter();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="mx-8 max-w-screen-xl xl:mx-auto">
      <div className="flex justify-start space-x-2  py-4">
        <div>
          <Select.Root
            value={chain}
            onValueChange={(chain) => {
              setChain(chain);
              router.push(`/examples/tokens/${chain}`);
            }}
          >
            <Select.Trigger aria-label="Food">
              <Select.Value placeholder="Chain" />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.ScrollUpButton>
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Label>Chains</Select.Label>
                    <Select.Item value="era">Era</Select.Item>
                    <Select.Item value="eth">Eth</Select.Item>
                    <Select.Item value="polygon">Polygon</Select.Item>
                    <Select.Item value="base">Base</Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div>
          <Select.Root>
            <Select.Trigger>
              <Select.Value placeholder="Time" />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.ScrollUpButton>
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport>
                  <Select.Group>
                    <Select.Item value="1h">1H</Select.Item>
                    <Select.Item value="1d">1D</Select.Item>
                    <Select.Item value="1w">1W</Select.Item>
                    <Select.Item value="1m">1M</Select.Item>
                    <Select.Item value="1y">1Y</Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
        <div>
          <Input
            placeholder="Filter by Name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="rounded-md border border-neutral-200 dark:border-neutral-800">
        <Table.Root className="text-right">
          <Table.Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Table.Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.Th>
                  );
                })}
              </Table.Tr>
            ))}
          </Table.Thead>
          <Table.Tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Table.Tr
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={columns.length} className="h-24 text-center">
                  No results.
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table.Root>
      </div>
    </div>
  );
}
