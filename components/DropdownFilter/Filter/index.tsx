import React from "react";
import {
  Input,
  Button,
  Checkbox,
  Select,
  SelectItem,
  Slider,
} from "@nextui-org/react";

const comparisonOperators = [
  { value: "<", label: "(<) Less Than" },
  { value: "=", label: "(=) Equals" },
  { value: ">", label: "(>) Greater Than" },
  { value: "<=", label: "(<=) Less Than Equal" },
  { value: ">=", label: "(>=) Greater Than Equal" },
];

type Props = {
  onClose: () => void;
};

const FilterDropdown: React.FC<Props> = ({ onClose }) => {
  const [range, setRange] = React.useState<number[]>([200, 8000]);
  const [selectedOperator, setSelectedOperator] = React.useState("<");

  return (
    <div className="w-64 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold p-4">Filter</h3>
      <div className="w-full bg-[#EAF8FF] text-[#2086BF] text-right mb-2">
        <Button
          size="sm"
          variant="light"
          className="text-blue-500"
          onPress={onClose}
        >
          Clear All
        </Button>
      </div>
      <div className="px-4">
        <Input
          placeholder="Search"
          className="border border-solid border-[#2086BF] rounded"
          variant="bordered"
          classNames={{
            inputWrapper: "border-none",
          }}
        />
      </div>

      <div className="space-y-4 p-4">
        <Checkbox value="low-to-high">Low to high</Checkbox>
        <Checkbox value="high-to-low">high to Low</Checkbox>

        <div className="px-2">
          <Slider
            step={100}
            minValue={0}
            maxValue={10000}
            value={range}
            onChange={(value) =>
              setRange(Array.isArray(value) ? value : [value, range[1]])
            }
            className="my-6"
            showSteps={true}
            size="sm"
          />
          <div className="flex gap-2">
            <Input
              value={range[0].toString()}
              onChange={(e) => setRange([parseInt(e.target.value), range[1]])}
              size="sm"
              variant="bordered"
            />
            <Input
              value={range[1].toString()}
              onChange={(e) => setRange([range[0], parseInt(e.target.value)])}
              size="sm"
              variant="bordered"
            />
          </div>
        </div>

        <Select
          label=""
          selectedKeys={[selectedOperator]}
          className="max-w-full border-none placeholder:text-[#667085]"
          onChange={(e) => setSelectedOperator(e.target.value)}
          size="md"
          variant="bordered"
          classNames={{
            trigger: "border border-solid border-[#2086BF] rounded shadow-none",
          }}
        >
          {comparisonOperators.map((operator) => (
            <SelectItem
              key={operator.value}
              value={operator.value}
              className="text-xs font-medium text-[#667085]"
            >
              {operator.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterDropdown;
