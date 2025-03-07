"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-800",
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-purple-100 text-purple-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        outline: "border border-neutral-200 text-neutral-800",
      },
      size: {
        default: "h-6 text-xs",
        sm: "h-5 text-[10px]",
        lg: "h-7 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  removable?: boolean;
  onRemove?: () => void;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, removable, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        <span className="flex items-center gap-1">
          {children}
          {removable && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.();
              }}
              className="ml-1 rounded-full p-0.5 hover:bg-neutral-200 focus:outline-none"
              aria-label="Remove badge"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}
        </span>
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants }; 