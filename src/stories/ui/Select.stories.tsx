import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from '@/components/ui/Select';
import { useState } from 'react';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    children: (
      <>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </>
    ),
  },
};

export const WithGroups: Story = {
  args: {
    placeholder: 'Select a fruit',
    children: (
      <>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Select an option',
    disabled: true,
    children: (
      <>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </>
    ),
  },
};

export const DisabledOptions: Story = {
  args: {
    placeholder: 'Select an option',
    children: (
      <>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2" disabled>Option 2 (Disabled)</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </>
    ),
  },
};

// Create a wrapper component for the interactive story
const InteractiveSelect = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="w-72">
      <p className="mb-2 text-sm">Selected value: {value || 'None'}</p>
      <Select 
        placeholder="Select a priority"
        value={value} 
        onValueChange={setValue}
      >
        <SelectItem value="low">Low Priority</SelectItem>
        <SelectItem value="medium">Medium Priority</SelectItem>
        <SelectItem value="high">High Priority</SelectItem>
        <SelectItem value="urgent">Urgent</SelectItem>
      </Select>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSelect />,
}; 