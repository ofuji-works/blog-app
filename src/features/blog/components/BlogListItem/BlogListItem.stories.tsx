import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BlogListItem } from './BlogListItem'

const meta: ComponentMeta<typeof BlogListItem> = {
  title: 'Blogs/Blog',
  component: BlogListItem,
}

const Template: ComponentStory<typeof BlogListItem> = (args) => <BlogListItem {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'カスタムフックの活用事例について',
  body: 'みなさんはReact Hooksをカスタムで作成したことはありますでしょうか？私のかんがえるよく使うカスタムフックの事例をまとめてみました。ぜひ参考にしてみてください。',
  tags: ['React', 'React Native', 'React Testing Library', 'Redux', 'Recoil', 'React Hooks'],
  datetime: '2022.03.25',
  href: '#',
}

export default meta
