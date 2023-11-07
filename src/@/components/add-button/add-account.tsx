"use client";
import React, { useState } from "react";
import { Button } from "~/@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/@/components/ui/dialog";
import { Input } from "~/@/components/ui/input";
import { Label } from "~/@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "~/@/components/ui/dropdown-menu";

import { AccountDialog } from "~/@/components/add-button/account-dialogs";
import { Account } from "@prisma/client";

type AccountType =
  | "CashAccount"
  | "InvestmentAccount"
  | "PrivateInvestment"
  | "RealEstate"
  | "OtherAssets"
  | "Liability";

export function DialogAddAccount() {
  // Define state for the selected account type
  const [selectedAccountType, setSelectedAccountType] =
    useState<AccountType | null>(null);

  // This function will set the selected account type
  const handleAccountSelection = (type: AccountType) => {
    setSelectedAccountType(type);
  };
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-blue-500 px-3 py-4 font-normal text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
            Add Account
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("CashAccount")}
            >
              Cash Account
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("InvestmentAccount")}
            >
              Investment Account
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("PrivateInvestment")}
            >
              Private Investment
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("RealEstate")}
            >
              Real Estate
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("OtherAssets")}
            >
              Other Assets
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => handleAccountSelection("Liability")}
            >
              Liability
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedAccountType && (
        <AccountDialog type={selectedAccountType} setOpen={setOpen} />
      )}
    </Dialog>
  );
}
