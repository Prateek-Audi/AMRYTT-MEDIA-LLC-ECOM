import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Image from "next/image";

const DashHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-2xl font-semibold">Welcome Back Jenil</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor si amet welcome back jenil
        </p>
      </div>
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom"
      >
        <PopoverTrigger>
          <Button
            color="default"
            variant="bordered"
            className="text-sm font-normal text-[#858D9D] border-[#E0E2E7] rounded-lg flex gap-2"
          >
            <Image
              src={"/assets/calendar.svg"}
              alt={""}
              width={16}
              height={16}
            />
            Select Date
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <DatePicker onCancel={handleCancel} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DashHeader;
