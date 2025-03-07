import type { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from '@/components/ui/ContextMenu';
import { Card } from '@/components/ui/Card';
import { useState } from 'react';

const meta = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    children: (
      <div className="border border-dashed border-neutral-300 rounded-md p-12 text-center text-sm text-neutral-500">
        Right click here
      </div>
    ),
    content: (
      <>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Archive</ContextMenuItem>
        <ContextMenuItem className="text-red-500">Delete</ContextMenuItem>
      </>
    ),
  },
};

export const WithCard: Story = {
  args: {
    children: (
      <Card className="p-4 w-64">
        <h3 className="text-lg font-medium">Project Title</h3>
        <p className="text-sm text-neutral-500">
          Right click on this card to see the context menu.
        </p>
      </Card>
    ),
    content: (
      <>
        <ContextMenuItem>View Project</ContextMenuItem>
        <ContextMenuItem>Edit Project</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Share</ContextMenuItem>
        <ContextMenuItem>Export</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-500">Delete</ContextMenuItem>
      </>
    ),
  },
};

export const WithSubmenus: Story = {
  args: {
    children: (
      <div className="border border-dashed border-neutral-300 rounded-md p-12 text-center text-sm text-neutral-500">
        Right click here
      </div>
    ),
    content: (
      <>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Print...</ContextMenuItem>
      </>
    ),
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showBookmarks, setShowBookmarks] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showFullUrls, setShowFullUrls] = useState(false);
    
    return (
      <ContextMenu
        content={
          <>
            <ContextMenuLabel>Preferences</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem 
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem 
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Settings</ContextMenuItem>
          </>
        }
      >
        <div className="border border-dashed border-neutral-300 rounded-md p-12 text-center text-sm text-neutral-500">
          Right click here
        </div>
      </ContextMenu>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [priority, setPriority] = useState("medium");
    
    return (
      <ContextMenu
        content={
          <>
            <ContextMenuLabel>Task Priority</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value={priority} onValueChange={setPriority}>
              <ContextMenuRadioItem value="low">Low</ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
              <ContextMenuRadioItem value="high">High</ContextMenuRadioItem>
              <ContextMenuRadioItem value="urgent">Urgent</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuItem>Save Changes</ContextMenuItem>
          </>
        }
      >
        <div className="border border-dashed border-neutral-300 rounded-md p-12 text-center text-sm text-neutral-500">
          Right click here
        </div>
      </ContextMenu>
    );
  },
}; 