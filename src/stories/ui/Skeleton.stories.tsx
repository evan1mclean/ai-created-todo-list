import type { Meta, StoryObj } from '@storybook/react';
import {
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  SkeletonButton,
  SkeletonCardContent,
} from '@/components/ui/Skeleton';
import { Card as CardComponent } from '@/components/ui/Card';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'w-64 h-16',
  },
};

export const Circle: Story = {
  args: {
    variant: 'circle',
    width: 50,
    height: 50,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    className: 'w-64',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    className: 'w-24',
  },
};

export const CardSkeleton: Story = {
  args: {
    variant: 'card',
    className: 'w-64',
  },
};

export const NonAnimated: Story = {
  args: {
    className: 'w-64 h-16',
    animated: false,
  },
};

export const TextGroup: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <SkeletonText className="h-6 w-3/4" />
      <SkeletonText />
      <SkeletonText />
      <SkeletonText className="w-4/5" />
    </div>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <SkeletonCircle size={50} />
      <div className="space-y-2">
        <SkeletonText className="h-5 w-32" />
        <SkeletonText className="h-4 w-24" />
      </div>
    </div>
  ),
};

export const CardWithContent: Story = {
  render: () => (
    <CardComponent className="w-80 p-4">
      <SkeletonCardContent />
    </CardComponent>
  ),
};

export const TodoList: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <CardComponent key={index} className="p-4">
          <div className="flex items-center space-x-3">
            <SkeletonCircle size={24} />
            <div className="flex-1">
              <SkeletonText className="h-4 w-3/4" />
            </div>
            <SkeletonButton className="w-16 h-8" />
          </div>
        </CardComponent>
      ))}
    </div>
  ),
}; 