"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, title, children, isCollapsed = false, onToggle, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="text-sm font-medium text-neutral-900">{title}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="h-6 w-6"
          >
            <span className="sr-only">
              {isCollapsed ? "Expand section" : "Collapse section"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "h-4 w-4 transition-transform",
                isCollapsed ? "-rotate-90" : ""
              )}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Button>
        </div>
        {!isCollapsed && (
          <div className="space-y-1 px-2">{children}</div>
        )}
      </div>
    );
  }
);

SidebarSection.displayName = "SidebarSection";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  activeUsers?: Array<{
    id: string;
    name: string;
    avatar?: string;
    isOnline?: boolean;
  }>;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, activeUsers = [], ...props }, ref) => {
    const [collapsedSections, setCollapsedSections] = React.useState<{
      [key: string]: boolean;
    }>({});

    const toggleSection = (section: string) => {
      setCollapsedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };

    return (
      <div className="flex h-full">
        {/* User avatars column */}
        <div className="flex w-14 flex-col items-center gap-2 border-r border-neutral-200 py-4">
          {activeUsers.map((user) => (
            <div
              key={user.id}
              className="group relative flex cursor-pointer items-center rounded-lg p-1 hover:bg-neutral-50"
            >
              <Avatar
                src={user.avatar}
                fallback={user.name.slice(0, 2)}
                showStatus
                isOnline={user.isOnline}
                size="sm"
              />
              <span className="absolute left-12 z-50 ml-2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {user.name}
              </span>
            </div>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="mt-2 h-6 w-6"
          >
            <span className="sr-only">Add team member</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </Button>
        </div>

        {/* Main sidebar content */}
        <div
          ref={ref}
          className={cn("flex flex-1 flex-col gap-4 py-4", className)}
          {...props}
        >
          {/* Sections */}
          <div className="space-y-4">
            <SidebarSection
              title="This week"
              isCollapsed={collapsedSections["this-week"]}
              onToggle={() => toggleSection("this-week")}
            >
              {/* Todo items will go here */}
            </SidebarSection>

            <SidebarSection
              title="This month"
              isCollapsed={collapsedSections["this-month"]}
              onToggle={() => toggleSection("this-month")}
            >
              {/* Todo items will go here */}
            </SidebarSection>

            <SidebarSection
              title="Personal"
              isCollapsed={collapsedSections["personal"]}
              onToggle={() => toggleSection("personal")}
            >
              {/* Todo items will go here */}
            </SidebarSection>

            <SidebarSection
              title="Books to read"
              isCollapsed={collapsedSections["books"]}
              onToggle={() => toggleSection("books")}
            >
              {/* Todo items will go here */}
            </SidebarSection>
          </div>

          {/* Professional plan */}
          <div className="mt-auto px-4">
            <div className="rounded-lg bg-neutral-50 p-4">
              <h3 className="font-medium">Professional</h3>
              <p className="text-2xl font-bold">$10</p>
              <p className="text-xs text-neutral-500">per user per month</p>
              <div className="mt-2 space-y-2 text-sm text-neutral-600">
                <p>— Unlimited history</p>
                <p>— Unlimited share links</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar, SidebarSection }; 