import { Meta, StoryObj } from '@storybook/react';

import Main from '@/components/Main';

const meta = {
  title: 'Components/Main',
  component: Main,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
