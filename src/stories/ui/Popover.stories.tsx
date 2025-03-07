import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const meta = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: <div className="text-sm">This is a popover content.</div>,
  },
};

export const WithForm: Story = {
  args: {
    trigger: <Button>Edit Profile</Button>,
    children: (
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-neutral-500">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="width" className="text-sm">
              Width
            </label>
            <Input
              id="width"
              defaultValue="100%"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxWidth" className="text-sm">
              Max. width
            </label>
            <Input
              id="maxWidth"
              defaultValue="300px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="height" className="text-sm">
              Height
            </label>
            <Input
              id="height"
              defaultValue="25px"
              className="col-span-2 h-8"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <label htmlFor="maxHeight" className="text-sm">
              Max. height
            </label>
            <Input
              id="maxHeight"
              defaultValue="none"
              className="col-span-2 h-8"
            />
          </div>
        </div>
      </div>
    ),
  },
};

export const WithAlignment: Story = {
  args: {
    trigger: <Button>Open Aligned Popover</Button>,
    align: "start",
    children: <div className="text-sm">This popover is aligned to the start.</div>,
  },
}; 