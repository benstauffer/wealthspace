import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/@/components/ui/collapsible";
import { TableCell, TableRow } from "../table";
import { Account } from "@prisma/client";

interface Props {
  name: String;
  data: Account[];
}

const CollapsibleRow = ({ name, data }: Props) => {
  return (
    <Collapsible asChild>
      <>
        <TableRow className="font-semibold">
          <CollapsibleTrigger asChild>
            <TableCell className="cursor-pointer select-none">{name}</TableCell>
          </CollapsibleTrigger>
          <TableCell>
            {data.reduce(
              (accumulator, currentValue) => accumulator + currentValue.value,
              0,
            )}
          </TableCell>
        </TableRow>
        <CollapsibleContent asChild>
          <>
            {data.map((account, index) => {
              return (
                <TableRow key={index} className="text-slate-900">
                <TableCell>{account.name}</TableCell>
                  <TableCell>{account.value.toString()}</TableCell>
                </TableRow>
              );
            })}
          </>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default CollapsibleRow;
