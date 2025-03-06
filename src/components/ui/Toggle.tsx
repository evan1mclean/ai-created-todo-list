"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative inline-flex">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "peer h-5 w-5 appearance-none rounded-md border border-neutral-200 bg-white transition-all",
            "hover:border-neutral-300",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400",
            "checked:bg-purple-600 checked:border-purple-600",
            className
          )}
          {...props}
        />
        <svg
          className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 opacity-0 peer-checked:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 3L4.5 8.5L2 6" />
        </svg>
      </div>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle }; 