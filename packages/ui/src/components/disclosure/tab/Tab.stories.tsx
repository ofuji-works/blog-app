import { TabPanel, TabPanels } from '@chakra-ui/react'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'

import { Tabs, TabList, Tab } from './Tab'

const TabTemplate = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>タブ1</Tab>
        <Tab>タブ2</Tab>
        <Tab>タブ3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  )
}

const meta: ComponentMeta<typeof TabTemplate> = {
  title: 'disclosure/Tab',
  component: TabTemplate,
}

export const Primary: ComponentStoryObj<typeof TabTemplate> = {
  name: 'Tab',
}

export default meta
