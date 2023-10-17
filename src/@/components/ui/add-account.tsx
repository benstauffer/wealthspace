"use client"
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

export function DialogAddAccount() {
  return (
    <Dialog>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">+ Add Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DialogTrigger asChild>
          <DropdownMenuItem>Cash Account</DropdownMenuItem>
        </DialogTrigger>
        <DialogTrigger asChild>
          <DropdownMenuItem>Investment Account</DropdownMenuItem>
        </DialogTrigger>
        <DialogTrigger asChild>
          <DropdownMenuItem>Private Investment</DropdownMenuItem>
        </DialogTrigger>
        <DialogTrigger asChild>
          <DropdownMenuItem>Real Estate</DropdownMenuItem>
        </DialogTrigger>
        <DialogTrigger asChild>
          <DropdownMenuItem>Other</DropdownMenuItem>
        </DialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
    <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Account</DialogTitle>
              <DialogDescription>
                Make changes to your account. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Account Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Account Name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Account Value
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
  )
}