import { Button } from "@/components/ui/button";
import * as React from "react";
import { pb } from "@/api/clients";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export type Client = {
  id: string;
  name: string;
  lastNames: string;
  email: string;
  phone: string;
  color: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <Link to={`/client/${row.original.id}`} className="capitalize">
        <div
          style={{ backgroundColor: row.original.color ?? "#0ff" }}
          className={`inline-block w-10 h-10 mr-3 rounded-full`}
        >
          <div className="flex items-center justify-center w-full h-full text-xl font-medium text-white uppercase">
            {row.getValue("name")[0]}
            {row.getValue("lastNames")[0]}
          </div>
        </div>
        <span className="text-md font-medium leading-relaxed">
          {row.getValue("name")}
        </span>
      </Link>
    ),
  },
  {
    accessorKey: "lastNames",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          lastNames
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("lastNames")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const Client = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(Client.id)}
            >
              Copy Client ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`/client/${row.original.id}`}>view Customer</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="flex items-center gap-3"
                onClick={async () => {
                  await pb.collection("clients").delete(row.original.id);
                }}
              >
                <Trash width={16} />
                Delete
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
