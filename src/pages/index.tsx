import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data } = api.accounts.getAll.useQuery();

  return (
    <>
      <main className="flex justify-center">
        <div className="bg-red-200">
          <title>Create T3 App</title>
          <div>
            {data?.map((account) => <div key={account.id}>{account.name}</div>)}
          </div>
        </div>
      </main>
    </>
  );
}