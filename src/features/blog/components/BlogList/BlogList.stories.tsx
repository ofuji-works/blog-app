import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BlogList } from './BlogList'

const meta: ComponentMeta<typeof BlogList> = {
  title: 'blogs/BlogList',
  component: BlogList,
}

const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />

export const Default = Template.bind({})

Default.args = {
  items: [
    {
      title: 'カスタムフックの活用事例について',
      body: 'みなさんはReact Hooksをカスタムで作成したことはありますでしょうか？私のかんがえるよく使うカスタムフックの事例をまとめてみました。ぜひ参考にしてみてください。',
      tags: ['React', 'React Native', 'React Testing Library', 'Redux', 'Recoil', 'React Hooks'],
      datetime: '2022.03.25',
      href: '#',
    },
    {
      title: 'カスタムフックの活用事例について',
      body: 'みなさんはReact Hooksをカスタムで作成したことはありますでしょうか？私のかんがえるよく使うカスタムフックの事例をまとめてみました。ぜひ参考にしてみてください。',
      tags: ['React', 'React Native', 'React Testing Library', 'Redux', 'Recoil', 'React Hooks'],
      datetime: '2022.03.25',
      href: '#',
    },
    {
      title: 'カスタムフックの活用事例について',
      body: 'みなさんはReact Hooksをカスタムで作成したことはありますでしょうか？私のかんがえるよく使うカスタムフックの事例をまとめてみました。ぜひ参考にしてみてください。',
      tags: ['React', 'React Native', 'React Testing Library', 'Redux', 'Recoil', 'React Hooks'],
      datetime: '2022.03.25',
      href: '#',
    },
  ],
}

export default meta
