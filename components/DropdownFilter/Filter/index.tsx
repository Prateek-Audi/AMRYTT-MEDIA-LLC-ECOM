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
  { value: "<", label: "Less Than" },
  { value: "=", label: "Equals" },
  { value: ">", label: "Greater Than" },
  { value: "<=", label: "Less Than Equal" },
  { value: ">=", label: "Greater Than Equal" },
];

type Props = {
  onClose: () => void;
};

const FilterDropdown: React.FC<Props> = ({ onClose }) => {
  const [range, setRange] = React.useState<number[]>([200, 8000]);
  const [selectedOperator, setSelectedOperator] = React.useState("<");

  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <Button
          size="sm"
          variant="light"
          className="text-blue-500"
          onPress={onClose}
        >
          Clear all
        </Button>
      </div>

      <Input
        placeholder="Search"
        className="mb-4"
        size="sm"
        variant="bordered"
      />

      <div className="space-y-4">
        <Checkbox value="low-to-high">Low to high</Checkbox>
        <Checkbox value="high-to-low">high to Low</Checkbox>

        <div className="px-2">
          <Slider
            label="Range"
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
          label="Select comparison"
          selectedKeys={[selectedOperator]}
          className="max-w-full"
          onChange={(e) => setSelectedOperator(e.target.value)}
          size="sm"
          variant="bordered"
        >
          {comparisonOperators.map((operator) => (
            <SelectItem key={operator.value} value={operator.value}>
              {operator.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterDropdown;
