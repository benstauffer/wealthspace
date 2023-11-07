import { DialogAddAccount } from "~/@/components/add-button/add-account";
import { trpc } from "~/utils/api";
import AccountDataTable from "~/@/components/accounts-table/data-table";

import { useAuth } from "@clerk/nextjs";
import CashFlowDataTable from "~/@/components/cashflow-table/data-table";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/@/components/ui/card";
import { DataTableTab } from "~/@/components/tabs/datatable-tab";
import SideNavBar from "~/@/components/sidenavbar/sidenavbar";

export default function Home() {
  const { userId } = useAuth();
  if (!userId) return <h1>Not Found</h1>;
  const { data } = trpc.accounts.getAll.useQuery(userId);
  return (
    <div className="flex">
      { /* <Side Bar/> */}
      <SideNavBar/>
      <div className="w-full" style={{ paddingLeft: '300px', paddingRight: '50px' }}>
        <div className="">
      { /* <Main Content/> */}
        <div className="pl-5 pr-5 pt-5 pb-5 ">
          <Card className="rounded-md pb-20" style={{ backgroundColor: '' }}>
            <CardHeader className="text-2xl font-semibold text-gray-400">
              Scenario Charts
            </CardHeader>
            <CardContent className="mb-32 font-normal text-gray-400">
              Card Content
            </CardContent>
          </Card>
        </div>
        <div className="pl-5 pr-5 pt-5">
          <div className="mb-5">
            <DataTableTab/>
          </div>
          <Card className="rounded-md" style={{ backgroundColor: '' }}>
            <CardHeader className="text-2xl font-semibold text-gray-400">
              Net Worth Charts
            </CardHeader>
            <CardContent className="mb-32 font-normal text-gray-400">
              Card Content
            </CardContent>
          </Card>
        </div>
        <div className="">
          <div className="grid grid-cols-6 pb-5 pl-5 pr-5 pt-5">
            <div className="max-w-6 col-span-6 ">
              <AccountDataTable data={data || []} />
            </div>
            <div className="max-w-6 pd-10 col-span-6 pt-10"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
