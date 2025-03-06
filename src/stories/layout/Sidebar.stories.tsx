import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/layout/Sidebar';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockUsers = [
  { id: '1', name: 'John Doe', isOnline: true },
  { id: '2', name: 'Jane Smith', isOnline: true },
  { id: '3', name: 'Bob Johnson', isOnline: false },
];

export const Default: Story = {
  args: {
    activeUsers: mockUsers,
    className: 'h-[600px] w-64 border border-neutral-200',
  },
};

export const NoUsers: Story = {
  args: {
    className: 'h-[600px] w-64 border border-neutral-200',
  },
}; 