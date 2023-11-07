import React, { useMemo, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/@/components/ui/collapsible";
import { TableCell, TableRow } from "../ui/table";
import { Account } from "@prisma/client";
import { calculatePercentage, formatValue } from "./data-table";
import AccountRow from "./account-row";

interface Props {
  name: String;
  data: Account[];
  total: number;
}

const CollapsibleRow = ({ name, data, total }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // const shadowStyle = isExpanded ? { boxShadow: '0px 2px 6px #d1d5db' } : {};
    
  const value = useMemo(
    () =>
      data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0,
      ),
    [data],
  );

  return (
    <Collapsible>
      <>
        <CollapsibleTrigger className="w-full text-left">
          <TableRow className="cursor-pointer">
            <TableCell className="border-b border-gray-200 flex-1 text-start pl-5">
              <div className="ml-3 flex items-center gap-1">
                <svg
                  className={data.length === 0 ? "" : "open_icon"}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor"></path>
                </svg>
                <p>{name}</p>
              </div>
            </TableCell>
            <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{calculatePercentage(value, total)}</TableCell>
            <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{formatValue(value)}</TableCell>
            <TableCell className="border-b border-l border-gray-200 action-column w-16"></TableCell>
          </TableRow>
        </CollapsibleTrigger>
        <CollapsibleContent
          className={data.length === 0 ? "" : "CollapsibleContent"}
        >
          <>
            {data.map((account, index) => {
              return <AccountRow account={account} total={total} key={index} />;
            })}
          </>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default CollapsibleRow;