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
        id: 1,
        elm_type: 'Heading1',
        text: 'ここにタイトルが入ります',
      },
      {
        id: 2,
        elm_type: 'Heading2',
        text: 'ここにタイトルが入ります',
      },
      {
        id: 3,
        elm_type: 'UnorderList',
        contents: [
          {
            id: 4,
            elm_type: 'List',
            text: 'リスト1',
          },
          {
            id: 5,
            elm_type: 'List',
            text: 'リスト2',
          },
          {
            id: 6,
            elm_type: 'List',
            text: 'リスト3',
          },
        ],
      },
      {
        id: 7,
        elm_type: 'UnorderList',
        contents: [],
      },
    ],
  },
}
