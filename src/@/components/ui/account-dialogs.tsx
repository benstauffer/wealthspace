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


// Cash Account Dialog
export function CashAccountDialog() {
    return (
        <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Cash Account</DialogTitle>
          <DialogDescription>
            Cash, Checking, Savings, CDs, Credit Cards
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              id="name" // NEED TO CHANGE THIS
              defaultValue="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account Value
            </Label>
            <Input
              id="username" // NEED TO CHANGE THIS
              defaultValue="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
  }

  // Investment Account Dialog
export function InvestmentAccountDialog() {
  return (
      <DialogContent className="sm:max-w-[550px]">
      <DialogHeader>
        <DialogTitle>Add Investment Account</DialogTitle>
        <DialogDescription> 
          Brokerage, Retirement accounts (IRAs, 401(k)s, 529s)
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-5 py-5">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Account Name
          </Label>
          <Input
            id="name" // NEED TO CHANGE THIS
            defaultValue="Account Name"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Account Value
          </Label>
          <Input
            id="username" // NEED TO CHANGE THIS
            defaultValue="Account Value"
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}

  // Private Investment Dialog
  export function PrivateInvestmentDialog() {
    return (
        <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Private Investment</DialogTitle>
          <DialogDescription> 
            Private Equity, Private Debt, Private Real Estate, Venture Capital
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              id="name" // NEED TO CHANGE THIS
              defaultValue="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account Value
            </Label>
            <Input
              id="username" // NEED TO CHANGE THIS
              defaultValue="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
  }

  // Real Estate Dialog
  export function RealEstateDialog() {
    return (
        <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Real Estate</DialogTitle>
          <DialogDescription> 
            Real Estate positions
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              id="name" // NEED TO CHANGE THIS
              defaultValue="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account Value
            </Label>
            <Input
              id="username" // NEED TO CHANGE THIS
              defaultValue="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
  }

  // Other Asset Dialog
  export function OtherAssetDialog() {
    return (
        <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Other Asset</DialogTitle>
          <DialogDescription> 
            Art, Cars, Collectibles, etc.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              id="name" // NEED TO CHANGE THIS
              defaultValue="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account Value
            </Label>
            <Input
              id="username" // NEED TO CHANGE THIS
              defaultValue="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
  }

  // Liability  Dialog
  export function LiabilityDialog() {
    return (
        <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add Liability</DialogTitle>
          <DialogDescription> 
            Mortgages, Student loans, Lines of credit, etc.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Account Name
            </Label>
            <Input
              id="name" // NEED TO CHANGE THIS
              defaultValue="Account Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account Value
            </Label>
            <Input
              id="username" // NEED TO CHANGE THIS
              defaultValue="Account Value"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    );
  }