import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@/components/ui/DatePicker';
import { useState } from 'react';

const meta = {
  title: 'UI/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
};

export const WithInitialDate: Story = {
  args: {
    date: new Date(),
    placeholder: 'Select date',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Cannot select date',
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="w-72">
        <p className="mb-2 text-sm">Selected date: {date ? date.toDateString() : 'None'}</p>
        <DatePicker 
          date={date} 
          onDateChange={setDate} 
          placeholder="Select date" 
        />
      </div>
    );
  },
}; 