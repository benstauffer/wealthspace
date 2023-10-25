import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { UserButton } from "@clerk/nextjs";
import { DialogAddAccount } from "~/@/components/ui/add-account";

import DataTable from "~/@/components/ui/accounts-table/data-table";

export default function Home() {
  const { data } = api.accounts.getAll.useQuery();
  return (
    <>
      <main className="mt-5 flex justify-center">
        <div className="h-full w-full md:max-w-3xl">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DialogAddAccount />
          </div>
          <div>
            {/* {data?.map((account) => <div key={account.id}>{account.type}</div>)} */}
            <DataTable data={data || []} />
          </div>
        </div>
      </main>
    </>
  );
}
