"use client"
import React, { useState } from 'react';
import { Button } from "~/@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/@/components/ui/dialog"
import { Input } from "~/@/components/ui/input"
import { Label } from "~/@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "~/@/components/ui/dropdown-menu"

import { 
  CashAccountDialog,
  InvestmentAccountDialog,
  PrivateInvestmentDialog,
  RealEstateDialog,
  OtherAssetDialog, 
  LiabilityDialog, 
} from "~/@/components/ui/account-dialogs"

type AccountType = 'CashAccount' | 'InvestmentAccount' | 'PrivateInvestment' | 'RealEstate' | 'OtherAssets' | 'Liability';

export function DialogAddAccount() {

  // Define state for the selected account type
    const [selectedAccountType, setSelectedAccountType] = useState<AccountType | null>(null);

  // This function will set the selected account type
    const handleAccountSelection = (type: AccountType) => {
    setSelectedAccountType(type);
  }
  
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">+ Add Account</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('CashAccount')}>Cash Account</DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('InvestmentAccount')}>Investment Account</DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('PrivateInvestment')}>Private Investment</DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('RealEstate')}>Real Estate</DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('OtherAssets')}>Other Assets</DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => handleAccountSelection('Liability')}>Liability</DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Conditionally render dialogs based on the selected account type */}
      {selectedAccountType === 'CashAccount' && <CashAccountDialog />}
      {selectedAccountType === 'InvestmentAccount' && <InvestmentAccountDialog />}
      {selectedAccountType === 'PrivateInvestment' && <PrivateInvestmentDialog />}
      {selectedAccountType === 'RealEstate' && <RealEstateDialog />}
      {selectedAccountType === 'OtherAssets' && <OtherAssetDialog />}
      {selectedAccountType === 'Liability' && <LiabilityDialog />}
    </Dialog>
  );
}