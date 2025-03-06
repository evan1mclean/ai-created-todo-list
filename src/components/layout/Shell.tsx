"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode;
}

const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
  ({ className, children, sidebar, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-screen overflow-hidden bg-white", className)}
        {...props}
      >
        {/* Sidebar */}
        {sidebar && (
          <div className="w-64 flex-shrink-0 border-r border-neutral-200 bg-white">
            {sidebar}
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full">{children}</div>
        </main>
      </div>
    );
  }
);

Shell.displayName = "Shell";

export { Shell }; 