import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import App from './App';

const meta = {
  title: 'Example/App',
  component: App,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {};
