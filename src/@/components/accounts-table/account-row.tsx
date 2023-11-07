import { Account } from "@prisma/client";
import { useState } from "react";
import { trpc } from "~/utils/api";
import EditAccount from "./edit-account";
import { Dialog, DialogTrigger } from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TableCell, TableRow } from "../ui/table";
import { calculatePercentage, formatValue } from "./data-table";

const AccountRow = ({
  account,
  total,
}: {
  account: Account;
  total: number;
}) => {
  const utils = trpc.useContext();
  const removeAccount = trpc.accounts.remove.useMutation({
    onSuccess() {
      utils.accounts.getAll.refetch();
    },
  });
  const deleteAccount = () => {
    removeAccount.mutate({ id: account.id });
  };
  const [open, setOpen] = useState(false);
  return (
    <TableRow className="">
      <TableCell style={{ paddingLeft: '62px' }} className="border-b border-gray-200 flex-1 text-start pl">{account.name}</TableCell>
      <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{calculatePercentage(account.value, total)}</TableCell>
      <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{formatValue(account.value)}</TableCell>
      <TableCell className="border-b border-l border-gray-200 action-column grid place-content-center w-16">
        <Dialog open={open} onOpenChange={setOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  style={{ fill: "#9ca3af" }} // Replace with your desired color

                ></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <DialogTrigger className="w-full text-left">Edit</DialogTrigger>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={deleteAccount}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {open && <EditAccount account={account} setOpen={setOpen} />}
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default AccountRow;
