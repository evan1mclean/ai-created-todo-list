import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useState, useEffect } from 'react';

const meta = {
  title: 'UI/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 50,
    className: 'w-64',
  },
};

export const Small: Story = {
  args: {
    value: 30,
    size: 'sm',
    className: 'w-64',
  },
};

export const Large: Story = {
  args: {
    value: 70,
    size: 'lg',
    className: 'w-64',
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    className: 'w-64',
  },
};

export const Warning: Story = {
  args: {
    value: 60,
    variant: 'warning',
    className: 'w-64',
  },
};

export const Danger: Story = {
  args: {
    value: 20,
    variant: 'danger',
    className: 'w-64',
  },
};

export const WithValue: Story = {
  args: {
    value: 75,
    showValue: true,
    className: 'w-64',
  },
};

export const WithCustomLabel: Story = {
  args: {
    value: 3,
    max: 5,
    showValue: true,
    valueLabel: '3 of 5 tasks completed',
    className: 'w-64',
  },
};

export const Animated: Story = {
  args: {
    value: 0,
    animated: true,
    className: 'w-64',
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [progress, setProgress] = useState(0);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 5;
        });
      }, 500);
      
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className="w-64 space-y-4">
        <ProgressBar value={progress} showValue />
        <div className="text-sm text-neutral-500">
          Loading... {progress}%
        </div>
      </div>
    );
  },
}; 