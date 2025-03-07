import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  CommandPalette,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '@/components/ui/CommandPalette';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'UI/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof CommandPalette>;

// Create a wrapper component for the interactive story
const CommandPaletteDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>New Task</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>New Project</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>New Tag</span>
            <CommandShortcut>⌘T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandPalette>
    </div>
  );
};

export const Default: Story = {
  render: () => <CommandPaletteDemo />,
};

// Create a wrapper component for the interactive story with more options
const CommandPaletteWithTasks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)}>Open Task Commands</Button>
      <CommandPalette 
        open={open} 
        onOpenChange={setOpen}
        placeholder="Search tasks or use commands..."
      >
        <CommandGroup heading="Recent Tasks">
          <CommandItem>
            <span>Update landing page design</span>
          </CommandItem>
          <CommandItem>
            <span>Fix navigation bug</span>
          </CommandItem>
          <CommandItem>
            <span>Prepare presentation for client</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <span>Create new task</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Assign to me</span>
            <CommandShortcut>⌘A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Mark as completed</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Set priority</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Views">
          <CommandItem>
            <span>Today</span>
          </CommandItem>
          <CommandItem>
            <span>Upcoming</span>
          </CommandItem>
          <CommandItem>
            <span>Completed</span>
          </CommandItem>
        </CommandGroup>
      </CommandPalette>
    </div>
  );
};

export const TaskCommands: Story = {
  render: () => <CommandPaletteWithTasks />,
}; 