import React from "react";
import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

type Props = {
  onCancel: () => void;
};

const DatePicker: React.FC<Props> = ({ onCancel }) => {
  const weekDaysCSS =
    "text-[#344054] text-xs font-medium hover:text-[#16597F] hover:bg-[#EAF8FF] px-2 py-2 hover:rounded-md cursor-pointer";

  return (
    <div className="flex bg-white rounded-lg shadow h-full w-fit">
      <div className="hidden md:block md:w-32 px-2">
        <ul>
          <li className={weekDaysCSS}>Today</li>
          <li className={weekDaysCSS}>Yesterday</li>
          <li className={weekDaysCSS}>This week</li>
          <li className={weekDaysCSS}>Last week</li>
          <li className={weekDaysCSS}>This month</li>
          <li className={weekDaysCSS}>Last month</li>
          <li className={weekDaysCSS}>This year</li>
          <li className={weekDaysCSS}>Last year</li>
          <li className={weekDaysCSS}>All time</li>
        </ul>
      </div>

      <div className="flex-1 border-l">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex w-full">
            <div className="border-r">
              <RangeCalendar
                classNames={{
                  base: "h-full border-none rounded-none shadow-none",
                }}
                aria-label="Date (No Selection)"
                defaultValue={{
                  start: today(getLocalTimeZone()),
                  end: today(getLocalTimeZone()).add({ weeks: 1 }),
                }}
              />
            </div>
            <RangeCalendar
              classNames={{
                base: "h-full border-none rounded-none shadow-none",
              }}
              aria-label="Date (Uncontrolled)"
            />
          </div>
        </div>

        {/* Additional Section */}
        <div className="border-t p-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center space-x-1 mb-3 md:mb-0">
            <input
              type="text"
              value="Jan 6, 2022"
              className="border rounded px-2 py-1 text-xs max-w-28"
              readOnly
            />
            <span className="text-gray-500">-</span>
            <input
              type="text"
              value="Jan 13, 2022"
              className="border rounded px-2 py-1 text-xs max-w-28"
              readOnly
            />
          </div>
          <div className="flex gap-2 w-full space-x-1">
            <button
              onClick={onCancel}
              className="w-full px-3 py-1 border border-[#D0D5DD] text-xs text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onCancel}
              className="w-full px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
