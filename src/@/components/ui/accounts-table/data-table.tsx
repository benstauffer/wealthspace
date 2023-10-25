import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../table";
import CollapsibleRow from "./collapsible-row";
import { Account, AccountType } from "@prisma/client";

interface Props {
  data: Account[];
}
const DataTable = ({ data }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account Type</TableHead>
          <TableHead>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <CollapsibleRow
          name="Cash Accounts"
          data={data.filter(
            (account) => account.type === AccountType.CashAccount,
          )}
        />
        <CollapsibleRow
          name="Investment Accounts"
          data={data.filter(
            (account) => account.type === AccountType.InvestmentAccount,
          )}
        />
        <CollapsibleRow
          name="Private Investments"
          data={data.filter(
            (account) => account.type === AccountType.PrivateInvestment,
          )}
        />
        <CollapsibleRow
          name="Real Estates"
          data={data.filter(
            (account) => account.type === AccountType.RealEstate,
          )}
        />
        <CollapsibleRow
          name="Other Assets"
          data={data.filter(
            (account) => account.type === AccountType.OtherAssets,
          )}
        />
        <CollapsibleRow
          name="Liabilities"
          data={data.filter(
            (account) => account.type === AccountType.Liability,
          )}
        />
      </TableBody>
    </Table>
  );
};

export default DataTable;
