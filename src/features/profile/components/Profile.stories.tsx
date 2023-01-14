import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Profile } from './Profile'

const meta: ComponentMeta<typeof Profile> = {
  title: 'features/profile/Profile',
  component: Profile,
}

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})

export default meta
