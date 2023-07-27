"use client";

import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface CalendarProps {
  onChange: (value: RangeKeyDict) => void;
  value: Range;
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  onChange,
  value,
  disabledDates,
}) => {
  return (
    <DateRange
      rangeColors={["#F97316"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default Calendar;
