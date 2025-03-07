"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circle" | "card" | "text" | "button";
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "default",
      width,
      height,
      animated = true,
      ...props
    },
    ref
  ) => {
    // Determine the styles based on the variant
    const getVariantStyles = () => {
      switch (variant) {
        case "circle":
          return "rounded-full";
        case "card":
          return "rounded-lg h-40";
        case "text":
          return "h-4 w-full rounded-md";
        case "button":
          return "h-10 rounded-md";
        default:
          return "rounded-md";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-neutral-200",
          animated && "animate-pulse",
          getVariantStyles(),
          className
        )}
        style={{
          width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
          height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : undefined,
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

// Predefined skeleton components
const SkeletonText = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Skeleton variant="text" className={cn("my-2", className)} {...props} />
);

const SkeletonCircle = ({
  size = 40,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: number }) => (
  <Skeleton
    variant="circle"
    width={size}
    height={size}
    className={className}
    {...props}
  />
);

const SkeletonButton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Skeleton variant="button" className={cn("w-24", className)} {...props} />
);

const SkeletonCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Skeleton variant="card" className={cn("w-full", className)} {...props} />
);

// Skeleton for a typical card with title, description, and action
const SkeletonCardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-3", className)} {...props}>
    <SkeletonText className="h-5 w-2/3" />
    <SkeletonText className="h-4 w-full" />
    <SkeletonText className="h-4 w-full" />
    <SkeletonText className="h-4 w-4/5" />
    <div className="flex justify-end">
      <SkeletonButton />
    </div>
  </div>
);

export {
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  SkeletonButton,
  SkeletonCard,
  SkeletonCardContent,
}; 