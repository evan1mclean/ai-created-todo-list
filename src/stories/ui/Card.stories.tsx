import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const TodoItem: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Design onboarding flow</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">10:00 AM</span>
          </div>
        </CardHeader>
        <CardDescription>
          Create wireframes and user flow for the new onboarding process
        </CardDescription>
        <CardFooter>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
              <span className="text-xs text-purple-700">EV</span>
            </span>
          </div>
        </CardFooter>
      </>
    ),
  },
};

export const ActiveTodoItem: Story = {
  args: {
    variant: "active",
    children: (
      <>
        <CardHeader>
          <CardTitle>Weekly design review</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500">10:02 AM</span>
          </div>
        </CardHeader>
        <CardDescription>
          Review and discuss current design projects with the team
        </CardDescription>
        <CardFooter>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
              <span className="text-xs text-purple-700">EV</span>
            </span>
          </div>
        </CardFooter>
      </>
    ),
  },
}; 