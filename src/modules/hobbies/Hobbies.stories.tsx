import type { Meta, StoryObj } from '@storybook/react';
import { Hobbies } from './Hobbies';
import { MemoryRouter } from 'react-router-dom'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Hobbies',
  component: Hobbies,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  decorators: (Story) => {
    return (
    <MemoryRouter>
        <Story />
    </MemoryRouter>
    )
  }
} satisfies Meta<typeof Hobbies>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Unverified: Story = {
  args: {
    title: 'Kyles title',
    description: 'asdfghjkl',
    imgSrc: 'https://picsum.photos/200'
  },
};

export const Verified: Story = {
    args: {
      title: 'Kyles title',
      description: 'asdfghjkl',
      imgSrc: 'https://picsum.photos/200',
      verified: true
    },
  };