import { useAuth } from "@clerk/nextjs";
import { AccountType } from "@prisma/client";
import { useRef } from "react";
import { Button } from "~/@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/@/components/ui/dialog";
import { Input } from "~/@/components/ui/input";
import { Label } from "~/@/components/ui/label";
import { trpc } from "~/utils/api";

const texts = {
  [AccountType.CashAccount]: {
    title: "Add Cash Account",
    description: "Cash, Checking, Savings, CDs, Credit Cards",
  },
  [AccountType.InvestmentAccount]: {
    title: "Add Investment Account",
    description: "Brokerage, Retirement accounts (IRAs, 401(k)s, 529s)",
  },
  [AccountType.PrivateInvestment]: {
    title: "Add Private Investment",
    description:
      "Private Equity, Private Debt, Private Real Estate, Venture Capital",
  },
  [AccountType.RealEstate]: {
    title: "Add Real Estate",
    description: "Real Estate positions",
  },
  [AccountType.OtherAssets]: {
    title: "Add Other Asset",
    description: "Art, Cars, Collectibles, etc.",
  },
  [AccountType.Liability]: {
    title: "Add Liability",
    description: "Mortgages, Student loans, Lines of credit, etc.",
  },
};
export function AccountDialog({
  type,
  setOpen,
}: {
  type: AccountType;
  setOpen: Function;
}) {
  const utils = trpc.useContext();
  const addAccount = trpc.accounts.add.useMutation({
    onSuccess() {
      utils.accounts.getAll.refetch();
    },
  });
  const nameRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<HTMLInputElement | null>(null);
  const { userId } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId || !nameRef.current || !valueRef.current) return;
    addAccount.mutate({
      name: nameRef.current.value,
      value: parseFloat(valueRef.current.value),
      type,
      userId,
    });
    // if (addedAccount.status) {
    //   return alert("Added successfully");
    // }
    setOpen(false);
  };
  return (
    <DialogContent className="sm:max-w-[550px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>{texts[type].title}</DialogTitle>
          <DialogDescription>{texts[type].description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              required
              id="name"
              ref={nameRef}
              placeholder="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="value" className="text-right">
              Account Value
            </Label>
            <Input
              required
              type="number"
              step="0.01"
              id="value"
              ref={valueRef}
              placeholder="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
