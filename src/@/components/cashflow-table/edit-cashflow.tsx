import { Account } from "@prisma/client";
import { useRef, useState } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { trpc } from "~/utils/api";

const EditAccount = ({
  account,
  setOpen,
}: {
  account: Account;
  setOpen: Function;
}) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<HTMLInputElement | null>(null);
  const utils = trpc.useContext();
  const editAccount = trpc.accounts.edit.useMutation({
    onSuccess() {
      utils.accounts.getAll.refetch();
    },
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nameRef.current || !valueRef.current) return;
    editAccount.mutate({
      id: account.id,
      value: parseFloat(valueRef.current?.value),
      name: nameRef.current?.value,
    });
    setOpen(false);
  };
  return (
    <DialogContent>
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Edit Account</DialogTitle>
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
              defaultValue={account.name}
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
              ref={valueRef}
              defaultValue={account.value}
              type="number"
              step="0.01"
              id="value"
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
};

export default EditAccount;
