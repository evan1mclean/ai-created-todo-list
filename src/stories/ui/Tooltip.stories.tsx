import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/ui/Tooltip';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'This is a tooltip',
  },
};

export const TopPlacement: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'Tooltip on top',
    side: 'top',
  },
};

export const BottomPlacement: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'Tooltip on bottom',
    side: 'bottom',
  },
};

export const LeftPlacement: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'Tooltip on left',
    side: 'left',
  },
};

export const RightPlacement: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'Tooltip on right',
    side: 'right',
  },
};

export const WithDelay: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: 'Delayed tooltip (500ms)',
    delayDuration: 500,
  },
};

export const WithHTML: Story = {
  args: {
    children: <Button>Hover Me</Button>,
    content: (
      <div className="flex flex-col gap-1">
        <p className="font-bold">Rich Tooltip</p>
        <p>This tooltip contains HTML content</p>
      </div>
    ),
  },
}; 