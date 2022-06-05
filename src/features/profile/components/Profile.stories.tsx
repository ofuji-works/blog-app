import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Profile } from './Profile'

const meta: ComponentMeta<typeof Profile> = {
  title: 'Profile/Profile',
  component: Profile,
}

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Test Name',
  role: 'Front-end developer',
  description: `
    javascript / typescript / Node / PHP / React / React Native / Next.js / Vue / Nuxt.js / Angular / laravel
    神戸Sier企業勤務。エンジニア歴3年。
  `,
  sns: [
    { icon: 'twitter', url: '' },
    { icon: 'github', url: '' },
  ],
}

export default meta
