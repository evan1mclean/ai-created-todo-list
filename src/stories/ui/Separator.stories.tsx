import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/Separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    className: 'w-64',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col space-y-4 w-64">
        <div className="text-sm text-neutral-500">Section Above</div>
        <Story />
        <div className="text-sm text-neutral-500">Section Below</div>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'h-16',
  },
  decorators: [
    (Story) => (
      <div className="flex items-center space-x-4 h-16">
        <div className="text-sm text-neutral-500">Left</div>
        <Story />
        <div className="text-sm text-neutral-500">Right</div>
      </div>
    ),
  ],
};

export const CustomColor: Story = {
  args: {
    orientation: 'horizontal',
    className: 'w-64 bg-blue-500',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col space-y-4 w-64">
        <div className="text-sm text-neutral-500">Custom Color</div>
        <Story />
        <div className="text-sm text-neutral-500">Below</div>
      </div>
    ),
  ],
};

export const CustomThickness: Story = {
  args: {
    orientation: 'horizontal',
    className: 'w-64 h-[2px]',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col space-y-4 w-64">
        <div className="text-sm text-neutral-500">Thicker Line</div>
        <Story />
        <div className="text-sm text-neutral-500">Below</div>
      </div>
    ),
  ],
}; 