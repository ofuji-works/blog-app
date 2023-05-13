import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Body } from './Body'

const meta: ComponentMeta<typeof Body> = {
  title: 'features/blog/Body',
  component: Body,
}

export default meta

type Story = ComponentStoryObj<typeof Body>

export const Base: Story = {
  args: {
    nodes: [
      {
        nodeType: 'heading1',
        text: 'ここにタイトルが入ります',
      },
      {
        nodeType: 'heading2',
        text: 'ここにタイトルが入ります',
      },
      {
        nodeType: 'ul',
        contents: [
          {
            nodeType: 'li',
            text: 'リスト1',
          },
          {
            nodeType: 'li',
            text: 'リスト2',
          },
          {
            nodeType: 'li',
            text: 'リスト3',
          },
        ],
      },
      {
        nodeType: 'ul',
        contents: [],
      },
    ],
  },
}
