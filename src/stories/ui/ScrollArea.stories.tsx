import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/ScrollArea';

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export const Vertical: Story = {
  args: {
    className: 'h-72 w-48 rounded-md border border-neutral-200',
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <Story>
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <div key={tag} className="text-sm py-2">
              {tag}
            </div>
          ))}
        </div>
      </Story>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    className: 'h-20 w-96 rounded-md border border-neutral-200',
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <Story>
        <div className="flex p-4">
          {tags.map((tag) => (
            <div key={tag} className="text-sm px-4 py-2 whitespace-nowrap">
              {tag}
            </div>
          ))}
        </div>
      </Story>
    ),
  ],
};

export const Both: Story = {
  args: {
    className: 'h-72 w-96 rounded-md border border-neutral-200',
    orientation: 'both',
  },
  decorators: [
    (Story) => (
      <Story>
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags Grid</h4>
          <div className="grid grid-cols-5 gap-4">
            {tags.map((tag) => (
              <div key={tag} className="text-sm p-4 border rounded-md whitespace-nowrap">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Story>
    ),
  ],
}; 