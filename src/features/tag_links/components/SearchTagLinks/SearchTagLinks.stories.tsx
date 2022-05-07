import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchTagLinks } from './SearchTagLinks'

const meta: ComponentMeta<typeof SearchTagLinks> = {
  title: 'SearchTagLinks',
  component: SearchTagLinks,
}

const Template: ComponentStory<typeof SearchTagLinks> = () => <SearchTagLinks />

export const Primary = Template.bind({})

Primary.args = {}

export default meta
