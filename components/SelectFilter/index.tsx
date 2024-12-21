import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type SizeValues = "sm" | "md" | "lg";

type Props = {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
  size?: SizeValues;
}

const SelectFilter: React.FC<Props> = ({
  options,
  selected,
  onChange,
  size = "sm"
}) => {
  return (
    <div className="flex flex-col space-y-1 ">
      <Select
        selectedKeys={selected === "ALL" ? new Set(["ALL"]) : new Set([selected])}
        onSelectionChange={(keys) => {
            const selectedValue = Array.from(keys)[0] as string;
            onChange(selectedValue);
          }}
        classNames={{
          base: "min-w-[200px] rounded-none bg-white",
          trigger: "bg-white border-solid border border-[#D7D7D7] rounded-[5px]",
          value: "text-xs text-[#969696] font-normal",
          listbox: "text-xs text-[#969696]"
        }}
        size={size}
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectFilter;
