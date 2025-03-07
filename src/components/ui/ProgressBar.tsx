"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number;
    max?: number;
    variant?: "default" | "success" | "warning" | "danger";
    size?: "default" | "sm" | "lg";
    showValue?: boolean;
    valueLabel?: string;
    animated?: boolean;
  }
>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = "default",
      size = "default",
      showValue = false,
      valueLabel,
      animated = true,
      ...props
    },
    ref
  ) => {
    // Calculate the percentage
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

    // Determine the color based on the variant
    const getVariantStyles = () => {
      switch (variant) {
        case "success":
          return "bg-green-500";
        case "warning":
          return "bg-yellow-500";
        case "danger":
          return "bg-red-500";
        default:
          return "bg-black";
      }
    };

    // Determine the height based on the size
    const getSizeStyles = () => {
      switch (size) {
        case "sm":
          return "h-1";
        case "lg":
          return "h-3";
        default:
          return "h-2";
      }
    };

    return (
      <div className={cn("w-full", className)}>
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-full bg-neutral-200",
            getSizeStyles()
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              "h-full w-full flex-1 transition-all",
              getVariantStyles(),
              animated && "animate-progress-indeterminate"
            )}
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </ProgressPrimitive.Root>
        {showValue && (
          <div className="mt-1 text-xs text-neutral-500">
            {valueLabel ? valueLabel : `${Math.round(percentage)}%`}
          </div>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export { ProgressBar }; 