import React from "react";
import { Accordion, AccordionItem, Input, Button } from "@nextui-org/react";
import { DragHandleDots2Icon } from "@radix-ui/react-icons";

type ColumnType = {
  name: string;
  isDraggable?: boolean;
};

const columns: ColumnType[] = [
  { name: "Payment Type", isDraggable: true },
  { name: "Bank Name", isDraggable: true },
  { name: "Discount", isDraggable: true },
  { name: "Delivery Status", isDraggable: true },
  { name: "Delivery Date", isDraggable: true },
];

type Props = {
  onClose: () => void;
};

const ColumnEditor: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col justify-between mb-2">
        <h3 className="text-lg font-semibold p-4">Edit Columns</h3>
        <div className="w-full bg-[#EAF8FF] text-[#2086BF] text-right">
          <Button
            size="sm"
            variant="light"
            className="text-blue-500"
            onPress={onClose}
          >
            Reset Columns
          </Button>
        </div>
      </div>

      <div className="px-4">
        <Input
          variant="bordered"
          placeholder="Find an Columns"
          classNames={{
            inputWrapper: "border-none",
          }}
          className=" border border-solid border-[#2086BF] rounded"
        />
      </div>

      <Accordion>
        {columns.map((column, index) => (
          <AccordionItem
            key={index}
            className="p-0 border-none"
            aria-label={column.name}
            title={
              <div className="flex items-center gap-2">
                {column.isDraggable && (
                  <DragHandleDots2Icon className="text-gray-400" />
                )}
                <span>{column.name}</span>
              </div>
            }
          />
        ))}
      </Accordion>
    </div>
  );
};

export default ColumnEditor;
