"use client";

import React from "react";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price?: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  disabled?: boolean;
  disabledDates: Date[];
  onSubmit: () => void;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  disabled,
  disabledDates,
  onSubmit,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border-[1px]
        border-neutral-200
        overflow-hidden
    "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div
          className="
            text-2xl
            font-semibold
        "
        >
          $ {price}
        </div>
        <div
          className="
            text-neutral-600
            font-light 
        "
        >
          / night
        </div>
      </div>
      <hr />
      <Calendar
        onChange={(value) => onChangeDate(value.selection)}
        value={dateRange}
        disabledDates={disabledDates}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
