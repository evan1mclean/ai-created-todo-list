"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Popover } from "./Popover";

export type DatePickerProps = {
  date?: Date;
  onDateChange?: (date?: Date) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

export function DatePicker({
  date,
  onDateChange,
  disabled,
  className,
  placeholder = "Pick a date",
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-neutral-500",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : placeholder}
        </Button>
      }
    >
      <div className="p-3">
        <DayPicker
          mode="single"
          selected={date}
          onSelect={(day) => {
            onDateChange?.(day);
            setIsOpen(false);
          }}
          className="border-neutral-200"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: cn(
              "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-100",
              "[&:has([aria-selected].day-outside)]:bg-neutral-100/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"
            ),
            day: cn(
              "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-neutral-100 rounded-md"
            ),
            day_selected:
              "bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white",
            day_today: "bg-neutral-100",
            day_outside:
              "day-outside text-neutral-400 opacity-50 aria-selected:bg-neutral-100/50 aria-selected:text-neutral-500 aria-selected:opacity-30",
            day_disabled: "text-neutral-400 opacity-50",
            day_range_middle:
              "aria-selected:bg-neutral-100 aria-selected:text-neutral-900",
            day_hidden: "invisible",
          }}
        />
      </div>
    </Popover>
  );
} 