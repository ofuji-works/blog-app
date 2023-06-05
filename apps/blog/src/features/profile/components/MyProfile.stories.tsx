import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MyProfile } from './MyProfile'

const meta: ComponentMeta<typeof MyProfile> = {
  title: 'features/profile/Profile',
  component: MyProfile,
}

const Template: ComponentStory<typeof MyProfile> = (args) => <MyProfile {...args} />

export const Default = Template.bind({})

export default meta
