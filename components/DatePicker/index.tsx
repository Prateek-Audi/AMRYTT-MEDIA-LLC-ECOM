import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DatePicker: React.FC = () => {
  const [leftDate, setLeftDate] = useState(new Date());
  const [rightDate, setRightDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const prevMonth = (setDate: React.Dispatch<React.SetStateAction<Date>>, currentDate: Date) => {
    setDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = (setDate: React.Dispatch<React.SetStateAction<Date>>, currentDate: Date) => {
    setDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const generateCalendarDays = (date: Date) => {
    const daysInMonth = getDaysInMonth(date);
    const firstDay = getFirstDayOfMonth(date);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const weekDaysCSS =
    'text-[#344054] text-xs font-medium hover:text-[#16597F] hover:bg-[#EAF8FF] px-2 py-2 hover:rounded-md cursor-pointer';

  return (
    <div className="flex bg-white rounded-lg shadow h-full w-fit mx-auto">
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
          {/* Left Date Calendar */}
            <div className="pr-2 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => prevMonth(setLeftDate, leftDate)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-medium">{formatDate(leftDate)}</span>
                <button
                  onClick={() => nextMonth(setLeftDate, leftDate)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="h-6 text-center text-xs text-gray-600 flex items-center justify-center"
                  >
                    {day}
                  </div>
                ))}
                {generateCalendarDays(leftDate).map((day, index) => (
                  <div
                    key={index}
                    className={`h-6 text-center text-xs flex items-center justify-center cursor-pointer ${
                      day ? 'hover:bg-blue-300 w-6 rounded-full' : ''
                    } text-[#344054]`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Date Calendar */}
            <div className="border-l pl-2 pr-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => prevMonth(setRightDate, rightDate)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-medium">{formatDate(rightDate)}</span>
                <button
                  onClick={() => nextMonth(setRightDate, rightDate)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="h-6 text-center text-xs text-gray-600 flex items-center justify-center"
                  >
                    {day}
                  </div>
                ))}
                {generateCalendarDays(rightDate).map((day, index) => (
                  <div
                    key={index}
                    className={`h-6 text-center text-xs flex items-center justify-center cursor-pointer ${
                      day ? 'hover:bg-blue-300 w-6 rounded-full' : ''
                    } text-[#344054]`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="border-t pt-4 flex flex-col md:flex-row items-center gap-4 px-4">
          <div className="flex items-center space-x-1 mb-3 md:mb-0">
            <input
              type="text"
              value="Jan 6, 2022"
              className="border rounded px-2 py-1 text-xs max-w-24"
              readOnly
            />
            <span className="text-gray-500">-</span>
            <input
              type="text"
              value="Jan 13, 2022"
              className="border rounded px-2 py-1 text-xs max-w-24"
              readOnly
            />
          </div>
          <div className="flex gap-2 w-full space-x-1">
            <button className="w-full px-3 py-1 border border-[#D0D5DD] text-xs text-gray-600 hover:bg-gray-100 rounded">
              Cancel
            </button>
            <button className="w-full px-3 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
