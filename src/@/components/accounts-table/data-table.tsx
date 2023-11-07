import React, { useMemo } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import CollapsibleRow from "./collapsible-row";
import { Account, AccountType } from "@prisma/client";
import CollapsibleParent from "./collapsible-parent";
import NetWorthTotal from "./total-row";


interface Props {
  data: Account[];
}

interface AccountProps {
  name: string;
  value: number;
  percentage: string;
}

const AccountRow = ({ name, value, percentage }: AccountProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{percentage}</td>
      <td>{formatValue(value)}</td>
      <td></td> {/* Empty cell for the action column */}
    </tr>
  );
};

const AccountDataTable = ({ data }: Props) => {
  const total = useMemo(() => {
    return data.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0,
    );
  }, [data]);

  const liabilities = useMemo(() => {
    return data
      .filter((account) => account.type === AccountType.Liability)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0,
      );
  }, [data]);

  const assets = total - liabilities;

  return (
    <div className="">
      <Table>
        <TableHeader className="">
          <TableRow className="">
            <TableHead className="text-gray-400 font-normal flex-1 justify-start border-t border-b border-gray-200 pl-6">
              Account Type
            </TableHead>
            <TableHead className="text-gray-400 font-normal w-64 justify-start border-t border-b border-l border-gray-200 pl-2">
              % of Assets
            </TableHead>
            <TableHead className="text-gray-400 font-normal w-64 justify-start border-t border-b border-l border-gray-200 pl-2">
              Value
            </TableHead>
            <TableHead className="text-gray-400 font-normal action-column w-16 border-t border-b border-l border-gray-200"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <CollapsibleParent
            name="Assets"
            value={assets}
            percentage={calculatePercentage(assets, total)}
          >
            <CollapsibleRow
              name="Cash Accounts"
              data={data.filter(
                (account) => account.type === AccountType.CashAccount,
              )}
              total={assets}
            />
            <CollapsibleRow
              name="Investment Accounts"
              data={data.filter(
                (account) => account.type === AccountType.InvestmentAccount,
              )}
              total={assets}
            />
            <CollapsibleRow
              name="Private Investments"
              data={data.filter(
                (account) => account.type === AccountType.PrivateInvestment,
              )}
              total={assets}
            />
            <CollapsibleRow
              name="Real Estates"
              data={data.filter(
                (account) => account.type === AccountType.RealEstate,
              )}
              total={assets}
            />
            <CollapsibleRow
              name="Other Assets"
              data={data.filter(
                (account) => account.type === AccountType.OtherAssets,
              )}
              total={assets}
            />
          </CollapsibleParent>
          <CollapsibleParent
            name="Liabilities"
            value={liabilities}
            percentage={calculatePercentage(liabilities, total)}
          >
            <CollapsibleRow
              name="Payables"
              data={data.filter(
                (account) => account.type === AccountType.Liability,
              )}
              total={liabilities}
            />
          </CollapsibleParent>
          <NetWorthTotal
            name="Current Net Worth"
            value={assets - liabilities}
            percentage={calculatePercentage(assets + liabilities, total)}
          />
        </TableBody>
      </Table>
    </div>
  );
};

function calculatePercentage(amount: number, total: number) {
  if (total === 0 || amount === 0) return "0%";
  const formatted = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(amount / total);
  return formatted;
}

function formatValue(value: number) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(value);
}

export default AccountDataTable;
export { calculatePercentage, formatValue };