import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Share: Story = {
  args: {
    children: 'Share',
    variant: 'default',
  },
};

export const Today: Story = {
  args: {
    children: 'Today',
    variant: 'secondary',
  },
};

export const AddTodo: Story = {
  args: {
    children: '+',
    variant: 'ghost',
    size: 'icon',
  },
};

export const Settings: Story = {
  args: {
    children: '⚙️',
    variant: 'ghost',
    size: 'icon',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const WithIcon: Story = {
  args: {
    size: 'icon',
    children: '+',
  },
}; 