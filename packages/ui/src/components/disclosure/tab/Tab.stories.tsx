import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Tabs, TabList, Tab } from './Tab'

const TabTemplate = () => {
  return (
    <Tabs>
      <TabList>
        <Tab></Tab>
      </TabList>
    </Tabs>
  )
}

const meta: ComponentMeta<typeof TabTemplate> = {
  title: 'Tab',
  component: TabTemplate,
}

export const Primary: ComponentStoryObj<typeof TabTemplate> = {
  name: 'Tab',
}

export default meta
