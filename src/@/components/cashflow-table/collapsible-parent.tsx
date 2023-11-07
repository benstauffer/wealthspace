import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/@/components/ui/collapsible";
import { TableCell, TableRow } from "../ui/table";
import { formatValue } from "./data-table";

const CollapsibleParent = ({
  name,
  value,
  percentage,
  children,
}: {
  name: String;
  value: number;
  percentage: string;
  children: React.ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shadowStyle = isExpanded ? { boxShadow: '0px 2px 6px #d1d5db', position: 'relative' as 'relative', zIndex: 1 } : {};

  return (
    <Collapsible>
      <>
        <CollapsibleTrigger onClick={handleToggle} className="w-full text-left" style={shadowStyle}>
          <TableRow className="cursor-pointer font-normal">
            <TableCell className="border-b border-gray-200 grow text-start pl-5">
              <div className="flex items-center gap-1">
                <svg
                  className="open_icon"
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
            <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{percentage}</TableCell>
            <TableCell className="border-b border-l border-gray-200 text-left w-64 pl-2">{formatValue(value)}</TableCell>
            <TableCell className="border-b border-l border-gray-200 action-column w-16"></TableCell>
          </TableRow>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          {children}
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default CollapsibleParent;