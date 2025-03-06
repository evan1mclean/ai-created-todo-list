"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  showStatus?: boolean;
  isOnline?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", showStatus, isOnline, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    const sizeClasses = {
      sm: "h-6 w-6 text-xs",
      md: "h-8 w-8 text-sm",
      lg: "h-10 w-10 text-base",
    };

    return (
      <div className="relative inline-block" ref={ref} {...props}>
        <div
          className={cn(
            "relative flex shrink-0 overflow-hidden rounded-full",
            sizeClasses[size],
            className
          )}
        >
          {src && !hasError ? (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center bg-purple-100 font-medium text-purple-700",
                className
              )}
            >
              {fallback?.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        {showStatus && (
          <span
            className={cn(
              "absolute right-0 top-0 block h-2.5 w-2.5 rounded-full border-2 border-white",
              isOnline ? "bg-green-500" : "bg-neutral-300"
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar }; 