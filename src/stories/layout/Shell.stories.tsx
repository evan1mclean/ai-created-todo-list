import type { Meta, StoryObj } from '@storybook/react';
import { Shell } from '@/components/layout/Shell';
import { Sidebar } from '@/components/layout/Sidebar';

const meta = {
  title: 'Layout/Shell',
  component: Shell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Shell>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [
  { id: '1', name: 'John Doe', isOnline: true },
  { id: '2', name: 'Jane Smith', isOnline: true },
  { id: '3', name: 'Bob Johnson', isOnline: false },
];

export const Default: Story = {
  args: {
    sidebar: <Sidebar activeUsers={mockUsers} />,
    children: (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-neutral-600">Main content area</p>
      </div>
    ),
  },
}; 