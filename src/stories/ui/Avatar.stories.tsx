import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/Avatar';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/1?v=4',
    alt: 'User avatar',
    size: 'md',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
  },
};

export const WithStatus: Story = {
  args: {
    fallback: 'JD',
    showStatus: true,
    isOnline: true,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    fallback: 'JD',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    fallback: 'JD',
    size: 'lg',
  },
};

export const Offline: Story = {
  args: {
    fallback: 'JD',
    showStatus: true,
    isOnline: false,
    size: 'md',
  },
}; 