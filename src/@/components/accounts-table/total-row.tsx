import React from "react";
import { TableCell, TableRow } from "../ui/table";
import { calculatePercentage, formatValue } from "./data-table";

interface StaticParentProps {
  name: String;
  value: number;
  percentage: string;
}

const NetWorthTotal: React.FC<StaticParentProps> = ({ name, value, percentage }) => {
  return (
    <TableRow className="text-gray-400">
      <TableCell className="border-b border-gray-200 grow text-start pl-6">
        <div className="flex items-center gap-1">
          <p>{name}</p>
        </div>
      </TableCell>
      <TableCell className="border-b border-gray-200 text-left w-64 pl-2">{percentage}</TableCell>
      <TableCell className="border-b border-gray-200 text-left w-64 pl-2">{formatValue(value)}</TableCell>
      <TableCell className="border-b border-gray-200 action-column w-16"></TableCell>
    </TableRow>
  );
};

export default NetWorthTotal;