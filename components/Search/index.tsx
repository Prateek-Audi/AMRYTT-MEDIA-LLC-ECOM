import React from "react";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Input
      classNames={{
        input: "text-small text-xs",
        base: "max-w-full",
        inputWrapper: "rounded-[5px] border border-solid border-[#D7D7D7]",
      }}
      placeholder="Search..."
      size="sm"
      endContent={<Search className="w-4 h-4" />}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="bordered"
      className="placeholder:text-xs"
    />
  );
};

export default SearchBar;
