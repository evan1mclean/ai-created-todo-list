import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsRoot, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { Card } from '@/components/ui/Card';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      {
        value: 'account',
        label: 'Account',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-neutral-500">
              Manage your account settings and preferences.
            </p>
          </div>
        ),
      },
      {
        value: 'password',
        label: 'Password',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-neutral-500">
              Change your password here.
            </p>
          </div>
        ),
      },
      {
        value: 'notifications',
        label: 'Notifications',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-sm text-neutral-500">
              Configure how you receive notifications.
            </p>
          </div>
        ),
      },
    ],
    defaultValue: 'account',
    className: 'w-[400px]',
  },
};

export const WithCards: Story = {
  args: {
    items: [
      {
        value: 'today',
        label: 'Today',
        content: (
          <Card className="p-4">
            <h3 className="text-lg font-medium">Today&apos;s Tasks</h3>
            <p className="text-sm text-neutral-500">
              You have 5 tasks to complete today.
            </p>
          </Card>
        ),
      },
      {
        value: 'upcoming',
        label: 'Upcoming',
        content: (
          <Card className="p-4">
            <h3 className="text-lg font-medium">Upcoming Tasks</h3>
            <p className="text-sm text-neutral-500">
              You have 12 tasks scheduled for the next 7 days.
            </p>
          </Card>
        ),
      },
      {
        value: 'completed',
        label: 'Completed',
        content: (
          <Card className="p-4">
            <h3 className="text-lg font-medium">Completed Tasks</h3>
            <p className="text-sm text-neutral-500">
              You have completed 8 tasks this week.
            </p>
          </Card>
        ),
      },
    ],
    defaultValue: 'today',
    className: 'w-[400px]',
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      {
        value: 'active',
        label: 'Active',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Active Projects</h3>
            <p className="text-sm text-neutral-500">
              You have 3 active projects.
            </p>
          </div>
        ),
      },
      {
        value: 'archived',
        label: 'Archived',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Archived Projects</h3>
            <p className="text-sm text-neutral-500">
              You have 2 archived projects.
            </p>
          </div>
        ),
      },
      {
        value: 'deleted',
        label: 'Deleted',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-medium">Deleted Projects</h3>
            <p className="text-sm text-neutral-500">
              You have no deleted projects.
            </p>
          </div>
        ),
        disabled: true,
      },
    ],
    defaultValue: 'active',
    className: 'w-[400px]',
  },
};

export const CustomTabs: Story = {
  render: () => (
    <TabsRoot defaultValue="tab1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Tab 1 Content</h3>
        <p className="text-sm text-neutral-500">
          This is the content for Tab 1.
        </p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Tab 2 Content</h3>
        <p className="text-sm text-neutral-500">
          This is the content for Tab 2.
        </p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Tab 3 Content</h3>
        <p className="text-sm text-neutral-500">
          This is the content for Tab 3.
        </p>
      </TabsContent>
    </TabsRoot>
  ),
}; 