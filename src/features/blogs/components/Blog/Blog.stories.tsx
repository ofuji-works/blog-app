import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Blog } from './Blog'

const meta: ComponentMeta<typeof Blog> = {
  title: 'Blog',
  component: Blog,
}

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'カスタムフックの活用事例について',
  body: 'みなさんはReact Hooksをカスタムで作成したことはありますでしょうか？私のかんがえるよく使うカスタムフックの事例をまとめてみました。ぜひ参考にしてみてください。',
  tags: ['React', 'React Native', 'React Testing Library', 'Redux', 'Recoil', 'React Hooks'],
  datetime: '2022.03.25',
  href: '#',
}

export default meta
